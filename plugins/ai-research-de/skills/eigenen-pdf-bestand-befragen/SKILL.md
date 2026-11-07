---
name: eigenen-pdf-bestand-befragen
description: "Machen Sie Ihre Literatursammlung durchsuchbar – zum Beispiel in einem Projekt oder Notebook Ihres KI-Assistenten oder über Ihre Literaturverwaltung – und erhalten Sie Antworten mit geprüften Quellenstellen. Einsetzen bei: Eigenen PDF-Bestand befragen."
---

# Eigenen PDF-Bestand befragen

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/literatur-4

## Ziel

Machen Sie Ihre Literatursammlung durchsuchbar – zum Beispiel in einem Projekt oder Notebook Ihres KI-Assistenten oder über Ihre Literaturverwaltung – und erhalten Sie Antworten mit geprüften Quellenstellen.

Antworten, die in Ihren eigenen Papern gründen, jeweils mit Datei, Seite und einem wörtlichen Zitat, das Sie schnell prüfen können – und ein ausdrückliches „nicht in diesen Quellen“, wenn die Paper schweigen.

## Wann einsetzen

Sie erinnern sich, dass ein Paper etwas gesagt hat, aber nicht welches oder wo; einen Ordner voller PDFs erneut zu lesen oder per Schlagwort zu durchsuchen ist langsam und übersieht Umschreibungen.

## Ablauf mit der Nutzerin oder dem Nutzer

Führen Sie durch diese Schritte. Wo ein Schritt „den Assistenten bitten“ nennt, sind Sie gemeint.

1. Hängen Sie die drei PDFs an einen Chat an.
2. Stellen Sie eine Frage, die die Paper beantworten, und verlangen Sie Zitate mit Datei und Seite.
3. Stellen Sie eine Frage, von der Sie wissen, dass die Paper sie nicht beantworten.
4. Suchen Sie jede zitierte Passage im PDF, um zu bestätigen, dass sie dort steht.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.

## Typische Anfrage

```text
Ich bin Promovierende bzw. Promovierender in [Fachgebiet]. Beantworten Sie meine Frage ausschließlich anhand der angehängten PDFs. Meine Frage lautet: [Frage]. Geben Sie eine kurze Antwort (bis zu 200 Wörter) und dann eine Liste belegender Textstellen: Dateiname, Seite, exaktes Zitat von ein bis drei Sätzen. Zitieren Sie nur Text, der wortwörtlich in den Dateien steht. Beantworten die Dateien die Frage nicht oder nur teilweise, sagen Sie das deutlich, statt Wissen von außerhalb zu verwenden.
```

## Prüfung

Jedes Zitat steht wortwörtlich im PDF (Strg+F) und stützt die Aussage, und der Assistent sagt „nicht in den Dateien“ bei der Frage, von der Sie wissen, dass sie nicht beantwortet wird.

## Grenzen

- Ein einfacher Chat beantwortet Fragen zu einigen angehängten PDFs; für eine größere Menge nutzen Sie ein Projekt oder Notebook. Die MCP-Server für Literaturverwaltungen wie Zotero laufen nur lokal, nicht in einem Web-Chat.
- Risiko: Eigene unveröffentlichte Entwürfe, Gutachten oder Inhalte Dritter.

## Wichtige Konzepte

- **Retrieval-Augmented Generation (RAG)** – Das System ruft zuerst relevante Passagen aus einer Dokumentensammlung ab und erzeugt dann daraus eine Antwort (Lewis et al., 2020). Die Antworten sind nur so gut wie der Abruf: Übersehene Passagen führen zu unvollständigen oder falschen Antworten.
- **Treue (Faithfulness) und Halluzination** – Eine Antwort ist treu, wenn jede Aussage durch die Quelle gestützt ist. Intrinsische Halluzinationen widersprechen der Quelle; extrinsische fügen nicht gestützte Inhalte hinzu (Ji et al., 2023). Wörtliche Zitate mit Fundstelle machen die Treue überprüfbar.
- **Lost in the Middle** – Sprachmodelle nutzen Informationen am Anfang und Ende langer Eingaben besser als in der Mitte (Liu et al., 2024). Fragen Sie bei langen PDFs nach bestimmten Abschnitten und rechnen Sie mit Fehlern in der Mitte.
- **Enthaltung (Abstention)** – Ein quellengebundener Assistent sollte sagen, wenn die Quellen die Antwort nicht enthalten, statt auf Allgemeinwissen zurückzugreifen. Testen Sie das mit einer Frage, von der Sie wissen, dass die Dokumente sie nicht beantworten können.

## Wichtige Literatur

- Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., Küttler, H., Lewis, M., Yih, W., Rocktäschel, T., Riedel, S., & Kiela, D. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks. Advances in Neural Information Processing Systems, 33, 9459–9474.
- Ji, Z., Lee, N., Frieske, R., Yu, T., Su, D., Xu, Y., Ishii, E., Bang, Y. J., Madotto, A., & Fung, P. (2023). Survey of hallucination in natural language generation. ACM Computing Surveys, 55(12), Article 248. https://doi.org/10.1145/3571730
- Liu, N. F., Lin, K., Hewitt, J., Paranjape, A., Bevilacqua, M., Petroni, F., & Liang, P. (2024). Lost in the middle: How language models use long contexts. Transactions of the Association for Computational Linguistics, 12, 157–173. https://doi.org/10.1162/tacl_a_00638

## Hilfreiche Werkzeuge

Zotero · EndNote · Mendeley · Gemini Notebook (formerly NotebookLM) · Humata AI
