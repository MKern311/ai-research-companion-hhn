---
id: publikation-5
phase: publikation
order: 5
title: Auf Gutachten antworten
risk: 2
mode: Co-create
potential: 2
capabilities: synthese; generierung
routes: chat; files
repos: ars-paper
data: C5
practice_data: C5
---

Kommentare von Gutachtenden strukturieren und das Antwortschreiben samt Zusammenfassung der Änderungen entwerfen.

## Problem

Gutachten mischen wesentliche und geringfügige Punkte über mehrere Gutachtende hinweg; eine vollständige, höfliche Punkt-für-Punkt-Antwort zu entwerfen ist langwierig, und ein übersehener Kommentar kann die Annahme verzögern.

## Ergebnis

Eine nummerierte Tabelle aller Kommentare mit Ihrer geplanten Maßnahme und ein Entwurf des Punkt-für-Punkt-Schreibens, in dem Lücken zum Ausfüllen markiert sind – nichts wird behauptet, was Sie nicht geändert haben.

## Vorgehen

1. Alle Kommentare einfügen und eine nummerierte Tabelle anfordern
2. Jeden als wesentlich oder geringfügig einstufen und Ihre Maßnahme ergänzen
3. Ein Punkt-für-Punkt-Schreiben anfordern, das jeden Kommentar zitiert
4. Wo Sie widersprechen, Gründe und Belege angeben
5. Prüfen, dass jede Zeile der Tabelle im Schreiben vorkommt

## Konzepte

### Punkt-für-Punkt-Antwort (Point-by-Point Response)

Das Standardformat für Überarbeitungen: jeden Kommentar zitieren, direkt beantworten und die Änderung mit ihrer Fundstelle (Seite, Zeile oder Abschnitt) benennen. Behalten Sie die Nummerierung der Gutachtenden bei, damit die Redaktion jeden Punkt nachverfolgen kann.

### Wesentliche und geringfügige Überarbeitungen (Major and Minor Revisions)

Wesentliche Kommentare betreffen Design, Analyse, Validität oder Schlussfolgerungen und erfordern meist neue Arbeit oder umfangreiches Umschreiben; geringfügige betreffen Klarheit, Darstellung oder Literaturangaben. Gehen Sie auf alle ein, planen Sie den Aufwand aber nach dieser Unterscheidung.

### Begründeter Widerspruch

Sie dürfen eine Bitte ablehnen: Bedanken Sie sich bei der Gutachterin bzw. dem Gutachter, nennen Sie Ihre Gründe mit Belegen oder Zitaten und nehmen Sie, wenn möglich, eine kleinere Änderung vor (zum Beispiel einen Satz zu einer Einschränkung). Die Redaktion entscheidet, schreiben Sie also für die Redaktion.

### Offenes Peer Review (Open Peer Review)

Gutachten und Antworten der Autorinnen und Autoren werden zusammen mit dem Artikel veröffentlicht, wie bei den interaktiven Diskussionen von Copernicus, eLife oder F1000Research. Ross-Hellauer benennt Merkmale wie offene Identitäten, offene Gutachten und offene Interaktion; veröffentlichte Gutachten sind Vorbilder für Ihre eigene Antwort.

## Literatur

- Noble, W. S. (2017). Ten simple rules for writing a response to reviewers. PLOS Computational Biology, 13(10), e1005730. doi:10.1371/journal.pcbi.1005730
- Ross-Hellauer, T. (2017). What is open peer review? A systematic review. F1000Research, 6, 588. doi:10.12688/f1000research.11369.2

## Übung

### Aufgabe

Finden Sie die öffentlichen Gutachterkommentare zum Diskussionspapier hinter Schumacher et al. (2024) und entwerfen Sie eine Antwort, wobei Sie das veröffentlichte PDF als überarbeitete Fassung verwenden. Sie erfahren, ob der Assistent echte Kommentare abruft oder erfindet und ob er nicht überprüfbare Änderungen behauptet.

### Prompt

```text
Angehängt ist das PDF von Schumacher et al. (2024) aus Earth System Dynamics, die endgültige Fassung eines Artikels, der eine offene öffentliche Diskussion durchlaufen hat. 1) Finden Sie die öffentlichen Gutachterkommentare (RC1, RC2) zu seinem Diskussionspapier: Es wurde als Preprint egusphere-2023-717 auf EGUsphere diskutiert, und die Artikelseite verlinkt unter 'Peer review' auf die Diskussion. Nennen Sie den Link. Wenn Sie die Kommentare nicht öffnen können, sagen Sie das und hören Sie auf – rekonstruieren Sie sie nicht; ich füge sie dann selbst ein. 2) Listen Sie jeden Gutachterkommentar in einer Tabelle auf: Nummer, Gutachter, wesentlich oder geringfügig, was gefordert wird. 3) Behandeln Sie das angehängte PDF als überarbeitetes Manuskript und entwerfen Sie eine Punkt-für-Punkt-Antwort, die jeweils zuerst den Kommentar zitiert. Wo Sie im PDF nicht erkennen können, ob eine Forderung umgesetzt wurde, schreiben Sie [ANTWORT ERGÄNZEN]. Behaupten Sie keine Änderung, auf die Sie im PDF nicht verweisen können.
```

