---
id: idee-3
phase: idee
order: 3
title: Novelty check
risk: 2
mode: Assist
potential: 3
capabilities: recherche
routes: chat; connected; external
connect: Semantic Scholar; OpenAlex; Consensus; Elicit
tools: Semantic Scholar; Epsilon; Google Scholar
data: B2; C3
practice_ref: C3; B2
---

Semantic search for closely related work to spot duplication early and sharpen your positioning.

## Problem

Months in, you may find your study already exists: keyword searches miss closely related work that uses different terms, another field's vocabulary or a different unit of analysis.

## Result

A short, verified list of the closest studies with how each overlaps, plus a positioning statement that names your type of contribution – early reassurance or an early pivot, never proof of novelty.

## Steps

1. Summarise your planned study in about 150 words
2. Ask your AI assistant for the closest studies with working links
3. Open every link and discard anything that does not exist
4. Repeat in Google Scholar and follow forward citations
5. State what you add: replication, extension or new question

## Concepts

### Originality and contribution (Corley & Gioia)

Contributions are judged by originality – incremental or revelatory – and by utility – scientific or practical. Placing your study on both dimensions turns 'novel' into a claim you can defend against the closest existing work.

### Forms of originality in a PhD

Phillips and Pugh list several, such as new evidence for an old issue, an established method in a new setting, or an original synthesis. Naming yours shows that close prior work need not end a project.

### Semantic (embedding-based) search

Texts are converted into vectors and ranked by similarity of meaning, so studies using other terms can surface. Results depend on the index and the model; recall is never guaranteed.

### Citation chaining (snowballing)

Backward chaining follows a paper's references; forward chaining follows the papers that cite it. Wohlin (2014) gives iteration rules; it finds work that keyword searches miss.

### Direct and conceptual replication

A direct replication repeats a study's procedure; a conceptual replication tests the same question with different methods, data or settings. Finding a close study can turn your project into a valuable replication rather than a dead end.

## References

- Corley, K. G., & Gioia, D. A. (2011). Building theory about theory building: What constitutes a theoretical contribution? Academy of Management Review, 36(1), 12–32. doi:10.5465/amr.2009.0486
- Wohlin, C. (2014). Guidelines for snowballing in systematic literature studies and a replication in software engineering. In Proceedings of the 18th International Conference on Evaluation and Assessment in Software Engineering (Article 38). ACM. doi:10.1145/2601248.2601268
- Phillips, E. M., & Pugh, D. S. (2015). How to get a PhD: A handbook for students and their supervisors (6th ed.). Open University Press.

## Practice exercise

### Task

Describe the study by Christidis et al. (2023) as if it were your own plan and ask your AI assistant whether it has been done. You learn whether its web search finds the very paper that already exists, and how many of its links are real.

### Prompt

```text
I am a postgraduate researcher checking whether my planned study has already been done. My project summary: I plan to estimate how human-induced climate change has changed the likelihood of daily maximum temperatures above 50 °C at about a dozen locations around the Mediterranean and the Middle East. I will compare climate model simulations with and without human influence in a risk-based attribution framework and project how often such days could occur by 2100. Search for up to eight published studies closest to this. For each, give authors, year, title, a working link and one sentence on how it overlaps with or differs from my project. Only list studies you actually found with a link; do not invent sources. End with two sentences on how I could position my study.
```

### Check

The assistant should find Christidis, Mitchell and Stott (2023) – the plan describes that paper. Open every link. Also check whether it found Christidis et al. (2020), the UK study whose method the 2023 paper transfers.

## Own material

### Bring

A short summary (about 150 words) of your planned project or your draft research question.

### Steps

1. Paste your summary and ask for closely related published studies with links.
2. Ask for one sentence per study on how it overlaps with yours.
3. Open every link and check the paper exists and matches the description.
4. Run a quick Google Scholar search and compare what the assistant missed.

### Prompt

```text
I am a postgraduate researcher in [discipline] checking whether my planned study has already been done. My project summary is: [summary]. Search for up to eight published studies that are closest to it. For each, give authors, year, title, a working link, and one sentence on how it overlaps with or differs from my project. Only list studies you actually found with a link. If you are not sure, say so; do not invent sources. End with two sentences on how I could position my study.
```

### Check

Each link opens a real paper that says what the assistant claims, and a quick Google Scholar search does not reveal an obviously closer study it missed.

### Limit

An assistant with web search covers the open web, not library databases, and may miss literature; this is a first scan, not proof of novelty.

## Technology

Assistants with web search give links that must be checked. With Semantic Scholar or OpenAlex connected (if your tool and your university allow it), the assistant searches scholarly records directly; Consensus and Elicit add answers drawn from peer-reviewed studies.

## Levels

### Chat

Run the starter prompt with web search switched on (availability depends on your tool and settings). In the same chat, ask the assistant to keep only studies whose links it actually opened, and to search again with the terms a neighbouring field would use.

### Project / Notebook

Depending on your tool, a project or notebook answers only from its sources and may not search the web, so use it after the search: add the verified papers you found (practice: C3 and B2) and your project summary as a .docx. Ask how each study overlaps with your design, data and setting, and draft the positioning statement from these sources. Add new papers as they appear.

### Custom assistant

Call it 'Novelty check'. Instructions: up to eight closest studies, each with authors, year, title, working link and one sentence on overlap; only studies it actually found; a two-sentence positioning statement; and a reminder that this is a first scan, not proof of novelty. No code needed. Starter prompt: 'Has this study been done? Here is my summary.' Reusable whenever your plan or question shifts.

### Automation / own code

Connect the Semantic Scholar or OpenAlex MCP server, or a Consensus or scite connector if your platform offers one, so the assistant searches a scholarly database rather than the open web; a scheduled workflow (e.g. in Power Automate or n8n) could rerun the check monthly. A configured assistant alone usually cannot connect these. On GitHub: a script queries the OpenAlex or Semantic Scholar API, and a scheduled GitHub Actions workflow reruns it monthly and saves new hits. Check data protection and approval with your university first.
