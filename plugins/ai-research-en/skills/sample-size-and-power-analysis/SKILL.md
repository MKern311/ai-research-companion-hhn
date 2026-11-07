---
name: sample-size-and-power-analysis
description: "Generate calculations as traceable code – the assistant writes Python and, if your tool can run code, runs it; for R it writes code for you to run – and make assumptions explicit. Use when the user works on: Sample size & power analysis."
---

# Sample size & power analysis

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/design-3

## Goal

Generate calculations as traceable code – the assistant writes Python and, if your tool can run code, runs it; for R it writes code for you to run – and make assumptions explicit.

Rerunnable code, a curve of required sample size across plausible effect sizes and an explicit list of assumptions – an a priori power analysis you can defend and update when estimates change.

## When to use

Sample sizes are often calculated once in a web calculator with the assumptions unrecorded – hard to justify to an ethics committee or examiner, and silent about clustering or dependence.

## Workflow with the user

Guide the user through these steps. Where a step says “ask the assistant”, that is you.

1. Describe your planned test, effect size, alpha and desired power.
2. Ask the assistant to write and run Python code for the power analysis (if it cannot run code, run it yourself).
3. Ask for a chart of required sample size across a range of effect sizes.
4. Check the result against G*Power or a published power table.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.

## Typical request

```text
I am planning a study in [discipline] using [statistical test, e.g. independent-samples t-test]. Write and run Python code (for example with statsmodels) to calculate the required sample size for effect size [value, e.g. Cohen's d = 0.5], alpha 0.05, power 0.80, two-sided. Show the code, the result, and a chart of sample size for effect sizes from 0.2 to 0.8. List every assumption the calculation makes, and explain the result in two plain sentences.
```

## Quality check

Run a known case: for d = 0.5, alpha 0.05, power 0.80, two-sided t-test, the result should be about 64 per group, matching G*Power.

## Limits

- Risk: Your own unpublished drafts, reviews or third-party content.

## Key concepts

- **A priori power analysis** – For a given test, effect size, alpha (Type I error rate, conventionally 0.05), power (1 – beta, conventionally 0.80) and sample size are linked: fix three, solve for the fourth. Plan it before data collection; post hoc power adds nothing.
- **Cohen's d and its benchmarks** – Standardised mean difference: the difference in means divided by the pooled standard deviation. Cohen's 0.2, 0.5 and 0.8 ('small', 'medium', 'large') are rough conventions; prefer effect sizes from prior studies or your field.
- **Sample size justification and the smallest effect size of interest** – Lakens (2022) distinguishes justifications: whole population, resource constraints, accuracy, a priori power analysis, heuristics, or none. For a power analysis, base it on the smallest effect that would matter theoretically or practically, and say which justification you use.
- **Independence and effective sample size** – Standard formulas assume independent observations. Clustering (e.g. pupils in classes) inflates variance by the design effect, 1 + (m – 1) × ICC; autocorrelation in time series likewise reduces the effective sample size.

## Key references

- Cohen, J. (1988). Statistical power analysis for the behavioral sciences (2nd ed.). Lawrence Erlbaum.
- Faul, F., Erdfelder, E., Lang, A.-G., & Buchner, A. (2007). G*Power 3: A flexible statistical power analysis program for the social, behavioral, and biomedical sciences. Behavior Research Methods, 39(2), 175–191. https://doi.org/10.3758/BF03193146
- Lakens, D. (2022). Sample size justification. Collabra: Psychology, 8(1), 33267. https://doi.org/10.1525/collabra.33267

## Tools that help

Jamovi
