---
id: idee-5
phase: idee
order: 5
title: Research gap mapping
risk: 2
mode: Co-create
potential: 3
capabilities: synthese; analyse
routes: files; chat; external
tools: Elicit; scite
repos: kd-literature-review
data: AB
practice_data: AB
---

Sort the gaps a body of literature leaves into types – empirical, methodological, theoretical, practical or contradictory findings – and back each one with the studies that show it.

## Problem

Every paper's 'future research' section claims a gap, but turning a pile of studies into a typed, defensible gap that justifies your project is hard; stated gaps often stay vague.

## Result

A table of gaps by type, each tied to the studies and passages that show it and marked as stated or inferred, plus a judgement of how well your question fills one.

## Steps

1. Attach five to eight studies and your draft question
2. Ask for gaps by type, each with supporting passages
3. Separate gaps the authors state from gaps inferred
4. Ask how convincingly your question addresses one gap
5. Check two cited passages against the original papers

## Concepts

### Gap typology

Gaps can be empirical (missing populations, settings, periods), methodological (missing designs or data sources), theoretical (unexplained phenomena), practical (missing evidence on implementation) or contradictory findings. Typologies differ between authors; naming the type makes a gap testable.

### Gap-spotting vs problematisation

Sandberg and Alvesson (2011) show that most questions come from gap-spotting – confusion, neglect or application spotting. Problematisation challenges the assumptions of existing work instead and tends to produce more influential questions.

### Reasons for a gap (Robinson et al.)

Evidence may be insufficient or imprecise, biased, inconsistent, or not the right information for the question. Stating the reason tells you which kind of study would close the gap.

### Absence vs evidence of absence

A topic missing from five papers is not yet a gap in the field: a gap needs a systematic search or explicit statements in the literature. Keep gaps the authors state apart from gaps you infer.

## References

- Sandberg, J., & Alvesson, M. (2011). Ways of constructing research questions: Gap-spotting or problematization? Organization, 18(1), 23–44. doi:10.1177/1350508410372151
- Robinson, K. A., Saldanha, I. J., & McKoy, N. A. (2011). Development of a framework to identify research gaps from systematic reviews. Journal of Clinical Epidemiology, 64(12), 1325–1330. doi:10.1016/j.jclinepi.2011.06.009

## Practice exercise

### Task

Map the gaps that six heat and drought abstracts leave against a practice question. You learn whether your AI assistant ties each gap to a real passage or invents gaps from what the abstracts simply do not mention.

### Prompt

```text
The attached text file holds the abstracts of 12 papers. Use only these six records: B2, B3, C1, C3, C4 and C5 (Christidis et al. 2020 and 2023, Vautard et al. 2023, Perkins-Kirkpatrick and Lewis 2020, Zachariah et al. 2023, Schumacher et al. 2024). Identify the research gaps they leave. Sort them by type: empirical, methodological, theoretical, practical and contradictory findings. Show a table: gap type, the gap in one sentence, records that show it, the supporting passage quoted word for word, and whether the authors state the gap themselves or you infer it. Then judge how convincingly this draft question addresses one gap: 'Do climate models underestimate the observed trend in UK summer heat extremes, and how does that affect attribution estimates for UK hot days?' Do not add studies I have not given you.
```

### Check

Vautard et al. (2023) should support a methodological or contradictory gap: models underestimate the observed Western European heat trend, and the authors call this mismatch 'not well understood'. Find two quoted passages in the file with Ctrl+F; no inferred gap may be presented as stated by the authors.

## Own material

### Bring

Abstracts of five to eight studies on your topic (or their open-access PDFs) and your draft research question.

### Steps

1. Paste or attach the studies and your draft research question.
2. Ask for the gaps they leave, sorted by type, each with the studies that show it.
3. Ask which gap your research question addresses and how convincingly.
4. Open two of the cited studies and check they really say this.

### Prompt

```text
I am a postgraduate researcher in [discipline]. Using only the studies I provide, identify the research gaps they leave. Sort them by type: empirical (missing populations, settings, countries or periods), methodological (similar designs, missing methods or data sources), theoretical (phenomenon not yet explained or compared with certain theories), practical (missing evidence on implementation or use), and contradictory findings. Show a table: gap type, the gap in one sentence, studies that show it, and the passage that supports it. Then say which gap my draft research question addresses and how convincingly it does so. My question: [question]. Do not add studies I have not given you.

[paste abstracts or attach files]
```

### Check

Every supporting passage appears in the study it is attributed to, and each gap follows from what the studies say rather than from what they simply do not mention.

### Limit

The assistant only sees the studies you give it; a gap in a handful of studies is not yet a gap in the field – confirm it with a database search.

## Technology

Upload the open-access PDFs to your AI assistant (or paste abstracts) and ask for a table limited to those files. For practice, attach the abstracts file of the 12 papers. For larger sets, the literature-review skill for coding assistants such as GitHub Copilot structures the same work systematically.

## Levels

### Chat

Attach the abstracts file (AB) and run the starter prompt. In the same chat, ask the assistant to re-mark every gap as stated or inferred and to drop any quote it cannot find word for word in the file.

### Project / Notebook

Add the abstracts file (AB) or, for your own work, the full texts of your key studies, plus your draft question as a .docx. Ask for gaps by type across all sources, each with a quoted passage. Ask it to answer only from these sources, so every gap is tied to your papers; add new studies and check whether a gap still stands.

### Custom assistant

Call it 'Gap mapper'. Instructions: the five gap types, a table with records, verbatim passage and 'stated' or 'inferred', a judgement of how well the draft question fills one gap, and never add studies you have not given it. No code needed. Starter prompts: 'Map the gaps in these abstracts', 'Which gap does my question fill?' Reusable for every new batch of studies.
