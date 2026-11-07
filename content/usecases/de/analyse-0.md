---
id: analyse-0
phase: analyse
order: 0
title: Programmierhilfe für die Statistik
risk: 2
mode: Co-create
potential: 3
capabilities: generierung; analyse
routes: files; external; connected
connect: JASP; Jamovi; GitHub (repositories)
tools: Jamovi; JASP; GitHub Copilot
repos: kd-stats; lavaan
data: D7
practice_data: D7
---

Analysecode (R, Python, Stata, SPSS-Syntax) erzeugen, erklären, debuggen und dokumentieren – von der Regression über Strukturgleichungsmodelle bis zur Metaanalyse.

## Problem

Sie wissen, welches Modell Sie brauchen, verlieren aber Stunden mit Syntax, Fehlermeldungen und Paketoptionen. Code aus Foren passt selten zu Ihrer Datenstruktur oder zu den Annahmen des Modells.

## Ergebnis

Kommentierter, lauffähiger Code, den Sie Zeile für Zeile erklären können, mit aufgelisteten und geprüften Modellannahmen und einem Schlüsselwert, der in einem zweiten Werkzeug nachgerechnet wurde.

## Vorgehen

1. Modell, Software, Zielvariable und Prädiktoren benennen
2. Kommentierten Code mit eingebauten Annahmenprüfungen anfordern
3. Code ausführen (kann der Assistent keinen Code ausführen, führen Sie ihn selbst aus) und Fehlermeldungen wörtlich zurück in den Chat kopieren
4. Einen Schlüsselwert in einem zweiten Werkzeug nachrechnen

## Konzepte

### Annahmen der Methode der kleinsten Quadrate (Ordinary Least Squares, OLS)

Die lineare Regression liefert unverzerrte Schätzer, wenn das Modell in seinen Parametern linear ist, kein Prädiktor eine perfekte Linearkombination der übrigen ist und die Fehler bei gegebenen Prädiktoren den Mittelwert null haben (Exogenität: Keine ausgelassene Variable und keine umgekehrte Kausalität beeinflusst beide Seiten). Die Schätzer sind außerdem effizient, wenn die Fehler konstante Varianz (Homoskedastizität) haben und nicht autokorreliert sind; normalverteilte Residuen sind bei kleinen Stichproben für die Inferenz wichtig. Prüfen Sie jede Annahme mit Residuenplots, Tests und Fachwissen.

### Heteroskedastizitätskonsistente (robuste) Standardfehler

Der Schätzer von White (1980) und seine Varianten für kleine Stichproben wie HC3 (heteroskedasticity-consistent type 3) korrigieren die Standardfehler, wenn die Residualvarianz nicht konstant ist. Verwenden Sie ihn für Querschnittsdaten; er verändert Standardfehler und p-Werte, nicht die Koeffizienten.

### Newey–West-Standardfehler (HAC)

Heteroskedastizitäts- und autokorrelationskonsistente Standardfehler für Zeitreihen, in denen aufeinanderfolgende Residuen korreliert sind (Newey & West, 1987). Sie wählen eine Lag-Länge; berichten Sie sie als Teil der Methode.

### Scheinregression (Spurious Regression)

Wer eine trendbehaftete Zeitreihe auf eine andere regressiert – Temperatur auf CO₂, Umsatz auf Bevölkerung –, kann ein hohes R² und „signifikante“ Koeffizienten erhalten, obwohl die Reihen nichts miteinander zu tun haben (Granger & Newbold, 1974). Ein Warnzeichen ist ein R², das höher ist als die Durbin-Watson-Statistik. Modellieren Sie den Trend, bilden Sie Differenzen oder testen Sie auf Kointegration, bevor Sie einen Koeffizienten als Effekt lesen.

### Reproduzierbares Analyseskript

Ein Skript, das die Rohdaten lädt, jede Transformation festhält und die Ergebnisse ausgibt, mit dokumentierten Versionen von Software und Paketen (Sandve et al., 2013). Sie, Ihre Betreuungsperson oder Prüfende können es exakt erneut ausführen.

## Literatur

