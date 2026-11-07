---
name: data-cleaning
description: "Detect inconsistencies, outliers and missing values; record cleaning steps as a script. Use when the user works on: Data cleaning."
---

# Data cleaning

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/analyse-1

## Goal

Detect inconsistencies, outliers and missing values; record cleaning steps as a script.

A rerunnable cleaning script, a log of every decision and a tidy dataset in which missing values, flags and exclusions are explicit rather than silently dropped.

## When to use

Raw files arrive with missing-value codes, quality flags, provisional rows and duplicates; cleaning by hand is slow, undocumented and hard to reproduce or defend later.

## Procedure

1. Attach the file and paste the starter prompt.
2. Review the issue table and decide which fixes you accept.
3. Ask the assistant to apply only those fixes and show the script (Python, if it can run code).
4. Ask for the cleaned file and a log of every change made.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.
- In Instructions, fix the order: read the header and codebook first, profile without changing anything, report an issue table, wait for your approval, then clean with flag columns, keep the raw file untouched and return the script and a change log. Never delete rows silently. Switch on "Create documents, charts and code". Starter prompt: "Profile this file and list every problem before cleaning." Reusable for each new data file or survey wave.

## Starter prompt

```text
I am preparing a dataset for analysis. The attached file contains [public or dummy data on topic]; each row is a [unit]. Use Python to profile it: missing values per column, inconsistent category spellings, duplicate rows, and out-of-range or implausible values (valid ranges: [e.g. age 18–99]). Report the issues as a table: column, problem, number of rows, example values, suggested fix. Do not change the data yet. Show the code you used so I can rerun it later.
```

## Quality check

Confirm two or three of the reported problems by hand in the original file, then check the cleaned file has the row count you expect.

## Limits

- Risk: Your own unpublished drafts, reviews or third-party content.

## Key concepts

- **Tidy data** – Wickham's (2014) structure: each variable a column, each observation a row, each type of observational unit a table. Much cleaning means reshaping messy layouts – wide year-by-month tables, header lines, units rows – into this form.
- **Missing-data mechanisms (MCAR, MAR, MNAR)** – Rubin's (1976) classification: missing completely at random, missing at random given observed variables, or missing not at random. The mechanism decides whether deleting cases, imputing or modelling the missingness is defensible.
- **Screen, diagnose, edit** – Van den Broeck et al.'s (2005) cycle: screen for anomalies, diagnose each as error, true extreme or undetermined, then correct, keep or flag it – documenting every decision. Do not delete values only because they are extreme.
- **Tukey's fences** – A convention for flagging candidate outliers: values below Q1 − 1.5 × IQR or above Q3 + 1.5 × IQR, where IQR is the interquartile range. A flag is a prompt for diagnosis, not a rule for removal.

## Key references

- Wickham, H. (2014). Tidy data. Journal of Statistical Software, 59(10), 1–23. https://doi.org/10.18637/jss.v059.i10
- Rubin, D. B. (1976). Inference and missing data. Biometrika, 63(3), 581–592. https://doi.org/10.1093/biomet/63.3.581
- Van den Broeck, J., Cunningham, S. A., Eeckels, R., & Herbst, K. (2005). Data cleaning: Detecting, diagnosing, and editing data abnormalities. PLoS Medicine, 2(10), e267. https://doi.org/10.1371/journal.pmed.0020267

## Tools that help

Jamovi
