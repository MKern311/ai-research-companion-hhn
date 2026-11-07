---
id: literatur-2
phase: literatur
order: 2
title: KI-gestütztes Screening
risk: 3
mode: Delegate
potential: 3
capabilities: analyse; agentisch
routes: files; chat; external
tools: ASReview; Rayyan; Covidence
repos: ars-screener
data: AB
practice_data: AB
---

Priorisieren Sie Ergebnisse nach Relevanz und erhalten Sie Vorschläge für Einschluss, Ausschluss oder unklar mit dem entscheidenden Kriterium, auf Titel-und-Abstract-Ebene wie im Volltext; nutzen Sie KI als zweite Screening-Person und messen Sie die Übereinstimmung (z. B. Cohens Kappa) – die endgültige Entscheidung treffen Sie.

## Problem

Hunderte Titel und Abstracts zu screenen ist mühsam, und eine zweite menschliche Screening-Person ist schwer zu finden – doch eine einzelne ermüdete Person weicht von den Kriterien ab und übersieht geeignete Datensätze.

## Ergebnis

Eine KI-Zweitmeinung je Datensatz mit dem entscheidenden Kriterium und einem Zitat, dazu eine Übereinstimmungsstatistik (Cohens Kappa), die zeigt, wie weit Sie ihr vertrauen können – die endgültige Entscheidung bleibt bei Ihnen.

## Vorgehen

1. Formulieren Sie prüfbare Kriterien und erproben Sie sie an einigen Datensätzen
2. Screenen Sie zehn Abstracts selbst, bevor Sie Ihren KI-Assistenten fragen
3. Verlangen Sie je Datensatz Entscheidung, entscheidendes Kriterium und Zitat
4. Berechnen Sie Cohens Kappa gegenüber Ihren eigenen Entscheidungen
5. Klären Sie jede Abweichung selbst und verfeinern Sie die Kriterien

## Konzepte

### Duales unabhängiges Screening

Zwei Reviewende screenen jeden Datensatz unabhängig voneinander und klären Abweichungen durch Diskussion oder eine dritte Person – der Standard in systematischen Übersichtsarbeiten. Ein KI-Screener kann als Zweitmeinung dienen, nicht als Ersatz für ein validiertes Verfahren.

### Cohens Kappa

Übereinstimmung zweier Beurteilender, zufallskorrigiert: κ = (pₒ − pₑ) / (1 − pₑ). Nach der Konvention von Landis und Koch (1977) gilt 0,41–0,60 als moderat, 0,61–0,80 als substanziell, über 0,80 als nahezu perfekt. Bei wenigen Datensätzen instabil.

### Zuerst Sensitivität bei Titel und Abstract

Eine geeignete Studie fälschlich auszuschließen kostet mehr, als eine ungeeignete einzuschließen, die das Volltext-Screening noch abfängt. Behandeln Sie „unsicher“ als Einschluss und zählen Sie die falschen Ausschlüsse der KI getrennt von ihren falschen Einschlüssen.

### Active Learning und Abbruchregeln

Werkzeuge wie ASReview reihen ungeprüfte Datensätze nach vorhergesagter Relevanz, die sie aus Ihren Entscheidungen lernen, sodass relevante zuerst kommen. Sie brechen nach einer vorab festgelegten Regel ab, zum Beispiel nach einer Serie irrelevanter Datensätze, und berichten das.

## Literatur

- Cohen, J. (1960). A coefficient of agreement for nominal scales. Educational and Psychological Measurement, 20(1), 37–46. doi:10.1177/001316446002000104
- Landis, J. R., & Koch, G. G. (1977). The measurement of observer agreement for categorical data. Biometrics, 33(1), 159–174. doi:10.2307/2529310

## Übung

### Aufgabe

Screenen Sie acht Übungsdatensätze auf Titel- und Abstract-Ebene anhand vorgegebener Kriterien – zuerst selbst, dann mit Ihrem KI-Assistenten – und berechnen Sie Kappa. Sie erfahren, wo der Assistent bei Grenzfällen streng oder großzügig ist und ob seine Zitate wirklich in den Abstracts stehen.

### Prompt

```text
Ich screene Datensätze für eine Übersichtsarbeit zur Attribution von Extremwetter an menschlichen Einfluss. Einschluss: begutachtete Primärstudien, die schätzen, wie menschlicher Einfluss die Wahrscheinlichkeit oder Intensität einer Art von Extremereignis verändert hat. Ausschluss: Datensatzbeschreibungen; Assessments oder Indikator-Updates; Trendstudien ohne Attribution; Preprints. Die angehängte Textdatei enthält Zitat, Titel und Abstract von 12 Papern. Screenen Sie ausschließlich diese acht Datensätze: A1, A3, B2, B3, C1, C2, C4 und C6. Beurteilen Sie jeden nur anhand von Zitat, Titel und Abstract. Geben Sie zu jedem eine Tabellenzeile an: Datensatz-ID, Entscheidung (Einschluss, Ausschluss oder unsicher), das entscheidende Kriterium und ein kurzes Zitat aus dem Abstract, das die Entscheidung stützt. Verwenden Sie „unsicher“, wenn der Abstract nicht genug Informationen liefert; raten Sie nicht. Ich treffe die endgültige Entscheidung.
```

### Prüfung

