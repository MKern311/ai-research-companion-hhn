---
name: pre-testing-with-synthetic-personas
description: "Test instruments with simulated respondents for comprehension issues – as a supplement to real pre-tests, never a replacement. Use when the user works on: Pre-testing with synthetic personas."
---

# Pre-testing with synthetic personas

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/design-2

## Goal

Test instruments with simulated respondents for comprehension issues – as a supplement to real pre-tests, never a replacement.

A list of hypothesised misreadings per item, sorted by response stage, that sharpens the probes for your real cognitive interviews. Simulated answers are not data and must never be reported as a pre-test.

## When to use

Cognitive pre-tests with real respondents are slow to arrange, so obvious comprehension problems often reach the pilot and use up scarce participants.

## Workflow with the user

Guide the user through these steps. Where a step says “ask the assistant”, that is you.

1. Paste your items and describe the target population.
2. Ask the assistant to simulate four varied respondents thinking aloud about each item.
3. Ask for a summary of comprehension problems by item.
4. Decide which issues to test in a real cognitive pre-test.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.

## Typical request

```text
I am preparing a pre-test of a questionnaire on [topic] for [population]. Simulate four varied respondents from this population (differing in age, background and reading level). For each, think aloud briefly about each item below: how they understand it and where they hesitate or misread it. Then give a table: item number, comprehension problem, how many personas had it, suggested fix. These are simulated respondents to prepare a real pre-test, not data.

[paste items]
```

## Quality check

Each flagged problem points to actual wording in your item; treat the personas as the model's assumptions, not real people, and never report them as pre-test data or use them instead of a real pre-test.

## Limits

- Risk: Your own unpublished drafts, reviews or third-party content.

## Key concepts

- **Cognitive interviewing (Willis)** – Pre-testing method in which real respondents answer draft items while thinking aloud or answering verbal probes such as 'What does this term mean to you?'. It runs in small iterative rounds, often 5–15 interviews each. Personas can only prepare it.
- **Think-aloud versus verbal probing** – Think-aloud asks respondents to voice their reasoning unprompted; verbal probing uses scripted or spontaneous follow-ups (comprehension, paraphrase, confidence, recall probes). Probing is easier to standardise and suits most survey pre-tests.
- **Four-stage response model (Tourangeau)** – Comprehension, retrieval, judgement and response mapping. Coding each suspected problem by stage tells you what to probe and how to fix it, whether the problem came from a persona or a real respondent.
- **Synthetic respondents ('silicon samples')** – Language-model personas conditioned on demographic descriptions. Argyle et al. (2023) report correspondence with some human response patterns; other studies find reduced variance and stereotyped answers. Persona output is not evidence about your population.

## Key references

- Willis, G. B. (2005). Cognitive interviewing: A tool for improving questionnaire design. Sage.
- Tourangeau, R., Rips, L. J., & Rasinski, K. (2000). The psychology of survey response. Cambridge University Press.
- Argyle, L. P., Busby, E. C., Fulda, N., Gubler, J. R., Rytting, C., & Wingate, D. (2023). Out of one, many: Using language models to simulate human samples. Political Analysis, 31(3), 337–351. https://doi.org/10.1017/pan.2023.2
