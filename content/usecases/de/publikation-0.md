---
id: publikation-0
phase: publikation
order: 0
title: Aufbau und Argumentationslinie
risk: 2
mode: Co-create
potential: 3
capabilities: synthese; analyse
routes: chat; files; external
repos: ars-paper; kd-writing
data: B3
practice_data: B3
---

Den roten Faden prüfen, Lücken in der Argumentation aufdecken und den Aufbau an die Konventionen der Zeitschrift anpassen.

## Problem

Sie kennen Ihr Argument zu gut, um es von außen zu sehen – eine fehlende Begründung, eine unausgesprochene Einschränkung oder ein falsch platzierter Abschnitt fällt oft erst im Peer Review auf.

## Ergebnis

Eine Zusammenfassung in drei Sätzen, die Sie mit Ihrer Absicht abgleichen, eine Toulmin-Karte aus Behauptung, Belegen, Begründung und Einschränkungen mit markierten schwachen Gliedern und ein auf die Zeitschrift abgestimmter Aufbau.

## Vorgehen

1. Eine umgekehrte Gliederung schreiben: ein Satz, der die Kernaussage jedes Abschnitts benennt
2. Den Assistenten Ihr Argument als Toulmin-Elemente abbilden lassen
3. Prüfen, ob die Einleitung vom Feld über die Lücke zum Ziel führt
4. Die schwächste Begründung beheben, bevor Sie Formulierungen glätten
5. Den Aufbau mit den Autorenrichtlinien der Zeitschrift abgleichen

## Konzepte

### Toulmin-Modell der Argumentation (Toulmin Model)

Zerlegt ein Argument in Behauptung (Claim), Belege (Grounds), Begründung (Warrant: warum die Belege die Behauptung stützen), Stützung (Backing), Einschränkung (Qualifier: wie stark) und Gegenargument (Rebuttal: wann es nicht gälte). Nutzen Sie es, um Schritte zu finden, die Sie voraussetzen, aber nie aussprechen.

### CARS-Modell (Swales)

Create a Research Space: Einleitungen vollziehen typischerweise drei Schritte (Moves) – das Feld abstecken, eine Nische (Lücke oder Problem) herausarbeiten, die Nische besetzen (Ziel, Fragen, Beitrag). Nutzen Sie es, um zu prüfen, ob Ihre Einleitung zu Ihrer Forschungsfrage führt.

### IMRaD

Introduction, Methods, Results and Discussion – die vorherrschende Struktur empirischer Artikel über Fächergrenzen hinweg. Zeitschriften variieren sie (zusammengefasste Ergebnisse und Diskussion, Methoden am Ende), daher entscheiden die Autorenrichtlinien.

### Umgekehrte Gliederung (Reverse Outlining)

Schreiben Sie zu jedem Absatz oder Abschnitt einen Satz, der seine Kernaussage benennt, und lesen Sie dann nur diese Sätze der Reihe nach. Lücken, Sprünge und Wiederholungen werden sichtbar, bevor Sie den Text überarbeiten.

## Literatur

- Toulmin, S. E. (2003). The uses of argument (Updated ed.). Cambridge University Press.
- Swales, J. M. (1990). Genre analysis: English in academic and research settings. Cambridge University Press.

## Übung

### Aufgabe

Bilden Sie das Argument des Artikels von Vautard et al. (2023) als Toulmin-Struktur ab und finden Sie die CARS-Schritte in seiner Einleitung. Sie erfahren, ob der Assistent die vorsichtig formulierten alternativen Erklärungen der Autorinnen und Autoren beibehält oder zu einer einzigen sicheren Behauptung einebnet.

### Prompt

```text
Angehängt ist das PDF von Vautard et al. (2023) zu Hitzeextremen in Westeuropa. Behandeln Sie es wie einen Entwurf, den ich vor der Einreichung testen möchte. 1) Fassen Sie das zentrale Argument in drei Sätzen zusammen. 2) Bilden Sie das Argument als Toulmin-Struktur ab: Behauptung, Belege (die Evidenz), Begründung (warum die Evidenz die Behauptung stützt), Einschränkungen und Gegenargumente. Zitieren Sie zu jedem Element den Satz, auf dem es beruht. 3) Markieren Sie jeden Schritt, der vorausgesetzt statt gezeigt wird. 4) Benennen Sie die drei CARS-Schritte in der Einleitung – das Feld abstecken, die Nische herausarbeiten, die Nische besetzen – und zitieren Sie zu jedem einen Satz. Schreiben Sie den Text nicht um; verweisen Sie auf Abschnittsüberschriften und zitieren Sie exakt.
```

