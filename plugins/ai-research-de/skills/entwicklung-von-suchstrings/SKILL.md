---
name: entwicklung-von-suchstrings
description: "Entwerfen und verfeinern Sie schrittweise boolesche Suchstrings für bibliografische Datenbanken, einschließlich Synonymen und Schlagwörtern – und prüfen Sie sie anhand der PRESS-Checkliste, bevor Sie sie ausführen. Einsetzen bei: Entwicklung von Suchstrings."
---

# Entwicklung von Suchstrings

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/literatur-0

## Ziel

Entwerfen und verfeinern Sie schrittweise boolesche Suchstrings für bibliografische Datenbanken, einschließlich Synonymen und Schlagwörtern – und prüfen Sie sie anhand der PRESS-Checkliste, bevor Sie sie ausführen.

Ein dokumentierter String in der Syntax der Datenbank, mit Konzeptblöcken, Synonymen und einer PRESS-Selbstprüfung – ein solider Ausgangspunkt, den Sie mit einer Bibliothekarin oder einem Bibliothekar verfeinern und nach PRISMA-S berichten.

## Wann einsetzen

Boolesche Strings, die durch Ausprobieren entstehen, übersehen Synonyme und Schreibvarianten oder liefern Tausende Treffer – und die wenigsten Forschenden lassen ihre Strategie vor der Ausführung anhand von PRESS begutachten.

## Ablauf mit der Nutzerin oder dem Nutzer

Führen Sie durch diese Schritte. Wo ein Schritt „den Assistenten bitten“ nennt, sind Sie gemeint.

1. Fügen Sie Ihre Forschungsfrage ein und nennen Sie die Datenbank.
2. Bitten Sie um einen booleschen Suchstring mit Synonymen und Schlagwörtern.
3. Bitten Sie um eine PRESS-Prüfung des Strings und darum, was jeder Block übersehen könnte.
4. Führen Sie den String in der Datenbank aus und vergleichen Sie die Trefferzahl mit Ihrer üblichen Suche.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.

## Typische Anfrage

```text
Ich bin Promovierende bzw. Promovierender in [Fachgebiet]. Meine Forschungsfrage lautet: [Frage]. Erstellen Sie einen booleschen Suchstring für [Datenbank] mit drei Konzeptblöcken, Synonymen mit OR verbunden, Blöcken mit AND verbunden und Trunkierung, wo sinnvoll. Schlagen Sie Schlagwörter vor (zum Beispiel MeSH), wenn die Datenbank sie nutzt. Zeigen Sie den String in einem Codeblock und dann eine kurze Tabelle: Block, Begriffe, was er übersehen könnte. Prüfen Sie den String dann anhand der PRESS-Checkliste: Übersetzung der Frage, boolesche und Proximity-Operatoren, Schlagwörter, Textwörter und Schreibvarianten, Rechtschreibung und Syntax, Limits und Filter. Sagen Sie, ob der String eher auf Sensitivität oder Spezifität zielt. Verwenden Sie nur Syntax, die [Datenbank] unterstützt; wenn Sie bei einem Feldcode unsicher sind, sagen Sie es.
```

## Prüfung

Der String läuft ohne Syntaxfehler in der Datenbank und findet zwei oder drei Paper, von denen Sie bereits wissen, dass sie relevant sind.

## Grenzen

- Risiko: Öffentliches oder eigenes, nicht sensibles Material; Fehler sind leicht zu erkennen.

## Wichtige Konzepte

- **Bausteinansatz (Building-Block-Approach)** – Jedes Schlüsselkonzept der Frage wird zu einem Block aus Synonymen, Schreibvarianten und Schlagwörtern, verbunden mit OR; die Blöcke werden mit AND verbunden. Üblich sind zwei oder drei Blöcke; Outcomes lässt man oft weg, um die Sensitivität zu erhalten.
- **PRESS-2015-Leitlinie** – Peer Review of Electronic Search Strategies: prüft die Übersetzung der Frage, boolesche und Proximity-Operatoren, Schlagwörter, Textwörter, Rechtschreibung und Syntax sowie Limits und Filter. Für Übersichtsarbeiten im Gesundheitsbereich entwickelt, auf jede Datenbanksuche anwendbar.
- **Sensitivität versus Präzision** – Sensitivität (Recall) ist der Anteil aller relevanten Datensätze, den eine Suche findet; Präzision ist der Anteil der gefundenen Datensätze, die relevant sind. Systematische Übersichtsarbeiten bevorzugen Sensitivität; die Prüfung bekannter Schlüsselpaper ist ein grober Recall-Test.
- **Kontrolliertes Vokabular versus Freitext** – Schlagwörter (MeSH in MEDLINE, Emtree in Embase, Thesaurusbegriffe in ERIC oder PsycINFO) indexieren Konzepte einheitlich; Freitextbegriffe erfassen neue oder schlecht indexierte Datensätze. Kombinieren Sie beides; multidisziplinäre Datenbanken wie Scopus stützen sich überwiegend auf Freitext.
- **PRISMA-S** – Eine Erweiterung von PRISMA um 16 Punkte zur Berichterstattung über Literatursuchen: Datenbanken und Plattformen, vollständige Suchstrings, Limits, Zeiträume, weitere Methoden, Begutachtung der Suche und Deduplizierung. Nutzen Sie sie, um Ihren String im Methodenteil zu dokumentieren.

## Wichtige Literatur

- McGowan, J., Sampson, M., Salzwedel, D. M., Cogo, E., Foerster, V., & Lefebvre, C. (2016). PRESS Peer Review of Electronic Search Strategies: 2015 guideline statement. Journal of Clinical Epidemiology, 75, 40–46. https://doi.org/10.1016/j.jclinepi.2016.01.021
- Rethlefsen, M. L., Kirtley, S., Waffenschmidt, S., Ayala, A. P., Moher, D., Page, M. J., Koffel, J. B., & PRISMA-S Group. (2021). PRISMA-S: An extension to the PRISMA Statement for Reporting Literature Searches in Systematic Reviews. Systematic Reviews, 10, 39. https://doi.org/10.1186/s13643-020-01542-z
