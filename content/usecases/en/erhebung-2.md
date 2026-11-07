---
id: erhebung-2
phase: erhebung
order: 2
title: LLM as annotator
risk: 3
mode: Delegate
potential: 3
capabilities: analyse
routes: files; chat; external
tools: MAXQDA; NVivo
data: AB
practice_data: AB
---

Pre-annotate large volumes of text against a coding scheme; humans check samples using an agreement measure.

## Problem

Coding hundreds of texts by hand takes weeks, and a second coder for reliability is often unavailable – so large text collections stay unused or are sampled thinly.

## Result

A pre-coded table with quoted reasons and confidence, plus Cohen's kappa and a confusion matrix against your own codes – showing where the codebook is unclear before you trust the model at scale.

## Steps

1. Write a codebook with definitions, inclusion and exclusion rules
2. Code a sample yourself before asking the assistant
3. Ask for codes, quoted reasons and confidence per text
4. Compute Cohen's kappa and a confusion matrix in Python
5. Revise definitions where disagreements cluster; re-test on new texts

## Concepts

### Codebook (content analysis)

Each code has a name, a definition, inclusion and exclusion criteria, and typical and borderline examples. Clear exclusion rules matter most for language models, which otherwise stretch codes to fit.

### Cohen's kappa

Agreement between two coders corrected for chance: κ = (pₒ – pₑ) ÷ (1 – pₑ). By the Landis and Koch (1977) convention, 0.41–0.60 is moderate, 0.61–0.80 substantial and above 0.80 almost perfect; these labels are conventions, not tests.

### Krippendorff's alpha

Reliability coefficient that handles more than two coders, missing codes and nominal to ratio data. Krippendorff suggests α ≥ 0.80 for firm conclusions and ≥ 0.667 for tentative ones – again a convention.

### Confusion matrix and sample size

Cross-tabulating your codes against the model's shows which code pairs get confused. Kappa from small samples is unstable and depends on code prevalence; report the number of texts and test on texts not used to refine the codebook.

## References

- Cohen, J. (1960). A coefficient of agreement for nominal scales. Educational and Psychological Measurement, 20(1), 37–46. doi:10.1177/001316446002000104
- Landis, J. R., & Koch, G. G. (1977). The measurement of observer agreement for categorical data. Biometrics, 33(1), 159–174. doi:10.2307/2529310
- Krippendorff, K. (2019). Content analysis: An introduction to its methodology (4th ed.). SAGE. doi:10.4135/9781071878781

## Practice exercise

### Task

Before you open your AI assistant, code the 12 abstracts in the abstracts file yourself (about three minutes – title and first sentences are usually enough). Then let the assistant code them with the same scheme and compute kappa. You learn how codebook clarity drives agreement, and how unstable kappa is with only 12 texts.

### Prompt

```text
I am testing whether a language model can pre-annotate texts. Attached is a text file with the titles and abstracts of 12 papers on climate change, each with an ID from A1 to C6. Coding scheme, one code per paper: DATASET – describes how an observational data record is built or updated; ATTRIBUTION – quantifies the human contribution to warming or to a specific extreme; TREND – quantifies observed or projected changes without formal attribution; METHOD – mainly demonstrates a statistical technique on existing data. Use 'unclear' if no code fits; do not create new codes. Return a table: ID, first author and year, code, confidence (high, medium or low), and a one-sentence reason quoting the abstract. Next I will paste my own codes: then compute Cohen's kappa in Python, show a confusion matrix and list every disagreement.
```

### Check

Recompute kappa by hand from the confusion matrix. Expect disagreement on borderline papers such as Forster et al. (2025) and Vautard et al. (2023), and confirm that each quoted reason appears verbatim in the abstracts file. With 12 texts kappa is only illustrative; before coding at scale, aim for about 0.7–0.8 on a larger set of texts not used to refine the codebook.

## Own material

### Bring

Your coding scheme (3–6 codes with definitions) and 20 short non-sensitive texts, such as open-access abstracts or invented statements, numbered in a list or CSV.

### Steps

1. Code ten of the texts yourself before opening your AI assistant and keep your codes aside.
2. Paste the starter prompt with your scheme and all texts, or attach the CSV.
3. Paste your own ten codes and ask the assistant to calculate Cohen's kappa in Python (if it cannot run code, ask for the code and run it yourself).
4. Read every disagreement and decide whether the scheme or the assistant was unclear.

### Prompt

```text
I am testing whether a language model can pre-annotate texts for my study on [topic]. Coding scheme: [code: definition, one per line]. Assign exactly one code to each text below (or in the attached file). Return a table: text ID, code, confidence (high, medium or low), and a one-sentence reason that quotes the text. Use 'unclear' if no code fits; do not create new codes. Texts: [paste numbered texts]
```

### Check

With ten texts kappa is a rough signal, not a release test: look first at where disagreements cluster and refine the code definitions. Before coding at scale, aim for kappa (or Krippendorff's alpha) of about 0.7–0.8 on a larger sample of texts not used to refine the codebook.

### Limit

A chat lets you test the scheme on a small sample; pre-annotating large volumes needs a scripted pipeline in an approved tool.

## Technology

Upload the texts as a CSV or text file with your codebook to your AI assistant; it codes them and computes Cohen's kappa in Python against your codes – if it cannot run code, ask for the code and run it yourself. Coding at scale needs a scripted pipeline in an approved tool. Practise on the abstracts file of the 12 practice papers.

## Levels

### Chat

Run the starter prompt with the abstracts file and paste your own codes for kappa. In the same chat, rewrite the definition of the code with most disagreements and ask it to recode only the disputed texts.

### Project / Notebook

Add your codebook with definitions and examples, the texts (AB works as .txt; if your tool does not accept the file type, save it as .xlsx or .txt) and your notes on each disagreement. Ask which definitions the disagreements point to and draft a revised codebook. Depending on your tool, the project cannot compute kappa, but it keeps every codebook version with its reasons – material for your methods section.

### Custom assistant

Call it 'Pre-annotator' and switch on code execution / data analysis if your tool offers it, for kappa and the confusion matrix. Instructions: the coding scheme, one code per text, 'unclear' instead of new codes, confidence and a verbatim quote as reason, kappa against human codes when given. Knowledge: your codebook. Only approved, non-sensitive texts go in, and a human checks a sample of every batch. Starter prompt: 'Code these texts: [paste]'.
