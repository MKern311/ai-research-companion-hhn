---
name: multilingual-dissemination
description: "Translate content for international audiences and adapt it culturally. Use when the user works on: Multilingual dissemination."
---

# Multilingual dissemination

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/transfer-4

## Goal

Translate content for international audiences and adapt it culturally.

A localised translation with a term glossary and listed adaptations, checked by back-translation in a fresh chat and reviewed by a fluent reader, since back-translation misses unnatural style.

## When to use

Reaching audiences in other countries needs more than literal translation – technical terms, units, number formats and examples have to fit local usage and the field's terminology.

## Procedure

1. Paste the text and name the target language, country and audience.
2. Ask for a translation plus a list of cultural adaptations made.
3. In a new chat, ask the assistant to translate the result back into English.
4. Compare the back-translation with your original for changes in meaning.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.
- Instructions: target language, country and audience, natural style, numbers and units exact in local format, glossary terms kept, every adaptation listed, unsure terms marked. Knowledge: your term glossary. A second agent that only back-translates, with no access to the original, makes the check repeatable. Starter prompt: "Translate this abstract for the public in [country]". Reusable for every summary you share abroad.

## Starter prompt

```text
I am a researcher in [discipline] sharing my work with [audience] in [country]. Below is my lay summary in English: [paste text]. Translate it into [language] for this audience, in a clear and natural style. Keep technical terms consistent and give the [language] term for each key concept in a short glossary. Adapt examples, units or references that would not make sense locally, and list every adaptation you made. Mark any term where you are unsure of the usual translation in this field.
```

## Quality check

The back-translation keeps the meaning of each sentence of your original, and a fluent speaker confirms the marked terms.

## Limits

- Risk: Public or your own non-sensitive material; errors are easy to spot.

## Key concepts

- **Back-translation** – Translating the target text back into the source language independently – here in a fresh chat – and comparing meaning with the original (Brislin 1970). It detects omissions and shifts in meaning but not unnatural or unidiomatic style.
- **TRAPD team translation** – Translation, Review, Adjudication, Pretesting and Documentation: parallel translations discussed by a team, a decision on each disputed term, a test with target readers and a record of choices (Harkness et al., 2004). The standard in cross-cultural survey research; stronger than back-translation alone.
- **Localisation** – Adapting a text beyond the words: units, decimal and date formats, examples, institutions and cultural references, so that it works for readers in the target country.
- **Terminology management** – Fixing one agreed equivalent for each key term in a glossary and checking it against field-specific term bases, such as IATE (Interactive Terminology for Europe) for EU languages.

## Key references

- Brislin, R. W. (1970). Back-translation for cross-cultural research. Journal of Cross-Cultural Psychology, 1(3), 185–216. https://doi.org/10.1177/135910457000100301
- Harkness, J., Pennell, B.-E., & Schoua-Glusberg, A. (2004). Survey questionnaire translation and assessment. In S. Presser et al. (Eds.), Methods for testing and evaluating survey questionnaires (pp. 453–473). Wiley. https://doi.org/10.1002/0471654728.ch22

## Tools that help

DeepL Write