- White, H. (1980). A heteroskedasticity-consistent covariance matrix estimator and a direct test for heteroskedasticity. Econometrica, 48(4), 817–838. doi:10.2307/1912934
- Newey, W. K., & West, K. D. (1987). A simple, positive semi-definite, heteroskedasticity and autocorrelation consistent covariance matrix. Econometrica, 55(3), 703–708. doi:10.2307/1913610
- Granger, C. W. J., & Newbold, P. (1974). Spurious regressions in econometrics. Journal of Econometrics, 2(2), 111–120. doi:10.1016/0304-4076(74)90034-7
- Sandve, G. K., Nekrutenko, A., Taylor, J., & Hovig, E. (2013). Ten simple rules for reproducible computational research. PLoS Computational Biology, 9(10), e1003285. doi:10.1371/journal.pcbi.1003285

## Übung

### Aufgabe

Berechnen Sie aus einer Stationsdatei mit Codes für fehlende, geschätzte und vorläufige Werte Jahresmittel und schätzen Sie dann einen linearen Trend mit gewöhnlichen und Newey–West-Standardfehlern. Sie erfahren, ob der Assistent die Codes korrekt anwendet, ob er meldet, welche Jahre er ausgelassen hat (1883, 2026), und ob er Zeitreihenannahmen wie Autokorrelation ungefragt anspricht.

### Prompt

```text
Ich bin Promovierende bzw. Promovierender und lerne Python für die Statistik. Angehängt ist die Stationsdatei des Met Office für Durham (aus D7): einige Kopfzeilen, danach eine Zeile pro Monat mit yyyy, mm, tmax und tmin (°C), af, rain und sun. '---' kennzeichnet einen fehlenden Wert, * einen geschätzten Wert und 'Provisional' eine Zeile, die noch nicht endgültig ist. Schreiben Sie kommentierten Python-Code und führen Sie ihn aus, der: 1) die Datei einliest, geschätzte Werte behält, aber vorläufige Zeilen verwirft, 2) das Jahresmittel von tmax nur für vollständige Kalenderjahre berechnet (alle 12 Monate vorhanden), 3) die Anzahl der Jahre, das erste und das letzte Jahr sowie jedes ausgelassene Jahr ausgibt, 4) das Jahresmittel von tmax mit OLS auf das Jahr regressiert und danach noch einmal mit Newey–West-Standardfehlern (nennen Sie die gewählte Lag-Länge und begründen Sie sie) und den Trend pro Jahrzehnt berichtet, 5) die Residuen gegen die Zeit abbildet. Erklären Sie jeden Codeblock in einfacher Sprache, listen Sie die Annahmen dieser Regression auf und sagen Sie, welche davon der Residuenplot in Zweifel zieht. Geben Sie danach gleichwertigen R-Code an, ohne ihn auszuführen (ich führe ihn selbst in R aus).
```

### Prüfung

Das Modell sollte 145 vollständige Jahre verwenden (1880–2025): 1883 fällt heraus, weil der Dezember fehlt, 2026 wegen Unvollständigkeit und vorläufiger Werte. Der OLS-Trend beträgt etwa 0.11 °C pro Jahrzehnt (Bestimmtheitsmaß R² etwa 0.32); der Koeffizient ist in beiden Läufen identisch, nur der Standardfehler ändert sich. Rechnen Sie den Mittelwert für 2025 in Excel nach: 14.45 °C. Die Residuen liegen 1960–1989 unter null und nach 2010 darüber, der Assistent sollte also eine Gerade infrage stellen.

## Mit eigenem Material

### Mitbringen

Ein öffentlicher oder Dummy-Datensatz als CSV und eine Analyse, die Sie durchführen möchten, oder ein kurzes eigenes Analyseskript, das einen Fehler auslöst.

### Schritte

1. Hängen Sie die CSV-Datei an und beschreiben Sie die Analyse unter Nennung Ihrer Software.
2. Bitten Sie um kommentierten Code und eine einfache Erklärung jedes Schritts.
3. Bei Python lassen Sie den Assistenten den Code ausführen; kann er keinen Code ausführen oder nutzen Sie eine andere Sprache, führen Sie ihn in Ihrer eigenen Software aus.
4. Kopieren Sie jede Fehlermeldung zurück in den Chat und bitten Sie um eine Korrektur mit Erklärung.

