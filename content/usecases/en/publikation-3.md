---
id: publikation-3
phase: publikation
order: 3
title: Journal selection & formatting
risk: 1
mode: Delegate
potential: 2
capabilities: recherche; agentisch
routes: chat; files; connected; external
connect: Zotero; Overleaf; OpenAlex
tools: Zotero; Overleaf; EndNote
repos: kd-citation
data: C2
practice_data: C2
---

Find suitable journals by scope and requirements; apply formatting guidelines, citation styles and LaTeX or BibTeX conventions.

## Problem

Finding a journal whose aims and scope fit, then reformatting references and layout to its guidelines, takes hours – and a desk rejection for poor fit costs weeks.

## Result

A shortlist of legitimate journals with links to their own guidelines, a formatting checklist for your choice, and references converted to its style with missing BibTeX fields flagged.

## Steps

1. Paste your abstract and ask for candidate journals with links
2. Confirm scope, article type and limits on the journals' own pages
3. Check unfamiliar journals with Think. Check. Submit. and DOAJ
4. Turn one journal's guidelines into a submission checklist
5. Convert references to its style or BibTeX; fill missing fields

## Concepts

### Aims and scope fit

Editors desk-reject manuscripts outside a journal's stated aims and scope or article types. Judge fit from the aims and scope page, accepted article types and recent issues, not from the journal title.

### Think. Check. Submit.

A cross-publisher checklist for judging whether a journal is trustworthy: known publisher and editorial board, transparent peer review and fees, indexing (for open-access journals, the Directory of Open Access Journals, DOAJ). Use it against predatory journals.

### Citation style families

Author–date styles (APA 7, Harvard, Chicago author–date) cite name and year in the text and sort references alphabetically; numeric styles (Vancouver, IEEE, Nature) number citations by order of appearance. The journal's guide decides the details.

### BibTeX entry types and fields

Each entry type has required fields: @article needs author, title, journal and year; @incollection (a chapter in an edited book) needs booktitle and publisher. Volume, pages and DOI are optional to BibTeX but expected by most journals.

### CRediT taxonomy

Contributor Roles Taxonomy: 14 roles such as conceptualisation, methodology, formal analysis and writing – original draft. Many journals ask for a CRediT statement at submission.

## References

- Allen, L., Scott, J., Brand, A., Hlava, M., & Altman, M. (2014). Publishing: Credit where credit is due. Nature, 508(7496), 312–313. doi:10.1038/508312a
- American Psychological Association. (2020). Publication manual of the American Psychological Association (7th ed.).

## Practice exercise

### Task

Use the abstract of the Myhre et al. (2019) paper to ask for candidate journals, then convert five of its references to BibTeX. You learn whether the assistant's journal facts match the publishers' pages and whether it picks the right BibTeX entry type.

### Prompt

```text
Attached is the Myhre et al. (2019) PDF. Treat its abstract as the abstract of my manuscript in climate science. 1) Suggest five peer-reviewed journals whose published aims and scope fit this work, including Scientific Reports. Give a table: journal, publisher, why it fits, article type and word limit, reference style, open-access options, link to the author guidelines page. Use only the journals' own websites and cite the link; if you are unsure of a detail, say so. 2) Convert references 1 to 5 of the PDF into BibTeX, choosing the correct entry type for each, and flag missing fields. Do not invent DOIs or page numbers.
```

### Check

Open two guideline pages and confirm word limit and reference style. In the BibTeX, reference 2 (an IPCC report chapter) should be @incollection; the reference list prints no DOI, so the assistant must not invent one. If it adds 10.1017/CBO9781107415324.016 ('Clouds and Aerosols'), that DOI is real – verify it rather than accept it. The other four DOIs must match those printed in the reference list.

## Own material

### Bring

The abstract of a paper you are writing (or an open-access abstract from your field) and the name of one journal you are considering.

### Steps

1. With web search switched on, paste your abstract and ask for five candidate journals with links to their author guidelines.
2. Open two of the linked guideline pages and compare scope and word limits.
3. Paste one journal's author guidelines and ask for a formatting checklist.
4. Tick the checklist against your manuscript, including citation style and, if you write in LaTeX, the BibTeX entries.

### Prompt

```text
I am a postgraduate researcher in [discipline] preparing a manuscript. My abstract is: [paste abstract]. Suggest five peer-reviewed journals whose published aims and scope fit this work, including [journal I am considering]. Give a table with: journal, publisher, why it fits, article type and word limit, reference style, open-access options, and a link to the author guidelines page. Use only information from the journals' own websites and cite the link. If I paste a few references or BibTeX entries, convert them to the journal's citation style and flag missing fields. If you are not sure about a detail, say so; do not invent journals or requirements.
```

### Check

Open the author guidelines of two suggested journals and confirm that the scope, word limit and reference style match what the assistant stated.

## Technology

Many assistants can search the web for journals and guideline pages, depending on your tool and settings; with OpenAlex connected through a low-code platform or your own code (check with your university first) it can check publication venues directly. The Zotero and Overleaf MCP servers run locally – with a coding assistant in your editor or a desktop assistant that supports MCP, not in a plain browser chat.

## Levels

### Chat

Run the starter prompt with web search switched on (depending on your tool and settings) and the Myhre PDF attached. Then, in the same chat, paste the author guidelines of your preferred journal and ask for a formatting checklist.

### Project / Notebook

Add the author guidelines of your shortlisted journals (PDF or Word), your manuscript and your .bib file saved as .txt; for the practice, the Myhre paper (C2). Ask for a side-by-side comparison of word limits, reference styles and open-access options. Depending on your tool, the project or notebook answers only from the saved guidelines, which leaves less room for invented requirements.

### Custom assistant

Create a configured assistant, for example "Journal and BibTeX helper" (e.g. a Copilot agent, custom GPT, Gemini Gem or Claude project). In the standing instructions, set the output: a journal table with publisher, fit, article type, word limit, reference style, open-access options and guideline link; use only the journals' own pages (keep web search on if your tool offers it); BibTeX with correct entry types and missing fields flagged; never invent journals, DOIs or page numbers. Starter prompts: "Suggest five journals for this abstract." and "Convert these references to BibTeX." Reusable for every manuscript.

### Automation / own code

Connect the OpenAlex MCP server, so the assistant can look up which venues publish work like yours and check reference metadata in a scholarly database rather than the open web – a configured assistant without connections cannot reach external services. On GitHub: a script queries the OpenAlex API for the venues where similar papers appear and checks your references against Crossref. Check data protection and approval with your university first.
