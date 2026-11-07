---
id: transfer-2
phase: transfer
order: 2
title: Research-informed teaching
risk: 1
mode: Co-create
potential: 2
capabilities: generierung
routes: files; chat
tools: Gemini Notebook (formerly NotebookLM)
data: B2; D1
practice_data: B2; D1
---

Develop case studies, exercises and questions for your teaching from current research findings.

## Problem

Bringing current research into seminars means building cases and questions from scratch, and recall questions are quicker to write than ones that make students apply or evaluate findings.

## Result

A seminar case, discussion questions at the apply level of Bloom's revised taxonomy or above, and a data exercise aligned to your learning outcome, with simplifications listed for you to check.

## Steps

1. Upload the paper with module, level and learning outcome
2. Ask for a 400-word case study based on the paper
3. Add questions and an exercise at apply level or higher
4. Check that outcome, activity and assessment align
5. Check case facts and figures against the paper

## Concepts

### Constructive alignment

Biggs' principle that intended learning outcomes, teaching and learning activities, and assessment tasks are designed to match: students learn what the activity makes them do, so the activity must require what the outcome states.

### Revised Bloom's taxonomy

Six cognitive process levels – remember, understand, apply, analyse, evaluate, create (Anderson & Krathwohl 2001). Write discussion questions and exercises at apply level or above when the outcome asks for more than recall.

### Research–teaching nexus (Healey)

Four ways to bring research into teaching: research-led (learning findings), research-oriented (learning how research is done), research-tutored (discussing papers), research-based (students do inquiry). A data exercise moves a session towards research-based.

### Case-based learning

Students work on a realistic, bounded scenario with a question or decision, applying concepts to evidence. Cases drawn from a real paper should keep its facts and say where they simplify.

## References

- Biggs, J. (1996). Enhancing teaching through constructive alignment. Higher Education, 32(3), 347–364. doi:10.1007/BF00138871
- Anderson, L. W., & Krathwohl, D. R. (Eds.). (2001). A taxonomy for learning, teaching, and assessing: A revision of Bloom's taxonomy of educational objectives. Longman.
- Healey, M. (2005). Linking research and teaching: Exploring disciplinary spaces and the role of inquiry-based learning. In R. Barnett (Ed.), Reshaping the university: New relationships between research, scholarship and teaching (pp. 67–78). McGraw-Hill/Open University Press.

## Practice exercise

### Task

Build a seminar case on the Christidis et al. (2020) paper with a data exercise on the Central England daily maximum series. You learn whether the assistant keeps the paper's facts straight and computes the exercise's worked answer correctly.

### Prompt

```text
I teach a second-year undergraduate module on environmental data. The learning outcome is: 'Students interpret observed temperature extremes in the light of attribution research.' Attached are the Christidis et al. (2020) PDF and the HadCET daily maximum text file. 1) Write a case study of about 400 words based on the paper, for a 20-minute seminar activity. 2) Add three discussion questions at the apply, analyse or evaluate level of Bloom's revised taxonomy, not recall. 3) Design one exercise using the data file: count the days at or above 30 °C per decade since 1900 and find the hottest day of 2022. Give a worked answer with Python code. List every simplification you made.
```

### Check

Rerun the code: the file shows 37.3 °C on 19 July 2022 and seven days at or above 30 °C in 2022. Case facts must match the paper, and the case should note that CET is a regional series.

## Own material

### Bring

An open-access paper from your field (your own or a recent one) and the level of the module you teach or support, e.g. second-year undergraduate.

### Steps

1. Attach the paper and state the module, level and learning outcome.
2. Ask for a short case study based on the paper.
3. Ask for three discussion questions and one applied exercise.
4. Check that the case facts match the paper and the questions need application.

### Prompt

```text
I teach [module] to [level] students in [discipline]. Attached is a recent paper: [title]. The learning outcome is: [paste outcome]. Write a case study of about 400 words based on the paper's setting and findings, suitable for a 20-minute seminar activity. Add three discussion questions that ask students to apply or evaluate the findings, not just recall them, and one short applied exercise. Keep facts and figures as in the paper, and list any simplifications you made so I can check them.
```

### Check

Every fact and figure in the case can be found in the paper, and each question asks students to apply, compare or judge rather than repeat.

## Technology

Upload the open-access PDF to your AI assistant; for a data exercise, add a practice file and let the assistant draft the task and a worked answer in Python (if it can run code), which you rerun before using it in class.

## Levels

### Chat

Run the starter prompt with both files attached. In the same chat, ask the assistant to map each question and the exercise to the learning outcome and a Bloom level, and to show the 2022 rows its code counted.

### Project / Notebook

Add B2, the D1 text file and your module descriptor with its learning outcomes. Ask for cases and questions across them and keep approved ones as saved notes – a teaching bank for the module that grows with each new paper. Depending on your tool, a notebook may not run Python – if not, compute worked answers in a chat and add them as a document.

### Custom assistant

Instructions: case length and format, questions at the apply level of Bloom's revised taxonomy or above, outcome, activity and assessment aligned, facts only from the attached paper, a list of simplifications, worked answers with code. Knowledge: your module descriptor and learning outcomes. Switch on code execution or data analysis for data exercises, if your tool offers it. Starter prompt: "Seminar case and three questions from this paper". Reusable for every new paper and module.
