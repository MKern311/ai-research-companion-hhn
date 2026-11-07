"""Build the knowledge base: index.html (one self-contained page) and the Claude Code plugins with one skill per use case.

  python3 build.py            # page + plugins (plugins need Node.js; skipped with a note if it is missing)
Content lives in content/ (use cases as Markdown, see AGENTS.md); code in src/.
"""
import json, pathlib, shutil, subprocess, sys
R = pathlib.Path(__file__).parent
sys.path.insert(0, str(R / 'tools')); import content as C
src = lambda f: (R / 'src' / f).read_text(encoding='utf-8')
cj = lambda f: json.loads((R / 'content' / f).read_text(encoding='utf-8')) if (R / 'content' / f).exists() else None

# use cases: English is the reference; a German file may leave sections out (they fall back to English)
ucs, problems = {'en': {}, 'de': {}}, []
for lang in C.LANGS:
    for f in sorted((R / 'content' / 'usecases' / lang).glob('*.md')):
        try: u = C.parse(f.read_text(encoding='utf-8'), str(f))
        except ValueError as e: problems.append(str(e)); continue
        if u['meta'].get('id') != f.stem: problems.append(f'{f}: id "{u["meta"].get("id")}" does not match the file name')
        ucs[lang][f.stem] = u
for i, u in ucs['de'].items():
    en = ucs['en'].get(i)
    if not en: u['meta'] = {**u['meta']}; ucs['en'][i] = u   # German-only use case: shown in both languages
phases = cj('phases.json'); known = {p['id'] for p in phases}
for i, u in ucs['en'].items():
    if u['meta'].get('phase') not in known: problems.append(f'{i}: unknown phase "{u["meta"].get("phase")}"')
    u['meta'].setdefault('order', 999)
if problems:
    print('Content problems:\n  ' + '\n  '.join(problems)); sys.exit(1)

pack = json.loads((R / 'materials' / 'pack.json').read_text(encoding='utf-8'))
VERSION = 'HHN edition · v2 · ' + __import__('datetime').date.today().strftime('%-d %B %Y')
KB = {'version': VERSION, 'phases': phases, 'ucs': ucs, 'catalogue': cj('catalogue.json'), 'meta': cj('meta.json'),
      'clients': cj('clients.json'), 'connect': cj('connect.json'), 'pack': pack}
FONTS = '''@font-face{font-family:"Geist";src:url("assets/fonts/geist-latin-wght-normal.woff2") format("woff2");font-weight:100 900;font-style:normal;font-display:swap}
@font-face{font-family:"Geist Mono";src:url("assets/fonts/geist-mono-latin-wght-normal.woff2") format("woff2");font-weight:100 900;font-style:normal;font-display:swap}'''
kb_js = json.dumps(KB, ensure_ascii=False).replace('</', '<\\/')
html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Knowledge base: AI use cases along the research process – Heilbronn University of Applied Sciences">
<link rel="icon" href="favicon.ico" sizes="32x32">
<link rel="icon" href="assets/icons/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="assets/icons/apple-touch-icon.png">
<title>AI in the Research Process · HHN</title>
<style>
{FONTS}
{src('style.css')}
</style>
</head>
<body>
{src('body.html')}
<script>window.KB = {kb_js};</script>
<script>
{src('i18n.js')}
{src('export.js')}
{src('app.js')}
</script>
</body>
</html>
"""
(R / 'index.html').write_text(html, encoding='utf-8')
(R / 'dist').mkdir(exist_ok=True)
(R / 'dist' / 'kb.json').write_text(json.dumps(KB, ensure_ascii=False), encoding='utf-8')
print(f'built index.html ({len(html) / 1e6:.1f} MB) · use cases: {len(ucs["en"])} en, {len(ucs["de"])} de')
if shutil.which('node'):
    subprocess.run(['node', str(R / 'tools' / 'build_plugins.js')], check=True)
else:
    print('Node.js not found – plugins/ not rebuilt (the page works without it).')
