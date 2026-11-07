---
id: transfer-1
phase: transfer
order: 1
title: Präsentationen & Visualisierungen
risk: 2
mode: Co-create
potential: 3
capabilities: generierung
routes: files; connected; external
connect: Napkin AI
tools: Napkin AI
repos: kd-viz
data: D8
practice_data: D8
---

Entwerfen Sie aus Ergebnissen Folien, Poster, Infografiken und erklärende Grafiken.

## Problem

Ergebnisse in eine klare Grafik und einen Vortrag zu verwandeln braucht viele Durchgänge, und Folien führen oft Themen auf, statt Aussagen zu formulieren, die visuelle Evidenz stützt.

## Ergebnis

Eine beschriftete, farbsichere Grafik mit dem Python-Code dahinter, sodass Sie sie reproduzieren und prüfen können, und eine Gliederung aus sechs Folien mit Assertion-Evidence-Titeln.

## Vorgehen

1. Laden Sie die Datendatei hoch und bitten Sie um eine Grafik
2. Bitten Sie um den Python-Code und führen Sie ihn erneut aus oder prüfen Sie ihn
3. Nutzen Sie eine für Farbsehschwächen geeignete Palette; beschriften Sie Achsen mit Einheiten
4. Entwerfen Sie sechs Folien mit Assertion-Titeln als ganzen Sätzen
5. Prüfen Sie zwei dargestellte Werte gegen die Daten

## Konzepte

### Assertion-Evidence-Folienstruktur

Jede Folienüberschrift ist eine Aussage in einem ganzen Satz, und der Folienkörper ist visuelle Evidenz dafür (Grafik, Bild, Diagramm) statt einer Aufzählung. Garner, Alley und Kollegen (2011) fanden besseres Verständnis und besseres Behalten komplexer Konzepte als bei Folien mit Thema und Aufzählungspunkten.

### Data-Ink-Ratio

Tuftes Prinzip: den Anteil der Tinte maximieren, der Daten zeigt, und Dekoration entfernen – kräftige Gitternetzlinien, 3D-Effekte, redundante Beschriftungen, „Chartjunk“.

### Für Farbsehschwächen geeignete, wahrnehmungsgleichförmige Farbskalen

Regenbogen-Farbskalen („jet“) verzerren Daten und schließen Lesende mit Farbsehschwäche aus. Nutzen Sie wahrnehmungsgleichförmige Skalen wie viridis oder wissenschaftliche Farbskalen (Crameri et al. 2020), und kodieren Sie Bedeutung nie allein durch Farbe.

### Reproduzierbare Abbildungen (Reproducible figures)

Erzeugen Sie jede Grafik per Code aus der Datendatei und halten Sie Code und Daten zusammen, sodass sich Werte prüfen und die Abbildung nach Änderungen neu erzeugen lässt (Rougier et al. 2014).

## Literatur

- Garner, J., Alley, M., Wolfe, K., Zappe, S., & Sawarynski, L. (2011). Assertion-evidence slides appear to lead to better comprehension and recall of more complex concepts. In 2011 ASEE Annual Conference & Exposition Proceedings. ASEE. doi:10.18260/1-2--17510
- Crameri, F., Shephard, G. E., & Heron, P. J. (2020). The misuse of colour in science communication. Nature Communications, 11, 5444. doi:10.1038/s41467-020-19160-7
- Rougier, N. P., Droettboom, M., & Bourne, P. E. (2014). Ten simple rules for better figures. PLOS Computational Biology, 10(9), e1003833. doi:10.1371/journal.pcbi.1003833
- Tufte, E. R. (2001). The visual display of quantitative information (2nd ed.). Graphics Press.

## Übung

### Aufgabe

Stellen Sie die Winter- und Sommerniederschläge im Vereinigten Königreich aus der nationalen Reihe des Met Office dar und gliedern Sie einen kurzen Vortrag. Sie lernen, ob der Assistent eine breite Datei mit unvollständiger letzter Zeile einliest, weiß, welche Monate jede Jahreszeit umfasst, und seine Folienaussagen innerhalb dessen hält, was die Daten zeigen.

### Prompt

```text
Angehängt ist die Niederschlags-Textdatei des Met Office für das Vereinigte Königreich (HadUK-Grid-Flächenreihe: monatliche, saisonale und jährliche Summen in mm). 1) Lies sie mit Python ein. Die letzte Zeile ist ein unvollständiges Jahr, und manche Zellen sind leer oder „---“: Sage, wie du damit umgegangen bist und welche Monate jede Jahreszeit umfasst. 2) Erstelle eine klare Grafik der Winter- (win) und Sommerniederschläge (sum) pro Jahr, jeweils mit einem gleitenden 10-Jahres-Mittel, mit beschrifteten Achsen, Einheiten, einer für Farbsehschwächen geeigneten Palette und einem kurzen Titel. Zeige den Python-Code. 3) Gib die mittleren Winter- und Sommerniederschläge für 1961–1990 und 1991–2020 an. 4) Entwirf eine Gliederung aus sechs Folien für einen 10-minütigen Vortrag vor Promovierenden: jeder Titel eine Aussage in einem ganzen Satz, bis zu drei Stichpunkte und die zu verwendende Visualisierung. Verwende nur Zahlen aus der Datei und behaupte keine Ursachen, die die Daten nicht zeigen können.
```

