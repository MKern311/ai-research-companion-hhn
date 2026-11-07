// Writes plugins/ai-research-<lang>/ (Claude Code plugins: one skill per use case) and .claude-plugin/marketplace.json.
// Uses the same generator as the page (src/export.js). Run via build.py.
const fs = require('fs'), path = require('path');
const R = path.join(__dirname, '..'), EXPORT = require(path.join(R, 'src', 'export.js'));
const KB = JSON.parse(fs.readFileSync(path.join(R, 'dist', 'kb.json'), 'utf8'));
const SITE = 'https://mkern311.github.io/ai-research-companion-hhn/';
const KEYS = ['problem','result','steps','concepts','refs','practice','own','tech','levels'];
const filled = v => !!(v && (Array.isArray(v) ? v.length : typeof v === 'object' ? Object.keys(v).length : v));
const DESC = {en:'AI use cases along the research process as skills – from the HHN knowledge base “AI in the Research Process” (English).',
  de:'KI-Use-Cases entlang des Forschungsprozesses als Skills – aus der HHN-Wissensbasis „KI im Forschungsprozess“ (Deutsch).'};
const plugins = [];
for (const lang of ['en', 'de']) {
  const name = 'ai-research-' + lang, dir = path.join(R, 'plugins', name);
  fs.rmSync(dir, {recursive:true, force:true});
  fs.mkdirSync(path.join(dir, '.claude-plugin'), {recursive:true});
  fs.writeFileSync(path.join(dir, '.claude-plugin', 'plugin.json'), JSON.stringify({name, description:DESC[lang], version:'2.0.0', author:{name:'Manuel Kern'}, homepage:SITE}, null, 2) + '\n');
  const seen = new Set(); let n = 0;
  for (const [id, en] of Object.entries(KB.ucs.en)) {
    if (en.meta.excursus) continue;   // excursus (LLMs as research objects): not suitable as a standing skill
    const src = (lang === 'de' && KB.ucs.de[id]) || en, s = {};
    KEYS.forEach(k => { s[k] = filled(src.sections[k]) ? src.sections[k] : en.sections[k]; });
    const u = {id, meta:en.meta, title:src.meta.title || en.meta.title, summary:src.summary || en.summary, s};
    let slug = EXPORT.slug(u.title, lang); while (seen.has(slug)) slug += '-' + id.split('-').pop(); seen.add(slug);
    const risk = KB.meta.risk[en.meta.risk], md = EXPORT.skillMd(u, lang, {url:SITE + '#/uc/' + id, riskDef:risk ? (risk.def[lang] || risk.def.en) : ''}).replace(/^name: .*$/m, 'name: ' + slug);
    fs.mkdirSync(path.join(dir, 'skills', slug), {recursive:true});
    fs.writeFileSync(path.join(dir, 'skills', slug, 'SKILL.md'), md); n++;
  }
  plugins.push({name, source:'./plugins/' + name, description:DESC[lang]});
  console.log(`plugins/${name}: ${n} skills`);
}
fs.mkdirSync(path.join(R, '.claude-plugin'), {recursive:true});
fs.writeFileSync(path.join(R, '.claude-plugin', 'marketplace.json'), JSON.stringify({name:'hhn-ai-research', description:'HHN knowledge base: AI in the Research Process', owner:{name:'Manuel Kern'}, plugins}, null, 2) + '\n');
