---
id: literatur-0
phase: literatur
order: 0
title: Entwicklung von Suchstrings
risk: 1
mode: Co-create
potential: 3
capabilities: generierung
routes: chat; external
repos: kd-literature-review
data: B2; B3; C1
practice_ref: B2; B3; C1
---

Entwerfen und verfeinern Sie schrittweise boolesche Suchstrings für bibliografische Datenbanken, einschließlich Synonymen und Schlagwörtern – und prüfen Sie sie anhand der PRESS-Checkliste, bevor Sie sie ausführen.

## Problem

Boolesche Strings, die durch Ausprobieren entstehen, übersehen Synonyme und Schreibvarianten oder liefern Tausende Treffer – und die wenigsten Forschenden lassen ihre Strategie vor der Ausführung anhand von PRESS begutachten.

## Ergebnis

Ein dokumentierter String in der Syntax der Datenbank, mit Konzeptblöcken, Synonymen und einer PRESS-Selbstprüfung – ein solider Ausgangspunkt, den Sie mit einer Bibliothekarin oder einem Bibliothekar verfeinern und nach PRISMA-S berichten.

## Vorgehen

1. Nennen Sie Ihre Frage und die Zieldatenbank
2. Teilen Sie die Frage in zwei oder drei Konzeptblöcke
3. Bitten Sie um Synonyme, Trunkierung und Schlagwörter je Block
4. Lassen Sie Ihren KI-Assistenten seinen String anhand von PRESS prüfen
5. Führen Sie ihn selbst in der Datenbank aus und prüfen Sie, ob bekannte Schlüsselpaper erscheinen

## Konzepte

### Bausteinansatz (Building-Block-Approach)

Jedes Schlüsselkonzept der Frage wird zu einem Block aus Synonymen, Schreibvarianten und Schlagwörtern, verbunden mit OR; die Blöcke werden mit AND verbunden. Üblich sind zwei oder drei Blöcke; Outcomes lässt man oft weg, um die Sensitivität zu erhalten.

### PRESS-2015-Leitlinie

Peer Review of Electronic Search Strategies: prüft die Übersetzung der Frage, boolesche und Proximity-Operatoren, Schlagwörter, Textwörter, Rechtschreibung und Syntax sowie Limits und Filter. Für Übersichtsarbeiten im Gesundheitsbereich entwickelt, auf jede Datenbanksuche anwendbar.

### Sensitivität versus Präzision

Sensitivität (Recall) ist der Anteil aller relevanten Datensätze, den eine Suche findet; Präzision ist der Anteil der gefundenen Datensätze, die relevant sind. Systematische Übersichtsarbeiten bevorzugen Sensitivität; die Prüfung bekannter Schlüsselpaper ist ein grober Recall-Test.

### Kontrolliertes Vokabular versus Freitext

Schlagwörter (MeSH in MEDLINE, Emtree in Embase, Thesaurusbegriffe in ERIC oder PsycINFO) indexieren Konzepte einheitlich; Freitextbegriffe erfassen neue oder schlecht indexierte Datensätze. Kombinieren Sie beides; multidisziplinäre Datenbanken wie Scopus stützen sich überwiegend auf Freitext.

### PRISMA-S

Eine Erweiterung von PRISMA um 16 Punkte zur Berichterstattung über Literatursuchen: Datenbanken und Plattformen, vollständige Suchstrings, Limits, Zeiträume, weitere Methoden, Begutachtung der Suche und Deduplizierung. Nutzen Sie sie, um Ihren String im Methodenteil zu dokumentieren.

## Literatur

- McGowan, J., Sampson, M., Salzwedel, D. M., Cogo, E., Foerster, V., & Lefebvre, C. (2016). PRESS Peer Review of Electronic Search Strategies: 2015 guideline statement. Journal of Clinical Epidemiology, 75, 40–46. doi:10.1016/j.jclinepi.2016.01.021
- Rethlefsen, M. L., Kirtley, S., Waffenschmidt, S., Ayala, A. P., Moher, D., Page, M. J., Koffel, J. B., & PRISMA-S Group. (2021). PRISMA-S: An extension to the PRISMA Statement for Reporting Literature Searches in Systematic Reviews. Systematic Reviews, 10, 39. doi:10.1186/s13643-020-01542-z

## Übung

### Aufgabe

Erstellen Sie einen Scopus-String für eine Übungsfrage zu Hitzeextremen in Westeuropa und führen Sie ihn aus, wenn Sie Zugang haben. Sie erfahren, ob die Blöcke des Assistenten bekannte Paper finden und wie ein einziger Block relevante Studien unbemerkt ausschließen kann.

### Prompt

