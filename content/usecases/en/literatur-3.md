---
id: literatur-3
phase: literatur
order: 3
title: Data extraction into evidence tables
risk: 3
mode: Co-create
potential: 3
capabilities: analyse
routes: files; connected; external
connect: Elicit
tools: Elicit; Covidence
repos: kd-literature-review
data: B2; C3
practice_data: B2; C3
---

Transfer sample, method, variables and effects – including effect sizes for a meta-analysis – from full texts into structured tables, with a second, independent check.

## Problem

Copying designs, samples and effects from dozens of full texts is slow and error-prone; numbers are easily mistyped, taken from the wrong table or silently converted.

## Result

A first-draft evidence table built on a piloted extraction form, with a page reference for every value and gaps marked 'not reported' – usable only after your independent second check.

## Steps

1. Define and pilot extraction fields before opening the papers
2. Attach the PDFs and request one row per study
3. Insist on page references and 'not reported' gaps
4. Forbid calculation, rounding and unit conversion
5. Verify sample size, main effect and one more value

## Concepts

### Piloted extraction form

A predefined set of fields with definitions and coding rules – design, population, measures, outcomes, effect statistic – tested on two or three studies and revised before full extraction. Keeps extraction consistent and reportable.

### Double independent extraction

Two people extract independently and reconcile differences; Buscemi et al. (2006) found that single extraction produced more errors. With AI as first extractor, your independent check takes the second role.

### Effect-size metrics

Standardised mean difference (Cohen's d, Hedges' g), correlation r, odds or risk ratios, each with a confidence interval. Meta-analysis needs one common metric: record what is reported and convert later with documented formulas, never during extraction.

### Data provenance

Every extracted value carries its source location – page, table or figure – so it can be audited. 'Not reported' differs from zero or 'not applicable'; code them differently.

## References

- Borenstein, M., Hedges, L. V., Higgins, J. P. T., & Rothstein, H. R. (2009). Introduction to meta-analysis. Wiley.
- Buscemi, N., Hartling, L., Vandermeer, B., Tjosvold, L., & Klassen, T. P. (2006). Single data extraction generated more errors than double data extraction in systematic reviews. Journal of Clinical Epidemiology, 59(7), 697–703. doi:10.1016/j.jclinepi.2005.11.010

## Practice exercise

### Task

Extract an evidence table from two attribution studies. You learn whether your AI assistant copies return times and likelihood changes exactly, with correct pages, or rounds, converts and fills gaps from outside knowledge.

### Prompt

```text
I am building an evidence table for a review on the attribution of extreme heat. From the two attached PDFs (Christidis et al. 2020 and Christidis et al. 2023), extract one table row per study with these columns: citation, event and threshold, region and locations, observational dataset, climate models and experiments, attribution method, main result with the reported statistic (return time, likelihood change or probability), uncertainty range, stated limitations. After each value give the page or section where you found it. Copy numbers exactly as reported; do not calculate, round, convert or infer. If a field is not in the paper, write 'not reported'.
```

### Check

Compare with the abstracts: 2020 – 40 °C summers with a present return time of 100–300 years, 3.5 years by 2100; 2023 – 12 locations, likelihood up by a factor of 10–10³ at the hottest. Check page references.

## Own material

### Bring

One or two open-access empirical papers as PDFs.

### Steps

1. Attach the PDF and paste your extraction fields.
2. Ask for one table row per paper with page or section references.
3. Ask it to mark missing information as 'not reported'.
4. Check three values, including sample size and main effect, against the PDF.

### Prompt

```text
I am building an evidence table for a review on [topic]. From the attached paper(s), extract one table row per study with these columns: citation, design, sample size and population, setting, key variables or measures, main result with the reported statistic, stated limitations – and, if the paper reports the statistics for it, the effect size (for example d, r or an odds ratio) with its confidence interval. After each value give the page or section where you found it. Copy numbers exactly as reported; do not calculate, round or infer. If a field is not in the paper, write 'not reported'.
```

### Check

Three values you pick, including sample size and the main statistic, match the PDF exactly at the page or section the assistant gave.

## Technology

Upload the PDFs to your AI assistant with your column list; ask for exact copying, no calculation. Elicit, connected if your tool allows it or used directly, extracts the same columns across many papers at once.

## Levels

### Chat

Attach Christidis et al. 2020 (B2) and 2023 (C3) and run the starter prompt. In the same chat, ask the assistant to re-check every number against the page it cited and to mark any value it rounded, converted or inferred.

### Project / Notebook

Add your piloted extraction form as a .docx, the full texts you may share (practice: B2 and C3) and a page with your own independent extraction. Ask for one row per study with page references and compare it with yours. Only approved, non-sensitive material goes in, and a human checks every value.

### Custom assistant

Call it 'Evidence extractor'. Instructions: your extraction form as fixed columns, a page or section after each value, numbers copied exactly – no calculating, rounding or converting – and 'not reported' for gaps. Knowledge: the form and its coding rules. Switch on code execution / data analysis if your tool offers it, to export the table to Excel. Starter prompt: 'Extract this PDF into the evidence table.' Only approved material; a human checks every row.
