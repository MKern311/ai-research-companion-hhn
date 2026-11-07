---
id: literatur-4
phase: literatur
order: 4
title: Eigenen PDF-Bestand befragen
risk: 2
mode: Assist
potential: 3
capabilities: recherche; synthese
routes: files; connected; external
connect: Zotero; EndNote; Mendeley
tools: Gemini Notebook (formerly NotebookLM); Humata AI
data: A1; A2; A3
practice_data: A1; A2; A3
---

Machen Sie Ihre Literatursammlung durchsuchbar – zum Beispiel in einem Projekt oder Notebook Ihres KI-Assistenten oder über Ihre Literaturverwaltung – und erhalten Sie Antworten mit geprüften Quellenstellen.

## Problem

Sie erinnern sich, dass ein Paper etwas gesagt hat, aber nicht welches oder wo; einen Ordner voller PDFs erneut zu lesen oder per Schlagwort zu durchsuchen ist langsam und übersieht Umschreibungen.

## Ergebnis

Antworten, die in Ihren eigenen Papern gründen, jeweils mit Datei, Seite und einem wörtlichen Zitat, das Sie schnell prüfen können – und ein ausdrückliches „nicht in diesen Quellen“, wenn die Paper schweigen.

## Vorgehen

1. Hängen Sie drei verwandte PDFs an einen Chat oder ein Notebook an
2. Stellen Sie eine Frage, die Zitate mit Datei und Seite verlangt
3. Stellen Sie eine Frage, die die Paper nicht beantworten können
4. Suchen Sie jedes Zitat im PDF, um es zu bestätigen

## Konzepte

### Retrieval-Augmented Generation (RAG)

Das System ruft zuerst relevante Passagen aus einer Dokumentensammlung ab und erzeugt dann daraus eine Antwort (Lewis et al., 2020). Die Antworten sind nur so gut wie der Abruf: Übersehene Passagen führen zu unvollständigen oder falschen Antworten.

### Treue (Faithfulness) und Halluzination

Eine Antwort ist treu, wenn jede Aussage durch die Quelle gestützt ist. Intrinsische Halluzinationen widersprechen der Quelle; extrinsische fügen nicht gestützte Inhalte hinzu (Ji et al., 2023). Wörtliche Zitate mit Fundstelle machen die Treue überprüfbar.

### Lost in the Middle

Sprachmodelle nutzen Informationen am Anfang und Ende langer Eingaben besser als in der Mitte (Liu et al., 2024). Fragen Sie bei langen PDFs nach bestimmten Abschnitten und rechnen Sie mit Fehlern in der Mitte.

### Enthaltung (Abstention)

Ein quellengebundener Assistent sollte sagen, wenn die Quellen die Antwort nicht enthalten, statt auf Allgemeinwissen zurückzugreifen. Testen Sie das mit einer Frage, von der Sie wissen, dass die Dokumente sie nicht beantworten können.

## Literatur

- Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., Küttler, H., Lewis, M., Yih, W., Rocktäschel, T., Riedel, S., & Kiela, D. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks. Advances in Neural Information Processing Systems, 33, 9459–9474.
- Ji, Z., Lee, N., Frieske, R., Yu, T., Su, D., Xu, Y., Ishii, E., Bang, Y. J., Madotto, A., & Fung, P. (2023). Survey of hallucination in natural language generation. ACM Computing Surveys, 55(12), Article 248. doi:10.1145/3571730
- Liu, N. F., Lin, K., Hewitt, J., Paranjape, A., Bevilacqua, M., Petroni, F., & Liang, P. (2024). Lost in the middle: How language models use long contexts. Transactions of the Association for Computational Linguistics, 12, 157–173. doi:10.1162/tacl_a_00638

## Übung

### Aufgabe

Befragen Sie die drei Paper zur globalen Temperatur gemeinsam. Sie erfahren, ob Ihr KI-Assistent Zitate wörtlich beibehält – das Manuskript von Morice et al. hat Zeilennummern, die Sätze unterbrechen –, die richtige Datei angibt und zugibt, wenn eine Frage außerhalb der Dateien liegt.

### Prompt

