---
id: publikation-6
phase: publikation
order: 6
title: Thesis structure across chapters
risk: 2
mode: Co-create
potential: 3
capabilities: synthese; analyse
routes: chat; files
repos: ars-paper
data: B2; C3
practice_data: B2; C3
---

Check the golden thread from research questions to conclusions across chapters; spot gaps, overlaps and repetition.

## Problem

Chapters written over several years drift apart – a research question goes unanswered, findings repeat, and the golden thread from question to contribution that examiners look for gets lost.

## Result

A traceability matrix of each research question across chapters, with gaps, overlaps and repetition marked and quoted – a basis you check against the full chapters and discuss with your supervisor.

## Steps

1. Summarise each chapter yourself in three to five sentences
2. Ask for a research question by chapter traceability matrix
3. Have gaps and overlaps flagged with quotes from your summaries
4. Check the conclusion answers every question and states the contribution
5. Verify flagged issues in the full chapters yourself

## Concepts

### Golden thread

The traceable line from the research problem and questions through literature, methodology and findings to conclusions and contribution. Examiners check that every question is posed, addressed and answered, and that nothing important appears from nowhere.

### Doctorateness

Trafford and Leshem's set of interlinked features examiners look for – among them a stated gap, explicit research questions, a conceptual framework, appropriate methodology, conceptual conclusions and a contribution to knowledge – judged by how well they connect.

### Traceability matrix

A table with research questions as rows and chapters (or sections) as columns, showing where each question is introduced, addressed, answered and discussed. Borrowed from requirements engineering; empty cells reveal gaps, repeated cells reveal overlap.

### Thesis by publication

A thesis built from papers plus an integrative introduction and discussion. The linking chapters must show how separately published studies answer shared research questions and add up to one contribution.

## References

- Trafford, V., & Leshem, S. (2009). Doctorateness as a threshold concept. Innovations in Education and Teaching International, 46(3), 305–316. doi:10.1080/14703290903069027
- Mullins, G., & Kiley, M. (2002). 'It's a PhD, not a Nobel Prize': How experienced examiners assess research theses. Studies in Higher Education, 27(4), 369–386. doi:10.1080/0307507022000011507

## Practice exercise

### Task

Treat the Christidis et al. (2020) and Christidis et al. (2023) papers as two chapters of a thesis by publication and test three given research questions against them. You learn whether the assistant detects a question that only one chapter answers.

### Prompt

```text
Attached are two PDFs by Christidis and colleagues: the UK 30 to 40 °C paper (2020) and the Mediterranean 50 °C paper (2023). Treat them as chapters 2 and 3 of a thesis by publication. The research questions are: RQ1 How has human influence changed the likelihood of extreme daily maximum temperatures at specific locations? RQ2 How will that likelihood change by 2100 under different emission pathways? RQ3 What do these changes imply for heat-related mortality? First summarise each chapter in five sentences. Then create a table, one row per research question, showing where each chapter introduces, addresses with methods, and answers it. List gaps, overlaps and repetition, quoting the sentence each point rests on. If the papers do not give enough information, say so.
```

### Check

Both chapters address RQ1. RQ2 is fully addressed only in 2020, which compares two pathways (RCP 4.5 and RCP 8.5); 2023 uses one medium scenario (SSP2-4.5), so the assistant should rate it partial. Only the 2023 abstract reports a mortality-related result (1–2 additional months with excess thermal deaths by 2100), so RQ3 is answered in one chapter only.

## Own material

### Bring

Your research questions and a chapter outline with a short summary (three to five sentences) of each chapter, written by you.

### Steps

1. Paste your research questions and the chapter summaries in one message.
2. Ask for a table mapping each research question to chapters.
3. Ask the assistant to flag gaps, overlaps and repetition, quoting your summaries.
4. Check two flagged issues against your actual chapters.

### Prompt

```text
I am a postgraduate researcher in [discipline] checking the golden thread of my thesis. My research questions are: [paste RQs]. Below are short summaries of each chapter: [paste summaries]. Create a table with one row per research question showing where it is introduced, addressed with methods, answered with findings, and discussed in the conclusion. Then list any gaps (a question not answered), overlaps between chapters and likely repetition. For each point, quote the sentence from my summaries it is based on. If the summaries do not give enough information to judge, say so.
```

### Check

Pick two flagged gaps or overlaps and confirm them in your full chapters; the mapping should match where you know each question is answered.

### Limit

The assistant may skip parts of long files, so this tests the golden thread on your outline and summaries, not on the full thesis text.

## Technology

Paste the research questions and chapter summaries into your AI assistant, or upload a summary document; summaries keep the full thesis out of the chat and make the check quick to repeat.

## Levels

### Chat

Run the starter prompt with the two Christidis PDFs attached. Then, in the same chat, ask how RQ3 could be narrowed or where in the chapters it could still be answered.

### Project / Notebook

Add your research questions, chapter summaries and, as they are finished, the chapters themselves; for the practice, the two Christidis papers (B2, C3) and a Word file with RQ1–RQ3. Ask for the question-to-chapter table again after each new chapter. The project or notebook holds the thesis over months, so the golden-thread check grows with it.

### Custom assistant

Create a configured assistant (e.g. a Copilot agent, custom GPT, Gemini Gem or Claude project). Paste your research questions and the mapping rules into its standing instructions: one row per question showing where it is introduced, addressed with methods, answered and discussed; flag gaps, overlaps and repetition, quoting the sentence behind each point; say when information is missing. Add the thesis outline as knowledge files (if your tool does not support them, attach them in the chat). Starter prompt: "Check this chapter summary against my research questions." Reusable each time a chapter changes.
