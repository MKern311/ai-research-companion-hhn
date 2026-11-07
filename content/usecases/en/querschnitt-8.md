---
id: querschnitt-8
phase: querschnitt
order: 8
title: Staying up to date
risk: 1
mode: Assist
potential: 2
capabilities: recherche; synthese
routes: chat; files; connected
connect: OpenAlex; Semantic Scholar; Litmaps
tools: Litmaps; Semantic Scholar; Google Scholar
data: AB
practice_data: AB
---

Sort new publications from alerts and journal tables of contents against your research question each week and decide what to read.

## Problem

Alerts and tables of contents bring dozens of new titles each week; skimming them all takes hours, and relevant papers are lost in the noise.

## Result

A weekly triage into must-read, maybe and skip against explicit relevance criteria, with reasons and suggested alert terms – less time sorting, a clear reading list and better-tuned alerts.

## Steps

1. Write your question and three relevance criteria
2. Paste the week's titles and abstracts
3. Ask for a rating and reason per paper
4. Spot-check skipped papers for relevant ones missed
5. Open the must-reads and make the final call

## Concepts

### Relevance (eligibility) criteria

Explicit inclusion and exclusion rules – population or object, method, outcome, setting, date – as used in systematic screening. Writing them down makes triage consistent and lets you check why a paper received its rating.

### Precision and recall in screening

Precision is the share of papers rated must-read that are truly relevant; recall is the share of truly relevant papers that were caught. When staying current, a missed key paper usually costs more than an extra abstract, so favour recall.

### Forward and backward snowballing

Following the references of key papers (backward) and the papers that cite them (forward), as systematised by Wohlin (2014). Citation alerts on seed papers catch relevant work that keyword alerts miss.

### Living review

A review that is continually updated as new evidence appears (Elliott et al., 2014). A weekly triage log is a personal, informal version that keeps your literature chapter current until submission.

## References

- Wohlin, C. (2014). Guidelines for snowballing in systematic literature studies and a replication in software engineering. In Proceedings of the 18th International Conference on Evaluation and Assessment in Software Engineering (Article 38). ACM. doi:10.1145/2601248.2601268
- Elliott, J. H., Turner, T., Clavisi, O., Thomas, J., Higgins, J. P. T., Mavergames, C., & Gruen, R. L. (2014). Living systematic reviews: An emerging opportunity to narrow the evidence-practice gap. PLoS Medicine, 11(2), e1001603. doi:10.1371/journal.pmed.1001603

## Practice exercise

### Task

Treat the twelve practice abstracts as this week's alert and triage them against a narrow question. You learn whether the assistant applies your criteria consistently, reasons only from titles and abstracts, and adds no papers that are not in the file.

### Prompt

```text
I am a postgraduate researcher. My research question is: how has human influence changed the likelihood of extreme heat in the UK and Western Europe? Relevance criteria: must-read if a paper estimates changes in hot extremes for the UK or Western Europe; maybe if it provides data or methods I could apply there; skip otherwise. The attached text file holds the titles and abstracts of twelve papers; treat them as this week's alert. Using only each title and abstract, sort the papers into must-read, maybe and skip, with one line on why, naming the criterion used. For the must-reads, say whether each supports, challenges or extends my question. Finish with five search terms worth adding to my alerts. Do not add papers that are not in the file.
```

### Check

Rate the twelve yourself from the abstracts first. Christidis et al. (2020) and Vautard et al. (2023) meet the must-read criterion. Perkins-Kirkpatrick & Lewis (2020) and Christidis et al. (2023) are borderline, as their abstracts do not name the UK or Western Europe – discuss them. The output must list exactly the twelve papers in the file.

## Own material

### Bring

A list of 10 to 20 new titles (with abstracts if possible) from a recent alert, for example from Google Scholar, a journal's table of contents or a database alert, and your research question.

### Steps

1. Paste your research question and the new titles and abstracts.
2. Ask for a must-read, maybe and skip rating with a reason for each.
3. Ask how the must-reads relate to your work.
4. Open the must-reads and decide yourself what to read.

### Prompt

```text
I am a postgraduate researcher in [discipline]. My research question is: [question]. Below are new publications from this week's alerts. Sort them into must-read, maybe and skip, with one line on why, based only on the title and abstract given. For the must-reads, say in one sentence whether each supports, challenges or extends my work, or offers a method I could use. Finish with a short list of search terms worth adding to my alerts. Do not add papers that are not in the list.

[paste titles and abstracts]
```

### Check

For two papers you rated differently from the assistant, read the abstract again and decide who was right; nothing in the output is a paper you did not paste.

### Limit

The assistant rates on title and abstract only; set up the alerts themselves in the databases you use. Connecting a source such as OpenAlex via MCP, so that new work is searched directly, is a level 4 step – check data protection and approval with your university first.

## Technology

Paste titles and abstracts into your AI assistant or attach them as one text file. With OpenAlex or Semantic Scholar connected, which depends on your tool and your university's approval, the assistant can fetch new papers itself; Litmaps tracks new work from seed papers.

## Levels

### Chat

Run the starter prompt with the AB abstracts file attached. In the same chat, ask the assistant to list the skipped papers with the criterion each fails, so you can spot-check whether a relevant paper was missed.

### Project / Notebook

Add a criteria document (research question and the three relevance criteria), each week's alert as a Word or .txt file and your earlier must-read lists. Ask for the week's triage against the criteria and compare it with earlier weeks. You gain consistent ratings over time and a record of what you chose to read and why.

### Custom assistant

Instructions: your research question, the three relevance criteria, rate only from title and abstract, a one-line reason naming the criterion, supports, challenges or extends for must-reads, five alert terms, never add papers not in the input. Knowledge: optionally two or three key papers that define your topic. Starter prompt: "Triage this week's alert". Reusable every week.

### Automation / own code

Connect OpenAlex or Semantic Scholar through their remote MCP servers and add a weekly scheduled trigger, so the assistant fetches new papers for your alert terms and e-mails you the triage – a basic custom assistant cannot search databases or run on a schedule. On GitHub: a scheduled GitHub Actions workflow queries the OpenAlex API every week and opens an issue with the new papers, so GitHub notifies you. Check data protection and approval with your university first.
