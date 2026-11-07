---
id: literatur-8
phase: literatur
order: 8
title: Documenting the review (PRISMA)
risk: 2
mode: Assist
potential: 2
capabilities: synthese; generierung
routes: chat; files; external
tools: Covidence
repos: prisma2020; slr-prisma
---

Turn your search log, counts per stage and exclusion reasons into PRISMA flow numbers, remove duplicates, check your report against the PRISMA 2020 checklist and draft the methods paragraph.

## Problem

At the end of a review, counts per stage often fail to add up, exclusion reasons are scattered across files, and the PRISMA 2020 checklist becomes an afterthought.

## Result

Checked PRISMA 2020 flow numbers with every inconsistency flagged, a methods paragraph built only from your log, and a list of PRISMA 2020 and PRISMA-S items still missing.

## Steps

1. Keep a search log from the start: source, date, string, hits
2. Paste the log and ask for flow numbers and arithmetic checks
3. Fix flagged inconsistencies yourself, then draft the methods text
4. List PRISMA 2020 and PRISMA-S items still missing
5. Draw the diagram with the PRISMA2020 Shiny app

## Concepts

### PRISMA 2020

Preferred Reporting Items for Systematic reviews and Meta-Analyses: a reporting guideline, not a method – a 27-item checklist and a flow diagram for reporting why a review was done, how, and what it found. Reproducible decisions come from a pre-specified protocol (PRISMA-P) and its registration, for example on PROSPERO or OSF. Developed in health research, now used across disciplines.

### PRISMA flow diagram

Shows records identified per source, duplicates and other removals, records screened and excluded, reports sought and not retrieved, reports assessed, exclusions with reasons, and studies included. Every stage must reconcile arithmetically.

### PRISMA-S

A 16-item extension for reporting the search itself: each database and platform, full strings, limits, dates, other methods such as citation chaining, search peer review and the deduplication method.

### Deduplication

Removing records found in several databases, usually by DOI or by title, year and first author, with manual checking of near-duplicates. Report the method and the number removed.

## References

- Page, M. J., McKenzie, J. E., Bossuyt, P. M., Boutron, I., Hoffmann, T. C., Mulrow, C. D., Shamseer, L., Tetzlaff, J. M., Akl, E. A., Brennan, S. E., Chou, R., Glanville, J., Grimshaw, J. M., Hróbjartsson, A., Lalu, M. M., Li, T., Loder, E. W., Mayo-Wilson, E., McDonald, S., … Moher, D. (2021). The PRISMA 2020 statement: An updated guideline for reporting systematic reviews. BMJ, 372, n71. doi:10.1136/bmj.n71
- Rethlefsen, M. L., Kirtley, S., Waffenschmidt, S., Ayala, A. P., Moher, D., Page, M. J., Koffel, J. B., & PRISMA-S Group. (2021). PRISMA-S: An extension to the PRISMA Statement for Reporting Literature Searches in Systematic Reviews. Systematic Reviews, 10, 39. doi:10.1186/s13643-020-01542-z
- Haddaway, N. R., Page, M. J., Pritchard, C. C., & McGuinness, L. A. (2022). PRISMA2020: An R package and Shiny app for producing PRISMA 2020-compliant flow diagrams, with interactivity for optimised digital transparency and Open Synthesis. Campbell Systematic Reviews, 18(2), e1230. doi:10.1002/cl2.1230

## Practice exercise

### Task

Use a practice search log whose six included studies are papers from the pack; it contains one deliberate error. You learn whether your AI assistant flags the inconsistency or silently corrects it, and whether its methods paragraph adds facts not in the log.

### Prompt

```text
I am documenting the search and selection for a practice review on trends in, and the attribution of, heat and drought extremes. Search log: Scopus, searched 15 October 2026, 412 records; Web of Science Core Collection, same date, 356 records. Duplicates removed: 198. Records screened: 570. Excluded at title and abstract: 489. Reports sought: 81. Not retrieved: 3. Reports assessed in full text: 78. Excluded: 72 (no quantitative trend or attribution result 40, not an extreme event 25, preprint 5). Included: 6 (Christidis et al. 2020 and 2023, Vautard et al. 2023, Perkins-Kirkpatrick and Lewis 2020, Zachariah et al. 2023, Schumacher et al. 2024). Arrange the numbers for a PRISMA 2020 flow diagram in a table and check that they add up; flag every inconsistency instead of correcting it. Then draft a methods paragraph using only facts in this log, and list the PRISMA 2020 items it does not yet cover.
```

### Check

Recount: each stage follows correctly (768 − 198 = 570, down to 78 − 72 = 6), but the exclusion reasons sum to 70, not 72. The assistant must flag this, and the paragraph must not invent search strings.

## Own material

### Bring

A search log: databases, search dates, search strings and the number of records at each stage – from your own review or from a practice search.

### Steps

1. Paste your search log and the counts per stage.
2. Ask for the PRISMA 2020 flow numbers in a table and a check that they add up, including duplicates removed.
3. Ask for a draft methods paragraph on search and selection.
4. Ask which PRISMA 2020 checklist items your report does not yet cover.

### Prompt

```text
I am documenting the search and selection for a literature review. Below is my search log: databases, search dates, search strings and the number of records at each stage, with exclusion reasons. Arrange the numbers for a PRISMA 2020 flow diagram in a table: identified per source, duplicates removed, screened, excluded at title and abstract, reports sought, not retrieved, assessed in full text, excluded with reasons, included. Check that the numbers add up and flag every inconsistency instead of correcting it. Then draft a methods paragraph on the search and selection, using only the facts in my log, and go through the 27 items of the PRISMA 2020 checklist and list which ones my log and draft do not yet cover. If I paste a list of records, mark likely duplicates (same DOI, or same title, year and first author) rather than deleting them.

[paste search log]
```

### Check

Every number in the table and the paragraph matches your log, and each inconsistency the assistant flags is real when you recount.

### Limit

Draw the diagram itself with the official PRISMA 2020 template or a dedicated tool; the assistant prepares the numbers and the text, it does not produce a reliable diagram.

## Technology

Paste the log into your AI assistant; upload a CSV export of records if you want duplicates marked by DOI or title (if your tool does not accept the file type, save it as .xlsx or .txt). Draw the final diagram with the PRISMA2020 R package or Shiny app. For practice, use the search log in the starter prompt.

## Levels

### Chat

Paste the practice log with the starter prompt. In the same chat, ask the assistant to add up every stage and the exclusion reasons separately and show each sum – without changing any number.

### Project / Notebook

Add your running search log (.docx or .xlsx), the PRISMA 2020 and PRISMA-S checklists and your methods draft. Ask whether the counts add up and which items are still missing. The log grows over months of searching and screening; the notebook keeps numbers and text consistent each time you come back.

### Custom assistant

Call it 'PRISMA checker'. Instructions: arrange the counts for the PRISMA 2020 flow diagram, check every sum and flag inconsistencies instead of correcting them, draft the methods paragraph only from facts in the log, list missing PRISMA 2020 items, and never invent search strings. Knowledge: the PRISMA 2020 checklist. Switch on code execution / data analysis if your tool offers it, for the sums. Starter prompt: 'Check this search log.'
