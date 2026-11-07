---
id: design-6
phase: design
order: 6
title: Conceptual & measurement model diagrams
risk: 1
mode: Co-create
potential: 3
capabilities: generierung; synthese
routes: chat; files; connected; external
connect: draw.io; Figma
repos: seminr; lavaan
data: A3; D3; D5
practice_data: A3; D3; D5
---

Turn your theory into a conceptual or measurement model diagram – constructs, paths and, where needed, survey items – as editable draw.io or Figma content you update with the literature instead of redrawing it.

## Problem

Conceptual and measurement models are redrawn by hand in slide or drawing tools; each new paper or changed construct means rework, and the diagram drifts away from the text and the item list.

## Result

An editable model kept as code (Mermaid or draw.io XML) next to a construct–indicator table – updated in minutes when the literature changes, and consistent across thesis, slides and survey.

## Steps

1. Write each construct with a one-line definition and its expected paths
2. Generate the diagram as Mermaid or draw.io XML and a construct–indicator table
3. Decide reflective or formative measurement for every construct
4. Store the code with your project and regenerate it when the evidence changes
5. Check every arrow against your theory and every item against its source

## Concepts

### Conceptual model

Shows constructs and the hypothesised relationships between them (direct paths, mediators, moderators). Each arrow should correspond to a stated hypothesis or proposition and its theoretical argument.

### Measurement model

Links each latent construct to its observed indicators (e.g. survey items). Path-diagram convention: latent constructs as ovals, indicators as rectangles, arrows for assumed directions (Kline, 2016).

### Reflective vs formative measurement

Reflective: the construct causes its indicators, which should correlate and are interchangeable. Formative: indicators jointly form the construct and are not interchangeable. Misspecification biases estimates (Jarvis et al., 2003).

### Construct–indicator mapping

A table linking each construct definition to its items and their source; the basis for content validity and the later CFA or PLS-SEM (MacKenzie et al., 2011).

### Model as code and living updates

Keeping the diagram as text (Mermaid, draw.io XML) makes it versionable and quick to regenerate, in the spirit of living reviews that are updated as new evidence appears (Elliott et al., 2014).

## References

- Jarvis, C. B., MacKenzie, S. B., & Podsakoff, P. M. (2003). A critical review of construct indicators and measurement model misspecification in marketing and consumer research. Journal of Consumer Research, 30(2), 199–218. doi:10.1086/376806
- MacKenzie, S. B., Podsakoff, P. M., & Podsakoff, N. P. (2011). Construct measurement and validation procedures in MIS and behavioral research: Integrating new and existing techniques. MIS Quarterly, 35(2), 293–334. doi:10.2307/23044045
- Kline, R. B. (2016). Principles and practice of structural equation modeling (4th ed.). Guilford Press.
- Elliott, J. H., Turner, T., Clavisi, O., Thomas, J., Higgins, J. P. T., Mavergames, C., & Gruen, R. L. (2014). Living systematic reviews: An emerging opportunity to narrow the evidence-practice gap. PLoS Medicine, 11(2), e1001603. doi:10.1371/journal.pmed.1001603

## Practice exercise

### Task

Build the causal chain behind the annual climate indicators from Forster et al. (2025) as diagram code, with a table of every arrow and the section it comes from, and map the two practice data files to the constructs they measure. You see in the chat whether the assistant keeps to the paper's chain or adds arrows of its own.

### Prompt

```text
Attached is Forster et al. (2025), 'Indicators of Global Climate Change 2024', plus the HadCRUT5 monthly CSV and the NOAA Mauna Loa CO₂ CSV. 1) From the paper only, draw the chain of indicators it reports – from emissions through concentrations and effective radiative forcing to observed and human-induced warming – as Mermaid flowchart code (left to right), each arrow labelled with the section of the paper it comes from. 2) Give a table of every arrow in the code: number, from, to, section of the paper (number and title) and a short quote from that section that supports the arrow. 3) Add a measurement layer: which column of each attached data file measures which construct, and with what unit and baseline. 4) List any arrow or construct you added that is not in the paper.
```

