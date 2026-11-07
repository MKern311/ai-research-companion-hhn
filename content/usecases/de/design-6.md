---
id: design-6
phase: design
order: 6
title: Konzeptionelle Modelle & Messmodelle als Diagramme
risk: 1
mode: Co-create
potential: 3
capabilities: generierung; synthese
routes: chat; files; connected; external
connect: draw.io; Figma
repos: seminr; lavaan
data: A3; D3; D5
practice_data: A3; D3; D5
---

Verwandeln Sie Ihre Theorie in ein Diagramm eines konzeptionellen Modells oder Messmodells – Konstrukte, Pfade und bei Bedarf Fragebogen-Items – als bearbeitbaren draw.io- oder Figma-Inhalt, den Sie mit der Literatur aktualisieren, statt ihn neu zu zeichnen.

## Problem

Konzeptionelle Modelle und Messmodelle werden in Folien- oder Zeichenprogrammen von Hand neu gezeichnet; jede neue Arbeit und jedes geänderte Konstrukt bedeutet Mehrarbeit, und das Diagramm driftet von Text und Item-Liste weg.

## Ergebnis

Ein bearbeitbares Modell als Code (Mermaid oder draw.io-XML) neben einer Konstrukt-Indikator-Tabelle – in Minuten aktualisiert, wenn sich die Literatur ändert, und konsistent über Abschlussarbeit, Folien und Befragung hinweg.

## Vorgehen

1. Schreiben Sie jedes Konstrukt mit einer einzeiligen Definition und den erwarteten Pfaden auf
2. Erzeugen Sie das Diagramm als Mermaid oder draw.io-XML und eine Konstrukt-Indikator-Tabelle
3. Entscheiden Sie für jedes Konstrukt zwischen reflektiver und formativer Messung
4. Speichern Sie den Code in Ihrem Projekt und erzeugen Sie ihn neu, wenn sich die Evidenz ändert
5. Prüfen Sie jeden Pfeil gegen Ihre Theorie und jedes Item gegen seine Quelle

## Konzepte

### Konzeptionelles Modell

Zeigt Konstrukte und die vermuteten Beziehungen zwischen ihnen (direkte Pfade, Mediatoren, Moderatoren). Jeder Pfeil sollte einer ausgesprochenen Hypothese oder Annahme und ihrer theoretischen Begründung entsprechen.

### Messmodell

Verknüpft jedes latente Konstrukt mit seinen beobachteten Indikatoren (z. B. Fragebogen-Items). Konvention für Pfaddiagramme: latente Konstrukte als Ovale, Indikatoren als Rechtecke, Pfeile für angenommene Richtungen (Kline, 2016).

### Reflektive versus formative Messung

Reflektiv: Das Konstrukt verursacht seine Indikatoren, die korrelieren sollten und austauschbar sind. Formativ: Die Indikatoren bilden gemeinsam das Konstrukt und sind nicht austauschbar. Fehlspezifikation verzerrt die Schätzungen (Jarvis et al., 2003).

### Konstrukt-Indikator-Zuordnung

Eine Tabelle, die jede Konstruktdefinition mit ihren Items und deren Quelle verknüpft; die Grundlage für Inhaltsvalidität und die spätere CFA oder PLS-SEM (MacKenzie et al., 2011).

### Modell als Code und fortlaufende Aktualisierung

Wenn Sie das Diagramm als Text halten (Mermaid, draw.io-XML), lässt es sich versionieren und schnell neu erzeugen – im Sinne von Living Reviews, die aktualisiert werden, sobald neue Evidenz erscheint (Elliott et al., 2014).

## Literatur

- Jarvis, C. B., MacKenzie, S. B., & Podsakoff, P. M. (2003). A critical review of construct indicators and measurement model misspecification in marketing and consumer research. Journal of Consumer Research, 30(2), 199–218. doi:10.1086/376806
- MacKenzie, S. B., Podsakoff, P. M., & Podsakoff, N. P. (2011). Construct measurement and validation procedures in MIS and behavioral research: Integrating new and existing techniques. MIS Quarterly, 35(2), 293–334. doi:10.2307/23044045
- Kline, R. B. (2016). Principles and practice of structural equation modeling (4th ed.). Guilford Press.
- Elliott, J. H., Turner, T., Clavisi, O., Thomas, J., Higgins, J. P. T., Mavergames, C., & Gruen, R. L. (2014). Living systematic reviews: An emerging opportunity to narrow the evidence-practice gap. PLoS Medicine, 11(2), e1001603. doi:10.1371/journal.pmed.1001603