### Prompt

```text
Ich bin Promovierende bzw. Promovierender im Fach [Disziplin] und nutze [R, Python, Stata oder SPSS]. Die angehängte Datei ist ein [öffentlicher oder Dummy-]Datensatz mit den Variablen [wichtigste Variablen]. Ich möchte [Analyse, z. B. eine lineare Regression von Y auf X1 und X2 mit robusten Standardfehlern durchführen]. Schreiben Sie kommentierten Code, der die Daten lädt, Variablentypen und fehlende Werte prüft, die Analyse durchführt und die Ergebnisse ausgibt. Erklären Sie danach in einfacher Sprache, was jeder Block tut und welche Annahmen ich prüfen sollte. Wenn eine Funktion oder Option in meiner Version möglicherweise nicht existiert, sagen Sie das. (Bei komplexeren Modellen – zum Beispiel Strukturgleichungsmodellen mit lavaan oder seminr oder einer Metaanalyse mit metafor – nennen Sie das Paket und fügen Sie einen kurzen Auszug aus seiner Dokumentation ein, damit der Code ihr folgt.)
```

### Prüfung

Der Code läuft fehlerfrei, und eine Schlüsselzahl, etwa der Stichprobenumfang oder ein Mittelwert, stimmt mit dem überein, was Sie bei direkter Prüfung der Daten erhalten.

### Grenze

Manche Assistenten können gar keinen Code ausführen, und die meisten führen nur Python aus; Code in R, Stata oder SPSS müssen Sie in Ihrer eigenen Software ausführen und prüfen.

## Technik

Laden Sie die Datendatei (CSV oder Text) in Ihren KI-Assistenten hoch; kann er Python ausführen, arbeitet er direkt mit der Datei, während R-, Stata- oder SPSS-Code in Ihrer eigenen Software läuft. Akzeptiert Ihr Werkzeug den Dateityp nicht, speichern Sie ihn als .xlsx oder .txt. Bei Strukturgleichungsmodellen oder Metaanalysen fügen Sie die relevante lavaan- bzw. metafor-Dokumentation in den Chat ein.

## Stufen

### Chat

Führen Sie den Startprompt mit der angehängten Durham-Datei aus. Bitten Sie den Assistenten danach im selben Chat, das Modell mit einem anderen Newey–West-Lag erneut zu rechnen und zu erklären, warum sich nur der Standardfehler ändert.

### Projekt / Notebook

Fügen Sie die Durham-Stationsdatei (D7, .txt), Ihren Analyseplan als Word-Datei sowie Code und Ausgabe jedes Chat-Laufs als .txt gespeichert hinzu. Fragen Sie, wo der Code vom Plan abweicht oder was sich zwischen den Läufen geändert hat. Je nach Werkzeug führt das Projekt oder Notebook keinen Code aus, hält aber Plan, Skriptversionen und Ergebnisse zusammen, sodass Sie Wochen später nachvollziehen können, warum Sie jede Entscheidung getroffen haben.

### Eigener Assistent

Erstellen Sie einen konfigurierten Assistenten (z. B. einen Copilot-Agenten, einen Custom GPT, ein Gemini Gem oder ein Claude-Projekt). Nennen Sie in seinen dauerhaften Anweisungen Ihre Disziplin und Software und legen Sie die Regeln fest: kommentierter Code, nur vollständige Fälle, jede entfernte Beobachtung auflisten, Annahmen benennen und prüfen, R- oder Stata-Entsprechungen angeben, ohne sie auszuführen, und nie eine Zahl ohne den zugehörigen Code berichten. Schalten Sie Codeausführung bzw. Datenanalyse ein, wenn Ihr Werkzeug sie anbietet. Startprompt: „Hier sind mein Datensatz und mein Modell – schreiben Sie den Code, führen Sie ihn aus und erklären Sie ihn.“ Wiederverwendbar für jeden neuen Datensatz.
