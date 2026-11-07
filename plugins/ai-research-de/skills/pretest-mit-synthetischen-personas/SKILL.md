---
name: pretest-mit-synthetischen-personas
description: "Testen Sie Instrumente mit simulierten Befragten auf Verständnisprobleme – als Ergänzung zu echten Pretests, nie als Ersatz. Einsetzen bei: Pretest mit synthetischen Personas."
---

# Pretest mit synthetischen Personas

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/design-2

## Ziel

Testen Sie Instrumente mit simulierten Befragten auf Verständnisprobleme – als Ergänzung zu echten Pretests, nie als Ersatz.

Eine Liste vermuteter Fehlinterpretationen je Item, sortiert nach Antwortphase, die die Nachfragen (Probes) für Ihre echten kognitiven Interviews schärft. Simulierte Antworten sind keine Daten und dürfen nie als Pretest berichtet werden.

## Wann einsetzen

Kognitive Pretests mit echten Befragten sind aufwendig zu organisieren, daher gelangen offensichtliche Verständnisprobleme oft in den Piloten und verbrauchen knappe Teilnehmende.

## Ablauf mit der Nutzerin oder dem Nutzer

Führen Sie durch diese Schritte. Wo ein Schritt „den Assistenten bitten“ nennt, sind Sie gemeint.

1. Fügen Sie Ihre Items ein und beschreiben Sie die Zielpopulation.
2. Bitten Sie den Assistenten, vier unterschiedliche Befragte zu simulieren, die zu jedem Item laut denken.
3. Bitten Sie um eine Zusammenfassung der Verständnisprobleme je Item.
4. Entscheiden Sie, welche Punkte Sie in einem echten kognitiven Pretest testen.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.

## Typische Anfrage

```text
Ich bereite einen Pretest eines Fragebogens zu [Thema] für [Population] vor. Simulieren Sie vier unterschiedliche Befragte aus dieser Population (verschieden nach Alter, Hintergrund und Leseniveau). Lassen Sie jede Person kurz zu jedem untenstehenden Item laut denken: wie sie es versteht und wo sie zögert oder es missversteht. Geben Sie dann eine Tabelle: Item-Nummer, Verständnisproblem, bei wie vielen Personas es auftrat, vorgeschlagene Korrektur. Das sind simulierte Befragte zur Vorbereitung eines echten Pretests, keine Daten.

[Items einfügen]
```

## Prüfung

Jedes markierte Problem verweist auf eine konkrete Formulierung in Ihrem Item; betrachten Sie die Personas als Annahmen des Modells, nicht als echte Menschen, und berichten Sie sie nie als Pretest-Daten und nutzen Sie sie nie anstelle eines echten Pretests.

## Grenzen

- Risiko: Eigene unveröffentlichte Entwürfe, Gutachten oder Inhalte Dritter.

## Wichtige Konzepte

- **Kognitive Interviews (Willis)** – Pretest-Methode, bei der echte Befragte Entwurfs-Items beantworten, während sie laut denken oder verbale Nachfragen beantworten wie „Was bedeutet dieser Begriff für Sie?“. Sie läuft in kleinen iterativen Runden, oft mit je 5–15 Interviews. Personas können sie nur vorbereiten.
- **Lautes Denken versus verbales Nachfragen** – Beim lauten Denken äußern Befragte ihre Überlegungen ohne Aufforderung; beim verbalen Nachfragen (Probing) kommen vorbereitete oder spontane Anschlussfragen zum Einsatz (Probes zu Verständnis, Paraphrase, Sicherheit, Erinnerung). Probing lässt sich leichter standardisieren und eignet sich für die meisten Pretests von Befragungen.
- **Vierstufiges Antwortmodell (Tourangeau)** – Verstehen, Abrufen, Urteilen und Abbilden der Antwort. Wenn Sie jedes vermutete Problem nach Phase kodieren, wissen Sie, was Sie hinterfragen und wie Sie es beheben, gleich ob das Problem von einer Persona oder von einer echten Person stammt.
- **Synthetische Befragte („Silicon Samples“)** – Personas auf Basis von Sprachmodellen, die auf demografische Beschreibungen konditioniert sind. Argyle et al. (2023) berichten Übereinstimmungen mit einigen menschlichen Antwortmustern; andere Studien finden geringere Varianz und stereotype Antworten. Die Ausgabe von Personas ist kein Beleg über Ihre Population.

## Wichtige Literatur

- Willis, G. B. (2005). Cognitive interviewing: A tool for improving questionnaire design. Sage.
- Tourangeau, R., Rips, L. J., & Rasinski, K. (2000). The psychology of survey response. Cambridge University Press.
- Argyle, L. P., Busby, E. C., Fulda, N., Gubler, J. R., Rytting, C., & Wingate, D. (2023). Out of one, many: Using language models to simulate human samples. Political Analysis, 31(3), 337–351. https://doi.org/10.1017/pan.2023.2
