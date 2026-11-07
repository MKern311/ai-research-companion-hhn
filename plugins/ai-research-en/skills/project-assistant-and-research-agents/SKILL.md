---
name: project-assistant-and-research-agents
description: "Set up an assistant that follows your standing rules (citation style, terminology, no invented sources), or let agents carry out multi-step tasks with defined human checkpoints. Use when the user works on: Project assistant & research agents."
---

# Project assistant & research agents

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/querschnitt-7

## Goal

Set up an assistant that follows your standing rules (citation style, terminology, no invented sources), or let agents carry out multi-step tasks with defined human checkpoints.

A reusable assistant that applies your citation style and terms, and a staged workflow that proceeds only after you have checked each stage – time saved while you stay accountable.

## When to use

You repeat the same rules in every chat, and multi-step tasks such as a scoping search drift off course or mix unchecked, sometimes invented, sources into the output.

## Procedure

1. Start a new chat and paste the prompt with your rules as the first message.
2. Attach your PDFs, or name your websites if web search is on.
3. Ask one routine question and check that the assistant follows your rules.
4. Run stage 1 only, check every source, then approve extraction and the report.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.
- Instructions: APA 7, your terms with definitions, never invent sources, quotes or numbers, a verbatim quote and page per cell, stop after each stage for approval. Knowledge: the four PDFs or your own approved, non-sensitive papers. Starter prompts: "Stage 1 extraction for these papers" and "Compare the approved cells". A human checks every result; reusable for each new scoping or comparison task.

## Starter prompt

```text
For this whole conversation, you are the research assistant of a postgraduate researcher in [discipline]. Always follow these standing rules: use [citation style]; use these terms consistently: [key terms with definitions]; never invent sources, quotes or numbers – say when you are unsure; [further rules]. When I ask for a scoping task on [research question], work in three stages and stop after each one for my approval. Stage 1, search: list up to eight sources from [attached PDFs / websites] or the web, with title, year, link and one line on relevance. Stage 2, extraction: for the sources I approve, fill a table with aim, method, sample and main finding. Stage 3, report: write a 300-word summary that cites only approved sources. First confirm these rules in three lines and wait for my question.
```

## Quality check

Before approving each stage, open every link or PDF and confirm the source exists and says what the table claims; treat the final report as an unverified draft that still needs your own reading.

## Limits

- In a plain chat the rules last only for this conversation – a new chat starts from zero. To keep them, use a rules document in a notebook or a custom assistant's instructions (levels 2 and 3). The assistant runs short steps that you approve one by one; it cannot search library databases or run the pipeline on its own.
- Risk: Personal or sensitive data, or decisions that feed directly into your results.

## Key concepts

- **Human-in-the-loop checkpoints** – The workflow stops after defined stages – search, extraction, synthesis – and continues only after a person has verified the output. Responsibility stays with you, and early errors do not propagate into later stages.
- **Automation bias** – The tendency to over-trust automated output and miss its errors, stronger under time pressure and when a system is usually right (Parasuraman & Manzey, 2010). Checkpoints only help if you actually open and read each source.
- **Hallucination and grounding** – Language models can produce fluent but unsupported or fabricated content (Ji et al., 2023). Grounding answers in supplied documents (retrieval-augmented generation) reduces but does not remove this risk; every citation still needs checking.
- **Arksey & O'Malley scoping review framework** – Five stages: identify the research question, identify relevant studies, select studies, chart the data, and collate, summarise and report the results. An agent can assist with stages, but selection and charting decisions remain yours.

## Key references

- Arksey, H., & O'Malley, L. (2005). Scoping studies: Towards a methodological framework. International Journal of Social Research Methodology, 8(1), 19–32. https://doi.org/10.1080/1364557032000119616
- Parasuraman, R., & Manzey, D. H. (2010). Complacency and bias in human use of automation: An attentional integration. Human Factors, 52(3), 381–410. https://doi.org/10.1177/0018720810376055
- Ji, Z., Lee, N., Frieske, R., Yu, T., Su, D., Xu, Y., Ishii, E., Bang, Y. J., Madotto, A., & Fung, P. (2023). Survey of hallucination in natural language generation. ACM Computing Surveys, 55(12), Article 248. https://doi.org/10.1145/3571730

## Tools that help

OpenAlex · Elicit · STORM
