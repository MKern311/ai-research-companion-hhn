---
name: querying-your-own-pdf-corpus
description: "Make your literature library searchable – for example in a project or notebook of your AI assistant, or through your reference manager – and get answers with verified source passages. Use when the user works on: Querying your own PDF corpus."
---

# Querying your own PDF corpus

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/literatur-4

## Goal

Make your literature library searchable – for example in a project or notebook of your AI assistant, or through your reference manager – and get answers with verified source passages.

Answers grounded in your own papers, each with file, page and a verbatim quote you can check quickly – and an explicit 'not in these sources' when the papers are silent.

## When to use

You remember that a paper said something, but not which one or where; rereading or keyword-searching a folder of PDFs is slow and misses paraphrases.

## Procedure

1. Attach the three PDFs to one chat.
2. Ask a question that the papers answer, requesting quotes with file and page.
3. Ask a question you know the papers do not answer.
4. Search each quoted passage in the PDF to confirm it is there.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.
- Call it 'Library Q&A'. Instructions: answer only from the knowledge files, give file, page and a verbatim quote of one to three sentences per claim, say 'not in these sources' when they are silent, and never use outside knowledge. Knowledge: your core papers (if your tool limits knowledge files, attach them in the chat with the assistant instead). Starter prompts: 'What do my papers say about …?', 'Which paper defines …?'

## Starter prompt

```text
I am a postgraduate researcher in [discipline]. Answer my question using only the attached PDFs. My question is: [question]. Give a short answer (up to 200 words), then a list of supporting passages: file name, page, exact quote of one to three sentences. Only quote text that appears word for word in the files. If the files do not answer the question, or only partly, say so clearly instead of using outside knowledge.
```

## Quality check

Each quote is found word for word in the PDF (Ctrl+F) and supports the claim, and the assistant says 'not in the files' for the question you know is not answered.

## Limits

- A plain chat answers over a few attached PDFs; for a larger set, use a project or notebook. The MCP servers for reference managers such as Zotero run only locally, not in a web chat.
- Risk: Your own unpublished drafts, reviews or third-party content.

## Key concepts

- **Retrieval-augmented generation (RAG)** – The system first retrieves relevant passages from a document collection, then generates an answer from them (Lewis et al., 2020). Answers are only as good as the retrieval: missed passages give incomplete or wrong answers.
- **Faithfulness and hallucination** – An answer is faithful when every claim is supported by the source. Intrinsic hallucinations contradict the source; extrinsic ones add unsupported content (Ji et al., 2023). Verbatim quotes with locations make faithfulness checkable.
- **Lost in the middle** – Language models use information at the start and end of long inputs better than in the middle (Liu et al., 2024). With long PDFs, ask about specific sections and expect misses in the middle.
- **Abstention** – A grounded assistant should say when the sources do not contain the answer instead of falling back on general knowledge. Test this with a question you know the documents cannot answer.

## Key references

- Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., Küttler, H., Lewis, M., Yih, W., Rocktäschel, T., Riedel, S., & Kiela, D. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks. Advances in Neural Information Processing Systems, 33, 9459–9474.
- Ji, Z., Lee, N., Frieske, R., Yu, T., Su, D., Xu, Y., Ishii, E., Bang, Y. J., Madotto, A., & Fung, P. (2023). Survey of hallucination in natural language generation. ACM Computing Surveys, 55(12), Article 248. https://doi.org/10.1145/3571730
- Liu, N. F., Lin, K., Hewitt, J., Paranjape, A., Bevilacqua, M., Petroni, F., & Liang, P. (2024). Lost in the middle: How language models use long contexts. Transactions of the Association for Computational Linguistics, 12, 157–173. https://doi.org/10.1162/tacl_a_00638

## Tools that help

Zotero · EndNote · Mendeley · Gemini Notebook (formerly NotebookLM) · Humata AI
