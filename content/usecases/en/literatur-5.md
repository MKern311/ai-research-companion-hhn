---
id: literatur-5
phase: literatur
order: 5
title: Synthesis & concept matrix
risk: 3
mode: Co-create
potential: 2
capabilities: synthese
routes: files; external
connect: Consensus
tools: Elicit
repos: kd-literature-review
data: B2; B3; C3; C4; C5
practice_data: B2; B3; C3; C4; C5
---

Compare findings across studies, flag contradictions and draft a concept matrix (Webster & Watson) showing which concepts each study covers fully, partly or not at all.

## Problem

After reading twenty papers you know them one by one, but not how they relate – where they agree, where they contradict each other and why.

## Result

A concept-centric matrix (Webster & Watson) showing which study covers which concept, with evidence, and a first map of agreements and contradictions – the basis for a synthesis you write yourself.

## Steps

1. Choose four to six concepts from your research question
2. Give your AI assistant the studies, one row per study
3. Ask for agreements, contradictions and methodological reasons
4. Check two complete rows against the papers
5. Write the synthesis yourself and declare AI use

## Concepts

### Concept matrix (Webster & Watson)

A table with studies as rows and concepts as columns that turns an author-centric list into a concept-centric review. Cells record whether and how each study addresses a concept; empty columns point to possible gaps.

### Narrative synthesis (Popay et al.)

Structured textual synthesis when meta-analysis is not possible, in four elements: develop a theory of how, why and for whom the intervention or phenomenon works, develop a preliminary synthesis, explore relationships within and between studies, and assess the robustness of the synthesis – more than summarising paper by paper.

### SWiM reporting guideline

Synthesis Without Meta-analysis: nine items for reporting how studies were grouped, which standardised metric and synthesis method were used, and how heterogeneity and certainty of evidence were assessed (Campbell et al., 2020).

### Vote counting and its limits

Counting studies 'for' and 'against' ignores effect size, precision and study quality; if used at all, count by direction of effect. Contradictions often trace back to method, sample, measure or context.

### Human check and AI declaration

Interpreting agreement and contradiction is your scholarly contribution. Verify every cell you rely on, keep the matrix as an audit trail, and declare AI assistance as your university and target journal require.

## References

- Webster, J., & Watson, R. T. (2002). Analyzing the past to prepare for the future: Writing a literature review. MIS Quarterly, 26(2), xiii–xxiii.
- Popay, J., Roberts, H., Sowden, A., Petticrew, M., Arai, L., Rodgers, M., Britten, N., Roen, K., & Duffy, S. (2006). Guidance on the conduct of narrative synthesis in systematic reviews: A product from the ESRC Methods Programme. Lancaster University.
- Campbell, M., McKenzie, J. E., Sowden, A., Katikireddi, S. V., Brennan, S. E., Ellis, S., Hartmann-Boyce, J., Ryan, R., Shepperd, S., Thomas, J., Welch, V., & Thomson, H. (2020). Synthesis without meta-analysis (SWiM) in systematic reviews: Reporting guideline. BMJ, 368, l6890. doi:10.1136/bmj.l6890

## Practice exercise

### Task

Build a concept matrix across five heat and drought studies and see whether your AI assistant notices the real tension: the attribution studies rely on climate models, while Vautard et al. report that models underestimate observed heat trends. You learn whether it smooths over contradictions.

### Prompt

```text
I am a postgraduate researcher reviewing the attribution of heat and drought extremes. Using only the five attached PDFs (Christidis et al. 2020, Christidis et al. 2023, Vautard et al. 2023, Zachariah et al. 2023, Schumacher et al. 2024), build a concept matrix: one row per study, columns for event type and region, data sources, attribution method, role of atmospheric circulation, model evaluation, and impacts or vulnerability. In each cell, say whether the study addresses the concept fully, partly or not at all, and give the finding in a few words with a short supporting passage and page. Then list where the studies agree and where they contradict each other or are in tension, with possible reasons such as method, data or region, naming the study for each point. Do not add studies I have not given you.
```

### Check

Check the full rows for Zachariah et al. (vulnerability is central, as its title says) and Vautard et al. (models underestimate the circulation-induced heat trend). If the assistant reports no tension with model-based attribution, it smoothed over a contradiction.

## Own material

### Bring

Abstracts or short summaries of five or six studies you already know well, or their open-access PDFs.

### Steps

1. Paste or attach the studies and list the concepts you want compared.
2. Ask for a concept matrix with studies as rows and concepts as columns.
3. Ask where the studies agree, contradict each other, and why that might be.
4. Check every cell for two studies against the originals.

### Prompt

```text
I am a postgraduate researcher in [discipline] working on a review of [topic]. Using only the studies I provide, build a concept matrix: one row per study, columns for [concept 1], [concept 2], [concept 3]. In each cell, say whether the study addresses the concept fully, partly or not at all, and give the finding in a few words, including direction of effect, with a short supporting passage. Then list where the studies agree and where they contradict each other, with possible reasons such as method, sample or context, naming the study for each point. Do not add studies I have not given you.

[paste abstracts or attach files]
```

### Check

Every cell for two studies matches the originals; be cautious, because the assistant can smooth over contradictions or overstate agreement, so the synthesis and its argument must be your own.

## Technology

Upload the open-access PDFs to your AI assistant and ask for the matrix as a table; for a larger set, extract first with a specialist tool and synthesise with the assistant.

## Levels

### Chat

Attach the five PDFs (B2, B3, C3, C4, C5) and run the starter prompt. In the same chat, ask the assistant to make the strongest case that Vautard et al. weaken the model-based attribution studies, with passages and pages.

### Project / Notebook

Add the studies of your review (practice: B2, B3, C3, C4, C5), your concept list and the matrix so far as .docx or .xlsx. Ask for agreements and tensions across all sources, and which cells change when you add a study. Only material you may share goes in; check every cell against the original.

### Custom assistant

Call it 'Concept matrix'. Instructions: one row per study, your concepts as fixed columns, 'fully', 'partly' or 'not at all' with finding, passage and page, then agreements and tensions with likely reasons; never smooth over contradictions or add studies. Switch on code execution / data analysis if your tool offers it, to export to Excel. Starter prompt: 'Add this study to the matrix.' Only approved material; you check every cell and write the synthesis.
