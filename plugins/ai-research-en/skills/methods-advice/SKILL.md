---
name: methods-advice
description: "Compare design alternatives with their pros and cons, plan experiments (conditions, variables, controls) – including designs that need fewer runs, such as factorial or response-surface designs – and work systematically through threats to validity. Use when the user works on: Methods advice."
---

# Methods advice

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/design-0

## Goal

Compare design alternatives with their pros and cons, plan experiments (conditions, variables, controls) – including designs that need fewer runs, such as factorial or response-surface designs – and work systematically through threats to validity.

A comparison of three designs and a list of threats, sorted by validity type (statistical conclusion, internal, construct, external), each with a mitigation specific to your study – and, for experiments, a design that needs fewer runs. A better-justified methods chapter.

## When to use

Designs often follow the first idea or your field's habit; alternative designs and threats to validity or trustworthiness surface late – in a viva or a reviewer's report.

## Workflow with the user

Guide the user through these steps. Where a step says “ask the assistant”, that is you.

1. Paste your research question and planned design.
2. Ask for a comparison of three design alternatives in a table.
3. Ask for the main threats to validity of your preferred design, with mitigations – and, for an experiment, a plan of conditions, variables and controls that needs as few runs as possible.
4. Compare the threats with what your methods textbook or supervisor would name.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.

## Typical request

```text
I am a postgraduate researcher in [discipline]. My research question is: [question]. My planned design is: [design]. Compare it with two realistic alternatives in a table: design, what it can answer, main strengths, main weaknesses, practical demands (time, access, data). Then, for my planned design, list the main threats to validity (or, for qualitative work, to trustworthiness), each with a concrete way to reduce it. If my design is an experiment, add a short plan: conditions, independent and dependent variables, controls and randomisation, and suggest a design of experiments (for example a fractional factorial or response-surface design) that gives the information I need with fewer runs, stating which effects it cannot separate. Be specific to my study rather than generic. Keep it under 450 words.
```

## Quality check

The threats named include those you already know about from your methods training, and each one is specific to your study rather than a textbook list. For a reduced experimental design, the effects it cannot separate are named and you can live with them.

## Limits

- Risk: Your own unpublished drafts, reviews or third-party content.

## Key concepts

- **Validity typology (Shadish, Cook & Campbell)** – Four types: statistical conclusion validity (is the covariation real?), internal validity (is it causal?), construct validity (do measures and treatments represent the concepts?) and external validity (does it generalise?). Use it to sort threats systematically in quantitative designs.
- **Threats to internal validity** – The classic list: history, maturation, testing, instrumentation, regression to the mean, selection, attrition and their interactions. Randomisation, control groups and pre-measures each remove different threats; say which threat each design choice addresses.
- **Experimental, quasi-experimental and observational designs** – Experiments manipulate an independent variable and randomise allocation; quasi-experiments manipulate or exploit change without randomisation (e.g. interrupted time series, non-equivalent groups); observational designs only measure. Causal claims need increasingly explicit handling of confounding along this order.
- **Trustworthiness (Lincoln & Guba)** – Qualitative counterpart to validity: credibility (e.g. member checking, triangulation), transferability (thick description), dependability (audit trail) and confirmability (reflexivity, traceable decisions). Use these criteria rather than validity language when your design is interpretive.
- **Mixed-methods designs (Creswell & Plano Clark)** – Core designs: convergent (both strands in parallel, then merged), explanatory sequential (quantitative first, qualitative to explain) and exploratory sequential (qualitative first, then quantitative to test or build an instrument). Name the point of integration explicitly.

## Key references

- Shadish, W. R., Cook, T. D., & Campbell, D. T. (2002). Experimental and quasi-experimental designs for generalized causal inference. Houghton Mifflin.
- Lincoln, Y. S., & Guba, E. G. (1985). Naturalistic inquiry. Sage.
- Creswell, J. W., & Plano Clark, V. L. (2018). Designing and conducting mixed methods research (3rd ed.). Sage.

## Tools that help

Statistik GPT
