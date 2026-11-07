---
name: data-extraction-into-evidence-tables
description: "Transfer sample, method, variables and effects – including effect sizes for a meta-analysis – from full texts into structured tables, with a second, independent check. Use when the user works on: Data extraction into evidence tables."
---

# Data extraction into evidence tables

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/literatur-3

## Goal

Transfer sample, method, variables and effects – including effect sizes for a meta-analysis – from full texts into structured tables, with a second, independent check.

A first-draft evidence table built on a piloted extraction form, with a page reference for every value and gaps marked 'not reported' – usable only after your independent second check.

## When to use

Copying designs, samples and effects from dozens of full texts is slow and error-prone; numbers are easily mistyped, taken from the wrong table or silently converted.

## Workflow with the user

Guide the user through these steps. Where a step says “ask the assistant”, that is you.

1. Attach the PDF and paste your extraction fields.
2. Ask for one table row per paper with page or section references.
3. Ask it to mark missing information as 'not reported'.
4. Check three values, including sample size and main effect, against the PDF.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.

## Typical request

```text
I am building an evidence table for a review on [topic]. From the attached paper(s), extract one table row per study with these columns: citation, design, sample size and population, setting, key variables or measures, main result with the reported statistic, stated limitations – and, if the paper reports the statistics for it, the effect size (for example d, r or an odds ratio) with its confidence interval. After each value give the page or section where you found it. Copy numbers exactly as reported; do not calculate, round or infer. If a field is not in the paper, write 'not reported'.
```

## Quality check

Three values you pick, including sample size and the main statistic, match the PDF exactly at the page or section the assistant gave.

## Limits

- Risk: Personal or sensitive data, or decisions that feed directly into your results.

## Key concepts

- **Piloted extraction form** – A predefined set of fields with definitions and coding rules – design, population, measures, outcomes, effect statistic – tested on two or three studies and revised before full extraction. Keeps extraction consistent and reportable.
- **Double independent extraction** – Two people extract independently and reconcile differences; Buscemi et al. (2006) found that single extraction produced more errors. With AI as first extractor, your independent check takes the second role.
- **Effect-size metrics** – Standardised mean difference (Cohen's d, Hedges' g), correlation r, odds or risk ratios, each with a confidence interval. Meta-analysis needs one common metric: record what is reported and convert later with documented formulas, never during extraction.
- **Data provenance** – Every extracted value carries its source location – page, table or figure – so it can be audited. 'Not reported' differs from zero or 'not applicable'; code them differently.

## Key references

- Borenstein, M., Hedges, L. V., Higgins, J. P. T., & Rothstein, H. R. (2009). Introduction to meta-analysis. Wiley.
- Buscemi, N., Hartling, L., Vandermeer, B., Tjosvold, L., & Klassen, T. P. (2006). Single data extraction generated more errors than double data extraction in systematic reviews. Journal of Clinical Epidemiology, 59(7), 697–703. https://doi.org/10.1016/j.jclinepi.2005.11.010

## Tools that help

Elicit · Covidence
