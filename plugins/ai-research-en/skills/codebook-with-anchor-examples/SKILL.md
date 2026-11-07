---
name: codebook-with-anchor-examples
description: "Turn a category system into a codebook – definition, inclusion and exclusion rules, anchor example and rule for borderline cases – and test it on a sample passage and with a second coder. Use when the user works on: Codebook with anchor examples."
---

# Codebook with anchor examples

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/analyse-7

## Goal

Turn a category system into a codebook – definition, inclusion and exclusion rules, anchor example and rule for borderline cases – and test it on a sample passage and with a second coder.

A codebook with definitions, inclusion, exclusion and borderline rules and anchor examples from your material, tested with a second coder and an agreement statistic you can report.

## When to use

Categories that seem clear in your head turn vague in use: coders disagree on borderline passages, rules scatter across memos, and agreement cannot be reported.

## Procedure

1. Paste your research question and categories.
2. Ask for a codebook with definitions, inclusion and exclusion rules and borderline rules.
3. Paste the sample passage and ask the assistant to code it with the codebook.
4. Ask a colleague to code the same passage with the codebook, compare decisions and tighten the rules.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.
- Create a configured assistant, for example "Codebook coder" (e.g. a Copilot agent, custom GPT, Gemini Gem or Claude project). Add the final codebook as a knowledge file (if your tool does not support knowledge files, attach it in the chat). In the standing instructions: code sentence by sentence, give category, exact quote and "clear, unclear or problematic", use "none of these" when nothing fits, and never invent an anchor or quote. Starter prompt: "Code this passage with the codebook and flag every borderline decision." Reusable for each new batch – only approved, anonymised material goes in, and a human checks every coding.

## Starter prompt

```text
I am doing a qualitative content analysis (for example following Mayring or Kuckartz). Research question: [question]. Categories: [list with one-line descriptions]. Build a codebook: for each category give the name, a definition, an inclusion rule, an exclusion rule, and a rule for borderline cases. Do not invent anchor examples; write 'add anchor example from material' instead. Then code the passage below with this codebook: for each coded segment, give the category, the exact quote, whether the decision was clear, unclear or problematic, and how the codebook should change. Use only direct quotes from the passage.

[paste passage]
```

## Quality check

Every quote appears word for word in the passage, no category overlaps with another, and a second person coding the same passage with the codebook reaches mostly the same decisions.

## Limits

- Risk: Personal or sensitive data, or decisions that feed directly into your results.

## Key concepts

- **Qualitative content analysis** – A systematic, rule-guided method for categorising text (Mayring; Kuckartz & Rädiker). Categories are built deductively from theory or inductively from the material, and each is documented in a codebook with definition, coding rules and anchor examples.
- **Codebook entry** – For each category: name, definition, inclusion criteria, exclusion criteria (often pointing to a neighbouring category), a rule for borderline cases and an anchor example – a typical passage quoted verbatim from your own material. A residual category ('none of these') keeps units from being forced into a category.
- **Cohen's kappa** – Agreement between two coders corrected for chance: κ = (pₒ − pₑ) / (1 − pₑ) (Cohen, 1960). Landis and Koch's (1977) widely used but arbitrary convention: 0.41–0.60 moderate, 0.61–0.80 substantial, 0.81–1.00 almost perfect.
- **Krippendorff's alpha** – A reliability coefficient for any number of coders, missing data and nominal to ratio scales. Krippendorff's convention: α ≥ 0.800 for reliable data; 0.667 to 0.800 only for tentative conclusions.

## Key references

- Cohen, J. (1960). A coefficient of agreement for nominal scales. Educational and Psychological Measurement, 20(1), 37–46. https://doi.org/10.1177/001316446002000104
- Landis, J. R., & Koch, G. G. (1977). The measurement of observer agreement for categorical data. Biometrics, 33(1), 159–174. https://doi.org/10.2307/2529310
- Krippendorff, K. (2019). Content analysis: An introduction to its methodology (4th ed.). SAGE. https://doi.org/10.4135/9781071878781
- Mayring, P. (2014). Qualitative content analysis: Theoretical foundation, basic procedures and software solution. Klagenfurt.
- Kuckartz, U., & Rädiker, S. (2023). Qualitative content analysis: Methods, practice and software (2nd ed.). SAGE.

## Tools that help

MAXQDA · NVivo · Taguette
