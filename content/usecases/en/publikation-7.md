---
id: publikation-7
phase: publikation
order: 7
title: Mock viva preparation
risk: 2
mode: Co-create
potential: 3
capabilities: generierung; analyse
routes: chat; files
tools: Gemini Notebook (formerly NotebookLM)
data: B2
practice_data: B2
---

Generate likely examiner questions from your thesis and practise your answers – a complement to, not a substitute for, your supervisors.

## Problem

You rarely get to practise answering hard questions about your own thesis aloud before the viva, and mock vivas depend on busy colleagues' time.

## Result

A bank of likely examiner questions on originality, significance and rigour, each linked to your own claims, and practice answers with feedback – rehearsal alongside, not instead of, your supervisors.

## Steps

1. Paste your abstract and one chapter summary
2. Ask for questions on contribution, methodology, findings and future work
3. Answer one question at a time, ideally aloud
4. Ask for feedback and a probing follow-up per answer
5. Take the hardest questions to your supervisor

## Concepts

### UK viva voce

An oral examination, usually with one internal and one external examiner, in which you defend the thesis against your university's doctoral criteria. Outcomes typically range from pass, minor or major corrections to resubmission; regulations differ by university.

### FHEQ level 8 descriptors

The QAA's descriptors for doctorates (second edition of the frameworks, 2024; the level descriptors are unchanged): new knowledge created through original research of a quality to satisfy peer review, systematic command of a substantial body of knowledge, and the ability to conceive, design and carry out a research project.

### Originality, significance, rigour

The criteria most examiners' questions return to: what is new, why it matters to the field, and whether methods and inference are sound. Practise one short answer for each about your own thesis.

### Retrieval practice (testing effect)

Recalling and explaining material under questioning strengthens long-term retention more than rereading (Roediger & Karpicke 2006). Answering aloud also exposes points you cannot yet explain clearly.

## References

- Quality Assurance Agency for Higher Education. (2024). The frameworks for higher education qualifications of UK degree-awarding bodies (2nd ed.). QAA.
- Roediger, H. L., III, & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. Psychological Science, 17(3), 249–255. doi:10.1111/j.1467-9280.2006.01693.x

## Practice exercise

### Task

Rehearse a viva as if the Christidis et al. (2020) paper were the core chapter of your thesis. You learn whether the assistant's examiner questions engage with the paper's specific claims and method or stay generic.

### Prompt

```text
Attached is the Christidis et al. (2020) PDF on temperatures above 30 to 40 °C in the United Kingdom. Imagine it is the core chapter of my PhD thesis and I face a viva at a UK university. Act as an experienced external examiner. Write 12 questions grouped under: contribution to knowledge, methodology, findings and limitations, and future work. Make some broad and some probing, and link each to a specific claim in the paper, quoting it. Then ask me one question at a time, wait for my answer, and give brief feedback on clarity, use of evidence and what an examiner might ask next.
```

### Check

At least half of the questions quote real sentences – for example the 100–300-year return time of 40 °C summers or the step relating local to UK-mean extremes – and the feedback names something concrete to improve.

## Own material

### Bring

Your thesis abstract and a one-page summary of one chapter, or the abstract of a published paper from your thesis.

### Steps

1. Paste your abstract and chapter summary, then ask for likely examiner questions.
2. Pick three questions and answer each one in the chat.
3. Ask for feedback and one probing follow-up question per answer.
4. Note which questions you found hardest to discuss with your supervisor.

### Prompt

```text
I am preparing for my PhD viva in [discipline] at a UK university. Below are my thesis abstract and a summary of chapter [number]: [paste text]. Act as an experienced external examiner. Write 12 questions I am likely to be asked, grouped under: contribution to knowledge, methodology, findings and limitations, and future work. Make some broad and some probing, and link each to a specific claim in my text. Then ask me one question at a time, wait for my answer, and give brief feedback on clarity, use of evidence and what an examiner might ask next.
```

### Check

At least half of the questions refer to specific claims in your abstract or summary, and the feedback on your answers points to something concrete you could say better.

## Technology

Paste the abstract and summary into your AI assistant and run the questions as a dialogue, asking for feedback after each answer before the next question.

## Levels

### Chat

Run the starter prompt with the Christidis 2020 PDF attached and answer three questions. Then, in the same chat, ask which of your answers an examiner would probe hardest, and why.

### Project / Notebook

Add your thesis abstract, chapter summaries, key papers and notes from supervision meetings; for the practice, the Christidis paper (B2). Ask for examiner questions on one chapter at a time and save the best questions and your answers as a note in the project or notebook (or as a file you add to it). Over weeks you build a viva file you can return to.

### Custom assistant

Create a configured assistant, for example "Viva examiner" (e.g. a Copilot agent, a ChatGPT project, a Gemini Gem or a Claude project). In the standing instructions, describe the examiner: UK viva, questions grouped by contribution, methodology, findings and limitations, and future work, each tied to a quoted claim; one question at a time, wait for the answer, then brief feedback and a follow-up. Add your abstract and chapter summaries as knowledge files (if your tool does not support knowledge files, attach them in the chat). Starter prompt: "Examine me on chapter 3." Reusable for regular practice – a complement to mock vivas with your supervisors.