```text
Ich bin Promovierende bzw. Promovierender. Meine Forschungsfrage lautet: „Wie hat der menschengemachte Klimawandel Häufigkeit und Intensität von Hitzeextremen in Westeuropa, einschließlich Großbritannien, beeinflusst?“ Erstellen Sie einen booleschen Suchstring für Scopus mit TITLE-ABS-KEY und drei Konzeptblöcken (Hitzeextreme, menschlicher Einfluss bzw. Attribution, Region), Synonymen mit OR verbunden, Blöcken mit AND verbunden und Trunkierung, wo sinnvoll. Zeigen Sie den String in einem Codeblock und dann eine Tabelle: Block, Begriffe, was er übersehen könnte. Prüfen Sie den String anhand der PRESS-Checkliste: Übersetzung der Frage, boolesche und Proximity-Operatoren, Schlagwörter, Textwörter und Schreibvarianten, Rechtschreibung und Syntax, Limits und Filter. Sagen Sie, ob er eher auf Sensitivität oder Spezifität zielt. Verwenden Sie ausschließlich Scopus-Syntax; wenn Sie bei einem Feldcode unsicher sind, sagen Sie es.
```

### Prüfung

Führen Sie ihn in Scopus aus: Er sollte Christidis et al. (2020) und Vautard et al. (2023) finden. Notieren Sie, ob Perkins-Kirkpatrick und Lewis (2020), eine globale Trendstudie, durch den Regions- oder Attributionsblock ausgeschlossen wird – und ob das beabsichtigt ist.

## Mit eigenem Material

### Mitbringen

Ihre Forschungsfrage in ein oder zwei Sätzen und den Namen einer Datenbank, die Sie nutzen.

### Schritte

1. Fügen Sie Ihre Forschungsfrage ein und nennen Sie die Datenbank.
2. Bitten Sie um einen booleschen Suchstring mit Synonymen und Schlagwörtern.
3. Bitten Sie um eine PRESS-Prüfung des Strings und darum, was jeder Block übersehen könnte.
4. Führen Sie den String in der Datenbank aus und vergleichen Sie die Trefferzahl mit Ihrer üblichen Suche.

### Prompt

```text
Ich bin Promovierende bzw. Promovierender in [Fachgebiet]. Meine Forschungsfrage lautet: [Frage]. Erstellen Sie einen booleschen Suchstring für [Datenbank] mit drei Konzeptblöcken, Synonymen mit OR verbunden, Blöcken mit AND verbunden und Trunkierung, wo sinnvoll. Schlagen Sie Schlagwörter vor (zum Beispiel MeSH), wenn die Datenbank sie nutzt. Zeigen Sie den String in einem Codeblock und dann eine kurze Tabelle: Block, Begriffe, was er übersehen könnte. Prüfen Sie den String dann anhand der PRESS-Checkliste: Übersetzung der Frage, boolesche und Proximity-Operatoren, Schlagwörter, Textwörter und Schreibvarianten, Rechtschreibung und Syntax, Limits und Filter. Sagen Sie, ob der String eher auf Sensitivität oder Spezifität zielt. Verwenden Sie nur Syntax, die [Datenbank] unterstützt; wenn Sie bei einem Feldcode unsicher sind, sagen Sie es.
```

### Prüfung

Der String läuft ohne Syntaxfehler in der Datenbank und findet zwei oder drei Paper, von denen Sie bereits wissen, dass sie relevant sind.

## Technik

Ihr KI-Assistent entwirft und prüft den String; Sie führen ihn selbst in der Datenbank aus, da der Assistent keinen direkten Zugriff auf Abonnementdatenbanken wie Scopus oder Web of Science hat. Prüfen Sie Feldcodes in den Hilfeseiten der Datenbank.

## Stufen

### Chat

Führen Sie den Startprompt aus und kopieren Sie den String in Scopus, wenn Sie Zugang haben. Fügen Sie im selben Chat die Trefferzahl und jedes bekannte Paper ein, das fehlte, und fragen Sie den Assistenten, welchen Block Sie erweitern sollten.

### Projekt / Notebook

Fügen Sie Ihre Frage, den Syntaxleitfaden Ihrer Bibliothek für die Datenbank, die PRESS-Checkliste und ein .docx-Protokoll jeder Stringversion mit ihrer Trefferzahl hinzu. Fragen Sie, was sich zwischen den Versionen geändert hat und welcher Block bekannte Paper verloren hat. So bauen Sie eine dokumentierte Suchhistorie für die Berichterstattung nach PRISMA-S auf.

### Eigener Assistent

Nennen Sie ihn „Suchstring-Builder“. Anweisungen: Konzeptblöcke mit Synonymen, OR innerhalb und AND zwischen den Blöcken, Trunkierung, Schlagwörter, wo die Datenbank sie hat, der String in einem Codeblock, die Blocktabelle, eine PRESS-Selbstprüfung, und bei Unsicherheit zu einem Feldcode das auch sagen. Wissen: die Syntaxleitfäden der Datenbanken, die Sie nutzen. Startprompt: „Erstellen Sie einen Scopus-String für diese Frage.“ Wiederverwendbar für jede neue Frage oder Datenbank.
