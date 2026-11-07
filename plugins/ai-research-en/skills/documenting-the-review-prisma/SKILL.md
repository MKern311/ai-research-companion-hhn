---
name: documenting-the-review-prisma
description: "Turn your search log, counts per stage and exclusion reasons into PRISMA flow numbers, remove duplicates, check your report against the PRISMA 2020 checklist and draft the methods paragraph. Use when the user works on: Documenting the review (PRISMA)."
---

# Documenting the review (PRISMA)

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/literatur-8

## Goal

Turn your search log, counts per stage and exclusion reasons into PRISMA flow numbers, remove duplicates, check your report against the PRISMA 2020 checklist and draft the methods paragraph.

Checked PRISMA 2020 flow numbers with every inconsistency flagged, a methods paragraph built only from your log, and a list of PRISMA 2020 and PRISMA-S items still missing.

## When to use

At the end of a review, counts per stage often fail to add up, exclusion reasons are scattered across files, and the PRISMA 2020 checklist becomes an afterthought.

## Workflow with the user

Guide the user through these steps. Where a step says “ask the assistant”, that is you.

1. Paste your search log and the counts per stage.
2. Ask for the PRISMA 2020 flow numbers in a table and a check that they add up, including duplicates removed.
3. Ask for a draft methods paragraph on search and selection.
4. Ask which PRISMA 2020 checklist items your report does not yet cover.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.

## Typical request

```text
I am documenting the search and selection for a literature review. Below is my search log: databases, search dates, search strings and the number of records at each stage, with exclusion reasons. Arrange the numbers for a PRISMA 2020 flow diagram in a table: identified per source, duplicates removed, screened, excluded at title and abstract, reports sought, not retrieved, assessed in full text, excluded with reasons, included. Check that the numbers add up and flag every inconsistency instead of correcting it. Then draft a methods paragraph on the search and selection, using only the facts in my log, and go through the 27 items of the PRISMA 2020 checklist and list which ones my log and draft do not yet cover. If I paste a list of records, mark likely duplicates (same DOI, or same title, year and first author) rather than deleting them.

[paste search log]
```

## Quality check

Every number in the table and the paragraph matches your log, and each inconsistency the assistant flags is real when you recount.

## Limits

- Draw the diagram itself with the official PRISMA 2020 template or a dedicated tool; the assistant prepares the numbers and the text, it does not produce a reliable diagram.
- Risk: Your own unpublished drafts, reviews or third-party content.

## Key concepts

- **PRISMA 2020** – Preferred Reporting Items for Systematic reviews and Meta-Analyses: a reporting guideline, not a method – a 27-item checklist and a flow diagram for reporting why a review was done, how, and what it found. Reproducible decisions come from a pre-specified protocol (PRISMA-P) and its registration, for example on PROSPERO or OSF. Developed in health research, now used across disciplines.
- **PRISMA flow diagram** – Shows records identified per source, duplicates and other removals, records screened and excluded, reports sought and not retrieved, reports assessed, exclusions with reasons, and studies included. Every stage must reconcile arithmetically.
- **PRISMA-S** – A 16-item extension for reporting the search itself: each database and platform, full strings, limits, dates, other methods such as citation chaining, search peer review and the deduplication method.
- **Deduplication** – Removing records found in several databases, usually by DOI or by title, year and first author, with manual checking of near-duplicates. Report the method and the number removed.

## Key references

- Page, M. J., McKenzie, J. E., Bossuyt, P. M., Boutron, I., Hoffmann, T. C., Mulrow, C. D., Shamseer, L., Tetzlaff, J. M., Akl, E. A., Brennan, S. E., Chou, R., Glanville, J., Grimshaw, J. M., Hróbjartsson, A., Lalu, M. M., Li, T., Loder, E. W., Mayo-Wilson, E., McDonald, S., … Moher, D. (2021). The PRISMA 2020 statement: An updated guideline for reporting systematic reviews. BMJ, 372, n71. https://doi.org/10.1136/bmj.n71
- Rethlefsen, M. L., Kirtley, S., Waffenschmidt, S., Ayala, A. P., Moher, D., Page, M. J., Koffel, J. B., & PRISMA-S Group. (2021). PRISMA-S: An extension to the PRISMA Statement for Reporting Literature Searches in Systematic Reviews. Systematic Reviews, 10, 39. https://doi.org/10.1186/s13643-020-01542-z
- Haddaway, N. R., Page, M. J., Pritchard, C. C., & McGuinness, L. A. (2022). PRISMA2020: An R package and Shiny app for producing PRISMA 2020-compliant flow diagrams, with interactivity for optimised digital transparency and Open Synthesis. Campbell Systematic Reviews, 18(2), e1230. https://doi.org/10.1002/cl2.1230

## Tools that help

Covidence
