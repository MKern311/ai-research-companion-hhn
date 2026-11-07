---
id: querschnitt-3
phase: querschnitt
order: 3
title: Personal knowledge base
risk: 2
mode: Assist
potential: 3
capabilities: recherche; synthese
routes: files; connected; external
connect: Zotero; Notion; Obsidian
tools: Zotero; Obsidian; Gemini Notebook (formerly NotebookLM)
data: AB; C1
practice_data: AB
practice_ref: C1
---

Turn notes, highlights and annotations into atomic notes with a shared tag vocabulary and typed links, so that you can search and connect them in your notes tool.

## Problem

Notes, highlights and annotations sit in different tools; you remember reading something relevant but cannot find it, and connections between sources stay in your head.

## Result

Atomic notes with IDs and sources, a small controlled tag vocabulary and typed links – supports, contradicts, extends, uses data or method of – that structure your notes tool for later search and synthesis.

## Steps

1. Upload a handful of reading notes or abstracts
2. Ask for atomic notes, each with an ID and source
3. Agree a small controlled tag vocabulary
4. Ask for typed links between notes, with evidence
5. Check two suggested links against the originals

## Concepts

### Zettelkasten (slip-box)

Luhmann's note system: atomic notes with one idea each, written in your own words, with a unique ID and explicit links to other notes. Links rather than folders create structure, so new connections become visible over time.

### Literature notes and permanent notes

Ahrens (2017), building on Luhmann: a literature note records briefly what a source says, with the page; a permanent note states one idea in your own words and links it to other notes. AI can draft literature notes; the permanent notes and their links are your own thinking.

### Controlled vocabulary

A fixed list of defined tags used consistently, as opposed to ad hoc tagging. Keeping 10–20 defined tags avoids synonyms such as 'heatwave', 'heat wave' and 'extreme heat' that split your searches.

### Typed citation relations

Labelling why one source relates to another – supports, disputes, extends, uses data from, uses method of – as formalised in the Citation Typing Ontology (CiTO; Peroni & Shotton, 2012). Typed links speed up later synthesis more than plain 'related' tags.

## References

- Luhmann, N. (1981). Kommunikation mit Zettelkästen: Ein Erfahrungsbericht. In H. Baier, H. M. Kepplinger, & K. Reumann (Eds.), Öffentliche Meinung und sozialer Wandel (pp. 222–228). Westdeutscher Verlag. doi:10.1007/978-3-322-87749-9_19
- Ahrens, S. (2017). How to take smart notes: One simple technique to boost writing, learning and thinking. CreateSpace.
- Peroni, S., & Shotton, D. (2012). FaBiO and CiTO: Ontologies for describing bibliographic resources and citations. Journal of Web Semantics, 17, 33–43. doi:10.1016/j.websem.2012.08.001

## Practice exercise

### Task

Turn six abstracts into atomic notes with a controlled tag vocabulary and typed links. You learn whether the assistant's links rest on sentences you can find in the abstracts or are merely plausible because the papers share a topic.

### Prompt

```text
I am a postgraduate researcher setting up a note system. The attached text file holds the abstracts of twelve papers; use only these six: A2, B1, B2, C1, C3 and C6. 1) Write one atomic note per paper: a short ID (e.g. B2-1), the main claim in one or two plain sentences, and the citation. 2) Suggest a controlled vocabulary of 8 to 12 tags, each with a one-line definition and any synonyms it replaces, and give each note two or three tags. 3) List up to five links between the notes, each typed as supports, contradicts, extends, uses data of or uses method of, and quote the sentence from each abstract that the link rests on. Leave out links that rest only on a shared topic, and say when a link is uncertain.
```

### Check

Ctrl+F every quote in the file. C3 uses the method of B2 (both name a 'risk-based attribution methodology'); C6 analyses the series B1 documents, but a 2021 paper cannot use v2.1 from 2025. 'C1 uses data of A2' looks right but is too strong: C1's Methods use daily land maxima, not A2's land/ocean record. Reject links resting only on a shared topic.

## Own material

### Bring

Three to five of your own reading notes, highlights or annotations, or abstracts of open-access papers, as one Word file or pasted text.

### Steps

1. Attach or paste the notes and ask for atomic notes: one idea each, with an ID and source.
2. Ask for a controlled vocabulary of 10 to 15 tags with definitions and the synonyms each replaces.
3. Ask for typed links between notes: supports, contradicts, extends, uses data or method of.
4. Check two suggested links against the original notes.

### Prompt

```text
I am a postgraduate researcher in [discipline] building a note system in [Zotero / OneNote / Obsidian / Notion]. Attached are my notes on [number] sources. 1) Rewrite them as atomic notes: one idea per note, in plain words, each with a short ID, the source and the page if my note gives one. 2) Suggest a controlled vocabulary of 10 to 15 tags, each with a one-line definition and the synonyms it replaces, and apply two or three tags to each note. 3) Suggest up to five links between notes, each typed as supports, contradicts, extends, uses data of or uses method of, and name the sentence in my notes that each link rests on. Use only what is in my notes; leave out links that rest only on a shared topic, and say when a link is uncertain.
```

### Check

Pick two suggested links and confirm that both notes really say what the assistant claims; each atomic note holds one idea and names its source.

### Limit

A plain chat does not keep a searchable library of your files; for a lasting knowledge base, use a project or notebook (level 2) or your notes tool's own search. Notion can be connected if your university permits it; the Zotero and Obsidian MCP servers run only locally.

## Technology

Upload your notes or an abstracts file to your AI assistant and copy the notes, tags and links into your notes tool. Notion can be connected through an MCP server or integration if your university permits it; the Zotero and Obsidian MCP servers run locally – with a desktop assistant or a code editor such as VS Code, not in a plain web chat.

## Levels

### Chat

Run the starter prompt with the AB abstracts file attached. In the same chat, ask the assistant to recheck each link and drop any whose quoted sentence does not name the data, method or claim its link type requires.

### Project / Notebook

Add the AB abstracts, your own reading notes and a tag vocabulary document as references, and keep adding notes as you read. Ask for atomic notes and typed links across everything in the notebook – depending on your tool, it works mainly from your material, so you find what you read months ago, and the tag document keeps tags consistent.

### Custom assistant

Instructions: the atomic note format (ID, one idea, source, page), your controlled tag vocabulary with definitions, the five link types, a quoted sentence for every link, no links resting only on a shared topic. Knowledge: your tag vocabulary. Starter prompts: "Atomic notes from these highlights" and "Typed links between these notes". Reusable for every batch of reading, so new notes match the old ones.

### Automation / own code

Connect Notion through its remote MCP server so the assistant writes approved notes, tags and links straight into your Notion database – a basic custom assistant cannot write into another tool. The Zotero and Obsidian servers run only locally. On GitHub: keep your notes as Markdown files in a private repository, and a script writes them into Notion through its API. Check data protection and approval with your university first.
