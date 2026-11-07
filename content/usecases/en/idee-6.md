---
id: idee-6
phase: idee
order: 6
title: Theoretical framework & hypotheses
risk: 2
mode: Co-create
potential: 3
capabilities: generierung; synthese
routes: chat; files; external
tools: Consensus; Scholar GPT
repos: kd-hypothesis
data: A3; D3; D5
practice_data: A3; D3; D5
---

Compare candidate theories for your question, derive hypotheses or propositions with their reasoning, and describe the conceptual model in words.

## Problem

Choosing between theories and deriving hypotheses is often left implicit; reviewers then find leaps in reasoning, hypotheses without a theoretical mechanism, or a model that does not answer the question.

## Result

A comparison of candidate theories, falsifiable hypotheses or propositions with explicit reasoning, and a conceptual model with mediators and moderators – a draft you can defend once each step is checked.

## Steps

1. Name your question, two or three theories and key abstracts
2. Ask for a comparison table across the theories
3. Derive hypotheses or propositions, each with its mechanism
4. Describe the model: constructs, direction, mediators, moderators
5. Trace every reasoning step back to the original theory

## Concepts

### Building blocks of theory (Whetten)

A theory states what (constructs), how (relationships), why (the underlying mechanism) and who, where and when (boundary conditions). Use the four questions to check that each hypothesis has a mechanism and a stated scope.

### Propositions vs hypotheses (Bacharach)

Propositions state relationships between abstract constructs; hypotheses state them between measurable variables and must be falsifiable. Qualitative work often uses propositions or sensitising questions instead of hypotheses.

### Mediator and moderator

A mediator explains how or why X affects Y (X → M → Y); a moderator changes the strength or direction of the X–Y relationship (Baron & Kenny, 1986). Mediation is now usually tested with bootstrapped indirect effects.

### Theoretical vs conceptual framework

A theoretical framework rests on one or more established theories; a conceptual framework is your own model of constructs and relationships, drawn from theory and prior findings. Usage varies by field, so say which you present.

### Falsifiability (Popper)

A scientific hypothesis must state which observation would contradict it. Write each hypothesis so that a result could refute it, including the expected direction of the effect.

## References

- Whetten, D. A. (1989). What constitutes a theoretical contribution? Academy of Management Review, 14(4), 490–495. doi:10.5465/amr.1989.4308371
- Bacharach, S. B. (1989). Organizational theories: Some criteria for evaluation. Academy of Management Review, 14(4), 496–515. doi:10.5465/amr.1989.4308374
- Baron, R. M., & Kenny, D. A. (1986). The moderator–mediator variable distinction in social psychological research: Conceptual, strategic, and statistical considerations. Journal of Personality and Social Psychology, 51(6), 1173–1182. doi:10.1037/0022-3514.51.6.1173
- Popper, K. (2002). The logic of scientific discovery. Routledge. (Original work published 1959)

## Practice exercise

### Task

Derive hypotheses on the CO₂–temperature link, let your AI assistant test one with Python on the HadCRUT5 and Mauna Loa files, then critique the result against the indicators paper. You learn whether its models omit forcings and baselines the paper treats explicitly.

### Prompt

```text
I am a postgraduate researcher. My question: how much of the rise in global surface temperature since 1959 can be explained by rising atmospheric CO₂? Attached are the HadCRUT5 monthly CSV, the Mauna Loa CO₂ monthly CSV and the Forster et al. (2025) PDF. First, compare two explanatory models in a table – CO₂ alone versus total human and natural forcing – with core idea, key constructs, predictions and limitations. Second, derive three hypotheses, each with its reasoning and a supporting passage from the PDF. Third, using Python, compute annual means for complete years in both files, regress the temperature anomaly on the natural log of CO₂, and report the slope, the coefficient of determination (R²) and the pattern of the residuals. Fourth, say which forcings and which baseline differences the regression ignores. Do not invent studies.
```

### Check

HadCRUT5 anomalies are relative to 1961–1990, Forster et al. report warming relative to 1850–1900 – the assistant must not compare them directly. The abstract names reduced aerosol cooling as a driver; a CO₂-only model omits it. Regression should start in 1959.

## Own material

### Bring

Your research question, the two or three theories or models you are considering, and abstracts of three key studies.

### Steps

1. Paste your research question, candidate theories and the abstracts.
2. Ask for a comparison of the theories for your question.
3. Ask for hypotheses or propositions, each with its reasoning and source.
4. Check every reasoning step against the original theory.

### Prompt

```text
I am a postgraduate researcher in [discipline]. My research question is: [question]. I am considering these theories or models: [theories]. Compare them for my question in a table: core idea, key constructs, what each would predict or help explain in my case, typical methods, and limitations. Then derive three to five hypotheses (or, for qualitative work, propositions or sensitising questions), each with a short line of reasoning that names the theory and, where possible, one of the studies I provide. Finally, describe the conceptual model in words: constructs, expected relationships and their direction, and possible moderators or mediators. Do not invent studies; mark any link you are unsure about.

[paste abstracts]
```

### Check

Each hypothesis follows from the theory as its authors describe it, and every study cited is one you provided and says what the assistant claims.

### Limit

Building the theoretical argument is a core part of your own contribution; use the output to test your reasoning, not to replace it.

## Technology

Paste abstracts or upload PDFs to your AI assistant. For practice, upload the HadCRUT5 (D3) and CO₂ (D5) files, regress temperature on CO₂ and critique the assistant's hypotheses against the indicators paper (A3).

## Levels

### Chat

Attach HadCRUT5 (D3), Mauna Loa CO₂ (D5) and Forster et al. (A3) and run the starter prompt. In the same chat, ask which hypothesis the regression actually tests and what the different baselines (1961–1990 and 1850–1900) would change.

### Project / Notebook

Add the theory texts you are choosing between, the indicators paper (A3) and your hypothesis draft; if your tool does not accept the data files, save HadCRUT5 (D3) and Mauna Loa (D5) as .xlsx first. Depending on your tool, the workspace may not run Python – use it to check each hypothesis's reasoning against the sources, and keep the regression in chat or in a custom assistant with code execution.

### Custom assistant

Call it 'Theory and hypotheses'. Instructions: compare candidate theories in a table, derive hypotheses each with reasoning and a supporting passage, describe the model in words, flag baseline and omitted-variable issues, and never invent studies. Knowledge: your core theory papers. Switch on code execution / data analysis if your tool offers it, to test a hypothesis on data – attach the data file in the chat, not as knowledge. Starter prompt: 'Derive hypotheses from these theories and test one on this file.'
