---
id: design-3
phase: design
order: 3
title: Stichprobengröße & Poweranalyse
risk: 2
mode: Assist
potential: 2
capabilities: analyse
routes: chat; files; external
tools: Jamovi
repos: kd-power
data: D2
practice_data: D2
---

Erzeugen Sie Berechnungen als nachvollziehbaren Code – der Assistent schreibt Python und führt es aus, wenn Ihr Tool Code ausführen kann; für R schreibt er Code, den Sie selbst ausführen – und machen Sie Annahmen explizit.

## Problem

Stichprobengrößen werden oft einmal in einem Web-Rechner berechnet, ohne die Annahmen festzuhalten – schwer zu begründen gegenüber einer Ethikkommission oder Prüfenden und stumm gegenüber Clusterung oder Abhängigkeit.

## Ergebnis

Wiederholbar ausführbarer Code, eine Kurve der benötigten Stichprobengröße über plausible Effektgrößen und eine explizite Liste der Annahmen – eine a-priori-Poweranalyse, die Sie verteidigen und aktualisieren können, wenn sich Schätzungen ändern.

## Vorgehen

1. Nennen Sie den Test, die kleinste relevante Effektgröße, Alpha und Power
2. Begründen Sie die Effektgröße mit früheren Studien oder praktischer Relevanz
3. Bitten Sie den Assistenten, die Berechnung in Python zu schreiben und auszuführen – wenn er keinen Code ausführen kann, führen Sie ihn selbst aus
4. Fordern Sie eine Kurve der Stichprobengröße über die Effektgrößen an
5. Prüfen Sie einen Wert gegen G*Power oder eine veröffentlichte Tabelle

## Konzepte

### A-priori-Poweranalyse

Für einen gegebenen Test sind Effektgröße, Alpha (Fehler 1. Art, üblicherweise 0,05), Power (1 – Beta, üblicherweise 0,80) und Stichprobengröße verknüpft: Drei werden festgelegt, die vierte wird berechnet. Planen Sie sie vor der Datenerhebung; Post-hoc-Power liefert keinen Erkenntnisgewinn.

### Cohens d und seine Richtwerte

Standardisierte Mittelwertdifferenz: die Mittelwertdifferenz geteilt durch die gepoolte Standardabweichung. Cohens 0,2, 0,5 und 0,8 („klein“, „mittel“, „groß“) sind grobe Konventionen; bevorzugen Sie Effektgrößen aus früheren Studien oder Ihrem Fach.

### Begründung der Stichprobengröße und kleinster relevanter Effekt

Lakens (2022) unterscheidet Begründungen: gesamte Population, Ressourcenbeschränkungen, Genauigkeit, a-priori-Poweranalyse, Faustregeln oder keine. Stützen Sie eine Poweranalyse auf den kleinsten Effekt, der theoretisch oder praktisch bedeutsam wäre, und sagen Sie, welche Begründung Sie verwenden.

### Unabhängigkeit und effektive Stichprobengröße

Die Standardformeln setzen unabhängige Beobachtungen voraus. Clusterung (z. B. Schülerinnen und Schüler in Klassen) bläht die Varianz um den Designeffekt auf, 1 + (m – 1) × ICC; Autokorrelation in Zeitreihen verringert die effektive Stichprobengröße ebenfalls.

## Literatur

- Cohen, J. (1988). Statistical power analysis for the behavioral sciences (2nd ed.). Lawrence Erlbaum.
- Faul, F., Erdfelder, E., Lang, A.-G., & Buchner, A. (2007). G*Power 3: A flexible statistical power analysis program for the social, behavioral, and biomedical sciences. Behavior Research Methods, 39(2), 175–191. doi:10.3758/BF03193146
- Lakens, D. (2022). Sample size justification. Collabra: Psychology, 8(1), 33267. doi:10.1525/collabra.33267

## Übung

### Aufgabe

Sie schätzen eine Effektgröße aus echten Daten – Jahresmittel für Zentralengland, 1961–1990 gegenüber 1991–2020 – und lassen Ihren KI-Assistenten die Poweranalyse ausführen. Sie lernen, ob er die Datei korrekt einliest und darauf hinweist, dass aufeinanderfolgende Jahre nicht unabhängig sind.

### Prompt

