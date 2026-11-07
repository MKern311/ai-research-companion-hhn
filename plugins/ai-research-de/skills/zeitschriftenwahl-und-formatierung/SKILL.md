---
name: zeitschriftenwahl-und-formatierung
description: "Passende Zeitschriften nach Ausrichtung und Anforderungen finden; Formatierungsrichtlinien, Zitierstile und LaTeX- bzw. BibTeX-Konventionen anwenden. Einsetzen bei: Zeitschriftenwahl und Formatierung."
---

# Zeitschriftenwahl und Formatierung

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/publikation-3

## Ziel

Passende Zeitschriften nach Ausrichtung und Anforderungen finden; Formatierungsrichtlinien, Zitierstile und LaTeX- bzw. BibTeX-Konventionen anwenden.

Eine Auswahlliste seriöser Zeitschriften mit Links zu deren eigenen Richtlinien, eine Formatierungs-Checkliste für Ihre Wahl und in deren Stil umgewandelte Literaturangaben, bei denen fehlende BibTeX-Felder markiert sind.

## Wann einsetzen

Eine Zeitschrift zu finden, deren Ausrichtung passt, und dann Literaturangaben und Layout nach ihren Richtlinien umzuformatieren, kostet Stunden – und eine Ablehnung ohne Begutachtung (Desk Rejection) wegen mangelnder Passung kostet Wochen.

## Vorgehen

1. Fügen Sie bei eingeschalteter Websuche Ihr Abstract ein und bitten Sie um fünf infrage kommende Zeitschriften mit Links zu ihren Autorenrichtlinien.
2. Öffnen Sie zwei der verlinkten Richtlinienseiten und vergleichen Sie Ausrichtung und Wortlimits.
3. Fügen Sie die Autorenrichtlinien einer Zeitschrift ein und bitten Sie um eine Formatierungs-Checkliste.
4. Haken Sie die Checkliste an Ihrem Manuskript ab, einschließlich Zitierstil und, falls Sie in LaTeX schreiben, der BibTeX-Einträge.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.
- Erstellen Sie einen konfigurierten Assistenten, zum Beispiel „Hilfe für Zeitschriften und BibTeX“ (z. B. einen Copilot-Agenten, einen Custom GPT, ein Gemini Gem oder ein Claude-Projekt). Legen Sie in den dauerhaften Anweisungen die Ausgabe fest: eine Zeitschriftentabelle mit Verlag, Passung, Artikeltyp, Wortlimit, Zitierstil, Open-Access-Optionen und Link zu den Richtlinien; nur die eigenen Seiten der Zeitschriften verwenden (lassen Sie die Websuche eingeschaltet, wenn Ihr Werkzeug sie bietet); BibTeX mit korrekten Eintragstypen und markierten fehlenden Feldern; nie Zeitschriften, DOIs oder Seitenzahlen erfinden. Startprompts: „Schlagen Sie fünf Zeitschriften für dieses Abstract vor.“ und „Wandeln Sie diese Literaturangaben in BibTeX um.“ Wiederverwendbar für jedes Manuskript.

## Startprompt

```text
Ich bin Promovierende bzw. Promovierender im Fach [Disziplin] und bereite ein Manuskript vor. Mein Abstract lautet: [Abstract einfügen]. Schlagen Sie fünf Peer-Review-Zeitschriften vor, deren veröffentlichte Aims and Scope zu dieser Arbeit passen, darunter [Zeitschrift, die ich in Erwägung ziehe]. Geben Sie eine Tabelle an mit: Zeitschrift, Verlag, warum sie passt, Artikeltyp und Wortlimit, Zitierstil, Open-Access-Optionen und einem Link zur Seite mit den Autorenrichtlinien. Verwenden Sie nur Informationen von den eigenen Websites der Zeitschriften und nennen Sie den Link. Wenn ich einige Literaturangaben oder BibTeX-Einträge einfüge, wandeln Sie sie in den Zitierstil der Zeitschrift um und markieren Sie fehlende Felder. Wenn Sie sich bei einem Detail nicht sicher sind, sagen Sie das; erfinden Sie keine Zeitschriften oder Anforderungen.
```

## Prüfung

Öffnen Sie die Autorenrichtlinien von zwei vorgeschlagenen Zeitschriften und bestätigen Sie, dass Ausrichtung, Wortlimit und Zitierstil mit den Angaben des Assistenten übereinstimmen.

## Grenzen

- Risiko: Öffentliches oder eigenes, nicht sensibles Material; Fehler sind leicht zu erkennen.

## Wichtige Konzepte

- **Passung zu Ausrichtung und Themenfeld (Aims and Scope)** – Redaktionen lehnen Manuskripte außerhalb der erklärten Ausrichtung (Aims and Scope) oder der Artikeltypen einer Zeitschrift ohne Begutachtung ab. Beurteilen Sie die Passung anhand der Seite zu Aims and Scope, der akzeptierten Artikeltypen und der aktuellen Ausgaben, nicht anhand des Zeitschriftentitels.
- **Think. Check. Submit.** – Eine verlagsübergreifende Checkliste zur Beurteilung, ob eine Zeitschrift vertrauenswürdig ist: bekannter Verlag und Herausgebergremium, transparentes Peer Review und transparente Gebühren, Indexierung (bei Open-Access-Zeitschriften das Directory of Open Access Journals, DOAJ). Nutzen Sie sie gegen Predatory Journals.
- **Familien von Zitierstilen** – Autor-Jahr-Stile (APA 7, Harvard, Chicago Autor-Jahr) zitieren Name und Jahr im Text und sortieren die Literaturangaben alphabetisch; numerische Stile (Vancouver, IEEE, Nature) nummerieren Zitate in der Reihenfolge ihres Auftretens. Die Details legt der Leitfaden der Zeitschrift fest.
- **BibTeX-Eintragstypen und -Felder** – Jeder Eintragstyp hat Pflichtfelder: @article benötigt author, title, journal und year; @incollection (ein Kapitel in einem Sammelband) benötigt booktitle und publisher. Volume, pages und DOI sind für BibTeX optional, werden aber von den meisten Zeitschriften erwartet.
- **CRediT-Taxonomie** – Contributor Roles Taxonomy: 14 Rollen wie Konzeptualisierung, Methodik, formale Analyse und Schreiben – Originalentwurf. Viele Zeitschriften verlangen bei der Einreichung eine CRediT-Erklärung.

## Wichtige Literatur

- Allen, L., Scott, J., Brand, A., Hlava, M., & Altman, M. (2014). Publishing: Credit where credit is due. Nature, 508(7496), 312–313. https://doi.org/10.1038/508312a
- American Psychological Association. (2020). Publication manual of the American Psychological Association (7th ed.).

## Hilfreiche Werkzeuge

Zotero · Overleaf · OpenAlex · EndNote
