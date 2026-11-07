---
id: analyse-5
phase: analyse
order: 5
title: Visualisation
risk: 1
mode: Co-create
potential: 2
capabilities: generierung
routes: files; external
tools: GitHub Copilot
repos: kd-viz
data: D3
practice_data: D3
---

Create chart suggestions and publication-ready figures as reproducible code.

## Problem

Default charts rarely meet journal guidelines, often hide uncertainty or use misleading colour scales, and adjusting every figure by hand for each revision is slow and unrepeatable.

## Result

A publication-ready figure produced by code you keep, with an encoding and palette chosen for accurate perception, so a revision means rerunning a script rather than redrawing.

## Steps

1. State the figure's single message and audience
2. Choose the encoding that makes the key comparison easiest
3. Show uncertainty and use a colour-blind-safe palette
4. Set size, fonts and resolution to journal rules
5. Save the code next to your data

## Concepts

### Cleveland & McGill's perceptual ranking

People judge position on a common scale most accurately, followed by length, angle and slope, area, and finally colour and shading. Encode the comparison that matters most as position; avoid pie charts and 3D effects for precise comparisons.

### Data-ink ratio

Tufte's principle that most of the ink in a graphic should show data: remove heavy gridlines, frames, shadows and redundant labels, while keeping axes, units and uncertainty.

### Perceptually uniform, colour-vision-deficiency-safe palettes

Colour maps such as viridis or Crameri's scientific colour maps change lightness evenly and stay readable with colour-vision deficiency (Crameri et al., 2020); rainbow ('jet') maps create false boundaries and should be avoided.

### Showing uncertainty

Plot intervals – confidence or credible bands, error bars – together with the estimate, and state in the caption what they represent (for example a 95 % confidence interval) so readers do not over-read small differences.

## References

- Cleveland, W. S., & McGill, R. (1984). Graphical perception: Theory, experimentation, and application to the development of graphical methods. Journal of the American Statistical Association, 79(387), 531–554. doi:10.1080/01621459.1984.10478080
- Tufte, E. R. (2001). The visual display of quantitative information (2nd ed.). Graphics Press.
- Rougier, N. P., Droettboom, M., & Bourne, P. E. (2014). Ten simple rules for better figures. PLoS Computational Biology, 10(9), e1003833. doi:10.1371/journal.pcbi.1003833
- Crameri, F., Shephard, G. E., & Heron, P. J. (2020). The misuse of colour in science communication. Nature Communications, 11, 5444. doi:10.1038/s41467-020-19160-7

## Practice exercise

### Task

Draw HadCRUT5 annual anomalies with their 95 % confidence band as a journal figure. You learn whether the assistant computes annual values correctly, uses the uncertainty columns, excludes the incomplete year and meets size and palette rules.

### Prompt

```text
I need a publication-quality figure for a thesis chapter. Attached is the HadCRUT5 monthly CSV with the columns Time, Anomaly (deg C) and the lower and upper 95 % confidence limits. The figure should show how global temperature has changed since 1850 and how uncertain the early values are. Suggest two or three suitable chart types with one line on each. Then create the best one in Python (matplotlib): annual means of complete years only, the anomaly as a line and the confidence limits as a shaded band, axis labels with units and the 1961–1990 baseline, a colour-blind-safe palette, no unnecessary decoration, 17 cm wide at 300 dpi. Say whether averaging monthly confidence limits gives a valid annual interval and what you would use instead. Show the full code and a draft caption.
```

### Check

The last year plotted is 2025, not the incomplete 2026; 2024 is about 1.17 °C (check in Excel). Averaged monthly limits are only an approximation and wider than the Met Office's official annual series (for 1850 about −0.70 to −0.15 °C against −0.60 to −0.25 °C); the assistant should point you to that annual series for a published figure. Print the figure in greyscale to test readability.

## Own material

### Bring

A small public or dummy dataset as CSV or Excel and a rough idea of the message the figure should show.

### Steps

1. Attach the data and paste the starter prompt with your message and audience.
2. Choose one of the suggested chart types and ask the assistant to draw it.
3. Ask for changes to labels, colours or size to meet your journal's figure guidelines.
4. Save the final Python code alongside your data.

### Prompt

```text
I need a publication-quality figure for a [journal article or thesis chapter] in [discipline]. The attached file contains [variables]. The figure should show [message, e.g. how X changed over time by group]. Suggest two or three suitable chart types with one line on each. Then create the best one in Python (matplotlib), with clear axis labels including units, a colour-blind-safe palette, no unnecessary decoration, and a size of [e.g. 17 cm wide] at 300 dpi. Show the full code so I can reproduce it.
```

### Check

Two or three plotted values match the data, and the figure stays readable in greyscale and at its printed size.

## Technology

Upload the data to your AI assistant; if it can run code, it draws the figure in Python with matplotlib and returns the image and the code. If you work in R, ask for ggplot2 code and run it yourself.

## Levels

### Chat

Run the starter prompt with the HadCRUT5 CSV attached. Then, in the same chat, ask for a greyscale version and a second panel from 1950 in the same size and style.

### Project / Notebook

Add the HadCRUT5 file (D3; save it as .xlsx or .txt if your tool does not accept CSV) with your journal's figure guidelines (PDF or Word) and the code of figures you have already accepted (.txt). Ask which guideline points your current figure still misses. Guidelines and figure code stay together, so every figure in the thesis follows the same rules.

### Custom assistant

Create a configured assistant (e.g. a Copilot agent, custom GPT, Gemini Gem or Claude project). In its standing instructions, write your house style: font and size, colour-blind-safe palette, width and resolution, axis labels with units, complete periods only, uncertainty shown where the data allow, and "always return the full code and a draft caption". Add the journal's figure guidelines as a knowledge file (if your tool does not support knowledge files, attach it in the chat) and switch on code execution / data analysis if your tool offers it. Starter prompt: "Draw this data as a journal figure in my house style." Reusable for every chapter.
