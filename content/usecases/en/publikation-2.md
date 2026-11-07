---
id: publikation-2
phase: publikation
order: 2
title: Consistency check
risk: 2
mode: Delegate
potential: 3
capabilities: analyse
routes: files; external
tools: Paperpal; Zotero
repos: kd-citation
data: A3
practice_data: A3
---

Reconcile figures across text, tables and abstract, harmonise terminology and match in-text citations to the reference list.

## Problem

After many revisions, numbers in the abstract no longer match the tables, terms and abbreviations drift, and citations go missing from the reference list – reviewers notice.

## Result

A table of mismatches with locations that you verify before changing anything, plus a planted-error test that shows how reliably the assistant detects inconsistencies in your document.

## Steps

1. Upload the full draft including tables and references
2. Ask for a cross-check of numbers, terms and citations
3. Verify each flagged item in the document yourself
4. Plant one wrong number and rerun to test detection
5. Use rule-based checks and your reference manager where they apply

## Concepts

### Internal consistency audit

A systematic cross-check of every reported number, term and abbreviation across abstract, main text, tables and figures, and of in-text citations against the reference list in both directions. Run it after the last substantive revision.

### GRIM test

Granularity-Related Inconsistency of Means: checks whether a reported mean is arithmetically possible given the sample size when data are integers, such as Likert items. An example of a rule-based check that is more reliable than reading.

### statcheck

A tool that recomputes p-values from reported test statistics and degrees of freedom in APA format and flags inconsistencies. Nuijten et al. used it to show that such reporting errors are common in published psychology articles.

### Error seeding

Planting known errors to estimate how many a checker finds (its detection rate or sensitivity), a technique from software testing. One planted mismatch tells you whether to trust the assistant's 'no issues found'.

## References

- Brown, N. J. L., & Heathers, J. A. J. (2017). The GRIM test: A simple technique detects numerous anomalies in the reporting of results in psychology. Social Psychological and Personality Science, 8(4), 363–369. doi:10.1177/1948550616673876
- Nuijten, M. B., Hartgerink, C. H. J., van Assen, M. A. L. M., Epskamp, S., & Wicherts, J. M. (2016). The prevalence of statistical reporting errors in psychology (1985–2013). Behavior Research Methods, 48(4), 1205–1226. doi:10.3758/s13428-015-0664-2

## Practice exercise

### Task

Cross-check the headline numbers in the abstract of the Forster et al. (2025) paper against its tables, including one planted wrong value. You learn whether the assistant finds numbers reliably in a 40-page PDF and catches a mismatch you know exists.

### Prompt

```text
Attached is the Forster et al. (2025) PDF, Indicators of Global Climate Change 2024. I am checking a draft before submission. 1) List every number in the abstract and find where it appears in the tables (especially Tables 1, 5, 6 and 7) or the main text. Return a table: number, abstract wording, table or section, value there, match or mismatch. 2) Check this sentence from my draft against the same tables: 'Observed warming for 2015–2024 was 1.24 [1.11 to 1.35] °C, of which 1.22 [1.0 to 1.5] °C was human-induced, and human-induced warming reached 0.29 °C per decade.' 3) Flag key terms used inconsistently. Report only what is in the document; if you could not read every table, say which.
```

### Check

Abstract values should match Table 5 (1.24 [1.11 to 1.35] °C), Table 6 (1.22 and 1.36 °C), Table 7 (0.27 °C per decade) and Table 1 (53.6 ± 5.2 Gt CO₂e). The planted 0.29 must be flagged.

## Own material

### Bring

A short paper or draft section of your own, as Word or PDF, with an abstract, at least one table and a reference list.

### Steps

1. Attach the document and paste the starter prompt.
2. Check each flagged item in the document yourself before changing anything.
3. Change one number in your copy on purpose and attach it again.
4. See whether a rerun of the prompt catches the planted mismatch.

### Prompt

```text
I am checking my own [paper or chapter] before submission. In the attached document, check consistency: 1) numbers (sample sizes, percentages, statistics) that differ between the abstract, main text and tables; 2) key terms or abbreviations used inconsistently; 3) in-text citations missing from the reference list, and references never cited. (Whether the references themselves exist and support the text is a separate check.) Return a table: issue type, location (section or page), what each place says, suggested fix. Only report what you find in the document; if parts were too long to read fully, say which.
```

### Check

At least three flagged issues are real when you look them up, and the planted mismatch is caught; if not, check long documents section by section.

## Technology

Upload the Word or PDF file to your AI assistant; for long documents, check whether it says it read every part and work section by section if not, and match citations to references in your reference manager as well.

## Levels

### Chat

Run the starter prompt with the Forster PDF attached. Then, in the same chat, ask the assistant to recheck, section by section, any table it says it could not read fully.

### Project / Notebook

Add the Forster report (A3) or, for your own work, the current draft, its tables as separate .xlsx files and your reference list. Ask for numbers and terms that differ between abstract, text and tables. Separate tables are easy to check one by one, and you rerun the same check after each revision.

### Custom assistant

Create a configured assistant (e.g. a Copilot agent, custom GPT, Gemini Gem or Claude project). In its standing instructions, define the check: numbers across abstract, text and tables; terms and abbreviations; in-text citations against the reference list; a table of issue type, location, what each place says and suggested fix; report only what is in the document and say which parts were not read. Starter prompt: "Run the consistency check on this draft." Reusable before every submission – plant one mismatch to test it.
