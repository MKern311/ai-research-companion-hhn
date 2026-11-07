---
id: literatur-9
phase: literatur
order: 9
title: Quality appraisal of studies
risk: 3
mode: Co-create
potential: 3
capabilities: analyse
routes: files; external
tools: Covidence
data: C1
practice_data: C1
---

Appraise each study with an established checklist (e.g. CASP, MMAT, JBI), criterion by criterion with the supporting passage – the judgement stays yours.

## Problem

Appraising studies item by item is slow, and judgements drift between papers or rest on a general impression rather than on what the paper actually reports.

## Result

A completed design-appropriate checklist with a rating and supporting passage per item – your own judgement, faster to document and easier to defend. The final rating stays yours.

## Steps

1. Choose a checklist that matches the study design
2. Rate two or three items yourself first
3. Attach the PDF and ask for item-by-item ratings
4. Look up every quoted passage and settle differences
5. Report ratings per item, not a single summary score

## Concepts

### Appraisal vs risk of bias vs reporting

Critical appraisal judges trustworthiness, results and relevance; risk-of-bias tools (for example RoB 2 for randomised trials) target systematic error; reporting guidelines (for example CONSORT, STROBE) only check what is described. Do not mix them up.

### CASP and JBI checklists

Design-specific checklists from the Critical Appraisal Skills Programme and from JBI (formerly the Joanna Briggs Institute), for example for qualitative, cohort or cross-sectional studies. Items are answered yes, no or can't tell.

### MMAT 2018

Mixed Methods Appraisal Tool: two screening questions plus five criteria for each of five designs – qualitative, randomised, non-randomised, quantitative descriptive and mixed methods. Its authors discourage an overall score; report ratings per criterion.

### GRADE

Grading of Recommendations, Assessment, Development and Evaluations rates the certainty of a body of evidence per outcome, from high to very low, considering risk of bias, inconsistency, indirectness, imprecision and publication bias.

### Fit of tool to design

Most checklists come from health and social research. For designs they do not cover – modelling, observational time series, computational studies – use a field standard or justify adapted criteria with your supervisors.

## References

- Hong, Q. N., Fàbregues, S., Bartlett, G., Boardman, F., Cargo, M., Dagenais, P., Gagnon, M.-P., Griffiths, F., Nicolau, B., O’Cathain, A., Rousseau, M.-C., Vedel, I., & Pluye, P. (2018). The Mixed Methods Appraisal Tool (MMAT) version 2018 for information professionals and researchers. Education for Information, 34(4), 285–291. doi:10.3233/EFI-180221
- Guyatt, G. H., Oxman, A. D., Vist, G. E., Kunz, R., Falck-Ytter, Y., Alonso-Coello, P., Schünemann, H. J., & GRADE Working Group. (2008). GRADE: An emerging consensus on rating quality of evidence and strength of recommendations. BMJ, 336(7650), 924–926. doi:10.1136/bmj.39489.470347.AD

## Practice exercise

### Task

Ask your AI assistant to appraise an observational heatwave-trend study. You learn whether it notices that clinical and social-science checklists fit this design poorly, and whether it marks items 'can't tell' or forces ratings.

### Prompt

```text
I am appraising studies for a literature review. The attached paper (Perkins-Kirkpatrick and Lewis 2020) is an observational analysis of regional heatwave trends based on a gridded temperature dataset. Suggest the most suitable established appraisal checklist and explain in two sentences how well it fits this design. If none fits well, say so and use five adapted criteria instead: data source quality, heatwave definition, trend method, treatment of variability, reporting of uncertainty. Go through the criteria item by item: item, rating (yes, no, can't tell), the exact passage with page or section, and a one-line comment. Use 'can't tell' when the paper does not report enough; do not infer. Summarise strengths and concerns in three sentences, without an overall score.
```

### Check

The paper uses the Berkeley Earth dataset and defines a heatwave as at least three consecutive days above the 90th percentile of daily maximum temperature (CTX90). A clinical checklist applied without comment on its fit is a warning sign.

## Own material

### Bring

One open-access empirical paper as a PDF and the name of the appraisal checklist your field uses (for example CASP, MMAT or JBI) – or let the assistant suggest one.

### Steps

1. Attach the paper and name the study design and checklist.
2. Ask for each checklist item with a rating and the supporting passage.
3. Rate the paper yourself on two or three items first.
4. Compare and look up every passage the assistant quotes.

### Prompt

```text
I am appraising studies for a literature review in [discipline]. The attached paper is a [study design]. Use [checklist, e.g. CASP for qualitative studies, MMAT for mixed studies, JBI for the design] – or, if I have not named one, suggest the most suitable established checklist and say why. Go through the checklist item by item: item, rating (yes, no, can't tell), the exact passage with page or section that supports the rating, and a one-line comment. Use 'can't tell' when the paper does not report enough; do not infer. Finally, summarise the main strengths and concerns in three sentences, without giving an overall score.
```

### Check

Every quoted passage is in the paper at the place given, and on the items you rated yourself any disagreement can be explained.

### Limit

Appraisal is a judgement that has to be yours (often with a second reviewer); checklists differ by design and field, so use the one your supervisors or guidelines expect.

## Technology

Upload the PDF to your AI assistant and name the checklist; paste its items if the checklist is less common. Covidence offers appraisal forms that a whole review team can share.

## Levels

### Chat

Rate two criteria yourself, then attach Perkins-Kirkpatrick and Lewis (C1) and run the starter prompt. In the same chat, ask the assistant to back every 'yes' with the exact passage or change it to 'can't tell'.

### Project / Notebook

Add the checklists your field uses (for example CASP, MMAT or JBI as PDF), the studies you appraise (practice: C1) and your own appraisal notes. Ask for item-by-item ratings with passages and check that judgements stay consistent across papers. Only approved, non-sensitive material goes in, and the final rating is always yours.

### Custom assistant

Call it 'Appraisal assistant'. Instructions: name and justify a checklist for the design, or say none fits and use adapted criteria; go item by item with yes, no or can't tell, the exact passage with page and a one-line comment; never infer, never give an overall score. Knowledge: the checklists you use. Starter prompt: 'Appraise this study with [checklist].' Only approved material; a human makes every rating.
