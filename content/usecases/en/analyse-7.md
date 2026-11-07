---
id: analyse-7
phase: analyse
order: 7
title: Codebook with anchor examples
risk: 3
mode: Co-create
potential: 3
capabilities: analyse; generierung
routes: chat; files; external
tools: MAXQDA; NVivo; Taguette
data: B2; C3; C4
practice_data: B2; C3; C4
---

Turn a category system into a codebook – definition, inclusion and exclusion rules, anchor example and rule for borderline cases – and test it on a sample passage and with a second coder.

## Problem

Categories that seem clear in your head turn vague in use: coders disagree on borderline passages, rules scatter across memos, and agreement cannot be reported.

## Result

A codebook with definitions, inclusion, exclusion and borderline rules and anchor examples from your material, tested with a second coder and an agreement statistic you can report.

## Steps

1. Give your research question and four to six categories
2. Ask for definitions, inclusion, exclusion and borderline rules
3. Add anchor examples quoted from your own material
4. Code a sample independently with a second coder
5. Compute agreement, discuss disagreements and tighten the rules

## Concepts

### Qualitative content analysis

A systematic, rule-guided method for categorising text (Mayring; Kuckartz & Rädiker). Categories are built deductively from theory or inductively from the material, and each is documented in a codebook with definition, coding rules and anchor examples.

### Codebook entry

For each category: name, definition, inclusion criteria, exclusion criteria (often pointing to a neighbouring category), a rule for borderline cases and an anchor example – a typical passage quoted verbatim from your own material. A residual category ('none of these') keeps units from being forced into a category.

### Cohen's kappa

Agreement between two coders corrected for chance: κ = (pₒ − pₑ) / (1 − pₑ) (Cohen, 1960). Landis and Koch's (1977) widely used but arbitrary convention: 0.41–0.60 moderate, 0.61–0.80 substantial, 0.81–1.00 almost perfect.

### Krippendorff's alpha

A reliability coefficient for any number of coders, missing data and nominal to ratio scales. Krippendorff's convention: α ≥ 0.800 for reliable data; 0.667 to 0.800 only for tentative conclusions.

## References

- Cohen, J. (1960). A coefficient of agreement for nominal scales. Educational and Psychological Measurement, 20(1), 37–46. doi:10.1177/001316446002000104
- Landis, J. R., & Koch, G. G. (1977). The measurement of observer agreement for categorical data. Biometrics, 33(1), 159–174. doi:10.2307/2529310
- Krippendorff, K. (2019). Content analysis: An introduction to its methodology (4th ed.). SAGE. doi:10.4135/9781071878781
- Mayring, P. (2014). Qualitative content analysis: Theoretical foundation, basic procedures and software solution. Klagenfurt.
- Kuckartz, U., & Rädiker, S. (2023). Qualitative content analysis: Methods, practice and software (2nd ed.). SAGE.

## Practice exercise

### Task

Build a codebook on how attribution studies express human influence on extremes, with anchor examples quoted from two papers, then code a third abstract with a neighbour. You learn whether the assistant invents anchors and how well two people agree using its rules.

### Prompt

```text
I am doing a qualitative content analysis. Research question: how do climate attribution studies express human influence on extreme events? Categories: probability change (more or less likely, risk ratios); return period (how often an event recurs); intensity change (how much hotter or drier); future projection (change under further warming); uncertainty or limitation (stated caveats); none of these (for sentences that fit no category). Build a codebook: for each category except 'none of these' give the name, a definition, an inclusion rule, an exclusion rule, a borderline rule and one anchor example quoted verbatim, with page number, from the attached Christidis et al. (2020) or Christidis et al. (2023) PDF. Then code the abstract of the attached Zachariah et al. (2023) PDF sentence by sentence: category, exact quote, and whether the decision was clear, unclear or problematic. Use only direct quotes.
```

### Check

Find every anchor and quote in the PDFs. A neighbour codes the Zachariah abstract independently with the codebook, including 'none of these'; ask the assistant to compute Cohen's kappa from both codings and check the percentage agreement by hand. With only eleven sentences, kappa is illustrative – discuss where you disagree rather than the value.

## Own material

### Bring

Your research question, four to six categories with a one-line description each, and a short passage from an open-access paper or an invented text – never participants' data.

### Steps

1. Paste your research question and categories.
2. Ask for a codebook with definitions, inclusion and exclusion rules and borderline rules.
3. Paste the sample passage and ask the assistant to code it with the codebook.
4. Ask a colleague to code the same passage with the codebook, compare decisions and tighten the rules.

### Prompt

```text
I am doing a qualitative content analysis (for example following Mayring or Kuckartz). Research question: [question]. Categories: [list with one-line descriptions]. Build a codebook: for each category give the name, a definition, an inclusion rule, an exclusion rule, and a rule for borderline cases. Do not invent anchor examples; write 'add anchor example from material' instead. Then code the passage below with this codebook: for each coded segment, give the category, the exact quote, whether the decision was clear, unclear or problematic, and how the codebook should change. Use only direct quotes from the passage.

[paste passage]
```

### Check

Every quote appears word for word in the passage, no category overlaps with another, and a second person coding the same passage with the codebook reaches mostly the same decisions.

## Technology

Paste categories and a sample passage into your AI assistant and keep the codebook in Word. Anchor examples come from your own material, which you code in QDA software such as MAXQDA or NVivo; both tools can report intercoder agreement.

## Levels

### Chat

Run the starter prompt with the three PDFs attached. Then, in the same chat, paste your neighbour's coding of the Zachariah abstract and ask for Cohen's kappa, percentage agreement and a list of every disagreement.

### Project / Notebook

Add the Christidis papers (B2, C3), the Zachariah paper (C4) and your codebook as a Word file you update after each round. Ask for passages that test a borderline rule. For your own study, use only approved, anonymised material. Codebook versions, anchors and disagreement notes build up in one place; you decide every rule.

### Custom assistant

Create a configured assistant, for example "Codebook coder" (e.g. a Copilot agent, a ChatGPT project, a Gemini Gem or a Claude project). Add the final codebook as a knowledge file (if your tool does not support knowledge files, attach it in the chat). In the standing instructions: code sentence by sentence, give category, exact quote and "clear, unclear or problematic", use "none of these" when nothing fits, and never invent an anchor or quote. Starter prompt: "Code this passage with the codebook and flag every borderline decision." Reusable for each new batch – only approved, anonymised material goes in, and a human checks every coding.
