---
id: design-4
phase: design
order: 4
title: Ethics application & data management plan
risk: 2
mode: Co-create
potential: 3
capabilities: generierung
routes: chat; files
data: D3; D5; D7
practice_data: D3; D5; D7
---

Structure drafts along your institution’s templates – the study-specific reasoning on consent, risks and anonymisation must be your own.

## Problem

Ethics forms and data management plans are long and unfamiliar; you lose time working out what each section expects before you can reason about consent, risk, data protection and reuse.

## Result

A skeleton under every heading with reviewers' expectations and the questions you must answer – so your time goes into the study-specific reasoning on consent, risk and anonymisation, which stays yours.

## Steps

1. Paste the template headings and a short study summary
2. Ask for expectations and guiding questions per heading
3. Write consent, risk and anonymisation reasoning yourself
4. Check data handling against FAIR and data minimisation
5. Check each section against official guidance and your ethics office

## Concepts

### Core principles of ethics review

Committees look for valid informed consent (information, capacity, voluntariness, right to withdraw), risk of harm proportionate to benefit, confidentiality, and extra care for vulnerable groups. The study-specific reasoning on each must be your own.

### DCC checklist for a data management plan

The Digital Curation Centre groups DMP questions into administrative data, data collection, documentation and metadata, ethics and legal compliance, storage and backup, selection and preservation, data sharing, and responsibilities and resources. Many institutional templates use similar headings.

### FAIR principles

Data and metadata should be Findable (persistent identifier, rich metadata), Accessible (retrievable by a standard protocol), Interoperable (shared formats and vocabularies) and Reusable (clear licence, provenance, community standards). FAIR does not mean open.

### Data minimisation, pseudonymisation and anonymisation

Under UK GDPR you collect only the personal data you need. Pseudonymised data (identifiers replaced, key kept) remain personal data; only data that can no longer identify anyone are anonymous. State which you will hold, and when.

## References

- Wilkinson, M. D., Dumontier, M., Aalbersberg, I. J., et al. (2016). The FAIR Guiding Principles for scientific data management and stewardship. Scientific Data, 3, 160018. doi:10.1038/sdata.2016.18
- Michener, W. K. (2015). Ten simple rules for creating a good data management plan. PLOS Computational Biology, 11(10), e1004525. doi:10.1371/journal.pcbi.1004525
- Corti, L., Van den Eynden, V., Bishop, L., & Woollard, M. (2014). Managing and sharing research data: A guide to good practice. Sage.

## Practice exercise

### Task

You draft a data management plan for a project that reuses three open datasets. You learn whether the assistant takes licence and citation terms from the files or invents them, and whether it notices provisional, estimated and relocated measurements.

### Prompt

```text
I am drafting a data management plan for a postgraduate project that reuses three open datasets, attached: the HadCRUT5 monthly CSV, the NOAA Mauna Loa CO₂ CSV and the Met Office Oxford station file. No human participants are involved. Use these headings: data collection; documentation and metadata; ethics and legal compliance; storage and backup; selection and preservation; data sharing; responsibilities. For each heading give what reviewers usually expect, the questions I must answer myself, and a short skeleton with [placeholders]. Take licence, citation and data-quality information only from the file headers and quote it; where a file states no licence, write 'not stated in file – check provider'. Note how I should record versions, provisional or estimated values and changes of measurement site. Do not state institutional rules or legal requirements unless you are sure.
```

### Check

The NOAA header requests citation and mentions possible co-authorship and the Maunakea site; the Oxford file marks estimated values with * and 'Provisional' rows; the HadCRUT5 CSV states no licence, so any licence the assistant names needs a source.

## Own material

### Bring

The section headings of your institution's ethics form or a public data management plan template, plus a short fictional or non-sensitive study summary.

### Steps

1. Paste the template headings and your short study summary.
2. Ask for a skeleton draft under each heading with guiding questions.
3. Ask it to leave consent, risk and anonymisation reasoning as prompts for you.
4. Compare each section with the official template guidance.

### Prompt

```text
I am preparing a [ethics application or data management plan] for a study on [topic]. The template headings are: [headings]. My study in brief: [summary]. For each heading, give: what reviewers usually expect, the questions I must answer myself, and a short skeleton with [placeholders]. Do not write study-specific reasoning on consent, risks or anonymisation; leave clear prompts for me instead. Do not state institutional rules or legal requirements unless you are sure; if you are not sure, say so.
```

### Check

Each section matches the official template guidance, no institutional rule or legal claim (for example on UK GDPR) appears that you cannot confirm, and the consent and risk reasoning is left for you to write.

## Technology

Paste the template headings into your AI assistant, or upload the blank institutional form or a public DMPonline template as Word or PDF; never upload real participant information. In the exercise, attach three practice data files and check what the assistant claims about them.

## Levels

### Chat

Run the starter prompt with your template headings, or with the three practice data files. In the same chat, ask for a list of every statement in the skeleton that you still need to confirm with your ethics office, library or data provider.

### Project / Notebook

Add your institution's ethics form and data management plan template with their guidance notes, your protocol and the licence or documentation pages of reused data, saved as PDFs – for the practice version D7, plus D3 and D5 (save them as .xlsx first if your tool does not accept CSV). Ask which template questions your drafts do not yet answer. You come back as the application goes through revisions and reviewer comments.

### Custom assistant

Call it 'Ethics and DMP drafter'. Instructions: follow the template headings, give reviewer expectations, open questions and a skeleton with [placeholders], take licences only from source documents, and never write consent, risk or anonymisation reasoning or state rules it cannot source. Knowledge: your institution's public templates and guidance pages. Starter prompt: 'Draft the skeleton for [ethics application or DMP]: [study summary]'. Reusable for every new project.
