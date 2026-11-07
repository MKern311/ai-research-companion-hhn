---
id: publikation-3
phase: publikation
order: 3
title: Zeitschriftenwahl und Formatierung
risk: 1
mode: Delegate
potential: 2
capabilities: recherche; agentisch
routes: chat; files; connected; external
connect: Zotero; Overleaf; OpenAlex
tools: Zotero; Overleaf; EndNote
repos: kd-citation
data: C2
practice_data: C2
---

Passende Zeitschriften nach Ausrichtung und Anforderungen finden; Formatierungsrichtlinien, Zitierstile und LaTeX- bzw. BibTeX-Konventionen anwenden.

## Problem

Eine Zeitschrift zu finden, deren Ausrichtung passt, und dann Literaturangaben und Layout nach ihren Richtlinien umzuformatieren, kostet Stunden – und eine Ablehnung ohne Begutachtung (Desk Rejection) wegen mangelnder Passung kostet Wochen.

## Ergebnis

Eine Auswahlliste seriöser Zeitschriften mit Links zu deren eigenen Richtlinien, eine Formatierungs-Checkliste für Ihre Wahl und in deren Stil umgewandelte Literaturangaben, bei denen fehlende BibTeX-Felder markiert sind.

## Vorgehen

1. Ihr Abstract einfügen und nach infrage kommenden Zeitschriften mit Links fragen
2. Ausrichtung, Artikeltyp und Limits auf den eigenen Seiten der Zeitschriften bestätigen
3. Unbekannte Zeitschriften mit Think. Check. Submit. und DOAJ prüfen
4. Die Richtlinien einer Zeitschrift in eine Einreichungs-Checkliste überführen
5. Literaturangaben in ihren Stil oder in BibTeX umwandeln; fehlende Felder ergänzen

## Konzepte

### Passung zu Ausrichtung und Themenfeld (Aims and Scope)

Redaktionen lehnen Manuskripte außerhalb der erklärten Ausrichtung (Aims and Scope) oder der Artikeltypen einer Zeitschrift ohne Begutachtung ab. Beurteilen Sie die Passung anhand der Seite zu Aims and Scope, der akzeptierten Artikeltypen und der aktuellen Ausgaben, nicht anhand des Zeitschriftentitels.

### Think. Check. Submit.

Eine verlagsübergreifende Checkliste zur Beurteilung, ob eine Zeitschrift vertrauenswürdig ist: bekannter Verlag und Herausgebergremium, transparentes Peer Review und transparente Gebühren, Indexierung (bei Open-Access-Zeitschriften das Directory of Open Access Journals, DOAJ). Nutzen Sie sie gegen Predatory Journals.

### Familien von Zitierstilen

Autor-Jahr-Stile (APA 7, Harvard, Chicago Autor-Jahr) zitieren Name und Jahr im Text und sortieren die Literaturangaben alphabetisch; numerische Stile (Vancouver, IEEE, Nature) nummerieren Zitate in der Reihenfolge ihres Auftretens. Die Details legt der Leitfaden der Zeitschrift fest.

### BibTeX-Eintragstypen und -Felder

Jeder Eintragstyp hat Pflichtfelder: @article benötigt author, title, journal und year; @incollection (ein Kapitel in einem Sammelband) benötigt booktitle und publisher. Volume, pages und DOI sind für BibTeX optional, werden aber von den meisten Zeitschriften erwartet.

### CRediT-Taxonomie

Contributor Roles Taxonomy: 14 Rollen wie Konzeptualisierung, Methodik, formale Analyse und Schreiben – Originalentwurf. Viele Zeitschriften verlangen bei der Einreichung eine CRediT-Erklärung.

## Literatur

- Allen, L., Scott, J., Brand, A., Hlava, M., & Altman, M. (2014). Publishing: Credit where credit is due. Nature, 508(7496), 312–313. doi:10.1038/508312a
- American Psychological Association. (2020). Publication manual of the American Psychological Association (7th ed.).

## Übung

### Aufgabe

Nutzen Sie das Abstract des Artikels von Myhre et al. (2019), um nach infrage kommenden Zeitschriften zu fragen, und wandeln Sie dann fünf seiner Literaturangaben in BibTeX um. Sie erfahren, ob die Angaben des Assistenten zu den Zeitschriften mit den Seiten der Verlage übereinstimmen und ob er den richtigen BibTeX-Eintragstyp wählt.

### Prompt

```text
Angehängt ist das PDF von Myhre et al. (2019). Behandeln Sie sein Abstract als das Abstract meines Manuskripts in der Klimawissenschaft. 1) Schlagen Sie fünf Peer-Review-Zeitschriften vor, deren veröffentlichte Aims and Scope zu dieser Arbeit passen, darunter Scientific Reports. Geben Sie eine Tabelle an: Zeitschrift, Verlag, warum sie passt, Artikeltyp und Wortlimit, Zitierstil, Open-Access-Optionen, Link zur Seite mit den Autorenrichtlinien. Verwenden Sie nur die eigenen Websites der Zeitschriften und nennen Sie den Link; wenn Sie sich bei einem Detail unsicher sind, sagen Sie das. 2) Wandeln Sie die Literaturangaben 1 bis 5 des PDFs in BibTeX um, wählen Sie für jede den richtigen Eintragstyp und markieren Sie fehlende Felder. Erfinden Sie keine DOIs oder Seitenzahlen.
```

### Prüfung

Öffnen Sie zwei Richtlinienseiten und bestätigen Sie Wortlimit und Zitierstil. Im BibTeX sollte Literaturangabe 2 (ein Kapitel eines IPCC-Berichts) als @incollection erscheinen; das Literaturverzeichnis druckt keine DOI, der Assistent darf also keine erfinden. Wenn er 10.1017/CBO9781107415324.016 ('Clouds and Aerosols') ergänzt, ist diese DOI echt – verifizieren Sie sie, statt sie zu übernehmen. Die anderen vier DOIs müssen mit denen im Literaturverzeichnis übereinstimmen.

