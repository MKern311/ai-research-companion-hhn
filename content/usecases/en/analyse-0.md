---
id: analyse-0
phase: analyse
order: 0
title: Coding assistance for statistics
risk: 2
mode: Co-create
potential: 3
capabilities: generierung; analyse
routes: files; external; connected
connect: JASP; Jamovi; GitHub (repositories)
tools: Jamovi; JASP; GitHub Copilot
repos: kd-stats; lavaan
data: D7
practice_data: D7
---

Generate, explain, debug and document analysis code (R, Python, Stata, SPSS syntax) – from regression to structural equation models or a meta-analysis.

## Problem

You know which model you need but lose hours on syntax, error messages and package options, and forum code rarely matches your data structure or the model's assumptions.

## Result

Commented, runnable code you can explain line by line, with the model's assumptions listed and tested, and one key estimate reproduced in a second tool.

## Steps

1. Name the model, software, outcome and predictors
2. Ask for commented code with assumption checks built in
3. Run it (if the assistant cannot run code, run it yourself) and paste error messages back verbatim
4. Reproduce one key estimate in a second tool

## Concepts

### Ordinary least squares (OLS) assumptions

Linear regression gives unbiased estimates if the model is linear in its parameters, no predictor is a perfect linear combination of others and the errors have mean zero given the predictors (exogeneity: no omitted variable or reverse causation drives both sides). Estimates are also efficient if errors have constant variance (homoscedasticity) and no autocorrelation; normal residuals matter for small-sample inference. Check each with residual plots, tests and subject knowledge.

### Heteroscedasticity-consistent (robust) standard errors

White's (1980) estimator, with small-sample variants such as HC3 (heteroscedasticity-consistent type 3), corrects standard errors when residual variance is not constant. Use it for cross-sectional data; it changes standard errors and p-values, not the coefficients.

### Newey–West (HAC) standard errors

Heteroscedasticity- and autocorrelation-consistent standard errors for time series, where successive residuals are correlated (Newey & West, 1987). You choose a lag length; report it as part of the method.

### Spurious regression

Regressing one trending time series on another – temperature on CO₂, sales on population – can give a high R² and 'significant' coefficients even when the series are unrelated (Granger & Newbold, 1974). A warning sign is an R² higher than the Durbin–Watson statistic. Model the trend, difference the series or test for cointegration before you read a coefficient as an effect.

### Reproducible analysis script

One script that loads the raw data, records every transformation and prints the results, with software and package versions noted (Sandve et al., 2013). You, a supervisor or an examiner can rerun it exactly.

## References

- White, H. (1980). A heteroskedasticity-consistent covariance matrix estimator and a direct test for heteroskedasticity. Econometrica, 48(4), 817–838. doi:10.2307/1912934
- Newey, W. K., & West, K. D. (1987). A simple, positive semi-definite, heteroskedasticity and autocorrelation consistent covariance matrix. Econometrica, 55(3), 703–708. doi:10.2307/1913610
- Granger, C. W. J., & Newbold, P. (1974). Spurious regressions in econometrics. Journal of Econometrics, 2(2), 111–120. doi:10.1016/0304-4076(74)90034-7
- Sandve, G. K., Nekrutenko, A., Taylor, J., & Hovig, E. (2013). Ten simple rules for reproducible computational research. PLoS Computational Biology, 9(10), e1003285. doi:10.1371/journal.pcbi.1003285

## Practice exercise

### Task

Compute annual means from a station file with codes for missing, estimated and provisional values, then fit a linear trend with ordinary and Newey–West standard errors. You learn whether the assistant applies the codes correctly, reports which years it left out (1883, 2026) and raises time-series assumptions such as autocorrelation without being told.

### Prompt

```text
I am a postgraduate researcher learning Python for statistics. Attached is the Met Office Durham station file (from D7): a few header lines, then one row per month with yyyy, mm, tmax and tmin (°C), af, rain and sun. '---' marks a missing value, * an estimated value and 'Provisional' a row that is not yet final. Write and run commented Python code that: 1) reads the file, keeps estimated values but drops provisional rows, 2) computes the annual mean of tmax for complete calendar years only (all 12 months present), 3) prints the number of years, the first and last year and every year left out, 4) regresses annual mean tmax on year with OLS, then again with Newey–West standard errors (state the lag you choose and why), and reports the trend per decade, 5) plots the residuals against time. Explain each block in plain language, list the assumptions of this regression and say which ones the residual plot puts in doubt. Then give equivalent R code without running it (I will run it in R myself).
```

### Check

The model should use 145 complete years (1880–2025): 1883 drops out because December is missing, 2026 because it is incomplete and provisional. The OLS trend is about 0.11 °C per decade (coefficient of determination R² about 0.32); the coefficient is identical in both runs, only the standard error changes. Recompute the 2025 mean in Excel: 14.45 °C. The residuals run below zero in 1960–1989 and above it after 2010, so the assistant should question a straight line.

## Own material

### Bring

A public or dummy dataset as CSV and an analysis you want to run, or a short analysis script of your own that throws an error.

### Steps

1. Attach the CSV and describe the analysis, naming your software.
2. Ask for commented code plus a plain explanation of each step.
3. For Python, ask the assistant to run it; if it cannot run code, or for other languages, run it in your own software.
4. Paste any error message back and ask for a fix with an explanation.

### Prompt

```text
I am a postgraduate researcher in [discipline] using [R, Python, Stata or SPSS]. The attached file is a [public or dummy] dataset with the variables [key variables]. I want to [analysis, e.g. run a linear regression of Y on X1 and X2 with robust standard errors]. Write commented code that loads the data, checks variable types and missing values, runs the analysis and prints the results. Then explain in plain language what each block does and which assumptions I should check. If a function or option may not exist in my version, say so. (For more complex models – for example structural equation models with lavaan or seminr, or a meta-analysis with metafor – name the package and paste a short excerpt of its documentation, so the code follows it.)
```

### Check

The code runs without errors and one key number, such as the sample size or a mean, matches what you get by checking the data directly.

### Limit

Some assistants cannot run code at all, and most run Python only; code in R, Stata or SPSS has to be run and checked in your own software.

## Technology

Upload the data file (CSV or text) to your AI assistant; if it can run Python, it works on the file directly, while R, Stata or SPSS code runs in your own software. If your tool does not accept the file type, save it as .xlsx or .txt. For structural equation models or meta-analysis, paste the relevant lavaan or metafor documentation into the chat.

## Levels

### Chat

Run the starter prompt with the Durham file attached. Then, in the same chat, ask the assistant to rerun the model with a different Newey–West lag and explain why only the standard error changes.

### Project / Notebook

Add the Durham station file (D7, .txt), your analysis plan as a Word file and the code and output of each chat run saved as .txt. Ask where the code departs from the plan or what changed between runs. Depending on your tool, the project or notebook may not run code, but it keeps plan, script versions and results together, so you can see weeks later why you made each choice.

### Custom assistant

Create a configured assistant (e.g. a Copilot agent, custom GPT, Gemini Gem or Claude project). In its standing instructions, name your discipline and software and set the rules: commented code, complete cases only, list every dropped observation, state and check assumptions, give R or Stata equivalents without running them, and never report a number without the code behind it. Switch on code execution / data analysis if your tool offers it. Starter prompt: "Here is my dataset and model – write, run and explain the code." Reusable for every new dataset.
