---
id: querschnitt-3
phase: querschnitt
order: 3
title: Persönliche Wissensbasis
risk: 2
mode: Assist
potential: 3
capabilities: recherche; synthese
routes: files; connected; external
connect: Zotero; Notion; Obsidian
tools: Zotero; Obsidian; Gemini Notebook (formerly NotebookLM)
data: AB; C1
practice_data: AB
practice_ref: C1
---

Machen Sie aus Notizen, Markierungen und Annotationen atomare Notizen mit gemeinsamem Schlagwortvokabular und typisierten Verknüpfungen, damit Sie sie in Ihrem Notizwerkzeug durchsuchen und verbinden können.

## Problem

Notizen, Markierungen und Annotationen liegen in verschiedenen Werkzeugen; Sie erinnern sich, etwas Relevantes gelesen zu haben, finden es aber nicht, und Zusammenhänge zwischen Quellen bleiben in Ihrem Kopf.

## Ergebnis

Atomare Notizen mit IDs und Quellen, ein kleines kontrolliertes Schlagwortvokabular und typisierte Verknüpfungen – stützt, widerspricht, erweitert, nutzt Daten oder Methode von –, die Ihr Notizwerkzeug für spätere Suche und Synthese strukturieren.

## Vorgehen

1. Laden Sie eine Handvoll Lesenotizen oder Abstracts hoch
2. Bitten Sie um atomare Notizen, jeweils mit ID und Quelle
3. Vereinbaren Sie ein kleines kontrolliertes Schlagwortvokabular
4. Bitten Sie um typisierte Verknüpfungen zwischen Notizen, mit Beleg
5. Prüfen Sie zwei vorgeschlagene Verknüpfungen an den Originalen

## Konzepte

### Zettelkasten

Luhmanns Notizsystem: atomare Notizen mit je einer Idee, in eigenen Worten geschrieben, mit eindeutiger ID und ausdrücklichen Verknüpfungen zu anderen Notizen. Verknüpfungen statt Ordner schaffen die Struktur, sodass neue Zusammenhänge mit der Zeit sichtbar werden.

### Literaturnotizen und permanente Notizen (Literature notes, permanent notes)

Ahrens (2017) im Anschluss an Luhmann: Eine Literaturnotiz hält kurz fest, was eine Quelle sagt, mit Seitenangabe; eine permanente Notiz formuliert eine Idee in eigenen Worten und verknüpft sie mit anderen Notizen. KI kann Literaturnotizen entwerfen; die permanenten Notizen und ihre Verknüpfungen sind Ihr eigenes Denken.

### Kontrolliertes Vokabular (Controlled vocabulary)

Eine feste Liste definierter Schlagwörter, die einheitlich verwendet werden, im Gegensatz zu spontaner Verschlagwortung. 10–20 definierte Schlagwörter vermeiden Synonyme wie „heatwave“, „heat wave“ und „extreme heat“, die Ihre Suchen aufspalten.

### Typisierte Zitationsbeziehungen (Typed citation relations)

Sie benennen, warum eine Quelle sich auf eine andere bezieht – stützt, bestreitet, erweitert, nutzt Daten von, nutzt Methode von –, wie es die Citation Typing Ontology (CiTO; Peroni & Shotton, 2012) formalisiert. Typisierte Verknüpfungen beschleunigen die spätere Synthese stärker als bloße „verwandt“-Schlagwörter.

## Literatur

- Luhmann, N. (1981). Kommunikation mit Zettelkästen: Ein Erfahrungsbericht. In H. Baier, H. M. Kepplinger, & K. Reumann (Eds.), Öffentliche Meinung und sozialer Wandel (pp. 222–228). Westdeutscher Verlag. doi:10.1007/978-3-322-87749-9_19
- Ahrens, S. (2017). How to take smart notes: One simple technique to boost writing, learning and thinking. CreateSpace.
- Peroni, S., & Shotton, D. (2012). FaBiO and CiTO: Ontologies for describing bibliographic resources and citations. Journal of Web Semantics, 17, 33–43. doi:10.1016/j.websem.2012.08.001

