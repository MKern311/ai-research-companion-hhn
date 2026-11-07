---
id: querschnitt-2
phase: querschnitt
order: 2
title: Promotionsplanung & Zeitmanagement
risk: 1
mode: Assist
potential: 2
capabilities: generierung
routes: chat
tools: Notion
---

Gliedern Sie die Promotion in Meilensteine, planen Sie Ihre Wochen und planen Sie nach Rückschlägen neu.

## Problem

Eine Promotion lässt sich schwer rückwärts planen; man unterschätzt systematisch, wie lange Aufgaben dauern, die Wochen füllen sich mit Lehre und Verwaltung, und nach einem Rückschlag wirkt der Plan überholt.

## Ergebnis

Ein Rückwärtsplan mit Meilensteinen, Abhängigkeiten und ausdrücklichen Puffern, ein realistischer Wochenplan und eine schnelle Neuplanung nach Rückschlägen – ein ehrlicher Blick darauf, ob Ihr Zeitplan hält.

## Vorgehen

1. Nennen Sie Abgabetermin, feste Meilensteine und Wochenstunden
2. Planen Sie rückwärts und markieren Sie den kritischen Pfad
3. Stützen Sie Schätzungen auf frühere Dauern und planen Sie dann Puffer ein
4. Planen Sie die nächste Woche in halbtägigen Blöcken
5. Planen Sie nach einem Rückschlag neu und vergleichen Sie

## Konzepte

### Planungsfehlschluss (Planning Fallacy)

Die Neigung, die Dauer eigener Aufgaben zu unterschätzen, selbst wenn ähnliche frühere Aufgaben länger gedauert haben (Kahneman & Tversky, 1979; Buehler et al., 1994). Begegnen Sie ihr, indem Sie Schätzungen darauf stützen, wie lange vergleichbare Aufgaben tatsächlich gedauert haben.

### Referenzklassenprognose (Reference Class Forecasting)

Eine Aufgabe wird anhand der tatsächlichen Ergebnisse einer Klasse ähnlicher früherer Aufgaben geschätzt, nicht anhand des eigenen Plans (Flyvbjerg, 2006). Für eine Abschlussarbeit heißt das: Nutzen Sie, wie lange Ihr letztes Kapitel, Ihr Ethikantrag oder Ihr Datensatz wirklich gedauert hat.

### Methode des kritischen Pfads (Critical Path Method)

Sie identifiziert die längste Kette voneinander abhängiger Aufgaben; jede Verzögerung dort verzögert die Abgabe, während Aufgaben außerhalb des Pfads Spielraum haben. Schützen Sie den kritischen Pfad mit einem ausdrücklichen Puffer vor der Abgabe.

### Rückwärtsplanung

Gehen Sie vom festen Endtermin aus und setzen Sie die Meilensteine in umgekehrter Reihenfolge, einschließlich Vorlaufzeiten wie Rückmeldung der Betreuungsperson und Formatierung, sodass Sie für jede Phase den spätesten Starttermin sehen.

## Literatur

- Buehler, R., Griffin, D., & Ross, M. (1994). Exploring the "planning fallacy": Why people underestimate their task completion times. Journal of Personality and Social Psychology, 67(3), 366–381. doi:10.1037/0022-3514.67.3.366
- Kahneman, D., & Tversky, A. (1979). Intuitive prediction: Biases and corrective procedures. TIMS Studies in Management Science, 12, 313–327.
- Flyvbjerg, B. (2006). From Nobel Prize to project management: Getting risks right. Project Management Journal, 37(3), 5–15. doi:10.1177/875697280603700302

## Mit eigenem Material

### Mitbringen

Ihren geplanten Abgabetermin, die wichtigsten Meilensteine Ihrer Einrichtung (z. B. Bestätigungsgespräch) und eine Liste Ihrer regelmäßigen Verpflichtungen.

### Schritte

1. Fügen Sie Abgabetermin, Meilensteine und Verpflichtungen ein.
2. Bitten Sie um einen Rückwärtsplan mit Quartalsmeilensteinen und Puffern.
3. Bitten Sie um einen realistischen Plan für die nächste Woche.
4. Beschreiben Sie einen Rückschlag und bitten Sie den Assistenten, neu zu planen.

### Prompt

```text
Ich bin Promovierende/Promovierender im Jahr [Jahr] eines [Vollzeit- / Teilzeit-]Studiums in [Fach]. Mein Abgabetermin ist [Datum]. Feste Meilensteine: [Liste]. Regelmäßige Verpflichtungen: [Lehre, Arbeit, Pflege, Stunden pro Woche]. Plane rückwärts vom Abgabetermin: eine Tabelle mit Quartalsmeilensteinen und Ergebnissen sowie einem Puffer von mindestens [x] Wochen. Plane dann meine nächste Woche in halbtägigen Blöcken mit einem Hauptziel pro Tag. Zeige schließlich, wie sich der Plan ändert, wenn [Rückschlag, z. B. die Datenerhebung sich um sechs Wochen verzögert]. Bleibe realistisch im Rahmen der Stunden, die ich habe, und weise darauf hin, wo der Plan zu knapp ist.
```

### Prüfung

Die Termine ergeben zusammen Ihren Abgabetermin, die festen Meilensteine liegen auf den richtigen Daten, und der Wochenplan passt zu Ihren tatsächlich verfügbaren Stunden.

## Technik

Alles geschieht in einem einfachen Chat mit eingefügten Terminen und Verpflichtungen; bitten Sie um den Plan als Tabelle, die Sie in Excel, ein Planungswerkzeug oder Ihren Kalender übernehmen, und besprechen Sie ihn mit Ihrer Betreuungsperson.

## Stufen

### Chat

Führen Sie den Startprompt mit Ihren Terminen und Verpflichtungen aus. Beschreiben Sie im selben Chat einen realen Rückschlag und bitten Sie den Assistenten, neu zu planen und zu zeigen, welche Meilensteine sich verschieben und ob der Puffer noch hält.

### Projekt / Notebook

Fügen Sie Ihren Plan (als .xlsx oder Word), die Meilensteinregelungen Ihrer Einrichtung und ein kurzes Protokoll hinzu, wie lange frühere Aufgaben tatsächlich gedauert haben. Kommen Sie jeden Monat zurück, aktualisieren Sie das Protokoll und fragen Sie, ob der Zeitplan noch hält und was neu zu planen ist – Schätzungen auf Grundlage Ihrer tatsächlichen Dauern statt Vermutungen.

### Eigener Assistent

Anweisungen: rückwärts vom Abgabetermin planen, den kritischen Pfad markieren, Schätzungen auf frühere Dauern stützen und ausdrückliche Puffer einplanen, Wochenpläne in halbtägigen Blöcken mit einem Ziel pro Tag, jeden Plan melden, der die genannten Stunden übersteigt. Wissen: Ihre Meilensteinregelungen. Schalten Sie „Dokumente, Diagramme und Code erstellen“ für einen Excel-Zeitplan ein. Startprompts: „Plane meine nächste Woche“ und „Plane nach diesem Rückschlag neu“. Jede Woche wiederverwendbar.
