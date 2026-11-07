"""Read and write use-case files (content/usecases/<lang>/<id>.md) – no dependencies.

A use case is one Markdown file per language: a small front matter block (key: value,
lists separated by ";"), a summary paragraph, then fixed sections. Headings may be written
in English or German; both are recognised in every file.
"""
import re

LANGS = ('en', 'de')
# section keys -> heading per language
SEC = {
    'problem':  {'en': 'Problem',            'de': 'Problem'},
    'result':   {'en': 'Result',             'de': 'Ergebnis'},
    'steps':    {'en': 'Steps',              'de': 'Vorgehen'},
    'concepts': {'en': 'Concepts',           'de': 'Konzepte'},
    'refs':     {'en': 'References',         'de': 'Literatur'},
    'practice': {'en': 'Practice exercise',  'de': 'Übung'},
    'own':      {'en': 'Own material',       'de': 'Mit eigenem Material'},
    'tech':     {'en': 'Technology',         'de': 'Technik'},
    'levels':   {'en': 'Levels',             'de': 'Stufen'},
}
SUB = {
    'practice': {'task': {'en': 'Task', 'de': 'Aufgabe'}, 'prompt': {'en': 'Prompt', 'de': 'Prompt'},
                 'check': {'en': 'Check', 'de': 'Prüfung'}, 'attach_note': {'en': 'Attachment note', 'de': 'Hinweis zu den Dateien'}},
    'own':      {'bring': {'en': 'Bring', 'de': 'Mitbringen'}, 'steps': {'en': 'Steps', 'de': 'Schritte'}, 'prompt': {'en': 'Prompt', 'de': 'Prompt'},
                 'check': {'en': 'Check', 'de': 'Prüfung'}, 'limit': {'en': 'Limit', 'de': 'Grenze'}},
    'levels':   {'chat': {'en': 'Chat', 'de': 'Chat'}, 'project': {'en': 'Project / Notebook', 'de': 'Projekt / Notebook'},
                 'assistant': {'en': 'Custom assistant', 'de': 'Eigener Assistent'}, 'automation': {'en': 'Automation / own code', 'de': 'Automatisierung / eigener Code'}},
}
LIST_KEYS = ('capabilities', 'connect', 'tools', 'repos', 'routes', 'data', 'practice_data', 'practice_ref')
INT_KEYS = ('risk', 'potential', 'order')
META_ORDER = ('id', 'phase', 'order', 'title', 'risk', 'mode', 'potential', 'excursus', 'capabilities', 'routes',
              'connect', 'tools', 'repos', 'data', 'practice_data', 'practice_ref', 'author', 'added')

def _key(title, table):
    t = title.strip().lower()
    for k, names in table.items():
        if t in (names['en'].lower(), names['de'].lower()):
            return k
    return None

def _items(block):
    """numbered or bulleted list -> list of strings"""
    out = []
    for line in block.splitlines():
        m = re.match(r'\s*(?:\d+[.)]|[-*])\s+(.*)', line)
        if m: out.append(m.group(1).strip())
        elif line.strip() and out: out[-1] += ' ' + line.strip()
    return out

def _text(block):
    b = block.strip()
    m = re.fullmatch(r'```[a-z]*\n(.*?)\n```', b, re.S)
    return m.group(1) if m else re.sub(r'\s*\n\s*', ' ', b) if '\n\n' not in b else b

def _split(body, level):
    """split at '#'*level headings outside code fences -> [(title, text)], text before the first heading as ('', text)"""
    parts, cur, title, fence = [], [], '', False
    mark = '#' * level + ' '
    for line in body.split('\n'):
        if line.startswith('```'): fence = not fence
        if not fence and line.startswith(mark):
            parts.append((title, '\n'.join(cur))); title, cur = line[len(mark):].strip(), []
        else:
            cur.append(line)
    parts.append((title, '\n'.join(cur)))
    return parts

def parse(text, path=''):
    if not text.startswith('---\n'): raise ValueError(f'{path}: no front matter')
    head, body = text[4:].split('\n---\n', 1)
    meta = {}
    for line in head.splitlines():
        if not line.strip() or line.lstrip().startswith('#'): continue
        k, _, v = line.partition(':'); k, v = k.strip(), v.strip()
        if k in LIST_KEYS: meta[k] = [x.strip() for x in v.split(';') if x.strip()]
        elif k in INT_KEYS: meta[k] = int(v) if v else None
        elif k == 'excursus': meta[k] = v.lower() in ('true', 'yes', 'ja', '1')
        else: meta[k] = v
    uc = {'meta': meta, 'summary': '', 'sections': {}}
    for title, block in _split(body, 2):
        if not title:
            uc['summary'] = _text(block) if block.strip() else ''
            continue
        k = _key(title, SEC)
        if not k: raise ValueError(f'{path}: unknown section "{title}"')
        if k == 'steps': uc['sections'][k] = _items(block)
        elif k == 'refs':
            refs = []
            for it in _items(block):
                m = re.search(r'\s*\bdoi:\s*(\S+)$', it)
                refs.append({'cite': it[:m.start()].strip() if m else it, 'doi': m.group(1) if m else ''})
            uc['sections'][k] = refs
        elif k == 'concepts':
            uc['sections'][k] = [[t, _text(b)] for t, b in _split(block, 3) if t]
        elif k in SUB:
            sub = {}
            for t, b in _split(block, 3):
                if not t: continue
                sk = _key(t, SUB[k])
                if not sk: raise ValueError(f'{path}: unknown subsection "{t}" in {title}')
                sub[sk] = _items(b) if sk == 'steps' else _text(b)
            uc['sections'][k] = sub
        else:
            uc['sections'][k] = _text(block)
    return uc

def write(uc, lang):
    m, s = uc['meta'], uc['sections']
    out = ['---']
    for k in META_ORDER:
        if k not in m or m[k] in (None, '', []) and k not in ('id', 'phase', 'title'): continue
        v = m[k]
        if isinstance(v, list): v = '; '.join(v)
        elif isinstance(v, bool): v = 'true' if v else 'false'
        out.append(f'{k}: {v}')
    out += ['---', '']
    if uc.get('summary'): out += [uc['summary'], '']
    H = lambda k: SEC[k][lang]
    fence = lambda t: ['```text', t, '```']
    for k in ('problem', 'result'):
        if s.get(k): out += [f'## {H(k)}', '', s[k], '']
    if s.get('steps'): out += [f'## {H("steps")}', ''] + [f'{i+1}. {x}' for i, x in enumerate(s['steps'])] + ['']
    if s.get('concepts'):
        out += [f'## {H("concepts")}', '']
        for t, d in s['concepts']: out += [f'### {t}', '', d, '']
    if s.get('refs'): out += [f'## {H("refs")}', ''] + [f'- {r["cite"]}' + (f' doi:{r["doi"]}' if r.get('doi') else '') for r in s['refs']] + ['']
    for k in ('practice', 'own'):
        if not s.get(k): continue
        out += [f'## {H(k)}', '']
        for sk, names in SUB[k].items():
            v = s[k].get(sk)
            if not v: continue
            out += [f'### {names[lang]}', '']
            out += (fence(v) if sk == 'prompt' else [f'{i+1}. {x}' for i, x in enumerate(v)] if sk == 'steps' else [v]) + ['']
    if s.get('tech'): out += [f'## {H("tech")}', '', s['tech'], '']
    if s.get('levels'):
        out += [f'## {H("levels")}', '']
        for sk, names in SUB['levels'].items():
            if s['levels'].get(sk): out += [f'### {names[lang]}', '', s['levels'][sk], '']
    return '\n'.join(out).rstrip() + '\n'
