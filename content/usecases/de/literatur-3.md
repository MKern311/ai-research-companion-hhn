---
id: literatur-3
phase: literatur
order: 3
title: Datenextraktion in Evidenztabellen
risk: 3
mode: Co-create
potential: 3
capabilities: analyse
routes: files; connected; external
connect: Elicit
tools: Elicit; Covidence
repos: kd-literature-review
data: B2; C3
practice_data: B2; C3
---

Übertragen Sie Stichprobe, Methode, Variablen und Effekte – einschließlich Effektstärken für eine Metaanalyse – aus Volltexten in strukturierte Tabellen, mit einer zweiten, unabhängigen Prüfung.

## Problem

Designs, Stichproben und Effekte aus Dutzenden Volltexten abzuschreiben ist langsam und fehleranfällig; Zahlen werden leicht falsch übertragen, aus der falschen Tabelle genommen oder stillschweigend umgerechnet.

## Ergebnis

Eine erste Evidenztabelle auf Basis eines erprobten Extraktionsformulars, mit einem Seitenverweis für jeden Wert und Lücken als „nicht berichtet“ gekennzeichnet – erst nach Ihrer unabhängigen zweiten Prüfung verwendbar.

## Vorgehen

1. Definieren und erproben Sie Extraktionsfelder, bevor Sie die Paper öffnen
2. Hängen Sie die PDFs an und verlangen Sie eine Zeile je Studie
3. Bestehen Sie auf Seitenverweisen und Lücken als „nicht berichtet“
4. Verbieten Sie Berechnung, Rundung und Einheitenumrechnung
5. Prüfen Sie Stichprobengröße, Haupteffekt und einen weiteren Wert

## Konzepte

### Erprobtes Extraktionsformular

Ein vordefinierter Satz von Feldern mit Definitionen und Kodierregeln – Design, Population, Messinstrumente, Outcomes, Effektstatistik –, an zwei oder drei Studien getestet und vor der vollständigen Extraktion überarbeitet. Hält die Extraktion konsistent und berichtbar.

### Doppelte unabhängige Extraktion

Zwei Personen extrahieren unabhängig voneinander und gleichen Unterschiede ab; Buscemi et al. (2006) fanden, dass die Einzelextraktion mehr Fehler erzeugte. Mit der KI als erster Extraktion übernimmt Ihre unabhängige Prüfung die zweite Rolle.

### Effektstärkemaße