```text
Angehängt ist die monatliche Central-England-Temperature-Datei (meantemp_monthly_totals). Schreibe und führe Python-Code aus, der: 1) die Datei einliest, die Kopfzeilen überspringt und -99.9 als fehlend behandelt; 2) die Spalte „Annual“ für 1961–1990 und für 1991–2020 nimmt und Mittelwert und Standardabweichung jedes Zeitraums ausgibt; 3) Cohens d mit der gepoolten Standardabweichung berechnet; 4) mit statsmodels die Anzahl Jahre je Zeitraum berechnet, die für Power 0,80, Alpha 0,05, zweiseitigen t-Test für unabhängige Stichproben nötig sind, für dieses d und für d = 0,5; 5) die benötigte Stichprobengröße für d von 0,2 bis 1,6 als Grafik darstellt. Zeige den Code und die Ergebnisse. Liste dann jede Annahme der Berechnung auf und sage, welche davon jährliche Temperaturdaten verletzen.
```

### Prüfung

Berechnen Sie beide Mittelwerte aus der Spalte „Annual“ in Excel nach: etwa 9,46 °C (1961–1990) und 10,27 °C (1991–2020). Für d = 0,5 stimmen etwa 64 je Gruppe mit G*Power überein. Hat der Assistent Autokorrelation und Trend erwähnt?

## Mit eigenem Material

### Mitbringen

Ihren geplanten statistischen Test (zum Beispiel einen Zweigruppenvergleich) und eine erwartete Effektgröße aus einer früheren Studie.

### Schritte

1. Beschreiben Sie Ihren geplanten Test, die Effektgröße, Alpha und die gewünschte Power.
2. Bitten Sie den Assistenten, Python-Code für die Poweranalyse zu schreiben und auszuführen (wenn er keinen Code ausführen kann, führen Sie ihn selbst aus).
3. Bitten Sie um eine Grafik der benötigten Stichprobengröße über einen Bereich von Effektgrößen.
4. Prüfen Sie das Ergebnis gegen G*Power oder eine veröffentlichte Power-Tabelle.

### Prompt

```text
Ich plane eine Studie in [Fach] mit [statistischer Test, z. B. t-Test für unabhängige Stichproben]. Schreibe und führe Python-Code aus (zum Beispiel mit statsmodels), der die benötigte Stichprobengröße für die Effektgröße [Wert, z. B. Cohens d = 0,5], Alpha 0,05, Power 0,80, zweiseitig berechnet. Zeige den Code, das Ergebnis und eine Grafik der Stichprobengröße für Effektgrößen von 0,2 bis 0,8. Liste jede Annahme auf, die die Berechnung trifft, und erkläre das Ergebnis in zwei klaren Sätzen.
```

### Prüfung

Führen Sie einen bekannten Fall aus: Für d = 0,5, Alpha 0,05, Power 0,80, zweiseitigen t-Test sollte das Ergebnis etwa 64 je Gruppe betragen und mit G*Power übereinstimmen.

## Technik

Beschreiben Sie Ihrem KI-Assistenten den Test und die Parameter oder hängen Sie Pilot- oder Archivdaten an. Er schreibt Python (statsmodels) und – wenn Ihr Tool Code ausführen kann – führt ihn aus und liefert Code, Ergebnis und Grafik; andernfalls führen Sie den Code selbst aus. Bewahren Sie den Code auf, führen Sie ihn selbst erneut aus und prüfen Sie quer in G*Power oder Jamovi.

## Stufen

### Chat

Führen Sie den Startprompt mit der monatlichen Central-England-Datei aus, oder mit Ihrem eigenen Test und Ihrer Effektgröße. Bitten Sie im selben Chat um die Berechnung über den Bereich der Effektgrößen, die Sie für plausibel halten, und um den gesamten Code in einem Block, den Sie erneut ausführen können.

### Projekt / Notebook

Fügen Sie die Pilotdaten oder früheren Studien hinzu, aus denen Ihre Effektgröße stammt (D2 funktioniert als .txt), dazu Ihren Analyseplan sowie Code und Ergebnisse aus dem Chat. Fragen Sie, welche Effektgrößen die Quellen stützen und welche Annahmen Ihr Plan verletzt. Je nach Tool führt das Projekt keinen Code aus; es hält Annahmen, Quellen und Ergebnisse zusammen, für den Fall, dass sich die Schätzungen ändern.

### Eigener Assistent

Nennen Sie ihn „Power-Analyst“ und schalten Sie Codeausführung bzw. Datenanalyse ein, wenn Ihr Tool sie anbietet. Anweisungen: immer Python mit statsmodels schreiben und ausführen, den Code zeigen, die Stichprobengröße über Effektgrößen grafisch darstellen, jede Annahme auflisten und welche Ihre Daten verletzen könnten, und einen bekannten Benchmark ausführen (d = 0,5 ergibt etwa 64 je Gruppe). Startprompt: „Poweranalyse für [Test], Effektgröße [Wert] aus [Quelle]“. Wiederverwendbar für jede Studie oder jeden Antrag.