## Übung

### Aufgabe

Bauen Sie die Kausalkette hinter den jährlichen Klimaindikatoren aus Forster et al. (2025) als Diagrammcode auf, mit einer Tabelle jedes Pfeils und des Abschnitts, aus dem er stammt, und ordnen Sie die beiden Übungsdateien den Konstrukten zu, die sie messen. Im Chat sehen Sie, ob der Assistent bei der Kette der Arbeit bleibt oder eigene Pfeile ergänzt.

### Prompt

```text
Angehängt ist Forster et al. (2025), „Indicators of Global Climate Change 2024“, dazu die monatliche HadCRUT5-CSV und die NOAA-Mauna-Loa-CO₂-CSV. 1) Zeichne ausschließlich anhand der Arbeit die Kette der Indikatoren, die sie berichtet – von Emissionen über Konzentrationen und effektiven Strahlungsantrieb bis zur beobachteten und menschengemachten Erwärmung – als Mermaid-Flussdiagramm-Code (von links nach rechts), jeden Pfeil beschriftet mit dem Abschnitt der Arbeit, aus dem er stammt. 2) Gib eine Tabelle jedes Pfeils im Code: Nummer, von, nach, Abschnitt der Arbeit (Nummer und Titel) und ein kurzes Zitat aus diesem Abschnitt, das den Pfeil stützt. 3) Ergänze eine Messebene: welche Spalte jeder angehängten Datendatei welches Konstrukt misst, und mit welcher Einheit und Basisperiode. 4) Liste jeden Pfeil und jedes Konstrukt auf, die du ergänzt hast und die nicht in der Arbeit stehen.
```

### Prüfung

Prüfen Sie die Pfeiltabelle im Chat: Öffnen Sie jeden genannten Abschnitt im PDF, suchen Sie das Zitat und vergleichen Sie die Kette mit Abbildung 1 der Arbeit (das Flussdiagramm von Emissionen zur menschengemachten Erwärmung); Aerosole und andere Nicht-CO₂-Antriebe müssen vorkommen, wenn der Assistent Vollständigkeit behauptet. Keine der beiden Dateien nennt ihre Basisperiode, und die CO₂-Datei nennt ihre Einheit nicht: HadCRUT5 „Anomaly (deg C)“ bezieht sich auf 1961–1990 (nicht in der Datei), und die CO₂-Spalte „average“ ist in ppm (nicht in der Datei); der Assistent sollte also sagen, woher er sie hat. Optional: Fügen Sie den Mermaid-Code in draw.io ein (Arrange › Insert › Advanced), um das Diagramm zu sehen.

## Mit eigenem Material

### Mitbringen

Ihre Forschungsfrage mit drei bis sechs Konstrukten und den erwarteten Beziehungen – oder für die Übungsversion die Arbeit von Forster et al. (2025) und zwei Datendateien.

### Schritte

1. Beschreiben Sie die Konstrukte, ihre Definitionen und die erwarteten Pfade.
2. Bitten Sie den Assistenten um das Modell als Mermaid-Code, eine Tabelle jedes Pfeils mit seiner Grundlage und eine Konstrukt-Indikator-Tabelle.
3. Prüfen Sie jeden Pfeil und jeden Indikator in den Tabellen gegen Ihre Theorie und Quellen.
4. Optional: Fügen Sie den Code in draw.io ein (Arrange › Insert › Advanced), um das Diagramm zu sehen und zu bearbeiten.

### Prompt