## Übung

### Aufgabe

Machen Sie aus sechs Abstracts atomare Notizen mit kontrolliertem Schlagwortvokabular und typisierten Verknüpfungen. Sie lernen, ob die Verknüpfungen des Assistenten auf Sätzen beruhen, die Sie in den Abstracts finden können, oder nur plausibel wirken, weil die Arbeiten dasselbe Thema haben.

### Prompt

```text
Ich bin Promovierende/Promovierender und baue ein Notizsystem auf. Die angehängte Textdatei enthält die Abstracts von zwölf Arbeiten; verwende nur diese sechs: A2, B1, B2, C1, C3 und C6. 1) Schreibe pro Arbeit eine atomare Notiz: eine kurze ID (z. B. B2-1), die Hauptaussage in ein bis zwei einfachen Sätzen und die Quellenangabe. 2) Schlage ein kontrolliertes Vokabular von 8 bis 12 Schlagwörtern vor, jeweils mit einer einzeiligen Definition und den Synonymen, die es ersetzt, und gib jeder Notiz zwei oder drei Schlagwörter. 3) Nenne bis zu fünf Verknüpfungen zwischen den Notizen, jeweils typisiert als stützt, widerspricht, erweitert, nutzt Daten von oder nutzt Methode von, und zitiere aus jedem Abstract den Satz, auf dem die Verknüpfung beruht. Lass Verknüpfungen weg, die nur auf einem gemeinsamen Thema beruhen, und sage, wenn eine Verknüpfung unsicher ist.
```

### Prüfung

Suchen Sie jedes Zitat mit Strg+F in der Datei. C3 nutzt die Methode von B2 (beide nennen eine „risk-based attribution methodology“); C6 analysiert die Reihe, die B1 dokumentiert, aber eine Arbeit von 2021 kann v2.1 von 2025 nicht nutzen. „C1 nutzt Daten von A2“ wirkt richtig, ist aber zu stark: Die Methoden von C1 nutzen tägliche Maxima über Land, nicht den Land-/Ozean-Datensatz von A2. Lehnen Sie Verknüpfungen ab, die nur auf einem gemeinsamen Thema beruhen.

## Mit eigenem Material

### Mitbringen

Drei bis fünf eigene Lesenotizen, Markierungen oder Annotationen oder Abstracts von Open-Access-Arbeiten, als eine Word-Datei oder als eingefügten Text.

### Schritte

1. Hängen Sie die Notizen an oder fügen Sie sie ein und bitten Sie um atomare Notizen: eine Idee pro Notiz, mit ID und Quelle.
2. Bitten Sie um ein kontrolliertes Vokabular von 10 bis 15 Schlagwörtern mit Definitionen und den Synonymen, die jedes ersetzt.
3. Bitten Sie um typisierte Verknüpfungen zwischen Notizen: stützt, widerspricht, erweitert, nutzt Daten oder Methode von.
4. Prüfen Sie zwei vorgeschlagene Verknüpfungen an den ursprünglichen Notizen.

### Prompt

```text
Ich bin Promovierende/Promovierender in [Fach] und baue ein Notizsystem in [Zotero / OneNote / Obsidian / Notion] auf. Angehängt sind meine Notizen zu [Anzahl] Quellen. 1) Schreibe sie als atomare Notizen um: eine Idee pro Notiz, in einfachen Worten, jeweils mit kurzer ID, der Quelle und der Seite, falls meine Notiz eine nennt. 2) Schlage ein kontrolliertes Vokabular von 10 bis 15 Schlagwörtern vor, jeweils mit einzeiliger Definition und den Synonymen, die es ersetzt, und vergib an jede Notiz zwei oder drei Schlagwörter. 3) Schlage bis zu fünf Verknüpfungen zwischen Notizen vor, jeweils typisiert als stützt, widerspricht, erweitert, nutzt Daten von oder nutzt Methode von, und nenne den Satz in meinen Notizen, auf dem jede Verknüpfung beruht. Verwende nur, was in meinen Notizen steht; lass Verknüpfungen weg, die nur auf einem gemeinsamen Thema beruhen, und sage, wenn eine Verknüpfung unsicher ist.
```