```text
Beantworten Sie meine Fragen ausschließlich anhand der drei angehängten PDFs (Morice et al. 2021, Rohde und Hausfather 2020, Forster et al. 2025). Frage 1: Welchen Bezugszeitraum verwendet jedes Paper für Temperaturanomalien oder Erwärmung, und warum ist das beim Vergleich ihrer Zahlen wichtig? Frage 2: Wie behandeln die Paper Regionen mit wenigen Beobachtungen, etwa die Arktis? Frage 3: Was berichten die Paper über Trends beim winterlichen Niederschlag in Großbritannien? Geben Sie zu jeder Frage eine kurze Antwort (bis zu 150 Wörter) und dann belegende Textstellen: Dateiname, Seite, exaktes Zitat von ein bis drei Sätzen. Zitieren Sie nur Text, der wortwörtlich in den Dateien steht. Beantworten die Dateien eine Frage nicht, sagen Sie das, statt Wissen von außerhalb zu verwenden.
```

### Prüfung

Suchen Sie jedes Zitat mit Strg+F. Morice et al. verwenden Anomalien relativ zu 1961–1990; Forster et al. berichten die Erwärmung relativ zu 1850–1900; Rohde und Hausfather vermerken etwa 0,1 °C zusätzliche Erwärmung durch arktische Luft. Frage 3 braucht „nicht in den Dateien“.

## Mit eigenem Material

### Mitbringen

Drei Open-Access-PDFs zu Ihrem Thema.

### Schritte

1. Hängen Sie die drei PDFs an einen Chat an.
2. Stellen Sie eine Frage, die die Paper beantworten, und verlangen Sie Zitate mit Datei und Seite.
3. Stellen Sie eine Frage, von der Sie wissen, dass die Paper sie nicht beantworten.
4. Suchen Sie jede zitierte Passage im PDF, um zu bestätigen, dass sie dort steht.

### Prompt

```text
Ich bin Promovierende bzw. Promovierender in [Fachgebiet]. Beantworten Sie meine Frage ausschließlich anhand der angehängten PDFs. Meine Frage lautet: [Frage]. Geben Sie eine kurze Antwort (bis zu 200 Wörter) und dann eine Liste belegender Textstellen: Dateiname, Seite, exaktes Zitat von ein bis drei Sätzen. Zitieren Sie nur Text, der wortwörtlich in den Dateien steht. Beantworten die Dateien die Frage nicht oder nur teilweise, sagen Sie das deutlich, statt Wissen von außerhalb zu verwenden.
```

### Prüfung

Jedes Zitat steht wortwörtlich im PDF (Strg+F) und stützt die Aussage, und der Assistent sagt „nicht in den Dateien“ bei der Frage, von der Sie wissen, dass sie nicht beantwortet wird.

### Grenze

Ein einfacher Chat beantwortet Fragen zu einigen angehängten PDFs; für eine größere Menge nutzen Sie ein Projekt oder Notebook. Die MCP-Server für Literaturverwaltungen wie Zotero laufen nur lokal, nicht in einem Web-Chat.

## Technik

Hängen Sie PDFs in einem Chat an oder sammeln Sie sie für wiederholte Fragen in einem Projekt oder Notebook. Die MCP-Server für Zotero, EndNote und Mendeley laufen lokal – mit einem Desktop-Assistenten oder einem Coding-Assistenten wie GitHub Copilot in VS Code, nicht in einem einfachen Web-Chat; in Word zitieren die Literaturverwaltungen über ihre eigenen Add-ins.

## Stufen

### Chat

Hängen Sie A1, A2 und A3 an und führen Sie den Startprompt aus. Stellen Sie im selben Chat eine Anschlussfrage, die zwei Paper zugleich braucht – zum Beispiel, wie ihre Bezugszeiträume eine genannte Erwärmungszahl verändern – mit je einem Zitat aus beiden.

### Projekt / Notebook

Hier lohnt sich ein Projekt oder Notebook: Fügen Sie die Paper aus Ihrem Cloud-Leseordner hinzu (Übung: A1–A3), so viele, wie Ihr Werkzeug erlaubt. Stellen Sie Fragen über alle Paper hinweg mit Datei, Seite und wörtlichem Zitat; je nach Werkzeug antwortet der Assistent nur aus ihnen und sagt, wenn sie schweigen. Ergänzen Sie Paper beim Lesen und kehren Sie das ganze Jahr zurück.

### Eigener Assistent

Nennen Sie ihn „Bibliotheks-Q&A“. Anweisungen: nur aus den Wissensdateien antworten, zu jeder Aussage Datei, Seite und ein wörtliches Zitat von ein bis drei Sätzen angeben, „nicht in diesen Quellen“ sagen, wenn sie schweigen, und niemals Wissen von außerhalb verwenden. Wissen: Ihre zentralen Paper (begrenzt Ihr Werkzeug die Wissensdateien, hängen Sie sie stattdessen im Chat mit dem Assistenten an). Startprompts: „Was sagen meine Paper über …?“, „Welches Paper definiert …?“
