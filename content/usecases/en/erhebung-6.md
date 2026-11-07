---
id: erhebung-6
phase: erhebung
order: 6
title: Reading historical & handwritten sources
risk: 2
mode: Co-create
potential: 2
capabilities: analyse; generierung
routes: files; external; connected
connect: Transkribus
tools: Transkribus
---

Transcribe printed or handwritten archival material (OCR/HTR) and draft first translations for close reading.

## Problem

Old print and handwriting slow you down: deciphering one page in an unfamiliar hand can take an hour, before translation even begins.

## Result

A line-by-line diplomatic transcription with uncertain readings marked, an error count from your spot-check, and a literal translation of confirmed lines – a faster start to close reading, still verified against the image.

## Steps

1. Upload one page; state language, script and period
2. Ask for a diplomatic transcription with uncertainty marks
3. Count errors in five lines against an existing transcription
4. Translate only the lines you have confirmed

## Concepts

### OCR and HTR

Optical character recognition reads printed text; handwritten text recognition reads manuscripts and usually needs models trained on similar hands. General chat models are not trained on your hand and may produce fluent but invented readings.

### Diplomatic versus normalised transcription

Diplomatic transcription keeps original spelling, abbreviations, punctuation and line breaks; normalised transcription modernises them for readability. Decide before transcribing and state the convention, because normalising is already interpretation.

### Character error rate (CER)

Standard accuracy measure for OCR and HTR: (substitutions + deletions + insertions) ÷ characters in a ground-truth transcription. Measure it yourself on a sample; fluent output with a high error rate is the main risk.

### Source criticism

Assess the document's authenticity, provenance, date and purpose before interpreting it, and treat any machine translation as a draft, since the historical meaning of words may differ from modern usage.

## References

- Muehlberger, G., Seaward, L., Terras, M., et al. (2019). Transforming scholarship in the archives through handwritten text recognition: Transkribus as a case study. Journal of Documentation, 75(5), 954–976. doi:10.1108/JD-07-2018-0114
- Kahle, P., Colutto, S., Hackl, G., & Mühlberger, G. (2017). Transkribus – A service platform for transcription, recognition and retrieval of historical documents. In 2017 14th IAPR International Conference on Document Analysis and Recognition (ICDAR) (pp. 19–24). IEEE. doi:10.1109/ICDAR.2017.307

## Own material

### Bring

A photo or scan of one page of public-domain printed or handwritten material, ideally from a digitised archive that also offers a transcription.

### Steps

1. Attach the image of a single page or a short section.
2. Paste the starter prompt with the language and approximate date.
3. Compare five lines with the archive's transcription or your own careful reading.
4. Ask for a draft translation of the lines you have confirmed only.

### Prompt

```text
I am a researcher working with archival sources. The attached image shows a [printed or handwritten] document in [language], from around [date or period]. Transcribe it line by line, keeping the original spelling, abbreviations and line breaks. Mark uncertain readings with [?] and illegible parts with [illegible] rather than guessing. Then give a literal draft translation into modern English, line by line, in a two-column table. Note any words whose meaning may have changed since that period.
```

### Check

In five lines checked against the existing transcription or the image, every word not marked [?] is correct; if you find confident errors, treat the whole output as a rough draft.

### Limit

A chat works page by page; transcribing whole collections needs dedicated OCR or handwriting recognition tools.

## Technology

Upload a single page image to your AI assistant for transcription and a draft translation. For whole collections or difficult hands, Transkribus trains HTR models; its community MCP server runs locally, so it works from an MCP-capable desktop assistant or code editor, not from a plain browser chat.

## Levels

### Chat

Attach one page image and run the starter prompt. In the same chat, paste your corrections for the five lines you checked and ask for a revised transcription and a translation of the confirmed lines only.

### Project / Notebook

Add your checked transcriptions of earlier pages, a list of abbreviations and spellings, and the archive's catalogue description, as Word or text files. Ask how a word or abbreviation was read on earlier pages before you accept a new reading. Readings stay consistent across a whole collection; the page images themselves still go into the chat.

### Custom assistant

Call it 'Archive transcriber'. Instructions: line by line, original spelling and abbreviations kept, [?] for uncertain and [illegible] for unreadable text, a literal translation in a two-column table, notes on words whose meaning has changed. Knowledge: your abbreviation list and checked sample transcriptions. Starter prompt: 'Transcribe this page – [language], around [date]'. Reusable for every page; you still spot-check each one against the image.
