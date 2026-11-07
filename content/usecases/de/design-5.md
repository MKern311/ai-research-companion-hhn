---
id: design-5
phase: design
order: 5
title: Abschließende Prüfung der Befragung
risk: 2
mode: Assist
potential: 3
capabilities: analyse; generierung
routes: files; chat
---

Lassen Sie Ihren KI-Assistenten den fertigen Fragebogen entlang verschiedener Antwortpfade durchgehen, um fehlerhafte Filterführung, fehlende oder überlappende Antwortoptionen und inkonsistente Skalen zu finden – und ihn als Ganzes Korrektur lesen.

## Problem

Fehlerhafte Filterlogik, überlappende Antwortoptionen und inkonsistente Skalen entgehen Ihnen, wenn Sie Ihren eigenen Fragebogen zwanzigmal gelesen haben – und zeigen sich erst in den Daten.

## Ergebnis

Drei durchgespielte Befragtenpfade, eine Korrekturliste für Filterführung und Antwortoptionen (disjunkt, erschöpfend, konsistente Skalen), eine Sprachprüfung und eine Schätzung der Bearbeitungszeit – weniger unbrauchbare Antworten nach dem Start.

## Vorgehen

1. Exportieren Sie den Fragebogen mit sichtbarer Filterführung
2. Bitten Sie den Assistenten, drei gegensätzlichen Antwortpfaden zu folgen
3. Prüfen Sie, ob die Optionen disjunkt und erschöpfend sind
4. Fordern Sie eine Problemtabelle an, danach eine Sprachprüfung
5. Testen Sie jede markierte Route in der Vorschau der Befragung

## Konzepte

### Filterführung (Skip- und Display-Logik)

Bedingte Regeln, die entscheiden, welche Fragen eine befragte Person sieht. Testen Sie jeden Zweig mit gegensätzlichen Pfaden: „Nein“ bei einem Filter, „Ja“ durchgehend, optionale Items übersprungen. Typische Fehler: Sackgassen, Fragen für die falsche Gruppe, Text, der aus unbeantworteten Items eingespielt wird.

### Disjunkte und erschöpfende Kategorien

Jede befragte Person passt in genau eine Option (keine überlappenden Bereiche wie 18–25 und 25–30), und jede passt in irgendeine Option (ergänzen Sie „andere“, „keine“ oder „keine Angabe“, wo nötig). Verstöße führen zu unbrauchbaren oder verzerrten Antworten.

### Konsistenz der Skalen

Halten Sie Richtung, Anzahl der Stufen, Beschriftung und Behandlung der Mitte über vergleichbare Items hinweg konsistent, oder ändern Sie sie bewusst und sichtbar. Inkonsistente Skalen verursachen Antwortfehler, die in den Daten wie echte Variation aussehen.

### Tailored Design Method (Dillman, Smyth & Christian)

Leitlinien für selbst auszufüllende Befragungen: einheitliche Formulierung und visuelle Gestaltung, Anweisungen dort, wo sie gebraucht werden, geringe Belastung der Befragten und Testen des fertigen Instruments einschließlich seiner Programmierung vor dem Start. Nutzen Sie sie als Checkliste neben dem Test der Filterführung.

## Literatur

- Dillman, D. A., Smyth, J. D., & Christian, L. M. (2014). Internet, phone, mail, and mixed-mode surveys: The tailored design method (4th ed.). Wiley.
- Groves, R. M., Fowler, F. J., Couper, M. P., Lepkowski, J. M., Singer, E., & Tourangeau, R. (2009). Survey methodology (2nd ed.). Wiley.

## Mit eigenem Material

### Mitbringen

Ihren fertigen Fragebogen, exportiert als Word- oder PDF-Datei mit sichtbarer Filterführung (Filter, Skip- und Display-Logik), zu einem unkritischen Thema.

### Schritte

