---
id: transfer-1
phase: transfer
order: 1
title: Presentations & visuals
risk: 2
mode: Co-create
potential: 3
capabilities: generierung
routes: files; connected; external
connect: Napkin AI
tools: Napkin AI
repos: kd-viz
data: D8
practice_data: D8
---

Draft slides, posters, infographics and explanatory graphics from results.

## Problem

Turning results into a clear chart and talk takes many iterations, and slides often list topics instead of stating claims backed by visual evidence.

## Result

A labelled, colour-safe chart with the Python code behind it, so you can reproduce and check it, and a six-slide outline built on assertion–evidence titles.

## Steps

1. Upload the data file and ask for one chart
2. Ask for the Python code and rerun or inspect it
3. Use a colour-vision-safe palette; label axes with units
4. Draft six slides with full-sentence assertion titles
5. Check two plotted values against the data

## Concepts

### Assertion–evidence slide structure

Each slide headline is a full-sentence claim, and the body is visual evidence for it (chart, image, diagram) rather than a bullet list. Garner, Alley and colleagues (2011) found better comprehension and recall of complex concepts than with topic-and-bullet slides.

### Data-ink ratio

Tufte's principle: maximise the share of ink that shows data and remove decoration – heavy gridlines, 3D effects, redundant labels, 'chartjunk'.

### Colour-vision-safe, perceptually uniform colour maps

Rainbow ('jet') colour maps distort data and exclude readers with colour-vision deficiency. Use perceptually uniform maps such as viridis or scientific colour maps (Crameri et al. 2020), and never encode meaning in colour alone.

### Reproducible figures

Generate every chart by code from the data file and keep code and data together, so values can be checked and the figure regenerated after changes (Rougier et al. 2014).

## References

- Garner, J., Alley, M., Wolfe, K., Zappe, S., & Sawarynski, L. (2011). Assertion-evidence slides appear to lead to better comprehension and recall of more complex concepts. In 2011 ASEE Annual Conference & Exposition Proceedings. ASEE. doi:10.18260/1-2--17510
- Crameri, F., Shephard, G. E., & Heron, P. J. (2020). The misuse of colour in science communication. Nature Communications, 11, 5444. doi:10.1038/s41467-020-19160-7
- Rougier, N. P., Droettboom, M., & Bourne, P. E. (2014). Ten simple rules for better figures. PLOS Computational Biology, 10(9), e1003833. doi:10.1371/journal.pcbi.1003833
- Tufte, E. R. (2001). The visual display of quantitative information (2nd ed.). Graphics Press.

## Practice exercise

### Task

Chart UK winter and summer rainfall from the Met Office national series and outline a short talk. You learn whether the assistant parses a wide file with an incomplete last row, knows which months each season covers and keeps its slide claims within what the data show.

### Prompt

```text
Attached is the Met Office UK rainfall text file (HadUK-Grid areal series: monthly, seasonal and annual totals in mm). 1) Read it with Python. The last row is an incomplete year, and some cells are blank or '---': say how you handled them and which months each season covers. 2) Create one clear chart of winter (win) and summer (sum) rainfall per year, each with a 10-year rolling mean, with labelled axes, units, a colour-vision-safe palette and a short title. Show the Python code. 3) Give mean winter and summer rainfall for 1961–1990 and 1991–2020. 4) Draft a six-slide outline for a 10-minute talk to postgraduate researchers: each title a full-sentence claim, up to three bullets, and the visual to use. Use only numbers from the file, and do not claim causes the data cannot show.
```

### Check

Mean winter rainfall is 302.8 mm (1961–1990) and 343.6 mm (1991–2020); summer is 232.0 and 253.4 mm. Winter includes the previous December; the wettest is 2014 (539.9 mm). The 2026 row has winter 399.6 mm but no annual total – if 399.6 appears as October, the assistant split the row on spaces. A title naming a cause goes beyond the data.

## Own material

### Bring

Three to five sentences on your key findings and a small results table as CSV or Excel (public or dummy data).

### Steps

1. Attach the results table and ask for one clear chart of the main result.
2. Ask the assistant to show the Python code it used for the chart.
3. Paste your key findings and ask for a six-slide talk outline.
4. Check two data points in the chart against your table.

### Prompt

```text
I am presenting my research to [audience] in a [10-minute] talk. Attached is a results table [file name]; my key findings are: [paste findings]. 1) Create one clear chart of [variable] by [group] with labelled axes, units and a short title, and show the Python code you used. 2) Draft a six-slide outline: each slide title is a full-sentence message, with up to three bullet points and a note on which visual to use. Use only the numbers in the file and my findings; if a column is unclear, ask me.
```

### Check

Two or three values in the chart match your table exactly, and the slide titles say what your findings actually show.

### Limit

The assistant drafts the chart and the slide outline; building the final slides or poster is done by you in PowerPoint or your slide tool.

## Technology

Upload the CSV or Excel file to your AI assistant; if it can run code, it returns the chart and the code. Napkin AI, if your university permits it, turns text into diagrams.

## Levels

### Chat

Run the starter prompt with the D8 rainfall file attached. In the same chat, ask the assistant to print the four 30-year means and the 2014 and 2026 rows from its parsed table, so you can check them against the file.

### Project / Notebook

Add the D8 text file, your talk notes and a Word file with the chart code and numbers you checked in Chat. Ask for slide titles and speaker notes that use only those checked numbers. Depending on your tool, a notebook may not run Python – if not, compute in a chat; you gain one place for data, code and talk drafts that you return to before each presentation.

### Custom assistant

Instructions: read wide files with Python and report how blanks and incomplete rows were handled; always show the code; colour-vision-safe palette, labelled axes with units; slide titles as full-sentence claims the data support, never causes the data cannot show. Switch on code execution or data analysis if your tool offers it. Starter prompts: "Chart this series with a 10-year rolling mean" and "Six-slide outline from this chart". Reusable for every new results file.
