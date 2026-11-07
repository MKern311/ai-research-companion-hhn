---
id: transfer-3
phase: transfer
order: 3
title: Gathering impact evidence
risk: 2
mode: Delegate
potential: 2
capabilities: recherche; agentisch
routes: chat; external
tools: Google Scholar
data: B2
practice_ref: B2
---

Find mentions in policy, media and practice and structure them as evidence of impact.

## Problem

Evidence that research reached policy, media or practice is scattered across the web, and mentions are easily mistaken for impact – a demonstrable change or benefit beyond academia.

## Result

A table of verified mentions with links, classified by type and by stage from awareness to use, plus a short impact narrative that claims contribution, not more than the evidence shows.

## Steps

1. Give title, DOI and authors of one paper
2. Ask for mentions in policy, media and practice
3. Open each link and keep only confirmed items
4. Classify each as awareness, use or change
5. Draft a narrative claiming contribution, not sole attribution

## Concepts

### Research impact (REF definition)

In the UK Research Excellence Framework, impact is 'an effect on, change or benefit to the economy, society, culture, public policy or services, health, the environment or quality of life, beyond academia', assessed for reach and significance.

### Reach and significance

Reach is the extent and diversity of the people or organisations affected; significance is how much the research enabled, enriched or changed policies, practices or understanding. A news mention shows reach, rarely significance.

### Contribution analysis

Mayne's approach: set out the pathway from research to change, collect evidence for each link and consider other influences, then claim a credible contribution rather than sole attribution.

### Altmetrics

Indicators of online attention – news, policy documents, social media, blogs – tracked by services such as Altmetric and Overton. Attention is a lead for finding impact evidence, not evidence of impact itself.

## References

- REF 2021. (2019). Panel criteria and working methods (REF 2019/02). Research Excellence Framework.
- Mayne, J. (2012). Contribution analysis: Coming of age? Evaluation, 18(3), 270–280. doi:10.1177/1356389012451663

## Practice exercise

### Task

Search for policy, media and practice mentions of the Christidis et al. (2020) UK heat paper, which drew attention after the 40.3 °C record of July 2022. You learn how many of the assistant's links exist and actually name the paper.

### Prompt

```text
I am gathering evidence of the reach of this paper: Christidis, N., McCarthy, M., & Stott, P. A. (2020). The increasing likelihood of temperatures above 30 to 40 °C in the United Kingdom. Nature Communications, 11, 3093. https://doi.org/10.1038/s41467-020-16834-0. Search the web for mentions since 2020 in policy documents, government or NGO reports, news media and practitioner websites. Give a table: source, type (policy, media, practice), date, link, what it says about the research, and stage (awareness, use in decision-making, change in policy or practice). Include only items whose page names the paper, its DOI or its authors. If you are not sure an item refers to this paper, say so; do not invent sources.
```

### Check

Open every link and keep only pages that exist and name the paper, its DOI or its authors. Where a page summarises the findings, compare it with the paper: 40 °C summers have a 100–300-year return time now and could reach 3.5 years by 2100 only without mitigating emissions. Count the items that survive; most show reach, not yet impact.

## Own material

### Bring

The title and DOI of one published paper (yours or a well-known one in your field) or the name of a public research project.

### Steps

1. Give the title, DOI and authors, and ask for mentions beyond academia.
2. Ask for a table of sources with links and type of impact.
3. Open three of the links and check each one.
4. Ask the assistant to structure the confirmed items as a short impact narrative.

### Prompt

```text
I am gathering evidence of the impact of my research. The paper is [title, authors, DOI] (or the project [name]). Search the web for mentions since [year] in policy documents, government or NGO reports, news media and practitioner websites. Give a table: source, type (policy, media, practice), date, link, what it says about the research, and possible kind of impact (awareness, policy change, practice change). Include only items with a link that names the paper, project or authors. If you are not sure an item refers to this work, say so; do not invent sources.
```

### Check

Open at least three links and confirm each one exists and actually refers to the paper or project; drop any item that does not.

### Limit

The assistant only finds what its web search reaches; it does not replace Altmetric, Overton or your library's tools and will miss mentions.

## Technology

Your AI assistant can search the web and return linked sources if your tool and settings allow it; check Google Scholar's "cited by" list for academic uptake, as the assistant may miss or misattribute mentions.

## Levels

### Chat

Run the starter prompt with web search switched on (if your tool offers it). In the same chat, paste back only the items you confirmed by opening the links and ask for a stage per item (awareness, use, change) and a short narrative that claims contribution, not sole attribution.

### Project / Notebook

A notebook typically works from its references rather than searching the web – add what you have verified instead: B2, the confirmed mentions table as .xlsx or Word, and notes or saved copies of key pages. Add new items over the months and ask for an updated impact narrative and timeline – a growing evidence file for reports and impact case studies.

### Custom assistant

Instructions: search scope and table columns from the starter prompt, include an item only when its page names the paper, DOI or authors, classify as awareness, use or change, claim contribution not attribution, never invent sources. Knowledge: web search if your tool offers it, or up to four trusted public policy websites. Starter prompts: "Find new mentions of [DOI] since [date]" and "Classify these confirmed items". Reusable for every paper or project.

### Automation / own code

Add a scheduled trigger that runs the search once a month and appends new candidate mentions to an Excel table or a shared list for you to verify – a basic custom assistant cannot run on a schedule or write into a list. On GitHub: a scheduled GitHub Actions workflow asks the OpenAlex API each month for new works citing your papers and appends them to a CSV for you to verify. Check data protection and approval with your university first.
