---
id: analyse-6
phase: analyse
order: 6
title: Research software & simulation code
risk: 2
mode: Co-create
potential: 3
capabilities: generierung; analyse
routes: chat; files; external; connected
connect: GitHub (repositories)
tools: GitHub Copilot
repos: awesome-copilot
data: D6
practice_data: D6
---

Write, refactor, test and document code for models, simulations or lab data pipelines – and check numerical results against known solutions, benchmarks and physical plausibility (units, conserved quantities, value ranges).

## Problem

Research code grows without tests or documentation; months later you cannot tell whether a change altered a result, and others cannot run, reuse or cite your code.

## Result

Explained, refactored code with docstrings and unit tests that pin down its behaviour, including edge cases, and checks of the numbers against known solutions and physical plausibility – fewer silent errors and software you can deposit and cite.

## Steps

1. Paste a short code section and state its purpose
2. Check the explanation matches your intent
3. Ask for unit tests, including edge cases
4. Run the tests before accepting any refactoring
5. Check results against a known solution or benchmark
6. Add a licence, README and citation file before sharing

## Concepts

### Unit and regression tests

Unit tests check that a small function returns the expected output for given inputs, including edge cases such as empty, missing or extreme values; regression tests check that results do not change after refactoring. Tools: pytest, testthat; where no framework is available, plain assert statements do the same job for a few checks.

### Good enough practices in scientific computing

Wilson et al. (2017): decompose code into functions, eliminate duplication, use meaningful names, make dependencies explicit, provide a small test dataset, track changes with version control and deposit code in a DOI-issuing repository.

### FAIR principles for research software (FAIR4RS)

FAIR adapted to code (Barker et al., 2022): software is findable through a persistent identifier and metadata, accessible, interoperable through standard formats and interfaces, and reusable through a licence, documentation and provenance.

### Floating-point arithmetic

Computers store most decimals approximately, so results can differ in the last digits between machines or operation orders (Goldberg, 1991). Compare floats in tests with a tolerance, for example pytest.approx, never with exact equality.

## References

- Wilson, G., Bryan, J., Cranston, K., Kitzes, J., Nederbragt, L., & Teal, T. K. (2017). Good enough practices in scientific computing. PLoS Computational Biology, 13(6), e1005510. doi:10.1371/journal.pcbi.1005510
- Barker, M., Chue Hong, N. P., Katz, D. S., Lamprecht, A.-L., Martinez-Ortiz, C., Psomopoulos, F., Harrow, J., Castro, L. J., Gruenpeter, M., Martinez, P. A., & Honeyman, T. (2022). Introducing the FAIR Principles for research software. Scientific Data, 9, 622. doi:10.1038/s41597-022-01710-x
- Goldberg, D. (1991). What every computer scientist should know about floating-point arithmetic. ACM Computing Surveys, 23(1), 5–48. doi:10.1145/103162.103163

## Practice exercise

### Task

Have the assistant write and test a function that turns the irregular daily sea-ice record into monthly means. You learn whether its tests cover real edge cases – alternate-day sampling, the 1987–88 gap, the units row – or only the easy path.

### Prompt

```text
I am writing Python code for a research data pipeline. Attached is the NSIDC daily Arctic sea-ice extent CSV: the second line is a units row, values were recorded every other day until mid-1987, and there is a gap around December 1987 and January 1988. 1) Write a documented function monthly_extent(df, min_days) that returns, for each month, the mean extent, the number of daily values used and a flag when there are fewer than min_days values, in which case the mean is missing. 2) Write pytest unit tests covering a normal month, a month with alternate-day data, a month inside the gap, an empty input and a floating-point comparison with a tolerance. 3) Run the tests; if pytest is not available, run the same checks as plain assert statements and say so. Then run the function on the file with min_days = 10 and show the results for 1987 and 1988. If the intended behaviour is unclear, ask rather than assume.
```

### Check

December 1987 has only 2 daily values and January 1988 has 19, so December must be flagged and its mean missing. Months before August 1987 should show about 15 values. Recompute one monthly mean in Excel. Plain asserts instead of pytest are fine, as long as a wrong result would make a test fail.

## Own material

### Bring

50–150 lines of your own non-confidential code, without passwords, API keys or data, or a short description of a small model you want to build.

### Steps

1. Paste the starter prompt with your code, naming the language and purpose.
2. Read the explanation and check it matches what you intended the code to do.
3. Ask for unit tests for one function if they were not included.
4. Run the tests in your own environment, or ask the assistant to run them if it can run Python; if pytest is not available there, ask for plain assert statements.
5. Run one suggested plausibility check, for example a case whose answer you know.

### Prompt

```text
I am a researcher writing [language] code for [purpose, e.g. an agent-based simulation of X]. Below is part of my own code. Please 1) explain what it does in plain language, 2) list possible bugs, edge cases and numerical issues, 3) suggest a refactored version with clear names and docstrings that keeps the behaviour the same, and 4) write unit tests in [pytest or testthat] covering normal and edge cases, and 5) suggest checks of the numerical results: a case with a known analytical solution or benchmark, consistent units, conserved quantities and plausible value ranges. If you are unsure about the intended behaviour, ask rather than assume. Code: [paste code]
```

### Check

The tests run, the refactored version gives the same output as your original on the same input, and you can reproduce each bug it reports. For a case with a known answer, the code reproduces it.

## Technology

Paste code into your AI assistant; if it can run Python, it can run the tests itself. For whole projects, use a coding assistant in your editor (e.g. GitHub Copilot, Claude Code) that reads your repository. Never paste keys, passwords or confidential data.

## Levels

### Chat

Run the starter prompt with the sea-ice CSV attached. Then, in the same chat, ask the assistant to add a test that would fail if the December 1987 flag were missing, and run it (or run it yourself).

### Project / Notebook

Add the sea-ice file (D6; save it as .xlsx or .txt if your tool does not accept CSV) with your function and tests saved as .txt and a short design note on the intended behaviour. Ask whether the tests cover every rule in the design note. Depending on your tool, the project or notebook may not run code, but over time it keeps the record of why the code behaves as it does.

### Custom assistant

Create a configured assistant (e.g. a Copilot agent, custom GPT, Gemini Gem or Claude project). In its standing instructions, set your language and rules: docstrings, unit tests for normal and edge cases (plain asserts if pytest is missing), a check against a known result or benchmark, units and value ranges stated, "ask when behaviour is unclear", and never include keys or passwords. Switch on code execution if your tool offers it, so it can run Python tests. Starter prompt: "Review this function and write tests for its edge cases." Reusable for each new module.

### Automation / own code

Connect GitHub (repositories) through its MCP server, so the assistant can read your repository, issues and pull requests and comment on changes – a configured assistant without connections only sees what you paste or upload. On GitHub itself: a GitHub Actions workflow runs your tests on every change, and an AI code reviewer can review your pull requests. Check data protection and approval with your university first.
