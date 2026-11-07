---
id: querschnitt-4
phase: querschnitt
order: 4
title: Metadata, FAIR data & replication
risk: 2
mode: Co-create
potential: 2
capabilities: generierung
routes: files; external; connected
connect: GitHub (repositories)
tools: GitHub Copilot
data: D7
practice_data: D7
---

Suggest metadata, codebooks and README files for data publications, assemble a replication package and check that every number in the paper can be reproduced from the code.

## Problem

Data deposit and replication packages come last, when details are forgotten; codebooks and READMEs get rushed, flags go undocumented and numbers in the paper may not reproduce.

## Result

A codebook computed from the file, a README and repository metadata draft, and a replication checklist – data others can find and reuse, and results you can show are reproducible.

## Steps

1. Upload the dataset and describe how it was collected
2. Ask for a codebook computed from the file
3. Draft a README and DataCite metadata fields
4. Choose a licence and a repository that issues DOIs
5. Check two columns and every [CHECK] mark yourself

## Concepts

### FAIR principles

Wilkinson et al. (2016): data should be findable (persistent identifier, rich metadata), accessible (retrievable by standard protocols), interoperable (shared vocabularies and formats) and reusable (clear licence, provenance, community standards). FAIR does not require data to be open.

### DataCite Metadata Schema

The metadata standard behind most dataset DOIs. Mandatory properties are identifier, creator, title, publisher, publication year and resource type; recommended ones such as description, subject and rights make a record easier to find and reuse.

### Codebook (data dictionary)

Documents each variable: name, label, type, unit, valid range or codes, missing-value codes and flags, and how it was derived. The Data Documentation Initiative (DDI) provides a standard for social and survey data.

### Reproducibility and replicability

The National Academies (2019): reproducibility means consistent results from the same data, code and conditions; replicability means consistent results across studies that collect new data. A replication package secures reproducibility.

## References

- Wilkinson, M. D., Dumontier, M., Aalbersberg, I. J., Appleton, G., Axton, M., Baak, A., … Mons, B. (2016). The FAIR Guiding Principles for scientific data management and stewardship. Scientific Data, 3, 160018. doi:10.1038/sdata.2016.18
- National Academies of Sciences, Engineering, and Medicine. (2019). Reproducibility and replicability in science. The National Academies Press. doi:10.17226/25303

## Practice exercise

### Task

Write a codebook, README and metadata record for the Oxford station file as if depositing a cleaned version. You learn whether the assistant computes ranges and missing counts from the file and marks guessed meanings instead of inventing them.

### Prompt

```text
I am preparing a cleaned version of the attached Met Office Oxford station text file for deposit in a data repository. Read the header lines first. Use Python to inspect the file, then create a codebook table: variable name, description, type, unit, observed range, number of missing values, missing-value code, and flags used (*, # or 'Provisional'). Then draft a README with title, creators (leave as a placeholder), description, source and how the data were produced, file list, variables, licence (leave as a placeholder), how to cite the original Met Office data, and contact. Mark any meaning you have guessed with [CHECK]. List the DataCite mandatory metadata fields with suggested values. Finally, give a replication checklist covering data, code, software versions, run order and expected outputs.
```

### Check

Compare with the file: tmax ranges from −0.2 to 28.2 °C, sun is missing ('---') in 912 months and rain in none. Any meaning not defined in the header, such as 'af', must carry [CHECK].

## Own material

### Bring

A small public or dummy dataset as CSV or Excel, for example from data.gov.uk or the UK Data Service open data.

### Steps

1. Attach the dataset and say what it contains and how it was collected.
2. Ask for a codebook with computed ranges and missing values.
3. Ask for a README and key repository metadata fields.
4. Check ranges and missing counts for two columns in the file.

### Prompt

```text
I am preparing a dataset for deposit in [repository]. Attached is [file name]; it contains [short description and how it was collected]. Use Python to inspect the file, then create a codebook table: variable name, description, type, unit, range or allowed values, number of missing values, missing-value code. Then draft a README with: title, creators [placeholder], description, methods, file list, variables, licence [placeholder], how to cite, contact. Mark any variable meaning you have guessed with [CHECK]. Then list the core metadata fields the repository will likely ask for. Finally, give a checklist for a replication package (data, code, software versions, run order, expected outputs) and say how I can check that each number in my paper is reproduced by the code.
```

### Check

For two columns, the ranges and missing counts in the codebook match the file, and every variable meaning the assistant guessed is marked [CHECK].

## Technology

Upload the CSV or text file to your AI assistant; if it can run code, it computes ranges and missing values in Python and drafts the README – if not, run the code yourself. For the replication package, a code editor with an AI assistant, such as VS Code, helps you script and test the run order.

## Levels

### Chat

Run the starter prompt with the D7 Oxford file attached. In the same chat, ask the assistant to show the Python lines that computed the tmax range and the missing sunshine count, and to list every column meaning it took from the header versus guessed.

### Project / Notebook

Add the D7 text file, the Met Office header notes, your methods notes and the repository's deposit guidelines as references; for your own data, add your protocol and file list. Ask for README and metadata drafts that cite these sources and keep them as saved notes until deposit. Depending on your tool, a notebook may not run Python – if not, compute the codebook in a chat and add it.

### Custom assistant

Instructions: codebook columns, ranges and missing counts computed with Python, [CHECK] on every guessed meaning, README sections, DataCite mandatory fields, a replication checklist. Knowledge: your repository's deposit guidelines and licence options. Switch on code execution / data analysis if your tool offers it. Starter prompts: "Codebook and README for this file" and "Replication checklist for my paper". Reusable for every dataset you deposit.

### Automation / own code

Connect GitHub through its MCP server or a connector so the assistant reads your repository's code, README and issues and checks the replication package against them – a basic custom assistant only sees files you upload. On GitHub itself: a GitHub Actions workflow reruns the replication code on every change, and the Zenodo integration archives each release with a DOI. Check data protection and approval with your university first.
