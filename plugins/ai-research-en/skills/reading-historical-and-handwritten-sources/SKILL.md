---
name: reading-historical-and-handwritten-sources
description: "Transcribe printed or handwritten archival material (OCR/HTR) and draft first translations for close reading. Use when the user works on: Reading historical & handwritten sources."
---

# Reading historical & handwritten sources

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/erhebung-6

## Goal

Transcribe printed or handwritten archival material (OCR/HTR) and draft first translations for close reading.

A line-by-line diplomatic transcription with uncertain readings marked, an error count from your spot-check, and a literal translation of confirmed lines – a faster start to close reading, still verified against the image.

## When to use

Old print and handwriting slow you down: deciphering one page in an unfamiliar hand can take an hour, before translation even begins.

## Workflow with the user

Guide the user through these steps. Where a step says “ask the assistant”, that is you.

1. Attach the image of a single page or a short section.
2. Paste the starter prompt with the language and approximate date.
3. Compare five lines with the archive's transcription or your own careful reading.
4. Ask for a draft translation of the lines you have confirmed only.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.

## Typical request

```text
I am a researcher working with archival sources. The attached image shows a [printed or handwritten] document in [language], from around [date or period]. Transcribe it line by line, keeping the original spelling, abbreviations and line breaks. Mark uncertain readings with [?] and illegible parts with [illegible] rather than guessing. Then give a literal draft translation into modern English, line by line, in a two-column table. Note any words whose meaning may have changed since that period.
```

## Quality check

In five lines checked against the existing transcription or the image, every word not marked [?] is correct; if you find confident errors, treat the whole output as a rough draft.

## Limits

- A chat works page by page; transcribing whole collections needs dedicated OCR or handwriting recognition tools.
- Risk: Your own unpublished drafts, reviews or third-party content.

## Key concepts

- **OCR and HTR** – Optical character recognition reads printed text; handwritten text recognition reads manuscripts and usually needs models trained on similar hands. General chat models are not trained on your hand and may produce fluent but invented readings.
- **Diplomatic versus normalised transcription** – Diplomatic transcription keeps original spelling, abbreviations, punctuation and line breaks; normalised transcription modernises them for readability. Decide before transcribing and state the convention, because normalising is already interpretation.
- **Character error rate (CER)** – Standard accuracy measure for OCR and HTR: (substitutions + deletions + insertions) ÷ characters in a ground-truth transcription. Measure it yourself on a sample; fluent output with a high error rate is the main risk.
- **Source criticism** – Assess the document's authenticity, provenance, date and purpose before interpreting it, and treat any machine translation as a draft, since the historical meaning of words may differ from modern usage.

## Key references

- Muehlberger, G., Seaward, L., Terras, M., et al. (2019). Transforming scholarship in the archives through handwritten text recognition: Transkribus as a case study. Journal of Documentation, 75(5), 954–976. https://doi.org/10.1108/JD-07-2018-0114
- Kahle, P., Colutto, S., Hackl, G., & Mühlberger, G. (2017). Transkribus – A service platform for transcription, recognition and retrieval of historical documents. In 2017 14th IAPR International Conference on Document Analysis and Recognition (ICDAR) (pp. 19–24). IEEE. https://doi.org/10.1109/ICDAR.2017.307

## Tools that help

Transkribus