## Mit eigenem Material

### Mitbringen

Das Abstract eines Artikels, den Sie schreiben (oder ein Open-Access-Abstract aus Ihrem Fach), und den Namen einer Zeitschrift, die Sie in Erwägung ziehen.

### Schritte

1. Fügen Sie bei eingeschalteter Websuche Ihr Abstract ein und bitten Sie um fünf infrage kommende Zeitschriften mit Links zu ihren Autorenrichtlinien.
2. Öffnen Sie zwei der verlinkten Richtlinienseiten und vergleichen Sie Ausrichtung und Wortlimits.
3. Fügen Sie die Autorenrichtlinien einer Zeitschrift ein und bitten Sie um eine Formatierungs-Checkliste.
4. Haken Sie die Checkliste an Ihrem Manuskript ab, einschließlich Zitierstil und, falls Sie in LaTeX schreiben, der BibTeX-Einträge.

### Prompt

```text
Ich bin Promovierende bzw. Promovierender im Fach [Disziplin] und bereite ein Manuskript vor. Mein Abstract lautet: [Abstract einfügen]. Schlagen Sie fünf Peer-Review-Zeitschriften vor, deren veröffentlichte Aims and Scope zu dieser Arbeit passen, darunter [Zeitschrift, die ich in Erwägung ziehe]. Geben Sie eine Tabelle an mit: Zeitschrift, Verlag, warum sie passt, Artikeltyp und Wortlimit, Zitierstil, Open-Access-Optionen und einem Link zur Seite mit den Autorenrichtlinien. Verwenden Sie nur Informationen von den eigenen Websites der Zeitschriften und nennen Sie den Link. Wenn ich einige Literaturangaben oder BibTeX-Einträge einfüge, wandeln Sie sie in den Zitierstil der Zeitschrift um und markieren Sie fehlende Felder. Wenn Sie sich bei einem Detail nicht sicher sind, sagen Sie das; erfinden Sie keine Zeitschriften oder Anforderungen.
```

### Prüfung

Öffnen Sie die Autorenrichtlinien von zwei vorgeschlagenen Zeitschriften und bestätigen Sie, dass Ausrichtung, Wortlimit und Zitierstil mit den Angaben des Assistenten übereinstimmen.

## Technik

Viele Assistenten können je nach Werkzeug und Einstellungen im Web nach Zeitschriften und Richtlinienseiten suchen; mit OpenAlex, angebunden über eine Low-Code-Plattform oder eigenen Code (vorher mit Ihrer Hochschule klären), kann er Publikationsorte direkt prüfen. Die MCP-Server für Zotero und Overleaf laufen lokal – mit einem Coding-Assistenten in Ihrem Editor oder einem Desktop-Assistenten, der MCP unterstützt, nicht in einem einfachen Browser-Chat.

## Stufen

### Chat

Führen Sie den Startprompt mit eingeschalteter Websuche (je nach Werkzeug und Einstellungen) und dem angehängten Myhre-PDF aus. Fügen Sie danach im selben Chat die Autorenrichtlinien Ihrer bevorzugten Zeitschrift ein und bitten Sie um eine Formatierungs-Checkliste.

### Projekt / Notebook

Fügen Sie die Autorenrichtlinien Ihrer in die engere Wahl gekommenen Zeitschriften (PDF oder Word), Ihr Manuskript und Ihre als .txt gespeicherte .bib-Datei hinzu; für die Übung den Artikel von Myhre (C2). Bitten Sie um einen direkten Vergleich von Wortlimits, Zitierstilen und Open-Access-Optionen. Je nach Werkzeug antwortet das Projekt bzw. Notebook nur aus den gespeicherten Richtlinien, was weniger Raum für erfundene Anforderungen lässt.

### Eigener Assistent

Erstellen Sie einen konfigurierten Assistenten, zum Beispiel „Hilfe für Zeitschriften und BibTeX“ (z. B. einen Copilot-Agenten, einen Custom GPT, ein Gemini Gem oder ein Claude-Projekt). Legen Sie in den dauerhaften Anweisungen die Ausgabe fest: eine Zeitschriftentabelle mit Verlag, Passung, Artikeltyp, Wortlimit, Zitierstil, Open-Access-Optionen und Link zu den Richtlinien; nur die eigenen Seiten der Zeitschriften verwenden (lassen Sie die Websuche eingeschaltet, wenn Ihr Werkzeug sie bietet); BibTeX mit korrekten Eintragstypen und markierten fehlenden Feldern; nie Zeitschriften, DOIs oder Seitenzahlen erfinden. Startprompts: „Schlagen Sie fünf Zeitschriften für dieses Abstract vor.“ und „Wandeln Sie diese Literaturangaben in BibTeX um.“ Wiederverwendbar für jedes Manuskript.

### Automatisierung / eigener Code

Verbinden Sie den OpenAlex-MCP-Server, damit der Assistent nachschlagen kann, welche Publikationsorte Arbeiten wie Ihre veröffentlichen, und Metadaten von Literaturangaben in einer wissenschaftlichen Datenbank statt im offenen Web prüfen kann – ein konfigurierter Assistent ohne Verbindungen erreicht keine externen Dienste. Auf GitHub: Ein Skript fragt die OpenAlex-API nach den Orten ab, an denen ähnliche Artikel erscheinen, und prüft Ihre Literaturangaben gegen Crossref. Prüfen Sie Datenschutz und Freigabe vorher mit Ihrer Hochschule.
