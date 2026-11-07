---
id: literatur-8
phase: literatur
order: 8
title: Übersichtsarbeit dokumentieren (PRISMA)
risk: 2
mode: Assist
potential: 2
capabilities: synthese; generierung
routes: chat; files; external
tools: Covidence
repos: prisma2020; slr-prisma
---

Verwandeln Sie Ihr Suchprotokoll, die Zahlen je Schritt und die Ausschlussgründe in PRISMA-Flusszahlen, entfernen Sie Duplikate, prüfen Sie Ihren Bericht anhand der PRISMA-2020-Checkliste und entwerfen Sie den Methodenabsatz.

## Problem

Am Ende einer Übersichtsarbeit stimmen die Zahlen je Schritt oft nicht überein, Ausschlussgründe sind über Dateien verstreut, und die PRISMA-2020-Checkliste wird zum Nachgedanken.

## Ergebnis

Geprüfte PRISMA-2020-Flusszahlen, bei denen jede Unstimmigkeit gekennzeichnet ist, ein Methodenabsatz, der nur aus Ihrem Protokoll gebaut ist, und eine Liste der PRISMA-2020- und PRISMA-S-Punkte, die noch fehlen.

## Vorgehen

1. Führen Sie von Anfang an ein Suchprotokoll: Quelle, Datum, String, Treffer
2. Fügen Sie das Protokoll ein und bitten Sie um Flusszahlen und Rechenprüfungen
3. Beheben Sie gekennzeichnete Unstimmigkeiten selbst und entwerfen Sie dann den Methodentext
4. Listen Sie PRISMA-2020- und PRISMA-S-Punkte auf, die noch fehlen
5. Zeichnen Sie das Diagramm mit der PRISMA2020-Shiny-App

## Konzepte

### PRISMA 2020

Preferred Reporting Items for Systematic reviews and Meta-Analyses: eine Berichtsleitlinie, keine Methode – eine Checkliste mit 27 Punkten und ein Flussdiagramm, um zu berichten, warum eine Übersichtsarbeit gemacht wurde, wie und was sie ergab. Nachvollziehbare Entscheidungen kommen aus einem vorab festgelegten Protokoll (PRISMA-P) und seiner Registrierung, zum Beispiel bei PROSPERO oder OSF. In der Gesundheitsforschung entwickelt, heute fachübergreifend verwendet.

### PRISMA-Flussdiagramm

Zeigt die identifizierten Datensätze je Quelle, Duplikate und andere Entfernungen, gescreente und ausgeschlossene Datensätze, angeforderte und nicht beschaffte Berichte, bewertete Berichte, Ausschlüsse mit Gründen und eingeschlossene Studien. Jeder Schritt muss rechnerisch aufgehen.

### PRISMA-S

Eine Erweiterung mit 16 Punkten zur Berichterstattung über die Suche selbst: jede Datenbank und Plattform, vollständige Strings, Limits, Zeiträume, weitere Methoden wie Zitationsverfolgung, Begutachtung der Suche und die Methode der Deduplizierung.

### Deduplizierung

Das Entfernen von Datensätzen, die in mehreren Datenbanken gefunden wurden, meist über DOI oder über Titel, Jahr und Erstautorin bzw. Erstautor, mit manueller Prüfung von Beinahe-Duplikaten. Berichten Sie die Methode und die Zahl der entfernten Datensätze.

## Literatur

- Page, M. J., McKenzie, J. E., Bossuyt, P. M., Boutron, I., Hoffmann, T. C., Mulrow, C. D., Shamseer, L., Tetzlaff, J. M., Akl, E. A., Brennan, S. E., Chou, R., Glanville, J., Grimshaw, J. M., Hróbjartsson, A., Lalu, M. M., Li, T., Loder, E. W., Mayo-Wilson, E., McDonald, S., … Moher, D. (2021). The PRISMA 2020 statement: An updated guideline for reporting systematic reviews. BMJ, 372, n71. doi:10.1136/bmj.n71
- Rethlefsen, M. L., Kirtley, S., Waffenschmidt, S., Ayala, A. P., Moher, D., Page, M. J., Koffel, J. B., & PRISMA-S Group. (2021). PRISMA-S: An extension to the PRISMA Statement for Reporting Literature Searches in Systematic Reviews. Systematic Reviews, 10, 39. doi:10.1186/s13643-020-01542-z
- Haddaway, N. R., Page, M. J., Pritchard, C. C., & McGuinness, L. A. (2022). PRISMA2020: An R package and Shiny app for producing PRISMA 2020-compliant flow diagrams, with interactivity for optimised digital transparency and Open Synthesis. Campbell Systematic Reviews, 18(2), e1230. doi:10.1002/cl2.1230

## Übung

### Aufgabe

Nutzen Sie ein Übungs-Suchprotokoll, dessen sechs eingeschlossene Studien Paper aus dem Paket sind; es enthält einen absichtlichen Fehler. Sie erfahren, ob Ihr KI-Assistent die Unstimmigkeit kennzeichnet oder stillschweigend korrigiert und ob sein Methodenabsatz Fakten hinzufügt, die nicht im Protokoll stehen.

### Prompt

