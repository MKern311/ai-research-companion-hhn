---
id: transfer-2
phase: transfer
order: 2
title: Forschungsbasierte Lehre
risk: 1
mode: Co-create
potential: 2
capabilities: generierung
routes: files; chat
tools: Gemini Notebook (formerly NotebookLM)
data: B2; D1
practice_data: B2; D1
---

Entwickeln Sie aus aktuellen Forschungsbefunden Fallstudien, Übungen und Fragen für Ihre Lehre.

## Problem

Aktuelle Forschung in Seminare zu bringen heißt, Fälle und Fragen von Grund auf zu bauen, und Wiedergabefragen sind schneller geschrieben als Fragen, die Studierende Befunde anwenden oder bewerten lassen.

## Ergebnis

Ein Seminarfall, Diskussionsfragen auf der Anwenden-Stufe der überarbeiteten Bloom'schen Taxonomie oder höher und eine Datenübung, abgestimmt auf Ihr Lernergebnis, mit aufgelisteten Vereinfachungen, die Sie prüfen.

## Vorgehen

1. Laden Sie die Arbeit mit Modul, Niveau und Lernergebnis hoch
2. Bitten Sie um eine Fallstudie von 400 Wörtern auf Basis der Arbeit
3. Ergänzen Sie Fragen und eine Übung auf Anwenden-Stufe oder höher
4. Prüfen Sie, ob Lernergebnis, Aktivität und Prüfung aufeinander abgestimmt sind
5. Prüfen Sie Fakten und Zahlen des Falls gegen die Arbeit

## Konzepte

### Constructive Alignment

Biggs' Prinzip, dass beabsichtigte Lernergebnisse, Lehr-Lern-Aktivitäten und Prüfungsaufgaben aufeinander abgestimmt gestaltet werden: Studierende lernen, was die Aktivität sie tun lässt, also muss die Aktivität verlangen, was das Lernergebnis nennt.

### Überarbeitete Bloom'sche Taxonomie (Revised Bloom's taxonomy)

Sechs kognitive Prozessstufen – erinnern, verstehen, anwenden, analysieren, bewerten, erschaffen (Anderson & Krathwohl 2001). Formulieren Sie Diskussionsfragen und Übungen auf der Anwenden-Stufe oder höher, wenn das Lernergebnis mehr als Wiedergabe verlangt.

### Verbindung von Forschung und Lehre (Healey)

Vier Wege, Forschung in die Lehre zu bringen: forschungsgeleitet (Befunde lernen), forschungsorientiert (lernen, wie Forschung betrieben wird), forschungsbegleitet (Arbeiten diskutieren), forschungsbasiert (Studierende forschen selbst). Eine Datenübung rückt eine Sitzung in Richtung forschungsbasiert.

### Fallbasiertes Lernen (Case-based learning)

Studierende bearbeiten ein realistisches, begrenztes Szenario mit einer Frage oder Entscheidung und wenden Konzepte auf Evidenz an. Fälle, die aus einer echten Arbeit stammen, sollten deren Fakten beibehalten und sagen, wo sie vereinfachen.

## Literatur

- Biggs, J. (1996). Enhancing teaching through constructive alignment. Higher Education, 32(3), 347–364. doi:10.1007/BF00138871
- Anderson, L. W., & Krathwohl, D. R. (Eds.). (2001). A taxonomy for learning, teaching, and assessing: A revision of Bloom's taxonomy of educational objectives. Longman.
- Healey, M. (2005). Linking research and teaching: Exploring disciplinary spaces and the role of inquiry-based learning. In R. Barnett (Ed.), Reshaping the university: New relationships between research, scholarship and teaching (pp. 67–78). McGraw-Hill/Open University Press.

## Übung

### Aufgabe

Bauen Sie einen Seminarfall zur Arbeit von Christidis et al. (2020) mit einer Datenübung zur Reihe der täglichen Höchsttemperaturen für Central England. Sie lernen, ob der Assistent die Fakten der Arbeit korrekt wiedergibt und die Musterlösung der Übung richtig berechnet.

### Prompt

