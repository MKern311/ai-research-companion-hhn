# AGENTS.md – working in this repository

This repository is the knowledge base **AI in the Research Process / KI im Forschungsprozess**. It was built at Heilbronn University of Applied Sciences (HHN) for researchers, doctoral candidates and students. If you are an AI assistant (Claude Code, GitHub Copilot, Codex, …) and the user asks you to look up, add, change, rate or export use cases, follow these rules.

## Layout

| Path | Content |
|---|---|
| `content/usecases/en/<id>.md` | One use case per file, in English. English is the reference version. |
| `content/usecases/de/<id>.md` | The German version with the same `id`. Sections it leaves out fall back to English. |
| `content/phases.json` | The 8 phases (ids `idee`, `literatur`, `design`, `erhebung`, `analyse`, `publikation`, `transfer`, `querschnitt`), in both languages. |
| `content/catalogue.json` | Tools, MCP servers, Microsoft 365 integrations and repos, with notes in both languages. |
| `content/meta.json` | Risk levels, modes, kinds of gain, the four levels and sources. |
| `content/clients.json`, `content/connect.json` | Setup guides per AI application and connection details per MCP server, checked against the official docs on the date given in the file. |
| `materials/` | Open practice data (papers and raw data) with licences. Do not change files without a licence check. |
| `src/` | The page: `app.js`, `i18n.js` (UI strings), `export.js` (skill and Markdown generators), `style.css`, `body.html`. |
| `plugins/`, `.claude-plugin/` | **Generated** Claude Code plugins with one skill per use case. Do not edit by hand. |
| `index.html` | **Generated**. Never edit it; run `python3 build.py`. |

## Use-case file format

```markdown
---
id: literatur-3            # = file name; own use cases: own-<short-name>
phase: literatur           # one of the phase ids
order: 3                   # position within the phase (library use cases only)
title: Data extraction into evidence tables
risk: 3                    # 1 public/non-sensitive · 2 own drafts or third-party content · 3 personal data or decisions that feed results
mode: Co-create            # Assist | Co-create | Delegate
connect: Elicit            # tools from content/catalogue.json, separated by ";"
tools: …                   # also: capabilities, routes, repos, data, practice_data, practice_ref, excursus, author, added
---

One or two sentences: what AI does and what the researcher checks.

## Problem
## Result
## Steps                     (numbered list)
## Concepts                  (### Term + paragraph each)
## References                (- citation doi:10.xxxx/…)
## Practice exercise         (### Task · ### Prompt in a ```text fence · ### Check · ### Attachment note)
## Own material              (### Bring · ### Steps · ### Prompt · ### Check · ### Limit)
## Technology
## Levels                    (### Chat · ### Project / Notebook · ### Custom assistant · ### Automation / own code)
```

German headings: Problem, Ergebnis, Vorgehen, Konzepte, Literatur, Übung (Aufgabe, Prompt, Prüfung, Hinweis zu den Dateien), Mit eigenem Material (Mitbringen, Schritte, Prompt, Prüfung, Grenze), Technik, Stufen (Chat, Projekt / Notebook, Eigener Assistent, Automatisierung / eigener Code). The parser accepts English and German headings in every file. Front-matter keys always stay in English.

## Rules for content

- **Tool-neutral.** Write "the AI assistant". Name products only as equal examples, e.g. "(e.g. Copilot, ChatGPT, Claude or Gemini)".
- **Every prompt has a check.** Something concrete the user can verify: a number, a quote, a page, a count.
- **Never invent** references, DOIs, tool features, MCP endpoints or menu paths. Check unclear facts in the official documentation and say when you could not.
- Level-4 texts (automation / own code) end with "Check data protection and approval with your university first." (DE: „Prüfen Sie Datenschutz und Freigabe vorher mit Ihrer Hochschule.“).
- **Style.** British English. German uses the formal "Sie". Use an en dash with spaces " – " and never an em dash.
- **Deliberate errors.** The practice exercises contain three: PRISMA 70 vs 72, 0.29 vs 0.27 °C per decade, and the C3 reference pages. Never "fix" them.
- **New use cases.** Check first whether an existing use case covers the idea. If one does, extend it instead of adding a duplicate.
- **Privacy.** No personal or confidential data goes into use cases, examples or issues.

## Typical tasks

- **Add a use case:** write `content/usecases/<lang>/own-<name>.md` in the format above, then run `python3 build.py`. The build stops and names the file if the format is broken.
- **Turn a use case into a skill:** use the generated folder `plugins/ai-research-<lang>/skills/<slug>/`, or call `EXPORT.skillMd()` in `src/export.js`.
- **Translate:** copy the English file to `content/usecases/de/`, change only `title` in the front matter, use the German headings and translate the prompts.
- **Check the build:** `python3 build.py`, then `python3 -m http.server` and open http://localhost:8000.