### Prüfung

Öffnen Sie https://egusphere.copernicus.org/preprints/2023/egusphere-2023-717/ selbst und prüfen Sie drei Kommentare aus RC1: Jeder muss mit der richtigen Forderung in der Tabelle des Assistenten stehen, und kein Kommentar darf erfunden sein. Konnte der Assistent die Seite nicht öffnen, fügen Sie RC1 in den Chat ein und fahren Sie fort. Vergleichen Sie, wenn die Zeit reicht, eine Antwort mit der Antwort der Autorinnen und Autoren in AC1 (dort als PDF angehängt).

## Mit eigenem Material

### Mitbringen

Gutachterkommentare aus einem veröffentlichten offenen Peer Review (zum Beispiel von eLife, F1000Research oder BMJ) oder anonymisierte Kommentare zu Ihrem eigenen Artikel sowie einige Notizen zu Änderungen, die Sie vorgenommen haben.

### Schritte

1. Fügen Sie die Gutachterkommentare ein und bitten Sie um eine nummerierte Tabelle aller Punkte.
2. Ergänzen Sie Ihre Notizen dazu, was Sie geändert haben oder warum Sie widersprechen.
3. Bitten Sie um einen Entwurf des Antwortschreibens und eine kurze Zusammenfassung der Änderungen.
4. Vergleichen Sie das Schreiben mit der Tabelle, um zu sehen, dass kein Kommentar fehlt.

### Prompt

```text
Ich überarbeite ein Manuskript im Fach [Disziplin] nach dem Peer Review. Unten stehen die Gutachterkommentare: [Kommentare einfügen]. Meine Notizen zu vorgenommenen Änderungen oder Punkten, denen ich widerspreche: [Notizen einfügen]. Listen Sie zuerst jeden Kommentar in einer Tabelle auf: Nummer, Gutachter, wesentlich oder geringfügig, was gefordert wird, meine geplante Maßnahme. Entwerfen Sie dann ein höfliches, knappes Antwortschreiben, das jeden Kommentar der Reihe nach beantwortet und ihn zuerst zitiert. Wo meine Notizen keine Antwort enthalten, schreiben Sie [ANTWORT ERGÄNZEN], statt eine zu erfinden. Behaupten Sie keine Änderung, die ich nicht aufgeführt habe. Schließen Sie mit einer Zusammenfassung der Änderungen in höchstens fünf Stichpunkten.
```

### Prüfung

Jeder Gutachterkommentar steht genau einmal in der Tabelle, und das Schreiben behauptet keine Änderung, die nicht in Ihren Notizen steht.

## Technik

Fügen Sie die Kommentare in Ihren KI-Assistenten ein oder laden Sie das Entscheidungsschreiben hoch; die Platzhalter [ANTWORT ERGÄNZEN] zeigen, wo Ihre eigene Antwort noch fehlt, und die Tabelle lässt Sie bestätigen, dass jeder Kommentar einmal beantwortet ist.

## Stufen

### Chat

Führen Sie den Startprompt mit dem angehängten Schumacher-PDF aus. Fügen Sie danach im selben Chat Ihre Notizen zu zwei Kommentaren ein und bitten Sie um die passenden Antworten, mit [ANTWORT ERGÄNZEN] überall dort, wo Ihre Notizen nichts sagen.

### Projekt / Notebook

Fügen Sie die Gutachterkommentare (in Word eingefügt), Ihr überarbeitetes Manuskript und ein Änderungsprotokoll hinzu; für die Übung den Artikel von Schumacher (C5) und RC1, gespeichert von der Diskussionsseite. Fragen Sie, welche Kommentare das Änderungsprotokoll noch nicht beantwortet. Über mehrere Überarbeitungsrunden bleiben Kommentare, Änderungen und Antworten an einem Ort.

### Eigener Assistent

Legen Sie in den Anweisungen die Regeln fest: jeden Kommentar in einer Tabelle nummerieren, ihn vor jeder Antwort zitieren, Antworten höflich und knapp halten, [ANTWORT ERGÄNZEN] schreiben, wo Ihre Notizen keine Antwort enthalten, nie eine Änderung behaupten, die Sie nicht aufgeführt haben, und mit einer kurzen Zusammenfassung der Änderungen schließen. Startprompt: „Hier sind die Kommentare und meine Notizen – entwerfen Sie das Antwortschreiben.“ Wiederverwendbar für jede Überarbeitungsrunde. Laden Sie nie Manuskripte hoch, die Sie für andere begutachten.
