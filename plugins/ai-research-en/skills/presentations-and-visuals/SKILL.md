---
name: presentations-and-visuals
description: "Draft slides, posters, infographics and explanatory graphics from results. Use when the user works on: Presentations & visuals."
---

# Presentations & visuals

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/transfer-1

## Goal

Draft slides, posters, infographics and explanatory graphics from results.

A labelled, colour-safe chart with the Python code behind it, so you can reproduce and check it, and a six-slide outline built on assertion–evidence titles.

## When to use

Turning results into a clear chart and talk takes many iterations, and slides often list topics instead of stating claims backed by visual evidence.

## Procedure

1. Attach the results table and ask for one clear chart of the main result.
2. Ask the assistant to show the Python code it used for the chart.
3. Paste your key findings and ask for a six-slide talk outline.
4. Check two data points in the chart against your table.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.
- Instructions: read wide files with Python and report how blanks and incomplete rows were handled; always show the code; colour-vision-safe palette, labelled axes with units; slide titles as full-sentence claims the data support, never causes the data cannot show. Switch on "Create documents, charts and code". Starter prompts: "Chart this series with a 10-year rolling mean" and "Six-slide outline from this chart". Reusable for every new results file.

## Starter prompt

```text
I am presenting my research to [audience] in a [10-minute] talk. Attached is a results table [file name]; my key findings are: [paste findings]. 1) Create one clear chart of [variable] by [group] with labelled axes, units and a short title, and show the Python code you used. 2) Draft a six-slide outline: each slide title is a full-sentence message, with up to three bullet points and a note on which visual to use. Use only the numbers in the file and my findings; if a column is unclear, ask me.
```

## Quality check

Two or three values in the chart match your table exactly, and the slide titles say what your findings actually show.

## Limits

- The assistant drafts the chart and the slide outline; building the final slides or poster is done by you in PowerPoint or your slide tool.
- Risk: Your own unpublished drafts, reviews or third-party content.

## Key concepts

- **Assertion–evidence slide structure** – Each slide headline is a full-sentence claim, and the body is visual evidence for it (chart, image, diagram) rather than a bullet list. Garner, Alley and colleagues (2011) found better comprehension and recall of complex concepts than with topic-and-bullet slides.
- **Data-ink ratio** – Tufte's principle: maximise the share of ink that shows data and remove decoration – heavy gridlines, 3D effects, redundant labels, 'chartjunk'.
- **Colour-vision-safe, perceptually uniform colour maps** – Rainbow ('jet') colour maps distort data and exclude readers with colour-vision deficiency. Use perceptually uniform maps such as viridis or scientific colour maps (Crameri et al. 2020), and never encode meaning in colour alone.
- **Reproducible figures** – Generate every chart by code from the data file and keep code and data together, so values can be checked and the figure regenerated after changes (Rougier et al. 2014).

## Key references

- Garner, J., Alley, M., Wolfe, K., Zappe, S., & Sawarynski, L. (2011). Assertion-evidence slides appear to lead to better comprehension and recall of more complex concepts. In 2011 ASEE Annual Conference & Exposition Proceedings. ASEE. https://doi.org/10.18260/1-2--17510
- Crameri, F., Shephard, G. E., & Heron, P. J. (2020). The misuse of colour in science communication. Nature Communications, 11, 5444. https://doi.org/10.1038/s41467-020-19160-7
- Rougier, N. P., Droettboom, M., & Bourne, P. E. (2014). Ten simple rules for better figures. PLOS Computational Biology, 10(9), e1003833. https://doi.org/10.1371/journal.pcbi.1003833
- Tufte, E. R. (2001). The visual display of quantitative information (2nd ed.). Graphics Press.

## Tools that help

Napkin AI
