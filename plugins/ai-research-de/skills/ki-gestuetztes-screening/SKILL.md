---
name: ki-gestuetztes-screening
description: "Priorisieren Sie Ergebnisse nach Relevanz und erhalten Sie Vorschläge für Einschluss, Ausschluss oder unklar mit dem entscheidenden Kriterium, auf Titel-und-Abstract-Ebene wie im Volltext; nutzen Sie KI als zweite Screening-Person und messen Sie die Übereinstimmung (z. B. Cohens Kappa) – die endgültige Entscheidung treffen Sie. Einsetzen bei: KI-gestütztes Screening."
---

# KI-gestütztes Screening

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/literatur-2

## Ziel

Priorisieren Sie Ergebnisse nach Relevanz und erhalten Sie Vorschläge für Einschluss, Ausschluss oder unklar mit dem entscheidenden Kriterium, auf Titel-und-Abstract-Ebene wie im Volltext; nutzen Sie KI als zweite Screening-Person und messen Sie die Übereinstimmung (z. B. Cohens Kappa) – die endgültige Entscheidung treffen Sie.

Eine KI-Zweitmeinung je Datensatz mit dem entscheidenden Kriterium und einem Zitat, dazu eine Übereinstimmungsstatistik (Cohens Kappa), die zeigt, wie weit Sie ihr vertrauen können – die endgültige Entscheidung bleibt bei Ihnen.

## Wann einsetzen

Hunderte Titel und Abstracts zu screenen ist mühsam, und eine zweite menschliche Screening-Person ist schwer zu finden – doch eine einzelne ermüdete Person weicht von den Kriterien ab und übersieht geeignete Datensätze.

## Vorgehen

1. Screenen Sie die 10 Abstracts selbst und notieren Sie Ihre Entscheidungen.
2. Fügen Sie Ihre Kriterien und die 10 nummerierten Abstracts in Ihren KI-Assistenten ein.
3. Bitten Sie um Einschluss, Ausschluss oder unsicher je Abstract, mit einem stützenden Zitat.
4. Vergleichen Sie seine Entscheidungen mit Ihren, zählen Sie die Übereinstimmungen (oder berechnen Sie Cohens Kappa) und besprechen Sie jede Abweichung.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.
- Nennen Sie ihn „Zweitscreener“. Anweisungen: Ihre Kriterien wortwörtlich, eine Zeile je Datensatz mit Entscheidung, entscheidendem Kriterium und einem Zitat aus dem Abstract, „unsicher“ statt zu raten, und „der Mensch trifft die endgültige Entscheidung“. Wissen: das Protokoll. Schalten Sie Codeausführung bzw. Datenanalyse ein, wenn Ihr Werkzeug sie anbietet, um Kappa zu berechnen. Startprompt: „Screene diesen Stapel.“ Nur freigegebene, nicht sensible Datensätze kommen hinein; Sie prüfen jede Entscheidung.

## Startprompt

```text
Ich screene Datensätze für eine Literaturübersicht zu [Thema]. Einschlusskriterien: [Kriterien]. Ausschlusskriterien: [Kriterien]. Unten stehen 10 nummerierte Titel mit Abstracts. Geben Sie zu jedem eine Tabellenzeile an: Nummer, Entscheidung (Einschluss, Ausschluss oder unsicher), das entscheidende Kriterium und ein kurzes Zitat aus dem Abstract, das die Entscheidung stützt. Verwenden Sie „unsicher“, wenn der Abstract nicht genug Informationen liefert; raten Sie nicht. Ich treffe die endgültige Entscheidung.

[nummerierte Titel und Abstracts einfügen]
```

## Prüfung

Zählen Sie, wie viele der 10 Entscheidungen mit Ihren übereinstimmen, und lesen Sie jede zitierte Textstelle, um zu bestätigen, dass sie wirklich im Abstract steht und die Entscheidung stützt.

## Grenzen

- Der Assistent kann keine Tausende Datensätze per Active Learning reihen; dies prüft nur das kriterienbasierte Screening eines kleinen Stapels.
- Risiko: Personenbezogene oder sensible Daten oder Entscheidungen, die direkt in Ihre Ergebnisse einfließen.

## Wichtige Konzepte

- **Duales unabhängiges Screening** – Zwei Reviewende screenen jeden Datensatz unabhängig voneinander und klären Abweichungen durch Diskussion oder eine dritte Person – der Standard in systematischen Übersichtsarbeiten. Ein KI-Screener kann als Zweitmeinung dienen, nicht als Ersatz für ein validiertes Verfahren.
- **Cohens Kappa** – Übereinstimmung zweier Beurteilender, zufallskorrigiert: κ = (pₒ − pₑ) / (1 − pₑ). Nach der Konvention von Landis und Koch (1977) gilt 0,41–0,60 als moderat, 0,61–0,80 als substanziell, über 0,80 als nahezu perfekt. Bei wenigen Datensätzen instabil.
- **Zuerst Sensitivität bei Titel und Abstract** – Eine geeignete Studie fälschlich auszuschließen kostet mehr, als eine ungeeignete einzuschließen, die das Volltext-Screening noch abfängt. Behandeln Sie „unsicher“ als Einschluss und zählen Sie die falschen Ausschlüsse der KI getrennt von ihren falschen Einschlüssen.
- **Active Learning und Abbruchregeln** – Werkzeuge wie ASReview reihen ungeprüfte Datensätze nach vorhergesagter Relevanz, die sie aus Ihren Entscheidungen lernen, sodass relevante zuerst kommen. Sie brechen nach einer vorab festgelegten Regel ab, zum Beispiel nach einer Serie irrelevanter Datensätze, und berichten das.

## Wichtige Literatur

- Cohen, J. (1960). A coefficient of agreement for nominal scales. Educational and Psychological Measurement, 20(1), 37–46. https://doi.org/10.1177/001316446002000104
- Landis, J. R., & Koch, G. G. (1977). The measurement of observer agreement for categorical data. Biometrics, 33(1), 159–174. https://doi.org/10.2307/2529310

## Hilfreiche Werkzeuge

ASReview · Rayyan · Covidence
