---
name: pruefung-von-literaturangaben-und-aussagen
description: "Prüfen, dass jede Literaturangabe existiert und ihre Angaben stimmen – und dass jede zitierte Quelle den Satz, für den sie zitiert wird, tatsächlich stützt. Einsetzen bei: Prüfung von Literaturangaben und Aussagen."
---

# Prüfung von Literaturangaben und Aussagen

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/publikation-8

## Ziel

Prüfen, dass jede Literaturangabe existiert und ihre Angaben stimmen – und dass jede zitierte Quelle den Satz, für den sie zitiert wird, tatsächlich stützt.

Eine Prüfung jeder Literaturangabe anhand von DOIs und Verlagsdatensätzen und eine Bewertung der Stützung (stützt, stützt teilweise, stützt nicht) für jeden zitierenden Satz mit zitiertem Beleg – Sie öffnen jede markierte Quelle und entscheiden.

## Wann einsetzen

Falsche Literaturangaben und Zitierfehler – Quellen, die nicht sagen, wofür sie zitiert werden – schleichen sich leicht ein, besonders bei von KI vorgeschlagenen Quellen, und schaden der Glaubwürdigkeit.

## Vorgehen

1. Fügen Sie den Absatz und seine Literaturangaben ein.
2. Bitten Sie den Assistenten bei eingeschalteter Websuche (falls Ihr Werkzeug sie bietet), zu prüfen, dass jede Literaturangabe existiert, mit Link oder DOI.
3. Fragen Sie, ob jede Quelle den Satz stützt, für den sie zitiert wird.
4. Öffnen Sie jede markierte Quelle und entscheiden Sie selbst.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.
- Erstellen Sie einen konfigurierten Assistenten, zum Beispiel „Literaturprüfer“ (z. B. einen Copilot-Agenten, einen Custom GPT, ein Gemini Gem oder ein Claude-Projekt). Legen Sie in den dauerhaften Anweisungen die zweistufige Prüfung fest: zuerst Existenz und Metadaten (funktionierende DOI oder Link, „nicht gefunden“, wenn nichts vorliegt, jeden Unterschied bei Autorinnen und Autoren, Jahr, Titel, Zeitschrift, Band oder Seiten markieren), dann Stützung (stützt, teilweise, stützt nicht) mit zitierter Passage; nie raten. Lassen Sie die Websuche eingeschaltet, wenn Ihr Werkzeug sie bietet. Startprompt: „Prüfen Sie diese Literaturangaben und die Aussagen, für die sie zitiert werden.“ Wiederverwendbar für jedes Kapitel vor der Einreichung.

## Startprompt

```text
Ich prüfe die Literaturangaben in einem Absatz meiner [Abschlussarbeit oder meines Artikels]. Für jede Literaturangabe unten: 1) Suchen Sie nach ihr und geben Sie einen funktionierenden Link oder eine DOI an; sagen Sie 'nicht gefunden', wenn Sie sie nicht finden, und markieren Sie Unterschiede bei Autorinnen und Autoren, Jahr, Titel oder Zeitschrift. 2) Sagen Sie für jeden Satz mit einem Zitat, ob die zitierte Quelle – soweit Sie es anhand ihres Abstracts oder Volltexts erkennen können – die Aussage stützt, teilweise stützt oder nicht stützt, und zitieren Sie die Passage, auf die Sie sich stützen. Raten Sie nicht; wenn Sie von einer Quelle nicht genug sehen können, sagen Sie das.

Absatz: [einfügen]
Literaturangaben: [einfügen]
```

## Prüfung

Jede „gefundene“ Literaturangabe öffnet den richtigen Artikel, und bei zwei Sätzen lesen Sie die Quelle selbst, um das Urteil des Assistenten zu bestätigen.

## Grenzen

- Der Assistent durchsucht das offene Web und sieht hinter Bezahlschranken womöglich keine Volltexte; eine angebundene Datenbank (zum Beispiel OpenAlex, das prüfen kann, ob Literaturangaben existieren, oder scite für Zitataussagen) macht dies zuverlässiger.
- Risiko: Eigene unveröffentlichte Entwürfe, Gutachten oder Inhalte Dritter.

## Wichtige Konzepte

- **Zitiergenauigkeit (Quotation Accuracy)** – Ob eine zitierte Quelle die Aussage, für die sie zitiert wird, tatsächlich stützt. Die Metaanalyse von Jergas und Baethge fand Zitierfehler in medizinischen Zeitschriften häufig, einen erheblichen Teil davon schwerwiegend – dieselbe Prüfung gilt in jedem Fach.
- **Erfundene Literaturangaben durch Sprachmodelle (Reference Fabrication)** – Sprachmodelle können plausible, aber nicht existierende Literaturangaben oder echte mit falschen Angaben erzeugen. Walters und Wilder fanden beide Probleme in von ChatGPT erzeugten Literaturverzeichnissen, daher braucht jede von KI vorgeschlagene Literaturangabe eine Prüfung auf Existenz und Metadaten.
- **DOI und Crossref-Metadaten** – Ein Digital Object Identifier führt zum Datensatz des Verlags; Crossref-Metadaten bestätigen Autorinnen und Autoren, Jahr, Titel, Zeitschrift, Band und Seiten. Die DOI aufzulösen ist die erste Existenzprüfung, der Vergleich der Metadaten die zweite.
- **Klassifikation von Zitataussagen (Citation Statement Classification)** – scite klassifiziert zitierende Aussagen als stützend, widersprechend oder erwähnend (Nicholson et al. 2021). Nutzen Sie dieselbe Logik für Ihre Bewertung: stützt, stützt teilweise, stützt nicht – immer mit der zitierten Passage.

## Wichtige Literatur

- Jergas, H., & Baethge, C. (2015). Quotation accuracy in medical journal articles – a systematic review and meta-analysis. PeerJ, 3, e1364. https://doi.org/10.7717/peerj.1364
- Walters, W. H., & Wilder, E. I. (2023). Fabrication and errors in the bibliographic citations generated by ChatGPT. Scientific Reports, 13, 14045. https://doi.org/10.1038/s41598-023-41032-5
- Nicholson, J. M., Mordaunt, M., Lopez, P., Uppala, A., Rosati, D., Rodrigues, N. P., Grabitz, P., & Rife, S. C. (2021). scite: A smart citation index that displays the context of citations and classifies their intent using deep learning. Quantitative Science Studies, 2(3), 882–898. https://doi.org/10.1162/qss_a_00146

## Hilfreiche Werkzeuge

OpenAlex · scite · Zotero · Google Scholar
