---
name: ergebnisse-interpretieren-und-berichten
description: "Eigenen statistischen Output erklären lassen, Annahmen und Gütekriterien (z. B. Reliabilität, Modellgüte, Validität von Skalen) prüfen, fragen, welche Prüfungen oder Analysen Sie womöglich übersehen haben, und einen Ergebnisabsatz im APA-Stil entwerfen. Einsetzen bei: Ergebnisse interpretieren und berichten."
---

# Ergebnisse interpretieren und berichten

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/analyse-8

## Ziel

Eigenen statistischen Output erklären lassen, Annahmen und Gütekriterien (z. B. Reliabilität, Modellgüte, Validität von Skalen) prüfen, fragen, welche Prüfungen oder Analysen Sie womöglich übersehen haben, und einen Ergebnisabsatz im APA-Stil entwerfen.

Eine einfache Erklärung Ihres Outputs, an belegten Konventionen geprüfte Annahmen und Gütekriterien, eine Liste von Prüfungen oder Analysen, die Sie womöglich übersehen haben, und ein Absatzentwurf, der Effektstärken und Intervalle berichtet – verwendbar, sobald jede Zahl verifiziert ist.

## Wann einsetzen

Statistischer Output ist voller Kennzahlen, deren Bedeutung und Schwellenwerte Sie nur halb erinnern, und ihn in einen korrekten, vollständigen APA-Ergebnisabsatz zu überführen erfordert wiederholtes Prüfen.

## Ablauf mit der Nutzerin oder dem Nutzer

Führen Sie durch diese Schritte. Wo ein Schritt „den Assistenten bitten“ nennt, sind Sie gemeint.

1. Fügen Sie den Output ein und sagen Sie, welche Analyse und welche Software ihn erzeugt hat.
2. Bitten Sie darum, jede Zahl zu erklären und die Annahmen und Gütekriterien zu prüfen.
3. Fragen Sie, welche Prüfungen oder Analysen Sie womöglich übersehen haben, und entscheiden Sie, welche Sie brauchen.
4. Fordern Sie einen Ergebnisabsatz im APA-Stil an, der nur die Zahlen aus dem Output verwendet.
5. Prüfen Sie jede Zahl im Absatz am Output.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.

## Typische Anfrage

```text
Ich bin Promovierende bzw. Promovierender im Fach [Disziplin]. Unten steht der Output einer [Analyse], die ich in [Software] mit [öffentlichen oder Dummy-]Daten und [n] Fällen durchgeführt habe. 1) Erklären Sie jeden Teil des Outputs in einfacher Sprache. 2) Listen Sie die Annahmen und Gütekriterien auf, die ich für diese Analyse prüfen sollte (zum Beispiel Normalverteilung, Multikollinearität, Reliabilität wie Cronbachs Alpha oder Omega, Modellgüte wie CFI, RMSEA und SRMR oder bei PLS-SEM AVE und HTMT), sagen Sie, welche der Output zeigt und ob sie gängige Schwellenwerte erfüllen, und nennen Sie die Quelle jedes Schwellenwerts. 3) Listen Sie Prüfungen oder Analysen auf, die ich für diese Fragestellung und dieses Design womöglich übersehen habe (zum Beispiel Robustheitsprüfungen, alternative Modelle, Sensitivitäts- oder Subgruppenanalysen), und sagen Sie kurz, warum jede wichtig ist. 4) Entwerfen Sie einen Ergebnisabsatz im APA-7-Stil, der nur Zahlen aus dem Output verwendet. Runden Sie nicht anders, berechnen Sie nichts neu und fügen Sie keine Zahlen hinzu, die nicht im Output stehen; markieren Sie alles, bei dem Sie unsicher sind.

[Output einfügen]
```

## Prüfung

Jede Zahl im Absatz steht im Output, und die genannten Schwellenwerte entsprechen einem Methodenlehrbuch oder den Vorgaben Ihres Fachs. Jede vorgeschlagene zusätzliche Analyse passt zu Ihrer Forschungsfrage; Sie entscheiden, welche Sie durchführen.

## Grenzen

- Der Assistent interpretiert, was Sie einfügen; er sieht weder Ihre Daten noch den Code, der den Output erzeugt hat, prüfen Sie also, ob die Analyse selbst die richtige war.
- Risiko: Eigene unveröffentlichte Entwürfe, Gutachten oder Inhalte Dritter.

## Wichtige Konzepte