### Prüfung

Wählen Sie zwei vorgeschlagene Verknüpfungen und bestätigen Sie, dass beide Notizen wirklich sagen, was der Assistent behauptet; jede atomare Notiz enthält eine Idee und nennt ihre Quelle.

### Grenze

Ein einfacher Chat führt keine durchsuchbare Bibliothek Ihrer Dateien; für eine dauerhafte Wissensbasis nutzen Sie ein Projekt oder Notebook (Stufe 2) oder die eigene Suche Ihres Notizwerkzeugs. Notion lässt sich anbinden, wenn Ihre Hochschule es erlaubt; die MCP-Server von Zotero und Obsidian laufen nur lokal.

## Technik

Laden Sie Ihre Notizen oder eine Abstract-Datei in Ihren KI-Assistenten hoch und übernehmen Sie Notizen, Schlagwörter und Verknüpfungen in Ihr Notizwerkzeug. Notion lässt sich über einen MCP-Server oder eine Integration anbinden, wenn Ihre Hochschule es erlaubt; die MCP-Server von Zotero und Obsidian laufen lokal – mit einem Desktop-Assistenten oder einem Code-Editor wie VS Code, nicht in einem einfachen Web-Chat.

## Stufen

### Chat

Führen Sie den Startprompt mit angehängter AB-Abstract-Datei aus. Bitten Sie den Assistenten im selben Chat, jede Verknüpfung erneut zu prüfen und alle zu streichen, deren zitierter Satz nicht die Daten, Methode oder Aussage nennt, die ihr Verknüpfungstyp verlangt.

### Projekt / Notebook

Fügen Sie die AB-Abstracts, Ihre eigenen Lesenotizen und ein Dokument mit dem Schlagwortvokabular als Referenzen hinzu und ergänzen Sie beim Lesen weiter Notizen. Bitten Sie um atomare Notizen und typisierte Verknüpfungen über alles im Notebook – je nach Werkzeug arbeitet es hauptsächlich mit Ihrem Material, sodass Sie finden, was Sie vor Monaten gelesen haben, und das Schlagwortdokument hält die Schlagwörter einheitlich.

### Eigener Assistent

Anweisungen: das Format der atomaren Notiz (ID, eine Idee, Quelle, Seite), Ihr kontrolliertes Schlagwortvokabular mit Definitionen, die fünf Verknüpfungstypen, ein zitierter Satz für jede Verknüpfung, keine Verknüpfungen, die nur auf einem gemeinsamen Thema beruhen. Wissen: Ihr Schlagwortvokabular. Startprompts: „Atomare Notizen aus diesen Markierungen“ und „Typisierte Verknüpfungen zwischen diesen Notizen“. Für jeden Stapel Lektüre wiederverwendbar, sodass neue Notizen zu den alten passen.

### Automatisierung / eigener Code

Binden Sie Notion über seinen Remote-MCP-Server an, sodass der Assistent freigegebene Notizen, Schlagwörter und Verknüpfungen direkt in Ihre Notion-Datenbank schreibt – ein einfacher eigener Assistent kann nicht in ein anderes Werkzeug schreiben. Die Server von Zotero und Obsidian laufen nur lokal. Auf GitHub: Halten Sie Ihre Notizen als Markdown-Dateien in einem privaten Repository, und ein Skript schreibt sie über die API in Notion. Prüfen Sie Datenschutz und Freigabe vorher mit Ihrer Hochschule.
