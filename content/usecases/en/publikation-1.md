---
id: publikation-1
phase: publikation
order: 1
title: Language editing
risk: 2
mode: Assist
potential: 3
capabilities: generierung
routes: chat; files; connected; external
connect: DeepL Write
tools: DeepL Write; Paperpal; QuillBot
repos: kd-writing
data: B3
practice_data: B3
---

Improve clarity, precision and flow – especially in a second language – and spot generic or AI-sounding phrasing so the text stays yours. For the thesis, check your university’s rules on editing and proofreading.

## Problem

Writing in a second language takes longer, and generic editing tools smooth your text into phrasing that shifts hedges, emphasis or meaning and no longer sounds like you.

## Result

A clearer paragraph in given–new order and a change table you decide on line by line – terms, numbers, hedges and citations untouched, AI-typical phrases flagged for you to rewrite.

## Steps

1. Paste one paragraph and name your discipline and readers
2. Ask for edits by given–new order and plain-language principles
3. Check that no hedge, term, number or citation changed
4. Accept or reject each change; rewrite flagged phrases yourself
5. Check your university's proofreading rules before editing a thesis

## Concepts

### Given–new principle (Gopen & Swan)

Readers expect familiar information at the start of a sentence (topic position) and the new, emphasised point at the end (stress position), with subject and verb close together. Use it to fix sentences that are correct but hard to follow.

### Hedging

Calibrated qualification of claims (may, suggests, is likely to) that signals how strong the evidence is. Hyland shows it is a core feature of research writing; an edit that removes or adds a hedge changes your claim.

### Plain-language principles

Prefer concrete verbs to nominalisations ('we analysed' rather than 'an analysis was carried out'), the active voice where the actor matters, one main idea per sentence and consistent terms. They improve clarity without simplifying content.

### Authorial voice

The recognisable stance and phrasing that make a text yours. Formulaic phrases ('plays a crucial role', 'delve into') and empty intensifiers weaken it and are common in AI-generated text; rewrite them rather than accept them.

## References

- Gopen, G. D., & Swan, J. A. (1990). The science of scientific writing. American Scientist, 78(6), 550–558.
- Hyland, K. (1998). Hedging in scientific research articles. John Benjamins.

## Practice exercise

### Task

Edit the abstract of the Vautard et al. (2023) paper as if it were your own paragraph. You learn whether the assistant keeps hedges, uncertainty ranges and technical terms intact or quietly strengthens claims while improving the flow.

### Prompt

```text
Attached is the Vautard et al. (2023) PDF. Take its abstract (the paragraph before the introduction) and treat it as my own draft for a climate science journal. Edit it for clarity, precision and flow in UK English, applying the given–new principle: familiar information at the start of a sentence, the new point at the end. Keep the meaning, technical terms, numbers, uncertainty ranges and hedges (such as 'can be due to') unchanged, and add no content. Return 1) the edited abstract and 2) a table: original phrase, change, reason. Mark any sentence whose meaning is unclear instead of guessing, and flag generic or AI-typical phrasing.
```

### Check

Compare both versions sentence by sentence: 0.8 °C [0.2–1.4 °C], 3.4 °C, 170 simulations and 32 models stay unchanged, and the two possible explanations remain hedged rather than merged into one cause.

## Own material

### Bring

One or two paragraphs (up to 300 words) of your own writing; not a co-author's text without their consent.

### Steps

1. Paste the starter prompt with your paragraph, discipline and readership.
2. Go through the change table and accept or reject each edit.
3. Rewrite any sentence where the edit no longer sounds like you.
4. Check your university's rules on proofreading before using this on a thesis.

### Prompt

```text
I am a postgraduate researcher in [discipline] writing in English as my [first or second] language, for [readership, e.g. a journal in my field]. Edit the paragraph below for clarity, precision and flow in UK English, keeping my meaning, terminology and citations unchanged. Do not add new content or claims. Return 1) the edited paragraph and 2) a table: original phrase, change, reason. Mark any sentence where my meaning is unclear instead of guessing, and flag generic or typically AI-sounding phrases (for example 'delve into', 'plays a crucial role', empty intensifiers) so I can rewrite them in my own voice. Paragraph: [paste text]
```

### Check

Read both versions side by side: no technical term, number, hedge or citation has changed, and you understand and agree with every change in the table.

## Technology

Paste the paragraph into your AI assistant and ask for a change table; DeepL Write, if your university permits it, gives a second opinion you can compare line by line.

## Levels

### Chat

Run the starter prompt with the Vautard PDF attached. Then, in the same chat, ask for two alternatives for each sentence that no longer sounds like the author, keeping every number and hedge.

### Project / Notebook

Add your drafts, a short style sheet (UK spelling, preferred terms, words to avoid) and a paragraph you are happy with as a sample of your voice; for the practice, the Vautard paper (B3). Ask for edits that follow the style sheet. Terminology and tone stay consistent across chapters you edit over weeks.

### Custom assistant

Put your style sheet in Instructions: UK English, the given–new principle, keep terms, numbers, hedges and citations unchanged, add no content, return a change table, mark unclear sentences and flag AI-typical phrasing. Add a glossary of your field's terms as Knowledge. Starter prompt: "Edit this paragraph and give me the change table." Reusable for every chapter – check your university's rules on proofreading for the thesis.
