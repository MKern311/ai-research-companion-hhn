---
name: coding-assistance-for-statistics
description: "Generate, explain, debug and document analysis code (R, Python, Stata, SPSS syntax) – from regression to structural equation models or a meta-analysis. Use when the user works on: Coding assistance for statistics."
---

# Coding assistance for statistics

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/analyse-0

## Goal

Generate, explain, debug and document analysis code (R, Python, Stata, SPSS syntax) – from regression to structural equation models or a meta-analysis.

Commented, runnable code you can explain line by line, with the model's assumptions listed and tested, and one key estimate reproduced in a second tool.

## When to use

You know which model you need but lose hours on syntax, error messages and package options, and forum code rarely matches your data structure or the model's assumptions.

## Procedure

1. Attach the CSV and describe the analysis, naming your software.
2. Ask for commented code plus a plain explanation of each step.
3. For Python, ask the assistant to run it; if it cannot run code, or for other languages, run it in your own software.
4. Paste any error message back and ask for a fix with an explanation.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.
- Create a configured assistant (e.g. a Copilot agent, custom GPT, Gemini Gem or Claude project). In its standing instructions, name your discipline and software and set the rules: commented code, complete cases only, list every dropped observation, state and check assumptions, give R or Stata equivalents without running them, and never report a number without the code behind it. Switch on code execution / data analysis if your tool offers it. Starter prompt: "Here is my dataset and model – write, run and explain the code." Reusable for every new dataset.

## Starter prompt

```text
I am a postgraduate researcher in [discipline] using [R, Python, Stata or SPSS]. The attached file is a [public or dummy] dataset with the variables [key variables]. I want to [analysis, e.g. run a linear regression of Y on X1 and X2 with robust standard errors]. Write commented code that loads the data, checks variable types and missing values, runs the analysis and prints the results. Then explain in plain language what each block does and which assumptions I should check. If a function or option may not exist in my version, say so. (For more complex models – for example structural equation models with lavaan or seminr, or a meta-analysis with metafor – name the package and paste a short excerpt of its documentation, so the code follows it.)
```

## Quality check

The code runs without errors and one key number, such as the sample size or a mean, matches what you get by checking the data directly.

## Limits

- Some assistants cannot run code at all, and most run Python only; code in R, Stata or SPSS has to be run and checked in your own software.
- Risk: Your own unpublished drafts, reviews or third-party content.

## Key concepts

- **Ordinary least squares (OLS) assumptions** – Linear regression gives unbiased estimates if the model is linear in its parameters, no predictor is a perfect linear combination of others and the errors have mean zero given the predictors (exogeneity: no omitted variable or reverse causation drives both sides). Estimates are also efficient if errors have constant variance (homoscedasticity) and no autocorrelation; normal residuals matter for small-sample inference. Check each with residual plots, tests and subject knowledge.
- **Heteroscedasticity-consistent (robust) standard errors** – White's (1980) estimator, with small-sample variants such as HC3 (heteroscedasticity-consistent type 3), corrects standard errors when residual variance is not constant. Use it for cross-sectional data; it changes standard errors and p-values, not the coefficients.
- **Newey–West (HAC) standard errors** – Heteroscedasticity- and autocorrelation-consistent standard errors for time series, where successive residuals are correlated (Newey & West, 1987). You choose a lag length; report it as part of the method.
- **Spurious regression** – Regressing one trending time series on another – temperature on CO₂, sales on population – can give a high R² and 'significant' coefficients even when the series are unrelated (Granger & Newbold, 1974). A warning sign is an R² higher than the Durbin–Watson statistic. Model the trend, difference the series or test for cointegration before you read a coefficient as an effect.
- **Reproducible analysis script** – One script that loads the raw data, records every transformation and prints the results, with software and package versions noted (Sandve et al., 2013). You, a supervisor or an examiner can rerun it exactly.

## Key references

- White, H. (1980). A heteroskedasticity-consistent covariance matrix estimator and a direct test for heteroskedasticity. Econometrica, 48(4), 817–838. https://doi.org/10.2307/1912934
- Newey, W. K., & West, K. D. (1987). A simple, positive semi-definite, heteroskedasticity and autocorrelation consistent covariance matrix. Econometrica, 55(3), 703–708. https://doi.org/10.2307/1913610
- Granger, C. W. J., & Newbold, P. (1974). Spurious regressions in econometrics. Journal of Econometrics, 2(2), 111–120. https://doi.org/10.1016/0304-4076(74)90034-7
- Sandve, G. K., Nekrutenko, A., Taylor, J., & Hovig, E. (2013). Ten simple rules for reproducible computational research. PLoS Computational Biology, 9(10), e1003285. https://doi.org/10.1371/journal.pcbi.1003285

## Tools that help

JASP · Jamovi · GitHub (repositories) · GitHub Copilot
