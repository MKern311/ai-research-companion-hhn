---
name: novelty-check
description: "Semantic search for closely related work to spot duplication early and sharpen your positioning. Use when the user works on: Novelty check."
---

# Novelty check

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/idee-3

## Goal

Semantic search for closely related work to spot duplication early and sharpen your positioning.

A short, verified list of the closest studies with how each overlaps, plus a positioning statement that names your type of contribution – early reassurance or an early pivot, never proof of novelty.

## When to use

Months in, you may find your study already exists: keyword searches miss closely related work that uses different terms, another field's vocabulary or a different unit of analysis.

## Workflow with the user

Guide the user through these steps. Where a step says “ask the assistant”, that is you.

1. Paste your summary and ask for closely related published studies with links.
2. Ask for one sentence per study on how it overlaps with yours.
3. Open every link and check the paper exists and matches the description.
4. Run a quick Google Scholar search and compare what the assistant missed.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.

## Typical request

```text
I am a postgraduate researcher in [discipline] checking whether my planned study has already been done. My project summary is: [summary]. Search for up to eight published studies that are closest to it. For each, give authors, year, title, a working link, and one sentence on how it overlaps with or differs from my project. Only list studies you actually found with a link. If you are not sure, say so; do not invent sources. End with two sentences on how I could position my study.
```

## Quality check

Each link opens a real paper that says what the assistant claims, and a quick Google Scholar search does not reveal an obviously closer study it missed.

## Limits

- An assistant with web search covers the open web, not library databases, and may miss literature; this is a first scan, not proof of novelty.
- Risk: Your own unpublished drafts, reviews or third-party content.

## Key concepts

- **Originality and contribution (Corley & Gioia)** – Contributions are judged by originality – incremental or revelatory – and by utility – scientific or practical. Placing your study on both dimensions turns 'novel' into a claim you can defend against the closest existing work.
- **Forms of originality in a PhD** – Phillips and Pugh list several, such as new evidence for an old issue, an established method in a new setting, or an original synthesis. Naming yours shows that close prior work need not end a project.
- **Semantic (embedding-based) search** – Texts are converted into vectors and ranked by similarity of meaning, so studies using other terms can surface. Results depend on the index and the model; recall is never guaranteed.
- **Citation chaining (snowballing)** – Backward chaining follows a paper's references; forward chaining follows the papers that cite it. Wohlin (2014) gives iteration rules; it finds work that keyword searches miss.
- **Direct and conceptual replication** – A direct replication repeats a study's procedure; a conceptual replication tests the same question with different methods, data or settings. Finding a close study can turn your project into a valuable replication rather than a dead end.

## Key references

- Corley, K. G., & Gioia, D. A. (2011). Building theory about theory building: What constitutes a theoretical contribution? Academy of Management Review, 36(1), 12–32. https://doi.org/10.5465/amr.2009.0486
- Wohlin, C. (2014). Guidelines for snowballing in systematic literature studies and a replication in software engineering. In Proceedings of the 18th International Conference on Evaluation and Assessment in Software Engineering (Article 38). ACM. https://doi.org/10.1145/2601248.2601268
- Phillips, E. M., & Pugh, D. S. (2015). How to get a PhD: A handbook for students and their supervisors (6th ed.). Open University Press.

## Tools that help

Semantic Scholar · OpenAlex · Consensus · Elicit · Epsilon · Google Scholar
