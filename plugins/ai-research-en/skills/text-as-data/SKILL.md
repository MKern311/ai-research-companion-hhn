---
name: text-as-data
description: "Classification, sentiment analysis and topic modelling of large text corpora with language models. Use when the user works on: Text as data."
---

# Text as data

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/analyse-3

## Goal

Classification, sentiment analysis and topic modelling of large text corpora with language models.

First labels and topics with the code behind them, validated against a hand-coded sample, so you can judge whether automated text analysis suits your material before building a pipeline.

## When to use

Hundreds of open-text answers, abstracts or documents are too many to read closely, and labelling them by hand is slow and hard to keep consistent across time and coders.

## Procedure

1. Attach the CSV and paste the starter prompt, naming the text column.
2. Read ten of the labelled texts yourself and count how many you agree with.
3. Read two texts from each topic and judge whether the top words fit.
4. Ask the assistant to change the number of topics and compare the results.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.
- Create a configured assistant (e.g. a Copilot agent, custom GPT, Gemini Gem or Claude project). In its standing instructions, fix the method: preprocessing rules, a fixed random seed, the number of topics, a stability rerun, top-word tables, and "call a vague topic vague". For labelling, add category definitions and ask for a one-line reason per text. Switch on code execution / data analysis if your tool offers it. Starter prompt: "Run the standard topic model on this corpus and report stability." Only approved, non-sensitive texts go in, and you check a sample of labels by hand.

## Starter prompt

```text
I am exploring text as data for a project on [topic]. The attached CSV has [number] texts in the column [column name]. 1) For the first 30 rows, assign a sentiment (positive, neutral or negative) or one of these categories: [categories with definitions], with a one-line reason. 2) Using Python, run a simple topic model on all rows with [5] topics and show the top ten words per topic and the code. State the method and settings used, and say where results look unstable.
```

## Quality check

You agree with at least eight of the ten labels you check by hand, and the topics still look similar when the number of topics changes slightly.

## Limits

- A chat can test this on a small sample; classifying a large corpus with a language model needs a scripted pipeline outside the chat.
- Risk: Personal or sensitive data, or decisions that feed directly into your results.

## Key concepts

- **Validate, validate, validate** – Grimmer and Stewart's (2013) principle: automated text methods are neither right nor wrong in general, so every application must be checked against human judgement on your own material before you report results.
- **Precision, recall and F1** – Measures against a hand-coded gold standard: precision is the share of texts given a label that truly belong to it, recall the share of true cases that were found, F1 their harmonic mean. Report them per category.
- **Latent Dirichlet allocation (LDA)** – A probabilistic topic model treating each document as a mixture of topics and each topic as a distribution over words (Blei et al., 2003). Results depend on the number of topics, preprocessing and random seed, and need many documents.
- **Zero-shot classification with large language models** – Labelling texts from category definitions in a prompt, without training examples. Gilardi et al. (2023) found it outperformed crowd workers on several annotation tasks, but performance varies by task and model and must be checked on your data.

## Key references

- Grimmer, J., & Stewart, B. M. (2013). Text as data: The promise and pitfalls of automatic content analysis methods for political texts. Political Analysis, 21(3), 267–297. https://doi.org/10.1093/pan/mps028
- Blei, D. M., Ng, A. Y., & Jordan, M. I. (2003). Latent Dirichlet allocation. Journal of Machine Learning Research, 3, 993–1022.
- Gilardi, F., Alizadeh, M., & Kubli, M. (2023). ChatGPT outperforms crowd workers for text-annotation tasks. Proceedings of the National Academy of Sciences, 120(30), e2305016120. https://doi.org/10.1073/pnas.2305016120

## Tools that help

MAXQDA · GitHub Copilot
