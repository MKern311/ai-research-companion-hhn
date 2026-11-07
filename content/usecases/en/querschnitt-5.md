---
id: querschnitt-5
phase: querschnitt
order: 5
title: AI use & decision log
risk: 1
mode: Assist
potential: 2
capabilities: agentisch
routes: chat
tools: Notion
---

Record date, tool, prompt, saved output and the research decisions they informed – the basis for your AI declaration and a traceable thesis.

## Problem

At submission you must declare your AI use, but months later you cannot reconstruct which tool, prompt or output shaped which part of the thesis, or how you checked it.

## Result

A running provenance log of AI use, checks and the decisions they informed, plus a declaration drafted only from that log and aligned with your university's policy.

## Steps

1. Log tool, date, prompt, output location and check
2. Record which research decision each use informed
3. Keep the log in a note, Word or Excel
4. Draft the declaration only from logged entries
5. Check it against university policy with your supervisor

## Concepts

### Disclosure of AI use (COPE)

The Committee on Publication Ethics (2023): AI tools cannot be authors because they cannot take responsibility; authors must state how and which tools were used, for example in the methods or acknowledgements, and remain accountable for all content.

### Living guidelines on generative AI in research

European Commission (2024) guidance: researchers remain responsible for outputs, use AI transparently, protect privacy and confidentiality, respect intellectual property, and avoid substantial use in sensitive activities such as peer review or evaluating proposals.

### Provenance record

Following the World Wide Web Consortium's PROV model, each entry links an entity (the output), the activity that produced it (prompt, date, tool and version) and the agent responsible (you), so any AI-influenced passage can be traced to its origin.

### UK Concordat to Support Research Integrity

Names five elements of research integrity: honesty, rigour, transparency and open communication, care and respect, and accountability. A log of AI use is evidence of transparency and rigour.

## References

- Committee on Publication Ethics. (2023). Authorship and AI tools: COPE position statement. COPE.
- European Commission, Directorate-General for Research and Innovation. (2024). Living guidelines on the responsible use of generative AI in research. Publications Office of the European Union.
- Universities UK. (2019). The concordat to support research integrity. Universities UK.

## Practice exercise

### Task

Log one AI task as the first row of an AI-use log and draft a declaration from it. You learn whether the assistant keeps to the logged facts or embellishes the declaration with uses and benefits you did not record.

### Prompt

```text
I am a postgraduate researcher starting a log of my AI use as the basis for the AI declaration in my thesis. Create a table with the columns: date, tool, task, prompt (summary), files used, where the output is saved, how I checked it, what I used, research decision informed. Fill row one from this description: today I attached the Met Office Oxford station file to my AI assistant and asked it to draft a codebook and README for a data deposit; I checked the tmax range and the number of missing sunshine values against the file; the first draft explained the column 'af' without marking the meaning as a guess, so I asked it to add a [CHECK] mark and looked the meaning up in the Met Office documentation; I decided to keep the provisional rows in the deposit and flag them rather than delete them. Then draft a declaration of about 80 words in a neutral tone describing only this logged use. Do not add uses, tools or benefits I have not listed.
```

### Check

The declaration names only the AI assistant, the Oxford station file and the codebook task, and claims no benefits such as saved time. The description does not say where the output is saved, so that cell must stay empty or be marked, not invented. Compare the wording with your university's AI policy.

## Own material

### Bring

A short description of one AI task you did today (for example in this workshop) and, if available, your university's guidance on declaring AI use.

### Steps

1. Describe today's AI task: tool, purpose, prompt and how you checked it.
2. Ask for a log table template with your task as row one, including the research decision it informed.
3. Save the table in Word or Excel.
4. Ask for a short draft AI declaration based only on the log.

### Prompt

```text
I am a postgraduate researcher and want to keep a log of my AI use as the basis for the AI declaration in my thesis. Create a log table with columns: date, tool, task, prompt (full or summary), where the output is saved, how I checked it, what I used in my work, which research decision it informed. Fill in the first row from this description: [describe today's task]. Then draft a declaration of about 100 words, in a neutral tone, that describes only the uses in the log. Do not add uses I have not listed. [Paste university guidance if available.]
```

### Check

Someone else could retrace your step from the log row (tool, date, prompt, saved output), and the declaration mentions nothing that is not in the log; check it against your university's policy.

## Technology

Describe the task to your AI assistant and save the log in Word or Excel; add a row after each AI task. Paste your university's guidance so the declaration follows it.

## Levels

### Chat

Run the starter prompt and save the table as a Word or Excel file. In the same chat, ask the assistant to mark which log cell each sentence of the declaration rests on and to list any cell that is still empty.

### Project / Notebook

Add your running AI-use log (as .xlsx or a Word file) and your university's AI policy as references, and update the log as you work. At submission ask for a declaration drawn only from the log and checked against the policy – months of use become traceable instead of reconstructed from memory.

### Custom assistant

Instructions: the log columns, fill only from what you describe, leave unknown cells empty, declarations in a neutral tone naming only logged uses, never add tools or benefits. Knowledge: your university's AI policy. Starter prompts: "Turn today's AI use into a log row" and "Draft my declaration from these rows". Reusable after every AI task – the agent does not keep the log, so paste each new row into your Excel log or Word file.
