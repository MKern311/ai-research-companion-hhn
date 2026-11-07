---
name: pseudonymising-transcripts
description: "Detect and replace names, places and other identifiers before analysis – in an approved environment, always checked by hand. Use when the user works on: Pseudonymising transcripts."
---

# Pseudonymising transcripts

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/erhebung-5

## Goal

Detect and replace names, places and other identifiers before analysis – in an approved environment, always checked by hand.

A pseudonymised draft, a replacement log and the share of planted direct and indirect identifiers it missed – evidence of what your manual check must still catch before analysis.

## When to use

Pseudonymising transcripts by hand is tedious, and indirect identifiers – a rare job title, a local event – are easy to miss, so combinations can still re-identify participants.

## Workflow with the user

Guide the user through these steps. Where a step says “ask the assistant”, that is you.

1. Write, or ask the assistant to invent, a 200-word excerpt with fictional names, places and dates.
2. Note every identifier you planted, including indirect ones such as a rare job title.
3. Paste the starter prompt with the excerpt.
4. Compare the output with your list and mark every identifier missed or not flagged.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.

## Typical request

```text
Below is an invented interview excerpt. Pseudonymise it for qualitative analysis. Replace personal names with [P1], [P2]; places with [CITY] or [REGION]; organisations with [ORG1], [ORG2]; exact dates with [DATE]; and keep everything else word for word. Also flag, without changing them, indirect identifiers that could reveal someone in combination, such as rare job titles or distinctive events. Return 1) the pseudonymised text and 2) a table: original term, replacement, type. Excerpt: [paste invented text]
```

## Quality check

Search the output for each identifier you planted; any that remain or go unflagged show why real transcripts need an approved environment and a full manual check.

## Limits

- This tests the method on an invented excerpt only; never paste real transcripts or participants' data into a chat with an AI assistant.
- Risk: Personal or sensitive data, or decisions that feed directly into your results.

## Key concepts

- **Pseudonymisation versus anonymisation (UK GDPR)** – Pseudonymised data replace identifiers but can be re-linked with a separately kept key, so they remain personal data. Anonymous data can no longer reasonably identify anyone. Most qualitative transcripts are pseudonymised, not anonymous.
- **Direct and indirect identifiers** – Direct identifiers name a person (name, e-mail, address). Indirect or quasi-identifiers – job title, employer, rare event, age, place – identify in combination. Sweeney (2002) formalised protection as k-anonymity: every combination should match at least k people.
- **Recall and precision of de-identification** – Recall is the share of real identifiers the tool caught; precision is the share of its replacements that were real identifiers. For confidentiality recall matters most, since one miss can re-identify, so measure it on planted identifiers.
- **Consistent replacement and analytic integrity** – Use one stable pseudonym per person and category labels such as [CITY] or [ORG1], and store the replacement log separately and securely. Over-redaction can destroy analytic meaning; record what you changed and why.

## Key references

- Sweeney, L. (2002). k-anonymity: A model for protecting privacy. International Journal of Uncertainty, Fuzziness and Knowledge-Based Systems, 10(5), 557–570. https://doi.org/10.1142/S0218488502001648
- Saunders, B., Kitzinger, J., & Kitzinger, C. (2015). Anonymising interview data: Challenges and compromise in practice. Qualitative Research, 15(5), 616–632. https://doi.org/10.1177/1468794114550439
