# AI in the Research Process · KI im Forschungsprozess

**Knowledge base of Heilbronn University of Applied Sciences (HHN)** for researchers, doctoral candidates and students. It describes 67 AI use cases along the research process, from the first idea to transfer, in English and German.

**Open the page:** https://mkern311.github.io/ai-research-companion-hhn/

## What you can do with it

- **Look things up.** Each use case explains the problem and the result. It comes with steps, methods and references, a starter prompt with a **check**, practice data and four levels: chat, project / notebook, custom assistant, and automation / own code.
- **Collect and assess.** Rate value and feasibility, note what worked and add your own use cases. Everything stays in your browser. You can export it as JSON, CSV or a Markdown report.
- **Bring it into your AI.** A guide per use case and per application (Claude, Claude Code, ChatGPT, Microsoft 365 Copilot, VS Code) gives you a ready **skill** (SKILL.md / ZIP), the text for a **custom assistant** or a **project rules document**. It also has the steps to connect the matching tools via **MCP** and to use repositories. Nothing is installed automatically; you do each step in your own application.

The guides are tool-neutral: they work with whichever assistant your university provides or permits. Menu paths and configuration formats were checked against the official documentation on the date shown in `content/clients.json`.

## Your own copy

```bash
git clone https://github.com/MKern311/ai-research-companion-hhn.git
cd ai-research-companion-hhn
python3 build.py          # builds index.html and the plugins (plugins need Node.js)
python3 -m http.server    # open http://localhost:8000
```

- **Use cases are Markdown files:** `content/usecases/en/<id>.md` and `content/usecases/de/<id>.md`. The format is described in [AGENTS.md](AGENTS.md).
- **With an AI coding assistant:** open the folder in Claude Code or VS Code. `AGENTS.md` / `CLAUDE.md` explain the structure, so you can ask the assistant to "add a use case on …" or "translate own-xyz into German".
- **As a Claude Code plugin:** `/plugin marketplace add MKern311/ai-research-companion-hhn`, then `/plugin install ai-research-de@hhn-ai-research` (or `ai-research-en`). This gives you one skill per use case.
- **Suggest a use case:** in the tool, open your own use case and choose "Suggest to HHN". This opens a pre-filled GitHub issue.

## Structure

| Folder | Content |
|---|---|
| `content/` | Use cases (Markdown), phases, tool catalogue, levels, setup guides |
| `src/` | The page (HTML, CSS, JavaScript – no framework, no external scripts) |
| `tools/` | Parser (`content.py`), plugin build, practice-data pack |
| `materials/` | Open practice data (papers and raw data on weather and climate change) |
| `plugins/` | Generated skills (do not edit by hand) |

## Licence

- Code: MIT (`LICENSE`).
- Content: CC BY 4.0 (`content/LICENSE.md`).
- Practice data: licences of their providers (`materials/README.md`).
- The HHN logo is not licensed for reuse.

---
Prof. Dr. Manuel Kern · Heilbronn University of Applied Sciences · no product endorsement
