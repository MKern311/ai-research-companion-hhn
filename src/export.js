/* Generators for "Bring it into your AI": Agent Skill (SKILL.md), custom-assistant settings, project rules,
   use-case Markdown (same format as content/usecases) and a small ZIP writer.
   Shared by the page and by tools/build_skills.mjs – plain functions, no DOM. */
const EXPORT = (() => {
  const W = {
    en: {goal:'Goal', when:'When to use', proc:'Procedure', rules:'Working rules', prompt:'Starter prompt', check:'Quality check', limits:'Limits',
      concepts:'Key concepts', refs:'Key references', tools:'Tools that help', ownRisk:'Risk', source:'From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences)',
      always:['Never invent sources, quotes, numbers or DOIs; say when you are not sure.', 'Mark clearly what comes from the user’s material and what is your own suggestion.', 'Stop and ask when the material is missing or ambiguous.'],
      role:'You support a researcher with this task:', out:'Work step by step and finish with the quality check.', starterDefault:'Let us start: here is my material.',
      projIntro:'Rules for this project – add this document to the project and start each question with “Follow the rules document”.', files:'Files to add'},
    de: {goal:'Ziel', when:'Wann einsetzen', proc:'Vorgehen', rules:'Arbeitsregeln', prompt:'Startprompt', check:'Prüfung', limits:'Grenzen',
      concepts:'Wichtige Konzepte', refs:'Wichtige Literatur', tools:'Hilfreiche Werkzeuge', ownRisk:'Risiko', source:'Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn)',
      always:['Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.', 'Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.', 'Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.'],
      role:'Sie unterstützen Forschende bei dieser Aufgabe:', out:'Arbeiten Sie Schritt für Schritt und schließen Sie mit der Prüfung ab.', starterDefault:'Los geht’s: Hier ist mein Material.',
      projIntro:'Regeln für dieses Projekt – fügen Sie dieses Dokument dem Projekt hinzu und beginnen Sie jede Frage mit „Folge dem Regeldokument“.', files:'Dateien für das Projekt'}
  };
  const UML = { // use-case file headings (same as tools/content.py)
    en:{problem:'Problem', result:'Result', steps:'Steps', concepts:'Concepts', refs:'References', practice:'Practice exercise', own:'Own material', tech:'Technology', levels:'Levels',
      task:'Task', prompt:'Prompt', check:'Check', attach_note:'Attachment note', bring:'Bring', ownsteps:'Steps', limit:'Limit',
      chat:'Chat', project:'Project / Notebook', assistant:'Custom assistant', automation:'Automation / own code'},
    de:{problem:'Problem', result:'Ergebnis', steps:'Vorgehen', concepts:'Konzepte', refs:'Literatur', practice:'Übung', own:'Mit eigenem Material', tech:'Technik', levels:'Stufen',
      task:'Aufgabe', prompt:'Prompt', check:'Prüfung', attach_note:'Hinweis zu den Dateien', bring:'Mitbringen', ownsteps:'Schritte', limit:'Grenze',
      chat:'Chat', project:'Projekt / Notebook', assistant:'Eigener Assistent', automation:'Automatisierung / eigener Code'}
  };
  const slug = s => String(s).toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/ß/g, 'ss').replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 56).replace(/-+$/, '') || 'use-case';
  const clip = (s, n) => (s = String(s || '').trim()).length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…';
  const list = a => (a || []).map((x, i) => `${i + 1}. ${x}`).join('\n');
  const bullets = a => (a || []).map(x => `- ${x}`).join('\n');
  // quoted starter prompts inside the custom-assistant level text ("…" or „…“)
  const starters = u => { const t = (u.s.levels || {}).assistant || ''; const m = [...t.matchAll(/[“„"]([^”“"]{8,160})[”"“]/g)].map(x => x[1]); return [...new Set(m)].slice(0, 4); };
  const prompt = u => (u.s.own && u.s.own.prompt) || (u.s.practice && u.s.practice.prompt) || '';

  function skillMd(u, lang, extra){
    const w = W[lang] || W.en, s = u.s, own = s.own || {};
    const desc = clip(`${u.summary || u.title} ${lang === 'de' ? 'Einsetzen bei' : 'Use when the user works on'}: ${u.title}.`, 1000).replace(/\s+/g, ' ');
    const L = [`---`, `name: ${slug(u.title)}`, `description: ${JSON.stringify(desc)}`, `---`, '', `# ${u.title}`, '', `> ${w.source}${extra && extra.url ? ` – ${extra.url}` : ''}`, ''];
    L.push(`## ${w.goal}`, '', [u.summary, s.result].filter(Boolean).join('\n\n'), '');
    if (s.problem) L.push(`## ${w.when}`, '', s.problem, '');
    const steps = own.steps && own.steps.length ? own.steps : s.steps;
    if (steps && steps.length) L.push(`## ${w.proc}`, '', list(steps), '');
    L.push(`## ${w.rules}`, '', bullets(w.always.concat(s.levels && s.levels.assistant ? [s.levels.assistant] : [])), '');
    if (prompt(u)) L.push(`## ${w.prompt}`, '', '```text', prompt(u), '```', '');
    const chk = own.check || (s.practice || {}).check; if (chk) L.push(`## ${w.check}`, '', chk, '');
    const lim = [own.limit, extra && extra.riskDef ? `${w.ownRisk}: ${extra.riskDef}` : ''].filter(Boolean); if (lim.length) L.push(`## ${w.limits}`, '', bullets(lim), '');
    if (s.concepts && s.concepts.length) L.push(`## ${w.concepts}`, '', s.concepts.map(([k, v]) => `- **${k}** – ${v}`).join('\n'), '');
    if (s.refs && s.refs.length) L.push(`## ${w.refs}`, '', s.refs.map(r => `- ${r.cite}${r.doi ? ` https://doi.org/${r.doi}` : ''}`).join('\n'), '');
    const tl = [...(u.meta.connect || []), ...(u.meta.tools || [])]; if (tl.length) L.push(`## ${w.tools}`, '', [...new Set(tl)].join(' · '), '');
    return L.join('\n').trim() + '\n';
  }
  function assistant(u, lang){
    const w = W[lang] || W.en, s = u.s, own = s.own || {}, steps = own.steps && own.steps.length ? own.steps : s.steps || [];
    const instr = [`${w.role} ${u.title}.`, u.summary, '', `${w.proc}:`, list(steps), '', `${w.rules}:`, bullets(w.always.concat(own.limit ? [own.limit] : [])),
      own.check ? `\n${w.check}: ${own.check}` : '', '', w.out].join('\n').replace(/\n{3,}/g, '\n\n').trim();
    const st = starters(u);
    return {name:clip(u.title, 30), description:clip(u.summary, 200), instructions:instr.slice(0, 7900), starters:st.length ? st : [clip(prompt(u).split('\n')[0], 160) || w.starterDefault]};
  }
  function projectRules(u, lang){
    const w = W[lang] || W.en, s = u.s, own = s.own || {};
    const L = [`# ${u.title}`, '', w.projIntro, '', `## ${w.goal}`, '', u.summary, ''];
    if (own.steps && own.steps.length) L.push(`## ${w.proc}`, '', list(own.steps), '');
    L.push(`## ${w.rules}`, '', bullets(w.always), '');
    if (own.check) L.push(`## ${w.check}`, '', own.check, '');
    if (own.bring) L.push(`## ${w.files}`, '', own.bring, '');
    return L.join('\n').trim() + '\n';
  }
  // use-case Markdown in the repository format (content/usecases/<lang>/<id>.md)
  function ucMarkdown(u, lang){
    const h = UML[lang] || UML.en, s = u.s, m = u.meta, out = ['---'];
    const keys = ['id','phase','order','title','risk','mode','potential','excursus','capabilities','routes','connect','tools','repos','data','practice_data','practice_ref','author','added'];
    keys.forEach(k => { let v = k === 'title' ? u.title : m[k]; if (v === undefined || v === null || v === '' || (Array.isArray(v) && !v.length)) return; if (Array.isArray(v)) v = v.join('; '); out.push(`${k}: ${v}`); });
    out.push('---', '');
    if (u.summary) out.push(u.summary, '');
    const sec = (k, v) => { if (v) out.push(`## ${h[k]}`, '', v, ''); };
    sec('problem', s.problem); sec('result', s.result);
    if (s.steps && s.steps.length) out.push(`## ${h.steps}`, '', list(s.steps), '');
    if (s.concepts && s.concepts.length) { out.push(`## ${h.concepts}`, ''); s.concepts.forEach(([k, v]) => out.push(`### ${k}`, '', v, '')); }
    if (s.refs && s.refs.length) out.push(`## ${h.refs}`, '', s.refs.map(r => `- ${r.cite}${r.doi ? ` doi:${r.doi}` : ''}`).join('\n'), '');
    const sub = (k, fields) => { const o = s[k]; if (!o || !Object.values(o).some(x => x && x.length)) return; out.push(`## ${h[k]}`, '');
      fields.forEach(([f, hk]) => { const v = o[f]; if (!v || !v.length) return; out.push(`### ${h[hk]}`, ''); out.push(f === 'prompt' ? '```text\n' + v + '\n```' : Array.isArray(v) ? list(v) : v, ''); }); };
    sub('practice', [['task','task'],['prompt','prompt'],['check','check'],['attach_note','attach_note']]);
    sub('own', [['bring','bring'],['steps','ownsteps'],['prompt','prompt'],['check','check'],['limit','limit']]);
    sec('tech', s.tech);
    if (s.levels && Object.values(s.levels).some(Boolean)) { out.push(`## ${h.levels}`, ''); ['chat','project','assistant','automation'].forEach(k => { if (s.levels[k]) out.push(`### ${h[k]}`, '', s.levels[k], ''); }); }
    return out.join('\n').trim() + '\n';
  }
  // ZIP (stored, no compression) – enough for a skill folder
  const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
  const crc32 = b => { let c = 0xFFFFFFFF; for (let i = 0; i < b.length; i++) c = CRC[(c ^ b[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };
  function zip(files){   // files: [{name, text}] -> Uint8Array
    const enc = new TextEncoder(), parts = [], cent = []; let off = 0;
    const u16 = v => [v & 255, (v >>> 8) & 255], u32 = v => [v & 255, (v >>> 8) & 255, (v >>> 16) & 255, (v >>> 24) & 255];
    files.forEach(f => {
      const name = enc.encode(f.name), data = enc.encode(f.text), c = crc32(data);
      const head = [...u32(0x04034b50), ...u16(20), ...u16(0x0800), ...u16(0), ...u16(0), ...u16(0x21), ...u32(c), ...u32(data.length), ...u32(data.length), ...u16(name.length), ...u16(0)];
      parts.push(new Uint8Array(head), name, data);
      cent.push(new Uint8Array([...u32(0x02014b50), ...u16(20), ...u16(20), ...u16(0x0800), ...u16(0), ...u16(0), ...u16(0x21), ...u32(c), ...u32(data.length), ...u32(data.length), ...u16(name.length), ...u16(0), ...u16(0), ...u16(0), ...u16(0), ...u32(0), ...u32(off)]), name);
      off += head.length + name.length + data.length;
    });
    const csize = cent.reduce((n, p) => n + p.length, 0);
    const end = new Uint8Array([...u32(0x06054b50), ...u16(0), ...u16(0), ...u16(files.length), ...u16(files.length), ...u32(csize), ...u32(off), ...u16(0)]);
    const all = [...parts, ...cent, end], out = new Uint8Array(all.reduce((n, p) => n + p.length, 0)); let p = 0; all.forEach(a => { out.set(a, p); p += a.length; });
    return out;
  }
  return {slug, skillMd, assistant, projectRules, ucMarkdown, zip, starters, prompt};
})();
if (typeof module !== 'undefined') module.exports = EXPORT;
