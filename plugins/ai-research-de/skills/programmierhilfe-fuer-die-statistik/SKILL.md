---
name: programmierhilfe-fuer-die-statistik
description: "Analysecode (R, Python, Stata, SPSS-Syntax) erzeugen, erklären, debuggen und dokumentieren – von der Regression über Strukturgleichungsmodelle bis zur Metaanalyse. Einsetzen bei: Programmierhilfe für die Statistik."
---

# Programmierhilfe für die Statistik

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/analyse-0

## Ziel

Analysecode (R, Python, Stata, SPSS-Syntax) erzeugen, erklären, debuggen und dokumentieren – von der Regression über Strukturgleichungsmodelle bis zur Metaanalyse.

Kommentierter, lauffähiger Code, den Sie Zeile für Zeile erklären können, mit aufgelisteten und geprüften Modellannahmen und einem Schlüsselwert, der in einem zweiten Werkzeug nachgerechnet wurde.

## Wann einsetzen

Sie wissen, welches Modell Sie brauchen, verlieren aber Stunden mit Syntax, Fehlermeldungen und Paketoptionen. Code aus Foren passt selten zu Ihrer Datenstruktur oder zu den Annahmen des Modells.

## Vorgehen

1. Hängen Sie die CSV-Datei an und beschreiben Sie die Analyse unter Nennung Ihrer Software.
2. Bitten Sie um kommentierten Code und eine einfache Erklärung jedes Schritts.
3. Bei Python lassen Sie den Assistenten den Code ausführen; kann er keinen Code ausführen oder nutzen Sie eine andere Sprache, führen Sie ihn in Ihrer eigenen Software aus.
4. Kopieren Sie jede Fehlermeldung zurück in den Chat und bitten Sie um eine Korrektur mit Erklärung.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.
- Erstellen Sie einen konfigurierten Assistenten (z. B. einen Copilot-Agenten, einen Custom GPT, ein Gemini Gem oder ein Claude-Projekt). Nennen Sie in seinen dauerhaften Anweisungen Ihre Disziplin und Software und legen Sie die Regeln fest: kommentierter Code, nur vollständige Fälle, jede entfernte Beobachtung auflisten, Annahmen benennen und prüfen, R- oder Stata-Entsprechungen angeben, ohne sie auszuführen, und nie eine Zahl ohne den zugehörigen Code berichten. Schalten Sie Codeausführung bzw. Datenanalyse ein, wenn Ihr Werkzeug sie anbietet. Startprompt: „Hier sind mein Datensatz und mein Modell – schreiben Sie den Code, führen Sie ihn aus und erklären Sie ihn.“ Wiederverwendbar für jeden neuen Datensatz.

## Startprompt

```text
Ich bin Promovierende bzw. Promovierender im Fach [Disziplin] und nutze [R, Python, Stata oder SPSS]. Die angehängte Datei ist ein [öffentlicher oder Dummy-]Datensatz mit den Variablen [wichtigste Variablen]. Ich möchte [Analyse, z. B. eine lineare Regression von Y auf X1 und X2 mit robusten Standardfehlern durchführen]. Schreiben Sie kommentierten Code, der die Daten lädt, Variablentypen und fehlende Werte prüft, die Analyse durchführt und die Ergebnisse ausgibt. Erklären Sie danach in einfacher Sprache, was jeder Block tut und welche Annahmen ich prüfen sollte. Wenn eine Funktion oder Option in meiner Version möglicherweise nicht existiert, sagen Sie das. (Bei komplexeren Modellen – zum Beispiel Strukturgleichungsmodellen mit lavaan oder seminr oder einer Metaanalyse mit metafor – nennen Sie das Paket und fügen Sie einen kurzen Auszug aus seiner Dokumentation ein, damit der Code ihr folgt.)
```

## Prüfung

Der Code läuft fehlerfrei, und eine Schlüsselzahl, etwa der Stichprobenumfang oder ein Mittelwert, stimmt mit dem überein, was Sie bei direkter Prüfung der Daten erhalten.

