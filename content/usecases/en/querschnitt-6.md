---
id: querschnitt-6
phase: querschnitt
order: 6
title: Learning new skills
risk: 1
mode: Assist
potential: 2
capabilities: generierung
routes: chat; files
tools: Jamovi; GitHub Copilot
data: D2; C6
practice_data: D2
practice_ref: C6
---

Learn a method, statistics package or programming language step by step with an AI tutor – and test yourself.

## Problem

Courses rarely match your method or timing, documentation assumes knowledge you lack, and passively reading tutorials feels productive but leaves little you can apply.

## Result

A paced tutorial on your own example, built on worked examples and retrieval practice, with exercises and feedback – faster learning, provided you check functions against the official documentation.

## Steps

1. Name the skill and let the assistant test your level
2. Study one worked example, then solve a similar exercise
3. Answer before you ask for the solution
4. End with a quiz and repeat it days later
5. Check functions against the official documentation

## Concepts

### Retrieval practice (testing effect)

Actively recalling information, for example in a quiz, improves long-term retention more than rereading (Roediger & Karpicke, 2006). Ask the tutor to test you before it explains again.

### Worked-example effect

From cognitive load theory (Sweller, 1988): novices learn faster by studying fully worked solutions before solving similar problems; as expertise grows, worked steps are faded and you solve problems independently.

### Spaced practice

Spreading practice over several days rather than massing it in one session improves retention. Dunlosky et al. (2013) rate practice testing and distributed practice as the most useful of ten common learning techniques.

### Scaffolding and fading

Support is given at the start and gradually withdrawn. Ask the tutor for hints before full solutions, so that you do the thinking and it only fills gaps.

## References

- Roediger, H. L., III, & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. Psychological Science, 17(3), 249–255. doi:10.1111/j.1467-9280.2006.01693.x
- Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. Cognitive Science, 12(2), 257–285. doi:10.1207/s15516709cog1202_4
- Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students' learning with effective learning techniques: Promising directions from cognitive and educational psychology. Psychological Science in the Public Interest, 14(1), 4–58. doi:10.1177/1529100612453266

## Practice exercise

### Task

Learn changepoint detection step by step on the Central England monthly series. You learn whether the assistant teaches the method correctly and whether the changepoints it finds match those in the Shi et al. preprint, which you keep open for checking.

### Prompt

```text
I am a postgraduate researcher and want to learn changepoint detection in Python. Act as a patient tutor. First ask me three short questions to judge my level. Then teach step by step in short chunks: explain one idea, show a small worked example, and give me one exercise; wait for my answer and give feedback before showing the solution. Use the attached HadCET monthly text file: help me read it, keep only complete years and use the Annual column (-99.9 marks missing values). Cover mean-shift versus trend-shift models and penalties such as BIC and MDL. In the last step, fit a trend-shift model with a BIC penalty to the annual series and list the changepoint years. Use only Python packages already available in your environment; if no changepoint package is installed, implement the method with numpy and statsmodels and say so. Point me to the documentation of any package you use, and say when you are unsure.
```

### Check

Compare with Shi et al. (Table 2, Figure 2): BIC and MDL trend-shift models flag changepoints in 1700, 1739 and 1988, and the fixed-slope mean-shift model flags 1988. The paper used an earlier CET version, so small differences are possible; large ones need an explanation.

## Own material

### Bring

The name of a method, statistics package or programming language you want to learn, and optionally a small public or dummy dataset.

### Steps

1. Name the skill and ask the assistant to test your level with three questions.
2. Work through the first step and try the small exercise yourself.
3. Ask for feedback on your answer before seeing the solution.
4. Finish with a five-question quiz and note what to look up.

### Prompt

```text
I am a postgraduate researcher in [discipline] and want to learn [method / package / language] for [purpose in my project]. Act as a patient tutor. First ask me three short questions to judge my level. Then teach step by step in short chunks: explain one idea, show a small example, and give me one exercise. Wait for my answer and give feedback before showing the solution. Use [dataset or a simple made-up example]. Point me to the official documentation for each step, and if you are not sure about a function or option, say so.
```

### Check

Run one example in your own software or compare it with the official documentation, and confirm that it works or matches.

### Limit

Depending on your tool, the assistant runs Python at most. For R, Stata, SPSS or other software it writes and explains the code, and you run it in your own software.

## Technology

Run the tutor in your AI assistant; upload a small dataset so exercises use real material, and the assistant can run Python examples itself if your tool supports code execution. Keep a methods paper open to check what the tutor teaches. Run R, Stata or SPSS exercises in your own software.

## Levels

### Chat

Run the starter prompt with the D2 monthly file attached and work through the steps in the same chat. At the end, ask for a five-question quiz and answer it before you see the solutions; repeat it a few days later.

### Project / Notebook

Add C6, the official documentation of the package you use (saved as PDF) and your own notes as references. Ask questions across them when you get stuck and keep worked examples and quiz answers as saved notes – explanations stay tied to the paper and the documentation. Depending on your tool, run code in a chat, as a notebook may not run Python.

### Custom assistant

Instructions: tutor role, test the level first, one idea, worked example and exercise at a time, wait for my answer, feedback before the solution, a quiz at the end, point to the official documentation, say when unsure. Knowledge: the package documentation. Switch on "Create documents, charts and code" to run Python examples; for R, Stata or SPSS you run its code in your own software. Starter prompts: "Teach me changepoint detection" and "Quiz me on last week's topic". Reusable for any new method.
