---
name: staying-up-to-date
description: "Sort new publications from alerts and journal tables of contents against your research question each week and decide what to read. Use when the user works on: Staying up to date."
---

# Staying up to date

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/querschnitt-8

## Goal

Sort new publications from alerts and journal tables of contents against your research question each week and decide what to read.

A weekly triage into must-read, maybe and skip against explicit relevance criteria, with reasons and suggested alert terms – less time sorting, a clear reading list and better-tuned alerts.

## When to use

Alerts and tables of contents bring dozens of new titles each week; skimming them all takes hours, and relevant papers are lost in the noise.

## Workflow with the user

Guide the user through these steps. Where a step says “ask the assistant”, that is you.

1. Paste your research question and the new titles and abstracts.
2. Ask for a must-read, maybe and skip rating with a reason for each.
3. Ask how the must-reads relate to your work.
4. Open the must-reads and decide yourself what to read.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.

## Typical request

```text
I am a postgraduate researcher in [discipline]. My research question is: [question]. Below are new publications from this week's alerts. Sort them into must-read, maybe and skip, with one line on why, based only on the title and abstract given. For the must-reads, say in one sentence whether each supports, challenges or extends my work, or offers a method I could use. Finish with a short list of search terms worth adding to my alerts. Do not add papers that are not in the list.

[paste titles and abstracts]
```

## Quality check

For two papers you rated differently from the assistant, read the abstract again and decide who was right; nothing in the output is a paper you did not paste.

## Limits

- The assistant rates on title and abstract only; set up the alerts themselves in the databases you use. Connecting a source such as OpenAlex via MCP, so that new work is searched directly, is a level 4 step – check data protection and approval with your university first.
- Risk: Public or your own non-sensitive material; errors are easy to spot.

## Key concepts

- **Relevance (eligibility) criteria** – Explicit inclusion and exclusion rules – population or object, method, outcome, setting, date – as used in systematic screening. Writing them down makes triage consistent and lets you check why a paper received its rating.
- **Precision and recall in screening** – Precision is the share of papers rated must-read that are truly relevant; recall is the share of truly relevant papers that were caught. When staying current, a missed key paper usually costs more than an extra abstract, so favour recall.
- **Forward and backward snowballing** – Following the references of key papers (backward) and the papers that cite them (forward), as systematised by Wohlin (2014). Citation alerts on seed papers catch relevant work that keyword alerts miss.
- **Living review** – A review that is continually updated as new evidence appears (Elliott et al., 2014). A weekly triage log is a personal, informal version that keeps your literature chapter current until submission.

## Key references

- Wohlin, C. (2014). Guidelines for snowballing in systematic literature studies and a replication in software engineering. In Proceedings of the 18th International Conference on Evaluation and Assessment in Software Engineering (Article 38). ACM. https://doi.org/10.1145/2601248.2601268
- Elliott, J. H., Turner, T., Clavisi, O., Thomas, J., Higgins, J. P. T., Mavergames, C., & Gruen, R. L. (2014). Living systematic reviews: An emerging opportunity to narrow the evidence-practice gap. PLoS Medicine, 11(2), e1001603. https://doi.org/10.1371/journal.pmed.1001603

## Tools that help

OpenAlex · Semantic Scholar · Litmaps · Google Scholar
