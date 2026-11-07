---
id: erhebung-3
phase: erhebung
order: 3
title: Adaptive Befragung
risk: 3
mode: Delegate
potential: 2
capabilities: generierung; agentisch
routes: chat
---

Dialogische Interviews oder Befragungen, die dynamisch Nachfragen stellen – mit klaren ethischen Leitplanken.

## Problem

Feste Fragebögen können vage oder überraschende Antworten nicht weiterverfolgen, während Live-Interviews nicht skalieren – Sie tauschen also Tiefe gegen Reichweite, und KI-Nachfragen laufen Gefahr, die Befragten zu lenken.

## Ergebnis

Ein pilotierter Interviewablauf, in dem jede Nachfrage samt Begründung protokolliert ist, sodass Sie beurteilen können, wo die KI lenkt, drängt oder abschweift – vor der Ethikprüfung und bevor eine echte befragte Person ihn sieht.

## Vorgehen

1. Legen Sie die Kernfragen und ausdrückliche Regeln für neutrale Nachfragen fest
2. Antworten Sie als erfundene befragte Person, auch mit vagen Antworten
3. Klassifizieren Sie jede protokollierte Nachfrage als neutral oder lenkend
4. Markieren Sie drängende oder themenfremde Fragen und verschärfen Sie die Regeln
5. Holen Sie die Ethikfreigabe ein und legen Sie die KI als Interviewende offen

## Konzepte

### Neutrales Nachfragen (Probing)

Nachfragen, die um Klärung oder Vertiefung bitten, ohne eine Antwort nahezulegen, etwa „Können Sie mir mehr dazu sagen?“ oder „Was meinen Sie mit …?“. Lenkende Nachfragen („War das nicht frustrierend?“) bringen Verzerrung durch die interviewende Person hinein; protokollieren Sie jede Nachfrage, um sie zu prüfen.

### Standardisiertes versus dialogisches Interviewen

Beim standardisierten Interview werden die Items wörtlich vorgelesen und nur neutrale Nachfragen sind erlaubt; beim dialogischen Interview darf die interviewende Person die Bedeutung klären. Schober und Conrad (1997) fanden, dass Klärung die Genauigkeit bei komplizierten Fällen verbesserte, die Interviews aber verlängerte – KI-Nachfragen erben diesen Zielkonflikt.

### Interviewereffekte und soziale Erwünschtheit

Befragte passen ihre Antworten an die wahrgenommene interviewende Person an und geben bei sensiblen Themen sozial erwünschte Antworten. Eine KI als Interviewende verändert diese Effekte, beseitigt sie aber nicht; pilotieren Sie sensible Formulierungen mit besonderer Sorgfalt.

### Informierte Einwilligung bei KI-vermittelter Datenerhebung

Teilnehmende müssen wissen, dass sie mit einer KI sprechen, was mit ihren Antworten geschieht (Speicherung, Ort der Verarbeitung, Dritte) und dass sie jederzeit abbrechen können. Das braucht eine Ethikfreigabe und eine freigegebene Plattform, keinen allgemeinen Chat.

## Literatur

- Schober, M. F., & Conrad, F. G. (1997). Does conversational interviewing reduce survey measurement error? Public Opinion Quarterly, 61(4), 576–602. doi:10.1086/297818
- Fowler, F. J., & Mangione, T. W. (1990). Standardized survey interviewing: Minimizing interviewer-related error. Sage.
- Groves, R. M., Fowler, F. J., Couper, M. P., Lepkowski, J. M., Singer, E., & Tourangeau, R. (2009). Survey methodology (2nd ed.). Wiley.

## Mit eigenem Material

### Mitbringen

Drei Entwürfe von Interview- oder Befragungsfragen zu einem nicht sensiblen Thema aus Ihrer Forschung.

### Schritte

1. Fügen Sie den Startprompt mit Ihren drei Kernfragen ein.
2. Antworten Sie als erfundene befragte Person, darunter eine vage und eine themenfremde Antwort.
3. Lesen Sie nach der letzten Frage die Liste der Nachfragen und Begründungen des Assistenten.
4. Prüfen Sie jede Nachfrage auf lenkende Formulierungen, Druck oder Abschweifen vom Thema.

### Prompt

```text
Ich entwerfe ein adaptives Interview zu [Thema] für [Population] und möchte es pilotieren. Handeln Sie als interviewende Person. Stellen Sie meine Kernfragen nacheinander: [F1], [F2], [F3]. Stellen Sie nach jeder Antwort höchstens eine neutrale Nachfrage, um sie zu klären oder zu vertiefen. Regeln: keine lenkenden Fragen, keine Fragen zu Gesundheit, Finanzen oder anderen sensiblen Themen, akzeptieren Sie „Das möchte ich lieber nicht sagen“, ohne nachzudrängen, und bleiben Sie beim Thema. Ich antworte als erfundene befragte Person. Listen Sie nach der letzten Frage jede Nachfrage auf, die Sie gestellt haben, und Ihre Begründung dafür.
```

### Prüfung

Jede Nachfrage ist neutral, knüpft an die gerade gegebene Antwort an und bleibt in Ihrem Thema; eine echte Studie braucht Ethikfreigabe, informierte Einwilligung und eine freigegebene Plattform, bevor irgendeine teilnehmende Person mit einer KI als Interviewender spricht.

### Grenze

Ein Chat kann keine Befragung mit Teilnehmenden durchführen; dies testet das Entwerfen und Pilotieren adaptiver Nachfragen, wobei Sie eine erfundene befragte Person spielen.

## Technik

Führen Sie den Pilot in einem Chat durch, mit Ihrem KI-Assistenten als Interviewer und Ihnen als erfundener befragter Person. Ein echter Einsatz braucht eine freigegebene Plattform, eine Ethikfreigabe und eine informierte Einwilligung, die die KI als Interviewende offenlegt – keinen allgemeinen Chat.

## Stufen

### Chat

Führen Sie den Startprompt aus und antworten Sie als erfundene befragte Person. Bitten Sie im selben Chat darum, jede Nachfrage, die Sie als lenkend oder themenfremd beurteilt haben, umzuschreiben und die verletzte Regel zu nennen.

### Projekt / Notebook

Fügen Sie Ihren Interviewleitfaden, die Auflagen Ihrer Ethikfreigabe, Ihre Regeln für Nachfragen als kurzes Word-Dokument und das Protokoll jedes Pilotdurchlaufs hinzu. Fragen Sie, wo Nachfragen über die Piloten hinweg eine Regel verletzt haben. Es gehen nur erfundene Pilotantworten hinein, nie Daten echter Teilnehmender, und Sie beurteilen jede Nachfrage selbst.

### Eigener Assistent

Nennen Sie ihn „Interview-Pilot“. Anweisungen: Ihre Kernfragen in der Reihenfolge, höchstens eine neutrale Nachfrage je Antwort, keine lenkenden oder sensiblen Fragen, „Das möchte ich lieber nicht sagen“ akzeptieren und am Ende ein Protokoll jeder Nachfrage mit Begründung. Nutzen Sie ihn nur zum Pilotieren mit erfundenen Befragten, nie mit Teilnehmenden, und prüfen Sie jedes Protokoll selbst. Startprompt: „Starten Sie das Pilotinterview“.