### Check

Check the arrow table in the chat: open each cited section in the PDF, find the quote and compare the chain with Figure 1 of the paper (the flow chart from emissions to human-induced warming); aerosol and other non-CO₂ forcings must appear if the assistant claims completeness. Neither file states its baseline, and the CO₂ file does not state its unit: HadCRUT5 'Anomaly (deg C)' is relative to 1961–1990 (not in the file), and the CO₂ column 'average' is in ppm (not in the file), so the assistant should say where it took them from. Optional: paste the Mermaid code into draw.io (Arrange › Insert › Advanced) to view the diagram.

## Own material

### Bring

Your research question with three to six constructs and the expected relationships – or, for the practice version, the Forster et al. (2025) paper and two data files.

### Steps

1. Describe the constructs, their definitions and the expected paths.
2. Ask the assistant for the model as Mermaid code, a table of every arrow with what it rests on, and a construct–indicator table.
3. Check every arrow and indicator in the tables against your theory and sources.
4. Optional: paste the code into draw.io (Arrange › Insert › Advanced) to view and edit the diagram.

### Prompt

```text
I am a postgraduate researcher in [discipline] working on [research question]. My constructs are: [construct – one-line definition, for each]. The expected relationships are: [e.g. A increases B; C moderates A→B]. 1) Draw the conceptual model as Mermaid flowchart code (left to right): constructs as nodes, hypothesised paths as labelled arrows (H1, H2 …), moderators as arrows pointing at a path. 2) Give a table of every arrow in the code: label, from, to, and the part of my description it rests on – or 'not in description'. 3) If I want a measurement model, add for each construct whether it is reflective or formative, with a one-line reason, and list 3–4 candidate indicators or survey items per construct in a table: construct, indicator, source or 'to be developed'. Do not invent published scales; if you suggest an existing scale, say how sure you are. 4) List any path that is not backed by my description.
```

### Check

Every row of the arrow table matches your description or is flagged, each indicator really reflects (or forms) its construct, and any named scale exists with the items the assistant claims.

### Limit

The assistant returns the model as code and as tables you check in the chat; to see the drawing you paste the code into draw.io or another Mermaid viewer, and drawing directly on the canvas needs a connection that your tool and your university must allow. The theory behind each arrow remains your argument.

## Technology

Your AI assistant writes Mermaid or draw.io XML, which you import into draw.io (Arrange › Insert › Advanced). With the draw.io or Figma MCP server connected – if your tool supports MCP connectors and your university allows it – the assistant can create and update the diagram directly.

## Levels

### Chat

Run the starter prompt to get the Mermaid code and the table of every arrow with its source. In the same chat, add or remove one path and ask for the updated code and arrow table, so you see that the model changes without being redrawn.

### Project / Notebook

Add the key papers behind your constructs, your construct definitions and the current model code saved as a .txt file – for the practice version A3, plus D3 and D5 saved as .xlsx first. Ask which arrows the papers support and what a newly added paper changes. When the literature moves on, you update the model from the same sources.

### Custom assistant

Call it 'Model diagram builder'. Instructions: Mermaid flowchart left to right, paths labelled H1, H2 …, always a table of every arrow with its source and a construct–indicator table, reflective or formative with a reason, never invent published scales, flag every path not in the input. Knowledge: your construct definitions and theory notes. Starter prompt: 'Update my model: [change]'. Reusable across thesis, slides and survey.

### Automation / own code

Add the draw.io or Figma MCP server to a custom assistant or workflow, so the assistant draws and updates the diagram on the canvas instead of returning code you paste in. This needs a tool that supports MCP connectors. On GitHub: keep the diagram as Mermaid code in a repository – GitHub renders it, and every change stays visible in the history. Check data protection and approval with your university first.