Wahrscheinlich: Ausschluss von Morice et al. (Datensatz), Forster et al. (Indikator-Update), Perkins-Kirkpatrick und Lewis (Trendstudie ohne Attribution) und Shi et al. (Preprint); Einschluss von Christidis et al. (2020) und Zachariah et al. Vautard et al. und Myhre et al. sind Grenzfälle – vergleichen Sie die Begründungen, nicht nur die Labels. Finden Sie jedes Zitat in der Datei mit Strg+F.

## Mit eigenem Material

### Mitbringen

Ihre Ein- und Ausschlusskriterien und 10 Titel mit Abstracts aus einer öffentlichen Suche, die Sie zuerst selbst screenen.

### Schritte

1. Screenen Sie die 10 Abstracts selbst und notieren Sie Ihre Entscheidungen.
2. Fügen Sie Ihre Kriterien und die 10 nummerierten Abstracts in Ihren KI-Assistenten ein.
3. Bitten Sie um Einschluss, Ausschluss oder unsicher je Abstract, mit einem stützenden Zitat.
4. Vergleichen Sie seine Entscheidungen mit Ihren, zählen Sie die Übereinstimmungen (oder berechnen Sie Cohens Kappa) und besprechen Sie jede Abweichung.

### Prompt

```text
Ich screene Datensätze für eine Literaturübersicht zu [Thema]. Einschlusskriterien: [Kriterien]. Ausschlusskriterien: [Kriterien]. Unten stehen 10 nummerierte Titel mit Abstracts. Geben Sie zu jedem eine Tabellenzeile an: Nummer, Entscheidung (Einschluss, Ausschluss oder unsicher), das entscheidende Kriterium und ein kurzes Zitat aus dem Abstract, das die Entscheidung stützt. Verwenden Sie „unsicher“, wenn der Abstract nicht genug Informationen liefert; raten Sie nicht. Ich treffe die endgültige Entscheidung.

[nummerierte Titel und Abstracts einfügen]
```

### Prüfung

Zählen Sie, wie viele der 10 Entscheidungen mit Ihren übereinstimmen, und lesen Sie jede zitierte Textstelle, um zu bestätigen, dass sie wirklich im Abstract steht und die Entscheidung stützt.

### Grenze

Der Assistent kann keine Tausende Datensätze per Active Learning reihen; dies prüft nur das kriterienbasierte Screening eines kleinen Stapels.

## Technik

Fügen Sie Kriterien und nummerierte Abstracts in Ihren KI-Assistenten ein oder hängen Sie sie an, um einen Pilotlauf zu machen; für die Übung hängen Sie die Abstract-Datei an. Für eine vollständige Übersichtsarbeit nutzen Sie ASReview, Rayyan oder Covidence, die Entscheidungen protokollieren; der sr-screener-Skill führt kriterienbasiertes Screening in Coding-Assistenten wie GitHub Copilot aus.

## Stufen

### Chat

Screenen Sie die acht Datensätze zuerst selbst, hängen Sie dann die Abstract-Datei (AB) an und führen Sie den Startprompt aus. Fügen Sie im selben Chat Ihre eigenen Entscheidungen ein und bitten Sie den Assistenten, Python zu schreiben und auszuführen, das Cohens Kappa berechnet – kann er keinen Code ausführen, führen Sie das Skript selbst aus –, und jede Abweichung mit beiden Begründungen aufzulisten.

### Projekt / Notebook

Fügen Sie Ihr Protokoll mit den Eignungskriterien, den Datensatzstapel (Übung: AB; akzeptiert Ihr Werkzeug keinen CSV-Export, speichern Sie ihn zuerst als .xlsx) und eine Seite mit Ihren eigenen Entscheidungen hinzu. Bitten Sie um Einschluss, Ausschluss oder unsicher je Datensatz mit entscheidendem Kriterium und Zitat. Nur freigegebene, nicht sensible Datensätze kommen hinein, und Sie prüfen jede Entscheidung.

### Eigener Assistent

Nennen Sie ihn „Zweitscreener“. Anweisungen: Ihre Kriterien wortwörtlich, eine Zeile je Datensatz mit Entscheidung, entscheidendem Kriterium und einem Zitat aus dem Abstract, „unsicher“ statt zu raten, und „der Mensch trifft die endgültige Entscheidung“. Wissen: das Protokoll. Schalten Sie Codeausführung bzw. Datenanalyse ein, wenn Ihr Werkzeug sie anbietet, um Kappa zu berechnen. Startprompt: „Screene diesen Stapel.“ Nur freigegebene, nicht sensible Datensätze kommen hinein; Sie prüfen jede Entscheidung.

### Automatisierung / eigener Code

Ein Workflow in einer Low-Code-Plattform (z. B. Power Automate oder n8n) kann jeden Datensatz eines großen Exports durch den Assistenten leiten und Entscheidung, Kriterium und Zitat in eine gemeinsame Tabelle oder Ihre Screening-Plattform zurückschreiben – Stapelarbeit, die ein Assistent im Chat nicht leisten kann. Auf GitHub: Ein Skript sendet jeden Datensatz an die von Ihrer Einrichtung freigegebene KI-API und protokolliert Entscheidung, Kriterium und Zitat in einer CSV – nur mit freigegebenen, nicht sensiblen Datensätzen. Prüfen Sie Datenschutz und Freigabe vorher mit Ihrer Hochschule.