```text
Ich promoviere in [Fach] und arbeite an [Forschungsfrage]. Meine Konstrukte sind: [Konstrukt – einzeilige Definition, für jedes]. Die erwarteten Beziehungen sind: [z. B. A erhöht B; C moderiert A→B]. 1) Zeichne das konzeptionelle Modell als Mermaid-Flussdiagramm-Code (von links nach rechts): Konstrukte als Knoten, vermutete Pfade als beschriftete Pfeile (H1, H2 …), Moderatoren als Pfeile, die auf einen Pfad zeigen. 2) Gib eine Tabelle jedes Pfeils im Code: Beschriftung, von, nach und der Teil meiner Beschreibung, auf dem er beruht – oder „nicht in der Beschreibung“. 3) Wenn ich ein Messmodell möchte, ergänze für jedes Konstrukt, ob es reflektiv oder formativ ist, mit einer einzeiligen Begründung, und liste 3–4 mögliche Indikatoren oder Fragebogen-Items je Konstrukt in einer Tabelle auf: Konstrukt, Indikator, Quelle oder „noch zu entwickeln“. Erfinde keine veröffentlichten Skalen; wenn du eine bestehende Skala vorschlägst, sage, wie sicher du dir bist. 4) Liste jeden Pfad auf, den meine Beschreibung nicht stützt.
```

### Prüfung

Jede Zeile der Pfeiltabelle entspricht Ihrer Beschreibung oder ist markiert, jeder Indikator spiegelt sein Konstrukt tatsächlich wider (oder bildet es), und jede genannte Skala existiert mit den Items, die der Assistent behauptet.

### Grenze

Der Assistent liefert das Modell als Code und als Tabellen, die Sie im Chat prüfen; um die Zeichnung zu sehen, fügen Sie den Code in draw.io oder einen anderen Mermaid-Viewer ein, und das direkte Zeichnen auf der Arbeitsfläche erfordert eine Verbindung, die Ihr Tool und Ihre Hochschule erlauben müssen. Die Theorie hinter jedem Pfeil bleibt Ihre Argumentation.

## Technik

Ihr KI-Assistent schreibt Mermaid oder draw.io-XML, das Sie in draw.io importieren (Arrange › Insert › Advanced). Wenn der MCP-Server von draw.io oder Figma verbunden ist – sofern Ihr Tool MCP-Konnektoren unterstützt und Ihre Hochschule es erlaubt –, kann der Assistent das Diagramm direkt erstellen und aktualisieren.

## Stufen

### Chat

Führen Sie den Startprompt aus, um den Mermaid-Code und die Tabelle jedes Pfeils mit seiner Quelle zu erhalten. Fügen Sie im selben Chat einen Pfad hinzu oder entfernen Sie einen und bitten Sie um den aktualisierten Code und die Pfeiltabelle, damit Sie sehen, dass sich das Modell ändert, ohne neu gezeichnet zu werden.

### Projekt / Notebook

Fügen Sie die Schlüsselarbeiten hinter Ihren Konstrukten, Ihre Konstruktdefinitionen und den aktuellen Modellcode als .txt-Datei hinzu – für die Übungsversion A3 sowie D3 und D5, vorher als .xlsx gespeichert. Fragen Sie, welche Pfeile die Arbeiten stützen und was eine neu hinzugefügte Arbeit ändert. Wenn die Literatur weiterzieht, aktualisieren Sie das Modell aus denselben Quellen.

### Eigener Assistent

Nennen Sie ihn „Modelldiagramm-Bauer“. Anweisungen: Mermaid-Flussdiagramm von links nach rechts, Pfade mit H1, H2 … beschriftet, immer eine Tabelle jedes Pfeils mit seiner Quelle und eine Konstrukt-Indikator-Tabelle, reflektiv oder formativ mit Begründung, nie veröffentlichte Skalen erfinden, jeden Pfad markieren, der nicht in der Eingabe steht. Wissen: Ihre Konstruktdefinitionen und Theorienotizen. Startprompt: „Aktualisiere mein Modell: [Änderung]“. Wiederverwendbar für Abschlussarbeit, Folien und Befragung.

### Automatisierung / eigener Code

Fügen Sie den MCP-Server von draw.io oder Figma einem eigenen Assistenten oder Workflow hinzu, damit der Assistent das Diagramm auf der Arbeitsfläche zeichnet und aktualisiert, statt Code zu liefern, den Sie einfügen. Dafür braucht es ein Tool, das MCP-Konnektoren unterstützt. Auf GitHub: Halten Sie das Diagramm als Mermaid-Code in einem Repository – GitHub stellt es dar, und jede Änderung bleibt in der Historie sichtbar. Prüfen Sie vorher Datenschutz und Freigabe mit Ihrer Hochschule.
