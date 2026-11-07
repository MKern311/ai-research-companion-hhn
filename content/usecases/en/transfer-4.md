---
id: transfer-4
phase: transfer
order: 4
title: Multilingual dissemination
risk: 1
mode: Assist
potential: 2
capabilities: generierung
routes: chat; files; external
tools: DeepL Write
data: B2
practice_data: B2
---

Translate content for international audiences and adapt it culturally.

## Problem

Reaching audiences in other countries needs more than literal translation – technical terms, units, number formats and examples have to fit local usage and the field's terminology.

## Result

A localised translation with a term glossary and listed adaptations, checked by back-translation in a fresh chat and reviewed by a fluent reader, since back-translation misses unnatural style.

## Steps

1. Paste the summary and name language, country and audience
2. Ask for translation, glossary and a list of adaptations
3. Back-translate in a new chat without the original
4. Compare meaning sentence by sentence with your original
5. Ask a fluent reader to check terms and style

## Concepts

### Back-translation

Translating the target text back into the source language independently – here in a fresh chat – and comparing meaning with the original (Brislin 1970). It detects omissions and shifts in meaning but not unnatural or unidiomatic style.

### TRAPD team translation

Translation, Review, Adjudication, Pretesting and Documentation: parallel translations discussed by a team, a decision on each disputed term, a test with target readers and a record of choices (Harkness et al., 2004). The standard in cross-cultural survey research; stronger than back-translation alone.

### Localisation

Adapting a text beyond the words: units, decimal and date formats, examples, institutions and cultural references, so that it works for readers in the target country.

### Terminology management

Fixing one agreed equivalent for each key term in a glossary and checking it against field-specific term bases, such as IATE (Interactive Terminology for Europe) for EU languages.

## References

- Brislin, R. W. (1970). Back-translation for cross-cultural research. Journal of Cross-Cultural Psychology, 1(3), 185–216. doi:10.1177/135910457000100301
- Harkness, J., Pennell, B.-E., & Schoua-Glusberg, A. (2004). Survey questionnaire translation and assessment. In S. Presser et al. (Eds.), Methods for testing and evaluating survey questionnaires (pp. 453–473). Wiley. doi:10.1002/0471654728.ch22

## Practice exercise

### Task

Translate the abstract of the Christidis et al. (2020) paper for a non-specialist audience, then back-translate it in a new chat. You learn whether the assistant keeps terms such as 'return time' consistent and whether back-translation reveals shifts in meaning.

### Prompt

```text
Attached is the Christidis et al. (2020) PDF. Take its abstract and translate it into German for interested members of the public in Germany (replace German and Germany with a language someone in your group reads and a matching country). Use a clear, natural style. Keep technical terms consistent and give a short glossary with the translated term for each key concept, such as return time, human influence, attribution and greenhouse gas emissions. Adapt anything that would not make sense locally and list every adaptation. Keep all numbers and units exact, using local number formats. Mark any term where you are unsure of the usual translation in climate science.
```

### Check

Back-translate in a new chat and compare with the original abstract: 38.7 °C, 100–300 years and 3.5 years by 2100 must survive, together with the condition 'without mitigating greenhouse gas emissions'.

## Own material

### Bring

A lay summary or abstract of your own (150–250 words) and a target language you read, or a colleague who does.

### Steps

1. Paste the text and name the target language, country and audience.
2. Ask for a translation plus a list of cultural adaptations made.
3. In a new chat, ask the assistant to translate the result back into English.
4. Compare the back-translation with your original for changes in meaning.

### Prompt

```text
I am a researcher in [discipline] sharing my work with [audience] in [country]. Below is my lay summary in English: [paste text]. Translate it into [language] for this audience, in a clear and natural style. Keep technical terms consistent and give the [language] term for each key concept in a short glossary. Adapt examples, units or references that would not make sense locally, and list every adaptation you made. Mark any term where you are unsure of the usual translation in this field.
```

### Check

The back-translation keeps the meaning of each sentence of your original, and a fluent speaker confirms the marked terms.

## Technology

Paste or attach the text in your AI assistant for translation; run the back-translation in a fresh chat so the assistant does not reuse its own wording, and polish target-language text in DeepL Write.

## Levels

### Chat

Run the starter prompt with the paper attached and, in the same chat, ask the assistant to check its translation against its own glossary and list every term used inconsistently or number not in local format. Do the back-translation in a new chat, which must not see the original.

### Project / Notebook

Add B2, your approved earlier translations and a glossary document with key terms per language, agreed with a fluent colleague. Ask that each new translation follows the glossary and flags new terms. You gain consistent terminology across all your translations and a glossary that grows with each project; back-translate in a plain chat, outside the notebook.

### Custom assistant

Instructions: target language, country and audience, natural style, numbers and units exact in local format, glossary terms kept, every adaptation listed, unsure terms marked. Knowledge: your term glossary. A second agent that only back-translates, with no access to the original, makes the check repeatable. Starter prompt: "Translate this abstract for the public in [country]". Reusable for every summary you share abroad.
