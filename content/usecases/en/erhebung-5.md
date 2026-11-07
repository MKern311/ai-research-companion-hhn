---
id: erhebung-5
phase: erhebung
order: 5
title: Pseudonymising transcripts
risk: 3
mode: Assist
potential: 2
capabilities: analyse
routes: chat
---

Detect and replace names, places and other identifiers before analysis – in an approved environment, always checked by hand.

## Problem

Pseudonymising transcripts by hand is tedious, and indirect identifiers – a rare job title, a local event – are easy to miss, so combinations can still re-identify participants.

## Result

A pseudonymised draft, a replacement log and the share of planted direct and indirect identifiers it missed – evidence of what your manual check must still catch before analysis.

## Steps

1. Write an invented excerpt with planted direct and indirect identifiers
2. List every planted identifier by type
3. Ask for replacements, flags and a replacement log
4. Compute recall: the share of planted identifiers caught
5. Keep the full manual check and use only approved environments

## Concepts

### Pseudonymisation versus anonymisation (UK GDPR)

Pseudonymised data replace identifiers but can be re-linked with a separately kept key, so they remain personal data. Anonymous data can no longer reasonably identify anyone. Most qualitative transcripts are pseudonymised, not anonymous.

### Direct and indirect identifiers

Direct identifiers name a person (name, e-mail, address). Indirect or quasi-identifiers – job title, employer, rare event, age, place – identify in combination. Sweeney (2002) formalised protection as k-anonymity: every combination should match at least k people.

### Recall and precision of de-identification

Recall is the share of real identifiers the tool caught; precision is the share of its replacements that were real identifiers. For confidentiality recall matters most, since one miss can re-identify, so measure it on planted identifiers.

### Consistent replacement and analytic integrity

Use one stable pseudonym per person and category labels such as [CITY] or [ORG1], and store the replacement log separately and securely. Over-redaction can destroy analytic meaning; record what you changed and why.

## References

- Sweeney, L. (2002). k-anonymity: A model for protecting privacy. International Journal of Uncertainty, Fuzziness and Knowledge-Based Systems, 10(5), 557–570. doi:10.1142/S0218488502001648
- Saunders, B., Kitzinger, J., & Kitzinger, C. (2015). Anonymising interview data: Challenges and compromise in practice. Qualitative Research, 15(5), 616–632. doi:10.1177/1468794114550439

## Own material

### Bring

Nothing real: an invented interview excerpt of about 200 words containing made-up names, places, employers and dates.

### Steps

1. Write, or ask the assistant to invent, a 200-word excerpt with fictional names, places and dates.
2. Note every identifier you planted, including indirect ones such as a rare job title.
3. Paste the starter prompt with the excerpt.
4. Compare the output with your list and mark every identifier missed or not flagged.

### Prompt

```text
Below is an invented interview excerpt. Pseudonymise it for qualitative analysis. Replace personal names with [P1], [P2]; places with [CITY] or [REGION]; organisations with [ORG1], [ORG2]; exact dates with [DATE]; and keep everything else word for word. Also flag, without changing them, indirect identifiers that could reveal someone in combination, such as rare job titles or distinctive events. Return 1) the pseudonymised text and 2) a table: original term, replacement, type. Excerpt: [paste invented text]
```

### Check

Search the output for each identifier you planted; any that remain or go unflagged show why real transcripts need an approved environment and a full manual check.

### Limit

This tests the method on an invented excerpt only; never paste real transcripts or participants' data into a chat with an AI assistant.

## Technology

Paste invented text into your AI assistant to test detection only. Real transcripts go only into an environment your institution has approved for personal data, every output is checked by hand, and the AI step is declared in your methods.

## Levels

### Chat

Run the starter prompt with your invented excerpt. In the same chat, paste your list of planted identifiers and ask which ones it missed or failed to flag, and why.

### Project / Notebook

Use invented excerpts only, with your pseudonymisation rules and a replacement log as Word documents. Ask whether replacements are consistent across excerpts and which identifier types slip through. Real transcripts belong in an approved environment; the notebook keeps your rules and test results while you refine the protocol you then apply and check by hand.

### Custom assistant

Call it 'Pseudonymisation tester'. Instructions: your replacement codes ([P1], [CITY], [ORG1], [DATE]), everything else word for word, indirect identifiers flagged but unchanged, always the text plus a replacement log. Use it only on invented or approved, de-identified test material, and a human checks every output. Starter prompt: 'Pseudonymise this excerpt and log the replacements'.
