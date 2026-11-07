---
id: analyse-3
phase: analyse
order: 3
title: Text as data
risk: 3
mode: Delegate
potential: 3
capabilities: analyse
routes: files; external
tools: MAXQDA; GitHub Copilot
data: A3
practice_data: A3
---

Classification, sentiment analysis and topic modelling of large text corpora with language models.

## Problem

Hundreds of open-text answers, abstracts or documents are too many to read closely, and labelling them by hand is slow and hard to keep consistent across time and coders.

## Result

First labels and topics with the code behind them, validated against a hand-coded sample, so you can judge whether automated text analysis suits your material before building a pipeline.

## Steps

1. Define categories with short definitions first
2. Upload the texts with an ID column
3. Hand-code a sample and compare with the assistant's labels
4. Rerun with other settings and compare stability

## Concepts

### Validate, validate, validate

Grimmer and Stewart's (2013) principle: automated text methods are neither right nor wrong in general, so every application must be checked against human judgement on your own material before you report results.

### Precision, recall and F1

Measures against a hand-coded gold standard: precision is the share of texts given a label that truly belong to it, recall the share of true cases that were found, F1 their harmonic mean. Report them per category.

### Latent Dirichlet allocation (LDA)

A probabilistic topic model treating each document as a mixture of topics and each topic as a distribution over words (Blei et al., 2003). Results depend on the number of topics, preprocessing and random seed, and need many documents.

### Zero-shot classification with large language models

Labelling texts from category definitions in a prompt, without training examples. Gilardi et al. (2023) found it outperformed crowd workers on several annotation tasks, but performance varies by task and model and must be checked on your data.

## References

- Grimmer, J., & Stewart, B. M. (2013). Text as data: The promise and pitfalls of automatic content analysis methods for political texts. Political Analysis, 21(3), 267–297. doi:10.1093/pan/mps028
- Blei, D. M., Ng, A. Y., & Jordan, M. I. (2003). Latent Dirichlet allocation. Journal of Machine Learning Research, 3, 993–1022.
- Gilardi, F., Alizadeh, M., & Kubli, M. (2023). ChatGPT outperforms crowd workers for text-annotation tasks. Proceedings of the National Academy of Sciences, 120(30), e2305016120. doi:10.1073/pnas.2305016120

## Practice exercise

### Task

Run a topic model on the full text of the Forster et al. (2025) report, split into chunks, and compare the topics with its section headings. You learn whether the assistant states its preprocessing and settings, tests stability across runs and admits vague topics instead of naming them confidently.

### Prompt

```text
I am testing topic modelling as a text-as-data method. Attached is the Forster et al. (2025) PDF, Indicators of Global Climate Change 2024, a 40-page report with numbered sections on different indicators. Using Python: 1) extract the text up to the reference list, split it into chunks of about 150 words and report the number of chunks. 2) Run an LDA topic model with 6 topics; state the preprocessing (stop words, minimum word length, minimum document frequency) and the random seed, and show the top ten words per topic. 3) For each topic, name the section heading of the report it matches best, or say that it matches none. 4) Rerun with a different seed and with 10 topics and say which topics stay stable. Show the code. If Python cannot read the PDF, say so instead of reconstructing the text.
```

### Check

List the section headings yourself (Sections 2–12 run from 'Greenhouse gas emissions' to 'Global mean sea-level rise') and count how many topics match one clearly. Expect only some to do so and generic words such as 'global', 'warming' or 'change' to crowd the top lists; the assistant should say so and suggest extra stop words rather than give every topic a confident name. Topics should shift between seeds.

## Own material

### Bring

A CSV of 50–200 short public texts, such as open-access abstracts or public product reviews with author names removed, plus an ID column.

### Steps

1. Attach the CSV and paste the starter prompt, naming the text column.
2. Read ten of the labelled texts yourself and count how many you agree with.
3. Read two texts from each topic and judge whether the top words fit.
4. Ask the assistant to change the number of topics and compare the results.

### Prompt

```text
I am exploring text as data for a project on [topic]. The attached CSV has [number] texts in the column [column name]. 1) For the first 30 rows, assign a sentiment (positive, neutral or negative) or one of these categories: [categories with definitions], with a one-line reason. 2) Using Python, run a simple topic model on all rows with [5] topics and show the top ten words per topic and the code. State the method and settings used, and say where results look unstable.
```

### Check

You agree with at least eight of the ten labels you check by hand, and the topics still look similar when the number of topics changes slightly.

### Limit

A chat can test this on a small sample; classifying a large corpus with a language model needs a scripted pipeline outside the chat.

## Technology

Upload a CSV or PDFs to your AI assistant; it labels the texts itself and, if it can run code, runs a topic model in Python (for example LDA with scikit-learn). If your tool does not accept the file type, save it as .xlsx or .txt. For larger corpora, run the returned code in your own Python or R environment.

## Levels

### Chat

Run the starter prompt with the Forster PDF attached. Then, in the same chat, ask the assistant to add the extra stop words it suggested, rerun with two seeds and show a table of the topics that persist.

### Project / Notebook

Add the Forster report (A3), the code and topic lists from your chat runs saved as .txt and a note of your settings. Ask which passages of the report each saved topic matches, and how two runs differ. For your own corpus, add only approved, non-sensitive texts. Settings, outputs and your interpretation stay together; you judge every topic label yourself.

### Custom assistant

Create a configured assistant (e.g. a Copilot agent, a ChatGPT project, a Gemini Gem or a Claude project). In its standing instructions, fix the method: preprocessing rules, a fixed random seed, the number of topics, a stability rerun, top-word tables, and "call a vague topic vague". For labelling, add category definitions and ask for a one-line reason per text. Switch on code execution / data analysis if your tool offers it. Starter prompt: "Run the standard topic model on this corpus and report stability." Only approved, non-sensitive texts go in, and you check a sample of labels by hand.

### Automation / own code

For a large corpus, use a low-code automation platform (e.g. Power Automate or n8n) to pass each new text from a cloud folder to the assistant and write its label and reason into a table – a configured assistant alone works one chat at a time. You still check a random sample. On GitHub: a Python script runs the topic model and the labelling over the whole corpus via your institution's approved AI API – only with approved, non-sensitive texts. Check data protection and approval with your university first.
