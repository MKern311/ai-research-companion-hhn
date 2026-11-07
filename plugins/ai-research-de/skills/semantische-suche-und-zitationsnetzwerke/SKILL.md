---
name: semantische-suche-und-zitationsnetzwerke
description: "Suchen Sie nach Bedeutung statt nach Schlagwörtern, verfolgen Sie Vorwärts- und Rückwärtszitationen oder lassen Sie einen Recherche-Agenten eine mehrstufige Suche durchführen und einen zitierten Überblick entwerfen. Einsetzen bei: Semantische Suche und Zitationsnetzwerke."
---

# Semantische Suche und Zitationsnetzwerke

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/literatur-1

## Ziel

Suchen Sie nach Bedeutung statt nach Schlagwörtern, verfolgen Sie Vorwärts- und Rückwärtszitationen oder lassen Sie einen Recherche-Agenten eine mehrstufige Suche durchführen und einen zitierten Überblick entwerfen.

Verwandte Paper, gefunden nach Bedeutung sowie über Rückwärts- und Vorwärtszitationen, jeweils mit Bezug zu Ihrem Schlüsselpaper, dazu ein kurzer zitierter Überblick – ein weiteres Netz als Schlagwörter, abgeglichen mit Google Scholar.

## Wann einsetzen

Schlagwortsuchen finden nur Paper, die Ihre Begriffe verwenden; Arbeiten aus anderen Fächern und neuere Paper, die Ihre Schlüsselquelle zitieren, bleiben unsichtbar, und das Verfolgen von Zitationen von Hand ist langsam.

## Vorgehen

1. Geben Sie Ihrem KI-Assistenten Titel und DOI Ihres Schlüsselpapers.
2. Bitten Sie ihn, die Kernidee des Papers in einfachen Worten zu beschreiben, nicht in Schlagwörtern.
3. Bitten Sie um verwandte Paper, die für dasselbe Problem andere Begriffe verwenden.
4. Prüfen Sie die Ergebnisse anhand der Liste „Zitiert von“ in Google Scholar und der Referenzliste des Papers.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.
- Nennen Sie ihn „Zitations-Explorer“. Anweisungen: das Problem des Schlüsselpapers in einfachen Worten beschreiben, verwandte Paper mit anderer Terminologie und bis zu drei zitierende Paper finden, zu jedem einen funktionierenden Link und den Zusammenhang nennen, jedes als Referenzliste oder Suchergebnis kennzeichnen, einen zitierten Überblick von 150 Wörtern schreiben und niemals Quellen erfinden. Startprompt: „Finde verwandte und zitierende Arbeiten für diese DOI.“ Wiederverwendbar für jedes neue Schlüsselpaper.

## Startprompt

```text
Ich bin Promovierende bzw. Promovierender in [Fachgebiet]. Ein Schlüsselpaper für meine Arbeit ist [Titel, Autorinnen und Autoren, Jahr, DOI]. Beschreiben Sie zuerst sein Kernproblem und seine Kernidee in drei einfachen Sätzen ohne seinen eigenen Fachjargon. Suchen Sie dann bis zu sechs Paper, die dasselbe Problem behandeln, auch solche mit anderer Terminologie, und bis zu drei, die dieses Paper zitieren. Nennen Sie zu jedem Autorinnen und Autoren, Jahr, Titel, einen funktionierenden Link und einen Satz zum Zusammenhang. Schließen Sie mit einem Überblick von 150 Wörtern darüber, wie diese Paper zusammenhängen, und zitieren Sie jedes. Wenn Sie nicht sicher sind, sagen Sie es; erfinden Sie keine Quellen.
```

## Prüfung

Jeder Link öffnet ein echtes Paper, und mindestens ein relevantes Ergebnis steht nicht schon in Ihrer Referenzliste oder ist mit Ihren üblichen Schlagwörtern nicht leicht zu finden.

## Grenzen

- Ein Assistent mit Websuche deckt das offene Web ab, nicht Zitationsdatenbanken; prüfen Sie die Zitationsspur von Hand in Google Scholar – oder binden Sie, wenn Ihre Hochschule es erlaubt, über MCP eine wissenschaftliche Datenbank (zum Beispiel OpenAlex oder Semantic Scholar) an Ihren Assistenten an.
- Risiko: Öffentliches oder eigenes, nicht sensibles Material; Fehler sind leicht zu erkennen.

## Wichtige Konzepte

- **Rückwärts- und Vorwärtsverfolgung von Zitationen** – Rückwärts: die Referenzliste des Schlüsselpapers sichten; vorwärts: die Paper sichten, die es zitieren. Wiederholen, bis keine neuen relevanten Paper mehr auftauchen (Snowballing, Wohlin 2014). Ergänzt die Datenbanksuche, besonders bei interdisziplinären Themen.
- **Kozitation und bibliografische Kopplung** – Zwei Paper sind kozitiert, wenn spätere Paper beide zitieren (Small, 1973) – ein Zeichen verwandter Ideen; sie sind bibliografisch gekoppelt, wenn sie Referenzen teilen. Werkzeuge wie Connected Papers erzeugen aus solchen Verbindungen Ähnlichkeitskarten.
- **Semantische (dichte) Suche (Dense Retrieval)** – Texte werden als Vektoren kodiert und nach Bedeutungsähnlichkeit statt nach gemeinsamen Wörtern gereiht; Semantic Scholar nutzt zum Beispiel zitationsinformierte Dokument-Embeddings (SPECTER). Findet die Terminologie anderer Fächer, aber die Rangfolge ist undurchsichtig.
- **Zitationsprüfung** – Recherche-Agenten können Referenzen erfinden oder Quellen zitieren, die den Satz nicht stützen. Prüfen Sie bei jeder Quelle Existenz (die DOI führt zu diesem Paper) und Beleg (die Textstelle sagt, was behauptet wird).

## Wichtige Literatur

- Wohlin, C. (2014). Guidelines for snowballing in systematic literature studies and a replication in software engineering. In Proceedings of the 18th International Conference on Evaluation and Assessment in Software Engineering (Article 38). ACM. https://doi.org/10.1145/2601248.2601268
- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. Journal of the American Society for Information Science, 24(4), 265–269. https://doi.org/10.1002/asi.4630240406
- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics (pp. 2270–2282). Association for Computational Linguistics. https://doi.org/10.18653/v1/2020.acl-main.207

## Hilfreiche Werkzeuge

Semantic Scholar · OpenAlex · Consensus · Litmaps · Paper Search MCP · Connected Papers · Research Rabbit
