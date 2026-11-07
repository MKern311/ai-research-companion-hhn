---
name: thesis-structure-across-chapters
description: "Check the golden thread from research questions to conclusions across chapters; spot gaps, overlaps and repetition. Use when the user works on: Thesis structure across chapters."
---

# Thesis structure across chapters

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/publikation-6

## Goal

Check the golden thread from research questions to conclusions across chapters; spot gaps, overlaps and repetition.

A traceability matrix of each research question across chapters, with gaps, overlaps and repetition marked and quoted – a basis you check against the full chapters and discuss with your supervisor.

## When to use

Chapters written over several years drift apart – a research question goes unanswered, findings repeat, and the golden thread from question to contribution that examiners look for gets lost.

## Procedure

1. Paste your research questions and the chapter summaries in one message.
2. Ask for a table mapping each research question to chapters.
3. Ask the assistant to flag gaps, overlaps and repetition, quoting your summaries.
4. Check two flagged issues against your actual chapters.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.
- Create a configured assistant (e.g. a Copilot agent, custom GPT, Gemini Gem or Claude project). Paste your research questions and the mapping rules into its standing instructions: one row per question showing where it is introduced, addressed with methods, answered and discussed; flag gaps, overlaps and repetition, quoting the sentence behind each point; say when information is missing. Add the thesis outline as knowledge files (if your tool does not support them, attach them in the chat). Starter prompt: "Check this chapter summary against my research questions." Reusable each time a chapter changes.

## Starter prompt

```text
I am a postgraduate researcher in [discipline] checking the golden thread of my thesis. My research questions are: [paste RQs]. Below are short summaries of each chapter: [paste summaries]. Create a table with one row per research question showing where it is introduced, addressed with methods, answered with findings, and discussed in the conclusion. Then list any gaps (a question not answered), overlaps between chapters and likely repetition. For each point, quote the sentence from my summaries it is based on. If the summaries do not give enough information to judge, say so.
```

## Quality check

Pick two flagged gaps or overlaps and confirm them in your full chapters; the mapping should match where you know each question is answered.

## Limits

- The assistant may skip parts of long files, so this tests the golden thread on your outline and summaries, not on the full thesis text.
- Risk: Your own unpublished drafts, reviews or third-party content.

## Key concepts

- **Golden thread** – The traceable line from the research problem and questions through literature, methodology and findings to conclusions and contribution. Examiners check that every question is posed, addressed and answered, and that nothing important appears from nowhere.
- **Doctorateness** – Trafford and Leshem's set of interlinked features examiners look for – among them a stated gap, explicit research questions, a conceptual framework, appropriate methodology, conceptual conclusions and a contribution to knowledge – judged by how well they connect.
- **Traceability matrix** – A table with research questions as rows and chapters (or sections) as columns, showing where each question is introduced, addressed, answered and discussed. Borrowed from requirements engineering; empty cells reveal gaps, repeated cells reveal overlap.
- **Thesis by publication** – A thesis built from papers plus an integrative introduction and discussion. The linking chapters must show how separately published studies answer shared research questions and add up to one contribution.

## Key references

- Trafford, V., & Leshem, S. (2009). Doctorateness as a threshold concept. Innovations in Education and Teaching International, 46(3), 305–316. https://doi.org/10.1080/14703290903069027
- Mullins, G., & Kiley, M. (2002). 'It's a PhD, not a Nobel Prize': How experienced examiners assess research theses. Studies in Higher Education, 27(4), 369–386. https://doi.org/10.1080/0307507022000011507
