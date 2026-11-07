---
id: idee-2
phase: idee
order: 2
title: Structured operationalisation
risk: 1
mode: Co-create
potential: 2
capabilities: generierung; synthese
routes: chat; files; external
tools: Scholar GPT
repos: ars-deep-research
data: D1; B2
practice_data: D1
practice_ref: B2
---

Structure questions with established frameworks (e.g. PICO, PICOC, SPIDER, PEO), derive sub-questions and search terms per element, sharpen the constructs and test the question against FINER.

## Problem

A question that sounds clear in conversation often fails when you try to search or measure it: framework elements are missing, constructs undefined, scope unrealistic for your time and data.

## Result

Your question mapped to a fitting framework (PICO, PICOC, PEO or SPIDER), with sub-questions, search terms, operational definitions and a FINER rating – a direct bridge to search strategy and study design.

## Steps

1. Paste your draft question and name your discipline
2. Let your AI assistant justify a framework, then break the question down
3. Check which elements it assumed rather than took from you
4. Rate the question against FINER yourself
5. Rewrite vague constructs as operational definitions

## Concepts

### PICO and PICOC

Population, Intervention, Comparison, Outcome – for questions about the effect of an intervention. PICOC adds Context (setting, place, time) and is widely used beyond health, for example in social science and software engineering reviews.

### PEO

Population, Exposure, Outcome – for questions about associations, risk factors or consequences of an exposure where nothing is deliberately applied, as in observational and aetiological research.

### SPIDER

Sample, Phenomenon of Interest, Design, Evaluation, Research type – for qualitative and mixed-methods questions about experiences and views (Cooke et al., 2012). More specific than PICO, so searches built on it can miss relevant studies (Methley et al., 2014).

### FINER criteria

Feasible, Interesting, Novel, Ethical, Relevant – a checklist for judging a research question before committing to it (Hulley et al.). Feasibility covers sample or data access, time, skills and cost.

### Operational definition

States how an abstract construct will be observed or measured – indicator, instrument, threshold, unit. Separating the conceptual definition (what it means) from the measurement (how you record it) makes validity checkable.

## References

- Petticrew, M., & Roberts, H. (2006). Systematic reviews in the social sciences: A practical guide. Blackwell.
- Cooke, A., Smith, D., & Booth, A. (2012). Beyond PICO: The SPIDER tool for qualitative evidence synthesis. Qualitative Health Research, 22(10), 1435–1443. doi:10.1177/1049732312452938
- Hulley, S. B., Cummings, S. R., Browner, W. S., Grady, D. G., & Newman, T. B. (2013). Designing clinical research (4th ed.). Lippincott Williams & Wilkins.
- Methley, A. M., Campbell, S., Chew-Graham, C., McNally, R., & Cheraghi-Sohi, S. (2014). PICO, PICOS and SPIDER: A comparison study of specificity and sensitivity in three search tools for qualitative systematic reviews. BMC Health Services Research, 14, 579. doi:10.1186/s12913-014-0579-0

## Practice exercise

### Task

Operationalise a practice question on UK heat, then compare the assistant's framework elements with how Christidis et al. (2020) defined exposure, comparison and outcome – and test whether its definition of a hot day can be counted in the daily CET file.

### Prompt

```text
I am a postgraduate researcher. My draft research question is: 'How has human-caused climate change affected the chance of very hot days in the UK?' Suggest the most suitable framework for structuring it (PICO, PICOC, PEO or SPIDER) and explain in two sentences why it fits better than the others. Then show a table: framework element, the part of my question it covers, what is still missing or unclear, and three search terms or synonyms. Mark any element you had to assume. Propose three sub-questions, each linked to one element. Rate the question against FINER with one reason per criterion. Finally, define 'very hot day' operationally in two ways and say whether each could be counted in the attached HadCET daily maximum file.
```

### Check

Compare with Christidis et al. (2020): outcome as exceeding 30, 35 and 40 °C somewhere in the UK, comparison as a world without human influence, HadUK-Grid observations and CMIP5 models. Validity gap: the CET file is a regional average for a triangle of central England, not the UK maximum. 40 °C never occurs in it (highest value 37.3 °C on 19 July 2022). Did the assistant notice that a threshold counted in this file measures something different from the paper's outcome?

## Own material

### Bring

A draft research question of your own in one or two sentences.

### Steps

1. Paste your research question and name your discipline.
2. Ask which framework fits best (PICO, PICOC, PEO, SPIDER or other) and why.
3. Ask for the question broken down into the framework's elements, with sub-questions and English search terms per element.
4. Ask for a FINER check and which constructs are vague.

### Prompt

```text
I am a postgraduate researcher in [discipline]. My draft research question is: [question]. Suggest the most suitable framework for structuring it (for example PICO, PICOC, PEO or SPIDER) and explain in two sentences why it fits better than the others. Then show a table: framework element, the part of my question it covers, what is still missing or unclear, and three English search terms or synonyms. Mark any element you had to assume rather than take from my question. Next, propose three to five sub-questions, each linked to one element. Rate the question briefly against FINER (feasible, interesting, novel, ethical, relevant), giving one reason per criterion. Finally, list the key constructs, say which are vague, and propose a working definition and one possible way to measure or observe each.
```

### Check

Every element in the table maps to words actually in your question, assumed elements are marked, the FINER reasons refer to your project rather than to research in general, and each working definition can be measured with data you can actually get.

## Technology

A plain chat with the starter prompt is enough; ask for the output as a table you can copy into Word. For practice, attach the HadCET daily maximum file (D1). The deep-research skill runs a comparable FINER-based question brief in coding assistants such as GitHub Copilot.

## Levels

### Chat

Attach the HadCET daily file (D1) and run the starter prompt. In the same chat, ask the assistant to write and run Python that counts how many days in the file meet each of its two 'very hot day' definitions – if it cannot run code, run the script yourself – and to say what that count does and does not measure.

### Project / Notebook

Add your draft question, a library guide on PICO, PEO or SPIDER, the paper whose design you build on (practice: B2) and a description of your data (D1 is .txt and works directly). Ask how each framework element and construct maps to the paper and the data. When the question changes, you rerun the same check against the same sources.

### Custom assistant

Call it 'Question framer'. Instructions: choose and justify a framework, give the element table with missing parts and three search terms each, mark assumed elements, link sub-questions to elements, rate FINER with project-specific reasons, and propose measurable working definitions. Switch on code execution / data analysis if your tool offers it and definitions should be tested on data. Starter prompt: 'Frame this question and test it against FINER.' Reusable for every new draft question.
