---
id: erhebung-3
phase: erhebung
order: 3
title: Adaptive surveying
risk: 3
mode: Delegate
potential: 2
capabilities: generierung; agentisch
routes: chat
---

Conversational interviews or surveys that ask follow-up questions dynamically – with clear ethical guardrails.

## Problem

Fixed questionnaires cannot follow up vague or surprising answers, while live interviews do not scale – so you trade depth against reach, and AI follow-ups risk leading respondents.

## Result

A piloted interview flow with every follow-up and its reason logged, so you can judge where the AI leads, presses or drifts – before ethics review and before any real respondent sees it.

## Steps

1. Set core questions and explicit rules for neutral probes
2. Answer as an invented respondent, including vague replies
3. Classify each logged follow-up as neutral or leading
4. Flag pressing or off-topic questions and tighten the rules
5. Obtain ethics approval and disclose the AI interviewer

## Concepts

### Neutral probing

Follow-ups that ask for clarification or elaboration without suggesting an answer, such as 'Could you tell me more?' or 'What do you mean by …?'. Leading probes ('Wasn't that frustrating?') introduce interviewer bias; log each probe to audit it.

### Standardised versus conversational interviewing

Standardised interviewing reads items verbatim and allows only neutral probes; conversational interviewing lets the interviewer clarify meaning. Schober and Conrad (1997) found clarification improved accuracy for complicated cases but lengthened interviews – AI follow-ups inherit this trade-off.

### Interviewer effects and social desirability

Respondents adjust answers to the perceived interviewer and give socially desirable responses on sensitive topics. An AI interviewer changes these effects but does not remove them; pilot sensitive wording with particular care.

### Informed consent for AI-mediated data collection

Participants must know they are talking to an AI, what happens to their answers (storage, processing location, third parties) and that they can stop at any time. This needs ethics approval and an approved platform, not a general-purpose chat.

## References

- Schober, M. F., & Conrad, F. G. (1997). Does conversational interviewing reduce survey measurement error? Public Opinion Quarterly, 61(4), 576–602. doi:10.1086/297818
- Fowler, F. J., & Mangione, T. W. (1990). Standardized survey interviewing: Minimizing interviewer-related error. Sage.
- Groves, R. M., Fowler, F. J., Couper, M. P., Lepkowski, J. M., Singer, E., & Tourangeau, R. (2009). Survey methodology (2nd ed.). Wiley.

## Own material

### Bring

Three draft interview or survey questions on a non-sensitive topic from your research.

### Steps

1. Paste the starter prompt with your three core questions.
2. Answer as an invented respondent, including one vague and one off-topic answer.
3. After the last question, read the assistant's list of follow-ups and reasons.
4. Check each follow-up for leading wording, pressure or drift outside your topic.

### Prompt

```text
I am designing an adaptive interview on [topic] for [population] and want to pilot it. Act as the interviewer. Ask my core questions one at a time: [Q1], [Q2], [Q3]. After each answer, ask at most one neutral follow-up to clarify or deepen it. Rules: no leading questions, no questions about health, finances or other sensitive matters, accept 'I'd rather not say' without pushing, and stay within the topic. I will answer as an invented respondent. After the last question, list each follow-up you asked and your reason for it.
```

### Check

Each follow-up is neutral, tied to the answer just given and within your topic; a real study needs ethics approval, informed consent and an approved platform before any participant talks to an AI interviewer.

### Limit

A chat cannot run a survey with participants; this tests drafting and piloting adaptive follow-ups, with you playing an invented respondent.

## Technology

Run the pilot in a chat with your AI assistant as interviewer and you as an invented respondent. A real deployment needs an approved platform, ethics approval and informed consent that discloses the AI interviewer – not a general-purpose chat.

## Levels

### Chat

Run the starter prompt and answer as an invented respondent. In the same chat, ask it to rewrite every follow-up you judged leading or off-topic and to name the rule it broke.

### Project / Notebook

Add your interview guide, the conditions of your ethics approval, your follow-up rules as a short Word document and the log of each pilot run. Ask where follow-ups broke a rule across pilots. Only invented pilot answers go in, never real participants' data, and you judge every follow-up yourself.

### Custom assistant

Call it 'Interview pilot'. Instructions: your core questions in order, at most one neutral follow-up per answer, no leading or sensitive questions, accept 'I'd rather not say', and a log of every follow-up with its reason at the end. Use it only to pilot with invented respondents, never with participants, and review every log yourself. Starter prompt: 'Start the pilot interview'.
