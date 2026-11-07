---
id: analyse-1
phase: analyse
order: 1
title: Data cleaning
risk: 2
mode: Co-create
potential: 3
capabilities: analyse
routes: files; external
tools: Jamovi
repos: kd-eda
data: D7
practice_data: D7
---

Detect inconsistencies, outliers and missing values; record cleaning steps as a script.

## Problem

Raw files arrive with missing-value codes, quality flags, provisional rows and duplicates; cleaning by hand is slow, undocumented and hard to reproduce or defend later.

## Result

A rerunnable cleaning script, a log of every decision and a tidy dataset in which missing values, flags and exclusions are explicit rather than silently dropped.

## Steps

1. Upload the raw file and describe its source
2. Ask for a problem profile before changing anything
3. Decide each fix yourself and record why
4. Compare row counts and two values before and after

## Concepts

### Tidy data

Wickham's (2014) structure: each variable a column, each observation a row, each type of observational unit a table. Much cleaning means reshaping messy layouts – wide year-by-month tables, header lines, units rows – into this form.

### Missing-data mechanisms (MCAR, MAR, MNAR)

Rubin's (1976) classification: missing completely at random, missing at random given observed variables, or missing not at random. The mechanism decides whether deleting cases, imputing or modelling the missingness is defensible.

### Screen, diagnose, edit

Van den Broeck et al.'s (2005) cycle: screen for anomalies, diagnose each as error, true extreme or undetermined, then correct, keep or flag it – documenting every decision. Do not delete values only because they are extreme.

### Tukey's fences

A convention for flagging candidate outliers: values below Q1 − 1.5 × IQR or above Q3 + 1.5 × IQR, where IQR is the interquartile range. A flag is a prompt for diagnosis, not a rule for removal.

## References

- Wickham, H. (2014). Tidy data. Journal of Statistical Software, 59(10), 1–23. doi:10.18637/jss.v059.i10
- Rubin, D. B. (1976). Inference and missing data. Biometrika, 63(3), 581–592. doi:10.1093/biomet/63.3.581
- Van den Broeck, J., Cunningham, S. A., Eeckels, R., & Herbst, K. (2005). Data cleaning: Detecting, diagnosing, and editing data abnormalities. PLoS Medicine, 2(10), e267. doi:10.1371/journal.pmed.0020267

## Practice exercise

### Task

Profile the Oxford station file, which mixes missing-value codes, estimate flags and provisional rows. You learn whether the assistant reports these codes before cleaning or silently converts, drops or misreads them.

### Prompt

```text
I am preparing a dataset for analysis. The attached Met Office Oxford station text file has header lines, then one row per month with tmax and tmin (°C), af (air-frost days), rain (mm) and sun (hours). Read the header lines first and explain every code they define. Then use Python to profile the data without changing it: number of monthly rows, first and last month, and for each column the count of '---' values, the count of values flagged with *, the number of rows marked 'Provisional', and the minimum and maximum. Report this as a table: column, problem, number of rows, example values, suggested fix. Propose a tidy output with separate flag columns instead of deleting anything. Do not clean yet, and show the code so I can rerun it.
```

### Check

Open the file in a text editor: 2,085 monthly rows (January 1853 – September 2026), 912 missing sunshine values and nine 'Provisional' rows. The highest tmax, 28.2 °C in July 2026, is estimated and provisional.

## Own material

### Bring

A small public or dummy CSV or Excel file with some messy values, such as misspelt categories, blanks or implausible numbers.

### Steps

1. Attach the file and paste the starter prompt.
2. Review the issue table and decide which fixes you accept.
3. Ask the assistant to apply only those fixes and show the script (Python, if it can run code).
4. Ask for the cleaned file and a log of every change made.

### Prompt

```text
I am preparing a dataset for analysis. The attached file contains [public or dummy data on topic]; each row is a [unit]. Use Python to profile it: missing values per column, inconsistent category spellings, duplicate rows, and out-of-range or implausible values (valid ranges: [e.g. age 18–99]). Report the issues as a table: column, problem, number of rows, example values, suggested fix. Do not change the data yet. Show the code you used so I can rerun it later.
```

### Check

Confirm two or three of the reported problems by hand in the original file, then check the cleaned file has the row count you expect.

## Technology

Upload the CSV or text file to your AI assistant; if it can run Python, it works on the file and returns the code, which you keep and rerun in your own environment. If your tool does not accept the file type, save it as .xlsx or .txt. Keep the raw file unchanged and save the cleaned data under a new name.

## Levels

### Chat

Run the starter prompt with the Oxford file attached. Then, in the same chat, accept the fixes you agree with and ask for the cleaned file with flag columns, the script and a log of every change.

### Project / Notebook

Add the raw Oxford file (D7, .txt), a short Word data dictionary with the codes from its header and your cleaning log. Ask which codes each column uses and whether the log covers all of them. For your own data, keep codebook, documentation and cleaning decisions together, so the same rules apply when you return or add a new wave.

### Custom assistant

In Instructions, fix the order: read the header and codebook first, profile without changing anything, report an issue table, wait for your approval, then clean with flag columns, keep the raw file untouched and return the script and a change log. Never delete rows silently. Switch on "Create documents, charts and code". Starter prompt: "Profile this file and list every problem before cleaning." Reusable for each new data file or survey wave.
