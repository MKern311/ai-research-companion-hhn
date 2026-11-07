---
name: datenextraktion-in-evidenztabellen
description: "Übertragen Sie Stichprobe, Methode, Variablen und Effekte – einschließlich Effektstärken für eine Metaanalyse – aus Volltexten in strukturierte Tabellen, mit einer zweiten, unabhängigen Prüfung. Einsetzen bei: Datenextraktion in Evidenztabellen."
---

# Datenextraktion in Evidenztabellen

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/literatur-3

## Ziel

Übertragen Sie Stichprobe, Methode, Variablen und Effekte – einschließlich Effektstärken für eine Metaanalyse – aus Volltexten in strukturierte Tabellen, mit einer zweiten, unabhängigen Prüfung.

Eine erste Evidenztabelle auf Basis eines erprobten Extraktionsformulars, mit einem Seitenverweis für jeden Wert und Lücken als „nicht berichtet“ gekennzeichnet – erst nach Ihrer unabhängigen zweiten Prüfung verwendbar.

## Wann einsetzen

Designs, Stichproben und Effekte aus Dutzenden Volltexten abzuschreiben ist langsam und fehleranfällig; Zahlen werden leicht falsch übertragen, aus der falschen Tabelle genommen oder stillschweigend umgerechnet.

## Vorgehen

1. Hängen Sie das PDF an und fügen Sie Ihre Extraktionsfelder ein.
2. Bitten Sie um eine Tabellenzeile je Paper mit Seiten- oder Abschnittsverweisen.
3. Bitten Sie ihn, fehlende Informationen als „nicht berichtet“ zu kennzeichnen.
4. Prüfen Sie drei Werte, darunter Stichprobengröße und Haupteffekt, anhand des PDFs.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.
- Nennen Sie ihn „Evidenz-Extraktor“. Anweisungen: Ihr Extraktionsformular als feste Spalten, nach jedem Wert eine Seite oder ein Abschnitt, Zahlen exakt übernommen – kein Berechnen, Runden oder Umrechnen – und „nicht berichtet“ für Lücken. Wissen: das Formular und seine Kodierregeln. Schalten Sie Codeausführung bzw. Datenanalyse ein, wenn Ihr Werkzeug sie anbietet, um die Tabelle nach Excel zu exportieren. Startprompt: „Extrahiere dieses PDF in die Evidenztabelle.“ Nur freigegebenes Material; ein Mensch prüft jede Zeile.

## Startprompt

```text
Ich erstelle eine Evidenztabelle für eine Übersichtsarbeit zu [Thema]. Extrahieren Sie aus dem angehängten Paper bzw. den angehängten Papern eine Tabellenzeile je Studie mit diesen Spalten: Zitat, Design, Stichprobengröße und Population, Setting, zentrale Variablen oder Messinstrumente, Hauptergebnis mit der berichteten Statistik, genannte Grenzen – und, falls das Paper die Statistiken dafür berichtet, die Effektstärke (zum Beispiel d, r oder ein Odds Ratio) mit ihrem Konfidenzintervall. Geben Sie nach jedem Wert die Seite oder den Abschnitt an, wo Sie ihn gefunden haben. Übernehmen Sie Zahlen genau wie berichtet; berechnen, runden Sie nicht und schließen Sie nichts daraus. Steht ein Feld nicht im Paper, schreiben Sie „nicht berichtet“.
```

## Prüfung

Drei von Ihnen gewählte Werte, darunter die Stichprobengröße und die Hauptstatistik, stimmen exakt mit dem PDF an der Seite oder dem Abschnitt überein, die der Assistent angegeben hat.

## Grenzen

- Risiko: Personenbezogene oder sensible Daten oder Entscheidungen, die direkt in Ihre Ergebnisse einfließen.

## Wichtige Konzepte

- **Erprobtes Extraktionsformular** – Ein vordefinierter Satz von Feldern mit Definitionen und Kodierregeln – Design, Population, Messinstrumente, Outcomes, Effektstatistik –, an zwei oder drei Studien getestet und vor der vollständigen Extraktion überarbeitet. Hält die Extraktion konsistent und berichtbar.
- **Doppelte unabhängige Extraktion** – Zwei Personen extrahieren unabhängig voneinander und gleichen Unterschiede ab; Buscemi et al. (2006) fanden, dass die Einzelextraktion mehr Fehler erzeugte. Mit der KI als erster Extraktion übernimmt Ihre unabhängige Prüfung die zweite Rolle.
- **Effektstärkemaße** – Standardisierte Mittelwertdifferenz (Cohens d, Hedges' g), Korrelation r, Odds Ratios oder Risk Ratios, jeweils mit Konfidenzintervall. Eine Metaanalyse braucht ein gemeinsames Maß: Erfassen Sie, was berichtet wird, und rechnen Sie später mit dokumentierten Formeln um, nie während der Extraktion.
- **Datenherkunft (Provenance)** – Jeder extrahierte Wert trägt seine Fundstelle – Seite, Tabelle oder Abbildung –, damit er geprüft werden kann. „Nicht berichtet“ unterscheidet sich von null oder „nicht zutreffend“; kodieren Sie sie unterschiedlich.

## Wichtige Literatur

- Borenstein, M., Hedges, L. V., Higgins, J. P. T., & Rothstein, H. R. (2009). Introduction to meta-analysis. Wiley.
- Buscemi, N., Hartling, L., Vandermeer, B., Tjosvold, L., & Klassen, T. P. (2006). Single data extraction generated more errors than double data extraction in systematic reviews. Journal of Clinical Epidemiology, 59(7), 697–703. https://doi.org/10.1016/j.jclinepi.2005.11.010

## Hilfreiche Werkzeuge

Elicit · Covidence
