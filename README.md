# AI in the Research Process – HHN edition

A working basis for researchers and doctoral candidates at Heilbronn University of Applied Sciences (HHN). It covers 67 AI use cases along the research process, from the first idea to transfer. You rate them in two steps: research value first, then a hands-on test with an AI assistant. Each use case has a starter prompt, a check, practice data and four levels: chat, project / notebook, custom assistant, and automation / own code. The guides are tool-neutral, so they work with any general assistant your university provides or permits (e.g. Copilot, ChatGPT, Claude or Gemini).

## How it works

- `index.html` is a single static page, built from `src/` with `python3 build.py`. It uses no framework and no external scripts. Fonts (Geist, SIL OFL) are served from `assets/fonts/`.
- **Data stays in the browser.** Ratings, tests, findings and added use cases are kept in `localStorage`, and there is no backend. For a workshop, each group names its laptop in the menu (gear icon). One laptop then merges the copied group data, and Results compares groups and disciplines.
- No personal data is collected.

## Develop

```bash
python3 build.py          # writes index.html
python3 -m http.server    # open http://localhost:8000
```

Where to edit:
- Content: `src/data.js`, `src/usecases/details.json` and `src/guides/`.
- Layout: `src/body.html` and `src/style.css`.
- Intro slides: `src/intro/`.
- Behaviour: `src/app.js`.

Deploy by pushing to `main`, as GitHub Pages serves the repository root.

## Practice data

`materials/` holds open-access papers and raw datasets on weather and climate change, licence-checked (see `materials/README.md`). `python3 tools/make_pack.py` regenerates the README, `pack.json` and the zips in `dist/`. The zips are attached to a GitHub release (tag `practice-data-<snapshot>`) and are not committed.

---
Prof. Dr. Manuel Kern · Heilbronn University of Applied Sciences · no product endorsement
