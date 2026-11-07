---
id: publikation-5
phase: publikation
order: 5
title: Responding to reviewers
risk: 2
mode: Co-create
potential: 2
capabilities: synthese; generierung
routes: chat; files
repos: ars-paper
data: C5
practice_data: C5
---

Structure reviewer comments and draft the response letter and summary of changes.

## Problem

Reviewer reports mix major and minor points across several reviewers; drafting a complete, courteous point-by-point response is slow, and one overlooked comment can delay acceptance.

## Result

A numbered table of every comment with your planned action, and a draft point-by-point letter with gaps marked for you to fill – nothing claimed that you did not change.

## Steps

1. Paste all comments and ask for a numbered table
2. Classify each as major or minor and add your action
3. Ask for a point-by-point letter quoting each comment
4. Give reasons and evidence where you disagree
5. Check every table row appears in the letter

## Concepts

### Point-by-point response

The standard format for revisions: quote each comment, answer it directly, and state the change with its location (page, line or section). Keep the reviewers' numbering so editors can trace every point.

### Major and minor revisions

Major comments concern design, analysis, validity or conclusions and usually need new work or substantial rewriting; minor comments concern clarity, presentation or references. Address all, but plan effort by this distinction.

### Reasoned disagreement

You may decline a request: thank the reviewer, give your reasons with evidence or citations, and if possible make a smaller change (for example a limitation sentence). The editor decides, so write for the editor.

### Open peer review

Publishing reviewer reports and author replies alongside the article, as in Copernicus interactive discussions, eLife or F1000Research. Ross-Hellauer identifies traits such as open identities, open reports and open interaction; published reports are models for your own response.

## References

- Noble, W. S. (2017). Ten simple rules for writing a response to reviewers. PLOS Computational Biology, 13(10), e1005730. doi:10.1371/journal.pcbi.1005730
- Ross-Hellauer, T. (2017). What is open peer review? A systematic review. F1000Research, 6, 588. doi:10.12688/f1000research.11369.2

## Practice exercise

### Task

Find the public referee comments on the discussion paper behind Schumacher et al. (2024) and draft a response, using the published PDF as the revised version. You learn whether the assistant retrieves real comments or invents them, and whether it claims unverifiable changes.

### Prompt

```text
Attached is the Schumacher et al. (2024) PDF from Earth System Dynamics, the final version of a paper that went through open public discussion. 1) Find the public referee comments (RC1, RC2) on its discussion paper: it was discussed as preprint egusphere-2023-717 on EGUsphere, and the article page links to the discussion under 'Peer review'. Give the link. If you cannot open the comments, say so and stop – do not reconstruct them; I will paste them in. 2) List every referee comment in a table: number, referee, major or minor, what is requested. 3) Treat the attached PDF as the revised manuscript and draft a point-by-point response that quotes each comment first. Where you cannot see in the PDF whether a request was addressed, write [ADD RESPONSE]. Do not claim any change you cannot point to in the PDF.
```

### Check

Open https://egusphere.copernicus.org/preprints/2023/egusphere-2023-717/ yourself and check three comments from RC1: each must appear in the assistant's table with the right request, and no comment may be invented. If the assistant could not open the page, paste RC1 into the chat and continue. If time allows, compare one reply with the authors' answer in AC1 (attached there as a PDF).

## Own material

### Bring

Reviewer comments from a published open peer review (for example from eLife, F1000Research or BMJ) or anonymised comments on your own paper, plus a few notes on changes you made.

### Steps

1. Paste the reviewer comments and ask for a numbered table of all points.
2. Add your notes on what you changed or why you disagree.
3. Ask for a draft response letter and a short summary of changes.
4. Compare the letter against the table to see that no comment is missing.

### Prompt

```text
I am revising a manuscript in [discipline] after peer review. Below are the reviewer comments: [paste comments]. My notes on changes made or points I disagree with: [paste notes]. First, list every comment in a table: number, reviewer, major or minor, what is requested, my planned action. Then draft a polite, concise response letter that answers each comment in turn, quoting it first. Where my notes give no answer, write [ADD RESPONSE] instead of inventing one. Do not claim any change I have not listed. End with a summary of changes in five bullet points or fewer.
```

### Check

Every reviewer comment appears once in the table, and the letter claims no change that is not in your notes.

## Technology

Paste the comments into your AI assistant or upload the decision letter; the [ADD RESPONSE] placeholders show where your own answer is still missing, and the table lets you confirm that every comment is answered once.

## Levels

### Chat

Run the starter prompt with the Schumacher PDF attached. Then, in the same chat, paste your notes on two comments and ask for the matching replies, with [ADD RESPONSE] wherever your notes say nothing.

### Project / Notebook

Add the reviewer comments (pasted into Word), your revised manuscript and a change log; for the practice, the Schumacher paper (C5) and RC1 saved from the discussion page. Ask which comments the change log does not yet answer. Over several revision rounds, comments, changes and replies stay in one place.

### Custom assistant

In Instructions, set the rules: number every comment in a table, quote it before each reply, keep replies polite and concise, write [ADD RESPONSE] where your notes give no answer, never claim a change you have not listed, and end with a short summary of changes. Starter prompt: "Here are the comments and my notes – draft the response letter." Reusable for every revision round. Never upload manuscripts you review for others.
