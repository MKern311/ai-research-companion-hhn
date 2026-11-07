---
id: design-3
phase: design
order: 3
title: Sample size & power analysis
risk: 2
mode: Assist
potential: 2
capabilities: analyse
routes: chat; files; external
tools: Jamovi
repos: kd-power
data: D2
practice_data: D2
---

Generate calculations as traceable code – the assistant writes Python and, if your tool can run code, runs it; for R it writes code for you to run – and make assumptions explicit.

## Problem

Sample sizes are often calculated once in a web calculator with the assumptions unrecorded – hard to justify to an ethics committee or examiner, and silent about clustering or dependence.

## Result

Rerunnable code, a curve of required sample size across plausible effect sizes and an explicit list of assumptions – an a priori power analysis you can defend and update when estimates change.

## Steps

1. Name the test, smallest effect size of interest, alpha and power
2. Justify the effect size from prior studies or practical relevance
3. Ask the assistant to write and run the calculation in Python – if it cannot run code, run it yourself
4. Request a curve of sample size across effect sizes
5. Cross-check one value in G*Power or a published table

## Concepts

### A priori power analysis

For a given test, effect size, alpha (Type I error rate, conventionally 0.05), power (1 – beta, conventionally 0.80) and sample size are linked: fix three, solve for the fourth. Plan it before data collection; post hoc power adds nothing.

### Cohen's d and its benchmarks

Standardised mean difference: the difference in means divided by the pooled standard deviation. Cohen's 0.2, 0.5 and 0.8 ('small', 'medium', 'large') are rough conventions; prefer effect sizes from prior studies or your field.

### Sample size justification and the smallest effect size of interest

Lakens (2022) distinguishes justifications: whole population, resource constraints, accuracy, a priori power analysis, heuristics, or none. For a power analysis, base it on the smallest effect that would matter theoretically or practically, and say which justification you use.

### Independence and effective sample size

Standard formulas assume independent observations. Clustering (e.g. pupils in classes) inflates variance by the design effect, 1 + (m – 1) × ICC; autocorrelation in time series likewise reduces the effective sample size.

## References

- Cohen, J. (1988). Statistical power analysis for the behavioral sciences (2nd ed.). Lawrence Erlbaum.
- Faul, F., Erdfelder, E., Lang, A.-G., & Buchner, A. (2007). G*Power 3: A flexible statistical power analysis program for the social, behavioral, and biomedical sciences. Behavior Research Methods, 39(2), 175–191. doi:10.3758/BF03193146
- Lakens, D. (2022). Sample size justification. Collabra: Psychology, 8(1), 33267. doi:10.1525/collabra.33267

## Practice exercise

### Task

You estimate an effect size from real data – Central England annual means, 1961–1990 versus 1991–2020 – and let your AI assistant run the power analysis. You learn whether it parses the file correctly and flags that consecutive years are not independent.

### Prompt

```text
Attached is the Central England Temperature monthly file (meantemp_monthly_totals). Write and run Python code that: 1) reads the file, skipping the header lines, and treats -99.9 as missing; 2) takes the Annual column for 1961–1990 and for 1991–2020 and reports each period's mean and standard deviation; 3) computes Cohen's d with the pooled standard deviation; 4) uses statsmodels to calculate the number of years per period needed for power 0.80, alpha 0.05, two-sided independent-samples t-test, for that d and for d = 0.5; 5) plots required sample size for d from 0.2 to 1.6. Show the code and the results. Then list every assumption of the calculation and say which ones annual temperature data violate.
```

### Check

Recompute both means from the Annual column in Excel: about 9.46 °C (1961–1990) and 10.27 °C (1991–2020). For d = 0.5, about 64 per group matches G*Power. Did the assistant mention autocorrelation and trend?

## Own material

### Bring

Your planned statistical test (for example a two-group comparison) and an expected effect size from a previous study.

### Steps

1. Describe your planned test, effect size, alpha and desired power.
2. Ask the assistant to write and run Python code for the power analysis (if it cannot run code, run it yourself).
3. Ask for a chart of required sample size across a range of effect sizes.
4. Check the result against G*Power or a published power table.

### Prompt

```text
I am planning a study in [discipline] using [statistical test, e.g. independent-samples t-test]. Write and run Python code (for example with statsmodels) to calculate the required sample size for effect size [value, e.g. Cohen's d = 0.5], alpha 0.05, power 0.80, two-sided. Show the code, the result, and a chart of sample size for effect sizes from 0.2 to 0.8. List every assumption the calculation makes, and explain the result in two plain sentences.
```

### Check

Run a known case: for d = 0.5, alpha 0.05, power 0.80, two-sided t-test, the result should be about 64 per group, matching G*Power.

## Technology

Describe the test and parameters to your AI assistant, or attach pilot or archival data. It writes Python (statsmodels) and – if your tool can run code – runs it and returns code, result and chart; otherwise run the code yourself. Keep the code, rerun it yourself and cross-check in G*Power or Jamovi.

## Levels

### Chat

Run the starter prompt with the Central England monthly file, or with your own test and effect size. In the same chat, ask for the calculation again across the range of effect sizes you find plausible, and for all the code in one block you can rerun.

### Project / Notebook

Add the pilot data or earlier studies your effect size comes from (D2 works as .txt), your analysis plan and the code and results from the chat. Ask which effect sizes the sources support and which assumptions your plan violates. Depending on your tool, the project does not run code; it keeps assumptions, sources and results together for when the estimates change.

### Custom assistant

Call it 'Power analyst' and switch on code execution / data analysis if your tool offers it. Instructions: always write and run Python with statsmodels, show the code, plot sample size across effect sizes, list every assumption and which ones your data may violate, and run a known benchmark (d = 0.5 gives about 64 per group). Starter prompt: 'Power analysis for [test], effect size [value] from [source]'. Reusable for every study or grant.
