---
id: idee-0
phase: idee
order: 0
title: Topic and trend scouting
risk: 1
mode: Assist
potential: 2
capabilities: recherche; analyse
routes: chat; files; connected; external
connect: OpenAlex; Litmaps
tools: Litmaps; Open Knowledge Maps; Research Rabbit
data: AB
practice_data: AB
---

Group a list of recent titles into themes, count them per year and spot rarely combined topics – a first hypothesis to test with a bibliometric tool or a connected database such as OpenAlex.

## Problem

Judging where a field is moving from scattered reading is unreliable: growing clusters and neglected intersections stay invisible without co-word or citation analysis, which few researchers run early on.

## Result

A theme table with yearly counts and a list of rarely combined themes – a hypothesis about trends and gaps, to be tested with a bibliometric query at scale.

## Steps

1. Export 15–20 recent titles with years from one database
2. Ask your AI assistant to group them into themes and count per year
3. List theme pairs that rarely co-occur in one paper
4. Test one promising intersection yourself with a larger OpenAlex search

## Concepts

### Co-word analysis

Maps a field through terms that occur together in titles, abstracts or keywords; frequent pairs form themes, and counts per year show growth. A bibliometric technique that needs hundreds of records, not a handful.

### Co-citation and bibliographic coupling

Co-citation links two papers that later work cites together and shows a field's intellectual base; bibliographic coupling links papers that share references and suits recent research fronts. Both are standard science-mapping methods.

### Swanson's ABC model

Literature-based discovery: if literature A is linked to concept B and B to C, but A and C are never studied together, A–C is a candidate gap. A heuristic for under-researched intersections, not evidence that they matter.

### Bibliometric workflow (Donthu et al.)

Four steps: define aims and scope, choose techniques (performance analysis, science mapping), collect data from a documented database query, then run the analysis and report it. Tools include VOSviewer, Bibliometrix and OpenAlex.

## References

- Zupic, I., & Čater, T. (2015). Bibliometric methods in management and organization. Organizational Research Methods, 18(3), 429–472. doi:10.1177/1094428114562629
- Donthu, N., Kumar, S., Mukherjee, D., Pandey, N., & Lim, W. M. (2021). How to conduct a bibliometric analysis: An overview and guidelines. Journal of Business Research, 133, 285–296. doi:10.1016/j.jbusres.2021.04.070
- Swanson, D. R. (1986). Undiscovered public knowledge. The Library Quarterly, 56(2), 103–118. doi:10.1086/601720

## Practice exercise

### Task

Attach the abstracts file of the 12 practice papers and let your AI assistant group them into themes and count them per year. You learn whether it counts correctly and how readily it reports 'trends' from a sample far too small to show any.

### Prompt

```text
The attached text file lists 12 open-access papers on weather and climate change, each with ID, citation, title and abstract. Group the papers into four to six themes based on their titles and abstracts. Show a table: theme, papers in that theme (ID, first author and year), number of papers per publication year. Then list two or three combinations of themes that rarely appear together in one paper and could be under-researched. Say clearly what a list of 12 papers can and cannot show about trends in this field. Do not add papers that are not in the file.
```

### Check

Count the years yourself: 2019 – 1, 2020 – 3, 2021 – 2, 2023 – 3, 2024 – 1, 2025 – 2 (the file lists Shi et al. as the 2021 preprint). Every paper appears in the table, and the assistant states that 12 papers cannot show a trend.

## Own material

### Bring

Titles and years of 15 to 20 recent papers in your field, copied from a database or Google Scholar results page.

### Steps

1. Paste the list of titles and years into your AI assistant.
2. Ask it to group the papers into themes and count them per year.
3. Ask which pairs of themes rarely appear together in the same paper.
4. Compare the themes with your own sense of the field and note surprises.

### Prompt

```text
I am a postgraduate researcher in [discipline] looking for growing topics and gaps. Below are [number] paper titles with their publication years, copied from [source]. Group them into four to six themes. Show a table: theme, paper titles in that theme, number of papers per year. Then list two or three combinations of themes that rarely appear together and could be under-researched. Base this only on the list I give you; say clearly that a small list cannot show real trends.

[paste titles and years]
```

### Check

Pick two themes and check that every title assigned to them really belongs there, and that the per-year counts match your list.

### Limit

The assistant cannot analyse publication or citation databases; this tests clustering a small list you supply, not a bibliometric trend analysis.

## Technology

Paste titles and years into your AI assistant, or attach them as a file, for a first grouping. With OpenAlex connected (if your tool and your university allow it), the assistant can count publications per topic and year across the database; Litmaps adds citation maps. For practice, attach the abstracts file of the 12 papers.

## Levels

### Chat

Attach the abstracts file (AB) and run the starter prompt in one chat. In the same chat, ask the assistant to recount the papers per year from the file and name any paper missing from its table.

### Project / Notebook

Add the abstracts file (AB) – it is .txt, so most tools accept it as a source – or, for your own field, title lists exported from a database and saved as .xlsx or .txt. Ask for themes and yearly counts across all lists at once. Depending on your tool, the workspace may not run code, so recount the numbers yourself. You can add a new export each term and see whether the themes hold.

### Custom assistant

Call it 'Topic scout'. Instructions: four to six themes, a theme–paper–year table, rarely combined themes, a statement of what the sample can and cannot show, and never add papers that are not in the upload. Switch on code execution / data analysis if your tool offers it, so it counts and charts papers per year. Starter prompt: 'Cluster this title list and chart papers per year.' Reusable for every new export.

### Automation / own code

Connect the OpenAlex MCP server so the assistant pulls titles, years and topics for a whole field query and counts them at scale, instead of working on a list you paste. A plain chat assistant cannot reach an external database. On GitHub: a Python script queries the OpenAlex API for the whole field and counts topics per year – versioned code makes the counts reproducible. Check data protection and approval with your university first.
