---
id: idee-1
phase: idee
order: 1
title: Sparring partner for research questions
risk: 1
mode: Co-create
potential: 3
capabilities: generierung
routes: chat; external
tools: Scholar GPT
repos: ars-deep-research
data: C6; B1
practice_ref: C6; B1
---

Turn rough ideas into alternative research questions, surface assumptions, and generate counter-positions and objections.

## Problem

Early ideas are usually tested only against your own view or a busy supervisor's; blind spots, untested assumptions and obvious objections surface late, sometimes at the viva.

## Result

Alternative framings of your question, the assumptions it rests on and the strongest objections with counter-arguments – so you choose a direction deliberately and arrive at supervision better prepared.

## Steps

1. Describe your idea in two or three sentences
2. Ask your AI assistant to argue as a critical supervisor
3. Request narrower, broader and different-angle questions
4. Ask which assumptions the idea takes for granted
5. Draft your own answer to the strongest objection

## Concepts

### Problematisation (Alvesson & Sandberg)

Generating questions by identifying and challenging the assumptions behind existing work – in-house, root-metaphor, paradigm, ideology and field assumptions – rather than only filling gaps. Use it when an idea feels incremental.

### Toulmin model of argument

Breaks an argument into claim, grounds (data), warrant, backing, qualifier and rebuttal. Use it to see which part of your idea an objection attacks and what evidence would answer it.

### Steelmanning

Stating the strongest version of an opposing position before answering it – the opposite of a straw man. Asking for the strongest objections, not the easiest, prepares you for peer review and the viva.

### What, why and how questions (Blaikie)

'What' questions describe, 'why' questions explain, 'how' questions concern change or intervention. Moving between them – narrower, broader, different angle – changes the design, data and claims your study can support.

## References

- Alvesson, M., & Sandberg, J. (2011). Generating research questions through problematization. Academy of Management Review, 36(2), 247–271. doi:10.5465/amr.2009.0188
- Toulmin, S. E. (2003). The uses of argument (Updated ed.). Cambridge University Press.
- Blaikie, N., & Priest, J. (2019). Designing social research: The logic of anticipation (3rd ed.). Polity Press.

## Practice exercise

### Task

Spar on a rough idea built from the pack: that warming in Central England has accelerated since the 1980s. Then compare the assistant's objections with the issues the changepoint preprint and the HadCET paper actually deal with.

### Prompt

```text
I am a postgraduate researcher planning a short study. My rough idea: the Central England Temperature series shows that warming in England has accelerated since the 1980s, and I want to date that change statistically. Act as a critical but fair supervisor. First, give three alternative research questions: one narrower, one broader, one from a different angle, each with one sentence on what it would add. Second, list the assumptions my idea takes for granted – about the data, the method and the causes. Third, give the three strongest objections a reviewer might raise, and one possible counter-position for each. Keep it under 350 words. Do not cite literature unless you are sure it exists.
```

### Check

Open the Shi et al. (2021) preprint: does it address the assistant's objections – autocorrelation or long memory, choice of penalty, timing (1987/1988)? Did the assistant raise station changes and urban adjustment, which Legg et al. (2025) document?

## Own material

### Bring

A rough research idea of your own in two or three sentences, nothing confidential.

### Steps

1. Paste your idea and ask your AI assistant to act as a critical supervisor.
2. Ask for alternative research questions with different scope or angle.
3. Ask for hidden assumptions and the strongest objections to your idea.
4. Pick one objection and ask how you could answer it.

### Prompt

```text
I am a postgraduate researcher in [discipline]. My rough research idea is: [idea]. Act as a critical but fair supervisor. First, give three alternative research questions: one narrower, one broader, one from a different angle, each with one sentence on what it would add. Second, list the assumptions my idea takes for granted. Third, give the three strongest objections a reviewer might raise, and one possible counter-position. Keep it under 350 words. Do not cite literature unless you are sure it exists.
```

### Check

You find at least one alternative question or objection you had not considered and that you could support or rebut with literature you know.

## Technology

A plain chat is enough: paste your idea with a role prompt, then continue the dialogue. The deep-research agent skill offers a Socratic mode for coding assistants (e.g. GitHub Copilot in VS Code) that questions you step by step.

## Levels

### Chat

Run the starter prompt with your rough idea in one chat. In the same chat, pick the objection that worries you most, ask the assistant to press it harder, then ask for the strongest reply you could give.

### Project / Notebook

Add a one-page note on your idea, your supervisor's comments, two or three key papers (practice: C6 and B1) and a short rules document – 'act as a critical but fair supervisor, no invented literature'. Ask which objections the papers already answer. Each round stays as a page, so you see how the idea changes.

### Custom assistant

Call it 'Critical supervisor'. Instructions: the three parts of the starter prompt – alternative questions (narrower, broader, different angle), hidden assumptions, three strongest objections with counter-positions – under 350 words, no literature unless it is sure it exists, and never choose the direction for you. No knowledge or code needed. Starter prompts: 'Challenge this idea', 'Act as reviewer 2 on my revised question'. Reusable for every new idea or revision.