- **APA Journal Article Reporting Standards (JARS-Quant)** – Appelbaum et al. (2018) listen auf, was quantitative Ergebnisse berichten müssen: Stichprobenumfang und fehlende Daten, jeden Test mit Teststatistik, Freiheitsgraden und exaktem p, Effektstärken mit Konfidenzintervallen und etwaige Verletzungen von Annahmen.
- **p-Werte versus Effektstärken** – Die Stellungnahme der American Statistical Association (Wasserstein & Lazar, 2016): Ein p-Wert misst weder die Wahrscheinlichkeit, dass eine Hypothese wahr ist, noch die Größe eines Effekts, und p < .05 allein sollte Schlussfolgerungen nicht bestimmen.
- **Korrelation, Übereinstimmung und trendbehaftete Reihen** – Zwei Reihen mit gemeinsamem Trend können ein hohes R² und eine „signifikante“ Steigung zeigen, obwohl sie nichts miteinander zu tun haben (Scheinregression; Granger & Newbold, 1974) – ein Warnzeichen ist ein R² oberhalb der Durbin-Watson-Statistik. Und eine hohe Korrelation zwischen zwei Messungen derselben Größe zeigt nicht, dass sie übereinstimmen: Beurteilen Sie die Übereinstimmung anhand der Differenzen, mit ihrem Mittelwert und den Übereinstimmungsgrenzen (Limits of Agreement; Bland & Altman, 1986).
- **Grenzwerte der Modellgüte bei Strukturgleichungsmodellen** – Konventionen von Hu und Bentler (1999): Comparative Fit Index (CFI) ≥ 0,95, Root Mean Square Error of Approximation (RMSEA) ≤ 0,06, Standardized Root Mean Square Residual (SRMR) ≤ 0.08. Aus Simulationen abgeleitet, sind sie Richtwerte, keine Bestanden-oder-nicht-Regeln.
- **Heterotrait-Monotrait-Verhältnis (HTMT)** – Ein Kriterium der Diskriminanzvalidität, besonders bei der Partial-Least-Squares-Strukturgleichungsmodellierung verwendet (Henseler et al., 2015). Übliche Schwellenwerte: unter 0,85 für konzeptionell verschiedene Konstrukte, unter 0,90 für ähnliche.
- **Reliabilität: Cronbachs Alpha und McDonalds Omega** – Alpha setzt gleiche Faktorladungen voraus (Tau-Äquivalenz); Omega nicht, weshalb es oft bevorzugt wird (McNeish, 2018). Werte von etwa 0,70 oder höher gelten als übliche Konvention für den Forschungseinsatz.

## Wichtige Literatur

- Appelbaum, M., Cooper, H., Kline, R. B., Mayo-Wilson, E., Nezu, A. M., & Rao, S. M. (2018). Journal article reporting standards for quantitative research in psychology: The APA Publications and Communications Board task force report. American Psychologist, 73(1), 3–25. https://doi.org/10.1037/amp0000191
- Wasserstein, R. L., & Lazar, N. A. (2016). The ASA statement on p-values: Context, process, and purpose. The American Statistician, 70(2), 129–133. https://doi.org/10.1080/00031305.2016.1154108
- Hu, L., & Bentler, P. M. (1999). Cutoff criteria for fit indexes in covariance structure analysis: Conventional criteria versus new alternatives. Structural Equation Modeling, 6(1), 1–55. https://doi.org/10.1080/10705519909540118
- Granger, C. W. J., & Newbold, P. (1974). Spurious regressions in econometrics. Journal of Econometrics, 2(2), 111–120. https://doi.org/10.1016/0304-4076(74)90034-7
- Bland, J. M., & Altman, D. G. (1986). Statistical methods for assessing agreement between two methods of clinical measurement. The Lancet, 327(8476), 307–310. https://doi.org/10.1016/S0140-6736(86)90837-8
- Henseler, J., Ringle, C. M., & Sarstedt, M. (2015). A new criterion for assessing discriminant validity in variance-based structural equation modeling. Journal of the Academy of Marketing Science, 43(1), 115–135. https://doi.org/10.1007/s11747-014-0403-8
- McNeish, D. (2018). Thanks coefficient alpha, we'll take it from here. Psychological Methods, 23(3), 412–433. https://doi.org/10.1037/met0000144

## Hilfreiche Werkzeuge

JASP · Jamovi · Statistic & Data Analyst
