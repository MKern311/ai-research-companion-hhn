---
name: llm-as-annotator
description: "Pre-annotate large volumes of text against a coding scheme; humans check samples using an agreement measure. Use when the user works on: LLM as annotator."
---

# LLM as annotator

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/erhebung-2

## Goal

Pre-annotate large volumes of text against a coding scheme; humans check samples using an agreement measure.

A pre-coded table with quoted reasons and confidence, plus Cohen's kappa and a confusion matrix against your own codes – showing where the codebook is unclear before you trust the model at scale.

## When to use

Coding hundreds of texts by hand takes weeks, and a second coder for reliability is often unavailable – so large text collections stay unused or are sampled thinly.

## Workflow with the user

Guide the user through these steps. Where a step says “ask the assistant”, that is you.

1. Code ten of the texts yourself before opening your AI assistant and keep your codes aside.
2. Paste the starter prompt with your scheme and all texts, or attach the CSV.
3. Paste your own ten codes and ask the assistant to calculate Cohen's kappa in Python (if it cannot run code, ask for the code and run it yourself).
4. Read every disagreement and decide whether the scheme or the assistant was unclear.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.

## Typical request

```text
I am testing whether a language model can pre-annotate texts for my study on [topic]. Coding scheme: [code: definition, one per line]. Assign exactly one code to each text below (or in the attached file). Return a table: text ID, code, confidence (high, medium or low), and a one-sentence reason that quotes the text. Use 'unclear' if no code fits; do not create new codes. Texts: [paste numbered texts]
```

## Quality check

With ten texts kappa is a rough signal, not a release test: look first at where disagreements cluster and refine the code definitions. Before coding at scale, aim for kappa (or Krippendorff's alpha) of about 0.7–0.8 on a larger sample of texts not used to refine the codebook.

## Limits

- A chat lets you test the scheme on a small sample; pre-annotating large volumes needs a scripted pipeline in an approved tool.
- Risk: Personal or sensitive data, or decisions that feed directly into your results.

## Key concepts

- **Codebook (content analysis)** – Each code has a name, a definition, inclusion and exclusion criteria, and typical and borderline examples. Clear exclusion rules matter most for language models, which otherwise stretch codes to fit.
- **Cohen's kappa** – Agreement between two coders corrected for chance: κ = (pₒ – pₑ) ÷ (1 – pₑ). By the Landis and Koch (1977) convention, 0.41–0.60 is moderate, 0.61–0.80 substantial and above 0.80 almost perfect; these labels are conventions, not tests.
- **Krippendorff's alpha** – Reliability coefficient that handles more than two coders, missing codes and nominal to ratio data. Krippendorff suggests α ≥ 0.80 for firm conclusions and ≥ 0.667 for tentative ones – again a convention.
- **Confusion matrix and sample size** – Cross-tabulating your codes against the model's shows which code pairs get confused. Kappa from small samples is unstable and depends on code prevalence; report the number of texts and test on texts not used to refine the codebook.

## Key references

- Cohen, J. (1960). A coefficient of agreement for nominal scales. Educational and Psychological Measurement, 20(1), 37–46. https://doi.org/10.1177/001316446002000104
- Landis, J. R., & Koch, G. G. (1977). The measurement of observer agreement for categorical data. Biometrics, 33(1), 159–174. https://doi.org/10.2307/2529310
- Krippendorff, K. (2019). Content analysis: An introduction to its methodology (4th ed.). SAGE. https://doi.org/10.4135/9781071878781

## Tools that help

MAXQDA · NVivo
