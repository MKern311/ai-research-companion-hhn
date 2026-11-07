---
name: interpreting-and-reporting-results
description: "Have your own statistical output explained, check assumptions and quality criteria (e.g. reliability, model fit, validity of scales), ask which checks or analyses you may have missed, and draft an APA-style results paragraph. Use when the user works on: Interpreting & reporting results."
---

# Interpreting & reporting results

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/analyse-8

## Goal

Have your own statistical output explained, check assumptions and quality criteria (e.g. reliability, model fit, validity of scales), ask which checks or analyses you may have missed, and draft an APA-style results paragraph.

A plain explanation of your output, assumptions and quality criteria checked against sourced conventions, a list of checks or analyses you may have missed, and a draft paragraph reporting effect sizes and intervals – usable once every number is verified.

## When to use

Statistical output is full of figures whose meaning and thresholds you half remember, and turning it into a correct, complete APA results paragraph takes repeated checking.

## Procedure

1. Paste the output and say which analysis and software produced it.
2. Ask for each number to be explained and the assumptions and quality criteria to be checked.
3. Ask which checks or analyses you may have missed, and decide which ones you need.
4. Ask for an APA-style results paragraph using only the numbers in the output.
5. Check every number in the paragraph against the output.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.
- Create a configured assistant (e.g. a Copilot agent, custom GPT, Gemini Gem or Claude project). In its standing instructions, set the rules: explain each part of the output, list the assumptions and say which the output lets you check, name the source of every threshold, use only numbers from the output without recomputing or rounding, and say what the analysis cannot show. Add your field's reporting guide as a knowledge file; no code needed. Starter prompt: "Interpret this output and draft an APA 7 results paragraph." Reusable for every analysis you run.

## Starter prompt

```text
I am a postgraduate researcher in [discipline]. Below is the output of a [analysis] I ran in [software] on [public or dummy] data, with [n] cases. 1) Explain each part of the output in plain language. 2) List the assumptions and quality criteria I should check for this analysis (for example normality, multicollinearity, reliability such as Cronbach's alpha or omega, model fit such as CFI, RMSEA and SRMR, or for PLS-SEM AVE and HTMT), say which ones the output shows and whether they meet common thresholds, and name the source of each threshold. 3) List checks or analyses I may have missed for this question and design (for example robustness checks, alternative models, sensitivity or subgroup analyses) and say briefly why each matters. 4) Draft a results paragraph in APA 7 style using only numbers from the output. Do not round differently, recompute or add numbers that are not in the output; mark anything you are unsure about.

[paste output]
```

## Quality check

Every number in the paragraph appears in the output, and the thresholds named match a methods textbook or the guidance your field uses. Each suggested extra analysis fits your research question; you decide which ones to run.

## Limits

- The assistant interprets what you paste; it cannot see your data or the code that produced the output, so check that the analysis itself was the right one.
- Risk: Your own unpublished drafts, reviews or third-party content.

## Key concepts

- **APA Journal Article Reporting Standards (JARS-Quant)** – Appelbaum et al. (2018) list what quantitative results must report: sample size and missing data, each test with its statistic, degrees of freedom and exact p, effect sizes with confidence intervals, and any assumption violations.
- **p-values versus effect sizes** – The American Statistical Association statement (Wasserstein & Lazar, 2016): a p-value measures neither the probability that a hypothesis is true nor the size of an effect, and p < .05 alone should not drive conclusions.
- **Correlation, agreement and trending series** – Two series that share a trend can show a high R² and a 'significant' slope even when unrelated (spurious regression; Granger & Newbold, 1974) – a warning sign is an R² above the Durbin–Watson statistic. And a high correlation between two measures of the same quantity does not show that they agree: judge agreement from the differences, with their mean and limits of agreement (Bland & Altman, 1986).
- **Model-fit cut-offs for structural equation models** – Hu and Bentler's (1999) conventions: comparative fit index (CFI) ≥ 0.95, root mean square error of approximation (RMSEA) ≤ 0.06, standardised root mean square residual (SRMR) ≤ 0.08. Derived from simulations, they are guidelines, not pass–fail rules.
- **Heterotrait–monotrait ratio (HTMT)** – A discriminant validity criterion, used especially in partial least squares structural equation modelling (Henseler et al., 2015). Conventional thresholds: below 0.85 for conceptually distinct constructs, below 0.90 for similar ones.
- **Reliability: Cronbach's alpha and McDonald's omega** – Alpha assumes equal factor loadings (tau-equivalence); omega does not and is often preferred (McNeish, 2018). Values of about 0.70 or higher are a common convention for research use.

## Key references

- Appelbaum, M., Cooper, H., Kline, R. B., Mayo-Wilson, E., Nezu, A. M., & Rao, S. M. (2018). Journal article reporting standards for quantitative research in psychology: The APA Publications and Communications Board task force report. American Psychologist, 73(1), 3–25. https://doi.org/10.1037/amp0000191
- Wasserstein, R. L., & Lazar, N. A. (2016). The ASA statement on p-values: Context, process, and purpose. The American Statistician, 70(2), 129–133. https://doi.org/10.1080/00031305.2016.1154108
- Hu, L., & Bentler, P. M. (1999). Cutoff criteria for fit indexes in covariance structure analysis: Conventional criteria versus new alternatives. Structural Equation Modeling, 6(1), 1–55. https://doi.org/10.1080/10705519909540118
- Granger, C. W. J., & Newbold, P. (1974). Spurious regressions in econometrics. Journal of Econometrics, 2(2), 111–120. https://doi.org/10.1016/0304-4076(74)90034-7
- Bland, J. M., & Altman, D. G. (1986). Statistical methods for assessing agreement between two methods of clinical measurement. The Lancet, 327(8476), 307–310. https://doi.org/10.1016/S0140-6736(86)90837-8
- Henseler, J., Ringle, C. M., & Sarstedt, M. (2015). A new criterion for assessing discriminant validity in variance-based structural equation modeling. Journal of the Academy of Marketing Science, 43(1), 115–135. https://doi.org/10.1007/s11747-014-0403-8
- McNeish, D. (2018). Thanks coefficient alpha, we'll take it from here. Psychological Methods, 23(3), 412–433. https://doi.org/10.1037/met0000144

## Tools that help

JASP · Jamovi · Statistic & Data Analyst
