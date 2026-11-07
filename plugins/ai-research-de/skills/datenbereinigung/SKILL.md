---
name: datenbereinigung
description: "Inkonsistenzen, Ausreißer und fehlende Werte erkennen; Bereinigungsschritte als Skript festhalten. Einsetzen bei: Datenbereinigung."
---

# Datenbereinigung

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/analyse-1

## Ziel

Inkonsistenzen, Ausreißer und fehlende Werte erkennen; Bereinigungsschritte als Skript festhalten.

Ein wiederholt ausführbares Bereinigungsskript, ein Protokoll jeder Entscheidung und ein aufgeräumter Datensatz, in dem fehlende Werte, Kennzeichen und Ausschlüsse explizit sind, statt stillschweigend entfernt zu werden.

## Wann einsetzen

Rohdateien enthalten Codes für fehlende Werte, Qualitätskennzeichen, vorläufige Zeilen und Duplikate. Manuelle Bereinigung ist langsam, undokumentiert und später schwer reproduzierbar oder zu verteidigen.

## Vorgehen

1. Hängen Sie die Datei an und fügen Sie den Startprompt ein.
2. Prüfen Sie die Problemtabelle und entscheiden Sie, welche Korrekturen Sie akzeptieren.
3. Bitten Sie den Assistenten, nur diese Korrekturen anzuwenden und das Skript zu zeigen (Python, sofern er Code ausführen kann).
4. Fordern Sie die bereinigte Datei und ein Protokoll jeder vorgenommenen Änderung an.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.
- Legen Sie in den Anweisungen die Reihenfolge fest: zuerst Kopfzeilen und Codebook lesen, ohne Änderung ein Profil erstellen, eine Problemtabelle ausgeben, auf Ihre Freigabe warten, dann mit Kennzeichenspalten bereinigen, die Rohdatei unangetastet lassen und Skript sowie Änderungsprotokoll zurückgeben. Nie Zeilen stillschweigend löschen. Schalten Sie „Dokumente, Diagramme und Code erstellen“ ein. Startprompt: „Erstellen Sie ein Profil dieser Datei und listen Sie jedes Problem auf, bevor bereinigt wird.“ Wiederverwendbar für jede neue Datendatei oder Erhebungswelle.

## Startprompt

```text
Ich bereite einen Datensatz für die Analyse vor. Die angehängte Datei enthält [öffentliche oder Dummy-Daten zum Thema]; jede Zeile ist ein/e [Einheit]. Erstellen Sie mit Python ein Profil: fehlende Werte je Spalte, inkonsistente Schreibweisen von Kategorien, doppelte Zeilen und Werte außerhalb des zulässigen Bereichs oder unplausible Werte (zulässige Bereiche: [z. B. Alter 18–99]). Geben Sie die Probleme als Tabelle aus: Spalte, Problem, Anzahl Zeilen, Beispielwerte, vorgeschlagene Korrektur. Verändern Sie die Daten noch nicht. Zeigen Sie den verwendeten Code, damit ich ihn später erneut ausführen kann.
```

## Prüfung

Bestätigen Sie zwei oder drei der gemeldeten Probleme von Hand in der Originaldatei und prüfen Sie dann, ob die bereinigte Datei die erwartete Zeilenzahl hat.

## Grenzen

- Risiko: Eigene unveröffentlichte Entwürfe, Gutachten oder Inhalte Dritter.

## Wichtige Konzepte

- **Tidy Data (aufgeräumte Daten)** – Die Struktur nach Wickham (2014): Jede Variable bildet eine Spalte, jede Beobachtung eine Zeile, jede Art von Beobachtungseinheit eine Tabelle. Ein Großteil der Bereinigung besteht darin, unordentliche Layouts – breite Jahr-mal-Monat-Tabellen, Kopfzeilen, Zeilen mit Einheiten – in diese Form zu bringen.
- **Mechanismen fehlender Daten (MCAR, MAR, MNAR)** – Die Klassifikation von Rubin (1976): völlig zufällig fehlend (missing completely at random), zufällig fehlend in Abhängigkeit von beobachteten Variablen (missing at random) oder nicht zufällig fehlend (missing not at random). Der Mechanismus entscheidet, ob das Löschen von Fällen, Imputation oder die Modellierung des Fehlens vertretbar ist.
- **Screenen, diagnostizieren, bearbeiten** – Der Zyklus von Van den Broeck et al. (2005): Auffälligkeiten aufspüren (Screening), jede als Fehler, echten Extremwert oder unklar diagnostizieren, dann korrigieren, behalten oder kennzeichnen – und jede Entscheidung dokumentieren. Löschen Sie Werte nicht allein deshalb, weil sie extrem sind.
- **Tukey-Grenzen (Tukey's Fences)** – Eine Konvention, um mögliche Ausreißer zu markieren: Werte unter Q1 − 1.5 × IQR oder über Q3 + 1.5 × IQR, wobei IQR der Interquartilsabstand ist. Eine Markierung ist Anlass zur Diagnose, keine Regel zum Entfernen.

## Wichtige Literatur

- Wickham, H. (2014). Tidy data. Journal of Statistical Software, 59(10), 1–23. https://doi.org/10.18637/jss.v059.i10
- Rubin, D. B. (1976). Inference and missing data. Biometrika, 63(3), 581–592. https://doi.org/10.1093/biomet/63.3.581
- Van den Broeck, J., Cunningham, S. A., Eeckels, R., & Herbst, K. (2005). Data cleaning: Detecting, diagnosing, and editing data abnormalities. PLoS Medicine, 2(10), e267. https://doi.org/10.1371/journal.pmed.0020267

## Hilfreiche Werkzeuge

Jamovi
