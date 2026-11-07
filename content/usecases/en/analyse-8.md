---
id: analyse-8
phase: analyse
order: 8
title: Interpreting & reporting results
risk: 2
mode: Co-create
potential: 3
capabilities: analyse; generierung
routes: chat; files
tools: JASP; Jamovi; Statistic & Data Analyst
repos: kd-stats
data: D3; D4
practice_data: D3; D4
---

Have your own statistical output explained, check assumptions and quality criteria (e.g. reliability, model fit, validity of scales), ask which checks or analyses you may have missed, and draft an APA-style results paragraph.

## Problem

Statistical output is full of figures whose meaning and thresholds you half remember, and turning it into a correct, complete APA results paragraph takes repeated checking.

## Result

A plain explanation of your output, assumptions and quality criteria checked against sourced conventions, a list of checks or analyses you may have missed, and a draft paragraph reporting effect sizes and intervals – usable once every number is verified.

## Steps

1. Paste the output and name the analysis and software
2. Ask for each figure and the source of each threshold
3. Ask which checks or analyses are still missing
4. Request an APA paragraph using only output numbers
5. Check every number and claim against the output

## Concepts

### APA Journal Article Reporting Standards (JARS-Quant)

Appelbaum et al. (2018) list what quantitative results must report: sample size and missing data, each test with its statistic, degrees of freedom and exact p, effect sizes with confidence intervals, and any assumption violations.

### p-values versus effect sizes

The American Statistical Association statement (Wasserstein & Lazar, 2016): a p-value measures neither the probability that a hypothesis is true nor the size of an effect, and p < .05 alone should not drive conclusions.

### Correlation, agreement and trending series

Two series that share a trend can show a high R² and a 'significant' slope even when unrelated (spurious regression; Granger & Newbold, 1974) – a warning sign is an R² above the Durbin–Watson statistic. And a high correlation between two measures of the same quantity does not show that they agree: judge agreement from the differences, with their mean and limits of agreement (Bland & Altman, 1986).

### Model-fit cut-offs for structural equation models

Hu and Bentler's (1999) conventions: comparative fit index (CFI) ≥ 0.95, root mean square error of approximation (RMSEA) ≤ 0.06, standardised root mean square residual (SRMR) ≤ 0.08. Derived from simulations, they are guidelines, not pass–fail rules.

### Heterotrait–monotrait ratio (HTMT)

A discriminant validity criterion, used especially in partial least squares structural equation modelling (Henseler et al., 2015). Conventional thresholds: below 0.85 for conceptually distinct constructs, below 0.90 for similar ones.

### Reliability: Cronbach's alpha and McDonald's omega

Alpha assumes equal factor loadings (tau-equivalence); omega does not and is often preferred (McNeish, 2018). Values of about 0.70 or higher are a common convention for research use.

## References

- Appelbaum, M., Cooper, H., Kline, R. B., Mayo-Wilson, E., Nezu, A. M., & Rao, S. M. (2018). Journal article reporting standards for quantitative research in psychology: The APA Publications and Communications Board task force report. American Psychologist, 73(1), 3–25. doi:10.1037/amp0000191
- Wasserstein, R. L., & Lazar, N. A. (2016). The ASA statement on p-values: Context, process, and purpose. The American Statistician, 70(2), 129–133. doi:10.1080/00031305.2016.1154108
- Hu, L., & Bentler, P. M. (1999). Cutoff criteria for fit indexes in covariance structure analysis: Conventional criteria versus new alternatives. Structural Equation Modeling, 6(1), 1–55. doi:10.1080/10705519909540118
- Granger, C. W. J., & Newbold, P. (1974). Spurious regressions in econometrics. Journal of Econometrics, 2(2), 111–120. doi:10.1016/0304-4076(74)90034-7
- Bland, J. M., & Altman, D. G. (1986). Statistical methods for assessing agreement between two methods of clinical measurement. The Lancet, 327(8476), 307–310. doi:10.1016/S0140-6736(86)90837-8
- Henseler, J., Ringle, C. M., & Sarstedt, M. (2015). A new criterion for assessing discriminant validity in variance-based structural equation modeling. Journal of the Academy of Marketing Science, 43(1), 115–135. doi:10.1007/s11747-014-0403-8
- McNeish, D. (2018). Thanks coefficient alpha, we'll take it from here. Psychological Methods, 23(3), 412–433. doi:10.1037/met0000144

