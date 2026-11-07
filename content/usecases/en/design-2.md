---
id: design-2
phase: design
order: 2
title: Pre-testing with synthetic personas
risk: 2
mode: Assist
potential: 2
capabilities: generierung; analyse
routes: chat
---

Test instruments with simulated respondents for comprehension issues – as a supplement to real pre-tests, never a replacement.

## Problem

Cognitive pre-tests with real respondents are slow to arrange, so obvious comprehension problems often reach the pilot and use up scarce participants.

## Result

A list of hypothesised misreadings per item, sorted by response stage, that sharpens the probes for your real cognitive interviews. Simulated answers are not data and must never be reported as a pre-test.

## Steps

1. Describe your target population and how it varies
2. Ask for four simulated respondents thinking aloud per item
3. Sort problems into comprehension, retrieval, judgement and response
4. Turn each issue into a probe for real cognitive interviews
5. Report only the real pre-test and declare AI-assisted preparation

## Concepts

### Cognitive interviewing (Willis)

Pre-testing method in which real respondents answer draft items while thinking aloud or answering verbal probes such as 'What does this term mean to you?'. It runs in small iterative rounds, often 5–15 interviews each. Personas can only prepare it.

### Think-aloud versus verbal probing

Think-aloud asks respondents to voice their reasoning unprompted; verbal probing uses scripted or spontaneous follow-ups (comprehension, paraphrase, confidence, recall probes). Probing is easier to standardise and suits most survey pre-tests.

### Four-stage response model (Tourangeau)

Comprehension, retrieval, judgement and response mapping. Coding each suspected problem by stage tells you what to probe and how to fix it, whether the problem came from a persona or a real respondent.

### Synthetic respondents ('silicon samples')

Language-model personas conditioned on demographic descriptions. Argyle et al. (2023) report correspondence with some human response patterns; other studies find reduced variance and stereotyped answers. Persona output is not evidence about your population.

## References

- Willis, G. B. (2005). Cognitive interviewing: A tool for improving questionnaire design. Sage.
- Tourangeau, R., Rips, L. J., & Rasinski, K. (2000). The psychology of survey response. Cambridge University Press.
- Argyle, L. P., Busby, E. C., Fulda, N., Gubler, J. R., Rytting, C., & Wingate, D. (2023). Out of one, many: Using language models to simulate human samples. Political Analysis, 31(3), 337–351. doi:10.1017/pan.2023.2

## Own material

### Bring

Five to eight draft survey items on a non-sensitive topic and a short description of your target population.

### Steps

1. Paste your items and describe the target population.
2. Ask the assistant to simulate four varied respondents thinking aloud about each item.
3. Ask for a summary of comprehension problems by item.
4. Decide which issues to test in a real cognitive pre-test.

### Prompt

```text
I am preparing a pre-test of a questionnaire on [topic] for [population]. Simulate four varied respondents from this population (differing in age, background and reading level). For each, think aloud briefly about each item below: how they understand it and where they hesitate or misread it. Then give a table: item number, comprehension problem, how many personas had it, suggested fix. These are simulated respondents to prepare a real pre-test, not data.

[paste items]
```

### Check

Each flagged problem points to actual wording in your item; treat the personas as the model's assumptions, not real people, and never report them as pre-test data or use them instead of a real pre-test.

## Technology

Paste the items into your AI assistant (e.g. Copilot, ChatGPT, Claude or Gemini) and ask it to role-play varied respondents; treat the output as hypotheses for probes, never as data. Do not report it as a pre-test, and declare AI-assisted preparation where your institution requires it.

## Levels

### Chat

Run the starter prompt with your items and target population. In the same chat, ask which three items most need a probe in your real cognitive interviews, and draft that probe for each.

### Project / Notebook

Add your questionnaire draft, the population description, your cognitive interview protocol and, later, your notes from the real pre-tests. Ask where the simulated misreadings matched or missed what real respondents did. Kept side by side, this shows over time how far persona tests help for your population.

### Custom assistant

Call it 'Pre-test planner'. Instructions: simulate four varied personas, sort misreadings by response stage (comprehension, retrieval, judgement, response), give a table with suggested probes, and label every output 'simulated – not data, not a pre-test'. Knowledge: a short description of your population. Starter prompt: 'Pre-test these items for [population]: [paste]'. Reusable for every revised version before each real pre-test round.
