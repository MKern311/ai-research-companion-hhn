---
id: erhebung-7
phase: erhebung
order: 7
title: Digitising whiteboards, flipcharts and card sorts
risk: 3
mode: Co-create
potential: 3
capabilities: analyse; synthese
routes: files
data: AB
practice_ref: AB
---

Turn photos of whiteboards, flipcharts or card sorts from workshops and experiments into structured data – transcribed, clustered and mapped (e.g. items to constructs) – ready for analysis.

## Problem

Card sorts, item-sorting tasks and workshop boards produce rich data on paper; typing them up and counting placements by hand takes hours and introduces transcription errors.

## Result

A transcribed, structured table of every card and its placement, with counts per category and flagged uncertain readings – analysis can start the same day, and the photo remains the audit trail.

## Steps

1. Plan the board so categories and cards are clearly separated
2. Photograph it straight on and remove identifying details
3. Let the assistant transcribe first, then map cards to categories
4. Count placements per item, e.g. for substantive validity
5. Verify card count and five transcriptions against the photo

## Concepts

### Card sorting (open and closed)

Participants group cards into categories they create (open) or into predefined ones (closed). Used to explore mental models or to test whether categories work; analysed via placement frequencies and clusters (Spencer, 2009).

### Item-sorting task

Respondents assign each survey item to the construct definition it fits. The proportion of substantive agreement (psa) and the substantive-validity coefficient (csv) flag items that are misread before a full pre-test (Anderson & Gerbing, 1991).

### Visual and photo data

Photos of boards are research data: they need a capture protocol (angle, light, labelling), consent where people or handwriting can be identified, and secure storage (Pain, 2012).

### Transcription before interpretation

Separate the literal record (what is on each card, where) from coding and clustering. This keeps the step checkable and makes AI misreadings visible.

## References

- Anderson, J. C., & Gerbing, D. W. (1991). Predicting the performance of measures in a confirmatory factor analysis with a pretest assessment of their substantive validities. Journal of Applied Psychology, 76(5), 732–740. doi:10.1037/0021-9010.76.5.732
- Pain, H. (2012). A literature review to evaluate the choice and use of visual methods. International Journal of Qualitative Methods, 11(4), 303–319. doi:10.1177/160940691201100401
- Spencer, D. (2009). Card sorting: Designing usable categories. Rosenfeld Media.

## Practice exercise

### Task

Your group needs sticky notes, a flipchart or large sheet and a phone. Split the 12 paper titles from the abstracts file among you (keep it open, do not attach it), write one short title per note, sort the notes into clusters on the flipchart and photograph it straight on. Take the photo with your phone and run the prompt in your assistant's app, or save it to your cloud storage and attach it on the laptop. You see how reliably the assistant reads handwriting and keeps observation apart from interpretation.

### Prompt

```text
The attached photo shows a card sort: 12 sticky notes with short titles of research papers on weather and climate change, sorted by our group into clusters on a flipchart. 1) Transcribe every note exactly, numbered, with the cluster it sits in; write [illegible] for anything you cannot read. 2) Give a table: note number, text, cluster. 3) Compare our clusters with these three groups: 'Global temperature records', 'UK and Europe', 'Extremes and attribution' – for each note, say whether our placement matches and where it differs. 4) Only then suggest a label for each of our clusters.
```

### Check

Exactly 12 notes in the table; compare the transcription with the board. The reference grouping is the paper ID in the abstracts file (A = global temperature records, B = UK and Europe, C = extremes and attribution) – check two notes where the assistant says your placement differs.

### Attachment note

Your photo of the flipchart (JPEG or PNG) – taken with your phone and attached in your assistant's app, or saved to your cloud storage and attached on the laptop. If your tool does not accept the file type (e.g. HEIC from an iPhone), convert it to JPEG first.

## Own material

### Bring

A clear, glare-free photo of a whiteboard, flipchart or card sort you made yourself – no faces or names. For the practice version: sticky notes, a flipchart and a phone to photograph the 12 practice paper titles you sorted.

### Steps

1. Photograph the board straight on, in good light, in one or two shots.
2. Upload the photo (JPEG or PNG; convert other formats first if your tool does not accept them) – from your assistant's mobile app or via your cloud storage – and ask the assistant to transcribe every card before interpreting anything.
3. Ask for the clusters or the card-to-category mapping as a table, with uncertain readings flagged.
4. Compare the transcription and mapping with the board itself.

### Prompt

```text
The attached photo shows the result of a [card sort / item-sorting task / brainstorming] from a [workshop or experiment] on [topic]. 1) Transcribe every card or note exactly as written, numbered, with its position (column or cluster). Mark any word you cannot read as [illegible] instead of guessing. 2) Give a table: card number, text, the group or category it was placed in, and any arrow or line connecting it to another card. 3) If the task assigned items to predefined categories ([list categories]), count for each item how many placements fall in the intended category. 4) Only then suggest a short label for each cluster and say which cards fit poorly. Keep observation (steps 1–3) and interpretation (step 4) separate.
```

### Check

Count the cards on the board and in the table – the numbers must match – and compare five transcriptions word for word; every [illegible] or misread card is a reason to re-photograph or type it in yourself.

### Limit

Handwriting, glare and overlapping notes cause misreadings; photos may contain personal data (faces, names, handwriting), so use only photos you are allowed to process and remove identifying details first.

## Technology

Upload the photo (JPEG or PNG) to your AI assistant, which reads images – from its mobile app or via your cloud storage. Export the table to Excel to count placements; for larger studies keep the photos and transcripts in your research data storage.

## Levels

### Chat

Upload the photo and run the starter prompt. In the same chat, type in corrections for any misread notes and ask for the corrected table, with counts per cluster, as a CSV file.

### Project / Notebook

Add the checked tables from each session as .xlsx or Word files (not the photos), plus your predefined categories or constructs. Ask how placements differ between groups or sessions and which items fall outside their intended category. Only photos without faces or names feed these tables, and you check every table against the board.

### Custom assistant

Call it 'Board digitiser' and switch on code execution / data analysis if your tool offers it, for counts and the table export. Instructions: transcribe every card before interpreting, [illegible] instead of guessing, a table of card, text, cluster and connections, counts per predefined category, interpretation last. Knowledge: your category list. Only photos without faces or names go in, and you check every table against the board. Starter prompt: 'Digitise this card sort'.
