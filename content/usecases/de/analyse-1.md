---
id: analyse-1
phase: analyse
order: 1
title: Datenbereinigung
risk: 2
mode: Co-create
potential: 3
capabilities: analyse
routes: files; external
tools: Jamovi
repos: kd-eda
data: D7
practice_data: D7
---

Inkonsistenzen, Ausreißer und fehlende Werte erkennen; Bereinigungsschritte als Skript festhalten.

## Problem

Rohdateien enthalten Codes für fehlende Werte, Qualitätskennzeichen, vorläufige Zeilen und Duplikate. Manuelle Bereinigung ist langsam, undokumentiert und später schwer reproduzierbar oder zu verteidigen.

## Ergebnis

Ein wiederholt ausführbares Bereinigungsskript, ein Protokoll jeder Entscheidung und ein aufgeräumter Datensatz, in dem fehlende Werte, Kennzeichen und Ausschlüsse explizit sind, statt stillschweigend entfernt zu werden.

## Vorgehen

1. Rohdatei hochladen und ihre Herkunft beschreiben
2. Vor jeder Änderung ein Problemprofil anfordern
3. Jede Korrektur selbst entscheiden und die Begründung festhalten
4. Zeilenzahlen und zwei Werte vorher und nachher vergleichen

## Konzepte

### Tidy Data (aufgeräumte Daten)

Die Struktur nach Wickham (2014): Jede Variable bildet eine Spalte, jede Beobachtung eine Zeile, jede Art von Beobachtungseinheit eine Tabelle. Ein Großteil der Bereinigung besteht darin, unordentliche Layouts – breite Jahr-mal-Monat-Tabellen, Kopfzeilen, Zeilen mit Einheiten – in diese Form zu bringen.

### Mechanismen fehlender Daten (MCAR, MAR, MNAR)

Die Klassifikation von Rubin (1976): völlig zufällig fehlend (missing completely at random), zufällig fehlend in Abhängigkeit von beobachteten Variablen (missing at random) oder nicht zufällig fehlend (missing not at random). Der Mechanismus entscheidet, ob das Löschen von Fällen, Imputation oder die Modellierung des Fehlens vertretbar ist.

### Screenen, diagnostizieren, bearbeiten

Der Zyklus von Van den Broeck et al. (2005): Auffälligkeiten aufspüren (Screening), jede als Fehler, echten Extremwert oder unklar diagnostizieren, dann korrigieren, behalten oder kennzeichnen – und jede Entscheidung dokumentieren. Löschen Sie Werte nicht allein deshalb, weil sie extrem sind.

### Tukey-Grenzen (Tukey's Fences)

Eine Konvention, um mögliche Ausreißer zu markieren: Werte unter Q1 − 1,5 × IQR oder über Q3 + 1,5 × IQR, wobei IQR der Interquartilsabstand ist. Eine Markierung ist Anlass zur Diagnose, keine Regel zum Entfernen.

## Literatur

- Wickham, H. (2014). Tidy data. Journal of Statistical Software, 59(10), 1–23. doi:10.18637/jss.v059.i10
- Rubin, D. B. (1976). Inference and missing data. Biometrika, 63(3), 581–592. doi:10.1093/biomet/63.3.581
- Van den Broeck, J., Cunningham, S. A., Eeckels, R., & Herbst, K. (2005). Data cleaning: Detecting, diagnosing, and editing data abnormalities. PLoS Medicine, 2(10), e267. doi:10.1371/journal.pmed.0020267

## Übung

### Aufgabe

Erstellen Sie ein Profil der Oxford-Stationsdatei, die Codes für fehlende Werte, Schätzkennzeichen und vorläufige Zeilen mischt. Sie erfahren, ob der Assistent diese Codes vor der Bereinigung meldet oder sie stillschweigend umwandelt, entfernt oder falsch liest.

### Prompt

```text
Ich bereite einen Datensatz für die Analyse vor. Die angehängte Textdatei der Met-Office-Station Oxford hat Kopfzeilen, danach eine Zeile pro Monat mit tmax und tmin (°C), af (Frosttage), rain (mm) und sun (Stunden). Lesen Sie zuerst die Kopfzeilen und erklären Sie jeden dort definierten Code. Erstellen Sie dann mit Python ein Profil der Daten, ohne sie zu verändern: Anzahl der Monatszeilen, erster und letzter Monat sowie für jede Spalte die Anzahl der '---'-Werte, die Anzahl der mit * gekennzeichneten Werte, die Anzahl der als 'Provisional' markierten Zeilen und Minimum und Maximum. Geben Sie das als Tabelle aus: Spalte, Problem, Anzahl Zeilen, Beispielwerte, vorgeschlagene Korrektur. Schlagen Sie eine aufgeräumte Ausgabe mit eigenen Kennzeichenspalten vor, statt etwas zu löschen. Bereinigen Sie noch nicht und zeigen Sie den Code, damit ich ihn erneut ausführen kann.
```

