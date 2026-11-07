---
id: publikation-9
phase: publikation
order: 9
title: Section draft from your own notes
risk: 2
mode: Co-create
potential: 2
capabilities: generierung; synthese
routes: chat; files; external
tools: Zotero
repos: ars-paper; kd-writing
data: AB
practice_ref: AB
---

Turn your own notes and evidence map into a first draft of a section, every claim linked to its source. Rework it in your own words and declare the AI use – check your university’s rules first.

## Problem

Turning a pile of notes into a first draft is slow, and on a blank page it is easy to lose track of which source supports which claim.

## Result

A claim–evidence map and a rough draft built only from your notes, with gaps marked – a starting point you verify sentence by sentence, rewrite in your own words and declare.

## Steps

1. Check your university's and the journal's rules on AI-assisted drafting
2. Ask for a claim–evidence map before any draft
3. Verify every sentence against your notes and sources
4. Rewrite the section in your own words
5. Declare the tool, purpose and your checks as required

## Concepts

### Claim–evidence map

A table listing each planned claim with the source and page that supports it, built before drafting; empty cells mark gaps. It makes every sentence of the later draft traceable and is your main human check.

### Concept matrix (Webster & Watson)

A grid of concepts against sources that turns an author-by-author summary into a concept-centric synthesis. Use it to order your points by argument rather than by paper.

### Authorship and AI (COPE position)

AI tools cannot be listed as authors because they cannot take responsibility for the work. Authors must disclose how AI tools were used and remain fully accountable for the content, including any errors.

### AI-use declaration

A short statement naming the tool, date, purpose and how you checked and changed the output, placed where your university or the journal requires (methods, acknowledgements or a declaration form).

## References

- Webster, J., & Watson, R. T. (2002). Analyzing the past to prepare for the future: Writing a literature review. MIS Quarterly, 26(2), xiii–xxiii.
- Committee on Publication Ethics. (2023). Authorship and AI tools: COPE position statement. COPE.

## Practice exercise

### Task

Turn five given notes on four attribution papers – one deliberately without a source – into an evidence map and a short draft. You learn whether the assistant adds claims or sources of its own and whether it marks the unsupported note.

### Prompt

```text
I am drafting a literature review section on attributing recent heat and drought extremes. My notes, with the source of each in brackets:
- UK summers with days above 40 °C: return time 100–300 years now, possibly 3.5 years by 2100 without emission cuts (Christidis et al., 2020).
- 50 °C days at 12 Mediterranean and Middle East locations: extremely rare or impossible pre-industrially, now rising rapidly (Christidis et al., 2023).
- India–Pakistan heat, March–April 2022: about 1 °C hotter and 30 times more likely due to human-caused climate change (Zachariah et al., 2023).
- 2022 western–central European summer soil drought: about once in 20 years now, about once per century pre-industrially (Schumacher et al., 2024).
- Attribution results are increasingly used in adaptation planning.
First build an evidence map: points in order, each with its source, gaps marked. Then draft 200 words in APA style using only these notes, marking [GAP] wherever a sentence lacks a source. Add nothing of your own.
```

### Check

Trace every sentence to a note and check its numbers against that paper's abstract in the abstracts file (AB). The unsourced adaptation note must carry [GAP]. Practice only: in real work you rewrite the text yourself and declare the AI use.

## Own material

### Bring

Your own notes on a section you are about to write (bullet points are fine) and the sources each point relies on; not a co-author's material without their consent.

### Steps

1. Check your university's rules on AI-assisted drafting first.
2. Paste your notes and sources and ask for an evidence map, then a first draft.
3. Check that every claim in the draft is in your notes and linked to a source.
4. Rewrite the section in your own words and log the AI use.

### Prompt

```text
I am writing the [section, e.g. literature review section on X] of my [thesis or paper] in [discipline]. Below are my own notes and the sources each point relies on. First, build an evidence map: the main points in a logical order, each with the source(s) that support it and any gaps where a point has no source. Then write a first draft of about [length] words that uses only my points and sources, cites them in [citation style], and marks with [GAP] every place where my notes do not support a sentence. Do not add claims, sources or numbers of your own. This is a draft that I will rework myself.

[paste notes and sources]
```

### Check

Every sentence in the draft can be traced to your notes and a source, nothing new has been added, and the [GAP] marks show where you still need evidence.

### Limit

Use this only where your university allows AI-assisted drafting; the final text must be your own work, reworked by you, and the AI use declared.

## Technology

Paste your notes or upload them with the source PDFs to your AI assistant; the academic-paper skill in a coding assistant in your editor (e.g. GitHub Copilot in VS Code, Claude Code) follows the same outline, evidence map and draft sequence.

## Levels

### Chat

Run the starter prompt with the five notes. Then, in the same chat, ask the assistant to list every sentence of the draft next to the note it comes from.

### Project / Notebook

Add the abstracts file (AB) or, for your own work, your source PDFs and notes document, and save the evidence map as a note in the project or notebook (or as a file you add to it). Ask for one section at a time drafted from the notes only, with [GAP] marks. Every claim traces back to a source you added; you rework the text and declare the AI use.

### Custom assistant

Create a configured assistant (e.g. a Copilot agent, custom GPT, Gemini Gem or Claude project). In its standing instructions, fix the sequence: evidence map first, then a draft of the requested length using only your notes and sources, cited in your style, with [GAP] wherever a sentence lacks a source; never add claims, sources or numbers. Starter prompt: "Build the evidence map from these notes, then draft 200 words." Reusable for each section – check your university's rules first, rework the text yourself and declare the AI use.
