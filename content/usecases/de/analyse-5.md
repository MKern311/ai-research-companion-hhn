---
id: analyse-5
phase: analyse
order: 5
title: Visualisierung
risk: 1
mode: Co-create
potential: 2
capabilities: generierung
routes: files; external
tools: GitHub Copilot
repos: kd-viz
data: D3
practice_data: D3
---

Diagrammvorschläge und publikationsreife Abbildungen als reproduzierbaren Code erstellen.

## Problem

Standarddiagramme erfüllen selten die Richtlinien von Zeitschriften, verbergen oft Unsicherheit oder nutzen irreführende Farbskalen, und jede Abbildung für jede Überarbeitung von Hand anzupassen ist langsam und nicht wiederholbar.

## Ergebnis

Eine publikationsreife Abbildung, erzeugt durch Code, den Sie behalten, mit einer Kodierung und Palette, die auf genaue Wahrnehmung ausgelegt sind – eine Überarbeitung bedeutet dann, ein Skript erneut auszuführen, statt neu zu zeichnen.

## Vorgehen

1. Die zentrale Aussage der Abbildung und das Publikum festlegen
2. Die Kodierung wählen, die den Kernvergleich am leichtesten macht
3. Unsicherheit zeigen und eine farbenblindheitssichere Palette verwenden
4. Größe, Schriften und Auflösung nach den Zeitschriftenregeln einstellen
5. Den Code neben den Daten speichern

## Konzepte

### Wahrnehmungsrangfolge nach Cleveland & McGill

Menschen beurteilen die Position auf einer gemeinsamen Skala am genauesten, danach Länge, Winkel und Steigung, Fläche und zuletzt Farbe und Schattierung. Kodieren Sie den wichtigsten Vergleich als Position; vermeiden Sie Kreisdiagramme und 3D-Effekte, wenn es auf genaue Vergleiche ankommt.

### Data-Ink-Ratio

Tuftes Prinzip, dass der größte Teil der Tinte einer Grafik Daten zeigen sollte: Entfernen Sie kräftige Gitterlinien, Rahmen, Schatten und überflüssige Beschriftungen, behalten Sie aber Achsen, Einheiten und Unsicherheit.

### Wahrnehmungsgleichmäßige, für Farbsehschwächen geeignete Paletten

Farbskalen wie viridis oder Crameris wissenschaftliche Farbskalen verändern die Helligkeit gleichmäßig und bleiben auch bei Farbsehschwäche lesbar (Crameri et al., 2020); Regenbogenskalen („jet“) erzeugen falsche Grenzen und sollten vermieden werden.

### Unsicherheit zeigen

Stellen Sie Intervalle – Konfidenz- oder Kredibilitätsbänder, Fehlerbalken – zusammen mit der Schätzung dar und geben Sie in der Legende an, was sie darstellen (zum Beispiel ein 95-%-Konfidenzintervall), damit Leserinnen und Leser kleine Unterschiede nicht überinterpretieren.

## Literatur

- Cleveland, W. S., & McGill, R. (1984). Graphical perception: Theory, experimentation, and application to the development of graphical methods. Journal of the American Statistical Association, 79(387), 531–554. doi:10.1080/01621459.1984.10478080
- Tufte, E. R. (2001). The visual display of quantitative information (2nd ed.). Graphics Press.
- Rougier, N. P., Droettboom, M., & Bourne, P. E. (2014). Ten simple rules for better figures. PLoS Computational Biology, 10(9), e1003833. doi:10.1371/journal.pcbi.1003833
- Crameri, F., Shephard, G. E., & Heron, P. J. (2020). The misuse of colour in science communication. Nature Communications, 11, 5444. doi:10.1038/s41467-020-19160-7

## Übung

### Aufgabe

Zeichnen Sie die jährlichen HadCRUT5-Anomalien mit ihrem 95-%-Konfidenzband als Zeitschriftenabbildung. Sie erfahren, ob der Assistent Jahreswerte korrekt berechnet, die Unsicherheitsspalten verwendet, das unvollständige Jahr ausschließt und die Vorgaben zu Größe und Palette einhält.

### Prompt

```text
Ich brauche eine publikationsreife Abbildung für ein Kapitel meiner Abschlussarbeit. Angehängt ist die monatliche HadCRUT5-CSV mit den Spalten Time, Anomaly (deg C) sowie der unteren und oberen 95-%-Konfidenzgrenze. Die Abbildung soll zeigen, wie sich die globale Temperatur seit 1850 verändert hat und wie unsicher die frühen Werte sind. Schlagen Sie zwei oder drei geeignete Diagrammtypen mit je einer Zeile vor. Erstellen Sie dann den besten davon in Python (matplotlib): Jahresmittel nur für vollständige Jahre, die Anomalie als Linie und die Konfidenzgrenzen als schattiertes Band, Achsenbeschriftungen mit Einheiten und der Baseline 1961–1990, eine farbenblindheitssichere Palette, keine unnötige Dekoration, 17 cm breit bei 300 dpi. Sagen Sie, ob der Mittelwert der monatlichen Konfidenzgrenzen ein gültiges Jahresintervall ergibt und was Sie stattdessen verwenden würden. Zeigen Sie den vollständigen Code und einen Entwurf der Abbildungsunterschrift.
```