### Prüfung

Öffnen Sie die Datei in einem Texteditor: 2.085 Monatszeilen (Januar 1853 – September 2026), 912 fehlende Sonnenscheinwerte und neun Zeilen mit 'Provisional'. Das höchste tmax, 28,2 °C im Juli 2026, ist geschätzt und vorläufig.

## Mit eigenem Material

### Mitbringen

Eine kleine öffentliche oder Dummy-Datei (CSV oder Excel) mit einigen unsauberen Werten, etwa falsch geschriebenen Kategorien, Leerfeldern oder unplausiblen Zahlen.

### Schritte

1. Hängen Sie die Datei an und fügen Sie den Startprompt ein.
2. Prüfen Sie die Problemtabelle und entscheiden Sie, welche Korrekturen Sie akzeptieren.
3. Bitten Sie den Assistenten, nur diese Korrekturen anzuwenden und das Skript zu zeigen (Python, sofern er Code ausführen kann).
4. Fordern Sie die bereinigte Datei und ein Protokoll jeder vorgenommenen Änderung an.

### Prompt

```text
Ich bereite einen Datensatz für die Analyse vor. Die angehängte Datei enthält [öffentliche oder Dummy-Daten zum Thema]; jede Zeile ist ein/e [Einheit]. Erstellen Sie mit Python ein Profil: fehlende Werte je Spalte, inkonsistente Schreibweisen von Kategorien, doppelte Zeilen und Werte außerhalb des zulässigen Bereichs oder unplausible Werte (zulässige Bereiche: [z. B. Alter 18–99]). Geben Sie die Probleme als Tabelle aus: Spalte, Problem, Anzahl Zeilen, Beispielwerte, vorgeschlagene Korrektur. Verändern Sie die Daten noch nicht. Zeigen Sie den verwendeten Code, damit ich ihn später erneut ausführen kann.
```

### Prüfung

Bestätigen Sie zwei oder drei der gemeldeten Probleme von Hand in der Originaldatei und prüfen Sie dann, ob die bereinigte Datei die erwartete Zeilenzahl hat.

## Technik

Laden Sie die CSV- oder Textdatei in Ihren KI-Assistenten hoch; kann er Python ausführen, arbeitet er mit der Datei und gibt den Code zurück, den Sie behalten und in Ihrer eigenen Umgebung erneut ausführen. Akzeptiert Ihr Werkzeug den Dateityp nicht, speichern Sie ihn als .xlsx oder .txt. Lassen Sie die Rohdatei unverändert und speichern Sie die bereinigten Daten unter einem neuen Namen.

## Stufen

### Chat

Führen Sie den Startprompt mit der angehängten Oxford-Datei aus. Übernehmen Sie danach im selben Chat die Korrekturen, denen Sie zustimmen, und fordern Sie die bereinigte Datei mit Kennzeichenspalten, das Skript und ein Protokoll jeder Änderung an.

### Projekt / Notebook

Fügen Sie die Oxford-Rohdatei (D7, .txt), ein kurzes Datenwörterbuch als Word-Datei mit den Codes aus ihrem Kopf und Ihr Bereinigungsprotokoll hinzu. Fragen Sie, welche Codes jede Spalte verwendet und ob das Protokoll alle abdeckt. Halten Sie bei eigenen Daten Codebook, Dokumentation und Bereinigungsentscheidungen zusammen, damit dieselben Regeln gelten, wenn Sie zurückkehren oder eine neue Erhebungswelle hinzukommt.

### Eigener Assistent

Legen Sie in den Anweisungen die Reihenfolge fest: zuerst Kopfzeilen und Codebook lesen, ohne Änderung ein Profil erstellen, eine Problemtabelle ausgeben, auf Ihre Freigabe warten, dann mit Kennzeichenspalten bereinigen, die Rohdatei unangetastet lassen und Skript sowie Änderungsprotokoll zurückgeben. Nie Zeilen stillschweigend löschen. Schalten Sie Codeausführung bzw. Datenanalyse ein, wenn Ihr Werkzeug das anbietet. Startprompt: „Erstellen Sie ein Profil dieser Datei und listen Sie jedes Problem auf, bevor bereinigt wird.“ Wiederverwendbar für jede neue Datendatei oder Erhebungswelle.