### Prüfung

Vergleichen Sie mit dem Abstract: Die Behauptung sollte 0,8 °C [0,2–1,4 °C] von 3,4 °C pro Grad globaler Erwärmung enthalten, und beide Erklärungen (unterschätzte Reaktion der Zirkulation, unterschätzte niederfrequente Variabilität) sollten als Einschränkungen auftauchen.

## Mit eigenem Material

### Mitbringen

Das Abstract und die Abschnittsüberschriften oder eine ein- bis zweiseitige erweiterte Gliederung Ihres eigenen Artikels oder Kapitels sowie den Namen einer Zielzeitschrift.

### Schritte

1. Fügen Sie den Startprompt mit Ihrer Gliederung und der Zielzeitschrift ein.
2. Vergleichen Sie die Zusammenfassung in drei Sätzen mit dem, was Sie argumentieren wollen.
3. Fordern Sie eine konkrete Korrektur für den schwächsten Schritt im Argument an.
4. Gleichen Sie den vorgeschlagenen Aufbau mit den Autorenrichtlinien der Zeitschrift ab.

### Prompt

```text
Ich schreibe [einen Artikel oder ein Kapitel meiner Abschlussarbeit] im Fach [Disziplin] für [Zielzeitschrift]. Unten steht mein [Abstract und meine Gliederung]. 1) Fassen Sie mein zentrales Argument in drei Sätzen zusammen. 2) Bilden Sie die Argumentationslinie Schritt für Schritt ab und markieren Sie, wo ein Schritt fehlt, vorausgesetzt wird oder durch die beschriebene Evidenz nicht gestützt ist. 3) Schlagen Sie Änderungen am Aufbau vor, damit er zu einem typischen [Artikeltyp, z. B. empirischen IMRaD-]Artikel in dieser Zeitschrift passt. Seien Sie konkret und verweisen Sie auf meine Abschnittsüberschriften. Schreiben Sie meinen Text nicht um. Text: [Text einfügen]
```

### Prüfung

Die Zusammenfassung in drei Sätzen entspricht dem, was Sie argumentieren wollen; wo sie abweicht, zeigt die Lücke, an welcher Stelle Ihr Text unklar ist.

## Technik

Fügen Sie Abstract und Gliederung in Ihren KI-Assistenten ein oder laden Sie den Entwurf als Word- oder PDF-Datei hoch; für einen umfassenderen Ablauf aus Gliederung und Evidenz läuft der Skill academic-paper in einem Coding-Assistenten in Ihrem Editor (z. B. GitHub Copilot in VS Code, Claude Code).

## Stufen

### Chat

Führen Sie den Startprompt mit dem angehängten Vautard-PDF aus. Fragen Sie danach im selben Chat, welcher Schritt des Arguments am schwächsten ist, und bitten Sie um eine konkrete Korrektur, ohne den Text umzuschreiben.

### Projekt / Notebook

Fügen Sie den Artikel von Vautard (B3) oder, für Ihre eigene Arbeit, Ihren Entwurf, Ihre Gliederung, die Autorenrichtlinien der Zielzeitschrift und zwei vorbildliche Artikel aus dieser Zeitschrift hinzu. Fragen Sie, wie sich Ihr Aufbau von den Vorbildern und den Richtlinien unterscheidet. Nach jeder Überarbeitung fügen Sie die neue Fassung hinzu und vergleichen die Argumentkarten.

### Eigener Assistent

Legen Sie in den Anweisungen die Routine fest: Zusammenfassung in drei Sätzen, Toulmin-Karte mit einem Zitat je Element, vorausgesetzte statt gezeigte Schritte, CARS-Schritte in der Einleitung, auf Abschnittsüberschriften verweisen und den Text nie umschreiben. Fügen Sie die Autorenrichtlinien Ihrer Zielzeitschrift als Wissen hinzu. Startprompt: „Bilden Sie das Argument dieses Entwurfs ab und markieren Sie den schwächsten Schritt.“ Wiederverwendbar für jeden Artikel und jedes Kapitel.
