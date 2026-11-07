"""Build index.html from src/ (single self-contained file for GitHub Pages or local use)."""
import json, pathlib
R = pathlib.Path(__file__).parent
src = lambda f: (R / 'src' / f).read_text(encoding='utf-8')
cfg = json.loads((R / 'config.json').read_text()) if (R / 'config.json').exists() else {}
guides = {}
for f in sorted((R / 'src' / 'guides').glob('part_*.json')):
    guides.update(json.loads(f.read_text(encoding='utf-8')))
body = src('body.html').replace('{{INTRO}}', src('intro/intro.html'))   # intro deck: self-contained block (scoped CSS, one IIFE)
pack = json.loads((R / 'materials' / 'pack.json').read_text(encoding='utf-8'))
details = json.loads((R / 'src' / 'usecases' / 'details.json').read_text(encoding='utf-8'))
# Geist and Geist Mono (SIL OFL, assets/fonts/) – served with the page, no third-party font requests
FONTS = '''@font-face{font-family:"Geist";src:url("assets/fonts/geist-latin-wght-normal.woff2") format("woff2");font-weight:100 900;font-style:normal;font-display:swap}
@font-face{font-family:"Geist Mono";src:url("assets/fonts/geist-mono-latin-wght-normal.woff2") format("woff2");font-weight:100 900;font-style:normal;font-display:swap}'''
html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<link rel="icon" href="favicon.ico" sizes="32x32">
<link rel="icon" href="assets/icons/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="assets/icons/apple-touch-icon.png">
<title>AI in the Research Process · HHN</title>
<style>
{FONTS}
{src('style.css')}
{src('intro/story.css')}
</style>
</head>
<body>
{body}
<script>window.AIRP_CONFIG = {json.dumps(cfg)};</script>
<script>
{src('data.js')}
const GUIDES = {json.dumps(guides, ensure_ascii=False)};
const PACK = {json.dumps(pack, ensure_ascii=False)};
const DETAILS = {json.dumps(details, ensure_ascii=False)};
{src('app.js')}
</script>
</body>
</html>
"""
(R / 'index.html').write_text(html, encoding='utf-8')
print('built index.html', len(html), 'bytes; remote =', bool(cfg.get('supabaseUrl')))
