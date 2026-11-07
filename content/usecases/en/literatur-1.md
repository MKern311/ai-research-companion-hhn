---
id: literatur-1
phase: literatur
order: 1
title: Semantic search & citation networks
risk: 1
mode: Assist
potential: 3
capabilities: recherche
routes: chat; files; connected; external
connect: Semantic Scholar; OpenAlex; Consensus; Litmaps; Paper Search MCP
tools: Connected Papers; Research Rabbit; Semantic Scholar
repos: ars-deep-research
data: A2; A1
practice_data: A2
practice_ref: A1
---

Search by meaning rather than keywords, follow forward and backward citations, or let a research agent run a multi-step search and draft a cited overview.

## Problem

Keyword searches only find papers that use your terms; work from other fields and newer papers citing your key source stay invisible, and chasing citations by hand is slow.

## Result

Related papers found by meaning and by backward and forward citation, each linked to your key paper, plus a short cited overview – a wider net than keywords, verified against Google Scholar.

## Steps

1. Start from one open-access key paper and its DOI
2. Ask for its core idea in plain words
3. Search for same-problem papers and papers citing it
4. Compare with the reference list and Google Scholar 'Cited by'

## Concepts

### Backward and forward citation chaining

Backward: screen the key paper's reference list; forward: screen the papers that cite it. Repeat until no new relevant papers appear (snowballing, Wohlin 2014). Complements database searching, especially for interdisciplinary topics.

### Co-citation and bibliographic coupling

Two papers are co-cited when later papers cite both (Small, 1973), a sign of related ideas; they are bibliographically coupled when they share references. Tools such as Connected Papers build similarity maps from such links.

### Semantic (dense) retrieval

Texts are encoded as vectors and ranked by similarity of meaning, not shared words; Semantic Scholar, for example, uses citation-informed document embeddings (SPECTER). Finds other fields' terminology, but the ranking is opaque.

### Citation verification

Research agents can invent references or cite sources that do not support the sentence. Check existence (the DOI resolves to that paper) and support (the passage says what is claimed) for every source.

## References

- Wohlin, C. (2014). Guidelines for snowballing in systematic literature studies and a replication in software engineering. In Proceedings of the 18th International Conference on Evaluation and Assessment in Software Engineering (Article 38). ACM. doi:10.1145/2601248.2601268
- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. Journal of the American Society for Information Science, 24(4), 265–269. doi:10.1002/asi.4630240406
- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics (pp. 2270–2282). Association for Computational Linguistics. doi:10.18653/v1/2020.acl-main.207

## Practice exercise

### Task

Use Rohde and Hausfather (2020), the Berkeley Earth paper, as the key paper and let your AI assistant find related and citing work. You learn whether its web search finds a known citing paper – the HadCRUT5 paper by Morice et al. (2021) – and how many links are real.

### Prompt

```text
I am a postgraduate researcher. A key paper for my work is Rohde, R. A., & Hausfather, Z. (2020). The Berkeley Earth Land/Ocean Temperature Record. Earth System Science Data, 12(4), 3469–3479. https://doi.org/10.5194/essd-12-3469-2020 (PDF attached). First, describe its core problem and idea in three plain sentences without its own jargon. Then search for up to six papers that address the same problem, including ones that use different terminology, and up to three that cite this paper. For each, give authors, year, title, a working link, one sentence on the connection, and whether you took it from the attached paper's reference list or found it by search. Finish with a 150-word overview citing each paper. If you are not sure, say so; do not invent sources.
```

### Check

Morice et al. (2021), the HadCRUT5 paper, cites the key paper (Ctrl+F 'Rohde & Hausfather' in A1) and should appear among the citing papers. Related papers taken from the reference list are backward citations, not a search by meaning. Open every link, then compare with the Google Scholar 'Cited by' list. Note: A2 already lists the HadCRUT5 manuscript (Morice et al., submitted 2020) in its references. If the assistant names Morice et al., ask whether it took them from that list or found them by search – a real forward-citation hit is a citing paper that is not in A2.

## Own material

### Bring

Title and DOI of one open-access key paper in your field that you know well.

### Steps

1. Give your AI assistant the title and DOI of your key paper.
2. Ask it to describe the paper's core idea in plain words, not keywords.
3. Ask for related papers that use different terms for the same problem.
4. Check the results against the paper's Google Scholar 'Cited by' list and reference list.

### Prompt

```text
I am a postgraduate researcher in [discipline]. A key paper for my work is [title, authors, year, DOI]. First, describe its core problem and idea in three plain sentences without its own jargon. Then search for up to six papers that address the same problem, including ones that use different terminology, and up to three that cite this paper. For each, give authors, year, title, a working link and one sentence on the connection. Finish with a 150-word overview of how these papers relate, citing each one. If you are not sure, say so; do not invent sources.
```

### Check

Every link opens a real paper, and at least one relevant result is not already in your reference list or easy to find with your usual keywords.

### Limit

An assistant with web search covers the open web, not citation databases; check the citation trail by hand in Google Scholar – or, if your university allows it, connect a scholarly database (for example OpenAlex or Semantic Scholar) to your assistant via MCP.

## Technology

Assistants with web search give links that are leads only; attach the key paper so the assistant can also read the reference list. If your tool and your university allow it, Semantic Scholar or OpenAlex give the assistant indexed citation data; Paper Search MCP runs locally, for example with a coding assistant such as GitHub Copilot in VS Code. Litmaps or Connected Papers draw the network visually.

## Levels

### Chat

Attach Rohde and Hausfather (A2) and run the starter prompt with web search switched on (availability depends on your tool and settings). In the same chat, ask the assistant to separate papers taken from the reference list from papers found by search, and to confirm that each citing paper is not in A2's references.

### Project / Notebook

Add the key paper (A2), the citing paper you verified (A1) and further papers you confirmed in Google Scholar. Ask how each relates to the key paper's problem and to each other. Depending on your tool, the workspace may not search the web, so it becomes your verified citation map, extended paper by paper.

### Custom assistant

Call it 'Citation explorer'. Instructions: describe the key paper's problem in plain words, find related papers with different terminology and up to three citing papers, give a working link and the connection for each, label each as reference list or search result, write a 150-word cited overview, and never invent sources. Starter prompt: 'Find related and citing work for this DOI.' Reusable for every new key paper.

### Automation / own code

Connect the OpenAlex or Semantic Scholar MCP server, or Litmaps, so the assistant follows real backward and forward citations in a database instead of the open web; a scheduled workflow (e.g. in Power Automate or n8n) could report new citing papers. A plain chat assistant cannot reach these. On GitHub: a script follows references and citing works through the OpenAlex API, and a scheduled GitHub Actions workflow lists new citing papers. Check data protection and approval with your university first.
