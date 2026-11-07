---
name: extraction-from-documents
description: "Obtain structured data from reports, web pages, archival records or data documentation (e.g. key figures, statements, metadata). Use when the user works on: Extraction from documents."
---

# Extraction from documents

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/erhebung-1

## Goal

Obtain structured data from reports, web pages, archival records or data documentation (e.g. key figures, statements, metadata).

A table built on a predefined extraction form, each value with its page or line and a verbatim quote as provenance, 'not stated' where absent, and an error rate from your own verification sample.

## When to use

Key figures, statements and metadata sit scattered across long reports, web pages, archival records and data documentation; copying them into a spreadsheet by hand is slow and invites transcription errors and inconsistent definitions.

## Workflow with the user

Guide the user through these steps. Where a step says “ask the assistant”, that is you.

1. Attach the PDF, or only the relevant pages of a long report.
2. Paste the starter prompt with the fields you want extracted.
3. Spot-check five values against the PDF using the cited page numbers.
4. Copy the checked table into Excel or ask the assistant for a CSV file.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.

## Typical request

```text
I am collecting data from documents for a research project on [topic]. From the attached PDF, extract these fields: [field 1, field 2, field 3, e.g. year, revenue, number of staff, stated goals]. Return a table with one row per [unit, e.g. year or organisation] and a column for each field, plus the page number and a short verbatim quote as evidence for each value. If a value is missing or ambiguous, write 'not found' rather than estimating. Do not use any information from outside the document.
```

## Quality check

Five randomly chosen values match the PDF exactly on the cited page, and 'not found' appears only where the document really lacks the value.

## Limits

- Risk: Personal or sensitive data, or decisions that feed directly into your results.

## Key concepts

- **Data extraction form** – A predefined list of fields with operational definitions, units and allowed values, piloted on a few documents before full use. Standard in systematic reviews across fields; it keeps extraction consistent across documents, people and tools.
- **Double extraction and verification** – Two people extract independently and resolve discrepancies, or one extracts and a second verifies. With AI as first extractor, verify every value you will analyse, or at least a random sample with a recorded error rate.
- **Provenance: location and verbatim quote** – Recording where each value comes from – page in a PDF, line in a text file, URL and access date for a web page – makes extraction auditable and exposes invented values quickly. Distinguish 'not stated' from 'zero' and from 'unclear', and never let the extractor fill a gap from general knowledge.
- **Document analysis (Bowen)** – A systematic procedure for reviewing printed and electronic documents – skimming, thorough reading, interpretation – with attention to authenticity, credibility, representativeness and the purpose for which each document was produced.

## Key references

- Higgins, J. P. T., Thomas, J., Chandler, J., Cumpston, M., Li, T., Page, M. J., & Welch, V. A. (Eds.). (2019). Cochrane handbook for systematic reviews of interventions (2nd ed.). Wiley. https://doi.org/10.1002/9781119536604
- Bowen, G. A. (2009). Document analysis as a qualitative research method. Qualitative Research Journal, 9(2), 27–40. https://doi.org/10.3316/QRJ0902027

## Tools that help

Elicit