```text
Ich unterrichte ein Modul zu Umweltdaten im zweiten Studienjahr (Bachelor). Das Lernergebnis lautet: „Studierende interpretieren beobachtete Temperaturextreme im Lichte der Attributionsforschung.“ Angehängt sind das PDF von Christidis et al. (2020) und die Textdatei der täglichen HadCET-Höchsttemperaturen. 1) Schreibe eine Fallstudie von etwa 400 Wörtern auf Basis der Arbeit, für eine 20-minütige Seminaraktivität. 2) Ergänze drei Diskussionsfragen auf der Stufe Anwenden, Analysieren oder Bewerten der überarbeiteten Bloom'schen Taxonomie, nicht Wiedergabe. 3) Entwirf eine Übung mit der Datendatei: Zähle die Tage mit mindestens 30 °C pro Jahrzehnt seit 1900 und finde den heißesten Tag des Jahres 2022. Gib eine Musterlösung mit Python-Code. Liste jede Vereinfachung auf, die du vorgenommen hast.
```

### Prüfung

Führen Sie den Code erneut aus: Die Datei zeigt 37.3 °C am 19. Juli 2022 und sieben Tage mit mindestens 30 °C im Jahr 2022. Die Fakten des Falls müssen mit der Arbeit übereinstimmen, und der Fall sollte erwähnen, dass CET eine regionale Reihe ist.

## Mit eigenem Material

### Mitbringen

Eine Open-Access-Arbeit aus Ihrem Fach (Ihre eigene oder eine neuere) und das Niveau des Moduls, das Sie unterrichten oder betreuen, z. B. zweites Studienjahr im Bachelor.

### Schritte

1. Hängen Sie die Arbeit an und nennen Sie Modul, Niveau und Lernergebnis.
2. Bitten Sie um eine kurze Fallstudie auf Basis der Arbeit.
3. Bitten Sie um drei Diskussionsfragen und eine angewandte Übung.
4. Prüfen Sie, ob die Fakten des Falls mit der Arbeit übereinstimmen und die Fragen Anwendung verlangen.

### Prompt

```text
Ich unterrichte [Modul] für Studierende auf dem Niveau [Niveau] in [Fach]. Angehängt ist eine aktuelle Arbeit: [Titel]. Das Lernergebnis lautet: [Lernergebnis einfügen]. Schreibe eine Fallstudie von etwa 400 Wörtern auf Basis des Settings und der Befunde der Arbeit, geeignet für eine 20-minütige Seminaraktivität. Ergänze drei Diskussionsfragen, die Studierende Befunde anwenden oder bewerten lassen, nicht nur wiedergeben, und eine kurze angewandte Übung. Behalte Fakten und Zahlen wie in der Arbeit bei und liste jede Vereinfachung auf, damit ich sie prüfen kann.
```

### Prüfung

Jedes Faktum und jede Zahl im Fall lässt sich in der Arbeit finden, und jede Frage lässt Studierende anwenden, vergleichen oder beurteilen statt wiederholen.

## Technik

Laden Sie das Open-Access-PDF in Ihren KI-Assistenten hoch; für eine Datenübung ergänzen Sie eine Übungsdatei und lassen den Assistenten die Aufgabe und eine Musterlösung in Python entwerfen (wenn er Code ausführen kann), die Sie vor dem Einsatz in der Lehre erneut ausführen.

## Stufen

### Chat

Führen Sie den Startprompt mit beiden angehängten Dateien aus. Bitten Sie den Assistenten im selben Chat, jede Frage und die Übung dem Lernergebnis und einer Bloom-Stufe zuzuordnen und die Zeilen von 2022 zu zeigen, die sein Code gezählt hat.

### Projekt / Notebook

Fügen Sie B2, die D1-Textdatei und Ihre Modulbeschreibung mit ihren Lernergebnissen hinzu. Bitten Sie um Fälle und Fragen über alles und behalten Sie freigegebene als gespeicherte Notizen – eine Lehrbank für das Modul, die mit jeder neuen Arbeit wächst. Je nach Werkzeug führt ein Notebook kein Python aus – dann berechnen Sie Musterlösungen in einem Chat und fügen sie als Dokument hinzu.

### Eigener Assistent

Anweisungen: Länge und Format des Falls, Fragen auf der Anwenden-Stufe der überarbeiteten Bloom'schen Taxonomie oder höher, Lernergebnis, Aktivität und Prüfung aufeinander abgestimmt, Fakten nur aus der angehängten Arbeit, eine Liste der Vereinfachungen, Musterlösungen mit Code. Wissen: Ihre Modulbeschreibung und Lernergebnisse. Schalten Sie „Dokumente, Diagramme und Code erstellen“ für Datenübungen ein. Startprompt: „Seminarfall und drei Fragen aus dieser Arbeit“. Für jede neue Arbeit und jedes Modul wiederverwendbar.
