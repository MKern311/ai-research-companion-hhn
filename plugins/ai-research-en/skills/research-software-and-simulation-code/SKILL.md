---
name: research-software-and-simulation-code
description: "Write, refactor, test and document code for models, simulations or lab data pipelines – and check numerical results against known solutions, benchmarks and physical plausibility (units, conserved quantities, value ranges). Use when the user works on: Research software & simulation code."
---

# Research software & simulation code

> From the knowledge base “AI in the Research Process” (Heilbronn University of Applied Sciences) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/analyse-6

## Goal

Write, refactor, test and document code for models, simulations or lab data pipelines – and check numerical results against known solutions, benchmarks and physical plausibility (units, conserved quantities, value ranges).

Explained, refactored code with docstrings and unit tests that pin down its behaviour, including edge cases, and checks of the numbers against known solutions and physical plausibility – fewer silent errors and software you can deposit and cite.

## When to use

Research code grows without tests or documentation; months later you cannot tell whether a change altered a result, and others cannot run, reuse or cite your code.

## Workflow with the user

Guide the user through these steps. Where a step says “ask the assistant”, that is you.

1. Paste the starter prompt with your code, naming the language and purpose.
2. Read the explanation and check it matches what you intended the code to do.
3. Ask for unit tests for one function if they were not included.
4. Run the tests in your own environment, or ask the assistant to run them if it can run Python; if pytest is not available there, ask for plain assert statements.
5. Run one suggested plausibility check, for example a case whose answer you know.

## Working rules

- Never invent sources, quotes, numbers or DOIs; say when you are not sure.
- Mark clearly what comes from the user’s material and what is your own suggestion.
- Stop and ask when the material is missing or ambiguous.

## Typical request

```text
I am a researcher writing [language] code for [purpose, e.g. an agent-based simulation of X]. Below is part of my own code. Please 1) explain what it does in plain language, 2) list possible bugs, edge cases and numerical issues, 3) suggest a refactored version with clear names and docstrings that keeps the behaviour the same, and 4) write unit tests in [pytest or testthat] covering normal and edge cases, and 5) suggest checks of the numerical results: a case with a known analytical solution or benchmark, consistent units, conserved quantities and plausible value ranges. If you are unsure about the intended behaviour, ask rather than assume. Code: [paste code]
```

## Quality check

The tests run, the refactored version gives the same output as your original on the same input, and you can reproduce each bug it reports. For a case with a known answer, the code reproduces it.

## Limits

- Risk: Your own unpublished drafts, reviews or third-party content.

## Key concepts

- **Unit and regression tests** – Unit tests check that a small function returns the expected output for given inputs, including edge cases such as empty, missing or extreme values; regression tests check that results do not change after refactoring. Tools: pytest, testthat; where no framework is available, plain assert statements do the same job for a few checks.
- **Good enough practices in scientific computing** – Wilson et al. (2017): decompose code into functions, eliminate duplication, use meaningful names, make dependencies explicit, provide a small test dataset, track changes with version control and deposit code in a DOI-issuing repository.
- **FAIR principles for research software (FAIR4RS)** – FAIR adapted to code (Barker et al., 2022): software is findable through a persistent identifier and metadata, accessible, interoperable through standard formats and interfaces, and reusable through a licence, documentation and provenance.
- **Floating-point arithmetic** – Computers store most decimals approximately, so results can differ in the last digits between machines or operation orders (Goldberg, 1991). Compare floats in tests with a tolerance, for example pytest.approx, never with exact equality.

## Key references

- Wilson, G., Bryan, J., Cranston, K., Kitzes, J., Nederbragt, L., & Teal, T. K. (2017). Good enough practices in scientific computing. PLoS Computational Biology, 13(6), e1005510. https://doi.org/10.1371/journal.pcbi.1005510
- Barker, M., Chue Hong, N. P., Katz, D. S., Lamprecht, A.-L., Martinez-Ortiz, C., Psomopoulos, F., Harrow, J., Castro, L. J., Gruenpeter, M., Martinez, P. A., & Honeyman, T. (2022). Introducing the FAIR Principles for research software. Scientific Data, 9, 622. https://doi.org/10.1038/s41597-022-01710-x
- Goldberg, D. (1991). What every computer scientist should know about floating-point arithmetic. ACM Computing Surveys, 23(1), 5–48. https://doi.org/10.1145/103162.103163

## Tools that help

GitHub (repositories) · GitHub Copilot