```text
Ich dokumentiere Suche und Auswahl für eine Übungs-Übersichtsarbeit zu Trends und zur Attribution von Hitze- und Dürreextremen. Suchprotokoll: Scopus, gesucht am 15. Oktober 2026, 412 Datensätze; Web of Science Core Collection, gleiches Datum, 356 Datensätze. Entfernte Duplikate: 198. Gescreente Datensätze: 570. Ausgeschlossen bei Titel und Abstract: 489. Angeforderte Berichte: 81. Nicht beschafft: 3. Im Volltext bewertete Berichte: 78. Ausgeschlossen: 72 (kein quantitatives Trend- oder Attributionsergebnis 40, kein Extremereignis 25, Preprint 5). Eingeschlossen: 6 (Christidis et al. 2020 und 2023, Vautard et al. 2023, Perkins-Kirkpatrick und Lewis 2020, Zachariah et al. 2023, Schumacher et al. 2024). Ordnen Sie die Zahlen für ein PRISMA-2020-Flussdiagramm in einer Tabelle und prüfen Sie, ob sie aufgehen; kennzeichnen Sie jede Unstimmigkeit, statt sie zu korrigieren. Entwerfen Sie dann einen Methodenabsatz, der nur Fakten aus diesem Protokoll verwendet, und listen Sie die PRISMA-2020-Punkte auf, die er noch nicht abdeckt.
```

### Prüfung

Rechnen Sie nach: Jeder Schritt ergibt sich korrekt (768 − 198 = 570, bis 78 − 72 = 6), aber die Ausschlussgründe summieren sich auf 70, nicht auf 72. Der Assistent muss das kennzeichnen, und der Absatz darf keine Suchstrings erfinden.

## Mit eigenem Material

### Mitbringen

Ein Suchprotokoll: Datenbanken, Suchdaten, Suchstrings und die Zahl der Datensätze in jedem Schritt – aus Ihrer eigenen Übersichtsarbeit oder einer Übungssuche.

### Schritte

1. Fügen Sie Ihr Suchprotokoll und die Zahlen je Schritt ein.
2. Bitten Sie um die PRISMA-2020-Flusszahlen in einer Tabelle und um eine Prüfung, ob sie aufgehen, einschließlich entfernter Duplikate.
3. Bitten Sie um einen Entwurf des Methodenabsatzes zu Suche und Auswahl.
4. Fragen Sie, welche Punkte der PRISMA-2020-Checkliste Ihr Bericht noch nicht abdeckt.

### Prompt

```text
Ich dokumentiere Suche und Auswahl für eine Literaturübersicht. Unten steht mein Suchprotokoll: Datenbanken, Suchdaten, Suchstrings und die Zahl der Datensätze in jedem Schritt, mit Ausschlussgründen. Ordnen Sie die Zahlen für ein PRISMA-2020-Flussdiagramm in einer Tabelle: identifiziert je Quelle, Duplikate entfernt, gescreent, bei Titel und Abstract ausgeschlossen, Berichte angefordert, nicht beschafft, im Volltext bewertet, mit Gründen ausgeschlossen, eingeschlossen. Prüfen Sie, ob die Zahlen aufgehen, und kennzeichnen Sie jede Unstimmigkeit, statt sie zu korrigieren. Entwerfen Sie dann einen Methodenabsatz zu Suche und Auswahl, der nur Fakten aus meinem Protokoll verwendet, gehen Sie die 27 Punkte der PRISMA-2020-Checkliste durch und listen Sie auf, welche mein Protokoll und mein Entwurf noch nicht abdecken. Wenn ich eine Liste von Datensätzen einfüge, kennzeichnen Sie wahrscheinliche Duplikate (gleiche DOI oder gleicher Titel, gleiches Jahr und gleiche Erstautorin bzw. gleicher Erstautor), statt sie zu löschen.

[Suchprotokoll einfügen]
```

### Prüfung

Jede Zahl in der Tabelle und im Absatz stimmt mit Ihrem Protokoll überein, und jede vom Assistenten gekennzeichnete Unstimmigkeit ist beim Nachrechnen echt.

### Grenze

Zeichnen Sie das Diagramm selbst mit der offiziellen PRISMA-2020-Vorlage oder einem spezialisierten Werkzeug; der Assistent bereitet die Zahlen und den Text vor, er erzeugt kein verlässliches Diagramm.

## Technik

Fügen Sie das Protokoll in Ihren KI-Assistenten ein; laden Sie einen CSV-Export der Datensätze hoch, wenn Duplikate über DOI oder Titel gekennzeichnet werden sollen (akzeptiert Ihr Werkzeug den Dateityp nicht, speichern Sie ihn als .xlsx oder .txt). Zeichnen Sie das endgültige Diagramm mit dem R-Paket oder der Shiny-App PRISMA2020. Für die Übung nutzen Sie das Suchprotokoll im Startprompt.

## Stufen

### Chat

Fügen Sie das Übungsprotokoll mit dem Startprompt ein. Bitten Sie den Assistenten im selben Chat, jeden Schritt und die Ausschlussgründe getrennt zu addieren und jede Summe zu zeigen – ohne eine Zahl zu verändern.

### Projekt / Notebook

Fügen Sie Ihr laufendes Suchprotokoll (.docx oder .xlsx), die Checklisten PRISMA 2020 und PRISMA-S und Ihren Methodenentwurf hinzu. Fragen Sie, ob die Zahlen aufgehen und welche Punkte noch fehlen. Das Protokoll wächst über Monate von Suche und Screening; das Notebook hält Zahlen und Text jedes Mal konsistent, wenn Sie zurückkehren.

### Eigener Assistent

Nennen Sie ihn „PRISMA-Prüfer“. Anweisungen: die Zahlen für das PRISMA-2020-Flussdiagramm ordnen, jede Summe prüfen und Unstimmigkeiten kennzeichnen, statt sie zu korrigieren, den Methodenabsatz nur aus Fakten im Protokoll entwerfen, fehlende PRISMA-2020-Punkte auflisten und niemals Suchstrings erfinden. Wissen: die PRISMA-2020-Checkliste. Schalten Sie Codeausführung bzw. Datenanalyse ein, wenn Ihr Werkzeug sie anbietet, für die Summen. Startprompt: „Prüfen Sie dieses Suchprotokoll.“
