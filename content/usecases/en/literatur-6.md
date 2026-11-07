---
id: literatur-6
phase: literatur
order: 6
title: Understanding difficult or non-English papers
risk: 2
mode: Assist
potential: 3
capabilities: synthese; generierung
routes: files; chat; external
tools: Humata AI
data: C6
practice_data: C6
---

Have concepts, methods, notation or statistics explained in plain language, or translate and summarise sources in other languages – then check against the original and quote only verified translations.

## Problem

A formula, unfamiliar notation or a key paper in another language can stall your reading for hours – or tempt you to cite it without really understanding it.

## Result

A step-by-step explanation with defined symbols, a worked example and the method's assumptions, or a screening translation with a relevance summary – enough to decide and ask better questions, not to quote unchecked.

## Steps

1. Attach the paper and name the difficult section
2. Ask for defined symbols, a worked example and assumptions
3. Explain it back in your own words and ask for corrections
4. Check against the original before quoting anything

## Concepts

### Self-explanation

Learners who explain each step to themselves understand worked material more deeply (Chi et al., 1989). Restate the method in your own words and ask your AI assistant to correct you, rather than only reading its explanation.

### Worked-example effect

Studying a solved example reduces cognitive load for novices compared with solving from scratch (cognitive load theory, Sweller). Ask for an example with small numbers in the paper's own notation.

### Model assumptions

Every statistical method rests on assumptions – for example independence, normality, stationarity or linearity. Understanding a method includes knowing what breaks when they fail and whether the paper tests them.

### Translation for screening vs quotation

Machine translation is adequate for judging relevance, not for quoting: technical terms drift. Before citing, verify with a fluent reader or by back-translation (Brislin, 1970), and cite the original-language source.

### Language bias

Restricting a review to English-language studies can bias its findings when publication language relates to results. Translation tools make including other languages feasible; report the languages covered in your methods.

## References

- Chi, M. T. H., Bassok, M., Lewis, M. W., Reimann, P., & Glaser, R. (1989). Self-explanations: How students study and use examples in learning to solve problems. Cognitive Science, 13(2), 145–182. doi:10.1207/s15516709cog1302_1
- Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. Cognitive Science, 12(2), 257–285. doi:10.1207/s15516709cog1202_4
- Brislin, R. W. (1970). Back-translation for cross-cultural research. Journal of Cross-Cultural Psychology, 1(3), 185–216. doi:10.1177/135910457000100301

## Practice exercise

### Task

Ask your AI assistant to explain the changepoint method in the Shi et al. preprint, with a worked example in Python. You learn whether it keeps the paper's notation and penalties (BIC and MDL) or substitutes a generic textbook method.

### Prompt

```text
I am new to changepoint analysis. Explain Section 3 of the attached Shi et al. (2021) preprint in plain language. Go step by step, define every symbol and term the section uses, and explain what a penalised likelihood is and how the BIC and MDL penalties differ. Then give a small worked example with made-up numbers: a series of 20 annual temperatures with one trend shift, showing how the penalty decides between zero and one changepoint. You may run Python for the example. Name the key assumptions the method relies on, including those about autocorrelation. Keep it under 400 words. Mark clearly which parts go beyond what the paper itself says.
```

### Check

Symbols and penalty formulas must match Section 3 of the preprint. The paper's main result is a changepoint in the late 1980s (1987 or 1988, depending on the series); check that the assistant does not attribute other years to the paper.

## Own material

### Bring

An open-access paper with a method, formula or statistic you find hard – or the abstract or a page of a paper in a language other than English.

### Steps

1. Attach the paper or paste the difficult or non-English passage.
2. Ask for a plain-language explanation with every symbol defined, or an English translation with a relevance summary.
3. Ask a follow-up question about the part that is still unclear.
4. Check the result against the original, the paper's English abstract or a colleague.

### Prompt

```text
I am a postgraduate researcher in [discipline]. Choose the part that applies.

A – difficult method: I am new to [method or statistic]. Explain the passage below (or section [x] of the attached paper) in plain language. Go step by step, define every symbol and term, and give a small worked example with made-up numbers. Then name the key assumptions the method relies on. Keep it under 400 words. Mark clearly which parts of your explanation go beyond what the paper itself says.

B – non-English paper: I am deciding whether a [language] paper is relevant to my research question: [question]. Translate the text below into English (UK spelling), keep technical terms precise and put the original word in brackets wherever you are unsure. Then give a five-bullet summary: research question, method, sample, main findings, relevance to my question. This translation is for screening only.

[paste passage]
```

### Check

The explanation uses the same notation and numbers as the paper, or the key facts of the translation match the English abstract or a colleague's reading; quote only from a translation you have verified.

## Technology

Upload the PDF to your AI assistant and name the section, or paste the passage; the assistant can also write and run a small Python example with made-up numbers (if it cannot run code, run it yourself). For practice, ask it to explain the changepoint methods in C6.

## Levels

### Chat

Attach the Shi et al. preprint (C6) and run the starter prompt. In the same chat, ask the assistant to quote the penalty formulas exactly as Section 3 gives them and to mark where its worked example simplifies the method.

### Project / Notebook

Add the paper (C6), a methods chapter or lecture notes you may use and a glossary page of your own. Ask about symbols and steps across them; depending on your tool, answers come only from these sources. For a non-English paper, add the original and your verified translation side by side. Run worked examples in chat – depending on your tool, the workspace does not run Python.

### Custom assistant

Call it 'Method explainer'. Instructions: plain language, every symbol defined, the paper's own notation, a small worked example, assumptions named, and anything beyond the paper marked; for translations, UK English, original terms in brackets when unsure, a five-bullet relevance summary, 'for screening only'. Switch on code execution / data analysis if your tool offers it, for worked examples. Starter prompts: 'Explain Section 3 of this paper', 'Translate and summarise this abstract'.
