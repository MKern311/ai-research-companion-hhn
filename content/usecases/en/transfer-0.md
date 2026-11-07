---
id: transfer-0
phase: transfer
order: 0
title: Audience-specific formats
risk: 1
mode: Co-create
potential: 3
capabilities: generierung; synthese
routes: files; external
tools: Gemini Notebook (formerly NotebookLM); Napkin AI
data: B2
practice_data: B2
---

Derive lay summaries, policy briefs, blog posts or social media posts from a paper.

## Problem

Writing a lay summary, policy brief and social post for each paper takes time, and simplifying invites spin – causal, general or certain claims the paper does not make.

## Result

Three first drafts for different audiences, with numbers, conditions and uncertainty kept exact and every simplification listed – quicker outreach that you check claim by claim against the paper.

## Steps

1. Upload the paper and name one audience
2. Ask for a lay summary and a policy brief outline
3. Derive a short social post from the summary
4. Check numbers, conditions and uncertainty terms against the paper

## Concepts

### Plain-language summary

A short, jargon-free account of the question, approach, main finding and what it means, written for non-specialists. Keep the paper's uncertainty and conditions; explain one technical term rather than remove it.

### Spin and exaggeration

Reporting that makes findings look stronger, more causal or more general than the study supports. Sumner et al. traced much exaggeration in health news to press releases; check claim strength, causal wording and generalisation.

### Calibrated uncertainty language

The IPCC uses fixed likelihood terms – for example 'likely' for 66–100 % and 'very likely' for 90–100 % probability – plus confidence levels. A model for keeping uncertainty explicit when simplifying in any field.

### Policy brief structure

One to two pages, conclusions first (inverted pyramid): the problem, key findings, implications and a few concrete, feasible recommendations, with a source for each finding.

## References

- Sumner, P., Vivian-Griffiths, S., Boivin, J., Williams, A., Venetis, C. A., Davies, A., Ogden, J., Whelan, L., Hughes, B., Dalton, B., Boy, F., & Chambers, C. D. (2014). The association between exaggeration in health related science news and academic press releases: Retrospective observational study. BMJ, 349, g7015. doi:10.1136/bmj.g7015
- Mastrandrea, M. D., Field, C. B., Stocker, T. F., Edenhofer, O., Ebi, K. L., Frame, D. J., Held, H., Kriegler, E., Mach, K. J., Matschoss, P. R., Plattner, G.-K., Yohe, G. W., & Zwiers, F. W. (2010). Guidance note for lead authors of the IPCC Fifth Assessment Report on consistent treatment of uncertainties. Intergovernmental Panel on Climate Change.

## Practice exercise

### Task

Produce a lay summary, policy brief outline and social post from the Christidis et al. (2020) paper for council officers. You learn whether the assistant keeps conditions such as 'without mitigation' and the meaning of a return time when it simplifies.

### Prompt

```text
Attached is the Christidis et al. (2020) PDF on temperatures above 30 to 40 °C in the United Kingdom. Write for local council officers responsible for heat adaptation: 1) a lay summary of about 150 words in plain UK English, explaining 'return time' in one sentence; 2) an outline for a one-page policy brief with the problem, key findings and three practical recommendations; 3) a social media post of up to 60 words. Use only findings stated in the paper, keep numbers and their conditions exact (for example emission scenarios), keep uncertainty words such as 'likely', and do not make results sound stronger or more general than the paper does. List every point where you simplified.
```

### Check

Compare with the abstract: summers with 40 °C days have a return time of 100–300 years at present, falling to 3.5 years by 2100 only without mitigating emissions. Wording such as 'every few years from now on' is spin.

## Own material

### Bring

One of your published open-access papers, or an open-access paper from your field, as a PDF or its abstract and key findings.

### Steps

1. Attach the paper and name your target audience.
2. Ask for a 150-word lay summary and a one-page policy brief outline.
3. Ask for one short social media post based on the lay summary.
4. Compare every number and claim with the paper.

### Prompt

```text
I am a researcher in [discipline]. Attached is my paper [title]. Write for [audience, e.g. local council officers or the general public]: 1) a lay summary of about 150 words in plain English, without jargon; 2) an outline for a one-page policy brief with the problem, key findings and three practical recommendations; 3) a social media post of up to 60 words. Use only findings stated in the paper, keep numbers exact, and do not make the results sound stronger or more general than the paper does. List any point where you had to simplify.
```

### Check

Every number and claim in the outputs can be found in the paper, and no finding is stated more strongly or more broadly than in the original.

## Technology

Upload the open-access PDF to your AI assistant and ask for all three formats in one go; Gemini Notebook (formerly NotebookLM) can add an audio overview from the same paper.

## Levels

### Chat

Run the starter prompt with the paper attached. In the same chat, ask the assistant to check its three drafts against the paper and list every sentence that sounds stronger, more general or more certain than the original.

### Project / Notebook

Add B2 as a reference, plus a short rules document with your audiences and the no-spin rules (keep numbers, conditions and uncertainty words). Ask for each format and keep the approved versions as saved notes. For your own work, add each new paper and your earlier approved summaries, so new formats stay consistent with what you have already published.

### Custom assistant

Instructions: the three formats with word limits, numbers and conditions kept exact, uncertainty words kept, a list of every simplification, never a claim the paper does not make. No Knowledge needed – attach each paper in the chat. Starter prompts: "Lay summary, brief outline and post for council officers" and "Check this draft for spin against the paper". Reusable for every new paper.
