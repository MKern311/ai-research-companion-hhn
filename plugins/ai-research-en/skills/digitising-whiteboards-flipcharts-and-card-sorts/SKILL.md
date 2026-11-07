---
name: digitising-whiteboards-flipcharts-and-card-sorts
description: "Turn photos of whiteboards, flipcharts or card sorts from workshops and experiments into structured data – transcribed, clustered and mapped (e.g. items to constructs) – ready for analysis. Use when the user works on: Digitising whiteboards, flipcharts and card sorts."
---

# Digitising whiteboards, flipcharts and card sorts

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/erhebung-7

## Goal

Turn photos of whiteboards, flipcharts or card sorts from workshops and experiments into structured data – transcribed, clustered and mapped (e.g. items to constructs) – ready for analysis.

A transcribed, structured table of every card and its placement, with counts per category and flagged uncertain readings – analysis can start the same day, and the photo remains the audit trail.

## When to use

Card sorts, item-sorting tasks and workshop boards produce rich data on paper; typing them up and counting placements by hand takes hours and introduces transcription errors.

## Workflow with the user

Guide the user through these steps. Where a step says “ask the assistant”, that is you.

1. Photograph the board straight on, in good light, in one or two shots.
2. Upload the photo (JPEG or PNG; convert other formats first if your tool does not accept them) – from your assistant's mobile app or via your cloud storage – and ask the assistant to transcribe every card before interpreting anything.
3. Ask for the clusters or the card-to-category mapping as a table, with uncertain readings flagged.
4. Compare the transcription and mapping with the board itself.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.

## Typical request

```text
The attached photo shows the result of a [card sort / item-sorting task / brainstorming] from a [workshop or experiment] on [topic]. 1) Transcribe every card or note exactly as written, numbered, with its position (column or cluster). Mark any word you cannot read as [illegible] instead of guessing. 2) Give a table: card number, text, the group or category it was placed in, and any arrow or line connecting it to another card. 3) If the task assigned items to predefined categories ([list categories]), count for each item how many placements fall in the intended category. 4) Only then suggest a short label for each cluster and say which cards fit poorly. Keep observation (steps 1–3) and interpretation (step 4) separate.
```

## Quality check

Count the cards on the board and in the table – the numbers must match – and compare five transcriptions word for word; every [illegible] or misread card is a reason to re-photograph or type it in yourself.

## Limits

- Handwriting, glare and overlapping notes cause misreadings; photos may contain personal data (faces, names, handwriting), so use only photos you are allowed to process and remove identifying details first.
- Risk: Personal or sensitive data, or decisions that feed directly into your results.

## Key concepts

- **Card sorting (open and closed)** – Participants group cards into categories they create (open) or into predefined ones (closed). Used to explore mental models or to test whether categories work; analysed via placement frequencies and clusters (Spencer, 2009).
- **Item-sorting task** – Respondents assign each survey item to the construct definition it fits. The proportion of substantive agreement (psa) and the substantive-validity coefficient (csv) flag items that are misread before a full pre-test (Anderson & Gerbing, 1991).
- **Visual and photo data** – Photos of boards are research data: they need a capture protocol (angle, light, labelling), consent where people or handwriting can be identified, and secure storage (Pain, 2012).
- **Transcription before interpretation** – Separate the literal record (what is on each card, where) from coding and clustering. This keeps the step checkable and makes AI misreadings visible.

## Key references

- Anderson, J. C., & Gerbing, D. W. (1991). Predicting the performance of measures in a confirmatory factor analysis with a pretest assessment of their substantive validities. Journal of Applied Psychology, 76(5), 732–740. https://doi.org/10.1037/0021-9010.76.5.732
- Pain, H. (2012). A literature review to evaluate the choice and use of visual methods. International Journal of Qualitative Methods, 11(4), 303–319. https://doi.org/10.1177/160940691201100401
- Spencer, D. (2009). Card sorting: Designing usable categories. Rosenfeld Media.
