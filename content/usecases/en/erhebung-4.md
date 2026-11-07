---
id: erhebung-4
phase: erhebung
order: 4
title: Dataset discovery
risk: 1
mode: Assist
potential: 2
capabilities: recherche
routes: chat; files; connected
connect: OpenAlex
tools: Perplexity
data: D9; D1; D2; D3; D4
practice_data: D9
---

Find open secondary data and repositories for the research question and assess their suitability.

## Problem

Suitable secondary data often exist but sit across statistics offices, archives and repositories you do not know – you find them after collecting your own, or overlook licence and definition differences.

## Result

A shortlist of verified datasets with coverage, unit of analysis, access conditions, licence and gaps against your variables – a quicker route to data, or a clear case for collecting your own.

## Steps

1. Specify region, period, unit of analysis and key variables
2. Ask the assistant for candidate datasets in a table
3. Open each link; confirm variables, licence and version
4. Read the documentation to judge fitness for your purpose
5. Drop unverifiable entries and rank the rest by fit

## Concepts

### Fitness for use (Wang & Strong)

Data quality is judged relative to your purpose in four categories: intrinsic (accuracy, provenance), contextual (relevance, coverage, timeliness, granularity), representational (format, documentation) and accessibility (licence, access route). Assess each against your question.

### FAIR principles

A quick screen for reuse: is the dataset Findable (persistent identifier such as a DOI), Accessible (clear access route), Interoperable (standard format) and Reusable (licence, provenance, documentation)? Without a licence you cannot assume reuse rights.

### Datasheets and documentation

Good datasets document motivation, composition, collection process, preprocessing, intended uses, distribution and maintenance (Gebru et al. 2021). Read this documentation, codebook or user guide before trusting any summary the assistant gives.

### Constraints of secondary data

Reused data were collected for another purpose: variables may be defined differently, reference periods and units may differ, and versions change. Record the version and access date of every file you use.

## References

- Wang, R. Y., & Strong, D. M. (1996). Beyond accuracy: What data quality means to data consumers. Journal of Management Information Systems, 12(4), 5–33. doi:10.1080/07421222.1996.11518099
- Wilkinson, M. D., Dumontier, M., Aalbersberg, I. J., et al. (2016). The FAIR Guiding Principles for scientific data management and stewardship. Scientific Data, 3, 160018. doi:10.1038/sdata.2016.18
- Gebru, T., Morgenstern, J., Vecchione, B., Vaughan, J. W., Wallach, H., Daumé III, H., & Crawford, K. (2021). Datasheets for datasets. Communications of the ACM, 64(12), 86–92. doi:10.1145/3458723

## Practice exercise

### Task

You ask your AI assistant to find open global and Central England temperature datasets, then compare its list with the descriptions of D1–D4 and D9 in the Practice data tab, which you keep open but do not attach. You learn whether it finds the main records and states their baselines and licences correctly or invents them.

### Prompt

```text
I am a postgraduate researcher. Research question: how have global and Central England annual temperatures changed since the late 19th century, and how much do the main global records differ? I need open monthly or daily data, global and for central England, from 1880 or earlier. Search the web for suitable datasets. Give up to six options as a table: name, provider, link, period covered, temporal resolution, baseline period of the anomalies, licence, fit and what is missing. If you are not sure of a baseline or licence, say so; do not invent datasets. Then read the header of the attached ERA5 daily CSV and say whether it confirms the baseline you stated for ERA5.
```

### Check

Compare with the practice-pack descriptions in the Practice data tab: HadCRUT5 (D3) anomalies relative to 1961–1990, GISTEMP (D4) 1951–1980, ERA5 (D9) 1991–2020 – the only one of these baselines stated in a file header; HadCET (D1 daily from 1878, D2 monthly from 1659) gives actual temperatures, not anomalies, under the Open Government Licence v3; Berkeley Earth data are CC BY-NC (see 'Not included'). Open every link the assistant lists.

## Own material

### Bring

Your research question and a note of the data you need: country, time period, unit of analysis and key variables.

### Steps

1. Switch web search on (if your tenant allows it), then paste the starter prompt with your research question and data requirements.
2. Open each suggested link and check coverage, access conditions and latest update.
3. Remove any dataset you cannot find or that lacks your key variables.
4. Ask the assistant to rank the confirmed datasets by fit to your question.

### Prompt

```text
I am a postgraduate researcher in [discipline]. My research question is: [question]. I need secondary data covering [country or region] and [time period], at the level of [individuals, firms, regions or texts], with variables on [key variables]. Search the web for open datasets and repositories (for example the UK Data Service, national statistics offices, Zenodo or discipline repositories). Give up to six options as a table: name, provider, link, coverage, access conditions, fit and what is missing. If you are not sure a dataset includes a variable, say so; do not invent datasets.
```

### Check

Each link leads to a real dataset page whose documentation confirms the coverage and at least one key variable the assistant claimed.

## Technology

Your AI assistant lists candidate datasets (web search depends on your tool and settings); you open every link and read the documentation. Practise on temperature records: does it find HadCRUT5, GISTEMP, ERA5 and Central England Temperature? Searching OpenAlex dataset records needs a connector (MCP) or a script, see level 4.

## Levels

### Chat

Run the starter prompt with web search switched on, with the ERA5 file or your own data needs. In the same chat, ask it to rank the datasets whose links you confirmed by fit, and to list what each one lacks for your variables.

### Project / Notebook

Save the documentation pages or codebooks of the candidate datasets as PDFs and add them with your variable list – for the practice version D9 (save it as .xlsx first if your tool does not accept CSV). Ask which dataset covers which variable, period and unit, under which licence. Depending on your tool, the project answers only from these documents, so every claim comes from documentation, not the web.

### Custom assistant

Call it 'Data scout'. Instructions: the fixed table (name, provider, link, coverage, unit of analysis, access, licence, fit, gaps), 'say when you are not sure' and 'never invent datasets'. Knowledge: the public websites of repositories you trust, such as the UK Data Service or your discipline's archive. Starter prompt: 'Find open data for: [question, region, period, variables]'. Reusable for every new question; you still open every link.

### Automation / own code

Add the OpenAlex MCP server to a custom assistant or workflow, so the assistant searches a scholarly catalogue for datasets and the papers that used them instead of relying on general web search. This needs a tool that supports MCP connectors. On GitHub: a script searches the OpenAlex API for papers that use a dataset, and the DataCite or Zenodo API for the dataset records themselves. Check data protection and approval with your university first.
