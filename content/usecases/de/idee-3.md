---
id: idee-3
phase: idee
order: 3
title: Neuheitsprüfung
risk: 2
mode: Assist
potential: 3
capabilities: recherche
routes: chat; connected; external
connect: Semantic Scholar; OpenAlex; Consensus; Elicit
tools: Semantic Scholar; Epsilon; Google Scholar
data: B2; C3
practice_ref: C3; B2
---

Semantische Suche nach eng verwandten Arbeiten, um Doppelungen früh zu erkennen und Ihre Positionierung zu schärfen.

## Problem

Monate nach Projektbeginn stellen Sie womöglich fest, dass Ihre Studie schon existiert: Schlagwortsuchen übersehen eng verwandte Arbeiten, die andere Begriffe, das Vokabular eines anderen Fachs oder eine andere Analyseeinheit verwenden.

## Ergebnis

Eine kurze, geprüfte Liste der nächstliegenden Studien mit Angabe, wie sie sich jeweils überschneiden, und eine Positionierungsaussage, die die Art Ihres Beitrags benennt – frühe Beruhigung oder früher Kurswechsel, niemals ein Beweis für Neuheit.

## Vorgehen

1. Fassen Sie Ihre geplante Studie in etwa 150 Wörtern zusammen
2. Bitten Sie Ihren KI-Assistenten um die nächstliegenden Studien mit funktionierenden Links
3. Öffnen Sie jeden Link und verwerfen Sie alles, was nicht existiert
4. Wiederholen Sie die Suche in Google Scholar und verfolgen Sie Vorwärtszitationen
5. Halten Sie fest, was Sie hinzufügen: Replikation, Erweiterung oder neue Frage

## Konzepte

### Originalität und Beitrag (Corley & Gioia)

Beiträge werden nach Originalität – inkrementell oder revelatorisch – und nach Nutzen – wissenschaftlich oder praktisch – beurteilt. Wer seine Studie auf beiden Dimensionen verortet, macht aus „neu“ eine Behauptung, die sich gegenüber der nächstliegenden Arbeit verteidigen lässt.

### Formen der Originalität in einer Promotion

Phillips und Pugh nennen mehrere, etwa neue Evidenz zu einem alten Thema, eine etablierte Methode in einem neuen Setting oder eine originelle Synthese. Wer seine Form benennt, zeigt, dass eine eng verwandte Arbeit ein Projekt nicht beenden muss.

### Semantische (embeddingbasierte) Suche

Texte werden in Vektoren umgewandelt und nach Bedeutungsähnlichkeit gereiht, sodass auch Studien mit anderen Begriffen auftauchen können. Die Ergebnisse hängen vom Index und vom Modell ab; Vollständigkeit (Recall) ist nie garantiert.

### Zitationsverfolgung (Snowballing)

Rückwärtsverfolgung folgt den Referenzen eines Papers, Vorwärtsverfolgung den Papern, die es zitieren. Wohlin (2014) gibt Regeln für die Iteration; so findet man Arbeiten, die Schlagwortsuchen übersehen.

### Direkte und konzeptionelle Replikation

Eine direkte Replikation wiederholt das Verfahren einer Studie; eine konzeptionelle Replikation prüft dieselbe Frage mit anderen Methoden, Daten oder Settings. Wer eine nahe Studie findet, kann sein Projekt zu einer wertvollen Replikation statt zu einer Sackgasse machen.

## Literatur

- Corley, K. G., & Gioia, D. A. (2011). Building theory about theory building: What constitutes a theoretical contribution? Academy of Management Review, 36(1), 12–32. doi:10.5465/amr.2009.0486
- Wohlin, C. (2014). Guidelines for snowballing in systematic literature studies and a replication in software engineering. In Proceedings of the 18th International Conference on Evaluation and Assessment in Software Engineering (Article 38). ACM. doi:10.1145/2601248.2601268
- Phillips, E. M., & Pugh, D. S. (2015). How to get a PhD: A handbook for students and their supervisors (6th ed.). Open University Press.

## Übung

### Aufgabe

Beschreiben Sie die Studie von Christidis et al. (2023) so, als wäre sie Ihr eigener Plan, und fragen Sie Ihren KI-Assistenten, ob sie schon durchgeführt wurde. Sie erfahren, ob seine Websuche genau das Paper findet, das bereits existiert, und wie viele seiner Links echt sind.

### Prompt

```text
Ich bin Promovierende bzw. Promovierender und prüfe, ob meine geplante Studie schon durchgeführt wurde. Meine Projektzusammenfassung: Ich plane zu schätzen, wie der menschengemachte Klimawandel die Wahrscheinlichkeit täglicher Höchsttemperaturen über 50 °C an etwa einem Dutzend Orten rund um das Mittelmeer und im Nahen Osten verändert hat. Ich werde Klimamodellsimulationen mit und ohne menschlichen Einfluss in einem risikobasierten Attributionsansatz vergleichen und projizieren, wie oft solche Tage bis 2100 auftreten könnten. Suchen Sie bis zu acht veröffentlichte Studien, die dem am nächsten kommen. Nennen Sie zu jeder Autorinnen und Autoren, Jahr, Titel, einen funktionierenden Link und einen Satz dazu, wie sie sich mit meinem Projekt überschneidet oder davon unterscheidet. Listen Sie nur Studien auf, die Sie tatsächlich mit einem Link gefunden haben; erfinden Sie keine Quellen. Schließen Sie mit zwei Sätzen dazu, wie ich meine Studie positionieren könnte.
```

