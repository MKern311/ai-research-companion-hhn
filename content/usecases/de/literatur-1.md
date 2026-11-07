---
id: literatur-1
phase: literatur
order: 1
title: Semantische Suche und Zitationsnetzwerke
risk: 1
mode: Assist
potential: 3
capabilities: recherche
routes: chat; files; connected; external
connect: Semantic Scholar; OpenAlex; Consensus; Litmaps; Paper Search MCP
tools: Connected Papers; Research Rabbit; Semantic Scholar
repos: ars-deep-research
data: A2; A1
practice_data: A2
practice_ref: A1
---

Suchen Sie nach Bedeutung statt nach Schlagwörtern, verfolgen Sie Vorwärts- und Rückwärtszitationen oder lassen Sie einen Recherche-Agenten eine mehrstufige Suche durchführen und einen zitierten Überblick entwerfen.

## Problem

Schlagwortsuchen finden nur Paper, die Ihre Begriffe verwenden; Arbeiten aus anderen Fächern und neuere Paper, die Ihre Schlüsselquelle zitieren, bleiben unsichtbar, und das Verfolgen von Zitationen von Hand ist langsam.

## Ergebnis

Verwandte Paper, gefunden nach Bedeutung sowie über Rückwärts- und Vorwärtszitationen, jeweils mit Bezug zu Ihrem Schlüsselpaper, dazu ein kurzer zitierter Überblick – ein weiteres Netz als Schlagwörter, abgeglichen mit Google Scholar.

## Vorgehen

1. Beginnen Sie mit einem Open-Access-Schlüsselpaper und seiner DOI
2. Bitten Sie um seinen Kerngedanken in einfachen Worten
3. Suchen Sie Paper zum selben Problem und Paper, die es zitieren
4. Vergleichen Sie mit dem Literaturverzeichnis und „Zitiert von“ in Google Scholar

## Konzepte

### Rückwärts- und Vorwärtsverfolgung von Zitationen

Rückwärts: die Referenzliste des Schlüsselpapers sichten; vorwärts: die Paper sichten, die es zitieren. Wiederholen, bis keine neuen relevanten Paper mehr auftauchen (Snowballing, Wohlin 2014). Ergänzt die Datenbanksuche, besonders bei interdisziplinären Themen.

### Kozitation und bibliografische Kopplung

Zwei Paper sind kozitiert, wenn spätere Paper beide zitieren (Small, 1973) – ein Zeichen verwandter Ideen; sie sind bibliografisch gekoppelt, wenn sie Referenzen teilen. Werkzeuge wie Connected Papers erzeugen aus solchen Verbindungen Ähnlichkeitskarten.

### Semantische (dichte) Suche (Dense Retrieval)

Texte werden als Vektoren kodiert und nach Bedeutungsähnlichkeit statt nach gemeinsamen Wörtern gereiht; Semantic Scholar nutzt zum Beispiel zitationsinformierte Dokument-Embeddings (SPECTER). Findet die Terminologie anderer Fächer, aber die Rangfolge ist undurchsichtig.

### Zitationsprüfung

Recherche-Agenten können Referenzen erfinden oder Quellen zitieren, die den Satz nicht stützen. Prüfen Sie bei jeder Quelle Existenz (die DOI führt zu diesem Paper) und Beleg (die Textstelle sagt, was behauptet wird).

## Literatur

- Wohlin, C. (2014). Guidelines for snowballing in systematic literature studies and a replication in software engineering. In Proceedings of the 18th International Conference on Evaluation and Assessment in Software Engineering (Article 38). ACM. doi:10.1145/2601248.2601268
- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. Journal of the American Society for Information Science, 24(4), 265–269. doi:10.1002/asi.4630240406
- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics (pp. 2270–2282). Association for Computational Linguistics. doi:10.18653/v1/2020.acl-main.207

## Übung

### Aufgabe

Nutzen Sie Rohde und Hausfather (2020), das Berkeley-Earth-Paper, als Schlüsselpaper und lassen Sie Ihren KI-Assistenten verwandte und zitierende Arbeiten finden. Sie erfahren, ob seine Websuche ein bekanntes zitierendes Paper findet – das HadCRUT5-Paper von Morice et al. (2021) – und wie viele Links echt sind.

### Prompt

```text
Ich bin Promovierende bzw. Promovierender. Ein Schlüsselpaper für meine Arbeit ist Rohde, R. A., & Hausfather, Z. (2020). The Berkeley Earth Land/Ocean Temperature Record. Earth System Science Data, 12(4), 3469–3479. https://doi.org/10.5194/essd-12-3469-2020 (PDF angehängt). Beschreiben Sie zuerst sein Kernproblem und seine Kernidee in drei einfachen Sätzen ohne seinen eigenen Fachjargon. Suchen Sie dann bis zu sechs Paper, die dasselbe Problem behandeln, auch solche mit anderer Terminologie, und bis zu drei, die dieses Paper zitieren. Nennen Sie zu jedem Autorinnen und Autoren, Jahr, Titel, einen funktionierenden Link, einen Satz zum Zusammenhang und ob Sie es aus der Referenzliste des angehängten Papers übernommen oder per Suche gefunden haben. Schließen Sie mit einem Überblick von 150 Wörtern, der jedes Paper zitiert. Wenn Sie nicht sicher sind, sagen Sie es; erfinden Sie keine Quellen.
```

### Prüfung

