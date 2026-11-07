---
name: whiteboards-flipcharts-und-card-sorts-digitalisieren
description: "Verwandeln Sie Fotos von Whiteboards, Flipcharts oder Card Sorts aus Workshops und Experimenten in strukturierte Daten – transkribiert, geclustert und zugeordnet (z. B. Items zu Konstrukten) – bereit für die Analyse. Einsetzen bei: Whiteboards, Flipcharts und Card Sorts digitalisieren."
---

# Whiteboards, Flipcharts und Card Sorts digitalisieren

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/erhebung-7

## Ziel

Verwandeln Sie Fotos von Whiteboards, Flipcharts oder Card Sorts aus Workshops und Experimenten in strukturierte Daten – transkribiert, geclustert und zugeordnet (z. B. Items zu Konstrukten) – bereit für die Analyse.

Eine transkribierte, strukturierte Tabelle jeder Karte und ihrer Zuordnung, mit Zählungen je Kategorie und markierten unsicheren Lesungen – die Analyse kann am selben Tag beginnen, und das Foto bleibt der Prüfpfad.

## Wann einsetzen

Card Sorts, Item-Sorting-Aufgaben und Workshop-Boards liefern reichhaltige Daten auf Papier; sie abzutippen und Zuordnungen von Hand zu zählen kostet Stunden und führt zu Übertragungsfehlern.

## Vorgehen

1. Fotografieren Sie das Board frontal, bei gutem Licht, in einer oder zwei Aufnahmen.
2. Laden Sie das Foto hoch (JPEG oder PNG; konvertieren Sie andere Formate zuerst, wenn Ihr Tool sie nicht akzeptiert) – aus der mobilen App Ihres Assistenten oder über Ihren Cloud-Speicher – und bitten Sie den Assistenten, jede Karte zu transkribieren, bevor er irgendetwas interpretiert.
3. Bitten Sie um die Cluster oder die Zuordnung von Karten zu Kategorien als Tabelle, mit markierten unsicheren Lesungen.
4. Vergleichen Sie Transkription und Zuordnung mit dem Board selbst.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.
- Nennen Sie ihn „Board-Digitalisierer“ und schalten Sie Codeausführung bzw. Datenanalyse ein, wenn Ihr Tool sie anbietet, für Zählungen und den Tabellenexport. Anweisungen: vor dem Interpretieren jede Karte transkribieren, [unleserlich] statt zu raten, eine Tabelle aus Karte, Text, Cluster und Verbindungen, Zählungen je vorgegebener Kategorie, Interpretation zuletzt. Wissen: Ihre Kategorienliste. Es gehen nur Fotos ohne Gesichter oder Namen hinein, und Sie prüfen jede Tabelle am Board. Startprompt: „Digitalisiere diesen Card Sort“.

## Startprompt

```text
Das angehängte Foto zeigt das Ergebnis eines/einer [Card Sort / Item-Sorting-Aufgabe / Brainstormings] aus einem/einer [Workshop oder Experiment] zu [Thema]. 1) Transkribiere jede Karte oder Notiz exakt wie geschrieben, nummeriert, mit ihrer Position (Spalte oder Cluster). Markiere jedes Wort, das du nicht lesen kannst, als [unleserlich], statt zu raten. 2) Gib eine Tabelle: Kartennummer, Text, die Gruppe oder Kategorie, in die sie gelegt wurde, und jeden Pfeil oder jede Linie, die sie mit einer anderen Karte verbindet. 3) Wenn die Aufgabe Items vorgegebenen Kategorien zuordnete ([Kategorien auflisten]), zähle für jedes Item, wie viele Zuordnungen in die vorgesehene Kategorie fallen. 4) Schlage erst danach eine kurze Bezeichnung für jedes Cluster vor und sage, welche Karten schlecht passen. Halte Beobachtung (Schritte 1–3) und Interpretation (Schritt 4) getrennt.
```

## Prüfung

Zählen Sie die Karten auf dem Board und in der Tabelle – die Zahlen müssen übereinstimmen – und vergleichen Sie fünf Transkriptionen Wort für Wort; jede [unleserlich]- oder falsch gelesene Karte ist ein Grund, neu zu fotografieren oder sie selbst einzutippen.

## Grenzen

- Handschrift, Blendung und überlappende Notizen führen zu Fehllesungen; Fotos können personenbezogene Daten enthalten (Gesichter, Namen, Handschrift), verwenden Sie daher nur Fotos, die Sie verarbeiten dürfen, und entfernen Sie identifizierende Angaben zuerst.
- Risiko: Personenbezogene oder sensible Daten oder Entscheidungen, die direkt in Ihre Ergebnisse einfließen.

## Wichtige Konzepte

- **Card Sorting (offen und geschlossen)** – Teilnehmende gruppieren Karten in Kategorien, die sie selbst bilden (offen), oder in vorgegebene (geschlossen). Dient dazu, mentale Modelle zu erkunden oder zu testen, ob Kategorien funktionieren; ausgewertet über Zuordnungshäufigkeiten und Cluster (Spencer, 2009).
- **Item-Sorting-Aufgabe** – Befragte ordnen jedes Item der Konstruktdefinition zu, zu der es passt. Der Anteil substanzieller Übereinstimmung (psa) und der Koeffizient substanzieller Validität (csv) markieren Items, die missverstanden werden, vor einem vollständigen Pretest (Anderson & Gerbing, 1991).
- **Visuelle Daten und Fotodaten** – Fotos von Boards sind Forschungsdaten: Sie brauchen ein Erfassungsprotokoll (Winkel, Licht, Beschriftung), eine Einwilligung, wo Personen oder Handschrift identifizierbar sind, und eine sichere Speicherung (Pain, 2012).
- **Transkription vor Interpretation** – Trennen Sie die wörtliche Aufzeichnung (was auf jeder Karte steht, wo) von Kodierung und Clusterbildung. So bleibt der Schritt prüfbar, und Fehllesungen der KI werden sichtbar.

## Wichtige Literatur

- Anderson, J. C., & Gerbing, D. W. (1991). Predicting the performance of measures in a confirmatory factor analysis with a pretest assessment of their substantive validities. Journal of Applied Psychology, 76(5), 732–740. https://doi.org/10.1037/0021-9010.76.5.732
- Pain, H. (2012). A literature review to evaluate the choice and use of visual methods. International Journal of Qualitative Methods, 11(4), 303–319. https://doi.org/10.1177/160940691201100401
- Spencer, D. (2009). Card sorting: Designing usable categories. Rosenfeld Media.
