---
id: transfer-0
phase: transfer
order: 0
title: Zielgruppengerechte Formate
risk: 1
mode: Co-create
potential: 3
capabilities: generierung; synthese
routes: files; external
tools: Gemini Notebook (formerly NotebookLM); Napkin AI
data: B2
practice_data: B2
---

Leiten Sie aus einer Arbeit Laienzusammenfassungen, Policy Briefs, Blogbeiträge oder Social-Media-Beiträge ab.

## Problem

Für jede Arbeit eine Laienzusammenfassung, einen Policy Brief und einen Social-Media-Beitrag zu schreiben, kostet Zeit, und beim Vereinfachen droht Spin – kausale, allgemeine oder sichere Aussagen, die die Arbeit nicht trifft.

## Ergebnis

Drei Erstentwürfe für verschiedene Zielgruppen, mit exakt erhaltenen Zahlen, Bedingungen und Unsicherheiten und einer Liste jeder Vereinfachung – schnellere Öffentlichkeitsarbeit, die Sie Aussage für Aussage gegen die Arbeit prüfen.

## Vorgehen

1. Laden Sie die Arbeit hoch und nennen Sie eine Zielgruppe
2. Bitten Sie um eine Laienzusammenfassung und eine Gliederung für einen Policy Brief
3. Leiten Sie aus der Zusammenfassung einen kurzen Social-Media-Beitrag ab
4. Prüfen Sie Zahlen, Bedingungen und Unsicherheitsbegriffe gegen die Arbeit

## Konzepte

### Laienverständliche Zusammenfassung (Plain-language summary)

Ein kurzer, fachwortfreier Bericht über Frage, Vorgehen, Hauptbefund und Bedeutung, für Nichtfachleute geschrieben. Behalten Sie die Unsicherheit und die Bedingungen der Arbeit; erklären Sie einen Fachbegriff, statt ihn zu streichen.

### Spin und Übertreibung (Spin and exaggeration)

Berichterstattung, die Befunde stärker, kausaler oder allgemeiner erscheinen lässt, als die Studie stützt. Sumner et al. führten viel Übertreibung in Gesundheitsnachrichten auf Pressemitteilungen zurück; prüfen Sie Aussagestärke, kausale Formulierungen und Verallgemeinerung.

### Kalibrierte Unsicherheitssprache (Calibrated uncertainty language)

Der IPCC verwendet feste Wahrscheinlichkeitsbegriffe – zum Beispiel „likely“ für 66–100 % und „very likely“ für 90–100 % Wahrscheinlichkeit – sowie Konfidenzstufen. Ein Vorbild dafür, Unsicherheit beim Vereinfachen in jedem Fach ausdrücklich zu halten.

### Aufbau eines Policy Briefs

Ein bis zwei Seiten, Schlussfolgerungen zuerst (umgekehrte Pyramide): das Problem, zentrale Befunde, Folgerungen und einige konkrete, machbare Empfehlungen, mit einer Quelle für jeden Befund.

## Literatur

- Sumner, P., Vivian-Griffiths, S., Boivin, J., Williams, A., Venetis, C. A., Davies, A., Ogden, J., Whelan, L., Hughes, B., Dalton, B., Boy, F., & Chambers, C. D. (2014). The association between exaggeration in health related science news and academic press releases: Retrospective observational study. BMJ, 349, g7015. doi:10.1136/bmj.g7015
- Mastrandrea, M. D., Field, C. B., Stocker, T. F., Edenhofer, O., Ebi, K. L., Frame, D. J., Held, H., Kriegler, E., Mach, K. J., Matschoss, P. R., Plattner, G.-K., Yohe, G. W., & Zwiers, F. W. (2010). Guidance note for lead authors of the IPCC Fifth Assessment Report on consistent treatment of uncertainties. Intergovernmental Panel on Climate Change.

## Übung

### Aufgabe

Erstellen Sie aus der Arbeit von Christidis et al. (2020) für Verwaltungsmitarbeitende einer Kommune eine Laienzusammenfassung, eine Gliederung für einen Policy Brief und einen Social-Media-Beitrag. Sie lernen, ob der Assistent beim Vereinfachen Bedingungen wie „without mitigation“ und die Bedeutung einer „return time“ erhält.

### Prompt

