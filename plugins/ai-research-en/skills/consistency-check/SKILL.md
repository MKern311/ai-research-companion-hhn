---
name: consistency-check
description: "Reconcile figures across text, tables and abstract, harmonise terminology and match in-text citations to the reference list. Use when the user works on: Consistency check."
---

# Consistency check

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/publikation-2

## Goal

Reconcile figures across text, tables and abstract, harmonise terminology and match in-text citations to the reference list.

A table of mismatches with locations that you verify before changing anything, plus a planted-error test that shows how reliably the assistant detects inconsistencies in your document.

## When to use

After many revisions, numbers in the abstract no longer match the tables, terms and abbreviations drift, and citations go missing from the reference list – reviewers notice.

## Procedure

1. Attach the document and paste the starter prompt.
2. Check each flagged item in the document yourself before changing anything.
3. Change one number in your copy on purpose and attach it again.
4. See whether a rerun of the prompt catches the planted mismatch.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.
- Create a configured assistant (e.g. a Copilot agent, custom GPT, Gemini Gem or Claude project). In its standing instructions, define the check: numbers across abstract, text and tables; terms and abbreviations; in-text citations against the reference list; a table of issue type, location, what each place says and suggested fix; report only what is in the document and say which parts were not read. Starter prompt: "Run the consistency check on this draft." Reusable before every submission – plant one mismatch to test it.

## Starter prompt

```text
I am checking my own [paper or chapter] before submission. In the attached document, check consistency: 1) numbers (sample sizes, percentages, statistics) that differ between the abstract, main text and tables; 2) key terms or abbreviations used inconsistently; 3) in-text citations missing from the reference list, and references never cited. (Whether the references themselves exist and support the text is a separate check.) Return a table: issue type, location (section or page), what each place says, suggested fix. Only report what you find in the document; if parts were too long to read fully, say which.
```

## Quality check

At least three flagged issues are real when you look them up, and the planted mismatch is caught; if not, check long documents section by section.

## Limits

- Risk: Your own unpublished drafts, reviews or third-party content.

## Key concepts

- **Internal consistency audit** – A systematic cross-check of every reported number, term and abbreviation across abstract, main text, tables and figures, and of in-text citations against the reference list in both directions. Run it after the last substantive revision.
- **GRIM test** – Granularity-Related Inconsistency of Means: checks whether a reported mean is arithmetically possible given the sample size when data are integers, such as Likert items. An example of a rule-based check that is more reliable than reading.
- **statcheck** – A tool that recomputes p-values from reported test statistics and degrees of freedom in APA format and flags inconsistencies. Nuijten et al. used it to show that such reporting errors are common in published psychology articles.
- **Error seeding** – Planting known errors to estimate how many a checker finds (its detection rate or sensitivity), a technique from software testing. One planted mismatch tells you whether to trust the assistant's 'no issues found'.

## Key references

- Brown, N. J. L., & Heathers, J. A. J. (2017). The GRIM test: A simple technique detects numerous anomalies in the reporting of results in psychology. Social Psychological and Personality Science, 8(4), 363–369. https://doi.org/10.1177/1948550616673876
- Nuijten, M. B., Hartgerink, C. H. J., van Assen, M. A. L. M., Epskamp, S., & Wicherts, J. M. (2016). The prevalence of statistical reporting errors in psychology (1985–2013). Behavior Research Methods, 48(4), 1205–1226. https://doi.org/10.3758/s13428-015-0664-2

## Tools that help

Paperpal · Zotero