### Prüfung

Der Assistent sollte Christidis, Mitchell und Stott (2023) finden – der Plan beschreibt dieses Paper. Öffnen Sie jeden Link. Prüfen Sie auch, ob er Christidis et al. (2020) gefunden hat, die UK-Studie, deren Methode das Paper von 2023 überträgt.

## Mit eigenem Material

### Mitbringen

Eine kurze Zusammenfassung (etwa 150 Wörter) Ihres geplanten Projekts oder Ihrer Entwurfs-Forschungsfrage.

### Schritte

1. Fügen Sie Ihre Zusammenfassung ein und bitten Sie um eng verwandte veröffentlichte Studien mit Links.
2. Bitten Sie um einen Satz pro Studie dazu, wie sie sich mit Ihrer überschneidet.
3. Öffnen Sie jeden Link und prüfen Sie, ob das Paper existiert und zur Beschreibung passt.
4. Führen Sie eine kurze Google-Scholar-Suche durch und vergleichen Sie, was der Assistent übersehen hat.

### Prompt

```text
Ich bin Promovierende bzw. Promovierender in [Fachgebiet] und prüfe, ob meine geplante Studie schon durchgeführt wurde. Meine Projektzusammenfassung lautet: [Zusammenfassung]. Suchen Sie bis zu acht veröffentlichte Studien, die ihr am nächsten kommen. Nennen Sie zu jeder Autorinnen und Autoren, Jahr, Titel, einen funktionierenden Link und einen Satz dazu, wie sie sich mit meinem Projekt überschneidet oder davon unterscheidet. Listen Sie nur Studien auf, die Sie tatsächlich mit einem Link gefunden haben. Wenn Sie nicht sicher sind, sagen Sie es; erfinden Sie keine Quellen. Schließen Sie mit zwei Sätzen dazu, wie ich meine Studie positionieren könnte.
```

### Prüfung

Jeder Link öffnet ein echtes Paper, das sagt, was der Assistent behauptet, und eine kurze Google-Scholar-Suche zeigt keine offensichtlich näherliegende Studie, die er übersehen hat.

### Grenze

Ein Assistent mit Websuche deckt das offene Web ab, nicht Bibliotheksdatenbanken, und kann Literatur übersehen; dies ist ein erster Scan, kein Beweis für Neuheit.

## Technik

Assistenten mit Websuche liefern Links, die geprüft werden müssen. Ist Semantic Scholar oder OpenAlex angebunden (sofern Ihr Werkzeug und Ihre Hochschule dies erlauben), durchsucht der Assistent wissenschaftliche Datensätze direkt; Consensus und Elicit liefern zusätzlich Antworten aus begutachteten Studien.

## Stufen

### Chat

Führen Sie den Startprompt mit eingeschalteter Websuche aus (die Verfügbarkeit hängt von Ihrem Werkzeug und Ihren Einstellungen ab). Bitten Sie den Assistenten im selben Chat, nur Studien zu behalten, deren Links er tatsächlich geöffnet hat, und erneut mit den Begriffen zu suchen, die ein Nachbarfach verwenden würde.

### Projekt / Notebook

Je nach Werkzeug antwortet ein Projekt oder Notebook nur aus seinen Quellen und durchsucht möglicherweise nicht das Web, nutzen Sie es daher nach der Suche: Fügen Sie die geprüften Paper hinzu, die Sie gefunden haben (Übung: C3 und B2), und Ihre Projektzusammenfassung als .docx. Fragen Sie, wie sich jede Studie mit Ihrem Design, Ihren Daten und Ihrem Setting überschneidet, und entwerfen Sie die Positionierungsaussage aus diesen Quellen. Ergänzen Sie neue Paper, sobald sie erscheinen.

### Eigener Assistent

Nennen Sie ihn „Neuheitsprüfung“. Anweisungen: bis zu acht nächstliegende Studien, jeweils mit Autorinnen und Autoren, Jahr, Titel, funktionierendem Link und einem Satz zur Überschneidung; nur Studien, die er tatsächlich gefunden hat; eine Positionierungsaussage in zwei Sätzen; und der Hinweis, dass dies ein erster Scan und kein Beweis für Neuheit ist. Kein Code nötig. Startprompt: „Wurde diese Studie schon durchgeführt? Hier ist meine Zusammenfassung.“ Wiederverwendbar, wenn sich Ihr Plan oder Ihre Frage verschiebt.

### Automatisierung / eigener Code

Binden Sie den Semantic-Scholar- oder OpenAlex-MCP-Server oder, falls Ihre Plattform einen anbietet, einen Consensus- oder scite-Connector an, damit der Assistent eine wissenschaftliche Datenbank statt des offenen Webs durchsucht; ein geplanter Workflow (z. B. in Power Automate oder n8n) könnte die Prüfung monatlich wiederholen. Ein konfigurierter Assistent allein kann diese meist nicht anbinden. Auf GitHub: Ein Skript fragt die OpenAlex- oder Semantic-Scholar-API ab, und ein geplanter GitHub-Actions-Workflow führt es monatlich erneut aus und speichert neue Treffer. Prüfen Sie Datenschutz und Freigabe vorher mit Ihrer Hochschule.
