---
id: analyse-4
phase: analyse
order: 4
title: Conversational exploratory analysis
risk: 2
mode: Assist
potential: 2
capabilities: analyse; agentisch
routes: files; external
tools: Jamovi; JASP
repos: kd-eda
data: A1; A2; D3; D4; D9
practice_data: A1; A2; D3; D4; D9
---

Explore datasets in natural language (“How is … distributed?”) and surface initial patterns.

## Problem

Before formal analysis you need to know what a dataset contains, but coding every quick question slows you down, and exploratory patterns easily turn into untested claims.

## Result

A documented first look at structure, distributions and patterns, with the code behind every number, labelled as exploratory and kept apart from the hypotheses you will test.

## Steps

1. Upload the file and state source, unit and period
2. Ask one plain-language question at a time
3. Request the code behind every reported number
4. Record patterns as questions, not findings
5. Verify one result in your own software

## Concepts

### Exploratory data analysis (EDA)

Tukey's (1977) approach of examining data with summaries and graphics to discover structure, anomalies and questions before modelling. It generates hypotheses; it does not test them.

### Anscombe's quartet

Four datasets with near-identical means, variances, correlations and regression lines but very different scatterplots (Anscombe, 1973). It shows why you plot data rather than trust summary statistics alone.

### Exploratory versus confirmatory analysis

Patterns found while exploring cannot be confirmed with the same data. Presenting them as if predicted is HARKing – hypothesising after the results are known (Kerr, 1998). Label exploratory results and test them on new data or a preregistered analysis.

### Reference period (baseline)

Anomalies and indices are expressed relative to a reference period or category. Series with different baselines are comparable only after re-expressing them on a common one, which shifts their levels but not their trends.

## References

- Tukey, J. W. (1977). Exploratory data analysis. Addison-Wesley.
- Anscombe, F. J. (1973). Graphs in statistical analysis. The American Statistician, 27(1), 17–21. doi:10.1080/00031305.1973.10478966
- Kerr, N. L. (1998). HARKing: Hypothesizing after the results are known. Personality and Social Psychology Review, 2(3), 196–217. doi:10.1207/s15327957pspr0203_4

## Practice exercise

### Task

Compare three global temperature records on a common baseline. You learn whether the assistant notices different baselines, missing-value codes and time resolutions, and whether its explanation of the remaining differences matches the papers.

### Prompt

```text
I am exploring three global temperature datasets before any formal analysis. Attached are the HadCRUT5 monthly CSV (anomalies relative to 1961–1990), the GISTEMP CSV (the first line is a title, *** marks missing values, column J-D is the annual mean) and the ERA5 daily CSV (lines starting with # are comments; ano_91-20 is the anomaly relative to 1991–2020). First describe each file: rows, columns, time resolution, period and missing values. Then compute annual means for complete years only, re-express all three series on the 1991–2020 baseline and plot them together from 1940. Give a table of the 2024 values and the Python code used. Finally, using the attached Morice et al. (2021) and Rohde & Hausfather (2020) PDFs, explain why the series still differ, quoting the passages you rely on. Treat everything as exploratory.
```

### Check

After re-baselining, each series averages 0.00 over 1991–2020, and the 2024 values are close: about 0.63 °C (HadCRUT5), 0.67 °C (GISTEMP) and 0.72 °C (ERA5). Find each quoted passage in the PDFs.

## Own material

### Bring

A public dataset as CSV or Excel that you already know a little about, such as an ONS table or a file from a data repository.

### Steps

1. Attach the file and paste the starter prompt with two plain-language questions.
2. Ask the assistant to show the code behind every number it reports (Python, if it can run code).
3. Ask a follow-up question about any pattern that surprises you.
4. Verify one result yourself in Excel or your usual software.

### Prompt

```text
I am exploring a dataset before formal analysis. The attached file contains [description: source, unit, period]. First describe its structure: number of rows and columns, variable types and missing values. Then answer: [question 1, e.g. How is income distributed?] and [question 2, e.g. Does X differ between groups of Y?]. For each answer give a summary table or chart, the Python code used, and one sentence of caution, for example about outliers or small groups. Treat all findings as exploratory, not confirmed.
```

### Check

The row count and one summary statistic match what you get by opening the file in Excel, and any pattern the assistant reports is visible in its chart.

## Technology

Upload the CSV or Excel file to your AI assistant; if it can run Python (pandas, matplotlib), it returns tables, charts and code. Rerun the code or check figures in Excel, Jamovi or JASP.

## Levels

### Chat

Run the starter prompt with the three CSV files and two PDFs attached. Then, in the same chat, ask which year shows the largest gap between the series and what the papers say could explain it, with the code.

### Project / Notebook

Add the HadCRUT5, GISTEMP and ERA5 files (D3, D4, D9; save them as .xlsx or .txt if your tool does not accept CSV) with the Morice and Rohde & Hausfather papers (A1, A2). Ask how each paper explains the differences you found in the chat. For your own data, add the codebook and documentation: data descriptions and source papers stay together, and answers stay consistent when you return.

### Custom assistant

Create a configured assistant (e.g. a Copilot agent, custom GPT, Gemini Gem or Claude project). In its standing instructions, set the exploration routine: describe structure, types and missing values first, check baselines and units, show the code behind every number, add one sentence of caution per finding and label everything exploratory. Switch on code execution / data analysis if your tool offers it. Starter prompts: "Describe this file before we look at patterns." and "How is X distributed across Y?" Reusable for every new dataset.