## Grenzen

- Manche Assistenten können gar keinen Code ausführen, und die meisten führen nur Python aus; Code in R, Stata oder SPSS müssen Sie in Ihrer eigenen Software ausführen und prüfen.
- Risiko: Eigene unveröffentlichte Entwürfe, Gutachten oder Inhalte Dritter.

## Wichtige Konzepte

- **Annahmen der Methode der kleinsten Quadrate (Ordinary Least Squares, OLS)** – Die lineare Regression liefert unverzerrte Schätzer, wenn das Modell in seinen Parametern linear ist, kein Prädiktor eine perfekte Linearkombination der übrigen ist und die Fehler bei gegebenen Prädiktoren den Mittelwert null haben (Exogenität: Keine ausgelassene Variable und keine umgekehrte Kausalität beeinflusst beide Seiten). Die Schätzer sind außerdem effizient, wenn die Fehler konstante Varianz (Homoskedastizität) haben und nicht autokorreliert sind; normalverteilte Residuen sind bei kleinen Stichproben für die Inferenz wichtig. Prüfen Sie jede Annahme mit Residuenplots, Tests und Fachwissen.
- **Heteroskedastizitätskonsistente (robuste) Standardfehler** – Der Schätzer von White (1980) und seine Varianten für kleine Stichproben wie HC3 (heteroskedasticity-consistent type 3) korrigieren die Standardfehler, wenn die Residualvarianz nicht konstant ist. Verwenden Sie ihn für Querschnittsdaten; er verändert Standardfehler und p-Werte, nicht die Koeffizienten.
- **Newey–West-Standardfehler (HAC)** – Heteroskedastizitäts- und autokorrelationskonsistente Standardfehler für Zeitreihen, in denen aufeinanderfolgende Residuen korreliert sind (Newey & West, 1987). Sie wählen eine Lag-Länge; berichten Sie sie als Teil der Methode.
- **Scheinregression (Spurious Regression)** – Wer eine trendbehaftete Zeitreihe auf eine andere regressiert – Temperatur auf CO₂, Umsatz auf Bevölkerung –, kann ein hohes R² und „signifikante“ Koeffizienten erhalten, obwohl die Reihen nichts miteinander zu tun haben (Granger & Newbold, 1974). Ein Warnzeichen ist ein R², das höher ist als die Durbin-Watson-Statistik. Modellieren Sie den Trend, bilden Sie Differenzen oder testen Sie auf Kointegration, bevor Sie einen Koeffizienten als Effekt lesen.
- **Reproduzierbares Analyseskript** – Ein Skript, das die Rohdaten lädt, jede Transformation festhält und die Ergebnisse ausgibt, mit dokumentierten Versionen von Software und Paketen (Sandve et al., 2013). Sie, Ihre Betreuungsperson oder Prüfende können es exakt erneut ausführen.

## Wichtige Literatur

- White, H. (1980). A heteroskedasticity-consistent covariance matrix estimator and a direct test for heteroskedasticity. Econometrica, 48(4), 817–838. https://doi.org/10.2307/1912934
- Newey, W. K., & West, K. D. (1987). A simple, positive semi-definite, heteroskedasticity and autocorrelation consistent covariance matrix. Econometrica, 55(3), 703–708. https://doi.org/10.2307/1913610
- Granger, C. W. J., & Newbold, P. (1974). Spurious regressions in econometrics. Journal of Econometrics, 2(2), 111–120. https://doi.org/10.1016/0304-4076(74)90034-7
- Sandve, G. K., Nekrutenko, A., Taylor, J., & Hovig, E. (2013). Ten simple rules for reproducible computational research. PLoS Computational Biology, 9(10), e1003285. https://doi.org/10.1371/journal.pcbi.1003285

## Hilfreiche Werkzeuge

JASP · Jamovi · GitHub (repositories) · GitHub Copilot
