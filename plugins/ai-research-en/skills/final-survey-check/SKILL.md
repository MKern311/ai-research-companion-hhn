---
name: final-survey-check
description: "Let your AI assistant walk through the finished questionnaire along different answer paths to find broken routing, missing or overlapping answer options and inconsistent scales – and proofread it as a whole. Use when the user works on: Final survey check."
---

# Final survey check

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/design-5

## Goal

Let your AI assistant walk through the finished questionnaire along different answer paths to find broken routing, missing or overlapping answer options and inconsistent scales – and proofread it as a whole.

Three respondent paths walked through, a fix list for routing and answer options (mutually exclusive, exhaustive, consistent scales), a language check and a completion-time estimate – fewer unusable responses after launch.

## When to use

Broken skip logic, overlapping answer options and inconsistent scales slip through when you have read your own questionnaire twenty times – and surface only in the data.

## Procedure

1. Attach the exported questionnaire and describe the target group.
2. Ask the assistant to walk through it along three different answer paths.
3. Ask for a list of logic and answer-option problems, then a language check.
4. Test every flagged routing problem in the survey tool's preview.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.
- Call it 'Survey checker'. Instructions: walk at least three respondent paths, use the fixed problem types and table, add a language check and a completion-time estimate, and never change the meaning of a question. Knowledge: your style guide or your institution's survey guidance. Starter prompt: 'Check this exported questionnaire for [target group]'. Reusable for every questionnaire and every version before launch.

## Starter prompt

```text
I have finished a questionnaire on [topic] for [target group]; it is attached with its routing. Act as a careful survey methodologist. First, walk through the questionnaire as three respondents taking different paths (for example someone who answers 'no' at the first filter, someone who answers 'yes' everywhere, and someone who skips optional questions), listing the questions each one sees. Then show a table of problems: question number, type of problem (broken or missing routing, question shown to people it does not apply to, answer options missing or overlapping, inconsistent scale direction or labels, reference to an earlier answer that may not exist, unclear instruction), and a suggested fix. Next, check the language: spelling, grammar, consistent terms and form of address, and wording that is hard to read for the target group. Finally, estimate the completion time. Do not change the meaning of any question.
```

## Quality check

Each routing problem shows up when you follow the same path in the survey tool's preview, and each language fix keeps the question's meaning.

## Limits

- The assistant reads the exported text, not the live survey; logic that the export does not show cannot be checked, and a pilot with real respondents is still needed.
- Risk: Your own unpublished drafts, reviews or third-party content.

## Key concepts

- **Routing (skip and display logic)** – Conditional rules that decide which questions a respondent sees. Test every branch with contrasting paths: 'no' at a filter, 'yes' throughout, optional items skipped. Typical faults: dead ends, questions shown to the wrong group, text piped from unanswered items.
- **Mutually exclusive and exhaustive categories** – Each respondent fits exactly one option (no overlapping ranges such as 18–25 and 25–30) and every respondent fits some option (add 'other', 'none' or 'prefer not to say' where needed). Violations produce unusable or biased responses.
- **Scale consistency** – Keep direction, number of points, labels and treatment of the midpoint consistent across comparable items, or change them deliberately and visibly. Inconsistent scales cause response errors that look like real variation in the data.
- **Tailored design method (Dillman, Smyth & Christian)** – Guidance for self-administered surveys: consistent wording and visual design, instructions placed where they are needed, low respondent burden, and testing the finished instrument, including its programming, before launch. Use it as a checklist alongside the routing test.

## Key references

- Dillman, D. A., Smyth, J. D., & Christian, L. M. (2014). Internet, phone, mail, and mixed-mode surveys: The tailored design method (4th ed.). Wiley.
- Groves, R. M., Fowler, F. J., Couper, M. P., Lepkowski, J. M., Singer, E., & Tourangeau, R. (2009). Survey methodology (2nd ed.). Wiley.
