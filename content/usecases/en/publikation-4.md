---
id: publikation-4
phase: publikation
order: 4
title: Pre-submission review
risk: 2
mode: Assist
potential: 3
capabilities: analyse
routes: files; chat; external
tools: Paperpal
repos: ars-reviewer; peer-review-panel
data: C6
practice_data: C6
---

Have the text assessed by a panel of critical reviewers – methods, theory, devil’s advocate – including missing reporting items for your design, and turn it into a revision roadmap.

## Problem

Critical feedback usually arrives months after submission, and supervisors rarely have time to read every draft as a sceptical outsider who checks methods, inference and reporting standards.

## Result

Three reviews from different angles, each tied to a quoted passage, missing reporting items named against the relevant EQUATOR guideline, and a prioritised revision roadmap – you judge which comments are valid.

## Steps

1. Upload the section and name journal and article type
2. Ask for methods, theory and devil's advocate reviews
3. Require a quoted passage behind every major comment
4. Check reporting items against the guideline's own checklist
5. Turn the comments you accept into a prioritised roadmap

## Concepts

### EQUATOR Network reporting guidelines

A curated library of design-specific checklists: CONSORT (randomised trials), STROBE (observational studies), PRISMA 2020 (systematic reviews), COREQ and SRQR (qualitative research), ARRIVE (animal research). Developed in health research, used across fields wherever these designs occur.

### Peer-review criteria

Editors usually ask reviewers to judge originality, validity of methods and inference, significance and clarity, and to separate major comments (affecting the conclusions) from minor ones (presentation, wording).

### Devil's advocate (red teaming)

A reviewer role that argues deliberately against the central claim – alternative explanations, confounding, overgeneralisation, selective reporting – to expose weaknesses before external reviewers do.

### TOP Guidelines

Transparency and Openness Promotion: introduced in 2015 with eight standards and revised as TOP 2025. Seven research practices (study registration, study protocol, analysis plan, materials, data, analytic code and reporting transparency) can be disclosed, shared and cited, or certified; verification practices and studies cover results transparency, computational reproducibility, replications and Registered Reports. Use them to anticipate data and code requests.

## References

- Simera, I., Moher, D., Hirst, A., Hoey, J., Schulz, K. F., & Altman, D. G. (2010). Transparent and accurate reporting increases reliability, utility, and impact of your research: Reporting guidelines and the EQUATOR Network. BMC Medicine, 8, 24. doi:10.1186/1741-7015-8-24
- Nosek, B. A., Alter, G., Banks, G. C., Borsboom, D., Bowman, S. D., Breckler, S. J., Buck, S., Chambers, C. D., Chin, G., Christensen, G., Contestabile, M., Dafoe, A., Eich, E., Freese, J., Glennerster, R., Goroff, D., Green, D. P., Hesse, B., Humphreys, M., … Yarkoni, T. (2015). Promoting an open research culture. Science, 348(6242), 1422–1425. doi:10.1126/science.aab2374
- Grant, S., Corker, K. S., Mellor, D., Stewart, S. L. K., Mayo-Wilson, E., Cashin, A. G., Lagisz, M., Moher, D., Umpierre, D., Barbour, V., Buck, S., Collins, G. S., Hazlett, H. F., Hrynaszkiewicz, I., Lee, C. J., Parker, T. H., Rethlefsen, M. L., Toomey, E., Nosek, B. A., & the TOP Advisory Board. (2026). TOP 2025: An update to the Transparency and Openness Promotion Guidelines. Research Integrity and Peer Review, 11, 40. doi:10.1186/s41073-026-00223-0

## Practice exercise

### Task

Run a three-reviewer panel on the preprint version of the Shi et al. changepoint paper, treating it as if it were still under review. You learn whether the assistant ties each comment to a real passage and whether it forces an unsuitable reporting guideline onto a statistical analysis.

### Prompt

```text
Attached is the arXiv preprint version (v2, June 2022) of Shi et al. on changepoints in the Central England Temperature series. The paper was later published in the Journal of Climate; for this exercise, treat this preprint version as if it were a manuscript under review at a statistics or climate journal. Act as a panel of three critical but fair peer reviewers: a time-series methods expert, a climate scientist and a devil's advocate who challenges the central claim of a late-1980s changepoint. Each reviewer gives a two-sentence assessment and up to four major comments; for each, quote the passage it refers to and suggest a concrete fix. Then say whether any EQUATOR reporting guideline applies; if none fits, say so. Finish with a revision roadmap ordered by priority, with effort (small, medium, large). Comment only on what is in the text.
```

### Check

Search the PDF for each quoted passage. Comments on model choice should engage with the log-likelihood, BIC and MDL comparisons in Tables 2–3. No clinical guideline such as CONSORT should be imposed on this design. If the assistant mentions the published version (Journal of Climate, 2022, doi 10.1175/JCLI-D-21-0489.1), that is correct.

## Own material

### Bring

Two to three pages of your own draft (for example methods and discussion) that you are sole author of or have co-authors' consent to share, or an open-access paper from your field.

### Steps

1. Attach or paste the text and name the target journal and article type.
2. Ask for three short reviews from different roles: methods, theory, devil's advocate.
3. Ask the assistant to quote the passage behind each major comment and name missing reporting items.
4. Ask for a revision roadmap and draft how you would address the two most useful comments.

### Prompt

```text
I am a postgraduate researcher in [discipline] and plan to submit this [article type] to [journal]. Attached is [section of my draft]. Act as a panel of three critical but fair peer reviewers: a methods expert, a theory expert and a devil's advocate who challenges the central claim. Each reviewer gives a two-sentence assessment and up to four major comments; for each comment, quote the passage it refers to and suggest a concrete fix. Then name any items the reporting guideline for my design would expect that are missing (for example CONSORT, STROBE, COREQ or SRQR – say which one applies). Finish with a revision roadmap: the changes in order of priority, with effort (small, medium, large). Comment only on what is in the text; if something may be covered elsewhere in the paper, say so.
```

### Check

Each comment points to a passage you can find in your text, and at least one names a weakness that you or a supervisor had already noticed.

## Technology

Upload the draft section to your AI assistant for the reviewer panel and tick missing items against the guideline's own checklist on the EQUATOR Network website; open-source reviewer skills in a coding assistant in your editor (e.g. GitHub Copilot in VS Code, Claude Code) give a fuller review.

## Levels

### Chat

Run the starter prompt with the Shi preprint attached. Then, in the same chat, ask the assistant to turn the two highest-priority comments into a concrete revision plan for the methods section.

### Project / Notebook

Add the Shi preprint (C6) or your own draft, the target journal's reviewer guidance and the checklist of the reporting guideline that fits your design (from the EQUATOR Network website). Ask which checklist items are missing. After each revision you add the new version and see which comments are resolved.

### Custom assistant

Create a configured assistant (e.g. a Copilot agent, custom GPT, Gemini Gem or Claude project). In its standing instructions, define the panel: a methods expert, a field expert and a devil's advocate, each with a short assessment and up to four major comments that quote their passage and propose a fix; then a reporting-guideline check ("say if none fits") and a prioritised roadmap with effort. Add your checklists as knowledge files (if your tool does not support them, attach them in the chat). Starter prompt: "Review this draft for [journal]." Reusable for every manuscript – only your own drafts or with co-authors' consent.
