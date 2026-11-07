---
id: querschnitt-8
phase: querschnitt
order: 8
title: Auf dem Laufenden bleiben
risk: 1
mode: Assist
potential: 2
capabilities: recherche; synthese
routes: chat; files; connected
connect: OpenAlex; Semantic Scholar; Litmaps
tools: Litmaps; Semantic Scholar; Google Scholar
data: AB
practice_data: AB
---

Sortieren Sie jede Woche neue Publikationen aus Alerts und Inhaltsverzeichnissen von Zeitschriften nach Ihrer Forschungsfrage und entscheiden Sie, was Sie lesen.

## Problem

Alerts und Inhaltsverzeichnisse bringen jede Woche Dutzende neuer Titel; sie alle zu überfliegen kostet Stunden, und relevante Arbeiten gehen im Rauschen unter.

## Ergebnis

Eine wöchentliche Triage in Pflichtlektüre, Vielleicht und Überspringen nach ausdrücklichen Relevanzkriterien, mit Begründungen und Vorschlägen für Alert-Begriffe – weniger Zeit fürs Sortieren, eine klare Leseliste und besser abgestimmte Alerts.

## Vorgehen

1. Schreiben Sie Ihre Frage und drei Relevanzkriterien auf
2. Fügen Sie die Titel und Abstracts der Woche ein
3. Bitten Sie um eine Einstufung mit Begründung je Arbeit
4. Prüfen Sie übersprungene Arbeiten stichprobenartig auf übersehene relevante
5. Öffnen Sie die Pflichtlektüre und entscheiden Sie endgültig

## Konzepte

### Relevanzkriterien (Eignungskriterien)

Ausdrückliche Ein- und Ausschlussregeln – Population oder Gegenstand, Methode, Ergebnis, Setting, Datum –, wie sie beim systematischen Screening verwendet werden. Sie schriftlich festzuhalten macht die Triage konsistent und lässt Sie nachprüfen, warum eine Arbeit ihre Einstufung erhielt.

### Precision und Recall beim Screening

Precision ist der Anteil der als Pflichtlektüre eingestuften Arbeiten, die wirklich relevant sind; Recall ist der Anteil der wirklich relevanten Arbeiten, die erfasst wurden. Wer auf dem Laufenden bleiben will, zahlt für eine übersehene Schlüsselarbeit meist mehr als für ein zusätzliches Abstract, begünstigen Sie also den Recall.

### Vorwärts- und Rückwärts-Snowballing

Man folgt den Referenzen von Schlüsselarbeiten (rückwärts) und den Arbeiten, die sie zitieren (vorwärts), wie von Wohlin (2014) systematisiert. Zitations-Alerts auf Ausgangsarbeiten finden relevante Arbeiten, die Stichwort-Alerts übersehen.

### Living Review

Eine Übersichtsarbeit, die laufend aktualisiert wird, sobald neue Evidenz erscheint (Elliott et al., 2014). Ein wöchentliches Triage-Protokoll ist eine persönliche, informelle Variante, die Ihr Literaturkapitel bis zur Abgabe aktuell hält.

## Literatur

- Wohlin, C. (2014). Guidelines for snowballing in systematic literature studies and a replication in software engineering. In Proceedings of the 18th International Conference on Evaluation and Assessment in Software Engineering (Article 38). ACM. doi:10.1145/2601248.2601268
- Elliott, J. H., Turner, T., Clavisi, O., Thomas, J., Higgins, J. P. T., Mavergames, C., & Gruen, R. L. (2014). Living systematic reviews: An emerging opportunity to narrow the evidence-practice gap. PLoS Medicine, 11(2), e1001603. doi:10.1371/journal.pmed.1001603

## Übung

### Aufgabe

Behandeln Sie die zwölf Übungs-Abstracts als Alert dieser Woche und sortieren Sie sie nach einer engen Frage. Sie lernen, ob der Assistent Ihre Kriterien konsistent anwendet, nur aus Titeln und Abstracts urteilt und keine Arbeiten ergänzt, die nicht in der Datei stehen.

### Prompt

```text
Ich bin Promovierende/Promovierender. Meine Forschungsfrage lautet: Wie hat der menschliche Einfluss die Wahrscheinlichkeit extremer Hitze im Vereinigten Königreich und in Westeuropa verändert? Relevanzkriterien: Pflichtlektüre, wenn eine Arbeit Änderungen bei Hitzeextremen für das Vereinigte Königreich oder Westeuropa schätzt; Vielleicht, wenn sie Daten oder Methoden liefert, die ich dort anwenden könnte; sonst Überspringen. Die angehängte Textdatei enthält Titel und Abstracts von zwölf Arbeiten; behandle sie als Alert dieser Woche. Sortiere die Arbeiten, nur anhand von Titel und Abstract, in Pflichtlektüre, Vielleicht und Überspringen, mit einer Zeile zur Begründung, die das angewandte Kriterium nennt. Sage für die Pflichtlektüre, ob sie meine Frage jeweils stützt, infrage stellt oder erweitert. Nenne zum Schluss fünf Suchbegriffe, die sich für meine Alerts lohnen. Ergänze keine Arbeiten, die nicht in der Datei stehen.
```

### Prüfung

