---
name: semantic-search-and-citation-networks
description: "Search by meaning rather than keywords, follow forward and backward citations, or let a research agent run a multi-step search and draft a cited overview. Use when the user works on: Semantic search & citation networks."
---

# Semantic search & citation networks

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/literatur-1

## Goal

Search by meaning rather than keywords, follow forward and backward citations, or let a research agent run a multi-step search and draft a cited overview.

Related papers found by meaning and by backward and forward citation, each linked to your key paper, plus a short cited overview – a wider net than keywords, verified against Google Scholar.

## When to use

Keyword searches only find papers that use your terms; work from other fields and newer papers citing your key source stay invisible, and chasing citations by hand is slow.

## Workflow with the user

Guide the user through these steps. Where a step says “ask the assistant”, that is you.

1. Give your AI assistant the title and DOI of your key paper.
2. Ask it to describe the paper's core idea in plain words, not keywords.
3. Ask for related papers that use different terms for the same problem.
4. Check the results against the paper's Google Scholar 'Cited by' list and reference list.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.

## Typical request

```text
I am a postgraduate researcher in [discipline]. A key paper for my work is [title, authors, year, DOI]. First, describe its core problem and idea in three plain sentences without its own jargon. Then search for up to six papers that address the same problem, including ones that use different terminology, and up to three that cite this paper. For each, give authors, year, title, a working link and one sentence on the connection. Finish with a 150-word overview of how these papers relate, citing each one. If you are not sure, say so; do not invent sources.
```

## Quality check

Every link opens a real paper, and at least one relevant result is not already in your reference list or easy to find with your usual keywords.

## Limits

- An assistant with web search covers the open web, not citation databases; check the citation trail by hand in Google Scholar – or, if your university allows it, connect a scholarly database (for example OpenAlex or Semantic Scholar) to your assistant via MCP.
- Risk: Public or your own non-sensitive material; errors are easy to spot.

## Key concepts

- **Backward and forward citation chaining** – Backward: screen the key paper's reference list; forward: screen the papers that cite it. Repeat until no new relevant papers appear (snowballing, Wohlin 2014). Complements database searching, especially for interdisciplinary topics.
- **Co-citation and bibliographic coupling** – Two papers are co-cited when later papers cite both (Small, 1973), a sign of related ideas; they are bibliographically coupled when they share references. Tools such as Connected Papers build similarity maps from such links.
- **Semantic (dense) retrieval** – Texts are encoded as vectors and ranked by similarity of meaning, not shared words; Semantic Scholar, for example, uses citation-informed document embeddings (SPECTER). Finds other fields' terminology, but the ranking is opaque.
- **Citation verification** – Research agents can invent references or cite sources that do not support the sentence. Check existence (the DOI resolves to that paper) and support (the passage says what is claimed) for every source.

## Key references

- Wohlin, C. (2014). Guidelines for snowballing in systematic literature studies and a replication in software engineering. In Proceedings of the 18th International Conference on Evaluation and Assessment in Software Engineering (Article 38). ACM. https://doi.org/10.1145/2601248.2601268
- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. Journal of the American Society for Information Science, 24(4), 265–269. https://doi.org/10.1002/asi.4630240406
- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics (pp. 2270–2282). Association for Computational Linguistics. https://doi.org/10.18653/v1/2020.acl-main.207

## Tools that help

Semantic Scholar · OpenAlex · Consensus · Litmaps · Paper Search MCP · Connected Papers · Research Rabbit
