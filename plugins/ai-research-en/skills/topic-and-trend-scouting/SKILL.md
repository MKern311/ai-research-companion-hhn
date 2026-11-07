---
name: topic-and-trend-scouting
description: "Group a list of recent titles into themes, count them per year and spot rarely combined topics – a first hypothesis to test with a bibliometric tool or a connected database such as OpenAlex. Use when the user works on: Topic and trend scouting."
---

# Topic and trend scouting

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/idee-0

## Goal

Group a list of recent titles into themes, count them per year and spot rarely combined topics – a first hypothesis to test with a bibliometric tool or a connected database such as OpenAlex.

A theme table with yearly counts and a list of rarely combined themes – a hypothesis about trends and gaps, to be tested with a bibliometric query at scale.

## When to use

Judging where a field is moving from scattered reading is unreliable: growing clusters and neglected intersections stay invisible without co-word or citation analysis, which few researchers run early on.

## Workflow with the user

Guide the user through these steps. Where a step says “ask the assistant”, that is you.

1. Paste the list of titles and years into your AI assistant.
2. Ask it to group the papers into themes and count them per year.
3. Ask which pairs of themes rarely appear together in the same paper.
4. Compare the themes with your own sense of the field and note surprises.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.

## Typical request

```text
I am a postgraduate researcher in [discipline] looking for growing topics and gaps. Below are [number] paper titles with their publication years, copied from [source]. Group them into four to six themes. Show a table: theme, paper titles in that theme, number of papers per year. Then list two or three combinations of themes that rarely appear together and could be under-researched. Base this only on the list I give you; say clearly that a small list cannot show real trends.

[paste titles and years]
```

## Quality check

Pick two themes and check that every title assigned to them really belongs there, and that the per-year counts match your list.

## Limits

- The assistant cannot analyse publication or citation databases; this tests clustering a small list you supply, not a bibliometric trend analysis.
- Risk: Public or your own non-sensitive material; errors are easy to spot.

## Key concepts

- **Co-word analysis** – Maps a field through terms that occur together in titles, abstracts or keywords; frequent pairs form themes, and counts per year show growth. A bibliometric technique that needs hundreds of records, not a handful.
- **Co-citation and bibliographic coupling** – Co-citation links two papers that later work cites together and shows a field's intellectual base; bibliographic coupling links papers that share references and suits recent research fronts. Both are standard science-mapping methods.
- **Swanson's ABC model** – Literature-based discovery: if literature A is linked to concept B and B to C, but A and C are never studied together, A–C is a candidate gap. A heuristic for under-researched intersections, not evidence that they matter.
- **Bibliometric workflow (Donthu et al.)** – Four steps: define aims and scope, choose techniques (performance analysis, science mapping), collect data from a documented database query, then run the analysis and report it. Tools include VOSviewer, Bibliometrix and OpenAlex.

## Key references

- Zupic, I., & Čater, T. (2015). Bibliometric methods in management and organization. Organizational Research Methods, 18(3), 429–472. https://doi.org/10.1177/1094428114562629
- Donthu, N., Kumar, S., Mukherjee, D., Pandey, N., & Lim, W. M. (2021). How to conduct a bibliometric analysis: An overview and guidelines. Journal of Business Research, 133, 285–296. https://doi.org/10.1016/j.jbusres.2021.04.070
- Swanson, D. R. (1986). Undiscovered public knowledge. The Library Quarterly, 56(2), 103–118. https://doi.org/10.1086/601720

## Tools that help

OpenAlex · Litmaps · Open Knowledge Maps · Research Rabbit
