---
name: visualisierung
description: "Diagrammvorschläge und publikationsreife Abbildungen als reproduzierbaren Code erstellen. Einsetzen bei: Visualisierung."
---

# Visualisierung

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/analyse-5

## Ziel

Diagrammvorschläge und publikationsreife Abbildungen als reproduzierbaren Code erstellen.

Eine publikationsreife Abbildung, erzeugt durch Code, den Sie behalten, mit einer Kodierung und Palette, die auf genaue Wahrnehmung ausgelegt sind – eine Überarbeitung bedeutet dann, ein Skript erneut auszuführen, statt neu zu zeichnen.

## Wann einsetzen

Standarddiagramme erfüllen selten die Richtlinien von Zeitschriften, verbergen oft Unsicherheit oder nutzen irreführende Farbskalen, und jede Abbildung für jede Überarbeitung von Hand anzupassen ist langsam und nicht wiederholbar.

## Ablauf mit der Nutzerin oder dem Nutzer

Führen Sie durch diese Schritte. Wo ein Schritt „den Assistenten bitten“ nennt, sind Sie gemeint.

1. Hängen Sie die Daten an und fügen Sie den Startprompt mit Ihrer Aussage und Ihrem Publikum ein.
2. Wählen Sie einen der vorgeschlagenen Diagrammtypen und bitten Sie den Assistenten, ihn zu zeichnen.
3. Bitten Sie um Änderungen an Beschriftungen, Farben oder Größe, um die Abbildungsrichtlinien Ihrer Zeitschrift zu erfüllen.
4. Speichern Sie den endgültigen Python-Code neben Ihren Daten.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.

## Typische Anfrage

```text
Ich brauche eine publikationsreife Abbildung für [einen Zeitschriftenartikel oder ein Kapitel meiner Abschlussarbeit] im Fach [Disziplin]. Die angehängte Datei enthält [Variablen]. Die Abbildung soll zeigen, [Aussage, z. B. wie sich X im Zeitverlauf nach Gruppen verändert hat]. Schlagen Sie zwei oder drei geeignete Diagrammtypen mit je einer Zeile vor. Erstellen Sie dann den besten davon in Python (matplotlib), mit klaren Achsenbeschriftungen einschließlich Einheiten, einer farbenblindheitssicheren Palette, ohne unnötige Dekoration und mit einer Größe von [z. B. 17 cm Breite] bei 300 dpi. Zeigen Sie den vollständigen Code, damit ich ihn reproduzieren kann.
```

## Prüfung

Zwei oder drei dargestellte Werte stimmen mit den Daten überein, und die Abbildung bleibt in Graustufen und in ihrer gedruckten Größe lesbar.

## Grenzen

- Risiko: Öffentliches oder eigenes, nicht sensibles Material; Fehler sind leicht zu erkennen.

## Wichtige Konzepte

- **Wahrnehmungsrangfolge nach Cleveland & McGill** – Menschen beurteilen die Position auf einer gemeinsamen Skala am genauesten, danach Länge, Winkel und Steigung, Fläche und zuletzt Farbe und Schattierung. Kodieren Sie den wichtigsten Vergleich als Position; vermeiden Sie Kreisdiagramme und 3D-Effekte, wenn es auf genaue Vergleiche ankommt.
- **Data-Ink-Ratio** – Tuftes Prinzip, dass der größte Teil der Tinte einer Grafik Daten zeigen sollte: Entfernen Sie kräftige Gitterlinien, Rahmen, Schatten und überflüssige Beschriftungen, behalten Sie aber Achsen, Einheiten und Unsicherheit.
- **Wahrnehmungsgleichmäßige, für Farbsehschwächen geeignete Paletten** – Farbskalen wie viridis oder Crameris wissenschaftliche Farbskalen verändern die Helligkeit gleichmäßig und bleiben auch bei Farbsehschwäche lesbar (Crameri et al., 2020); Regenbogenskalen („jet“) erzeugen falsche Grenzen und sollten vermieden werden.
- **Unsicherheit zeigen** – Stellen Sie Intervalle – Konfidenz- oder Kredibilitätsbänder, Fehlerbalken – zusammen mit der Schätzung dar und geben Sie in der Legende an, was sie darstellen (zum Beispiel ein 95-%-Konfidenzintervall), damit Leserinnen und Leser kleine Unterschiede nicht überinterpretieren.

## Wichtige Literatur

- Cleveland, W. S., & McGill, R. (1984). Graphical perception: Theory, experimentation, and application to the development of graphical methods. Journal of the American Statistical Association, 79(387), 531–554. https://doi.org/10.1080/01621459.1984.10478080
- Tufte, E. R. (2001). The visual display of quantitative information (2nd ed.). Graphics Press.
- Rougier, N. P., Droettboom, M., & Bourne, P. E. (2014). Ten simple rules for better figures. PLoS Computational Biology, 10(9), e1003833. https://doi.org/10.1371/journal.pcbi.1003833
- Crameri, F., Shephard, G. E., & Heron, P. J. (2020). The misuse of colour in science communication. Nature Communications, 11, 5444. https://doi.org/10.1038/s41467-020-19160-7

## Hilfreiche Werkzeuge

GitHub Copilot
