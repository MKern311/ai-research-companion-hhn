---
name: dataset-discovery
description: "Find open secondary data and repositories for the research question and assess their suitability. Use when the user works on: Dataset discovery."
---

# Dataset discovery

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/erhebung-4

## Goal

Find open secondary data and repositories for the research question and assess their suitability.

A shortlist of verified datasets with coverage, unit of analysis, access conditions, licence and gaps against your variables – a quicker route to data, or a clear case for collecting your own.

## When to use

Suitable secondary data often exist but sit across statistics offices, archives and repositories you do not know – you find them after collecting your own, or overlook licence and definition differences.

## Procedure

1. Switch web search on (if your tenant allows it), then paste the starter prompt with your research question and data requirements.
2. Open each suggested link and check coverage, access conditions and latest update.
3. Remove any dataset you cannot find or that lacks your key variables.
4. Ask the assistant to rank the confirmed datasets by fit to your question.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.
- Call it 'Data scout'. Instructions: the fixed table (name, provider, link, coverage, unit of analysis, access, licence, fit, gaps), 'say when you are not sure' and 'never invent datasets'. Knowledge: the public websites of repositories you trust, such as the UK Data Service or your discipline's archive. Starter prompt: 'Find open data for: [question, region, period, variables]'. Reusable for every new question; you still open every link.

## Starter prompt

```text
I am a postgraduate researcher in [discipline]. My research question is: [question]. I need secondary data covering [country or region] and [time period], at the level of [individuals, firms, regions or texts], with variables on [key variables]. Search the web for open datasets and repositories (for example the UK Data Service, national statistics offices, Zenodo or discipline repositories). Give up to six options as a table: name, provider, link, coverage, access conditions, fit and what is missing. If you are not sure a dataset includes a variable, say so; do not invent datasets.
```

## Quality check

Each link leads to a real dataset page whose documentation confirms the coverage and at least one key variable the assistant claimed.

## Limits

- Risk: Public or your own non-sensitive material; errors are easy to spot.

## Key concepts

- **Fitness for use (Wang & Strong)** – Data quality is judged relative to your purpose in four categories: intrinsic (accuracy, provenance), contextual (relevance, coverage, timeliness, granularity), representational (format, documentation) and accessibility (licence, access route). Assess each against your question.
- **FAIR principles** – A quick screen for reuse: is the dataset Findable (persistent identifier such as a DOI), Accessible (clear access route), Interoperable (standard format) and Reusable (licence, provenance, documentation)? Without a licence you cannot assume reuse rights.
- **Datasheets and documentation** – Good datasets document motivation, composition, collection process, preprocessing, intended uses, distribution and maintenance (Gebru et al. 2021). Read this documentation, codebook or user guide before trusting any summary the assistant gives.
- **Constraints of secondary data** – Reused data were collected for another purpose: variables may be defined differently, reference periods and units may differ, and versions change. Record the version and access date of every file you use.

## Key references

- Wang, R. Y., & Strong, D. M. (1996). Beyond accuracy: What data quality means to data consumers. Journal of Management Information Systems, 12(4), 5–33. https://doi.org/10.1080/07421222.1996.11518099
- Wilkinson, M. D., Dumontier, M., Aalbersberg, I. J., et al. (2016). The FAIR Guiding Principles for scientific data management and stewardship. Scientific Data, 3, 160018. https://doi.org/10.1038/sdata.2016.18
- Gebru, T., Morgenstern, J., Vecchione, B., Vaughan, J. W., Wallach, H., Daumé III, H., & Crawford, K. (2021). Datasheets for datasets. Communications of the ACM, 64(12), 86–92. https://doi.org/10.1145/3458723

## Tools that help

OpenAlex · Perplexity
