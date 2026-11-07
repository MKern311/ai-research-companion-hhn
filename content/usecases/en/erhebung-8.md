---
id: erhebung-8
phase: erhebung
order: 8
title: LLMs as a data source
risk: 3
mode: Assist
potential: 2
excursus: true
capabilities: generierung; analyse
routes: chat; external
data: B2
practice_ref: B2
---

Use the answers of language models themselves as research data – e.g. simulated interviews, “silicon samples” or audits of what models say – to study the models, not as a substitute for human participants.

## Problem

Language models are tempting as cheap, instant 'respondents', but their answers do not represent real people; used naively, they produce data that look plausible yet are invalid for claims about humans.

## Result

A defensible design for research where model outputs are the object of study – audits of accuracy, bias or consistency – with documented prompts, versions and variability, and clear limits on what can be concluded.

## Steps

1. Frame the question about the model, not about a human population
2. Fix the prompt; record model, date and time of every run
3. Sample repeated answers and code them against a reference
4. Report variability and limitations; disclose the method
5. Use real participants for any claim about people

## Concepts

### Silicon sampling and algorithmic fidelity

Conditioning a model on persona descriptions to simulate survey answers. Fidelity to human response patterns varies by topic and group and must be tested against real data, not assumed (Argyle et al., 2023).

### Limits of synthetic respondents

Model answers can be unstable across prompts and versions, show too little variance and flatten or misportray identity groups; they cannot replace human samples for inference (Bisbee et al., 2024; Wang et al., 2025).

### Model audits

Systematic, repeated querying of one or more models with fixed prompts to measure accuracy, bias or consistency – here the model is the unit of analysis.

### Reproducibility and disclosure

Record model name and version, date, full prompts, settings such as temperature and the number of runs; publish prompts and raw outputs so others can repeat the study.

## References

- Argyle, L. P., Busby, E. C., Fulda, N., Gubler, J. R., Rytting, C., & Wingate, D. (2023). Out of one, many: Using language models to simulate human samples. Political Analysis, 31(3), 337–351. doi:10.1017/pan.2023.2
- Bisbee, J., Clinton, J. D., Dorff, C., Kenkel, B., & Larson, J. M. (2024). Synthetic replacements for human survey data? The perils of large language models. Political Analysis, 32(4), 401–416. doi:10.1017/pan.2024.5
- Wang, A., Morgenstern, J., & Dickerson, J. P. (2025). Large language models that replace human participants can harmfully misportray and flatten identity groups. Nature Machine Intelligence, 7(3), 400–411. doi:10.1038/s42256-025-00986-z

## Practice exercise

### Task

Run a mini audit: ask your AI assistant the same question about UK heat attribution in five fresh chats and code the answers against Christidis et al. (2020), which you keep open but do not attach. You see how consistent and accurate model answers are – and why they are data about the model, not about people.

### Prompt

```text
In about 120 words, and with sources: how has human-caused climate change changed the likelihood of days above 40 °C in the UK, according to research published before the July 2022 record? [Run this exact prompt in five new chats and save every answer with the time.]
```

### Check

Compare each answer with Christidis et al. (2020): summers with at least one day above 40 °C somewhere in the UK have a return time of 100–300 years in the present climate (search for 'return time of 100-300 years'), against 100 to 1000s of years in a natural climate, falling by 2100 to about 15 years under RCP4.5 and 3.5 years under RCP8.5. Count correct, partly correct and wrong answers and invented sources.

## Own material

### Bring

A question about what language models say or how they respond – not a question about real people – or, for the practice version, the UK heat attribution paper B2 to check the answers against (do not attach it).

### Steps

1. Formulate a research question about the model, not about people.
2. Fix the prompt, then collect several answers in fresh chats and note date and model.
3. Code the answers against a reference (the source paper) or a codebook.
4. Report variability and limits – never generalise to a human population.

### Prompt

```text
I am studying how a language model answers a question in [field] – the model's answers are my data, not a stand-in for people. Answer the following question as you normally would, in about 120 words, and cite your sources: [question]. [Repeat this exact prompt in five new chats, on the same day, and save each answer with date, time and the model name shown.]
```

### Check

Code each saved answer against your reference: correct, partly correct, wrong, no source. Variability across the five runs is itself a finding; do not average answers into a 'typical respondent'.

### Limit

Model answers change with prompt wording, model version and time; they are not valid data about real people and may misrepresent groups. In an ordinary chat you cannot fix the model version or settings – serious studies use documented model APIs and record all parameters.

## Technology

An ordinary chat is enough for a first audit with repeated fresh chats, but it does not let you fix the model version or settings. Proper studies use documented model APIs (from your university or a cloud platform) with logged prompts, parameters and raw outputs.

## Levels

### Chat

Run the fixed prompt in five new chats and save every answer with the time. In one of them, follow up with 'Are you sure? Please check your sources.' and record whether the answer changes – a second measure of stability.

### Project / Notebook

Add the saved answers as Word or text files with date, time and model, your codebook and the reference paper (B2 for the practice version). Ask for a table that codes each answer against the reference and lists every cited source. Depending on your tool, the project answers only from these files, so new model output does not mix in; you check every code.

### Custom assistant

Do not let an agent produce the answers – its instructions would change what you study. Build a coding agent, 'Audit coder', instead. Instructions: your codebook (correct, partly correct, wrong, no or invented source) and a fixed table. Knowledge: the reference paper (add it as a knowledge file if your tool allows it; otherwise attach it in the chat with the assistant). Starter prompt: 'Code these saved answers against the reference'. Only model answers, never personal data, go in, and you check every code.

### Automation / own code

A scheduled workflow in a low-code platform (e.g. Power Automate, n8n) can send the fixed prompt to the model you audit at set times and write each answer with date, time and model to a table in your cloud storage – a time series a custom assistant cannot collect on its own. On GitHub: a scheduled GitHub Actions workflow sends the fixed prompt to the API of the model you audit and appends each answer with date, time and model version to a CSV. Check data protection and approval with your university first.
