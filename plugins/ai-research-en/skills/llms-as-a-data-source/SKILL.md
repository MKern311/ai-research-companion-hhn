---
name: llms-as-a-data-source
description: "Use the answers of language models themselves as research data – e.g. simulated interviews, “silicon samples” or audits of what models say – to study the models, not as a substitute for human participants. Use when the user works on: LLMs as a data source."
---

# LLMs as a data source

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/erhebung-8

## Goal

Use the answers of language models themselves as research data – e.g. simulated interviews, “silicon samples” or audits of what models say – to study the models, not as a substitute for human participants.

A defensible design for research where model outputs are the object of study – audits of accuracy, bias or consistency – with documented prompts, versions and variability, and clear limits on what can be concluded.

## When to use

Language models are tempting as cheap, instant 'respondents', but their answers do not represent real people; used naively, they produce data that look plausible yet are invalid for claims about humans.

## Procedure

1. Formulate a research question about the model, not about people.
2. Fix the prompt, then collect several answers in fresh chats and note date and model.
3. Code the answers against a reference (the source paper) or a codebook.
4. Report variability and limits – never generalise to a human population.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.
- Do not let an agent produce the answers – its instructions would change what you study. Build a coding agent, 'Audit coder', instead. Instructions: your codebook (correct, partly correct, wrong, no or invented source) and a fixed table. Knowledge: the reference paper (add it as a knowledge file if your tool allows it; otherwise attach it in the chat with the assistant). Starter prompt: 'Code these saved answers against the reference'. Only model answers, never personal data, go in, and you check every code.

## Starter prompt

```text
I am studying how a language model answers a question in [field] – the model's answers are my data, not a stand-in for people. Answer the following question as you normally would, in about 120 words, and cite your sources: [question]. [Repeat this exact prompt in five new chats, on the same day, and save each answer with date, time and the model name shown.]
```

## Quality check

Code each saved answer against your reference: correct, partly correct, wrong, no source. Variability across the five runs is itself a finding; do not average answers into a 'typical respondent'.

## Limits

- Model answers change with prompt wording, model version and time; they are not valid data about real people and may misrepresent groups. In an ordinary chat you cannot fix the model version or settings – serious studies use documented model APIs and record all parameters.
- Risk: Personal or sensitive data, or decisions that feed directly into your results.

## Key concepts

- **Silicon sampling and algorithmic fidelity** – Conditioning a model on persona descriptions to simulate survey answers. Fidelity to human response patterns varies by topic and group and must be tested against real data, not assumed (Argyle et al., 2023).
- **Limits of synthetic respondents** – Model answers can be unstable across prompts and versions, show too little variance and flatten or misportray identity groups; they cannot replace human samples for inference (Bisbee et al., 2024; Wang et al., 2025).
- **Model audits** – Systematic, repeated querying of one or more models with fixed prompts to measure accuracy, bias or consistency – here the model is the unit of analysis.
- **Reproducibility and disclosure** – Record model name and version, date, full prompts, settings such as temperature and the number of runs; publish prompts and raw outputs so others can repeat the study.

## Key references

- Argyle, L. P., Busby, E. C., Fulda, N., Gubler, J. R., Rytting, C., & Wingate, D. (2023). Out of one, many: Using language models to simulate human samples. Political Analysis, 31(3), 337–351. https://doi.org/10.1017/pan.2023.2
- Bisbee, J., Clinton, J. D., Dorff, C., Kenkel, B., & Larson, J. M. (2024). Synthetic replacements for human survey data? The perils of large language models. Political Analysis, 32(4), 401–416. https://doi.org/10.1017/pan.2024.5
- Wang, A., Morgenstern, J., & Dickerson, J. P. (2025). Large language models that replace human participants can harmfully misportray and flatten identity groups. Nature Machine Intelligence, 7(3), 400–411. https://doi.org/10.1038/s42256-025-00986-z
