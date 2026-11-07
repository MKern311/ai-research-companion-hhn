---
id: design-0
phase: design
order: 0
title: Methods advice
risk: 2
mode: Co-create
potential: 2
capabilities: generierung; synthese
routes: chat; files
tools: Statistik GPT
data: D3; D5; A3
practice_data: D3; D5
practice_ref: A3
---

Compare design alternatives with their pros and cons, plan experiments (conditions, variables, controls) – including designs that need fewer runs, such as factorial or response-surface designs – and work systematically through threats to validity.

## Problem

Designs often follow the first idea or your field's habit; alternative designs and threats to validity or trustworthiness surface late – in a viva or a reviewer's report.

## Result

A comparison of three designs and a list of threats, sorted by validity type (statistical conclusion, internal, construct, external), each with a mitigation specific to your study – and, for experiments, a design that needs fewer runs. A better-justified methods chapter.

## Steps

1. State your question, planned design and unit of analysis
2. Ask for two realistic alternative designs in a comparison table
3. Ask for threats sorted by the four validity types
4. For an experiment, ask for a design with fewer runs
5. For interpretive designs, ask for trustworthiness criteria instead
6. Check the threats against your methods textbook or supervisor

## Concepts

### Validity typology (Shadish, Cook & Campbell)

Four types: statistical conclusion validity (is the covariation real?), internal validity (is it causal?), construct validity (do measures and treatments represent the concepts?) and external validity (does it generalise?). Use it to sort threats systematically in quantitative designs.

### Threats to internal validity

The classic list: history, maturation, testing, instrumentation, regression to the mean, selection, attrition and their interactions. Randomisation, control groups and pre-measures each remove different threats; say which threat each design choice addresses.

### Experimental, quasi-experimental and observational designs

Experiments manipulate an independent variable and randomise allocation; quasi-experiments manipulate or exploit change without randomisation (e.g. interrupted time series, non-equivalent groups); observational designs only measure. Causal claims need increasingly explicit handling of confounding along this order.

### Trustworthiness (Lincoln & Guba)

Qualitative counterpart to validity: credibility (e.g. member checking, triangulation), transferability (thick description), dependability (audit trail) and confirmability (reflexivity, traceable decisions). Use these criteria rather than validity language when your design is interpretive.

### Mixed-methods designs (Creswell & Plano Clark)

Core designs: convergent (both strands in parallel, then merged), explanatory sequential (quantitative first, qualitative to explain) and exploratory sequential (qualitative first, then quantitative to test or build an instrument). Name the point of integration explicitly.

## References

- Shadish, W. R., Cook, T. D., & Campbell, D. T. (2002). Experimental and quasi-experimental designs for generalized causal inference. Houghton Mifflin.
- Lincoln, Y. S., & Guba, E. G. (1985). Naturalistic inquiry. Sage.
- Creswell, J. W., & Plano Clark, V. L. (2018). Designing and conducting mixed methods research (3rd ed.). Sage.

## Practice exercise

### Task

You propose a deliberately simple design – regressing annual global temperature on CO₂ – and ask your AI assistant for alternatives and validity threats, without running the regression. You learn whether it spots spurious correlation between trending series and omitted forcings, or returns a generic textbook list.

### Prompt

```text
I am testing a research design on climate data. Research question: how much of the global warming since 1959 is associated with rising atmospheric CO₂? Planned design: an ordinary least squares regression of annual mean global temperature anomaly (the attached HadCRUT5 monthly CSV) on annual mean CO₂ concentration (the attached NOAA Mauna Loa CO₂ CSV), 1959–2024. Compare this design with two realistic alternatives in a table: design, what it can answer, main strengths, main weaknesses, data needed. Then list the main threats to validity of my planned design, sorted into statistical conclusion, internal, construct and external validity, each with a concrete mitigation. Refer to features of the attached files where relevant, such as baselines, measurement sites and missing-value codes. Do not run the regression; I want a critique of the design, not results. Be specific to this study rather than generic, and keep it under 450 words.
```

### Check

Keep Forster et al. (2025) open, but do not attach it: its Section 8, 'Human contribution to surface temperature change', combines three attribution methods using all forcings, not CO₂ alone. Did the assistant name omitted forcings such as aerosols, the risk of spurious correlation between two trending series, autocorrelation, and the Maunakea measurements in the CO₂ file (December 2022 to July 2023)?

## Own material

### Bring

Your research question and your planned design in two or three sentences.

### Steps

1. Paste your research question and planned design.
2. Ask for a comparison of three design alternatives in a table.
3. Ask for the main threats to validity of your preferred design, with mitigations – and, for an experiment, a plan of conditions, variables and controls that needs as few runs as possible.
4. Compare the threats with what your methods textbook or supervisor would name.

### Prompt

```text
I am a postgraduate researcher in [discipline]. My research question is: [question]. My planned design is: [design]. Compare it with two realistic alternatives in a table: design, what it can answer, main strengths, main weaknesses, practical demands (time, access, data). Then, for my planned design, list the main threats to validity (or, for qualitative work, to trustworthiness), each with a concrete way to reduce it. If my design is an experiment, add a short plan: conditions, independent and dependent variables, controls and randomisation, and suggest a design of experiments (for example a fractional factorial or response-surface design) that gives the information I need with fewer runs, stating which effects it cannot separate. Be specific to my study rather than generic. Keep it under 450 words.
```

### Check

The threats named include those you already know about from your methods training, and each one is specific to your study rather than a textbook list. For a reduced experimental design, the effects it cannot separate are named and you can live with them.

## Technology

Paste your question and design into your AI assistant (e.g. Copilot, ChatGPT, Claude or Gemini); no data are needed. Alternatively upload a non-sensitive draft of your methods section. In the practice exercise, attach the HadCRUT5 and Mauna Loa CO₂ files so the assistant can refer to their properties.

## Levels

### Chat

Run the starter prompt with your question and design, or with the HadCRUT5 and Mauna Loa CO₂ files. In the same chat, ask which single change to the design would remove the most serious threat, and what it would cost in data or time.

### Project / Notebook

Add your proposal draft, two or three key methods papers from your field and your supervisor's comments – for the practice version, A3 plus D3 and D5 (save the CSVs as .xlsx first). Ask which threats the methods papers raise that your design does not address. The critique stays next to its sources, so you can come back after every revision.

### Custom assistant

Call it 'Design critic'. Instructions: compare the design with two realistic alternatives in a fixed table, sort threats by the four validity types (or trustworthiness criteria for interpretive work), give one study-specific mitigation each, never run analyses or invent sources. Knowledge: your department's methods guidance, if you may share it. Starter prompt: 'Critique this design: [question, design, unit of analysis]'. Reusable for every new study or chapter revision.