### Prüfung

Das letzte dargestellte Jahr ist 2025, nicht das unvollständige 2026; 2024 liegt bei etwa 1.17 °C (in Excel prüfen). Gemittelte monatliche Grenzen sind nur eine Näherung und breiter als die offizielle Jahresreihe des Met Office (für 1850 etwa −0.70 bis −0.15 °C gegenüber −0.60 bis −0.25 °C); der Assistent sollte Sie für eine veröffentlichte Abbildung auf diese Jahresreihe verweisen. Drucken Sie die Abbildung in Graustufen aus, um die Lesbarkeit zu testen.

## Mit eigenem Material

### Mitbringen

Ein kleiner öffentlicher oder Dummy-Datensatz als CSV oder Excel und eine grobe Vorstellung von der Aussage, die die Abbildung zeigen soll.

### Schritte

1. Hängen Sie die Daten an und fügen Sie den Startprompt mit Ihrer Aussage und Ihrem Publikum ein.
2. Wählen Sie einen der vorgeschlagenen Diagrammtypen und bitten Sie den Assistenten, ihn zu zeichnen.
3. Bitten Sie um Änderungen an Beschriftungen, Farben oder Größe, um die Abbildungsrichtlinien Ihrer Zeitschrift zu erfüllen.
4. Speichern Sie den endgültigen Python-Code neben Ihren Daten.

### Prompt

```text
Ich brauche eine publikationsreife Abbildung für [einen Zeitschriftenartikel oder ein Kapitel meiner Abschlussarbeit] im Fach [Disziplin]. Die angehängte Datei enthält [Variablen]. Die Abbildung soll zeigen, [Aussage, z. B. wie sich X im Zeitverlauf nach Gruppen verändert hat]. Schlagen Sie zwei oder drei geeignete Diagrammtypen mit je einer Zeile vor. Erstellen Sie dann den besten davon in Python (matplotlib), mit klaren Achsenbeschriftungen einschließlich Einheiten, einer farbenblindheitssicheren Palette, ohne unnötige Dekoration und mit einer Größe von [z. B. 17 cm Breite] bei 300 dpi. Zeigen Sie den vollständigen Code, damit ich ihn reproduzieren kann.
```

### Prüfung

Zwei oder drei dargestellte Werte stimmen mit den Daten überein, und die Abbildung bleibt in Graustufen und in ihrer gedruckten Größe lesbar.

## Technik

Laden Sie die Daten in Ihren KI-Assistenten hoch; kann er Code ausführen, zeichnet er die Abbildung in Python mit matplotlib und gibt Bild und Code zurück. Wenn Sie in R arbeiten, bitten Sie um ggplot2-Code und führen Sie ihn selbst aus.

## Stufen

### Chat

Führen Sie den Startprompt mit der angehängten HadCRUT5-CSV aus. Bitten Sie danach im selben Chat um eine Graustufenversion und ein zweites Panel ab 1950 in gleicher Größe und gleichem Stil.

### Projekt / Notebook

Fügen Sie die HadCRUT5-Datei (D3; speichern Sie sie als .xlsx oder .txt, wenn Ihr Werkzeug keine CSV-Dateien akzeptiert) mit den Abbildungsrichtlinien Ihrer Zeitschrift (PDF oder Word) und dem Code bereits akzeptierter Abbildungen (.txt) hinzu. Fragen Sie, welche Punkte der Richtlinien Ihre aktuelle Abbildung noch verfehlt. Richtlinien und Abbildungscode bleiben beieinander, sodass jede Abbildung der Abschlussarbeit denselben Regeln folgt.

### Eigener Assistent

Erstellen Sie einen konfigurierten Assistenten (z. B. einen Copilot-Agenten, einen Custom GPT, ein Gemini Gem oder ein Claude-Projekt). Schreiben Sie in seine dauerhaften Anweisungen Ihren Hausstil: Schriftart und -größe, farbenblindheitssichere Palette, Breite und Auflösung, Achsenbeschriftungen mit Einheiten, nur vollständige Zeiträume, Unsicherheit dort zeigen, wo die Daten es erlauben, und „immer den vollständigen Code und einen Entwurf der Abbildungsunterschrift zurückgeben“. Fügen Sie die Abbildungsrichtlinien der Zeitschrift als Wissensdatei hinzu (unterstützt Ihr Werkzeug keine Wissensdateien, hängen Sie sie im Chat an) und schalten Sie Codeausführung bzw. Datenanalyse ein, wenn Ihr Werkzeug sie anbietet. Startprompt: „Zeichnen Sie diese Daten als Zeitschriftenabbildung in meinem Hausstil.“ Wiederverwendbar für jedes Kapitel.
