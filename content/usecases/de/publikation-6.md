---
id: publikation-6
phase: publikation
order: 6
title: Aufbau der Abschlussarbeit über Kapitel hinweg
risk: 2
mode: Co-create
potential: 3
capabilities: synthese; analyse
routes: chat; files
repos: ars-paper
data: B2; C3
practice_data: B2; C3
---

Den roten Faden von den Forschungsfragen bis zu den Schlussfolgerungen über Kapitel hinweg prüfen; Lücken, Überschneidungen und Wiederholungen erkennen.

## Problem

Kapitel, die über mehrere Jahre entstanden sind, driften auseinander – eine Forschungsfrage bleibt unbeantwortet, Ergebnisse wiederholen sich, und der rote Faden von der Frage zum Beitrag, nach dem Prüfende suchen, geht verloren.

## Ergebnis

Eine Rückverfolgbarkeitsmatrix jeder Forschungsfrage über die Kapitel hinweg, in der Lücken, Überschneidungen und Wiederholungen markiert und zitiert sind – eine Grundlage, die Sie an den vollständigen Kapiteln prüfen und mit Ihrer Betreuungsperson besprechen.

## Vorgehen

1. Jedes Kapitel selbst in drei bis fünf Sätzen zusammenfassen
2. Eine Rückverfolgbarkeitsmatrix Forschungsfrage mal Kapitel anfordern
3. Lücken und Überschneidungen mit Zitaten aus Ihren Zusammenfassungen markieren lassen
4. Prüfen, ob die Schlussfolgerung jede Frage beantwortet und den Beitrag benennt
5. Markierte Probleme in den vollständigen Kapiteln selbst verifizieren

## Konzepte

### Roter Faden (Golden Thread)

Die nachvollziehbare Linie vom Forschungsproblem und den Forschungsfragen über Literatur, Methodik und Ergebnisse bis zu den Schlussfolgerungen und dem Beitrag. Prüfende kontrollieren, dass jede Frage gestellt, bearbeitet und beantwortet wird und nichts Wichtiges aus dem Nichts auftaucht.

### Doctorateness

Trafford und Leshems Bündel miteinander verknüpfter Merkmale, nach denen Prüfende suchen – darunter eine benannte Forschungslücke, explizite Forschungsfragen, ein konzeptioneller Rahmen, eine angemessene Methodik, konzeptionelle Schlussfolgerungen und ein Beitrag zum Wissen –, beurteilt danach, wie gut sie zusammenhängen.

### Rückverfolgbarkeitsmatrix (Traceability Matrix)

Eine Tabelle mit Forschungsfragen als Zeilen und Kapiteln (oder Abschnitten) als Spalten, die zeigt, wo jede Frage eingeführt, bearbeitet, beantwortet und diskutiert wird. Aus dem Requirements Engineering übernommen; leere Zellen zeigen Lücken, wiederholte Zellen Überschneidungen.

### Kumulative Dissertation (Thesis by Publication)

Eine Abschlussarbeit, die aus Artikeln sowie einer integrierenden Einleitung und Diskussion besteht. Die verbindenden Kapitel müssen zeigen, wie getrennt veröffentlichte Studien gemeinsame Forschungsfragen beantworten und sich zu einem Beitrag summieren.

## Literatur

- Trafford, V., & Leshem, S. (2009). Doctorateness as a threshold concept. Innovations in Education and Teaching International, 46(3), 305–316. doi:10.1080/14703290903069027
- Mullins, G., & Kiley, M. (2002). 'It's a PhD, not a Nobel Prize': How experienced examiners assess research theses. Studies in Higher Education, 27(4), 369–386. doi:10.1080/0307507022000011507

## Übung

### Aufgabe

Behandeln Sie die Artikel von Christidis et al. (2020) und Christidis et al. (2023) als zwei Kapitel einer kumulativen Dissertation und testen Sie drei vorgegebene Forschungsfragen daran. Sie erfahren, ob der Assistent eine Frage erkennt, die nur ein Kapitel beantwortet.

### Prompt

```text
Angehängt sind zwei PDFs von Christidis und Kolleginnen und Kollegen: der Artikel zu 30 bis 40 °C in Großbritannien (2020) und der Artikel zu 50 °C im Mittelmeerraum (2023). Behandeln Sie sie als Kapitel 2 und 3 einer kumulativen Dissertation. Die Forschungsfragen lauten: FF1 Wie hat der menschliche Einfluss die Wahrscheinlichkeit extremer täglicher Höchsttemperaturen an bestimmten Orten verändert? FF2 Wie wird sich diese Wahrscheinlichkeit bis 2100 unter verschiedenen Emissionspfaden verändern? FF3 Was bedeuten diese Veränderungen für hitzebedingte Sterblichkeit? Fassen Sie zuerst jedes Kapitel in fünf Sätzen zusammen. Erstellen Sie dann eine Tabelle, eine Zeile je Forschungsfrage, die zeigt, wo jedes Kapitel sie einführt, mit Methoden bearbeitet und beantwortet. Listen Sie Lücken, Überschneidungen und Wiederholungen auf und zitieren Sie zu jedem Punkt den Satz, auf dem er beruht. Wenn die Artikel nicht genügend Informationen liefern, sagen Sie das.
```

