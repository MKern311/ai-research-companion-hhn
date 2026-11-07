---
id: literatur-4
phase: literatur
order: 4
title: Querying your own PDF corpus
risk: 2
mode: Assist
potential: 3
capabilities: recherche; synthese
routes: files; connected; external
connect: Zotero; EndNote; Mendeley
tools: Gemini Notebook (formerly NotebookLM); Humata AI
data: A1; A2; A3
practice_data: A1; A2; A3
---

Make your literature library searchable – for example in a project or notebook of your AI assistant, or through your reference manager – and get answers with verified source passages.

## Problem

You remember that a paper said something, but not which one or where; rereading or keyword-searching a folder of PDFs is slow and misses paraphrases.

## Result

Answers grounded in your own papers, each with file, page and a verbatim quote you can check quickly – and an explicit 'not in these sources' when the papers are silent.

## Steps

1. Attach three related PDFs to one chat or notebook
2. Ask a question that requires quotes with file and page
3. Ask one question the papers cannot answer
4. Search each quote in the PDF to confirm it

## Concepts

### Retrieval-augmented generation (RAG)

The system first retrieves relevant passages from a document collection, then generates an answer from them (Lewis et al., 2020). Answers are only as good as the retrieval: missed passages give incomplete or wrong answers.

### Faithfulness and hallucination

An answer is faithful when every claim is supported by the source. Intrinsic hallucinations contradict the source; extrinsic ones add unsupported content (Ji et al., 2023). Verbatim quotes with locations make faithfulness checkable.

### Lost in the middle

Language models use information at the start and end of long inputs better than in the middle (Liu et al., 2024). With long PDFs, ask about specific sections and expect misses in the middle.

### Abstention

A grounded assistant should say when the sources do not contain the answer instead of falling back on general knowledge. Test this with a question you know the documents cannot answer.

## References

- Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., Küttler, H., Lewis, M., Yih, W., Rocktäschel, T., Riedel, S., & Kiela, D. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks. Advances in Neural Information Processing Systems, 33, 9459–9474.
- Ji, Z., Lee, N., Frieske, R., Yu, T., Su, D., Xu, Y., Ishii, E., Bang, Y. J., Madotto, A., & Fung, P. (2023). Survey of hallucination in natural language generation. ACM Computing Surveys, 55(12), Article 248. doi:10.1145/3571730
- Liu, N. F., Lin, K., Hewitt, J., Paranjape, A., Bevilacqua, M., Petroni, F., & Liang, P. (2024). Lost in the middle: How language models use long contexts. Transactions of the Association for Computational Linguistics, 12, 157–173. doi:10.1162/tacl_a_00638

## Practice exercise

### Task

Query the three global-temperature papers together. You learn whether your AI assistant keeps quotes verbatim – the Morice et al. manuscript has line numbers that break sentences – cites the right file and admits when a question lies outside the files.

### Prompt

```text
Answer my questions using only the three attached PDFs (Morice et al. 2021, Rohde and Hausfather 2020, Forster et al. 2025). Question 1: Which reference period does each paper use for temperature anomalies or warming, and why does that matter when comparing their numbers? Question 2: How do the papers treat regions with few observations, such as the Arctic? Question 3: What do the papers report about trends in UK winter rainfall? For each question give a short answer (up to 150 words), then supporting passages: file name, page, exact quote of one to three sentences. Only quote text that appears word for word in the files. If the files do not answer a question, say so instead of using outside knowledge.
```

### Check

Search each quote with Ctrl+F. Morice et al. use anomalies relative to 1961–1990; Forster et al. report warming relative to 1850–1900; Rohde and Hausfather note about 0.1 °C extra warming from Arctic air. Question 3 needs 'not in the files'.

## Own material

### Bring

Three open-access PDFs on your topic.

### Steps

1. Attach the three PDFs to one chat.
2. Ask a question that the papers answer, requesting quotes with file and page.
3. Ask a question you know the papers do not answer.
4. Search each quoted passage in the PDF to confirm it is there.

### Prompt

```text
I am a postgraduate researcher in [discipline]. Answer my question using only the attached PDFs. My question is: [question]. Give a short answer (up to 200 words), then a list of supporting passages: file name, page, exact quote of one to three sentences. Only quote text that appears word for word in the files. If the files do not answer the question, or only partly, say so clearly instead of using outside knowledge.
```

### Check

Each quote is found word for word in the PDF (Ctrl+F) and supports the claim, and the assistant says 'not in the files' for the question you know is not answered.

### Limit

A plain chat answers over a few attached PDFs; for a larger set, use a project or notebook. The MCP servers for reference managers such as Zotero run only locally, not in a web chat.

## Technology

Attach PDFs in a chat, or collect them in a project or notebook for repeated questions. The MCP servers for Zotero, EndNote and Mendeley run locally – with a desktop assistant or a coding assistant such as GitHub Copilot in VS Code, not in a plain web chat; in Word the reference managers cite through their own add-ins.

## Levels

### Chat

Attach A1, A2 and A3 and run the starter prompt. In the same chat, ask a follow-up that needs two papers at once – for example how their reference periods change a stated warming figure – with a quote from each.

### Project / Notebook

This is where a project or notebook pays off: add the papers from your cloud reading folder (practice: A1–A3), as many as your tool allows. Ask questions across all papers with file, page and verbatim quote; depending on your tool, the assistant answers only from them and says when they are silent. Add papers as you read and come back all year.

### Custom assistant

Call it 'Library Q&A'. Instructions: answer only from the knowledge files, give file, page and a verbatim quote of one to three sentences per claim, say 'not in these sources' when they are silent, and never use outside knowledge. Knowledge: your core papers (if your tool limits knowledge files, attach them in the chat with the assistant instead). Starter prompts: 'What do my papers say about …?', 'Which paper defines …?'
