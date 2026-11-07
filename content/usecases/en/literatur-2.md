---
id: literatur-2
phase: literatur
order: 2
title: AI-assisted screening
risk: 3
mode: Delegate
potential: 3
capabilities: analyse; agentisch
routes: files; chat; external
tools: ASReview; Rayyan; Covidence
repos: ars-screener
data: AB
practice_data: AB
---

Prioritise results by relevance and get include / exclude / unclear suggestions with the deciding criterion, at title-and-abstract and full-text stage; use AI as a second screener and measure agreement (e.g. Cohen’s kappa) – you make the final call.

## Problem

Screening hundreds of titles and abstracts is tedious and a second human screener is hard to find – yet a single tired reader drifts from the criteria and misses eligible records.

## Result

An AI second opinion per record with the deciding criterion and a quote, plus an agreement statistic (Cohen's kappa) that shows how far to trust it – the final decision stays yours.

## Steps

1. Write testable criteria and pilot them on a few records
2. Screen ten abstracts yourself before asking your AI assistant
3. Require decision, deciding criterion and quote per record
4. Compute Cohen's kappa against your own decisions
5. Resolve every disagreement yourself and refine the criteria

## Concepts

### Dual independent screening

Two reviewers screen each record independently and resolve disagreements by discussion or a third reviewer – the standard in systematic reviews. An AI screener can act as a second opinion, not as a replacement for a validated process.

### Cohen's kappa

Agreement between two raters corrected for chance: κ = (pₒ − pₑ) / (1 − pₑ). By the Landis and Koch (1977) convention, 0.41–0.60 is moderate, 0.61–0.80 substantial, above 0.80 almost perfect. Unstable with few records.

### Sensitivity first at title and abstract

Wrongly excluding an eligible study costs more than including an ineligible one, which full-text screening still catches. Treat 'unsure' as include, and count the AI's false exclusions separately from its false inclusions.

### Active learning and stopping rules

Tools such as ASReview rank unscreened records by predicted relevance learned from your decisions, so relevant ones come first. You stop by a pre-specified rule, for example a run of irrelevant records, and report it.

## References

- Cohen, J. (1960). A coefficient of agreement for nominal scales. Educational and Psychological Measurement, 20(1), 37–46. doi:10.1177/001316446002000104
- Landis, J. R., & Koch, G. G. (1977). The measurement of observer agreement for categorical data. Biometrics, 33(1), 159–174. doi:10.2307/2529310

## Practice exercise

### Task

Screen eight practice records on title and abstract against given criteria – first yourself, then with your AI assistant – and compute kappa. You learn where the assistant is strict or lenient on borderline records and whether its quotes are really in the abstracts.

### Prompt

```text
I am screening records for a review on the attribution of extreme weather to human influence. Inclusion: peer-reviewed primary studies that estimate how human influence changed the likelihood or intensity of a type of extreme event. Exclusion: dataset descriptions; assessment or indicator updates; trend studies without attribution; preprints. The attached text file holds the citation, title and abstract of 12 papers. Screen only these eight records: A1, A3, B2, B3, C1, C2, C4 and C6. Judge each only from its citation, title and abstract. For each, give a table row: record ID, decision (include, exclude or unsure), the criterion that decides it, and a short quote from the abstract that supports the decision. Use 'unsure' when the abstract does not give enough information; do not guess. I will make the final decision.
```

### Check

Likely: exclude Morice et al. (dataset), Forster et al. (indicator update), Perkins-Kirkpatrick and Lewis (trend study without attribution) and Shi et al. (preprint); include Christidis et al. (2020) and Zachariah et al. Vautard et al. and Myhre et al. are borderline – compare reasoning, not only labels. Find each quote in the file with Ctrl+F.

## Own material

### Bring

Your inclusion and exclusion criteria and 10 titles with abstracts from a public search, which you screen yourself first.

### Steps

1. Screen the 10 abstracts yourself and note your decisions.
2. Paste your criteria and the 10 numbered abstracts into your AI assistant.
3. Ask for include, exclude or unsure per abstract, with a supporting quote.
4. Compare its decisions with yours, count the agreements (or compute Cohen's kappa) and discuss each disagreement.

### Prompt

```text
I am screening records for a literature review on [topic]. Inclusion criteria: [criteria]. Exclusion criteria: [criteria]. Below are 10 numbered titles with abstracts. For each, give a table row: number, decision (include, exclude or unsure), the criterion that decides it, and a short quote from the abstract that supports the decision. Use 'unsure' when the abstract does not give enough information; do not guess. I will make the final decision.

[paste numbered titles and abstracts]
```

### Check

Count how many of the 10 decisions match yours and read each quoted passage to confirm it is really in the abstract and supports the decision.

### Limit

The assistant cannot rank thousands of records with active learning; this tests criteria-based screening of a small batch only.

## Technology

Attach or paste criteria and numbered abstracts into your AI assistant for a pilot; for practice, attach the abstracts file. For a full review, use ASReview, Rayyan or Covidence, which log decisions; the sr-screener skill runs criterion-based screening in coding assistants such as GitHub Copilot.

## Levels

### Chat

Screen the eight records yourself first, then attach the abstracts file (AB) and run the starter prompt. In the same chat, paste your own decisions and ask the assistant to write and run Python that computes Cohen's kappa – if it cannot run code, run the script yourself – and to list each disagreement with both reasons.

### Project / Notebook

Add your protocol with the eligibility criteria, the record batch (practice: AB; if your tool does not accept a CSV export, save it as .xlsx first) and a page with your own decisions. Ask for include, exclude or unsure per record with the deciding criterion and a quote. Only approved, non-sensitive records go in, and you check every decision.

### Custom assistant

Call it 'Second screener'. Instructions: your criteria word for word, one row per record with decision, deciding criterion and a quote from the abstract, 'unsure' rather than guessing, and 'the human makes the final call'. Knowledge: the protocol. Switch on code execution / data analysis if your tool offers it, to compute kappa. Starter prompt: 'Screen this batch.' Only approved, non-sensitive records go in; you check every decision.

### Automation / own code

A workflow in a low-code platform (e.g. Power Automate or n8n) can pass each record of a large export through the assistant and write decision, criterion and quote back to a shared sheet or your screening platform – batch work an assistant in chat cannot do. On GitHub: a script sends each record to your institution's approved AI API and logs decision, criterion and quote in a CSV – only with approved, non-sensitive records. Check data protection and approval with your university first.
