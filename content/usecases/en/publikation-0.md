---
id: publikation-0
phase: publikation
order: 0
title: Structure & line of argument
risk: 2
mode: Co-create
potential: 3
capabilities: synthese; analyse
routes: chat; files; external
repos: ars-paper; kd-writing
data: B3
practice_data: B3
---

Check the narrative thread, uncover gaps in the argument and adapt the structure to journal conventions.

## Problem

You know your argument too well to see it from outside – a missing warrant, an unstated limitation or a section in the wrong place often only surfaces in peer review.

## Result

A three-sentence summary to test against your intent, a Toulmin map of claim, grounds, warrant and qualifiers with weak links marked, and a structure matched to the journal.

## Steps

1. Write a reverse outline: one sentence stating each section's point
2. Ask the assistant to map your argument as Toulmin elements
3. Check the introduction moves from territory to gap to aim
4. Fix the weakest warrant before polishing any wording
5. Check the structure against the journal's author guidelines

## Concepts

### Toulmin model of argument

Breaks an argument into claim, grounds (evidence), warrant (why the evidence supports the claim), backing, qualifier (how strongly) and rebuttal (when it would not hold). Use it to find steps you assume but never state.

### CARS model (Swales)

Create a Research Space: introductions typically make three moves – establish the territory, establish a niche (gap or problem), occupy the niche (aim, questions, contribution). Use it to test whether your introduction leads to your research question.

### IMRaD

Introduction, Methods, Results and Discussion – the dominant structure for empirical articles across fields. Journals vary it (combined Results and Discussion, methods at the end), so the author guidelines decide.

### Reverse outlining

Write one sentence per paragraph or section stating its point, then read only these sentences in order. Gaps, jumps and repetition become visible before you edit the prose.

## References

- Toulmin, S. E. (2003). The uses of argument (Updated ed.). Cambridge University Press.
- Swales, J. M. (1990). Genre analysis: English in academic and research settings. Cambridge University Press.

## Practice exercise

### Task

Map the argument of the Vautard et al. (2023) paper as a Toulmin structure and find the CARS moves in its introduction. You learn whether the assistant keeps the authors' hedged alternative explanations or flattens them into one certain claim.

### Prompt

```text
Attached is the Vautard et al. (2023) PDF on heat extremes in Western Europe. Treat it as a draft I want to test before submission. 1) Summarise the central argument in three sentences. 2) Map the argument as a Toulmin structure: claim, grounds (the evidence), warrant (why the evidence supports the claim), qualifiers and rebuttals. Quote the sentence each element is based on. 3) Mark any step that is assumed rather than shown. 4) Identify the three CARS moves in the introduction – establishing the territory, establishing the niche, occupying the niche – quoting one sentence for each. Do not rewrite the text; refer to section headings and quote exactly.
```

### Check

Compare with the abstract: the claim should keep 0.8 °C [0.2–1.4 °C] of 3.4 °C per degree of global warming, and both explanations (underestimated circulation response, underestimated low-frequency variability) should appear as qualifiers.

## Own material

### Bring

The abstract and section headings, or a one- to two-page extended outline, of your own paper or chapter, and the name of a target journal.

### Steps

1. Paste the starter prompt with your outline and target journal.
2. Compare the three-sentence summary with what you mean to argue.
3. Ask for one concrete fix for the weakest step in the argument.
4. Check the suggested structure against the journal's author guidelines.

### Prompt

```text
I am writing a [paper or thesis chapter] in [discipline] for [target journal]. Below is my [abstract and outline]. 1) Summarise my central argument in three sentences. 2) Map the line of argument step by step and mark where a step is missing, assumed or not supported by the evidence described. 3) Suggest changes to the structure to fit a typical [article type, e.g. empirical IMRaD] article in this journal. Be specific and refer to my section headings. Do not rewrite my text. Text: [paste text]
```

### Check

The three-sentence summary matches what you intend to argue; where it does not, the gap shows you where your text is unclear.

## Technology

Paste the abstract and outline into your AI assistant, or upload the draft as Word or PDF; for a fuller outline-and-evidence workflow, the academic-paper skill runs in a coding assistant in your editor (e.g. GitHub Copilot in VS Code, Claude Code).

## Levels

### Chat

Run the starter prompt with the Vautard PDF attached. Then, in the same chat, ask which step of the argument is weakest and for one concrete fix, without rewriting the text.

### Project / Notebook

Add the Vautard paper (B3) or, for your own work, your draft, outline, the target journal's author guidelines and two exemplary papers from that journal. Ask how your structure differs from the exemplars and guidelines. After each revision you add the new version and compare the argument maps.

### Custom assistant

In Instructions, set the routine: three-sentence summary, Toulmin map with a quote for each element, steps assumed rather than shown, CARS moves in the introduction, refer to section headings and never rewrite the text. Add your target journal's author guidelines as Knowledge. Starter prompt: "Map the argument of this draft and mark the weakest step." Reusable for every paper and chapter.