Standardisierte Mittelwertdifferenz (Cohens d, Hedges' g), Korrelation r, Odds Ratios oder Risk Ratios, jeweils mit Konfidenzintervall. Eine Metaanalyse braucht ein gemeinsames Maß: Erfassen Sie, was berichtet wird, und rechnen Sie später mit dokumentierten Formeln um, nie während der Extraktion.

### Datenherkunft (Provenance)

Jeder extrahierte Wert trägt seine Fundstelle – Seite, Tabelle oder Abbildung –, damit er geprüft werden kann. „Nicht berichtet“ unterscheidet sich von null oder „nicht zutreffend“; kodieren Sie sie unterschiedlich.

## Literatur

- Borenstein, M., Hedges, L. V., Higgins, J. P. T., & Rothstein, H. R. (2009). Introduction to meta-analysis. Wiley.
- Buscemi, N., Hartling, L., Vandermeer, B., Tjosvold, L., & Klassen, T. P. (2006). Single data extraction generated more errors than double data extraction in systematic reviews. Journal of Clinical Epidemiology, 59(7), 697–703. doi:10.1016/j.jclinepi.2005.11.010

## Übung

### Aufgabe

Extrahieren Sie eine Evidenztabelle aus zwei Attributionsstudien. Sie erfahren, ob Ihr KI-Assistent Wiederkehrzeiten und Wahrscheinlichkeitsänderungen exakt und mit korrekten Seiten übernimmt oder rundet, umrechnet und Lücken mit Wissen von außerhalb füllt.

### Prompt

```text
Ich erstelle eine Evidenztabelle für eine Übersichtsarbeit zur Attribution von Extremhitze. Extrahieren Sie aus den beiden angehängten PDFs (Christidis et al. 2020 und Christidis et al. 2023) eine Tabellenzeile je Studie mit diesen Spalten: Zitat, Ereignis und Schwellenwert, Region und Orte, Beobachtungsdatensatz, Klimamodelle und Experimente, Attributionsmethode, Hauptergebnis mit der berichteten Statistik (Wiederkehrzeit, Wahrscheinlichkeitsänderung oder Wahrscheinlichkeit), Unsicherheitsbereich, genannte Grenzen. Geben Sie nach jedem Wert die Seite oder den Abschnitt an, wo Sie ihn gefunden haben. Übernehmen Sie Zahlen genau wie berichtet; berechnen, runden, rechnen Sie nicht um und schließen Sie nichts daraus. Steht ein Feld nicht im Paper, schreiben Sie „nicht berichtet“.
```

### Prüfung

Vergleichen Sie mit den Abstracts: 2020 – Sommer mit 40 °C und einer heutigen Wiederkehrzeit von 100–300 Jahren, 3,5 Jahre bis 2100; 2023 – 12 Orte, Wahrscheinlichkeit am heißesten Ort um den Faktor 10–10³ erhöht. Prüfen Sie die Seitenverweise.

## Mit eigenem Material

### Mitbringen

Ein oder zwei empirische Open-Access-Paper als PDF.

### Schritte

1. Hängen Sie das PDF an und fügen Sie Ihre Extraktionsfelder ein.
2. Bitten Sie um eine Tabellenzeile je Paper mit Seiten- oder Abschnittsverweisen.
3. Bitten Sie ihn, fehlende Informationen als „nicht berichtet“ zu kennzeichnen.
4. Prüfen Sie drei Werte, darunter Stichprobengröße und Haupteffekt, anhand des PDFs.

### Prompt

```text
Ich erstelle eine Evidenztabelle für eine Übersichtsarbeit zu [Thema]. Extrahieren Sie aus dem angehängten Paper bzw. den angehängten Papern eine Tabellenzeile je Studie mit diesen Spalten: Zitat, Design, Stichprobengröße und Population, Setting, zentrale Variablen oder Messinstrumente, Hauptergebnis mit der berichteten Statistik, genannte Grenzen – und, falls das Paper die Statistiken dafür berichtet, die Effektstärke (zum Beispiel d, r oder ein Odds Ratio) mit ihrem Konfidenzintervall. Geben Sie nach jedem Wert die Seite oder den Abschnitt an, wo Sie ihn gefunden haben. Übernehmen Sie Zahlen genau wie berichtet; berechnen, runden Sie nicht und schließen Sie nichts daraus. Steht ein Feld nicht im Paper, schreiben Sie „nicht berichtet“.
```

### Prüfung

Drei von Ihnen gewählte Werte, darunter die Stichprobengröße und die Hauptstatistik, stimmen exakt mit dem PDF an der Seite oder dem Abschnitt überein, die der Assistent angegeben hat.

## Technik

Laden Sie die PDFs mit Ihrer Spaltenliste in Ihren KI-Assistenten hoch; bitten Sie um exaktes Abschreiben, keine Berechnung. Elicit, angebunden, wenn Ihr Werkzeug es erlaubt, oder direkt genutzt, extrahiert dieselben Spalten über viele Paper zugleich.

## Stufen

### Chat

Hängen Sie Christidis et al. 2020 (B2) und 2023 (C3) an und führen Sie den Startprompt aus. Bitten Sie den Assistenten im selben Chat, jede Zahl anhand der von ihm zitierten Seite erneut zu prüfen und jeden Wert zu kennzeichnen, den er gerundet, umgerechnet oder gefolgert hat.

### Projekt / Notebook

Fügen Sie Ihr erprobtes Extraktionsformular als .docx, die Volltexte, die Sie teilen dürfen (Übung: B2 und C3), und eine Seite mit Ihrer eigenen unabhängigen Extraktion hinzu. Bitten Sie um eine Zeile je Studie mit Seitenverweisen und vergleichen Sie sie mit Ihrer. Nur freigegebenes, nicht sensibles Material kommt hinein, und ein Mensch prüft jeden Wert.

### Eigener Assistent

Nennen Sie ihn „Evidenz-Extraktor“. Anweisungen: Ihr Extraktionsformular als feste Spalten, nach jedem Wert eine Seite oder ein Abschnitt, Zahlen exakt übernommen – kein Berechnen, Runden oder Umrechnen – und „nicht berichtet“ für Lücken. Wissen: das Formular und seine Kodierregeln. Schalten Sie Codeausführung bzw. Datenanalyse ein, wenn Ihr Werkzeug sie anbietet, um die Tabelle nach Excel zu exportieren. Startprompt: „Extrahiere dieses PDF in die Evidenztabelle.“ Nur freigegebenes Material; ein Mensch prüft jede Zeile.
