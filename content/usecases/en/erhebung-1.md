---
id: erhebung-1
phase: erhebung
order: 1
title: Extraction from documents
risk: 3
mode: Delegate
potential: 3
capabilities: analyse; agentisch
routes: files; external
tools: Elicit
data: D7; D8
practice_data: D7; D8
---

Obtain structured data from reports, web pages, archival records or data documentation (e.g. key figures, statements, metadata).

## Problem

Key figures, statements and metadata sit scattered across long reports, web pages, archival records and data documentation; copying them into a spreadsheet by hand is slow and invites transcription errors and inconsistent definitions.

## Result

A table built on a predefined extraction form, each value with its page or line and a verbatim quote as provenance, 'not stated' where absent, and an error rate from your own verification sample.

## Steps

1. Define the unit of analysis and each field's operational definition
2. Pilot the form on one document and refine definitions
3. Ask for page or line numbers, quotes and 'not stated' markers
4. Verify a random sample and record the error rate

## Concepts

### Data extraction form

A predefined list of fields with operational definitions, units and allowed values, piloted on a few documents before full use. Standard in systematic reviews across fields; it keeps extraction consistent across documents, people and tools.

### Double extraction and verification

Two people extract independently and resolve discrepancies, or one extracts and a second verifies. With AI as first extractor, verify every value you will analyse, or at least a random sample with a recorded error rate.

### Provenance: location and verbatim quote

Recording where each value comes from – page in a PDF, line in a text file, URL and access date for a web page – makes extraction auditable and exposes invented values quickly. Distinguish 'not stated' from 'zero' and from 'unclear', and never let the extractor fill a gap from general knowledge.

### Document analysis (Bowen)

A systematic procedure for reviewing printed and electronic documents – skimming, thorough reading, interpretation – with attention to authenticity, credibility, representativeness and the purpose for which each document was produced.

## References

- Higgins, J. P. T., Thomas, J., Chandler, J., Cumpston, M., Li, T., Page, M. J., & Welch, V. A. (Eds.). (2019). Cochrane handbook for systematic reviews of interventions (2nd ed.). Wiley. doi:10.1002/9781119536604
- Bowen, G. A. (2009). Document analysis as a qualitative research method. Qualitative Research Journal, 9(2), 27–40. doi:10.3316/QRJ0902027

## Practice exercise

### Task

You extract metadata from the header lines of three UK weather data files – documents, not papers – into one table. You learn whether the assistant cites the right line, writes 'not stated' where a file is silent, or fills gaps with what it knows about the Met Office.

### Prompt

```text
Attached are three plain-text files of UK weather records: the Oxford and Durham station files and the UK rainfall series. Treat the header lines and layout of each file as the document. Extract into one table, one row per file: name of station or series; provider or source; location (latitude, longitude, height) or area covered; variables with their units; first year and month of data; last year and month of data; date of last update; how missing values are marked; how estimated values are marked; how provisional values are marked; notes on instruments or methods; licence or terms of use. For every value give the line number and the verbatim text from the file as evidence. Write 'not stated' if a file does not give a field; do not use your own knowledge or the web. Then offer the table as a CSV file.
```

### Check

Check each cell on the cited line. Oxford: Lat 51.761 Lon -1.262, 63 metres amsl, January 1853 to September 2026. Durham: Lat 54.768 Lon -1.585, 102 metres amsl, January 1880 to September 2026. Both mark estimates with *, missing months with --- and the 2026 rows as 'Provisional', and state no provider, update date or licence; the # sunshine-sensor flag is defined, but no value carries it. The rainfall file names 'Met Office National Climate Information Centre', 'Last updated 01-Oct-2026' and 'starting in 1836', but states no units or licence. Any provider, unit or licence the assistant adds from its own knowledge is an extraction error.

## Own material

### Bring

An open-access PDF with figures or tables, such as an annual report, a government statistics release or an open-access paper.

### Steps

1. Attach the PDF, or only the relevant pages of a long report.
2. Paste the starter prompt with the fields you want extracted.
3. Spot-check five values against the PDF using the cited page numbers.
4. Copy the checked table into Excel or ask the assistant for a CSV file.

### Prompt

```text
I am collecting data from documents for a research project on [topic]. From the attached PDF, extract these fields: [field 1, field 2, field 3, e.g. year, revenue, number of staff, stated goals]. Return a table with one row per [unit, e.g. year or organisation] and a column for each field, plus the page number and a short verbatim quote as evidence for each value. If a value is missing or ambiguous, write 'not found' rather than estimating. Do not use any information from outside the document.
```

### Check

Five randomly chosen values match the PDF exactly on the cited page, and 'not found' appears only where the document really lacks the value.

## Technology

Upload the document – a PDF, selected pages, a saved web page or a text file – to your AI assistant and ask for a table with page or line numbers and quotes; it can usually save the table as CSV or Excel. For extraction from research papers at scale, Elicit does the same – verify either way.

## Levels

### Chat

Run the starter prompt with the Oxford, Durham and rainfall files, or with your own PDF. In the same chat, name five cells at random and ask it to quote the evidence line again, then compare with the file yourself.

### Project / Notebook

Add the documents you extract from – reports, archival records or data documentation (D7 and D8 work as .txt) – and your extraction form as a Word file. Ask for the same fields across all documents, each with line or page and quote. New documents join one consistent table; only approved material goes in, and you verify a sample of every batch.

### Custom assistant

Call it 'Extraction assistant' and switch on code execution / file creation if your tool offers it, for the CSV export. Instructions: your extraction form with field definitions, one row per document, line or page and a verbatim quote for every value, 'not stated' where absent, no outside knowledge. Starter prompt: 'Extract the form fields from the attached documents'. Only approved material goes in; reusable for every batch, and you check a random sample each time.

### Automation / own code

A low-code flow (e.g. Power Automate, n8n) can pass every new document in a cloud folder to the assistant and append the extracted rows to a table, with a log for your verification sample. A custom assistant alone cannot run that multi-step automation. On GitHub: a Python script calls your institution's approved AI API for each document and writes the rows to one table, versioned next to your verification log. Check data protection and approval with your university first.
