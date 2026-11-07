/* AI in the Research Process – knowledge base (static page, HHN edition)
   Views: start · library · use case · my collection · editor · bring into your AI (setup) · tools · practice data.
   All content comes from window.KB (built from content/); everything the user does stays in localStorage. */
'use strict';
const KB = window.KB;
const REPO = 'https://github.com/MKern311/ai-research-companion-hhn';
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const toast = msg => { const el = $('#toast'); el.textContent = msg; el.classList.add('show'); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove('show'), 2600); };

/* ---------- store (this browser only) ---------- */
const KEY = 'airp-kb-v1';
let store = {r:{}, own:[], lang:'', app:''};
try { store = Object.assign(store, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch(e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch(e) {} };
const rOf = id => store.r[id] || {};
const rSet = id => (store.r[id] = store.r[id] || {});
const rated = r => !!(r.n && r.u);
const inColl = id => { const r = rOf(id); return !!(r.f || rated(r) || r.o || r.note || r.x || r.c); };

/* ---------- language ---------- */
let lang = store.lang || ((navigator.language || 'en').toLowerCase().startsWith('de') ? 'de' : 'en');
const t = (k, ...a) => { let s = (I18N[lang] && I18N[lang][k]) ?? I18N.en[k] ?? k; a.forEach((v, i) => { s = s.split('{' + i + '}').join(v); }); return s; };
const L = o => o == null ? '' : (typeof o === 'object' && !Array.isArray(o) && ('en' in o || 'de' in o)) ? (o[lang] ?? o.en) : o;

/* ---------- content access ---------- */
const PHASES = KB.phases;
const PH = Object.fromEntries(PHASES.map(p => [p.id, p]));
const phName = id => PH[id] ? L(PH[id]).name : id;
const phShort = id => PH[id] ? L(PH[id]).short : id;
const SEC_KEYS = ['problem','result','steps','concepts','refs','practice','own','tech','levels'];
const filled = v => !!(v && (Array.isArray(v) ? v.length : typeof v === 'object' ? Object.keys(v).length : v));
function ucFrom(id){
  const own = store.own.find(o => o.id === id);
  if (own) return {id, own:true, meta:own.meta, title:own.title, summary:own.summary, s:own.s, lang:own.lang, textLang:own.lang};
  const en = KB.ucs.en[id]; if (!en) return null;
  const de = lang === 'de' ? KB.ucs.de[id] : null, src = de || en, s = {};
  SEC_KEYS.forEach(k => { s[k] = filled(src.sections[k]) ? src.sections[k] : en.sections[k]; });
  return {id, own:false, meta:en.meta, title:src.meta.title || en.meta.title, summary:src.summary || en.summary, s, textLang:de ? 'de' : 'en'};
}
const ALL_IDS = PHASES.flatMap(p => Object.values(KB.ucs.en).filter(u => u.meta.phase === p.id).sort((a, b) => a.meta.order - b.meta.order).map(u => u.meta.id));
const allUcs = () => ALL_IDS.concat(store.own.map(o => o.id)).map(ucFrom).filter(Boolean);
const riskLabel = k => L(KB.meta.risk[k] && KB.meta.risk[k].label);
const riskDef = k => L(KB.meta.risk[k] && KB.meta.risk[k].def);
const LV = KB.meta.levels;   // chat, project, assistant, automation
const CLIENTS = (KB.clients && KB.clients.clients) || [];
const client = id => CLIENTS.find(c => c.id === id);
const CAT = KB.catalogue;
const TOOL = Object.fromEntries(CAT.tools.map(x => [x.n, x]));
const toolUrl = n => TOOL[n] && TOOL[n].url ? 'https://' + TOOL[n].url.replace(/^https?:\/\//, '') : null;
const CON = (KB.connect && KB.connect.mcp) || {};
const REPOINFO = (KB.connect && KB.connect.repos) || {};
const note2 = d => d ? L({en:d.note_en, de:d.note_de || d.note_en}) : '';

/* ---------- router: #/ · #/library · #/uc/<id> · #/collection · #/new · #/edit/<id> · #/setup[/<client>] · #/tools · #/data ---------- */
const ui = {q:'', phase:'', risk:'', only:'', mode:'practice', wiz:null, toolPhase:'', toolMcp:'', dupFrom:null};
const route = () => { const h = location.hash.replace(/^#\/?/, '').split('/'); return {v:h[0] || 'start', a:decodeURIComponent(h[1] || '')}; };
const go = h => { if (location.hash === h) render(); else location.hash = h; };
window.addEventListener('hashchange', () => { render(); window.scrollTo({top:0}); });

/* ---------- header ---------- */
const NAV = [['start','#/'],['library','#/library'],['collection','#/collection'],['setup','#/setup'],['tools','#/tools'],['data','#/data']];
const countColl = () => allUcs().filter(u => inColl(u.id) || u.own).length;
function renderHeader(){
  const v = route().v, cur = v === 'uc' ? 'library' : v === 'new' || v === 'edit' ? 'collection' : v;
  const n = countColl();
  $('#nav').innerHTML = NAV.map(([k, h]) => `<a href="${h}"${k === cur ? ' aria-current="page"' : ''}>${t('nav.' + k)}${k === 'collection' && n ? ` <span class="nbadge">${n}</span>` : ''}</a>`).join('');
  $('#langSw').innerHTML = ['en','de'].map(l => `<button type="button" data-lang="${l}" aria-pressed="${l === lang}" lang="${l}" title="${l === 'en' ? 'English' : 'Deutsch'}">${l.toUpperCase()}</button>`).join('');
  $('#brandTitle').textContent = t('app.title');
  document.documentElement.lang = lang;
  $('#foot').innerHTML = `<span>${t('foot.by')} · <a href="${REPO}" target="_blank" rel="noopener">GitHub</a> · ${esc(KB.version)}</span><span>${t('foot.local')}</span>`;
}

/* ---------- shared pieces ---------- */
const kicker = s => `<span class="kicker">${s}</span>`;
const pill = (cls, s) => `<span class="pill ${cls}">${s}</span>`;
const OUT = {y:['out.y','#2F6410'], p:['out.p','#7A4700'], n:['out.n','#5F5F5F']};
function ucPills(u){
  const r = rOf(u.id), p = [];
  if (u.own) p.push(pill('own', t('pill.own')));
  if (u.meta.excursus) p.push(pill('ex', t('pill.ex')));
  if (r.f) p.push(pill('star', '★ ' + t('pill.star')));
  if (r.x) p.push(pill('notai', t('pill.notai')));
  else if (rated(r)) p.push(pill('rated', t('pill.rated', r.n, r.u)));
  if (r.o) p.push(`<span class="pill v" style="--vc:${OUT[r.o][1]}">${t(OUT[r.o][0])}</span>`);
  if (+u.meta.risk === 3) p.push(pill('hi', riskLabel(3)));
  if ((u.s.levels || {}).automation) p.push(pill('lv4', t('pill.lv4')));
  return p.join('');
}
const card = u => `<a class="card" href="#/uc/${encodeURIComponent(u.id)}"><span class="cph">${esc(phShort(u.meta.phase))}</span><h3>${esc(u.title)}</h3>${u.summary ? `<p>${esc(u.summary)}</p>` : ''}<span class="foot">${ucPills(u)}</span></a>`;
function copyText(text, msg){
  const done = () => toast(msg || t('toast.copied'));
  const fb = () => { const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); done(); } catch(e) { toast(t('toast.copyfail')); } ta.remove(); };
  if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, fb); else fb();
}
function download(name, data, type){
  const a = document.createElement('a'); a.href = URL.createObjectURL(data instanceof Blob ? data : new Blob([data], {type:(type || 'text/plain') + ';charset=utf-8'}));
  a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}
const stamp = () => new Date().toISOString().slice(0, 10);
// copyable block: data-copy holds an index into COPY, filled while rendering
let COPY = [];
const codeBlock = (label, text, cls) => { COPY.push(text); return `<div class="prompt${cls ? ' ' + cls : ''}"><div class="ptools"><b>${esc(label)}</b><button type="button" class="btn btn-primary btn-sm" data-copy="${COPY.length - 1}">${t('btn.copy')}</button></div><pre>${esc(text)}</pre></div>`; };

/* ---------- start ---------- */
function viewStart(){
  const n = ALL_IDS.length;
  const traps = [1,2,3,4].map(i => `<div class="trap"><span class="trap-n">${t('trap.n', i)}</span><b>${t('trap.' + i + '.t')}</b><p>${t('trap.' + i + '.p')}</p><p class="guard"><b>${t('trap.guard')}:</b> ${t('trap.' + i + '.g')}</p></div>`).join('');
  const entry = (i, h) => `<a class="entry" href="${h}"><span class="ov-n">0${i}</span><h2>${t('start.e' + i + '.t')}</h2><p>${t('start.e' + i + '.p', n)}</p><span class="go">${t('start.e' + i + '.go')} →</span></a>`;
  return `<div class="view-head"><div>${kicker(t('start.kicker'))}<h1>${t('app.title')}</h1><p class="lede">${t('start.lede', n)}</p></div></div>
    <div class="entry-grid">${entry(1, '#/library')}${entry(2, '#/collection')}${entry(3, '#/setup')}</div>
    <div class="panel"><h2>${t('start.levels.t')}</h2><p class="sub">${t('start.levels.p')}</p>
      <ol class="lv-grid">${LV.map((l, i) => `<li><span class="lv-n">${t('level')} ${i + 1}</span><b>${esc(L(l.name))}</b><p>${esc(L(l.desc))}</p></li>`).join('')}</ol></div>
    <div class="panel"><h2>${t('start.traps.t')}</h2><p class="sub">${t('start.traps.p')}</p><div class="traps">${traps}</div></div>
    <div class="st-grid">
      <div class="panel"><h2>${t('start.rules.t')}</h2><ul class="st-list">${[1,2,3,4].map(i => `<li>${t('start.rules.' + i)}</li>`).join('')}</ul></div>
      <div class="panel"><h2>${t('start.repo.t')}</h2><ul class="st-list">${[1,2,3].map(i => `<li>${t('start.repo.' + i)}</li>`).join('')}</ul>
        <p class="row"><a class="btn btn-quiet btn-sm" href="${REPO}" target="_blank" rel="noopener">GitHub ↗</a> <a class="btn btn-quiet btn-sm" href="#/setup">${t('nav.setup')}</a></p></div>
    </div>
    <div class="panel"><h2>${t('start.sources.t')}</h2><ul class="note">${KB.meta.sources.map(s => `<li><a href="${s.url}" target="_blank" rel="noopener">${esc(L(s.title))}</a></li>`).join('')}</ul>
      <p class="sub">${t('start.about', esc(KB.version))}</p></div>`;
}

/* ---------- library ---------- */
function matches(u){
  if (ui.phase && u.meta.phase !== ui.phase) return false;
  if (ui.risk && String(u.meta.risk) !== ui.risk) return false;
  if (ui.only === 'coll' && !(inColl(u.id) || u.own)) return false;
  if (ui.only === 'tools' && !(u.meta.connect || []).length) return false;
  if (ui.only === 'lv4' && !(u.s.levels || {}).automation) return false;
  if (!ui.q) return true;
  const hay = [u.title, u.summary, u.s.problem, u.s.result, (u.meta.connect || []).join(' '), (u.meta.tools || []).join(' ')].join(' ').toLowerCase();
  return ui.q.toLowerCase().split(/\s+/).filter(Boolean).every(w => hay.includes(w));
}
function viewLibrary(){
  const phaseBtns = `<button type="button" data-fphase="" aria-pressed="${!ui.phase}">${t('lib.all')}</button>` + PHASES.map((p, i) => `<button type="button" data-fphase="${p.id}" aria-pressed="${ui.phase === p.id}">${p.cross ? '' : (i + 1) + ' · '}${esc(L(p).short)}</button>`).join('');
  const sel = (id, cur, label, opts) => `<label class="sr" for="${id}">${label}</label><select id="${id}" class="selectbox">${opts.map(([v, l]) => `<option value="${v}"${v === cur ? ' selected' : ''}>${esc(l)}</option>`).join('')}</select>`;
  return `<div class="view-head"><div>${kicker(t('nav.library'))}<h1>${t('lib.h1')}</h1><p class="lede">${t('lib.lede')}</p></div></div>
    <div class="filters">
      <label class="search"><span class="sr">${t('lib.search')}</span><input id="q" type="search" placeholder="${t('lib.search')}" value="${esc(ui.q)}" autocomplete="off"></label>
      ${sel('fRisk', ui.risk, t('ed.risk'), [['', t('lib.anyrisk')], ['1', riskLabel(1)], ['2', riskLabel(2)], ['3', riskLabel(3)]])}
      ${sel('fOnly', ui.only, t('lib.show'), [['', t('lib.anything')], ['coll', t('lib.only.coll')], ['tools', t('lib.only.tools')], ['lv4', t('lib.only.lv4')]])}
      <a class="btn btn-ghost btn-sm" href="#/new">+ ${t('btn.newuc')}</a>
    </div>
    <div class="tchips" role="group" aria-label="${t('lib.phase')}">${phaseBtns}</div>
    ${ui.phase ? phaseIntro(PH[ui.phase]) : ''}
    <p class="sub" id="libCount" aria-live="polite"></p><div class="cards" id="cards"></div>`;
}
function phaseIntro(p){
  const x = L(p);
  return `<details class="intro"><summary><h2>${esc(x.name)}</h2><span class="q">${esc(x.q)}</span><span class="more">${t('lib.limits')}</span></summary>
    <div class="body"><div><h3>${t('lib.goal')}</h3><ul><li>${esc(x.goal)}</li></ul></div><div><h3>${t('lib.guard')}</h3><ul>${x.limits.map(l => `<li>${esc(l)}</li>`).join('')}</ul></div><div><h3>${t('lib.disc')}</h3><ul>${x.disc.map(l => `<li>${esc(l)}</li>`).join('')}</ul></div></div></details>`;
}
function renderCards(){
  const list = allUcs().filter(matches);
  $('#cards').innerHTML = list.map(card).join('') || `<p class="empty">${t('lib.none')}</p>`;
  $('#libCount').textContent = t('lib.count', list.length, ALL_IDS.length + store.own.length);
}

/* ---------- one use case ---------- */
const scale = (key, val, label, hint) => `<div><div class="q-label">${label}</div><div class="q-hint">${hint}</div><div class="scale" role="group" aria-label="${label}">${[1,2,3,4,5].map(n => `<button type="button" data-rate="${key}" data-v="${n}" aria-pressed="${val === n}">${n}</button>`).join('')}</div></div>`;
function assessHtml(u){
  const r = rOf(u.id);
  return `<div class="panel assess"><h2>${t('uc.assess')}</h2><p class="sub">${t('uc.assess.p')}</p>
    ${scale('n', r.n, t('uc.value'), t('uc.value.h'))}
    <div><div class="q-label">${t('uc.gain')}</div><div class="chips" role="group" aria-label="${t('uc.gain')}">${KB.meta.gains.map(g => `<button type="button" data-gain="${g.id}" aria-pressed="${(r.b || []).includes(g.id)}">${esc(L(g))}</button>`).join('')}</div></div>
    ${scale('u', r.u, t('uc.feas'), t('uc.feas.h'))}
    <div class="toggles"><button type="button" class="toggle" data-flag="f" aria-pressed="${!!r.f}">★ ${t('pill.star')}</button><button type="button" class="toggle" data-flag="x" aria-pressed="${!!r.x}">${t('pill.notai')}</button><button type="button" class="toggle warn" data-flag="c" aria-pressed="${!!r.c}">${t('uc.checkrules')}</button></div>
    <div><div class="q-label">${t('uc.tried')}</div><div class="chips" role="group" aria-label="${t('uc.tried')}">${Object.keys(OUT).map(k => `<button type="button" data-out="${k}" aria-pressed="${r.o === k}">${t(OUT[k][0])}</button>`).join('')}</div></div>
    <div class="field"><label for="ucNote">${t('uc.note')}</label><textarea id="ucNote" data-note maxlength="1000" placeholder="${t('uc.note.ph')}">${esc(r.note || '')}</textarea></div>
    <p class="q-hint">${t('uc.saved')}</p></div>`;
}
const PACK_URL = REPO + '/releases/download/practice-data-' + KB.pack.snapshot + '/';
const fileHref = f => 'materials/' + f.split('/').map(encodeURIComponent).join('/');
function packFile(id){
  const P = KB.pack, x = (P.extras || []).find(e => e.id === id);
  if (id === 'papers') return `<li><b>${t('data.allpapers', P.papers.length)}</b> <a href="${PACK_URL}ai-research-practice-pack.zip" download>ZIP</a></li>`;
  if (x) return `<li><b>${id}</b> <a href="${fileHref(x.file)}" download>${esc(x.title)}</a></li>`;
  const p = P.papers.find(e => e.id === id); if (p) return `<li><b>${id}</b> <a href="${fileHref(p.file)}" target="_blank" rel="noopener">${esc(p.cite.split('(')[0].trim())} · PDF</a></li>`;
  const d = P.data.find(e => e.id === id); return d ? `<li><b>${id}</b> ${esc(d.title)}: ${d.files.map(f => `<a href="${fileHref(f.f)}" download>${esc(f.f.split('/').pop())}</a>`).join(', ')}</li>` : '';
}
function tryHtml(u){
  const s = u.s, pr = s.practice || {}, own = s.own || {}, hasP = !!pr.prompt, pm = hasP && ui.mode === 'practice';
  const seg = hasP ? `<div class="seg gseg" role="group"><button type="button" data-mode="practice" aria-pressed="${pm}">${t('uc.withpractice')}</button><button type="button" data-mode="own" aria-pressed="${!pm}">${t('uc.withown')}</button></div>` : '';
  if (pm) {
    const att = u.meta.practice_data || [], ref = u.meta.practice_ref || [];
    return `${seg}${pr.task ? `<p>${esc(pr.task)}</p>` : ''}
      ${att.length || pr.attach_note ? `<p><b>${t('uc.attach')}</b></p><ul class="pfiles">${att.map(packFile).join('')}${pr.attach_note ? `<li>${esc(pr.attach_note)}</li>` : ''}</ul>` : `<p>${t('uc.noattach')}</p>`}
      ${ref.length ? `<p><b>${t('uc.keepopen')}</b></p><ul class="pfiles ref">${ref.map(packFile).join('')}</ul>` : ''}
      ${codeBlock(t('uc.prompt.practice'), pr.prompt)}${pr.check ? `<p><b>${t('uc.check')}:</b> ${esc(pr.check)}</p>` : ''}${own.limit ? `<p class="limit"><b>${t('uc.limit')}:</b> ${esc(own.limit)}</p>` : ''}`;
  }
  return `${seg}${own.bring ? `<p><b>${t('uc.bring')}:</b> ${esc(own.bring)}</p>` : ''}${(own.steps || []).length ? `<ol class="howto">${own.steps.map(x => `<li>${esc(x)}</li>`).join('')}</ol>` : ''}
    ${own.prompt ? codeBlock(t('uc.prompt'), own.prompt) : ''}${own.check ? `<p><b>${t('uc.check')}:</b> ${esc(own.check)}</p>` : ''}${own.limit ? `<p class="limit"><b>${t('uc.limit')}:</b> ${esc(own.limit)}</p>` : ''}`;
}
function levelsHtml(u){
  const lv = u.s.levels || {};
  return `<ol class="ladder-l">${['chat','project','assistant','automation'].map((k, i) => lv[k] ? `<li><span class="ln">${t('level')} ${i + 1} · ${esc(L(LV[i].name))}</span><p>${esc(lv[k])}</p></li>` : '').join('')}</ol>`;
}
function connectRow(names){
  return names.map(n => { const m = CAT.mcp[n], d = CON[n];
    return `<li><b>${toolUrl(n) ? `<a href="${toolUrl(n)}" target="_blank" rel="noopener">${esc(n)}</a>` : esc(n)}</b>${m ? `<span class="mcpb ${m.kind}">MCP · ${m.kind === 'o' ? t('mcp.official') : t('mcp.community')}</span><span class="mcpr${m.remote ? '' : ' loc'}">${m.remote ? t('mcp.remote') : t('mcp.local')}</span>` : ''}${note2(d) ? `<small>${esc(note2(d))}</small>` : m ? `<small>${esc(L(m.note))}</small>` : ''}</li>`; }).join('');
}
function backgroundHtml(u){
  const s = u.s, m = u.meta;
  const row = (label, html) => html ? `<div class="ux-row"><span class="ux-l">${label}</span><div>${html}</div></div>` : '';
  const repos = (m.repos || []).filter(k => CAT.repos[k]).map(k => `<a class="tk repo" href="${CAT.repos[k].url}" target="_blank" rel="noopener" title="${esc(L(CAT.repos[k].type))}">${esc(CAT.repos[k].label)}</a>`).join('');
  return `${(s.steps || []).length ? `<details class="bg" open><summary>${t('uc.how')}</summary><ol class="ux-steps">${s.steps.map(x => `<li>${esc(x)}</li>`).join('')}</ol></details>` : ''}
    ${(s.concepts || []).length || (s.refs || []).length ? `<details class="bg"><summary>${t('uc.methods')}</summary><div class="ux-method"><dl>${(s.concepts || []).map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl>
      ${(s.refs || []).length ? `<p class="ux-refs-h">${t('uc.refs')}</p><ul class="ux-refs">${s.refs.map(r => `<li>${esc(r.cite)}${r.doi ? ` <a href="https://doi.org/${esc(r.doi)}" target="_blank" rel="noopener">doi.org/${esc(r.doi)}</a>` : ''}</li>`).join('')}</ul>` : ''}</div></details>` : ''}
    <details class="bg"><summary>${t('uc.tech')}</summary><div class="ux-tech">
      ${(m.routes || []).length ? `<div class="ux-routes">${m.routes.map((r, i) => KB.meta.routes[r] ? `<span class="route${i ? '' : ' main'}" title="${esc(L(KB.meta.routes[r].desc))}">${esc(L(KB.meta.routes[r].label))}</span>` : '').join('')}</div>` : ''}
      ${s.tech ? `<p>${esc(s.tech)}</p>` : ''}
      ${row(t('nav.data'), (m.data || []).map(id => `<a class="pk" href="#/data" data-packjump="${id}"><b>${id}</b></a>`).join(''))}
      ${row(t('uc.tools'), (m.tools || []).map(n => toolUrl(n) ? `<a class="tk" href="${toolUrl(n)}" target="_blank" rel="noopener">${esc(n)}</a>` : `<span class="tk">${esc(n)}</span>`).join(''))}
      ${row(t('uc.connect'), (m.connect || []).length ? `<ul class="ux-con">${connectRow(m.connect)}</ul>` : '')}
      ${row(t('uc.repos'), repos)}
    </div></details>`;
}
function viewUc(id){
  const u = ucFrom(id);
  if (!u) return `<div class="panel"><h1>${t('uc.missing')}</h1><p><a href="#/library">${t('nav.library')} →</a></p></div>`;
  const m = u.meta, p = PH[m.phase];
  const fallback = lang === 'de' && u.textLang === 'en' && !u.own ? `<p class="fbnote">${t('uc.onlyen')}</p>` : '';
  const side = u.own
    ? `<div class="panel"><h2>${t('own.t')}</h2><div class="row col"><a class="btn btn-quiet btn-sm" href="#/edit/${encodeURIComponent(u.id)}">${t('btn.edit')}</a><button type="button" class="btn btn-quiet btn-sm" data-ownmd="${esc(u.id)}">${t('btn.md')}</button><button type="button" class="btn btn-quiet btn-sm" data-suggest="${esc(u.id)}">${t('btn.suggest')}</button><button type="button" class="btn btn-quiet btn-sm" data-owndel="${esc(u.id)}">${t('btn.delete')}</button></div><p class="q-hint">${t('own.hint')}</p></div>`
    : `<div class="panel"><h2>${t('uc.share')}</h2><div class="row col"><button type="button" class="btn btn-quiet btn-sm" data-copylink>${t('btn.copylink')}</button><a class="btn btn-quiet btn-sm" href="${REPO}/blob/main/content/usecases/${u.textLang}/${encodeURIComponent(u.id)}.md" target="_blank" rel="noopener">${t('btn.source')} ↗</a><button type="button" class="btn btn-quiet btn-sm" data-dup="${esc(u.id)}">${t('btn.dup')}</button></div></div>`;
  return `<p class="crumb"><a href="#/library">← ${t('nav.library')}</a> · <button type="button" class="linkbtn" data-fphase-go="${m.phase}">${esc(phName(m.phase))}</button></p>
    <div class="uc-grid"><article class="uc-main">
      <header class="uc-head">${kicker(esc(p ? L(p).short : m.phase))}<h1>${esc(u.title)}</h1>${fallback}${u.summary ? `<p class="lede">${esc(u.summary)}</p>` : ''}
        <div class="meta">${m.mode && KB.meta.modes[m.mode] ? `<span><b>${esc(m.mode)}:</b> ${esc(L(KB.meta.modes[m.mode]))}</span>` : ''}${m.risk ? `<span><b>${riskLabel(m.risk)}:</b> ${esc(riskDef(m.risk))}</span>` : ''}</div>
        ${m.excursus ? `<p class="exnote">${t('uc.excursus')}</p>` : ''}</header>
      ${u.s.problem || u.s.result ? `<div class="ux-pr panel"><div><h4>${t('uc.problem')}</h4><p>${esc(u.s.problem)}</p></div><div><h4>${t('uc.result')}</h4><p>${esc(u.s.result)}</p></div></div>` : ''}
      <section class="panel"><h2>${t('uc.try')}</h2>${tryHtml(u)}</section>
      ${Object.values(u.s.levels || {}).some(Boolean) ? `<section class="panel"><h2>${t('uc.levels')}</h2><p class="sub">${t('uc.levels.p')}</p>${levelsHtml(u)}</section>` : ''}
      <section class="panel bring"><div><h2>${t('uc.bring.t')}</h2><p>${t('uc.bring.p')}</p></div><button type="button" class="btn btn-primary" data-wizard="${esc(u.id)}">${t('uc.bring.btn')} →</button></section>
      <section class="panel">${backgroundHtml(u)}</section>
    </article>
    <aside class="uc-side">${assessHtml(u)}${side}</aside></div>`;
}

/* ---------- my collection ---------- */
function renderMatrix(list){
  const W = 620, H = 440, Lm = 54, R = 14, T = 14, B = 52;
  const sx = v => Lm + (v - .5) / 5 * (W - Lm - R), sy = v => T + (5.5 - v) / 5 * (H - T - B), mx = sx(3), my = sy(3);
  let g = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(t('coll.matrix'))}">`;
  g += `<rect x="${mx}" y="${T}" width="${W-R-mx}" height="${my-T}" fill="#E3E8F5"/><rect x="${Lm}" y="${T}" width="${mx-Lm}" height="${my-T}" fill="#F1F3F9"/><rect x="${mx}" y="${my}" width="${W-R-mx}" height="${H-B-my}" fill="#F7F7F7"/><rect x="${Lm}" y="${my}" width="${mx-Lm}" height="${H-B-my}" fill="#FBFBFB"/>`;
  [[W-R-10, T+20, t('q.quick'), 'end', '#002896'], [Lm+10, T+20, t('q.bets'), 'start', '#3D5FB4'], [W-R-10, H-B-12, t('q.easy'), 'end', '#5F5F5F'], [Lm+10, H-B-12, t('q.depri'), 'start', '#5F5F5F']]
    .forEach(q => g += `<text x="${q[0]}" y="${q[1]}" text-anchor="${q[3]}" font-size="13" font-weight="700" fill="${q[4]}">${esc(q[2])}</text>`);
  for (let v = 1; v <= 5; v++) g += `<text x="${sx(v)}" y="${H-B+20}" text-anchor="middle" font-size="12" fill="#5F5F5F">${v}</text><text x="${Lm-12}" y="${sy(v)+4}" text-anchor="end" font-size="12" fill="#5F5F5F">${v}</text>`;
  g += `<line x1="${mx}" y1="${T}" x2="${mx}" y2="${H-B}" stroke="#CFCFCF" stroke-dasharray="4 4"/><line x1="${Lm}" y1="${my}" x2="${W-R}" y2="${my}" stroke="#CFCFCF" stroke-dasharray="4 4"/><line x1="${Lm}" y1="${H-B}" x2="${W-R}" y2="${H-B}" stroke="#454545"/><line x1="${Lm}" y1="${T}" x2="${Lm}" y2="${H-B}" stroke="#454545"/>`;
  g += `<text x="${(Lm+W-R)/2}" y="${H-10}" text-anchor="middle" font-size="13" font-weight="700" fill="#1F1F1F">${esc(t('uc.feas'))} →</text><text transform="translate(16 ${(T+H-B)/2}) rotate(-90)" text-anchor="middle" font-size="13" font-weight="700" fill="#1F1F1F">${esc(t('uc.value'))} →</text>`;
  const P = list.map((e, i) => ({x:sx(e.r.u) + (i % 3 - 1) * .01, y:sy(e.r.n) + (i % 2 ? .01 : -.01)}));
  for (let it = 0; it < 60; it++) { let moved = false;
    for (let i = 0; i < P.length; i++) for (let j = i + 1; j < P.length; j++) { const dx = P[j].x - P[i].x, dy = P[j].y - P[i].y, d = Math.hypot(dx, dy) || .01; if (d < 24) { const k = (24 - d) / 2, ux = dx / d, uy = dy / d; P[i].x -= ux * k; P[i].y -= uy * k; P[j].x += ux * k; P[j].y += uy * k; moved = true; } }
    P.forEach(p => { p.x = Math.min(W - R - 12, Math.max(Lm + 12, p.x)); p.y = Math.min(H - B - 12, Math.max(T + 12, p.y)); }); if (!moved) break; }
  list.forEach((e, i) => { const {x, y} = P[i]; g += `<a href="#/uc/${encodeURIComponent(e.u.id)}" aria-label="${i+1}: ${esc(e.u.title)}"><title>${i+1} · ${esc(e.u.title)}</title>${e.r.f ? `<circle cx="${x}" cy="${y}" r="15" fill="none" stroke="#1F1F1F" stroke-width="2.5"/>` : ''}<circle cx="${x}" cy="${y}" r="11" fill="#002896" stroke="#fff" stroke-width="2"/><text x="${x}" y="${y+4}" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">${i+1}</text></a>`; });
  if (!list.length) g += `<text x="${(Lm+W-R)/2}" y="${(T+H-B)/2}" text-anchor="middle" font-size="14" fill="#5F5F5F">${esc(t('coll.norated'))}</text>`;
  return `<div class="mx-scroll">${g}</svg></div><div class="legend"><span><i style="background:#fff;box-shadow:0 0 0 2px #1F1F1F"></i>${t('pill.star')}</span></div>`;
}
function viewCollection(){
  const withR = allUcs().map(u => ({u, r:rOf(u.id)}));
  const ranked = withR.filter(e => rated(e.r) && !e.r.x).sort((a, b) => b.r.n * b.r.u - a.r.n * a.r.u || b.r.n - a.r.n);
  const li = e => `<li><a href="#/uc/${encodeURIComponent(e.u.id)}">${esc(e.u.title)}</a> <small>· ${esc(phShort(e.u.meta.phase))}${e.r.o ? ' · ' + t(OUT[e.r.o][0]) : ''}</small>${e.r.note ? `<p>${esc(e.r.note)}</p>` : ''}</li>`;
  const box = (title, sub, arr) => `<div class="panel"><h2>${title}</h2><p class="sub">${sub}</p>${arr.length ? `<ul class="clist">${arr.map(li).join('')}</ul>` : `<p class="empty">${t('coll.none')}</p>`}</div>`;
  const own = store.own.map(o => ucFrom(o.id));
  return `<div class="view-head"><div>${kicker(t('nav.collection'))}<h1>${t('coll.h1')}</h1><p class="lede">${t('coll.lede')}</p></div></div>
    <div class="rk"><div><b>${withR.filter(e => e.r.f).length}</b><span>${t('coll.k.star')}</span></div><div><b>${ranked.length}</b><span>${t('coll.k.rated')}</span></div><div><b>${withR.filter(e => e.r.o).length}</b><span>${t('coll.k.tried')}</span></div><div><b>${own.length}</b><span>${t('coll.k.own')}</span></div></div>
    <div class="res-grid"><div class="panel"><h2>${t('coll.matrix')}</h2>${renderMatrix(ranked)}</div>
      <div class="panel"><h2>${t('coll.top')}</h2><p class="sub">${t('coll.top.p')}</p><ol class="rank">${ranked.length ? ranked.map((e, i) => `<li><a href="#/uc/${encodeURIComponent(e.u.id)}"><span class="n">${i+1}</span><span><b>${esc(e.u.title)}</b><small>${esc(phShort(e.u.meta.phase))}${e.r.c ? ' · ' + t('uc.checkrules') : ''}${e.r.o ? ' · ' + t(OUT[e.r.o][0]) : ''}</small></span><span class="sc">${e.r.n} × ${e.r.u}</span></a></li>`).join('') : `<li class="empty">${t('coll.norated')}</li>`}</ol></div></div>
    <div class="lists">${box('★ ' + t('coll.starred'), t('coll.starred.p'), withR.filter(e => e.r.f))}${box(t('coll.tried'), t('coll.tried.p'), withR.filter(e => e.r.o || e.r.note))}
      ${box(t('pill.notai'), t('coll.notai.p'), withR.filter(e => e.r.x))}${box(t('uc.checkrules'), t('coll.rules.p'), withR.filter(e => e.r.c))}</div>
    <div class="panel"><div class="ptools"><div><h2>${t('coll.own')}</h2><p class="sub">${t('coll.own.p')}</p></div><a class="btn btn-primary btn-sm" href="#/new">+ ${t('btn.newuc')}</a></div>
      ${own.length ? `<ul class="clist">${own.map(u => `<li><a href="#/uc/${encodeURIComponent(u.id)}">${esc(u.title)}</a> <small>· ${esc(phShort(u.meta.phase))} · ${esc((u.lang || '').toUpperCase())}</small></li>`).join('')}</ul>
        <p class="row"><button type="button" class="btn btn-quiet btn-sm" data-ownzip>${t('btn.ownzip')}</button></p>` : `<p class="empty">${t('coll.own.none')}</p>`}</div>
    <div class="panel"><h2>${t('coll.data')}</h2><p class="sub">${t('coll.data.p')}</p>
      <div class="row"><button type="button" class="btn btn-quiet btn-sm" data-exp="json">${t('btn.backup')}</button><button type="button" class="btn btn-quiet btn-sm" data-exp="csv">${t('btn.csv')}</button><button type="button" class="btn btn-quiet btn-sm" data-exp="md">${t('btn.report')}</button>
        <label class="btn btn-quiet btn-sm">${t('btn.import')}<input type="file" id="impFile" accept="application/json" hidden></label><button type="button" class="btn btn-quiet btn-sm" data-reset>${t('btn.reset')}</button></div></div>`;
}

/* ---------- own use case editor ---------- */
function viewEditor(id){
  const o = id ? store.own.find(x => x.id === id) : null, src = !o && ui.dupFrom ? ucFrom(ui.dupFrom) : null;
  const v = o || (src ? {title:src.title + (lang === 'de' ? ' (Kopie)' : ' (copy)'), summary:src.summary, meta:Object.assign({}, src.meta), s:JSON.parse(JSON.stringify(src.s))} : {title:'', summary:'', meta:{phase:PHASES[0].id, risk:1, mode:'Assist'}, s:{own:{}}});
  const own = v.s.own || {};
  const f = (k, lbl, val, rows, hint) => `<div class="field"><label for="e_${k}">${lbl}</label>${rows ? `<textarea id="e_${k}" rows="${rows}">${esc(val || '')}</textarea>` : `<input id="e_${k}" value="${esc(val || '')}">`}${hint ? `<span class="q-hint">${hint}</span>` : ''}</div>`;
  return `<p class="crumb"><a href="#/collection">← ${t('nav.collection')}</a></p>
    <div class="view-head"><div>${kicker(t('own.t'))}<h1>${o ? t('ed.edit') : t('ed.new')}</h1><p class="lede">${t('ed.lede')}</p></div></div>
    <form class="panel ed" id="edForm" data-id="${esc(id || '')}" autocomplete="off">
      ${f('title', t('ed.title'), v.title)}
      <div class="ed-row"><div class="field"><label for="e_phase">${t('lib.phase')}</label><select id="e_phase" class="selectbox">${PHASES.map(p => `<option value="${p.id}"${p.id === v.meta.phase ? ' selected' : ''}>${esc(L(p).name)}</option>`).join('')}</select></div>
        <div class="field"><label for="e_risk">${t('ed.risk')}</label><select id="e_risk" class="selectbox">${[1,2,3].map(k => `<option value="${k}"${+v.meta.risk === k ? ' selected' : ''}>${esc(riskLabel(k))}</option>`).join('')}</select></div>
        <div class="field"><label for="e_mode">${t('ed.mode')}</label><select id="e_mode" class="selectbox">${Object.keys(KB.meta.modes).map(k => `<option${k === v.meta.mode ? ' selected' : ''}>${k}</option>`).join('')}</select></div></div>
      ${f('summary', t('ed.summary'), v.summary, 2)}${f('problem', t('uc.problem'), v.s.problem, 3)}${f('result', t('uc.result'), v.s.result, 3)}
      ${f('bring', t('uc.bring'), own.bring, 2)}${f('steps', t('ed.steps'), (own.steps || v.s.steps || []).join('\n'), 5, t('ed.steps.h'))}
      ${f('prompt', t('uc.prompt'), own.prompt, 8)}${f('check', t('uc.check'), own.check, 3)}${f('limit', t('uc.limit'), own.limit, 2)}
      ${f('connect', t('uc.connect'), (v.meta.connect || []).join('; '), 0, t('ed.connect.h'))}
      <div class="row"><button type="submit" class="btn btn-primary">${t('btn.save')}</button><a class="btn btn-quiet" href="${o ? '#/uc/' + encodeURIComponent(o.id) : '#/collection'}">${t('btn.cancel')}</a></div>
      <p class="q-hint">${t('ed.privacy')}</p></form>`;
}
function saveEditor(form){
  const g = k => (form.querySelector('#e_' + k) || {}).value || '', id = form.dataset.id;
  const title = g('title').trim(); if (!title) { toast(t('ed.needtitle')); return; }
  const prev = id ? store.own.find(x => x.id === id) : null, base = !prev && ui.dupFrom ? ucFrom(ui.dupFrom) : null;
  const o = prev || {id:'own-' + Date.now().toString(36), lang, meta:{}, s:{}};
  o.title = title; o.summary = g('summary').trim();
  o.meta = Object.assign({}, prev ? prev.meta : base ? base.meta : {}, {id:o.id, phase:g('phase'), risk:+g('risk'), mode:g('mode'), title, connect:g('connect').split(';').map(x => x.trim()).filter(Boolean), added:prev && prev.meta.added ? prev.meta.added : stamp()});
  delete o.meta.order;
  o.s = Object.assign({}, prev ? prev.s : base ? JSON.parse(JSON.stringify(base.s)) : {}, {problem:g('problem').trim(), result:g('result').trim()});
  o.s.own = {bring:g('bring').trim(), steps:g('steps').split('\n').map(x => x.replace(/^\s*(\d+[.)]|[-*])\s*/, '').trim()).filter(Boolean), prompt:g('prompt').trim(), check:g('check').trim(), limit:g('limit').trim()};
  if (!prev) store.own.push(o);
  ui.dupFrom = null; save(); toast(t('toast.saved')); go('#/uc/' + encodeURIComponent(o.id));
}

/* ---------- setup: bring things into your AI app ---------- */
const CAPS = ['skill','assistant','project','mcpRemote','mcpLocal','repo','notes'];
const docs = x => (x.docs || []).length ? `<p class="docs">${t('cap.docs')}: ${x.docs.map(u => `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(u.replace(/^https?:\/\//, '').split('/').slice(0, 3).join('/'))}</a>`).join(' · ')}</p>` : '';
function capHtml(c, k, fill){
  const x = c.caps && c.caps[k]; if (!x) return '';
  if (x.supported === false) return `<div class="cap no"><h3>${t('cap.' + k)}</h3><p>${esc(L(x.requires) || t('cap.unsupported'))}</p>${docs(x)}</div>`;
  const steps = L(x.steps) || [], tpl = x.template ? (fill ? fill(x.template) : x.template) : '';
  return `<div class="cap"><h3>${t('cap.' + k)}</h3>${steps.length ? `<ol class="howto">${steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol>` : ''}${tpl ? codeBlock(t('cap.template'), tpl, 'code') : ''}${L(x.requires) ? `<p class="q-hint"><b>${t('cap.requires')}:</b> ${esc(L(x.requires))}</p>` : ''}${docs(x)}</div>`;
}
function viewSetup(cid){
  const c = client(cid || store.app) || null;
  const tabs = CLIENTS.map(x => `<a href="#/setup/${x.id}" class="ctab"${c && c.id === x.id ? ' aria-current="page"' : ''}>${esc(x.name)}</a>`).join('');
  return `<div class="view-head"><div>${kicker(t('nav.setup'))}<h1>${t('setup.h1')}</h1><p class="lede">${t('setup.lede')}</p></div></div>
    ${CLIENTS.length ? `<nav class="ctabs" aria-label="${t('wiz.app')}">${tabs}</nav>` : `<p class="empty">${t('setup.noclients')}</p>`}
    ${c ? `<div class="panel caps"><h2>${esc(c.name)}</h2><p class="sub">${t('setup.checked', esc((KB.clients && KB.clients.checked) || ''))}</p>${CAPS.map(k => capHtml(c, k)).join('')}</div>` : CLIENTS.length ? `<div class="panel"><p>${t('setup.pick')}</p></div>` : ''}
    <div class="panel"><h2>${t('setup.repo.t')}</h2><p class="sub">${t('setup.repo.p')}</p>
      ${codeBlock(t('setup.clone'), `git clone ${REPO}.git\ncd ai-research-companion-hhn\npython3 build.py`)}
      <ul class="st-list">${[1,2,3,4].map(i => `<li>${t('setup.repo.' + i)}</li>`).join('')}</ul></div>`;
}

/* ---------- wizard: one use case into one AI app ---------- */
const wizUrl = u => location.href.split('#')[0] + '#/uc/' + encodeURIComponent(u.id);
function wizardHtml(){
  const w = ui.wiz, u = ucFrom(w.id), c = client(w.app);
  const head = `<div class="ptools"><h2 id="wizTitle">${t('wiz.t')} · ${esc(u.title)}</h2><button class="icon-btn" type="button" data-wclose aria-label="${t('btn.close')}">✕</button></div>`;
  const bar = `<ol class="wsteps">${[t('wiz.s1'), t('wiz.s2'), t('wiz.s3'), t('wiz.s4')].map((s, i) => `<li${i === w.step ? ' aria-current="step"' : ''}${i < w.step ? ' class="done"' : ''}><button type="button" data-wstep="${i}"${!w.app && i > 0 ? ' disabled' : ''}>${i + 1} · ${s}</button></li>`).join('')}</ol>`;
  let body = '';
  if (w.step === 0) body = `<p>${t('wiz.app.p')}</p><div class="apps">${CLIENTS.map(x => `<button type="button" class="appbtn" data-wapp="${x.id}" aria-pressed="${w.app === x.id}">${esc(x.name)}</button>`).join('')}<button type="button" class="appbtn" data-wapp="other" aria-pressed="${w.app === 'other'}">${t('wiz.other')}</button></div>`;
  if (w.step === 1) body = formatHtml(u, c);
  if (w.step === 2) body = toolsHtml(u, c);
  if (w.step === 3) { const ck = (u.s.own || {}).check || (u.s.practice || {}).check;
    body = `<p>${t('wiz.test.p')}</p>${EXPORT.prompt(u) ? codeBlock(t('uc.prompt'), EXPORT.prompt(u)) : ''}${ck ? `<p><b>${t('uc.check')}:</b> ${esc(ck)}</p>` : ''}<p>${t('wiz.test.after')}</p>`; }
  const nav = `<div class="row wnav"><button type="button" class="btn btn-quiet btn-sm" data-wprev${w.step ? '' : ' disabled'}>← ${t('btn.back')}</button>${w.step < 3 ? `<button type="button" class="btn btn-primary btn-sm" data-wnext${!w.app ? ' disabled' : ''}>${t('btn.next')} →</button>` : `<button type="button" class="btn btn-primary btn-sm" data-wclose>${t('btn.done')}</button>`}</div>`;
  return `<div class="box wiz" role="dialog" aria-modal="true" aria-labelledby="wizTitle">${head}${bar}<div class="wbody">${body}</div>${nav}</div>`;
}
function formatHtml(u, c){
  const has = k => !c || !c.caps || !c.caps[k] || c.caps[k].supported !== false;
  const opts = ['skill', 'assistant', 'project'].filter(has).concat('chat');
  const f = opts.includes(ui.wiz.fmt) ? ui.wiz.fmt : opts[0]; ui.wiz.fmt = f;
  const ul = u.textLang || lang;
  const seg = `<div class="seg" role="group" aria-label="${t('wiz.fmt')}">${opts.map(k => `<button type="button" data-wfmt="${k}" aria-pressed="${k === f}">${t('fmt.' + k)}</button>`).join('')}</div><p class="sub">${t('fmt.' + f + '.p')}</p>`;
  const capSteps = k => c && c.caps && c.caps[k] ? capHtml(c, k) : '';
  const ex = u.meta.excursus ? `<p class="warnhint">${t('uc.excursus')}</p>` : '';
  if (f === 'skill') return seg + ex + `<div class="row"><button type="button" class="btn btn-primary btn-sm" data-skillzip>${t('btn.skillzip')}</button><button type="button" class="btn btn-quiet btn-sm" data-skillmd>${t('btn.skillmd')}</button></div>` + capSteps('skill') + codeBlock('SKILL.md', EXPORT.skillMd(u, ul, {url:wizUrl(u), riskDef:riskDef(u.meta.risk)}), 'code');
  if (f === 'assistant') { const a = EXPORT.assistant(u, ul);
    return seg + ex + capSteps('assistant') + codeBlock(t('as.name'), a.name) + codeBlock(t('as.desc'), a.description) + codeBlock(t('as.instr'), a.instructions) + codeBlock(t('as.start'), a.starters.join('\n')); }
  if (f === 'project') return seg + `<div class="row"><button type="button" class="btn btn-quiet btn-sm" data-rulesmd>${t('btn.rulesmd')}</button></div>` + capSteps('project') + codeBlock(t('fmt.rules'), EXPORT.projectRules(u, ul), 'code');
  return seg + (EXPORT.prompt(u) ? codeBlock(t('uc.prompt'), EXPORT.prompt(u)) : '');
}
function toolsHtml(u, c){
  const con = (u.meta.connect || []).filter(n => CAT.mcp[n]), repos = (u.meta.repos || []).filter(k => CAT.repos[k]);
  if (!con.length && !repos.length) return `<p>${t('wiz.notools')}</p>`;
  const fillFor = n => tpl => { const d = CON[n] || {}, loc = d.local || {};
    return tpl.split('{name}').join(EXPORT.slug(n)).split('{url}').join(d.remoteUrl || '<server-url>').split('{command}').join(loc.command || '<command>').split('{args}').join(JSON.stringify(loc.args || [])); };
  const items = con.map(n => { const m = CAT.mcp[n], d = CON[n] || {}, remote = !!d.remoteUrl || (m.remote && !d.local), cap = remote ? 'mcpRemote' : 'mcpLocal', capx = c && c.caps && c.caps[cap];
    return `<div class="cap"><h3>${esc(n)} <span class="mcpb ${m.kind}">MCP · ${m.kind === 'o' ? t('mcp.official') : t('mcp.community')}</span> <span class="mcpr${remote ? '' : ' loc'}">${remote ? t('mcp.remote') : t('mcp.local')}</span></h3>
      <p>${esc(note2(d) || L(m.note))}</p>
      ${d.remoteUrl ? `<p class="q-hint"><b>URL:</b> <code>${esc(d.remoteUrl)}</code></p>` : ''}${d.auth_note || d.auth ? `<p class="q-hint"><b>${t('wiz.auth')}:</b> ${esc(d.auth_note || d.auth)}</p>` : ''}
      ${d.local && d.local.env && Object.keys(d.local.env).length ? `<p class="q-hint"><b>${t('wiz.env')}:</b> <code>${esc(Object.entries(d.local.env).map(([k, v]) => k + '=' + v).join('  '))}</code></p>` : ''}
      ${d.install ? `<p class="q-hint"><b>${t('cap.requires')}:</b> ${esc(d.install)}</p>` : ''}${d.plan ? `<p class="q-hint"><b>${t('wiz.plan')}:</b> ${esc(d.plan)}</p>` : ''}
      ${capx ? (capx.supported === false ? `<p class="warnhint">${esc(L(capx.requires) || t('cap.unsupported'))}</p>` : capHtml(c, cap, fillFor(n))) : `<p>${t('wiz.genericmcp')}</p>`}
      <p class="docs">${t('cap.docs')}: <a href="${esc(m.doc)}" target="_blank" rel="noopener">${esc(m.doc.replace(/^https?:\/\//, '').split('/').slice(0, 3).join('/'))}</a></p>
      ${m.kind === 'c' ? `<p class="warnhint">${t('wiz.community')}</p>` : ''}</div>`; }).join('');
  const rp = repos.map(k => { const r = CAT.repos[k], d = REPOINFO[k] || {};
    return `<div class="cap"><h3>${esc(r.label)} <small>${esc(L(r.type))}</small></h3>${d.install ? codeBlock(t('wiz.install'), d.install, 'code') : ''}${note2(d) ? `<p>${esc(note2(d))}</p>` : ''}<p class="docs"><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.url.replace(/^https?:\/\//, ''))}</a></p></div>`; }).join('');
  return `<p>${t('wiz.tools.p')}</p><p class="warnhint">${t('wiz.datarule')}</p>${items}${rp ? `<h3 class="wh">${t('uc.repos')}</h3>${rp}` : ''}`;
}
function setInert(on){ ['header.top', 'main', 'footer'].forEach(q => { const el = document.querySelector(q); if (el) el.inert = on; }); }
function drawWizard(){ COPY = []; $('#modal').innerHTML = wizardHtml(); const h = $('#wizTitle'); if (h) { h.tabIndex = -1; h.focus({preventScroll:true}); } }
function openWizard(id){ ui.wiz = {id, app:store.app || '', step:store.app ? 1 : 0, fmt:''}; $('#modal').hidden = false; setInert(true); drawWizard(); }
function closeWizard(){ ui.wiz = null; $('#modal').hidden = true; $('#modal').innerHTML = ''; setInert(false); COPY = []; render(); }

/* ---------- tools catalogue ---------- */
function viewTools(){
  const counts = PHASES.map(p => CAT.tools.filter(x => x.ph.includes(p.id)).length);
  const f = ui.toolPhase, fm = ui.toolMcp, score = x => x.r ? (x.c * x.r + 12) / (x.c + 3) : 0;
  const btns = `<button type="button" data-tph="" aria-pressed="${!f && !fm}">${t('lib.all')} (${CAT.tools.length})</button>` + PHASES.map((p, i) => `<button type="button" data-tph="${p.id}" aria-pressed="${f === p.id}">${esc(L(p).short)} (${counts[i]})</button>`).join('') +
    `<button type="button" class="mcpf" data-tmcp="mcp" aria-pressed="${fm === 'mcp'}">MCP (${CAT.tools.filter(x => CAT.mcp[x.n]).length})</button><button type="button" class="mcpf" data-tmcp="m365" aria-pressed="${fm === 'm365'}">Microsoft 365 (${CAT.tools.filter(x => CAT.m365[x.n]).length})</button>`;
  const grid = L(CAT.categories).map((cn, ci) => { const ts = CAT.tools.filter(x => x.cat === ci && (!f || x.ph.includes(f)) && (!fm || (fm === 'mcp' ? CAT.mcp : CAT.m365)[x.n])).sort((a, b) => score(b) - score(a) || b.c - a.c);
    if (!ts.length) return '';
    return `<div class="panel tcat"><h2>${esc(cn)}<span>${ts.length}</span></h2>${ts.map(x => { const m = CAT.mcp[x.n], ms = CAT.m365[x.n];
      return `<div class="tool"><span>${x.url ? `<a href="https://${x.url}" target="_blank" rel="noopener">${esc(x.n)}</a>` : `<span class="nm">${esc(x.n)}</span>`}<span class="typ">${esc(L(CAT.types[x.typ]))}</span></span>${x.r ? `<span class="stars${x.c < 3 ? ' low' : ''}"><span class="bar"><i style="width:${x.r / 5 * 100}%"></i></span>${x.r.toFixed(1)} <small>(${x.c})</small></span>` : `<span class="stars nr">${t('tools.nr')}</span>`}<span class="nt">${esc(L(x.nt))}</span>
        ${ms ? `<span class="mcp m365"><span class="mlab">Microsoft 365</span>${ms.map(([k, url]) => `<a class="msb" href="${url}" target="_blank" rel="noopener">${esc(L(CAT.m365_types[k]))}</a>`).join('')}</span>` : ''}
        ${m ? `<span class="mcp"><a class="mcpb ${m.kind}" href="${m.doc}" target="_blank" rel="noopener">MCP · ${m.kind === 'o' ? t('mcp.official') : t('mcp.community')}</a><span class="mcpr${m.remote ? '' : ' loc'}">${m.remote ? t('mcp.remote') : t('mcp.local')}</span> ${esc(note2(CON[x.n]) || L(m.note))}</span>` : ''}</div>`; }).join('')}</div>`; }).join('');
  return `<div class="view-head"><div>${kicker(t('nav.tools'))}<h1>${t('tools.h1')}</h1><p class="lede">${t('tools.lede')}</p><p class="sub">${t('tools.legend')}</p></div></div>
    <div class="tchips">${btns}</div><div class="tgrid">${grid}</div>`;
}

/* ---------- practice data ---------- */
function viewData(){
  const P = KB.pack, mb = n => n >= 1e6 ? (n / 1e6).toFixed(n >= 1e7 ? 0 : 1) + ' MB' : Math.max(1, Math.round(n / 1e3)) + ' kB';
  const lic = l => `<span class="lic${/NC/.test(l) ? ' nc' : ''}">${esc(l)}</span>`;
  let grp = '';
  return `<div class="view-head"><div>${kicker(t('nav.data'))}<h1>${t('data.h1')}</h1><p class="lede">${t('data.lede')}</p>${lang === 'de' ? `<p class="sub">${t('data.en')}</p>` : ''}</div></div>
    <div class="dl-grid"><div class="panel dl-main"><h2>${t('data.dl')}</h2><p class="sub">${t('data.dl.p', P.papers.length, P.data.reduce((n, d) => n + d.files.length, 0), P.snapshot)}</p>
      <div class="dl-btns"><a class="btn btn-primary" href="${PACK_URL}ai-research-practice-pack.zip" download>${t('data.all')} (.zip, ${mb(P.zips.all)})</a><a class="btn btn-quiet" href="${PACK_URL}ai-research-practice-data.zip" download>${t('data.only')} (.zip, ${mb(P.zips.data)})</a><a class="btn btn-quiet" href="${REPO}/blob/main/materials/README.md" target="_blank" rel="noopener">README</a></div>
      <p class="sub">${t('data.inrepo')}</p></div>
      <div class="panel"><h2>${t('data.how')}</h2><ol class="howto">${[1,2,3,4].map(i => `<li>${t('data.how.' + i)}</li>`).join('')}</ol></div></div>
    <div class="panel"><h2>${t('data.ideas')}</h2><div class="gtable"><table><thead><tr><th>${t('data.paper')}</th><th>${t('data.data')}</th><th>${t('data.idea')}</th><th>Use case</th></tr></thead><tbody>${P.pairs.map(([a, b, c, id]) => { const u = id && ucFrom(id); return `<tr><td>${esc(a)}</td><td>${esc(b)}</td><td>${esc(c)}</td><td>${u ? `<a href="#/uc/${encodeURIComponent(id)}">${esc(u.title)}</a>` : '–'}</td></tr>`; }).join('')}</tbody></table></div></div>
    <div class="panel" id="dlPapers"><h2>${t('data.papers')}</h2>${(P.extras || []).map(x => `<div class="dl-item" id="pk-${x.id}"><span class="dl-id">${x.id}</span><div><p class="dl-cite"><b>${esc(x.title)}</b></p><p class="dl-about">${esc(x.about)}</p><p class="dl-meta">${lic(x.licence)}<a href="${fileHref(x.file)}" download>${esc(x.file.split('/').pop())} · ${mb(x.size)}</a></p></div></div>`).join('')}
      ${P.papers.map(p => (p.group !== grp ? `<h3 class="dl-grp">${esc(grp = p.group)}</h3>` : '') + `<div class="dl-item" id="pk-${p.id}"><span class="dl-id">${p.id}</span><div><p class="dl-cite">${esc(p.cite)}</p><p class="dl-about">${esc(p.about)}</p><p class="dl-meta">${lic(p.licence)}<a href="${fileHref(p.file)}" target="_blank" rel="noopener">PDF · ${mb(p.size)}</a><a href="https://doi.org/${p.doi}" target="_blank" rel="noopener">doi.org/${esc(p.doi)}</a></p></div></div>`).join('')}</div>
    <div class="panel"><h2>${t('data.raw')}</h2>${P.data.map(d => `<div class="dl-item" id="pk-${d.id}"><span class="dl-id">${d.id}</span><div><p class="dl-cite"><b>${esc(d.title)}</b> · ${esc(d.provider)}</p><p class="dl-about">${esc(d.span)} · ${esc(d.format)}. ${esc(d.notes)}</p><p class="dl-meta">${lic(d.licence)}${d.files.map(x => `<a href="${fileHref(x.f)}" download>${esc(x.f.split('/').pop())} · ${mb(x.size)}</a>`).join('')}<a href="${d.source}" target="_blank" rel="noopener">${t('data.source')}</a></p><p class="dl-about"><small>${t('data.cite')}: ${esc(d.cite)}</small></p></div></div>`).join('')}</div>`;
}

/* ---------- exports ---------- */
const backup = () => JSON.stringify({app:'airp-kb', version:1, exported:new Date().toISOString(), r:store.r, own:store.own}, null, 2);
function csv(){
  const q = v => '"' + String(v ?? '').replace(/"/g, '""') + '"';
  const head = [t('lib.phase'), 'Use case', t('uc.value'), t('uc.gain'), t('uc.feas'), 'V×F', t('pill.star'), t('pill.notai'), t('uc.checkrules'), t('uc.tried'), t('uc.note'), t('pill.own')];
  const rows = allUcs().filter(u => inColl(u.id) || u.own).map(u => { const r = rOf(u.id); return [phName(u.meta.phase), u.title, r.n || '', (r.b || []).map(g => L(KB.meta.gains.find(x => x.id === g))).join(', '), r.u || '', rated(r) ? r.n * r.u : '', r.f ? '✓' : '', r.x ? '✓' : '', r.c ? '✓' : '', r.o ? t(OUT[r.o][0]) : '', r.note || '', u.own ? '✓' : ''].map(q).join(','); });
  return [head.map(q).join(','), ...rows].join('\r\n');
}
function reportMd(){
  const all = allUcs().map(u => ({u, r:rOf(u.id)})), ranked = all.filter(e => rated(e.r) && !e.r.x).sort((a, b) => b.r.n * b.r.u - a.r.n * a.r.u);
  const out = [`# ${t('rep.t')}`, `${t('app.title')} · ${stamp()}`, '', `## ${t('coll.top')}`, ...ranked.map((e, i) => `${i + 1}. **${e.u.title}** (${phShort(e.u.meta.phase)}) – ${t('uc.value')} ${e.r.n}, ${t('uc.feas')} ${e.r.u}${e.r.o ? ' · ' + t(OUT[e.r.o][0]) : ''}`), ''];
  const sec = (h, arr) => { if (arr.length) out.push(`## ${h}`, ...arr.map(e => `- ${e.u.title}${e.r.note ? ' – ' + e.r.note.replace(/\n+/g, ' ') : ''}`), ''); };
  sec(t('coll.tried'), all.filter(e => e.r.o || e.r.note)); sec(t('pill.notai'), all.filter(e => e.r.x)); sec(t('uc.checkrules'), all.filter(e => e.r.c));
  return out.join('\n');
}
const ownMd = u => EXPORT.ucMarkdown(u, u.lang || lang);
function suggestUrl(u){
  const md = ownMd(u), p = new URLSearchParams({template:'new-use-case.yml', title:(lang === 'de' ? 'Neuer Use Case: ' : 'New use case: ') + u.title, phase:phName(u.meta.phase), summary:u.summary || '', markdown:md.length > 6000 ? md.slice(0, 6000) + '\n…' : md});
  return `${REPO}/issues/new?${p}`;
}

/* ---------- render ---------- */
function render(){
  COPY = []; renderHeader();
  const {v, a} = route();
  if (v === 'setup' && a && client(a)) { store.app = a; save(); }
  const views = {start:viewStart, library:viewLibrary, uc:() => viewUc(a), collection:viewCollection, new:() => viewEditor(''), edit:() => viewEditor(a), setup:() => viewSetup(a), tools:viewTools, data:viewData};
  $('#view').innerHTML = (views[v] || viewStart)();
  if (v === 'library') renderCards();
  const u = v === 'uc' ? ucFrom(a) : null;
  document.title = (u ? u.title + ' · ' : '') + t('app.title') + ' · HHN';
}

/* ---------- events ---------- */
document.addEventListener('click', e => {
  const c = s => e.target.closest(s);
  let b;
  if ((b = c('[data-copy]'))) { copyText(COPY[+b.dataset.copy]); return; }
  // wizard (open modal)
  if (ui.wiz) {
    if (c('[data-wclose]') || e.target === $('#modal')) { closeWizard(); return; }
    if ((b = c('[data-wapp]'))) { ui.wiz.app = b.dataset.wapp; if (b.dataset.wapp !== 'other') { store.app = b.dataset.wapp; save(); } ui.wiz.step = 1; drawWizard(); return; }
    if ((b = c('[data-wstep]'))) { ui.wiz.step = +b.dataset.wstep; drawWizard(); return; }
    if (c('[data-wnext]')) { ui.wiz.step = Math.min(3, ui.wiz.step + 1); drawWizard(); return; }
    if (c('[data-wprev]')) { ui.wiz.step = Math.max(0, ui.wiz.step - 1); drawWizard(); return; }
    if ((b = c('[data-wfmt]'))) { ui.wiz.fmt = b.dataset.wfmt; drawWizard(); return; }
    if (c('[data-skillzip]') || c('[data-skillmd]') || c('[data-rulesmd]')) {
      const u = ucFrom(ui.wiz.id), ul = u.textLang || lang, name = EXPORT.slug(u.title, ul), md = EXPORT.skillMd(u, ul, {url:wizUrl(u), riskDef:riskDef(u.meta.risk)});
      if (c('[data-skillzip]')) download(name + '.zip', new Blob([EXPORT.zip([{name:name + '/SKILL.md', text:md}])], {type:'application/zip'}));
      else if (c('[data-skillmd]')) download('SKILL.md', md, 'text/markdown');
      else download(name + '_rules.md', EXPORT.projectRules(u, ul), 'text/markdown');
    }
    return;
  }
  if ((b = c('[data-lang]'))) { lang = b.dataset.lang; store.lang = lang; save(); render(); return; }
  if ((b = c('[data-fphase]'))) { ui.phase = b.dataset.fphase; render(); return; }
  if ((b = c('[data-fphase-go]'))) { ui.phase = b.dataset.fphaseGo; go('#/library'); return; }
  if ((b = c('[data-mode]'))) { ui.mode = b.dataset.mode; const sy = window.scrollY; render(); window.scrollTo({top:sy}); return; }
  if ((b = c('[data-packjump]'))) { e.preventDefault(); const id = b.dataset.packjump; go('#/data'); setTimeout(() => { const el = document.getElementById('pk-' + id); if (el) { el.scrollIntoView({block:'center'}); el.classList.add('marked'); } }, 60); return; }
  if (c('[data-copylink]')) { copyText(location.href, t('toast.link')); return; }
  if ((b = c('[data-dup]'))) { ui.dupFrom = b.dataset.dup; go('#/new'); return; }
  if ((b = c('[data-wizard]'))) { openWizard(b.dataset.wizard); return; }
  if ((b = c('[data-tph]'))) { ui.toolPhase = b.dataset.tph; if (!ui.toolPhase) ui.toolMcp = ''; render(); return; }
  if ((b = c('[data-tmcp]'))) { ui.toolMcp = ui.toolMcp === b.dataset.tmcp ? '' : b.dataset.tmcp; render(); return; }
  // collection
  if ((b = c('[data-exp]'))) { const k = b.dataset.exp; if (k === 'json') download(`${stamp()}_ai-research_collection.json`, backup(), 'application/json'); if (k === 'csv') download(`${stamp()}_ai-research_collection.csv`, '﻿' + csv(), 'text/csv'); if (k === 'md') download(`${stamp()}_ai-research_report.md`, reportMd(), 'text/markdown'); return; }
  if ((b = c('[data-reset]'))) { if (!b.dataset.armed) { b.dataset.armed = '1'; b.textContent = t('btn.confirm'); setTimeout(() => { delete b.dataset.armed; b.textContent = t('btn.reset'); }, 4000); return; } store.r = {}; store.own = []; save(); render(); toast(t('toast.reset')); return; }
  if (c('[data-ownzip]')) { download(`${stamp()}_own-use-cases.zip`, new Blob([EXPORT.zip(store.own.map(o => ({name:`content/usecases/${o.lang}/${o.id}.md`, text:ownMd(ucFrom(o.id))})))], {type:'application/zip'})); return; }
  if ((b = c('[data-ownmd]'))) { const u = ucFrom(b.dataset.ownmd); download(`${u.id}.md`, ownMd(u), 'text/markdown'); return; }
  if ((b = c('[data-suggest]'))) { window.open(suggestUrl(ucFrom(b.dataset.suggest)), '_blank', 'noopener'); return; }
  if ((b = c('[data-owndel]'))) { if (!b.dataset.armed) { b.dataset.armed = '1'; b.textContent = t('btn.confirm'); setTimeout(() => { delete b.dataset.armed; b.textContent = t('btn.delete'); }, 4000); return; } store.own = store.own.filter(o => o.id !== b.dataset.owndel); delete store.r[b.dataset.owndel]; save(); go('#/collection'); toast(t('toast.deleted')); return; }
  // assessment on the use-case page
  const {v, a} = route(); if (v !== 'uc') return;
  if (!(b = c('[data-rate],[data-gain],[data-flag],[data-out]'))) return;
  const r = rSet(a);
  if (b.dataset.rate) { const k = b.dataset.rate, val = +b.dataset.v; r[k] = r[k] === val ? 0 : val; }
  else if (b.dataset.gain) { const g = b.dataset.gain, l = r.b || []; r.b = l.includes(g) ? l.filter(y => y !== g) : l.concat(g); }
  else if (b.dataset.flag) { const k = b.dataset.flag; r[k] = !r[k]; }
  else { r.o = r.o === b.dataset.out ? '' : b.dataset.out; }
  save();
  const sel = b.dataset.rate ? `[data-rate="${b.dataset.rate}"][data-v="${b.dataset.v}"]` : b.dataset.gain ? `[data-gain="${b.dataset.gain}"]` : b.dataset.flag ? `[data-flag="${b.dataset.flag}"]` : `[data-out="${b.dataset.out}"]`;
  const sy = window.scrollY; render(); window.scrollTo({top:sy}); const again = document.querySelector(sel); if (again) again.focus({preventScroll:true});
});
document.addEventListener('input', e => {
  if (e.target.id === 'q') { ui.q = e.target.value; renderCards(); }
  if (e.target.matches && e.target.matches('[data-note]')) { rSet(route().a).note = e.target.value; save(); }
});
document.addEventListener('change', e => {
  if (e.target.id === 'fRisk') { ui.risk = e.target.value; renderCards(); }
  if (e.target.id === 'fOnly') { ui.only = e.target.value; renderCards(); }
  if (e.target.id === 'impFile' && e.target.files[0]) {
    e.target.files[0].text().then(JSON.parse).then(d => { if (!d || d.app !== 'airp-kb') throw 0; Object.assign(store.r, d.r || {}); (d.own || []).forEach(o => { const i = store.own.findIndex(x => x.id === o.id); if (i >= 0) store.own[i] = o; else store.own.push(o); }); save(); render(); toast(t('toast.imported')); }).catch(() => toast(t('toast.badfile')));
  }
});
document.addEventListener('submit', e => { if (e.target.id === 'edForm') { e.preventDefault(); saveEditor(e.target); } });
document.addEventListener('keydown', e => {
  if (!ui.wiz) return;
  if (e.key === 'Escape') { closeWizard(); return; }
  if (e.key === 'Tab') { const f = [...$('#modal').querySelectorAll('a[href],button:not([disabled]),input,select,textarea')].filter(x => x.offsetParent !== null); if (!f.length) return; const i = f.indexOf(document.activeElement);
    if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); } else if (!e.shiftKey && (i === f.length - 1 || i < 0)) { e.preventDefault(); f[0].focus(); } }
});
render();