## Practice exercise

### Task

Regress one global temperature record on another, then paste only the output into a new chat for interpretation. You learn whether the assistant uses only numbers from the output, spots autocorrelation and the baseline offset, and avoids reading a high coefficient of determination (R²) as agreement.

### Prompt

```text
Chat 1 – attach the HadCRUT5 monthly CSV and the GISTEMP CSV (the first line is a title, *** marks missing values, J-D is the annual mean) and ask: 'Using Python statsmodels, compute HadCRUT5 annual means for complete years only, take the GISTEMP J-D annual means, keep the years present in both, regress the HadCRUT5 annual anomaly on the GISTEMP annual anomaly with OLS and print only the full model summary.' Chat 2 – paste the summary into a new chat and ask: 'This is OLS output: annual global temperature anomaly from HadCRUT5 (°C relative to 1961–1990) regressed on the same quantity from NASA GISTEMP (°C relative to 1951–1980), one row per year. 1) Explain each part in plain language. 2) List the assumptions, say which the output lets me check, including the Durbin–Watson statistic, and name the source of each threshold. 3) Draft an APA 7 results paragraph using only numbers in the output, without recomputing or rounding differently. 4) Does the high coefficient of determination (R²) show that the two records agree? Say what this regression cannot show and which analysis would.'
```

### Check

Every number in the paragraph appears in the summary (n = 146 years, coefficient of determination R² = 0.987, Durbin–Watson about 0.39). The assistant should say that the low Durbin–Watson signals autocorrelated residuals, so standard errors are too small; that the intercept of about −0.09 °C mainly reflects the different baselines; and that the shared warming trend inflates R². Agreement is judged from the yearly differences (Bland–Altman), not from R².

## Own material

### Bring

Output from an analysis you ran on public or dummy data (for example a regression table, a reliability or factor analysis, or a model-fit summary), copied as text.

### Steps

1. Paste the output and say which analysis and software produced it.
2. Ask for each number to be explained and the assumptions and quality criteria to be checked.
3. Ask which checks or analyses you may have missed, and decide which ones you need.
4. Ask for an APA-style results paragraph using only the numbers in the output.
5. Check every number in the paragraph against the output.

### Prompt

```text
I am a postgraduate researcher in [discipline]. Below is the output of a [analysis] I ran in [software] on [public or dummy] data, with [n] cases. 1) Explain each part of the output in plain language. 2) List the assumptions and quality criteria I should check for this analysis (for example normality, multicollinearity, reliability such as Cronbach's alpha or omega, model fit such as CFI, RMSEA and SRMR, or for PLS-SEM AVE and HTMT), say which ones the output shows and whether they meet common thresholds, and name the source of each threshold. 3) List checks or analyses I may have missed for this question and design (for example robustness checks, alternative models, sensitivity or subgroup analyses) and say briefly why each matters. 4) Draft a results paragraph in APA 7 style using only numbers from the output. Do not round differently, recompute or add numbers that are not in the output; mark anything you are unsure about.

[paste output]
```

### Check

Every number in the paragraph appears in the output, and the thresholds named match a methods textbook or the guidance your field uses. Each suggested extra analysis fits your research question; you decide which ones to run.

### Limit

The assistant interprets what you paste; it cannot see your data or the code that produced the output, so check that the analysis itself was the right one.

## Technology

Paste the output as text into your AI assistant, or upload the output file. Check every threshold the assistant names against the methods source it cites before you rely on it.

## Levels

### Chat

Run the two-chat starter prompt. Then, in the second chat, ask which analysis would test agreement between the two records and what you would report from it.

### Project / Notebook

Add the saved model summary (.txt), your analysis plan and a methods text you trust for thresholds (PDF). Ask the project or notebook to check the interpretation against that methods text only (depending on your tool, it may also draw on other knowledge – say so in your instruction). As you add more output, results, thresholds and drafted paragraphs stay consistent across chapters.

### Custom assistant

Create a configured assistant (e.g. a Copilot agent, custom GPT, Gemini Gem or Claude project). In its standing instructions, set the rules: explain each part of the output, list the assumptions and say which the output lets you check, name the source of every threshold, use only numbers from the output without recomputing or rounding, and say what the analysis cannot show. Add your field's reporting guide as a knowledge file; no code needed. Starter prompt: "Interpret this output and draft an APA 7 results paragraph." Reusable for every analysis you run.
