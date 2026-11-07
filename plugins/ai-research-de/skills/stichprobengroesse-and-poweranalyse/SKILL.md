---
name: stichprobengroesse-and-poweranalyse
description: "Erzeugen Sie Berechnungen als nachvollziehbaren Code – der Assistent schreibt Python und führt es aus, wenn Ihr Tool Code ausführen kann; für R schreibt er Code, den Sie selbst ausführen – und machen Sie Annahmen explizit. Einsetzen bei: Stichprobengröße & Poweranalyse."
---

# Stichprobengröße & Poweranalyse

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/design-3

## Ziel

Erzeugen Sie Berechnungen als nachvollziehbaren Code – der Assistent schreibt Python und führt es aus, wenn Ihr Tool Code ausführen kann; für R schreibt er Code, den Sie selbst ausführen – und machen Sie Annahmen explizit.

Wiederholbar ausführbarer Code, eine Kurve der benötigten Stichprobengröße über plausible Effektgrößen und eine explizite Liste der Annahmen – eine a-priori-Poweranalyse, die Sie verteidigen und aktualisieren können, wenn sich Schätzungen ändern.

## Wann einsetzen

Stichprobengrößen werden oft einmal in einem Web-Rechner berechnet, ohne die Annahmen festzuhalten – schwer zu begründen gegenüber einer Ethikkommission oder Prüfenden und stumm gegenüber Clusterung oder Abhängigkeit.

## Vorgehen

1. Beschreiben Sie Ihren geplanten Test, die Effektgröße, Alpha und die gewünschte Power.
2. Bitten Sie den Assistenten, Python-Code für die Poweranalyse zu schreiben und auszuführen (wenn er keinen Code ausführen kann, führen Sie ihn selbst aus).
3. Bitten Sie um eine Grafik der benötigten Stichprobengröße über einen Bereich von Effektgrößen.
4. Prüfen Sie das Ergebnis gegen G*Power oder eine veröffentlichte Power-Tabelle.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.
- Nennen Sie ihn „Power-Analyst“ und schalten Sie Codeausführung bzw. Datenanalyse ein, wenn Ihr Tool sie anbietet. Anweisungen: immer Python mit statsmodels schreiben und ausführen, den Code zeigen, die Stichprobengröße über Effektgrößen grafisch darstellen, jede Annahme auflisten und welche Ihre Daten verletzen könnten, und einen bekannten Benchmark ausführen (d = 0,5 ergibt etwa 64 je Gruppe). Startprompt: „Poweranalyse für [Test], Effektgröße [Wert] aus [Quelle]“. Wiederverwendbar für jede Studie oder jeden Antrag.

## Startprompt

```text
Ich plane eine Studie in [Fach] mit [statistischer Test, z. B. t-Test für unabhängige Stichproben]. Schreibe und führe Python-Code aus (zum Beispiel mit statsmodels), der die benötigte Stichprobengröße für die Effektgröße [Wert, z. B. Cohens d = 0,5], Alpha 0,05, Power 0,80, zweiseitig berechnet. Zeige den Code, das Ergebnis und eine Grafik der Stichprobengröße für Effektgrößen von 0,2 bis 0,8. Liste jede Annahme auf, die die Berechnung trifft, und erkläre das Ergebnis in zwei klaren Sätzen.
```

## Prüfung

Führen Sie einen bekannten Fall aus: Für d = 0,5, Alpha 0,05, Power 0,80, zweiseitigen t-Test sollte das Ergebnis etwa 64 je Gruppe betragen und mit G*Power übereinstimmen.

## Grenzen

- Risiko: Eigene unveröffentlichte Entwürfe, Gutachten oder Inhalte Dritter.

## Wichtige Konzepte

- **A-priori-Poweranalyse** – Für einen gegebenen Test sind Effektgröße, Alpha (Fehler 1. Art, üblicherweise 0,05), Power (1 – Beta, üblicherweise 0,80) und Stichprobengröße verknüpft: Drei werden festgelegt, die vierte wird berechnet. Planen Sie sie vor der Datenerhebung; Post-hoc-Power liefert keinen Erkenntnisgewinn.
- **Cohens d und seine Richtwerte** – Standardisierte Mittelwertdifferenz: die Mittelwertdifferenz geteilt durch die gepoolte Standardabweichung. Cohens 0,2, 0,5 und 0,8 („klein“, „mittel“, „groß“) sind grobe Konventionen; bevorzugen Sie Effektgrößen aus früheren Studien oder Ihrem Fach.
- **Begründung der Stichprobengröße und kleinster relevanter Effekt** – Lakens (2022) unterscheidet Begründungen: gesamte Population, Ressourcenbeschränkungen, Genauigkeit, a-priori-Poweranalyse, Faustregeln oder keine. Stützen Sie eine Poweranalyse auf den kleinsten Effekt, der theoretisch oder praktisch bedeutsam wäre, und sagen Sie, welche Begründung Sie verwenden.
- **Unabhängigkeit und effektive Stichprobengröße** – Die Standardformeln setzen unabhängige Beobachtungen voraus. Clusterung (z. B. Schülerinnen und Schüler in Klassen) bläht die Varianz um den Designeffekt auf, 1 + (m – 1) × ICC; Autokorrelation in Zeitreihen verringert die effektive Stichprobengröße ebenfalls.

## Wichtige Literatur

- Cohen, J. (1988). Statistical power analysis for the behavioral sciences (2nd ed.). Lawrence Erlbaum.
- Faul, F., Erdfelder, E., Lang, A.-G., & Buchner, A. (2007). G*Power 3: A flexible statistical power analysis program for the social, behavioral, and biomedical sciences. Behavior Research Methods, 39(2), 175–191. https://doi.org/10.3758/BF03193146
- Lakens, D. (2022). Sample size justification. Collabra: Psychology, 8(1), 33267. https://doi.org/10.1525/collabra.33267

## Hilfreiche Werkzeuge

Jamovi
