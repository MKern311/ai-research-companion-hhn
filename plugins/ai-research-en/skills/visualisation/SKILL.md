---
name: visualisation
description: "Create chart suggestions and publication-ready figures as reproducible code. Use when the user works on: Visualisation."
---

# Visualisation

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/analyse-5

## Goal

Create chart suggestions and publication-ready figures as reproducible code.

A publication-ready figure produced by code you keep, with an encoding and palette chosen for accurate perception, so a revision means rerunning a script rather than redrawing.

## When to use

Default charts rarely meet journal guidelines, often hide uncertainty or use misleading colour scales, and adjusting every figure by hand for each revision is slow and unrepeatable.

## Procedure

1. Attach the data and paste the starter prompt with your message and audience.
2. Choose one of the suggested chart types and ask the assistant to draw it.
3. Ask for changes to labels, colours or size to meet your journal's figure guidelines.
4. Save the final Python code alongside your data.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.
- Create a configured assistant (e.g. a Copilot agent, custom GPT, Gemini Gem or Claude project). In its standing instructions, write your house style: font and size, colour-blind-safe palette, width and resolution, axis labels with units, complete periods only, uncertainty shown where the data allow, and "always return the full code and a draft caption". Add the journal's figure guidelines as a knowledge file (if your tool does not support knowledge files, attach it in the chat) and switch on code execution / data analysis if your tool offers it. Starter prompt: "Draw this data as a journal figure in my house style." Reusable for every chapter.

## Starter prompt

```text
I need a publication-quality figure for a [journal article or thesis chapter] in [discipline]. The attached file contains [variables]. The figure should show [message, e.g. how X changed over time by group]. Suggest two or three suitable chart types with one line on each. Then create the best one in Python (matplotlib), with clear axis labels including units, a colour-blind-safe palette, no unnecessary decoration, and a size of [e.g. 17 cm wide] at 300 dpi. Show the full code so I can reproduce it.
```

## Quality check

Two or three plotted values match the data, and the figure stays readable in greyscale and at its printed size.

## Limits

- Risk: Public or your own non-sensitive material; errors are easy to spot.

## Key concepts

- **Cleveland & McGill's perceptual ranking** – People judge position on a common scale most accurately, followed by length, angle and slope, area, and finally colour and shading. Encode the comparison that matters most as position; avoid pie charts and 3D effects for precise comparisons.
- **Data-ink ratio** – Tufte's principle that most of the ink in a graphic should show data: remove heavy gridlines, frames, shadows and redundant labels, while keeping axes, units and uncertainty.
- **Perceptually uniform, colour-vision-deficiency-safe palettes** – Colour maps such as viridis or Crameri's scientific colour maps change lightness evenly and stay readable with colour-vision deficiency (Crameri et al., 2020); rainbow ('jet') maps create false boundaries and should be avoided.
- **Showing uncertainty** – Plot intervals – confidence or credible bands, error bars – together with the estimate, and state in the caption what they represent (for example a 95 % confidence interval) so readers do not over-read small differences.

## Key references

- Cleveland, W. S., & McGill, R. (1984). Graphical perception: Theory, experimentation, and application to the development of graphical methods. Journal of the American Statistical Association, 79(387), 531–554. https://doi.org/10.1080/01621459.1984.10478080
- Tufte, E. R. (2001). The visual display of quantitative information (2nd ed.). Graphics Press.
- Rougier, N. P., Droettboom, M., & Bourne, P. E. (2014). Ten simple rules for better figures. PLoS Computational Biology, 10(9), e1003833. https://doi.org/10.1371/journal.pcbi.1003833
- Crameri, F., Shephard, G. E., & Heron, P. J. (2020). The misuse of colour in science communication. Nature Communications, 11, 5444. https://doi.org/10.1038/s41467-020-19160-7

## Tools that help

GitHub Copilot