### Prüfung

Beide Kapitel behandeln FF1. FF2 wird nur 2020 vollständig behandelt, das zwei Pfade vergleicht (RCP 4.5 und RCP 8.5); 2023 verwendet ein mittleres Szenario (SSP2-4.5), der Assistent sollte es also als teilweise bewerten. Nur das Abstract von 2023 berichtet ein sterblichkeitsbezogenes Ergebnis (1–2 zusätzliche Monate mit überschüssigen Hitzetoten bis 2100), FF3 wird also nur in einem Kapitel beantwortet.

## Mit eigenem Material

### Mitbringen

Ihre Forschungsfragen und eine Kapitelgliederung mit einer kurzen, von Ihnen verfassten Zusammenfassung (drei bis fünf Sätze) jedes Kapitels.

### Schritte

1. Fügen Sie Ihre Forschungsfragen und die Kapitelzusammenfassungen in einer Nachricht ein.
2. Bitten Sie um eine Tabelle, die jede Forschungsfrage den Kapiteln zuordnet.
3. Bitten Sie den Assistenten, Lücken, Überschneidungen und Wiederholungen zu markieren und dabei Ihre Zusammenfassungen zu zitieren.
4. Prüfen Sie zwei markierte Probleme an Ihren tatsächlichen Kapiteln.

### Prompt

```text
Ich bin Promovierende bzw. Promovierender im Fach [Disziplin] und prüfe den roten Faden meiner Abschlussarbeit. Meine Forschungsfragen lauten: [Forschungsfragen einfügen]. Unten stehen kurze Zusammenfassungen jedes Kapitels: [Zusammenfassungen einfügen]. Erstellen Sie eine Tabelle mit einer Zeile je Forschungsfrage, die zeigt, wo sie eingeführt, mit Methoden bearbeitet, mit Ergebnissen beantwortet und in der Schlussfolgerung diskutiert wird. Listen Sie dann Lücken (eine Frage, die nicht beantwortet wird), Überschneidungen zwischen Kapiteln und wahrscheinliche Wiederholungen auf. Zitieren Sie zu jedem Punkt den Satz aus meinen Zusammenfassungen, auf dem er beruht. Wenn die Zusammenfassungen nicht genügend Informationen für ein Urteil liefern, sagen Sie das.
```

### Prüfung

Wählen Sie zwei markierte Lücken oder Überschneidungen und bestätigen Sie sie in Ihren vollständigen Kapiteln; die Zuordnung sollte dem entsprechen, was Sie darüber wissen, wo jede Frage beantwortet wird.

### Grenze

Der Assistent überspringt bei langen Dateien möglicherweise Teile, daher prüft dies den roten Faden an Ihrer Gliederung und Ihren Zusammenfassungen, nicht am vollständigen Text der Abschlussarbeit.

## Technik

Fügen Sie die Forschungsfragen und Kapitelzusammenfassungen in Ihren KI-Assistenten ein oder laden Sie ein Zusammenfassungsdokument hoch; Zusammenfassungen halten die vollständige Abschlussarbeit aus dem Chat heraus und machen die Prüfung schnell wiederholbar.

## Stufen

### Chat

Führen Sie den Startprompt mit den zwei angehängten Christidis-PDFs aus. Fragen Sie danach im selben Chat, wie FF3 eingegrenzt werden könnte oder wo in den Kapiteln sie noch beantwortet werden könnte.

### Projekt / Notebook

Fügen Sie Ihre Forschungsfragen, Kapitelzusammenfassungen und, sobald sie fertig sind, die Kapitel selbst hinzu; für die Übung die beiden Christidis-Artikel (B2, C3) und eine Word-Datei mit FF1–FF3. Fordern Sie die Tabelle Frage mal Kapitel nach jedem neuen Kapitel erneut an. Das Projekt bzw. Notebook hält die Abschlussarbeit über Monate, sodass die Prüfung des roten Fadens mitwächst.

### Eigener Assistent

Erstellen Sie einen konfigurierten Assistenten (z. B. einen Copilot-Agenten, einen Custom GPT, ein Gemini Gem oder ein Claude-Projekt). Fügen Sie Ihre Forschungsfragen und die Zuordnungsregeln in seine dauerhaften Anweisungen ein: eine Zeile je Frage, die zeigt, wo sie eingeführt, mit Methoden bearbeitet, beantwortet und diskutiert wird; Lücken, Überschneidungen und Wiederholungen markieren und den Satz hinter jedem Punkt zitieren; sagen, wenn Informationen fehlen. Fügen Sie die Gliederung der Abschlussarbeit als Wissensdateien hinzu (unterstützt Ihr Werkzeug sie nicht, hängen Sie sie im Chat an). Startprompt: „Prüfen Sie diese Kapitelzusammenfassung gegen meine Forschungsfragen.“ Wiederverwendbar jedes Mal, wenn sich ein Kapitel ändert.