Morice et al. (2021), das HadCRUT5-Paper, zitiert das Schlüsselpaper (Strg+F „Rohde & Hausfather“ in A1) und sollte unter den zitierenden Papern erscheinen. Aus der Referenzliste übernommene verwandte Paper sind Rückwärtszitationen, keine Suche nach Bedeutung. Öffnen Sie jeden Link und vergleichen Sie dann mit der Liste „Zitiert von“ in Google Scholar. Hinweis: A2 führt das HadCRUT5-Manuskript (Morice et al., eingereicht 2020) bereits in seinen Referenzen. Nennt der Assistent Morice et al., fragen Sie, ob er sie aus dieser Liste übernommen oder per Suche gefunden hat – ein echter Vorwärtszitations-Treffer ist ein zitierendes Paper, das nicht in A2 steht.

## Mit eigenem Material

### Mitbringen

Titel und DOI eines Open-Access-Schlüsselpapers aus Ihrem Fach, das Sie gut kennen.

### Schritte

1. Geben Sie Ihrem KI-Assistenten Titel und DOI Ihres Schlüsselpapers.
2. Bitten Sie ihn, die Kernidee des Papers in einfachen Worten zu beschreiben, nicht in Schlagwörtern.
3. Bitten Sie um verwandte Paper, die für dasselbe Problem andere Begriffe verwenden.
4. Prüfen Sie die Ergebnisse anhand der Liste „Zitiert von“ in Google Scholar und der Referenzliste des Papers.

### Prompt

```text
Ich bin Promovierende bzw. Promovierender in [Fachgebiet]. Ein Schlüsselpaper für meine Arbeit ist [Titel, Autorinnen und Autoren, Jahr, DOI]. Beschreiben Sie zuerst sein Kernproblem und seine Kernidee in drei einfachen Sätzen ohne seinen eigenen Fachjargon. Suchen Sie dann bis zu sechs Paper, die dasselbe Problem behandeln, auch solche mit anderer Terminologie, und bis zu drei, die dieses Paper zitieren. Nennen Sie zu jedem Autorinnen und Autoren, Jahr, Titel, einen funktionierenden Link und einen Satz zum Zusammenhang. Schließen Sie mit einem Überblick von 150 Wörtern darüber, wie diese Paper zusammenhängen, und zitieren Sie jedes. Wenn Sie nicht sicher sind, sagen Sie es; erfinden Sie keine Quellen.
```

### Prüfung

Jeder Link öffnet ein echtes Paper, und mindestens ein relevantes Ergebnis steht nicht schon in Ihrer Referenzliste oder ist mit Ihren üblichen Schlagwörtern nicht leicht zu finden.

### Grenze

Ein Assistent mit Websuche deckt das offene Web ab, nicht Zitationsdatenbanken; prüfen Sie die Zitationsspur von Hand in Google Scholar – oder binden Sie, wenn Ihre Hochschule es erlaubt, über MCP eine wissenschaftliche Datenbank (zum Beispiel OpenAlex oder Semantic Scholar) an Ihren Assistenten an.

## Technik

Assistenten mit Websuche liefern Links, die nur Hinweise sind; hängen Sie das Schlüsselpaper an, damit der Assistent auch die Referenzliste lesen kann. Erlauben Ihr Werkzeug und Ihre Hochschule es, geben Semantic Scholar oder OpenAlex dem Assistenten indexierte Zitationsdaten; Paper Search MCP läuft lokal, zum Beispiel mit einem Coding-Assistenten wie GitHub Copilot in VS Code. Litmaps oder Connected Papers zeichnen das Netzwerk grafisch.

## Stufen

### Chat

Hängen Sie Rohde und Hausfather (A2) an und führen Sie den Startprompt mit eingeschalteter Websuche aus (die Verfügbarkeit hängt von Ihrem Werkzeug und Ihren Einstellungen ab). Bitten Sie den Assistenten im selben Chat, aus der Referenzliste übernommene Paper von per Suche gefundenen zu trennen und zu bestätigen, dass jedes zitierende Paper nicht in den Referenzen von A2 steht.

### Projekt / Notebook

Fügen Sie das Schlüsselpaper (A2), das von Ihnen geprüfte zitierende Paper (A1) und weitere Paper hinzu, die Sie in Google Scholar bestätigt haben. Fragen Sie, wie jedes zum Problem des Schlüsselpapers und zueinander steht. Je nach Werkzeug durchsucht der Arbeitsbereich nicht das Web, er wird so zu Ihrer geprüften Zitationskarte, die Sie Paper für Paper erweitern.

### Eigener Assistent

Nennen Sie ihn „Zitations-Explorer“. Anweisungen: das Problem des Schlüsselpapers in einfachen Worten beschreiben, verwandte Paper mit anderer Terminologie und bis zu drei zitierende Paper finden, zu jedem einen funktionierenden Link und den Zusammenhang nennen, jedes als Referenzliste oder Suchergebnis kennzeichnen, einen zitierten Überblick von 150 Wörtern schreiben und niemals Quellen erfinden. Startprompt: „Finde verwandte und zitierende Arbeiten für diese DOI.“ Wiederverwendbar für jedes neue Schlüsselpaper.

### Automatisierung / eigener Code

Binden Sie den OpenAlex- oder Semantic-Scholar-MCP-Server oder Litmaps an, damit der Assistent echten Rückwärts- und Vorwärtszitationen in einer Datenbank folgt statt dem offenen Web; ein geplanter Workflow (z. B. in Power Automate oder n8n) könnte neue zitierende Paper melden. Ein einfacher Chat-Assistent kann diese nicht erreichen. Auf GitHub: Ein Skript folgt Referenzen und zitierenden Arbeiten über die OpenAlex-API, und ein geplanter GitHub-Actions-Workflow listet neue zitierende Paper auf. Prüfen Sie Datenschutz und Freigabe vorher mit Ihrer Hochschule.
