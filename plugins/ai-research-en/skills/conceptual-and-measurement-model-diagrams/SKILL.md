---
name: conceptual-and-measurement-model-diagrams
description: "Turn your theory into a conceptual or measurement model diagram – constructs, paths and, where needed, survey items – as editable draw.io or Figma content you update with the literature instead of redrawing it. Use when the user works on: Conceptual & measurement model diagrams."
---

# Conceptual & measurement model diagrams

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/design-6

## Goal

Turn your theory into a conceptual or measurement model diagram – constructs, paths and, where needed, survey items – as editable draw.io or Figma content you update with the literature instead of redrawing it.

An editable model kept as code (Mermaid or draw.io XML) next to a construct–indicator table – updated in minutes when the literature changes, and consistent across thesis, slides and survey.

## When to use

Conceptual and measurement models are redrawn by hand in slide or drawing tools; each new paper or changed construct means rework, and the diagram drifts away from the text and the item list.

## Workflow with the user

Guide the user through these steps. Where a step says “ask the assistant”, that is you.

1. Describe the constructs, their definitions and the expected paths.
2. Ask the assistant for the model as Mermaid code, a table of every arrow with what it rests on, and a construct–indicator table.
3. Check every arrow and indicator in the tables against your theory and sources.
4. Optional: paste the code into draw.io (Arrange › Insert › Advanced) to view and edit the diagram.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.

## Typical request

```text
I am a postgraduate researcher in [discipline] working on [research question]. My constructs are: [construct – one-line definition, for each]. The expected relationships are: [e.g. A increases B; C moderates A→B]. 1) Draw the conceptual model as Mermaid flowchart code (left to right): constructs as nodes, hypothesised paths as labelled arrows (H1, H2 …), moderators as arrows pointing at a path. 2) Give a table of every arrow in the code: label, from, to, and the part of my description it rests on – or 'not in description'. 3) If I want a measurement model, add for each construct whether it is reflective or formative, with a one-line reason, and list 3–4 candidate indicators or survey items per construct in a table: construct, indicator, source or 'to be developed'. Do not invent published scales; if you suggest an existing scale, say how sure you are. 4) List any path that is not backed by my description.
```

## Quality check

Every row of the arrow table matches your description or is flagged, each indicator really reflects (or forms) its construct, and any named scale exists with the items the assistant claims.

## Limits

- The assistant returns the model as code and as tables you check in the chat; to see the drawing you paste the code into draw.io or another Mermaid viewer, and drawing directly on the canvas needs a connection that your tool and your university must allow. The theory behind each arrow remains your argument.
- Risk: Public or your own non-sensitive material; errors are easy to spot.

## Key concepts

- **Conceptual model** – Shows constructs and the hypothesised relationships between them (direct paths, mediators, moderators). Each arrow should correspond to a stated hypothesis or proposition and its theoretical argument.
- **Measurement model** – Links each latent construct to its observed indicators (e.g. survey items). Path-diagram convention: latent constructs as ovals, indicators as rectangles, arrows for assumed directions (Kline, 2016).
- **Reflective vs formative measurement** – Reflective: the construct causes its indicators, which should correlate and are interchangeable. Formative: indicators jointly form the construct and are not interchangeable. Misspecification biases estimates (Jarvis et al., 2003).
- **Construct–indicator mapping** – A table linking each construct definition to its items and their source; the basis for content validity and the later CFA or PLS-SEM (MacKenzie et al., 2011).
- **Model as code and living updates** – Keeping the diagram as text (Mermaid, draw.io XML) makes it versionable and quick to regenerate, in the spirit of living reviews that are updated as new evidence appears (Elliott et al., 2014).

## Key references

- Jarvis, C. B., MacKenzie, S. B., & Podsakoff, P. M. (2003). A critical review of construct indicators and measurement model misspecification in marketing and consumer research. Journal of Consumer Research, 30(2), 199–218. https://doi.org/10.1086/376806
- MacKenzie, S. B., Podsakoff, P. M., & Podsakoff, N. P. (2011). Construct measurement and validation procedures in MIS and behavioral research: Integrating new and existing techniques. MIS Quarterly, 35(2), 293–334. https://doi.org/10.2307/23044045
- Kline, R. B. (2016). Principles and practice of structural equation modeling (4th ed.). Guilford Press.
- Elliott, J. H., Turner, T., Clavisi, O., Thomas, J., Higgins, J. P. T., Mavergames, C., & Gruen, R. L. (2014). Living systematic reviews: An emerging opportunity to narrow the evidence-practice gap. PLoS Medicine, 11(2), e1001603. https://doi.org/10.1371/journal.pmed.1001603

## Tools that help

draw.io · Figma