1. Hängen Sie den exportierten Fragebogen an und beschreiben Sie die Zielgruppe.
2. Bitten Sie den Assistenten, ihn entlang dreier unterschiedlicher Antwortpfade durchzugehen.
3. Bitten Sie um eine Liste der Probleme bei Logik und Antwortoptionen, danach um eine Sprachprüfung.
4. Testen Sie jedes markierte Problem der Filterführung in der Vorschau des Befragungstools.

### Prompt

```text
Ich habe einen Fragebogen zu [Thema] für [Zielgruppe] fertiggestellt; er ist mit seiner Filterführung angehängt. Handle als sorgfältige Survey-Methodikerin. Gehe den Fragebogen zuerst als drei Befragte auf verschiedenen Pfaden durch (zum Beispiel jemand, der beim ersten Filter „Nein“ antwortet, jemand, der überall „Ja“ antwortet, und jemand, der optionale Fragen überspringt) und liste auf, welche Fragen jede Person sieht. Zeige dann eine Tabelle der Probleme: Fragennummer, Art des Problems (fehlerhafte oder fehlende Filterführung, Frage wird Personen gezeigt, für die sie nicht gilt, Antwortoptionen fehlen oder überlappen, inkonsistente Skalenrichtung oder -beschriftung, Verweis auf eine frühere Antwort, die es möglicherweise nicht gibt, unklare Anweisung) und ein Korrekturvorschlag. Prüfe als Nächstes die Sprache: Rechtschreibung, Grammatik, einheitliche Begriffe und Anrede sowie Formulierungen, die für die Zielgruppe schwer lesbar sind. Schätze zum Schluss die Bearbeitungszeit. Ändere nicht die Bedeutung irgendeiner Frage.
```

### Prüfung

Jedes Problem der Filterführung zeigt sich, wenn Sie in der Vorschau des Befragungstools demselben Pfad folgen, und jede sprachliche Korrektur behält die Bedeutung der Frage bei.

### Grenze

Der Assistent liest den exportierten Text, nicht die laufende Befragung; Logik, die der Export nicht zeigt, kann er nicht prüfen, und ein Pilot mit echten Befragten bleibt nötig.

## Technik

Exportieren Sie den Fragebogen mit Filterführung aus Ihrem Befragungstool (zum Beispiel Qualtrics oder Microsoft Forms) als Word oder PDF und laden Sie ihn in Ihren KI-Assistenten hoch; testen Sie markierte Probleme anschließend in der Vorschau des Tools.

## Stufen

### Chat

Hängen Sie den exportierten Fragebogen an und führen Sie den Startprompt aus. Bitten Sie im selben Chat um einen vierten Pfad – die befragte Person, bei der Ihre Filter am ehesten versagen, etwa jemand, der bei jedem Filter „andere“ oder „weiß nicht“ antwortet.

### Projekt / Notebook

Fügen Sie den exportierten Fragebogen, Ihre Item-Liste oder Ihr Codebuch, die Spezifikation der Filterführung und Ihren Styleguide für Begriffe und Anrede hinzu. Fragen Sie, ob Filterführung, Antwortoptionen und Begriffe über alle diese Dokumente hinweg übereinstimmen. Nach jeder Korrektur fügen Sie den neuen Export hinzu und fragen erneut, sodass Befunde und Korrekturen an einem Ort bleiben.

### Eigener Assistent

Nennen Sie ihn „Fragebogen-Prüfer“. Anweisungen: mindestens drei Befragtenpfade durchgehen, die festen Problemtypen und die Tabelle verwenden, eine Sprachprüfung und eine Schätzung der Bearbeitungszeit ergänzen und nie die Bedeutung einer Frage ändern. Wissen: Ihr Styleguide oder die Hinweise Ihrer Einrichtung zu Befragungen. Startprompt: „Prüfe diesen exportierten Fragebogen für [Zielgruppe]“. Wiederverwendbar für jeden Fragebogen und jede Version vor dem Start.
