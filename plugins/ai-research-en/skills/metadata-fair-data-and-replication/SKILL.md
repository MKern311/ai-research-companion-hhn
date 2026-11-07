---
name: metadata-fair-data-and-replication
description: "Suggest metadata, codebooks and README files for data publications, assemble a replication package and check that every number in the paper can be reproduced from the code. Use when the user works on: Metadata, FAIR data & replication."
---

# Metadata, FAIR data & replication

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/querschnitt-4

## Goal

Suggest metadata, codebooks and README files for data publications, assemble a replication package and check that every number in the paper can be reproduced from the code.

A codebook computed from the file, a README and repository metadata draft, and a replication checklist – data others can find and reuse, and results you can show are reproducible.

## When to use

Data deposit and replication packages come last, when details are forgotten; codebooks and READMEs get rushed, flags go undocumented and numbers in the paper may not reproduce.

## Workflow with the user

Guide the user through these steps. Where a step says “ask the assistant”, that is you.

1. Attach the dataset and say what it contains and how it was collected.
2. Ask for a codebook with computed ranges and missing values.
3. Ask for a README and key repository metadata fields.
4. Check ranges and missing counts for two columns in the file.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.

## Typical request

```text
I am preparing a dataset for deposit in [repository]. Attached is [file name]; it contains [short description and how it was collected]. Use Python to inspect the file, then create a codebook table: variable name, description, type, unit, range or allowed values, number of missing values, missing-value code. Then draft a README with: title, creators [placeholder], description, methods, file list, variables, licence [placeholder], how to cite, contact. Mark any variable meaning you have guessed with [CHECK]. Then list the core metadata fields the repository will likely ask for. Finally, give a checklist for a replication package (data, code, software versions, run order, expected outputs) and say how I can check that each number in my paper is reproduced by the code.
```

## Quality check

For two columns, the ranges and missing counts in the codebook match the file, and every variable meaning the assistant guessed is marked [CHECK].

## Limits

- Risk: Your own unpublished drafts, reviews or third-party content.

## Key concepts

- **FAIR principles** – Wilkinson et al. (2016): data should be findable (persistent identifier, rich metadata), accessible (retrievable by standard protocols), interoperable (shared vocabularies and formats) and reusable (clear licence, provenance, community standards). FAIR does not require data to be open.
- **DataCite Metadata Schema** – The metadata standard behind most dataset DOIs. Mandatory properties are identifier, creator, title, publisher, publication year and resource type; recommended ones such as description, subject and rights make a record easier to find and reuse.
- **Codebook (data dictionary)** – Documents each variable: name, label, type, unit, valid range or codes, missing-value codes and flags, and how it was derived. The Data Documentation Initiative (DDI) provides a standard for social and survey data.
- **Reproducibility and replicability** – The National Academies (2019): reproducibility means consistent results from the same data, code and conditions; replicability means consistent results across studies that collect new data. A replication package secures reproducibility.

## Key references

- Wilkinson, M. D., Dumontier, M., Aalbersberg, I. J., Appleton, G., Axton, M., Baak, A., … Mons, B. (2016). The FAIR Guiding Principles for scientific data management and stewardship. Scientific Data, 3, 160018. https://doi.org/10.1038/sdata.2016.18
- National Academies of Sciences, Engineering, and Medicine. (2019). Reproducibility and replicability in science. The National Academies Press. https://doi.org/10.17226/25303

## Tools that help

GitHub (repositories) · GitHub Copilot
