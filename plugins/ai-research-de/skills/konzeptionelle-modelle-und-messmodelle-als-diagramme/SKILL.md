---
name: konzeptionelle-modelle-und-messmodelle-als-diagramme
description: "Verwandeln Sie Ihre Theorie in ein Diagramm eines konzeptionellen Modells oder Messmodells – Konstrukte, Pfade und bei Bedarf Fragebogen-Items – als bearbeitbaren draw.io- oder Figma-Inhalt, den Sie mit der Literatur aktualisieren, statt ihn neu zu zeichnen. Einsetzen bei: Konzeptionelle Modelle & Messmodelle als Diagramme."
---

# Konzeptionelle Modelle & Messmodelle als Diagramme

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/design-6

## Ziel

Verwandeln Sie Ihre Theorie in ein Diagramm eines konzeptionellen Modells oder Messmodells – Konstrukte, Pfade und bei Bedarf Fragebogen-Items – als bearbeitbaren draw.io- oder Figma-Inhalt, den Sie mit der Literatur aktualisieren, statt ihn neu zu zeichnen.

Ein bearbeitbares Modell als Code (Mermaid oder draw.io-XML) neben einer Konstrukt-Indikator-Tabelle – in Minuten aktualisiert, wenn sich die Literatur ändert, und konsistent über Abschlussarbeit, Folien und Befragung hinweg.

## Wann einsetzen

Konzeptionelle Modelle und Messmodelle werden in Folien- oder Zeichenprogrammen von Hand neu gezeichnet; jede neue Arbeit und jedes geänderte Konstrukt bedeutet Mehrarbeit, und das Diagramm driftet von Text und Item-Liste weg.

## Ablauf mit der Nutzerin oder dem Nutzer

Führen Sie durch diese Schritte. Wo ein Schritt „den Assistenten bitten“ nennt, sind Sie gemeint.

1. Beschreiben Sie die Konstrukte, ihre Definitionen und die erwarteten Pfade.
2. Bitten Sie den Assistenten um das Modell als Mermaid-Code, eine Tabelle jedes Pfeils mit seiner Grundlage und eine Konstrukt-Indikator-Tabelle.
3. Prüfen Sie jeden Pfeil und jeden Indikator in den Tabellen gegen Ihre Theorie und Quellen.
4. Optional: Fügen Sie den Code in draw.io ein (Arrange › Insert › Advanced), um das Diagramm zu sehen und zu bearbeiten.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.

## Typische Anfrage

```text
Ich promoviere in [Fach] und arbeite an [Forschungsfrage]. Meine Konstrukte sind: [Konstrukt – einzeilige Definition, für jedes]. Die erwarteten Beziehungen sind: [z. B. A erhöht B; C moderiert A→B]. 1) Zeichnen Sie das konzeptionelle Modell als Mermaid-Flussdiagramm-Code (von links nach rechts): Konstrukte als Knoten, vermutete Pfade als beschriftete Pfeile (H1, H2 …), Moderatoren als Pfeile, die auf einen Pfad zeigen. 2) Geben Sie eine Tabelle jedes Pfeils im Code: Beschriftung, von, nach und der Teil meiner Beschreibung, auf dem er beruht – oder „nicht in der Beschreibung“. 3) Wenn ich ein Messmodell möchte, ergänzen Sie für jedes Konstrukt, ob es reflektiv oder formativ ist, mit einer einzeiligen Begründung, und listen Sie 3–4 mögliche Indikatoren oder Fragebogen-Items je Konstrukt in einer Tabelle auf: Konstrukt, Indikator, Quelle oder „noch zu entwickeln“. Erfinden Sie keine veröffentlichten Skalen; wenn Sie eine bestehende Skala vorschlagen, sagen Sie, wie sicher Sie sich sind. 4) Listen Sie jeden Pfad auf, den meine Beschreibung nicht stützt.
```

## Prüfung

Jede Zeile der Pfeiltabelle entspricht Ihrer Beschreibung oder ist markiert, jeder Indikator spiegelt sein Konstrukt tatsächlich wider (oder bildet es), und jede genannte Skala existiert mit den Items, die der Assistent behauptet.

## Grenzen

- Der Assistent liefert das Modell als Code und als Tabellen, die Sie im Chat prüfen; um die Zeichnung zu sehen, fügen Sie den Code in draw.io oder einen anderen Mermaid-Viewer ein, und das direkte Zeichnen auf der Arbeitsfläche erfordert eine Verbindung, die Ihr Werkzeug und Ihre Hochschule erlauben müssen. Die Theorie hinter jedem Pfeil bleibt Ihre Argumentation.
- Risiko: Öffentliches oder eigenes, nicht sensibles Material; Fehler sind leicht zu erkennen.

## Wichtige Konzepte

- **Konzeptionelles Modell** – Zeigt Konstrukte und die vermuteten Beziehungen zwischen ihnen (direkte Pfade, Mediatoren, Moderatoren). Jeder Pfeil sollte einer ausgesprochenen Hypothese oder Annahme und ihrer theoretischen Begründung entsprechen.
- **Messmodell** – Verknüpft jedes latente Konstrukt mit seinen beobachteten Indikatoren (z. B. Fragebogen-Items). Konvention für Pfaddiagramme: latente Konstrukte als Ovale, Indikatoren als Rechtecke, Pfeile für angenommene Richtungen (Kline, 2016).
- **Reflektive versus formative Messung** – Reflektiv: Das Konstrukt verursacht seine Indikatoren, die korrelieren sollten und austauschbar sind. Formativ: Die Indikatoren bilden gemeinsam das Konstrukt und sind nicht austauschbar. Fehlspezifikation verzerrt die Schätzungen (Jarvis et al., 2003).
- **Konstrukt-Indikator-Zuordnung** – Eine Tabelle, die jede Konstruktdefinition mit ihren Items und deren Quelle verknüpft; die Grundlage für Inhaltsvalidität und die spätere CFA oder PLS-SEM (MacKenzie et al., 2011).
- **Modell als Code und fortlaufende Aktualisierung** – Wenn Sie das Diagramm als Text halten (Mermaid, draw.io-XML), lässt es sich versionieren und schnell neu erzeugen – im Sinne von Living Reviews, die aktualisiert werden, sobald neue Evidenz erscheint (Elliott et al., 2014).

## Wichtige Literatur

- Jarvis, C. B., MacKenzie, S. B., & Podsakoff, P. M. (2003). A critical review of construct indicators and measurement model misspecification in marketing and consumer research. Journal of Consumer Research, 30(2), 199–218. https://doi.org/10.1086/376806
- MacKenzie, S. B., Podsakoff, P. M., & Podsakoff, N. P. (2011). Construct measurement and validation procedures in MIS and behavioral research: Integrating new and existing techniques. MIS Quarterly, 35(2), 293–334. https://doi.org/10.2307/23044045
- Kline, R. B. (2016). Principles and practice of structural equation modeling (4th ed.). Guilford Press.
- Elliott, J. H., Turner, T., Clavisi, O., Thomas, J., Higgins, J. P. T., Mavergames, C., & Gruen, R. L. (2014). Living systematic reviews: An emerging opportunity to narrow the evidence-practice gap. PLoS Medicine, 11(2), e1001603. https://doi.org/10.1371/journal.pmed.1001603

## Hilfreiche Werkzeuge

draw.io · Figma
