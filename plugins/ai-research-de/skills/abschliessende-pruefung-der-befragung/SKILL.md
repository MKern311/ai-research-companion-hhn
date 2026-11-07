---
name: abschliessende-pruefung-der-befragung
description: "Lassen Sie Ihren KI-Assistenten den fertigen Fragebogen entlang verschiedener Antwortpfade durchgehen, um fehlerhafte Filterführung, fehlende oder überlappende Antwortoptionen und inkonsistente Skalen zu finden – und ihn als Ganzes Korrektur lesen. Einsetzen bei: Abschließende Prüfung der Befragung."
---

# Abschließende Prüfung der Befragung

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/design-5

## Ziel

Lassen Sie Ihren KI-Assistenten den fertigen Fragebogen entlang verschiedener Antwortpfade durchgehen, um fehlerhafte Filterführung, fehlende oder überlappende Antwortoptionen und inkonsistente Skalen zu finden – und ihn als Ganzes Korrektur lesen.

Drei durchgespielte Befragtenpfade, eine Korrekturliste für Filterführung und Antwortoptionen (disjunkt, erschöpfend, konsistente Skalen), eine Sprachprüfung und eine Schätzung der Bearbeitungszeit – weniger unbrauchbare Antworten nach dem Start.

## Wann einsetzen

Fehlerhafte Filterlogik, überlappende Antwortoptionen und inkonsistente Skalen entgehen Ihnen, wenn Sie Ihren eigenen Fragebogen zwanzigmal gelesen haben – und zeigen sich erst in den Daten.

## Ablauf mit der Nutzerin oder dem Nutzer

Führen Sie durch diese Schritte. Wo ein Schritt „den Assistenten bitten“ nennt, sind Sie gemeint.

1. Hängen Sie den exportierten Fragebogen an und beschreiben Sie die Zielgruppe.
2. Bitten Sie den Assistenten, ihn entlang dreier unterschiedlicher Antwortpfade durchzugehen.
3. Bitten Sie um eine Liste der Probleme bei Logik und Antwortoptionen, danach um eine Sprachprüfung.
4. Testen Sie jedes markierte Problem der Filterführung in der Vorschau des Befragungswerkzeugs.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.

## Typische Anfrage

```text
Ich habe einen Fragebogen zu [Thema] für [Zielgruppe] fertiggestellt; er ist mit seiner Filterführung angehängt. Handeln Sie als sorgfältige Befragungsmethodikerin. Gehen Sie den Fragebogen zuerst als drei Befragte auf verschiedenen Pfaden durch (zum Beispiel jemand, der beim ersten Filter „Nein“ antwortet, jemand, der überall „Ja“ antwortet, und jemand, der optionale Fragen überspringt) und listen Sie auf, welche Fragen jede Person sieht. Zeigen Sie dann eine Tabelle der Probleme: Fragennummer, Art des Problems (fehlerhafte oder fehlende Filterführung, Frage wird Personen gezeigt, für die sie nicht gilt, Antwortoptionen fehlen oder überlappen, inkonsistente Skalenrichtung oder -beschriftung, Verweis auf eine frühere Antwort, die es möglicherweise nicht gibt, unklare Anweisung) und ein Korrekturvorschlag. Prüfen Sie als Nächstes die Sprache: Rechtschreibung, Grammatik, einheitliche Begriffe und Anrede sowie Formulierungen, die für die Zielgruppe schwer lesbar sind. Schätzen Sie zum Schluss die Bearbeitungszeit. Ändern Sie nicht die Bedeutung irgendeiner Frage.
```

## Prüfung

Jedes Problem der Filterführung zeigt sich, wenn Sie in der Vorschau des Befragungswerkzeugs demselben Pfad folgen, und jede sprachliche Korrektur behält die Bedeutung der Frage bei.

## Grenzen

- Der Assistent liest den exportierten Text, nicht die laufende Befragung; Logik, die der Export nicht zeigt, kann er nicht prüfen, und ein Pilot mit echten Befragten bleibt nötig.
- Risiko: Eigene unveröffentlichte Entwürfe, Gutachten oder Inhalte Dritter.

## Wichtige Konzepte

- **Filterführung (Skip- und Display-Logik)** – Bedingte Regeln, die entscheiden, welche Fragen eine befragte Person sieht. Testen Sie jeden Zweig mit gegensätzlichen Pfaden: „Nein“ bei einem Filter, „Ja“ durchgehend, optionale Items übersprungen. Typische Fehler: Sackgassen, Fragen für die falsche Gruppe, Text, der aus unbeantworteten Items eingespielt wird.
- **Disjunkte und erschöpfende Kategorien** – Jede befragte Person passt in genau eine Option (keine überlappenden Bereiche wie 18–25 und 25–30), und jede passt in irgendeine Option (ergänzen Sie „andere“, „keine“ oder „keine Angabe“, wo nötig). Verstöße führen zu unbrauchbaren oder verzerrten Antworten.
- **Konsistenz der Skalen** – Halten Sie Richtung, Anzahl der Stufen, Beschriftung und Behandlung der Mitte über vergleichbare Items hinweg konsistent, oder ändern Sie sie bewusst und sichtbar. Inkonsistente Skalen verursachen Antwortfehler, die in den Daten wie echte Variation aussehen.
- **Tailored Design Method (Dillman, Smyth & Christian)** – Leitlinien für selbst auszufüllende Befragungen: einheitliche Formulierung und visuelle Gestaltung, Anweisungen dort, wo sie gebraucht werden, geringe Belastung der Befragten und Testen des fertigen Instruments einschließlich seiner Programmierung vor dem Start. Nutzen Sie sie als Checkliste neben dem Test der Filterführung.

## Wichtige Literatur

- Dillman, D. A., Smyth, J. D., & Christian, L. M. (2014). Internet, phone, mail, and mixed-mode surveys: The tailored design method (4th ed.). Wiley.
- Groves, R. M., Fowler, F. J., Couper, M. P., Lepkowski, J. M., Singer, E., & Tourangeau, R. (2009). Survey methodology (2nd ed.). Wiley.
