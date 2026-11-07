---
name: auf-dem-laufenden-bleiben
description: "Sortieren Sie jede Woche neue Publikationen aus Alerts und Inhaltsverzeichnissen von Zeitschriften nach Ihrer Forschungsfrage und entscheiden Sie, was Sie lesen. Einsetzen bei: Auf dem Laufenden bleiben."
---

# Auf dem Laufenden bleiben

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/querschnitt-8

## Ziel

Sortieren Sie jede Woche neue Publikationen aus Alerts und Inhaltsverzeichnissen von Zeitschriften nach Ihrer Forschungsfrage und entscheiden Sie, was Sie lesen.

Eine wöchentliche Triage in Pflichtlektüre, Vielleicht und Überspringen nach ausdrücklichen Relevanzkriterien, mit Begründungen und Vorschlägen für Alert-Begriffe – weniger Zeit fürs Sortieren, eine klare Leseliste und besser abgestimmte Alerts.

## Wann einsetzen

Alerts und Inhaltsverzeichnisse bringen jede Woche Dutzende neuer Titel; sie alle zu überfliegen kostet Stunden, und relevante Arbeiten gehen im Rauschen unter.

## Vorgehen

1. Fügen Sie Ihre Forschungsfrage und die neuen Titel samt Abstracts ein.
2. Bitten Sie um eine Einstufung in Pflichtlektüre, Vielleicht und Überspringen mit je einer Begründung.
3. Fragen Sie, wie die Pflichtlektüre zu Ihrer Arbeit steht.
4. Öffnen Sie die Pflichtlektüre und entscheiden Sie selbst, was Sie lesen.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.
- Anweisungen: Ihre Forschungsfrage, die drei Relevanzkriterien, nur nach Titel und Abstract einstufen, eine einzeilige Begründung mit dem genannten Kriterium, stützt, infrage stellt oder erweitert bei Pflichtlektüre, fünf Alert-Begriffe, nie Arbeiten ergänzen, die nicht in der Eingabe stehen. Wissen: optional zwei oder drei Schlüsselarbeiten, die Ihr Thema bestimmen. Startprompt: „Triage des Alerts dieser Woche“. Jede Woche wiederverwendbar.

## Startprompt

```text
Ich bin Promovierende/Promovierender in [Fach]. Meine Forschungsfrage lautet: [Frage]. Unten stehen neue Publikationen aus den Alerts dieser Woche. Sortiere sie in Pflichtlektüre, Vielleicht und Überspringen, mit einer Zeile Begründung, nur anhand von Titel und Abstract. Sage für die Pflichtlektüre in einem Satz, ob sie meine Arbeit jeweils stützt, infrage stellt oder erweitert oder eine Methode bietet, die ich nutzen könnte. Nenne zum Schluss eine kurze Liste von Suchbegriffen, die sich für meine Alerts lohnen. Ergänze keine Arbeiten, die nicht in der Liste stehen.

[Titel und Abstracts einfügen]
```

## Prüfung

Lesen Sie bei zwei Arbeiten, die Sie anders eingestuft haben als der Assistent, das Abstract erneut und entscheiden Sie, wer recht hatte; in der Ausgabe steht keine Arbeit, die Sie nicht eingefügt haben.

## Grenzen

- Der Assistent urteilt nur nach Titel und Abstract; richten Sie die Alerts selbst in den Datenbanken ein, die Sie nutzen. Eine Quelle wie OpenAlex über MCP anzubinden, sodass neue Arbeiten direkt gesucht werden, ist ein Schritt der Stufe 4 – prüfen Sie Datenschutz und Freigabe vorher mit Ihrer Hochschule.
- Risiko: Öffentliches oder eigenes, nicht sensibles Material; Fehler sind leicht zu erkennen.

## Wichtige Konzepte

- **Relevanzkriterien (Eignungskriterien)** – Ausdrückliche Ein- und Ausschlussregeln – Population oder Gegenstand, Methode, Ergebnis, Setting, Datum –, wie sie beim systematischen Screening verwendet werden. Sie schriftlich festzuhalten macht die Triage konsistent und lässt Sie nachprüfen, warum eine Arbeit ihre Einstufung erhielt.
- **Precision und Recall beim Screening** – Precision ist der Anteil der als Pflichtlektüre eingestuften Arbeiten, die wirklich relevant sind; Recall ist der Anteil der wirklich relevanten Arbeiten, die erfasst wurden. Wer auf dem Laufenden bleiben will, zahlt für eine übersehene Schlüsselarbeit meist mehr als für ein zusätzliches Abstract, begünstigen Sie also den Recall.
- **Vorwärts- und Rückwärts-Snowballing** – Man folgt den Referenzen von Schlüsselarbeiten (rückwärts) und den Arbeiten, die sie zitieren (vorwärts), wie von Wohlin (2014) systematisiert. Zitations-Alerts auf Ausgangsarbeiten finden relevante Arbeiten, die Stichwort-Alerts übersehen.
- **Living Review** – Eine Übersichtsarbeit, die laufend aktualisiert wird, sobald neue Evidenz erscheint (Elliott et al., 2014). Ein wöchentliches Triage-Protokoll ist eine persönliche, informelle Variante, die Ihr Literaturkapitel bis zur Abgabe aktuell hält.

## Wichtige Literatur

- Wohlin, C. (2014). Guidelines for snowballing in systematic literature studies and a replication in software engineering. In Proceedings of the 18th International Conference on Evaluation and Assessment in Software Engineering (Article 38). ACM. https://doi.org/10.1145/2601248.2601268
- Elliott, J. H., Turner, T., Clavisi, O., Thomas, J., Higgins, J. P. T., Mavergames, C., & Gruen, R. L. (2014). Living systematic reviews: An emerging opportunity to narrow the evidence-practice gap. PLoS Medicine, 11(2), e1001603. https://doi.org/10.1371/journal.pmed.1001603

## Hilfreiche Werkzeuge

OpenAlex · Semantic Scholar · Litmaps · Google Scholar