Stufen Sie die zwölf Arbeiten zuerst selbst anhand der Abstracts ein. Christidis et al. (2020) und Vautard et al. (2023) erfüllen das Kriterium Pflichtlektüre. Perkins-Kirkpatrick & Lewis (2020) und Christidis et al. (2023) sind Grenzfälle, da ihre Abstracts weder das Vereinigte Königreich noch Westeuropa nennen – diskutieren Sie sie. Die Ausgabe muss genau die zwölf Arbeiten der Datei aufführen.

## Mit eigenem Material

### Mitbringen

Eine Liste von 10 bis 20 neuen Titeln (möglichst mit Abstracts) aus einem aktuellen Alert, zum Beispiel von Google Scholar, aus dem Inhaltsverzeichnis einer Zeitschrift oder einem Datenbank-Alert, und Ihre Forschungsfrage.

### Schritte

1. Fügen Sie Ihre Forschungsfrage und die neuen Titel samt Abstracts ein.
2. Bitten Sie um eine Einstufung in Pflichtlektüre, Vielleicht und Überspringen mit je einer Begründung.
3. Fragen Sie, wie die Pflichtlektüre zu Ihrer Arbeit steht.
4. Öffnen Sie die Pflichtlektüre und entscheiden Sie selbst, was Sie lesen.

### Prompt

```text
Ich bin Promovierende/Promovierender in [Fach]. Meine Forschungsfrage lautet: [Frage]. Unten stehen neue Publikationen aus den Alerts dieser Woche. Sortiere sie in Pflichtlektüre, Vielleicht und Überspringen, mit einer Zeile Begründung, nur anhand von Titel und Abstract. Sage für die Pflichtlektüre in einem Satz, ob sie meine Arbeit jeweils stützt, infrage stellt oder erweitert oder eine Methode bietet, die ich nutzen könnte. Nenne zum Schluss eine kurze Liste von Suchbegriffen, die sich für meine Alerts lohnen. Ergänze keine Arbeiten, die nicht in der Liste stehen.

[Titel und Abstracts einfügen]
```

### Prüfung

Lesen Sie bei zwei Arbeiten, die Sie anders eingestuft haben als der Assistent, das Abstract erneut und entscheiden Sie, wer recht hatte; in der Ausgabe steht keine Arbeit, die Sie nicht eingefügt haben.

### Grenze

Der Assistent urteilt nur nach Titel und Abstract; richten Sie die Alerts selbst in den Datenbanken ein, die Sie nutzen. Eine Quelle wie OpenAlex über MCP anzubinden, sodass neue Arbeiten direkt gesucht werden, ist ein Schritt der Stufe 4 – prüfen Sie Datenschutz und Freigabe vorher mit Ihrer Hochschule.

## Technik

Fügen Sie Titel und Abstracts in Ihren KI-Assistenten ein oder hängen Sie sie als eine Textdatei an. Mit angebundenem OpenAlex oder Semantic Scholar, was von Ihrem Werkzeug und der Freigabe Ihrer Hochschule abhängt, kann der Assistent neue Arbeiten selbst abrufen; Litmaps verfolgt neue Arbeiten ausgehend von Ausgangsarbeiten.

## Stufen

### Chat

Führen Sie den Startprompt mit angehängter AB-Abstract-Datei aus. Bitten Sie den Assistenten im selben Chat, die übersprungenen Arbeiten mit dem jeweils nicht erfüllten Kriterium aufzulisten, damit Sie stichprobenartig prüfen können, ob eine relevante Arbeit übersehen wurde.

### Projekt / Notebook

Fügen Sie ein Kriteriendokument (Forschungsfrage und die drei Relevanzkriterien), den Alert jeder Woche als Word- oder .txt-Datei und Ihre früheren Pflichtlektüre-Listen hinzu. Bitten Sie um die Triage der Woche anhand der Kriterien und vergleichen Sie sie mit früheren Wochen. Sie gewinnen konsistente Einstufungen über die Zeit und eine Aufzeichnung, was Sie zu lesen gewählt haben und warum.

### Eigener Assistent

Anweisungen: Ihre Forschungsfrage, die drei Relevanzkriterien, nur nach Titel und Abstract einstufen, eine einzeilige Begründung mit dem genannten Kriterium, stützt, infrage stellt oder erweitert bei Pflichtlektüre, fünf Alert-Begriffe, nie Arbeiten ergänzen, die nicht in der Eingabe stehen. Wissen: optional zwei oder drei Schlüsselarbeiten, die Ihr Thema bestimmen. Startprompt: „Triage des Alerts dieser Woche“. Jede Woche wiederverwendbar.

### Automatisierung / eigener Code

Binden Sie OpenAlex oder Semantic Scholar über deren Remote-MCP-Server an und ergänzen Sie einen wöchentlichen zeitgesteuerten Auslöser, sodass der Assistent neue Arbeiten zu Ihren Alert-Begriffen abruft und Ihnen die Triage per E-Mail schickt – ein einfacher eigener Assistent kann weder Datenbanken durchsuchen noch zeitgesteuert laufen. Auf GitHub: Ein zeitgesteuerter GitHub-Actions-Workflow fragt jede Woche die OpenAlex-API ab und eröffnet ein Issue mit den neuen Arbeiten, sodass GitHub Sie benachrichtigt. Prüfen Sie Datenschutz und Freigabe vorher mit Ihrer Hochschule.
