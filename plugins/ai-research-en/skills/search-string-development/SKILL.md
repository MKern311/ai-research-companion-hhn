---
name: search-string-development
description: "Draft and iteratively refine Boolean search strings, including synonyms and subject headings, for bibliographic databases – and check them against the PRESS checklist before you run them. Use when the user works on: Search string development."
---

# Search string development

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/literatur-0

## Goal

Draft and iteratively refine Boolean search strings, including synonyms and subject headings, for bibliographic databases – and check them against the PRESS checklist before you run them.

A documented string in database syntax, with concept blocks, synonyms and a PRESS self-check – a sound starting point to refine with a librarian and to report following PRISMA-S.

## When to use

Boolean strings built by trial and error miss synonyms and spelling variants or return thousands of hits – and few researchers have their strategy peer-reviewed against PRESS before running it.

## Workflow with the user

Guide the user through these steps. Where a step says “ask the assistant”, that is you.

1. Paste your research question and name the database.
2. Ask for a Boolean search string with synonyms and subject headings.
3. Ask for a PRESS check of the string and what each block may miss.
4. Run the string in the database and compare the hit count with your usual search.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.

## Typical request

```text
I am a postgraduate researcher in [discipline]. My research question is: [question]. Build a Boolean search string for [database] with three concept blocks, synonyms joined by OR, blocks joined by AND, and truncation where useful. Suggest subject headings (for example MeSH) if the database uses them. Show the string in a code block, then a short table: block, terms, what it may miss. Then review the string against the PRESS checklist: translation of the question, Boolean and proximity operators, subject headings, text words and spelling variants, spelling and syntax, limits and filters. Say whether the string leans towards sensitivity or specificity. Use only syntax that [database] supports; if unsure about a field code, say so.
```

## Quality check

The string runs in the database without syntax errors and finds two or three papers you already know are relevant.

## Limits

- Risk: Public or your own non-sensitive material; errors are easy to spot.

## Key concepts

- **Building-block approach** – Each key concept of the question becomes a block of synonyms, spelling variants and subject headings joined by OR; blocks are joined by AND. Two or three blocks are usual; outcomes are often left out to keep sensitivity.
- **PRESS 2015 guideline** – Peer Review of Electronic Search Strategies: checks translation of the question, Boolean and proximity operators, subject headings, text words, spelling and syntax, and limits and filters. Developed for health reviews, applicable to any database search.
- **Sensitivity vs precision** – Sensitivity (recall) is the share of all relevant records a search finds; precision is the share of retrieved records that are relevant. Systematic reviews favour sensitivity; checking known key papers gives a rough recall test.
- **Controlled vocabulary vs free text** – Subject headings (MeSH in MEDLINE, Emtree in Embase, thesaurus terms in ERIC or PsycINFO) index concepts consistently; free-text terms catch new or poorly indexed records. Combine both; multidisciplinary databases such as Scopus rely mainly on free text.
- **PRISMA-S** – A 16-item extension of PRISMA for reporting literature searches: databases and platforms, full search strings, limits, dates, other methods, search peer review and deduplication. Use it to document your string in the methods section.

## Key references

- McGowan, J., Sampson, M., Salzwedel, D. M., Cogo, E., Foerster, V., & Lefebvre, C. (2016). PRESS Peer Review of Electronic Search Strategies: 2015 guideline statement. Journal of Clinical Epidemiology, 75, 40–46. https://doi.org/10.1016/j.jclinepi.2016.01.021
- Rethlefsen, M. L., Kirtley, S., Waffenschmidt, S., Ayala, A. P., Moher, D., Page, M. J., Koffel, J. B., & PRISMA-S Group. (2021). PRISMA-S: An extension to the PRISMA Statement for Reporting Literature Searches in Systematic Reviews. Systematic Reviews, 10, 39. https://doi.org/10.1186/s13643-020-01542-z