```text
Angehängt ist das PDF von Christidis et al. (2020) zu Temperaturen über 30 bis 40 °C im Vereinigten Königreich. Schreibe für Verwaltungsmitarbeitende einer Kommune, die für die Hitzeanpassung zuständig sind: 1) eine Laienzusammenfassung von etwa 150 Wörtern in klarer, einfacher Sprache, die „return time“ in einem Satz erklärt; 2) eine Gliederung für einen einseitigen Policy Brief mit Problem, zentralen Befunden und drei praktischen Empfehlungen; 3) einen Social-Media-Beitrag von bis zu 60 Wörtern. Verwende nur Befunde, die in der Arbeit stehen, halte Zahlen und ihre Bedingungen exakt (zum Beispiel Emissionsszenarien), behalte Unsicherheitswörter wie „likely“ bei und lasse die Ergebnisse nicht stärker oder allgemeiner klingen, als die Arbeit sie darstellt. Liste jede Stelle auf, an der du vereinfacht hast.
```

### Prüfung

Vergleichen Sie mit dem Abstract: Sommer mit 40-°C-Tagen haben derzeit eine „return time“ von 100–300 Jahren, die bis 2100 nur ohne Minderung der Emissionen auf 3.5 Jahre sinkt. Formulierungen wie „ab jetzt alle paar Jahre“ sind Spin.

## Mit eigenem Material

### Mitbringen

Eine Ihrer veröffentlichten Open-Access-Arbeiten oder eine Open-Access-Arbeit aus Ihrem Fach, als PDF oder als Abstract mit zentralen Befunden.

### Schritte

1. Hängen Sie die Arbeit an und nennen Sie Ihre Zielgruppe.
2. Bitten Sie um eine Laienzusammenfassung von 150 Wörtern und eine Gliederung für einen einseitigen Policy Brief.
3. Bitten Sie um einen kurzen Social-Media-Beitrag auf Basis der Laienzusammenfassung.
4. Vergleichen Sie jede Zahl und Aussage mit der Arbeit.

### Prompt

```text
Ich bin Forschende/Forschender in [Fach]. Angehängt ist meine Arbeit [Titel]. Schreibe für [Zielgruppe, z. B. Verwaltungsmitarbeitende einer Kommune oder die breite Öffentlichkeit]: 1) eine Laienzusammenfassung von etwa 150 Wörtern in klarer Sprache, ohne Fachjargon; 2) eine Gliederung für einen einseitigen Policy Brief mit Problem, zentralen Befunden und drei praktischen Empfehlungen; 3) einen Social-Media-Beitrag von bis zu 60 Wörtern. Verwende nur Befunde, die in der Arbeit stehen, halte Zahlen exakt und lasse die Ergebnisse nicht stärker oder allgemeiner klingen, als die Arbeit sie darstellt. Nenne jede Stelle, an der du vereinfachen musstest.
```

### Prüfung

Jede Zahl und Aussage in den Ergebnissen lässt sich in der Arbeit finden, und kein Befund wird stärker oder breiter formuliert als im Original.

## Technik

Laden Sie das Open-Access-PDF in Ihren KI-Assistenten hoch und bitten Sie in einem Zug um alle drei Formate; Gemini Notebook (früher NotebookLM) kann aus derselben Arbeit eine Audio-Zusammenfassung ergänzen.

## Stufen

### Chat

Führen Sie den Startprompt mit angehängter Arbeit aus. Bitten Sie den Assistenten im selben Chat, seine drei Entwürfe gegen die Arbeit zu prüfen und jeden Satz aufzulisten, der stärker, allgemeiner oder sicherer klingt als das Original.

### Projekt / Notebook

Fügen Sie B2 als Referenz hinzu sowie ein kurzes Regeldokument mit Ihren Zielgruppen und den Spin-Regeln (Zahlen, Bedingungen und Unsicherheitswörter beibehalten). Bitten Sie um jedes Format und behalten Sie die freigegebenen Fassungen als gespeicherte Notizen. Ergänzen Sie für Ihre eigene Arbeit jede neue Arbeit und Ihre früheren freigegebenen Zusammenfassungen, damit neue Formate zu dem passen, was Sie schon veröffentlicht haben.

### Eigener Assistent

Anweisungen: die drei Formate mit Wortgrenzen, Zahlen und Bedingungen exakt, Unsicherheitswörter beibehalten, eine Liste jeder Vereinfachung, nie eine Aussage, die die Arbeit nicht trifft. Kein Wissen nötig – hängen Sie jede Arbeit im Chat an. Startprompts: „Laienzusammenfassung, Brief-Gliederung und Beitrag für Verwaltungsmitarbeitende“ und „Prüfe diesen Entwurf gegen die Arbeit auf Spin“. Für jede neue Arbeit wiederverwendbar.
