---
id: idee-4
phase: idee
order: 4
title: Interdisciplinary bridges
risk: 1
mode: Co-create
potential: 2
capabilities: generierung; recherche
routes: chat; files; external
tools: Semantic Scholar; Open Knowledge Maps; Perplexity
data: D2; C6
practice_data: D2
practice_ref: C6
---

Suggest concepts and methods from neighbouring disciplines that transfer to your research question.

## Problem

Useful concepts and methods often already exist in a neighbouring discipline, but you rarely read its journals and do not know the vocabulary to search for them.

## Result

A table of transferable concepts or methods, what each needs adapting and where the transfer could break – plus the search terms that field uses, so you can read further.

## Steps

1. Give your AI assistant your question and home discipline
2. Ask for four concepts or methods from neighbouring fields
3. Ask what must change and where the transfer breaks
4. Check one concept's meaning in that field's own literature

## Concepts

### Concept stretching (Sartori)

Applying a concept to new cases by loosening its definition until it loses meaning. When you transfer a concept, check that its defining attributes still hold in your setting rather than keeping only the label.

### Boundary objects

Concepts or tools flexible enough to be used by several communities yet robust enough to keep a shared identity (Star & Griesemer, 1989). Good transfer candidates – and places where disciplines may mean different things by one word.

### Literature-based discovery (ABC model)

Swanson's approach links two literatures that do not cite each other through a shared intermediate concept B. A systematic way to find transferable ideas; every candidate still needs checking in the source field.

### Multi-, inter- and transdisciplinarity

Multidisciplinary work places disciplines side by side; interdisciplinary work integrates their concepts and methods; transdisciplinary work also involves non-academic partners. Say which level your transfer aims at.

## References

- Sartori, G. (1970). Concept misformation in comparative politics. American Political Science Review, 64(4), 1033–1053. doi:10.2307/1958356
- Star, S. L., & Griesemer, J. R. (1989). Institutional ecology, 'translations' and boundary objects: Amateurs and professionals in Berkeley's Museum of Vertebrate Zoology, 1907–39. Social Studies of Science, 19(3), 387–420. doi:10.1177/030631289019003001
- Swanson, D. R. (1986). Undiscovered public knowledge. The Library Quarterly, 56(2), 103–118. doi:10.1086/601720

## Practice exercise

### Task

Pose a climate question and ask which methods from statistics, econometrics or engineering could answer it. Then check whether the assistant's suggestions match the methods and literatures the changepoint preprint actually draws on.

### Prompt

```text
I am a postgraduate researcher in climate science working on: 'When did the rate of warming in the Central England Temperature series change, and was the change abrupt or gradual?' The data are monthly and annual mean temperatures from 1659 (attached HadCET monthly file). Suggest four concepts or methods from neighbouring disciplines – for example statistics, econometrics, engineering or ecology – that could help answer it. Show a table: discipline, concept or method, how it would transfer to my question, what would need adapting (for example autocorrelation or the early, less precise values), risk of mismatch. Add one key reference per row only if you are confident it exists, with a link where possible. Do not invent sources.
```

### Check

Compare with Shi et al. (2021): Section 3 uses penalised likelihood with BIC and MDL penalties, and the paper cites econometric structural-break work (Bai and Perron; Chow tests). Look up one reference the assistant gives and confirm it exists.

## Own material

### Bring

Your research question and the name of your discipline.

### Steps

1. Paste your research question and name your discipline.
2. Ask for concepts or methods from neighbouring disciplines that could transfer.
3. Ask what would need adapting and where the transfer could fail.
4. Look up one suggested concept to confirm it exists as described.

### Prompt

```text
I am a postgraduate researcher in [discipline] working on: [research question]. Suggest four concepts, theories or methods from neighbouring disciplines that could help answer it. Show a table: discipline, concept or method, how it would transfer to my question, what would need adapting, risk of mismatch. Add one key reference per row only if you are confident it exists, with a link where possible. If you are not sure, say so; do not invent sources.
```

### Check

Look up one suggested concept and its reference: the source exists and uses the concept in the way the assistant describes.

## Technology

A plain chat with the starter prompt; treat any reference as a lead only. To confirm a suggested concept, search it in Semantic Scholar or Open Knowledge Maps, which show where the term is actually used. For practice, attach the HadCET monthly file.

## Levels

### Chat

Attach the monthly CET file (D2) and run the starter prompt. In the same chat, ask for the search terms each neighbouring field uses for its method, so you can find that literature yourself.

### Project / Notebook

Add your question, the paper you work from (practice: C6, which draws on econometric structural-break work) and two or three papers from the neighbouring field once you have found them. Ask what each method assumes and what your data would need. The workspace grows into a reading log for the other discipline.

### Custom assistant

Call it 'Discipline bridge'. Instructions: four concepts or methods from named neighbouring fields, the starter prompt's table (transfer, adaptation, risk of mismatch), the search vocabulary each field uses, and a reference only if it is sure it exists. Switch on code execution / data analysis if your tool offers it and you want a method tried on your data. Starter prompt: 'Which methods from other fields fit this question?' Reusable for every new question.
