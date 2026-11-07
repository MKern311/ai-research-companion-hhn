---
id: design-7
phase: design
order: 7
title: Experimental stimuli & instruments
risk: 2
mode: Co-create
potential: 3
capabilities: generierung; agentisch
routes: chat; files; external
connect: GitHub (repositories); Figma
repos: truman; mock-social-media
data: B2; C4
practice_data: B2; C4
---

Generate matched materials for each condition of an experiment – e.g. case vignettes, a message in two framings, a mock web page or news feed – and draft the study flow with randomisation and variable names for your survey tool.

## Problem

Building realistic stimuli for each condition – vignettes, framed messages, mock web pages or feeds – and wiring them into a survey with randomisation takes weeks, and small unintended differences between conditions confound the results.

## Result

Matched stimuli for every condition, a manipulation check and a study flow with variable names that you set up in your survey tool – faster to build, easier to keep conditions equivalent, and an export that goes straight into your analysis.

## Steps

1. Define the manipulated factor, its levels and everything held constant
2. Generate stimuli per condition and list every difference between them
3. Draft a manipulation check and the study flow with variable names
4. Build the study in your survey tool and pilot realism and manipulation with real people
5. Obtain ethics approval and prepare a debrief

## Concepts

### Experimental manipulation and control

Conditions should differ only in the manipulated factor; every other difference is a confound. Random assignment balances participant characteristics across conditions in expectation.

### Manipulation check

A measure of whether participants perceived the manipulation as intended. Useful in pilots; in the main study it can itself influence responses, so place and use it deliberately (Hauser et al., 2018).

### Vignettes and mock environments

Systematically varied descriptions or simulated settings such as a social media feed, combining control with realism. Factorial vignette designs vary several factors at once (Atzmüller & Steiner, 2010).

### Stimulus sampling

One stimulus per condition confounds the manipulation with that stimulus' quirks; several stimuli per condition support generalisation beyond the specific material (Wells & Windschitl, 1999).

### Deception and debriefing

If stimuli mislead – fictional posts, fake ads – ethics guidance requires justification, minimal deception and a debrief; AI-generated material should be labelled as such in the study record.

## References

- Hauser, D. J., Ellsworth, P. C., & Gonzalez, R. (2018). Are manipulation checks necessary? Frontiers in Psychology, 9, 998. doi:10.3389/fpsyg.2018.00998
- Atzmüller, C., & Steiner, P. M. (2010). Experimental vignette studies in survey research. Methodology, 6(3), 128–138. doi:10.1027/1614-2241/a000014
- Wells, G. L., & Windschitl, P. D. (1999). Stimulus sampling and social psychological experimentation. Personality and Social Psychology Bulletin, 25(9), 1115–1125. doi:10.1177/01461672992512005

## Practice exercise

### Task

Build the two conditions of a framing experiment: a mock news feed on a heatwave with and without an attribution statement taken from the papers. You see whether the assistant keeps the conditions equivalent and the attribution claim faithful to the source.

### Prompt

```text
Attached are Christidis et al. (2020) on UK hot days and Zachariah et al. (2023) on the 2022 heatwave in India and Pakistan. I want to test whether an attribution statement changes how worried readers are about heatwaves. Create two versions of a mock social media news feed as one self-contained HTML page each: six posts from fictional accounts, one of them a post about a heatwave. Condition A: the heatwave post includes one attribution sentence taken faithfully from one of the papers, with its source. Condition B: the same post without that sentence, otherwise word for word identical. List every difference between A and B, quote the source passage for the attribution sentence, and add one manipulation-check question and a three-item worry measure with variable names.
```

### Check

Open both HTML files side by side (if the assistant shows only code, ask it for both as downloadable .html files or copy the code into two .html files yourself): only the attribution sentence may differ. Then find the quoted passage in the PDF – for Zachariah et al. search for '30 times more likely', for Christidis et al. for 'return time of 100-300 years' – and check that the post does not overstate it.

## Own material

### Bring

Your hypothesis with the factor you manipulate and the outcome you measure – or, for the practice version, the attribution papers B2 and C4.

### Steps

1. State the manipulated factor, its levels and what must stay identical across conditions.
2. Ask the assistant for the stimulus texts or a simple HTML mock-up per condition, plus a manipulation check.
3. Ask for the survey flow: consent, random assignment, stimulus, measures, debrief – with variable names.
4. Compare the conditions side by side: only the manipulated element may differ.

### Prompt

```text
I am planning a between-subjects experiment in [discipline]. Hypothesis: [e.g. a message framed as a loss changes intentions more than the same message framed as a gain]. Manipulated factor: [factor] with the levels [level A] and [level B]. Outcome measures: [measures]. 1) Create the stimulus for each condition: [e.g. a short case vignette, a public information message or a mock web page, as a single self-contained HTML page]. Keep everything identical except the manipulated element and list every difference between the conditions. 2) Write one manipulation-check question. 3) Draft the full study flow for a survey tool – consent, random assignment, stimulus, measures, manipulation check, demographics, debrief – as a table with variable names and coding, so the export can be analysed directly. Use no real organisations, brands, people or logos.
```

### Check

Put the conditions side by side: apart from the manipulated element, texts, images, layout and length must be identical; the variable names in the flow must match what your analysis plan expects.

### Limit

Stimuli need ethics approval, a debrief when they mislead, and labelling of AI-generated images; check copyright and platform terms, use fictional names and organisations, and pilot the realism with real people before the main study.

## Technology

Your AI assistant writes stimulus texts and self-contained HTML mock-ups and drafts the survey flow; you build the study in your survey tool (e.g. Qualtrics or Microsoft Forms). For realistic interactive feeds, research platforms such as Truman or the Mock Social Media Website Tool log participants' behaviour.

## Levels

### Chat

Run the starter prompt with B2 and C4, or with your own hypothesis. In the same chat, ask for a sentence-by-sentence comparison table of the two conditions, so you can confirm that only the manipulated element differs.

### Project / Notebook

Add the source papers behind your stimuli, your analysis plan or preregistration, and the stimulus texts and study flow from the chat – for the practice version B2 and C4. Ask whether the variable names match the analysis plan and whether every factual claim in a stimulus has a source. Conditions, sources and plan stay together across pilot rounds.

### Custom assistant

Call it 'Stimulus builder' and switch on code execution / file creation if your tool offers it, so it returns HTML files. Instructions: keep conditions identical except the manipulated element, list every difference, quote the source of any factual claim, add a manipulation check and a study flow with variable names, use no real organisations, brands, people or logos. Starter prompt: 'Build conditions [A] and [B] for: [hypothesis]'. Reusable for every follow-up experiment.
