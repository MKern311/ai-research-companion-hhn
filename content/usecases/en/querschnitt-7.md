---
id: querschnitt-7
phase: querschnitt
order: 7
title: Project assistant & research agents
risk: 3
mode: Delegate
potential: 3
capabilities: agentisch
routes: chat; files; connected; external
connect: OpenAlex
tools: Elicit; STORM
repos: ars-deep-research; awesome-copilot
data: B2; C3; C4; C5
practice_data: B2; C3; C4; C5
---

Set up an assistant that follows your standing rules (citation style, terminology, no invented sources), or let agents carry out multi-step tasks with defined human checkpoints.

## Problem

You repeat the same rules in every chat, and multi-step tasks such as a scoping search drift off course or mix unchecked, sometimes invented, sources into the output.

## Result

A reusable assistant that applies your citation style and terms, and a staged workflow that proceeds only after you have checked each stage – time saved while you stay accountable.

## Steps

1. Write standing rules and one narrow question
2. Paste the rules as the first message of a chat
3. Test it with one routine question first
4. Approve each stage only after checking every source
5. Turn the rules into an agent once they work
6. Log the workflow and declare the AI use

## Concepts

### Human-in-the-loop checkpoints

The workflow stops after defined stages – search, extraction, synthesis – and continues only after a person has verified the output. Responsibility stays with you, and early errors do not propagate into later stages.

### Automation bias

The tendency to over-trust automated output and miss its errors, stronger under time pressure and when a system is usually right (Parasuraman & Manzey, 2010). Checkpoints only help if you actually open and read each source.

### Hallucination and grounding

Language models can produce fluent but unsupported or fabricated content (Ji et al., 2023). Grounding answers in supplied documents (retrieval-augmented generation) reduces but does not remove this risk; every citation still needs checking.

### Arksey & O'Malley scoping review framework

Five stages: identify the research question, identify relevant studies, select studies, chart the data, and collate, summarise and report the results. An agent can assist with stages, but selection and charting decisions remain yours.

## References

- Arksey, H., & O'Malley, L. (2005). Scoping studies: Towards a methodological framework. International Journal of Social Research Methodology, 8(1), 19–32. doi:10.1080/1364557032000119616
- Parasuraman, R., & Manzey, D. H. (2010). Complacency and bias in human use of automation: An attentional integration. Human Factors, 52(3), 381–410. doi:10.1177/0018720810376055
- Ji, Z., Lee, N., Frieske, R., Yu, T., Su, D., Xu, Y., Ishii, E., Bang, Y. J., Madotto, A., & Fung, P. (2023). Survey of hallucination in natural language generation. ACM Computing Surveys, 55(12), Article 248. doi:10.1145/3571730

## Practice exercise

### Task

Start a new chat, paste your standing rules as the first message, attach four attribution PDFs and run an extraction stage with a checkpoint. You learn how often extracted numbers, return periods and likelihood changes are wrong or unsupported, and why each stage needs your approval.

### Prompt

```text
For this whole conversation, you are the research assistant of a postgraduate researcher. Standing rules: cite in APA 7; treat 'return time' and 'return period' as the same concept – the average time between events of a given size – and write 'return period'; 'probability ratio' means how many times more likely an event is with human influence; never invent sources, quotes or numbers, and say when you are unsure; use only the four attached PDFs (Christidis et al., 2020; Christidis et al., 2023; Zachariah et al., 2023; Schumacher et al., 2024). Work in two stages and stop after each for my approval. Stage 1, extraction: a table with one row per paper – event and region, variable, method, change in likelihood, change in intensity, future projection – each cell with a verbatim quote and page number. Stage 2, after my approval: a 200-word comparison citing only approved cells, ending with a list of claims I should still verify.
```

### Check

Check every cell against the PDFs, e.g. Zachariah et al.: 30 times more likely and about 1 °C hotter (Ctrl+F '30 times more likely'); Christidis et al. (2020): '100-300 years' for 40 °C summers, which the table should call a return period. Only then approve stage 2 in the same chat, see whether the rules still hold, and log the AI use.

## Own material

### Bring

Your standing rules for working with AI (citation style, key terms, what must never happen), a narrow research question and two or three trusted sources – open-access PDFs or public websites.

### Steps

1. Start a new chat and paste the prompt with your rules as the first message.
2. Attach your PDFs, or name your websites if web search is on.
3. Ask one routine question and check that the assistant follows your rules.
4. Run stage 1 only, check every source, then approve extraction and the report.

### Prompt

```text
For this whole conversation, you are the research assistant of a postgraduate researcher in [discipline]. Always follow these standing rules: use [citation style]; use these terms consistently: [key terms with definitions]; never invent sources, quotes or numbers – say when you are unsure; [further rules]. When I ask for a scoping task on [research question], work in three stages and stop after each one for my approval. Stage 1, search: list up to eight sources from [attached PDFs / websites] or the web, with title, year, link and one line on relevance. Stage 2, extraction: for the sources I approve, fill a table with aim, method, sample and main finding. Stage 3, report: write a 300-word summary that cites only approved sources. First confirm these rules in three lines and wait for my question.
```

### Check

Before approving each stage, open every link or PDF and confirm the source exists and says what the table claims; treat the final report as an unverified draft that still needs your own reading.

### Limit

In a plain chat the rules last only for this conversation – a new chat starts from zero. To keep them, use a rules document in a notebook or a custom assistant's instructions (levels 2 and 3). The assistant runs short steps that you approve one by one; it cannot search library databases or run the pipeline on its own.

## Technology

Create a custom assistant (e.g. a Copilot agent, custom GPT, Gemini Gem or Claude project) with your rules as instructions and public websites or practice PDFs as knowledge; if your tool does not accept knowledge files, attach them in the chat. Adding search tools such as OpenAlex needs a connection (MCP or API) – check data protection and approval with your university first.

## Levels

### Chat

Paste the standing rules and the staged task as your first message, attach B2, C3, C4 and C5, and run stage 1. In the same chat, approve only the cells you have checked and run stage 2 – the rules last only for this conversation.

### Project / Notebook

Add the four PDFs and a one-page rules document (citation style, terms, never invent, stop after each stage) as references – only approved, non-sensitive material. Start each question with "Follow the rules document". Depending on your tool, the notebook answers mainly from these sources, so no unchecked web sources slip in, and you can add papers later. You still check every cell.

### Custom assistant

Instructions: APA 7, your terms with definitions, never invent sources, quotes or numbers, a verbatim quote and page per cell, stop after each stage for approval. Knowledge: the four PDFs or your own approved, non-sensitive papers. Starter prompts: "Stage 1 extraction for these papers" and "Compare the approved cells". A human checks every result; reusable for each new scoping or comparison task.

### Automation / own code

Connect the OpenAlex MCP server so the assistant can search for sources and check that every reference exists, and chain the stages in a workflow that still stops for your approval – a basic custom assistant cannot reach scholarly databases. On GitHub: a Python script chains the stages, checks every reference against the OpenAlex or Crossref API and stops for your approval between stages. Check data protection and approval with your university first.
