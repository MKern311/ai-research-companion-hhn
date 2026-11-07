---
id: design-5
phase: design
order: 5
title: Final survey check
risk: 2
mode: Assist
potential: 3
capabilities: analyse; generierung
routes: files; chat
---

Let your AI assistant walk through the finished questionnaire along different answer paths to find broken routing, missing or overlapping answer options and inconsistent scales – and proofread it as a whole.

## Problem

Broken skip logic, overlapping answer options and inconsistent scales slip through when you have read your own questionnaire twenty times – and surface only in the data.

## Result

Three respondent paths walked through, a fix list for routing and answer options (mutually exclusive, exhaustive, consistent scales), a language check and a completion-time estimate – fewer unusable responses after launch.

## Steps

1. Export the questionnaire with its routing visible
2. Ask the assistant to follow three contrasting answer paths
3. Check options are mutually exclusive and exhaustive
4. Request a problem table, then a language check
5. Test every flagged route in the survey preview

## Concepts

### Routing (skip and display logic)

Conditional rules that decide which questions a respondent sees. Test every branch with contrasting paths: 'no' at a filter, 'yes' throughout, optional items skipped. Typical faults: dead ends, questions shown to the wrong group, text piped from unanswered items.

### Mutually exclusive and exhaustive categories

Each respondent fits exactly one option (no overlapping ranges such as 18–25 and 25–30) and every respondent fits some option (add 'other', 'none' or 'prefer not to say' where needed). Violations produce unusable or biased responses.

### Scale consistency

Keep direction, number of points, labels and treatment of the midpoint consistent across comparable items, or change them deliberately and visibly. Inconsistent scales cause response errors that look like real variation in the data.

### Tailored design method (Dillman, Smyth & Christian)

Guidance for self-administered surveys: consistent wording and visual design, instructions placed where they are needed, low respondent burden, and testing the finished instrument, including its programming, before launch. Use it as a checklist alongside the routing test.

## References

- Dillman, D. A., Smyth, J. D., & Christian, L. M. (2014). Internet, phone, mail, and mixed-mode surveys: The tailored design method (4th ed.). Wiley.
- Groves, R. M., Fowler, F. J., Couper, M. P., Lepkowski, J. M., Singer, E., & Tourangeau, R. (2009). Survey methodology (2nd ed.). Wiley.

## Own material

### Bring

Your finished questionnaire exported as a Word or PDF file with its routing (filters, skip and display logic) visible, on a non-sensitive topic.

### Steps

1. Attach the exported questionnaire and describe the target group.
2. Ask the assistant to walk through it along three different answer paths.
3. Ask for a list of logic and answer-option problems, then a language check.
4. Test every flagged routing problem in the survey tool's preview.

### Prompt

```text
I have finished a questionnaire on [topic] for [target group]; it is attached with its routing. Act as a careful survey methodologist. First, walk through the questionnaire as three respondents taking different paths (for example someone who answers 'no' at the first filter, someone who answers 'yes' everywhere, and someone who skips optional questions), listing the questions each one sees. Then show a table of problems: question number, type of problem (broken or missing routing, question shown to people it does not apply to, answer options missing or overlapping, inconsistent scale direction or labels, reference to an earlier answer that may not exist, unclear instruction), and a suggested fix. Next, check the language: spelling, grammar, consistent terms and form of address, and wording that is hard to read for the target group. Finally, estimate the completion time. Do not change the meaning of any question.
```

### Check

Each routing problem shows up when you follow the same path in the survey tool's preview, and each language fix keeps the question's meaning.

### Limit

The assistant reads the exported text, not the live survey; logic that the export does not show cannot be checked, and a pilot with real respondents is still needed.

## Technology

Export the questionnaire with routing from your survey tool (for example Qualtrics or Microsoft Forms) as Word or PDF and upload it to your AI assistant; test flagged problems afterwards in the tool's preview.

## Levels

### Chat

Attach the exported questionnaire and run the starter prompt. In the same chat, ask for a fourth path – the respondent your filters are most likely to fail, such as someone who answers 'other' or 'don't know' at every filter.

### Project / Notebook

Add the exported questionnaire, your item list or codebook, the routing specification and your style guide for terms and form of address. Ask whether routing, answer options and terms match across all of them. After each fix you add the new export and ask again, so findings and fixes stay in one place.

### Custom assistant

Call it 'Survey checker'. Instructions: walk at least three respondent paths, use the fixed problem types and table, add a language check and a completion-time estimate, and never change the meaning of a question. Knowledge: your style guide or your institution's survey guidance. Starter prompt: 'Check this exported questionnaire for [target group]'. Reusable for every questionnaire and every version before launch.
