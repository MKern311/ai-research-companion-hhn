---
name: experimental-stimuli-and-instruments
description: "Generate matched materials for each condition of an experiment – e.g. case vignettes, a message in two framings, a mock web page or news feed – and draft the study flow with randomisation and variable names for your survey tool. Use when the user works on: Experimental stimuli & instruments."
---

# Experimental stimuli & instruments

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/design-7

## Goal

Generate matched materials for each condition of an experiment – e.g. case vignettes, a message in two framings, a mock web page or news feed – and draft the study flow with randomisation and variable names for your survey tool.

Matched stimuli for every condition, a manipulation check and a study flow with variable names that you set up in your survey tool – faster to build, easier to keep conditions equivalent, and an export that goes straight into your analysis.

## When to use

Building realistic stimuli for each condition – vignettes, framed messages, mock web pages or feeds – and wiring them into a survey with randomisation takes weeks, and small unintended differences between conditions confound the results.

## Procedure

1. State the manipulated factor, its levels and what must stay identical across conditions.
2. Ask the assistant for the stimulus texts or a simple HTML mock-up per condition, plus a manipulation check.
3. Ask for the survey flow: consent, random assignment, stimulus, measures, debrief – with variable names.
4. Compare the conditions side by side: only the manipulated element may differ.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.
- Call it 'Stimulus builder' and switch on code execution / file creation if your tool offers it, so it returns HTML files. Instructions: keep conditions identical except the manipulated element, list every difference, quote the source of any factual claim, add a manipulation check and a study flow with variable names, use no real organisations, brands, people or logos. Starter prompt: 'Build conditions [A] and [B] for: [hypothesis]'. Reusable for every follow-up experiment.

## Starter prompt

```text
I am planning a between-subjects experiment in [discipline]. Hypothesis: [e.g. a message framed as a loss changes intentions more than the same message framed as a gain]. Manipulated factor: [factor] with the levels [level A] and [level B]. Outcome measures: [measures]. 1) Create the stimulus for each condition: [e.g. a short case vignette, a public information message or a mock web page, as a single self-contained HTML page]. Keep everything identical except the manipulated element and list every difference between the conditions. 2) Write one manipulation-check question. 3) Draft the full study flow for a survey tool – consent, random assignment, stimulus, measures, manipulation check, demographics, debrief – as a table with variable names and coding, so the export can be analysed directly. Use no real organisations, brands, people or logos.
```

## Quality check

Put the conditions side by side: apart from the manipulated element, texts, images, layout and length must be identical; the variable names in the flow must match what your analysis plan expects.

## Limits

- Stimuli need ethics approval, a debrief when they mislead, and labelling of AI-generated images; check copyright and platform terms, use fictional names and organisations, and pilot the realism with real people before the main study.
- Risk: Your own unpublished drafts, reviews or third-party content.

## Key concepts

- **Experimental manipulation and control** – Conditions should differ only in the manipulated factor; every other difference is a confound. Random assignment balances participant characteristics across conditions in expectation.
- **Manipulation check** – A measure of whether participants perceived the manipulation as intended. Useful in pilots; in the main study it can itself influence responses, so place and use it deliberately (Hauser et al., 2018).
- **Vignettes and mock environments** – Systematically varied descriptions or simulated settings such as a social media feed, combining control with realism. Factorial vignette designs vary several factors at once (Atzmüller & Steiner, 2010).
- **Stimulus sampling** – One stimulus per condition confounds the manipulation with that stimulus' quirks; several stimuli per condition support generalisation beyond the specific material (Wells & Windschitl, 1999).
- **Deception and debriefing** – If stimuli mislead – fictional posts, fake ads – ethics guidance requires justification, minimal deception and a debrief; AI-generated material should be labelled as such in the study record.

## Key references

- Hauser, D. J., Ellsworth, P. C., & Gonzalez, R. (2018). Are manipulation checks necessary? Frontiers in Psychology, 9, 998. https://doi.org/10.3389/fpsyg.2018.00998
- Atzmüller, C., & Steiner, P. M. (2010). Experimental vignette studies in survey research. Methodology, 6(3), 128–138. https://doi.org/10.1027/1614-2241/a000014
- Wells, G. L., & Windschitl, P. D. (1999). Stimulus sampling and social psychological experimentation. Personality and Social Psychology Bulletin, 25(9), 1115–1125. https://doi.org/10.1177/01461672992512005

## Tools that help

GitHub (repositories) · Figma
