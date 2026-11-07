---
name: conversational-exploratory-analysis
description: "Explore datasets in natural language (“How is … distributed?”) and surface initial patterns. Use when the user works on: Conversational exploratory analysis."
---

# Conversational exploratory analysis

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/analyse-4

## Goal

Explore datasets in natural language (“How is … distributed?”) and surface initial patterns.

A documented first look at structure, distributions and patterns, with the code behind every number, labelled as exploratory and kept apart from the hypotheses you will test.

## When to use

Before formal analysis you need to know what a dataset contains, but coding every quick question slows you down, and exploratory patterns easily turn into untested claims.

## Procedure

1. Attach the file and paste the starter prompt with two plain-language questions.
2. Ask the assistant to show the code behind every number it reports (Python, if it can run code).
3. Ask a follow-up question about any pattern that surprises you.
4. Verify one result yourself in Excel or your usual software.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.
- Create a configured assistant (e.g. a Copilot agent, custom GPT, Gemini Gem or Claude project). In its standing instructions, set the exploration routine: describe structure, types and missing values first, check baselines and units, show the code behind every number, add one sentence of caution per finding and label everything exploratory. Switch on code execution / data analysis if your tool offers it. Starter prompts: "Describe this file before we look at patterns." and "How is X distributed across Y?" Reusable for every new dataset.

## Starter prompt

```text
I am exploring a dataset before formal analysis. The attached file contains [description: source, unit, period]. First describe its structure: number of rows and columns, variable types and missing values. Then answer: [question 1, e.g. How is income distributed?] and [question 2, e.g. Does X differ between groups of Y?]. For each answer give a summary table or chart, the Python code used, and one sentence of caution, for example about outliers or small groups. Treat all findings as exploratory, not confirmed.
```

## Quality check

The row count and one summary statistic match what you get by opening the file in Excel, and any pattern the assistant reports is visible in its chart.

## Limits

- Risk: Your own unpublished drafts, reviews or third-party content.

## Key concepts

- **Exploratory data analysis (EDA)** – Tukey's (1977) approach of examining data with summaries and graphics to discover structure, anomalies and questions before modelling. It generates hypotheses; it does not test them.
- **Anscombe's quartet** – Four datasets with near-identical means, variances, correlations and regression lines but very different scatterplots (Anscombe, 1973). It shows why you plot data rather than trust summary statistics alone.
- **Exploratory versus confirmatory analysis** – Patterns found while exploring cannot be confirmed with the same data. Presenting them as if predicted is HARKing – hypothesising after the results are known (Kerr, 1998). Label exploratory results and test them on new data or a preregistered analysis.
- **Reference period (baseline)** – Anomalies and indices are expressed relative to a reference period or category. Series with different baselines are comparable only after re-expressing them on a common one, which shifts their levels but not their trends.

## Key references

- Tukey, J. W. (1977). Exploratory data analysis. Addison-Wesley.
- Anscombe, F. J. (1973). Graphs in statistical analysis. The American Statistician, 27(1), 17–21. https://doi.org/10.1080/00031305.1973.10478966
- Kerr, N. L. (1998). HARKing: Hypothesizing after the results are known. Personality and Social Psychology Review, 2(3), 196–217. https://doi.org/10.1207/s15327957pspr0203_4

## Tools that help

Jamovi · JASP
