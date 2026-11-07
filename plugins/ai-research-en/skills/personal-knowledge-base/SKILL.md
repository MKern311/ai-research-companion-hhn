---
name: personal-knowledge-base
description: "Turn notes, highlights and annotations into atomic notes with a shared tag vocabulary and typed links, so that you can search and connect them in your notes tool. Use when the user works on: Personal knowledge base."
---

# Personal knowledge base

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/querschnitt-3

## Goal

Turn notes, highlights and annotations into atomic notes with a shared tag vocabulary and typed links, so that you can search and connect them in your notes tool.

Atomic notes with IDs and sources, a small controlled tag vocabulary and typed links – supports, contradicts, extends, uses data or method of – that structure your notes tool for later search and synthesis.

## When to use

Notes, highlights and annotations sit in different tools; you remember reading something relevant but cannot find it, and connections between sources stay in your head.

## Procedure

1. Attach or paste the notes and ask for atomic notes: one idea each, with an ID and source.
2. Ask for a controlled vocabulary of 10 to 15 tags with definitions and the synonyms each replaces.
3. Ask for typed links between notes: supports, contradicts, extends, uses data or method of.
4. Check two suggested links against the original notes.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.
- Instructions: the atomic note format (ID, one idea, source, page), your controlled tag vocabulary with definitions, the five link types, a quoted sentence for every link, no links resting only on a shared topic. Knowledge: your tag vocabulary. Starter prompts: "Atomic notes from these highlights" and "Typed links between these notes". Reusable for every batch of reading, so new notes match the old ones.

## Starter prompt

```text
I am a postgraduate researcher in [discipline] building a note system in [Zotero / OneNote / Obsidian / Notion]. Attached are my notes on [number] sources. 1) Rewrite them as atomic notes: one idea per note, in plain words, each with a short ID, the source and the page if my note gives one. 2) Suggest a controlled vocabulary of 10 to 15 tags, each with a one-line definition and the synonyms it replaces, and apply two or three tags to each note. 3) Suggest up to five links between notes, each typed as supports, contradicts, extends, uses data of or uses method of, and name the sentence in my notes that each link rests on. Use only what is in my notes; leave out links that rest only on a shared topic, and say when a link is uncertain.
```

## Quality check

Pick two suggested links and confirm that both notes really say what the assistant claims; each atomic note holds one idea and names its source.

## Limits

- A plain chat does not keep a searchable library of your files; for a lasting knowledge base, use a project or notebook (level 2) or your notes tool's own search. Notion can be connected if your university permits it; the Zotero and Obsidian MCP servers run only locally.
- Risk: Your own unpublished drafts, reviews or third-party content.

## Key concepts

- **Zettelkasten (slip-box)** – Luhmann's note system: atomic notes with one idea each, written in your own words, with a unique ID and explicit links to other notes. Links rather than folders create structure, so new connections become visible over time.
- **Literature notes and permanent notes** – Ahrens (2017), building on Luhmann: a literature note records briefly what a source says, with the page; a permanent note states one idea in your own words and links it to other notes. AI can draft literature notes; the permanent notes and their links are your own thinking.
- **Controlled vocabulary** – A fixed list of defined tags used consistently, as opposed to ad hoc tagging. Keeping 10–20 defined tags avoids synonyms such as 'heatwave', 'heat wave' and 'extreme heat' that split your searches.
- **Typed citation relations** – Labelling why one source relates to another – supports, disputes, extends, uses data from, uses method of – as formalised in the Citation Typing Ontology (CiTO; Peroni & Shotton, 2012). Typed links speed up later synthesis more than plain 'related' tags.

## Key references

- Luhmann, N. (1981). Kommunikation mit Zettelkästen: Ein Erfahrungsbericht. In H. Baier, H. M. Kepplinger, & K. Reumann (Eds.), Öffentliche Meinung und sozialer Wandel (pp. 222–228). Westdeutscher Verlag. https://doi.org/10.1007/978-3-322-87749-9_19
- Ahrens, S. (2017). How to take smart notes: One simple technique to boost writing, learning and thinking. CreateSpace.
- Peroni, S., & Shotton, D. (2012). FaBiO and CiTO: Ontologies for describing bibliographic resources and citations. Journal of Web Semantics, 17, 33–43. https://doi.org/10.1016/j.websem.2012.08.001

## Tools that help

Zotero · Notion · Obsidian · Gemini Notebook (formerly NotebookLM)
