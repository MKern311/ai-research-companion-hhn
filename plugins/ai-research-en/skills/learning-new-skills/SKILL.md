---
name: learning-new-skills
description: "Learn a method, statistics package or programming language step by step with an AI tutor – and test yourself. Use when the user works on: Learning new skills."
---

# Learning new skills

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/querschnitt-6

## Goal

Learn a method, statistics package or programming language step by step with an AI tutor – and test yourself.

A paced tutorial on your own example, built on worked examples and retrieval practice, with exercises and feedback – faster learning, provided you check functions against the official documentation.

## When to use

Courses rarely match your method or timing, documentation assumes knowledge you lack, and passively reading tutorials feels productive but leaves little you can apply.

## Procedure

1. Name the skill and ask the assistant to test your level with three questions.
2. Work through the first step and try the small exercise yourself.
3. Ask for feedback on your answer before seeing the solution.
4. Finish with a five-question quiz and note what to look up.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.
- Instructions: tutor role, test the level first, one idea, worked example and exercise at a time, wait for my answer, feedback before the solution, a quiz at the end, point to the official documentation, say when unsure. Knowledge: the package documentation. Switch on "Create documents, charts and code" to run Python examples; for R, Stata or SPSS you run its code in your own software. Starter prompts: "Teach me changepoint detection" and "Quiz me on last week's topic". Reusable for any new method.

## Starter prompt

```text
I am a postgraduate researcher in [discipline] and want to learn [method / package / language] for [purpose in my project]. Act as a patient tutor. First ask me three short questions to judge my level. Then teach step by step in short chunks: explain one idea, show a small example, and give me one exercise. Wait for my answer and give feedback before showing the solution. Use [dataset or a simple made-up example]. Point me to the official documentation for each step, and if you are not sure about a function or option, say so.
```

## Quality check

Run one example in your own software or compare it with the official documentation, and confirm that it works or matches.

## Limits

- Depending on your tool, the assistant runs Python at most. For R, Stata, SPSS or other software it writes and explains the code, and you run it in your own software.
- Risk: Public or your own non-sensitive material; errors are easy to spot.

## Key concepts

- **Retrieval practice (testing effect)** – Actively recalling information, for example in a quiz, improves long-term retention more than rereading (Roediger & Karpicke, 2006). Ask the tutor to test you before it explains again.
- **Worked-example effect** – From cognitive load theory (Sweller, 1988): novices learn faster by studying fully worked solutions before solving similar problems; as expertise grows, worked steps are faded and you solve problems independently.
- **Spaced practice** – Spreading practice over several days rather than massing it in one session improves retention. Dunlosky et al. (2013) rate practice testing and distributed practice as the most useful of ten common learning techniques.
- **Scaffolding and fading** – Support is given at the start and gradually withdrawn. Ask the tutor for hints before full solutions, so that you do the thinking and it only fills gaps.

## Key references

- Roediger, H. L., III, & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. Psychological Science, 17(3), 249–255. https://doi.org/10.1111/j.1467-9280.2006.01693.x
- Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. Cognitive Science, 12(2), 257–285. https://doi.org/10.1207/s15516709cog1202_4
- Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students' learning with effective learning techniques: Promising directions from cognitive and educational psychology. Psychological Science in the Public Interest, 14(1), 4–58. https://doi.org/10.1177/1529100612453266

## Tools that help

Jamovi · GitHub Copilot
