---
name: praesentationen-und-visualisierungen
description: "Entwerfen Sie aus Ergebnissen Folien, Poster, Infografiken und erklärende Grafiken. Einsetzen bei: Präsentationen & Visualisierungen."
---

# Präsentationen & Visualisierungen

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/transfer-1

## Ziel

Entwerfen Sie aus Ergebnissen Folien, Poster, Infografiken und erklärende Grafiken.

Eine beschriftete, farbsichere Grafik mit dem Python-Code dahinter, sodass Sie sie reproduzieren und prüfen können, und eine Gliederung aus sechs Folien mit Assertion-Evidence-Titeln.

## Wann einsetzen

Ergebnisse in eine klare Grafik und einen Vortrag zu verwandeln braucht viele Durchgänge, und Folien führen oft Themen auf, statt Aussagen zu formulieren, die visuelle Evidenz stützt.

## Ablauf mit der Nutzerin oder dem Nutzer

Führen Sie durch diese Schritte. Wo ein Schritt „den Assistenten bitten“ nennt, sind Sie gemeint.

1. Hängen Sie die Ergebnistabelle an und bitten Sie um eine klare Grafik des Hauptergebnisses.
2. Bitten Sie den Assistenten, den für die Grafik verwendeten Python-Code zu zeigen.
3. Fügen Sie Ihre zentralen Befunde ein und bitten Sie um eine Gliederung aus sechs Folien.
4. Prüfen Sie zwei Datenpunkte der Grafik gegen Ihre Tabelle.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.

## Typische Anfrage

```text
Ich präsentiere meine Forschung vor [Zielgruppe] in einem [10-minütigen] Vortrag. Angehängt ist eine Ergebnistabelle [Dateiname]; meine zentralen Befunde lauten: [Befunde einfügen]. 1) Erstellen Sie eine klare Grafik von [Variable] nach [Gruppe] mit beschrifteten Achsen, Einheiten und einem kurzen Titel und zeigen Sie den verwendeten Python-Code. 2) Entwerfen Sie eine Gliederung aus sechs Folien: Jeder Folientitel ist eine Kernaussage in einem ganzen Satz, mit bis zu drei Stichpunkten und einem Hinweis, welche Visualisierung zu verwenden ist. Verwenden Sie nur die Zahlen aus der Datei und meine Befunde; fragen Sie mich, wenn eine Spalte unklar ist.
```

## Prüfung

Zwei oder drei Werte in der Grafik stimmen genau mit Ihrer Tabelle überein, und die Folientitel sagen, was Ihre Befunde tatsächlich zeigen.

## Grenzen

- Der Assistent entwirft die Grafik und die Foliengliederung; die endgültigen Folien oder das Poster bauen Sie selbst in PowerPoint oder Ihrem Foliensystem.
- Risiko: Eigene unveröffentlichte Entwürfe, Gutachten oder Inhalte Dritter.

## Wichtige Konzepte

- **Assertion-Evidence-Folienstruktur** – Jede Folienüberschrift ist eine Aussage in einem ganzen Satz, und der Folienkörper ist visuelle Evidenz dafür (Grafik, Bild, Diagramm) statt einer Aufzählung. Garner, Alley und Kollegen (2011) fanden besseres Verständnis und besseres Behalten komplexer Konzepte als bei Folien mit Thema und Aufzählungspunkten.
- **Data-Ink-Ratio** – Tuftes Prinzip: den Anteil der Tinte maximieren, der Daten zeigt, und Dekoration entfernen – kräftige Gitternetzlinien, 3D-Effekte, redundante Beschriftungen, „Chartjunk“.
- **Für Farbsehschwächen geeignete, wahrnehmungsgleichförmige Farbskalen** – Regenbogen-Farbskalen („jet“) verzerren Daten und schließen Lesende mit Farbsehschwäche aus. Nutzen Sie wahrnehmungsgleichförmige Skalen wie viridis oder wissenschaftliche Farbskalen (Crameri et al. 2020), und kodieren Sie Bedeutung nie allein durch Farbe.
- **Reproduzierbare Abbildungen (Reproducible figures)** – Erzeugen Sie jede Grafik per Code aus der Datendatei und halten Sie Code und Daten zusammen, sodass sich Werte prüfen und die Abbildung nach Änderungen neu erzeugen lässt (Rougier et al. 2014).

## Wichtige Literatur

- Garner, J., Alley, M., Wolfe, K., Zappe, S., & Sawarynski, L. (2011). Assertion-evidence slides appear to lead to better comprehension and recall of more complex concepts. In 2011 ASEE Annual Conference & Exposition Proceedings. ASEE. https://doi.org/10.18260/1-2--17510
- Crameri, F., Shephard, G. E., & Heron, P. J. (2020). The misuse of colour in science communication. Nature Communications, 11, 5444. https://doi.org/10.1038/s41467-020-19160-7
- Rougier, N. P., Droettboom, M., & Bourne, P. E. (2014). Ten simple rules for better figures. PLOS Computational Biology, 10(9), e1003833. https://doi.org/10.1371/journal.pcbi.1003833
- Tufte, E. R. (2001). The visual display of quantitative information (2nd ed.). Graphics Press.

## Hilfreiche Werkzeuge

Napkin AI