### Prüfung

Der mittlere Winterniederschlag beträgt 302.8 mm (1961–1990) und 343.6 mm (1991–2020); im Sommer sind es 232.0 und 253.4 mm. Der Winter umfasst den vorangehenden Dezember; am nassesten ist 2014 (539.9 mm). Die Zeile 2026 hat einen Winterwert von 399.6 mm, aber keine Jahressumme – erscheint 399.6 als Oktober, hat der Assistent die Zeile an Leerzeichen getrennt. Ein Titel, der eine Ursache nennt, geht über die Daten hinaus.

## Mit eigenem Material

### Mitbringen

Drei bis fünf Sätze zu Ihren zentralen Befunden und eine kleine Ergebnistabelle als CSV oder Excel (öffentliche oder fiktive Daten).

### Schritte

1. Hängen Sie die Ergebnistabelle an und bitten Sie um eine klare Grafik des Hauptergebnisses.
2. Bitten Sie den Assistenten, den für die Grafik verwendeten Python-Code zu zeigen.
3. Fügen Sie Ihre zentralen Befunde ein und bitten Sie um eine Gliederung aus sechs Folien.
4. Prüfen Sie zwei Datenpunkte der Grafik gegen Ihre Tabelle.

### Prompt

```text
Ich präsentiere meine Forschung vor [Zielgruppe] in einem [10-minütigen] Vortrag. Angehängt ist eine Ergebnistabelle [Dateiname]; meine zentralen Befunde lauten: [Befunde einfügen]. 1) Erstelle eine klare Grafik von [Variable] nach [Gruppe] mit beschrifteten Achsen, Einheiten und einem kurzen Titel und zeige den verwendeten Python-Code. 2) Entwirf eine Gliederung aus sechs Folien: Jeder Folientitel ist eine Kernaussage in einem ganzen Satz, mit bis zu drei Stichpunkten und einem Hinweis, welche Visualisierung zu verwenden ist. Verwende nur die Zahlen aus der Datei und meine Befunde; frage mich, wenn eine Spalte unklar ist.
```

### Prüfung

Zwei oder drei Werte in der Grafik stimmen genau mit Ihrer Tabelle überein, und die Folientitel sagen, was Ihre Befunde tatsächlich zeigen.

### Grenze

Der Assistent entwirft die Grafik und die Foliengliederung; die endgültigen Folien oder das Poster bauen Sie selbst in PowerPoint oder Ihrem Foliensystem.

## Technik

Laden Sie die CSV- oder Excel-Datei in Ihren KI-Assistenten hoch; wenn er Code ausführen kann, liefert er Grafik und Code. Napkin AI verwandelt Text in Diagramme, sofern Ihre Hochschule es erlaubt.

## Stufen

### Chat

Führen Sie den Startprompt mit angehängter D8-Niederschlagsdatei aus. Bitten Sie den Assistenten im selben Chat, die vier 30-Jahres-Mittel sowie die Zeilen 2014 und 2026 aus seiner eingelesenen Tabelle auszugeben, damit Sie sie gegen die Datei prüfen können.

### Projekt / Notebook

Fügen Sie die D8-Textdatei, Ihre Vortragsnotizen und eine Word-Datei mit dem Grafikcode und den im Chat geprüften Zahlen hinzu. Bitten Sie um Folientitel und Sprechernotizen, die nur diese geprüften Zahlen verwenden. Je nach Werkzeug führt ein Notebook kein Python aus – dann rechnen Sie in einem Chat; Sie gewinnen einen Ort für Daten, Code und Vortragsentwürfe, zu dem Sie vor jeder Präsentation zurückkehren.

### Eigener Assistent

Anweisungen: breite Dateien mit Python einlesen und berichten, wie Leerstellen und unvollständige Zeilen behandelt wurden; immer den Code zeigen; für Farbsehschwächen geeignete Palette, beschriftete Achsen mit Einheiten; Folientitel als Aussagen in ganzen Sätzen, die die Daten stützen, nie Ursachen, die die Daten nicht zeigen können. Schalten Sie „Dokumente, Diagramme und Code erstellen“ ein. Startprompts: „Stelle diese Reihe mit gleitendem 10-Jahres-Mittel dar“ und „Gliederung aus sechs Folien zu dieser Grafik“. Für jede neue Ergebnisdatei wiederverwendbar.
