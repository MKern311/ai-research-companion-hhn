---
name: ai-assisted-screening
description: "Prioritise results by relevance and get include / exclude / unclear suggestions with the deciding criterion, at title-and-abstract and full-text stage; use AI as a second screener and measure agreement (e.g. Cohen’s kappa) – you make the final call. Use when the user works on: AI-assisted screening."
---

# AI-assisted screening

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/literatur-2

## Goal

Prioritise results by relevance and get include / exclude / unclear suggestions with the deciding criterion, at title-and-abstract and full-text stage; use AI as a second screener and measure agreement (e.g. Cohen’s kappa) – you make the final call.

An AI second opinion per record with the deciding criterion and a quote, plus an agreement statistic (Cohen's kappa) that shows how far to trust it – the final decision stays yours.

## When to use

Screening hundreds of titles and abstracts is tedious and a second human screener is hard to find – yet a single tired reader drifts from the criteria and misses eligible records.

## Workflow with the user

Guide the user through these steps. Where a step says “ask the assistant”, that is you.

1. Screen the 10 abstracts yourself and note your decisions.
2. Paste your criteria and the 10 numbered abstracts into your AI assistant.
3. Ask for include, exclude or unsure per abstract, with a supporting quote.
4. Compare its decisions with yours, count the agreements (or compute Cohen's kappa) and discuss each disagreement.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.

## Typical request

```text
I am screening records for a literature review on [topic]. Inclusion criteria: [criteria]. Exclusion criteria: [criteria]. Below are 10 numbered titles with abstracts. For each, give a table row: number, decision (include, exclude or unsure), the criterion that decides it, and a short quote from the abstract that supports the decision. Use 'unsure' when the abstract does not give enough information; do not guess. I will make the final decision.

[paste numbered titles and abstracts]
```

## Quality check

Count how many of the 10 decisions match yours and read each quoted passage to confirm it is really in the abstract and supports the decision.

## Limits

- The assistant cannot rank thousands of records with active learning; this tests criteria-based screening of a small batch only.
- Risk: Personal or sensitive data, or decisions that feed directly into your results.

## Key concepts

- **Dual independent screening** – Two reviewers screen each record independently and resolve disagreements by discussion or a third reviewer – the standard in systematic reviews. An AI screener can act as a second opinion, not as a replacement for a validated process.
- **Cohen's kappa** – Agreement between two raters corrected for chance: κ = (pₒ − pₑ) / (1 − pₑ). By the Landis and Koch (1977) convention, 0.41–0.60 is moderate, 0.61–0.80 substantial, above 0.80 almost perfect. Unstable with few records.
- **Sensitivity first at title and abstract** – Wrongly excluding an eligible study costs more than including an ineligible one, which full-text screening still catches. Treat 'unsure' as include, and count the AI's false exclusions separately from its false inclusions.
- **Active learning and stopping rules** – Tools such as ASReview rank unscreened records by predicted relevance learned from your decisions, so relevant ones come first. You stop by a pre-specified rule, for example a run of irrelevant records, and report it.

## Key references

- Cohen, J. (1960). A coefficient of agreement for nominal scales. Educational and Psychological Measurement, 20(1), 37–46. https://doi.org/10.1177/001316446002000104
- Landis, J. R., & Koch, G. G. (1977). The measurement of observer agreement for categorical data. Biometrics, 33(1), 159–174. https://doi.org/10.2307/2529310

## Tools that help

ASReview · Rayyan · Covidence
