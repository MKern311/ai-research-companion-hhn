---
id: literatur-0
phase: literatur
order: 0
title: Search string development
risk: 1
mode: Co-create
potential: 3
capabilities: generierung
routes: chat; external
repos: kd-literature-review
data: B2; B3; C1
practice_ref: B2; B3; C1
---

Draft and iteratively refine Boolean search strings, including synonyms and subject headings, for bibliographic databases – and check them against the PRESS checklist before you run them.

## Problem

Boolean strings built by trial and error miss synonyms and spelling variants or return thousands of hits – and few researchers have their strategy peer-reviewed against PRESS before running it.

## Result

A documented string in database syntax, with concept blocks, synonyms and a PRESS self-check – a sound starting point to refine with a librarian and to report following PRISMA-S.

## Steps

1. Give your question and the target database
2. Split the question into two or three concept blocks
3. Ask for synonyms, truncation and subject headings per block
4. Have your AI assistant review its string against PRESS
5. Run it yourself in the database and check that known key papers appear

## Concepts

### Building-block approach

Each key concept of the question becomes a block of synonyms, spelling variants and subject headings joined by OR; blocks are joined by AND. Two or three blocks are usual; outcomes are often left out to keep sensitivity.

### PRESS 2015 guideline

Peer Review of Electronic Search Strategies: checks translation of the question, Boolean and proximity operators, subject headings, text words, spelling and syntax, and limits and filters. Developed for health reviews, applicable to any database search.

### Sensitivity vs precision

Sensitivity (recall) is the share of all relevant records a search finds; precision is the share of retrieved records that are relevant. Systematic reviews favour sensitivity; checking known key papers gives a rough recall test.

### Controlled vocabulary vs free text

Subject headings (MeSH in MEDLINE, Emtree in Embase, thesaurus terms in ERIC or PsycINFO) index concepts consistently; free-text terms catch new or poorly indexed records. Combine both; multidisciplinary databases such as Scopus rely mainly on free text.

### PRISMA-S

A 16-item extension of PRISMA for reporting literature searches: databases and platforms, full search strings, limits, dates, other methods, search peer review and deduplication. Use it to document your string in the methods section.

## References

- McGowan, J., Sampson, M., Salzwedel, D. M., Cogo, E., Foerster, V., & Lefebvre, C. (2016). PRESS Peer Review of Electronic Search Strategies: 2015 guideline statement. Journal of Clinical Epidemiology, 75, 40–46. doi:10.1016/j.jclinepi.2016.01.021
- Rethlefsen, M. L., Kirtley, S., Waffenschmidt, S., Ayala, A. P., Moher, D., Page, M. J., Koffel, J. B., & PRISMA-S Group. (2021). PRISMA-S: An extension to the PRISMA Statement for Reporting Literature Searches in Systematic Reviews. Systematic Reviews, 10, 39. doi:10.1186/s13643-020-01542-z

## Practice exercise

### Task

Build a Scopus string for a practice question on heat extremes in Western Europe and run it if you have access. You learn whether the assistant's blocks retrieve known papers and how a single block can silently exclude relevant studies.

### Prompt

```text
I am a postgraduate researcher. My research question is: 'How has human-induced climate change affected the frequency and intensity of heat extremes in Western Europe, including the UK?' Build a Boolean search string for Scopus using TITLE-ABS-KEY with three concept blocks (heat extremes, human influence or attribution, region), synonyms joined by OR, blocks joined by AND, and truncation where useful. Show the string in a code block, then a table: block, terms, what it may miss. Review the string against the PRESS checklist: translation of the question, Boolean and proximity operators, subject headings, text words and spelling variants, spelling and syntax, limits and filters. Say whether it leans towards sensitivity or specificity. Use only Scopus syntax; if unsure about a field code, say so.
```

### Check

Run it in Scopus: it should retrieve Christidis et al. (2020) and Vautard et al. (2023). Note whether Perkins-Kirkpatrick and Lewis (2020), a global trend study, is excluded by the region or attribution block – and whether that is intended.

## Own material

### Bring

Your research question in one or two sentences and the name of one database you use.

### Steps

1. Paste your research question and name the database.
2. Ask for a Boolean search string with synonyms and subject headings.
3. Ask for a PRESS check of the string and what each block may miss.
4. Run the string in the database and compare the hit count with your usual search.

### Prompt

```text
I am a postgraduate researcher in [discipline]. My research question is: [question]. Build a Boolean search string for [database] with three concept blocks, synonyms joined by OR, blocks joined by AND, and truncation where useful. Suggest subject headings (for example MeSH) if the database uses them. Show the string in a code block, then a short table: block, terms, what it may miss. Then review the string against the PRESS checklist: translation of the question, Boolean and proximity operators, subject headings, text words and spelling variants, spelling and syntax, limits and filters. Say whether the string leans towards sensitivity or specificity. Use only syntax that [database] supports; if unsure about a field code, say so.
```

### Check

The string runs in the database without syntax errors and finds two or three papers you already know are relevant.

## Technology

Your AI assistant drafts and checks the string; you run it in the database yourself, as the assistant has no direct access to subscription databases such as Scopus or Web of Science. Check field codes in the database's help pages.

## Levels

### Chat

Run the starter prompt and copy the string into Scopus if you have access. Back in the same chat, paste the hit count and any known paper it missed, and ask the assistant which block to widen.

### Project / Notebook

Add your question, your library's search syntax guide for the database, the PRESS checklist and a .docx log of each string version with its hit count. Ask what changed between versions and which block lost known papers. You build a documented search history for reporting along PRISMA-S.

### Custom assistant

Call it 'Search string builder'. Instructions: concept blocks with synonyms, OR within and AND between blocks, truncation, subject headings where the database has them, the string in a code block, the block table, a PRESS self-check, and say so when unsure about a field code. Knowledge: the syntax guides of the databases you use. Starter prompt: 'Build a Scopus string for this question.' Reusable for every new question or database.
