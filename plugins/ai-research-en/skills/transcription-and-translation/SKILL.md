---
name: transcription-and-translation
description: "Transcribe interviews and focus groups, separate speakers and translate where needed – only with approved tools. Use when the user works on: Transcription & translation."
---

# Transcription & translation

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/erhebung-0

## Goal

Transcribe interviews and focus groups, separate speakers and translate where needed – only with approved tools.

A speaker-labelled draft transcript and translation that you correct rather than type – produced only with approved tools, checked line by line against the audio, and with AI use declared in your methods.

## When to use

Transcribing an hour of interview by hand takes several hours, and translation adds more; automatic tools save time but can silently change wording, merge speakers and drop hesitations.

## Procedure

1. Ask the assistant to invent a 200-word two-person interview excerpt on your topic, without speaker labels.
2. Paste the starter prompt with that excerpt and choose a target language you can read.
3. Compare the labelled version line by line with the original excerpt.
4. Note where it changed wording, merged speakers or smoothed over hesitations.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.
- Call it 'Transcript formatter'. Instructions: add speaker labels, mark [unclear], translate keeping hesitations, show original and translation side by side, never summarise, shorten or correct speech, and remind you to remove names first. Knowledge: your glossary of terms. Only approved, pseudonymised text goes in, and you check every line against the audio. Starter prompt: 'Label and translate this excerpt into [language]'.

## Starter prompt

```text
Below is a short, invented interview excerpt between an interviewer and one participant, with no speaker labels. 1) Add labels (I: and P:) at each change of speaker, keeping the wording exactly as it is. 2) Mark any place where the speaker is unclear with [unclear]. 3) Translate the labelled text into [language], keeping hesitations and repetitions. Show the original and the translation side by side in a two-column table. Do not summarise, shorten or correct the speakers' grammar. Excerpt: [paste invented text]
```

## Quality check

Every sentence of the original appears unchanged in the labelled version and the translation keeps the meaning; real interviews must only go through your university's approved transcription tool, never into this chat.

## Limits

- Depending on your tool, a chat may not transcribe audio files, so this tests only speaker labelling and translation of an invented text excerpt.
- Risk: Personal or sensitive data, or decisions that feed directly into your results.

## Key concepts

- **Verbatim, intelligent verbatim and Jefferson notation** – Verbatim keeps every word, filler and false start; intelligent verbatim removes them for readability; Jefferson notation adds pauses, overlaps and intonation for conversation analysis. Choose by analytic method: thematic analysis rarely needs Jefferson, discourse analysis often does.
- **Transcription as interpretation** – Transcripts are constructed, not neutral copies: choices on punctuation, dialect and non-verbal cues shape meaning. Document your conventions and who checked the transcript against the audio, especially when an automated tool produced the draft.
- **Word error rate (WER)** – Standard accuracy measure for automatic speech recognition: (substitutions + deletions + insertions) ÷ words in a reference transcript. Error rates rise with accents, overlapping speech and poor audio, so spot-check your own recordings rather than trusting published figures.
- **Back-translation (Brislin)** – A second translator renders the translation back into the source language without seeing the original; discrepancies reveal shifts in meaning. Use it, or review by a bilingual colleague, for quotations you will analyse or publish.

## Key references

- Jefferson, G. (2004). Glossary of transcript symbols with an introduction. In G. H. Lerner (Ed.), Conversation analysis: Studies from the first generation (pp. 13–31). John Benjamins.
- Oliver, D. G., Serovich, J. M., & Mason, T. L. (2005). Constraints and opportunities with interview transcription: Towards reflection in qualitative research. Social Forces, 84(2), 1273–1289. https://doi.org/10.1353/sof.2006.0023
- Brislin, R. W. (1970). Back-translation for cross-cultural research. Journal of Cross-Cultural Psychology, 1(3), 185–216. https://doi.org/10.1177/135910457000100301

## Tools that help

Otter.ai · Whisper (OpenAI) · TurboScribe · MAXQDA
