---
id: design-2
phase: design
order: 2
title: Pretest mit synthetischen Personas
risk: 2
mode: Assist
potential: 2
capabilities: generierung; analyse
routes: chat
---

Testen Sie Instrumente mit simulierten Befragten auf Verständnisprobleme – als Ergänzung zu echten Pretests, nie als Ersatz.

## Problem

Kognitive Pretests mit echten Befragten sind aufwendig zu organisieren, daher gelangen offensichtliche Verständnisprobleme oft in den Piloten und verbrauchen knappe Teilnehmende.

## Ergebnis

Eine Liste vermuteter Fehlinterpretationen je Item, sortiert nach Antwortphase, die die Nachfragen (Probes) für Ihre echten kognitiven Interviews schärft. Simulierte Antworten sind keine Daten und dürfen nie als Pretest berichtet werden.

## Vorgehen

1. Beschreiben Sie Ihre Zielpopulation und wie sie variiert
2. Bitten Sie je Item um vier simulierte Befragte, die laut denken
3. Sortieren Sie die Probleme nach Verstehen, Abrufen, Urteilen und Antworten
4. Machen Sie aus jedem Problem einen Probe für echte kognitive Interviews
5. Berichten Sie nur den echten Pretest und legen Sie die KI-gestützte Vorbereitung offen

## Konzepte

### Kognitive Interviews (Willis)

Pretest-Methode, bei der echte Befragte Entwurfs-Items beantworten, während sie laut denken oder verbale Nachfragen beantworten wie „Was bedeutet dieser Begriff für Sie?“. Sie läuft in kleinen iterativen Runden, oft mit je 5–15 Interviews. Personas können sie nur vorbereiten.

### Lautes Denken versus verbales Nachfragen

Beim lauten Denken äußern Befragte ihre Überlegungen ohne Aufforderung; beim verbalen Nachfragen (Probing) kommen vorbereitete oder spontane Anschlussfragen zum Einsatz (Probes zu Verständnis, Paraphrase, Sicherheit, Erinnerung). Probing lässt sich leichter standardisieren und eignet sich für die meisten Pretests von Befragungen.

### Vierstufiges Antwortmodell (Tourangeau)

Verstehen, Abrufen, Urteilen und Abbilden der Antwort. Wenn Sie jedes vermutete Problem nach Phase kodieren, wissen Sie, was Sie hinterfragen und wie Sie es beheben, gleich ob das Problem von einer Persona oder von einer echten Person stammt.

### Synthetische Befragte („Silicon Samples“)

Personas auf Basis von Sprachmodellen, die auf demografische Beschreibungen konditioniert sind. Argyle et al. (2023) berichten Übereinstimmungen mit einigen menschlichen Antwortmustern; andere Studien finden geringere Varianz und stereotype Antworten. Die Ausgabe von Personas ist kein Beleg über Ihre Population.

## Literatur

- Willis, G. B. (2005). Cognitive interviewing: A tool for improving questionnaire design. Sage.
- Tourangeau, R., Rips, L. J., & Rasinski, K. (2000). The psychology of survey response. Cambridge University Press.
- Argyle, L. P., Busby, E. C., Fulda, N., Gubler, J. R., Rytting, C., & Wingate, D. (2023). Out of one, many: Using language models to simulate human samples. Political Analysis, 31(3), 337–351. doi:10.1017/pan.2023.2

## Mit eigenem Material

### Mitbringen

Fünf bis acht Entwürfe von Fragebogen-Items zu einem nicht sensiblen Thema und eine kurze Beschreibung Ihrer Zielpopulation.

### Schritte

1. Fügen Sie Ihre Items ein und beschreiben Sie die Zielpopulation.
2. Bitten Sie den Assistenten, vier unterschiedliche Befragte zu simulieren, die zu jedem Item laut denken.
3. Bitten Sie um eine Zusammenfassung der Verständnisprobleme je Item.
4. Entscheiden Sie, welche Punkte Sie in einem echten kognitiven Pretest testen.

### Prompt

```text
Ich bereite einen Pretest eines Fragebogens zu [Thema] für [Population] vor. Simulieren Sie vier unterschiedliche Befragte aus dieser Population (verschieden nach Alter, Hintergrund und Leseniveau). Lassen Sie jede Person kurz zu jedem untenstehenden Item laut denken: wie sie es versteht und wo sie zögert oder es missversteht. Geben Sie dann eine Tabelle: Item-Nummer, Verständnisproblem, bei wie vielen Personas es auftrat, vorgeschlagene Korrektur. Das sind simulierte Befragte zur Vorbereitung eines echten Pretests, keine Daten.

[Items einfügen]
```

### Prüfung

Jedes markierte Problem verweist auf eine konkrete Formulierung in Ihrem Item; betrachten Sie die Personas als Annahmen des Modells, nicht als echte Menschen, und berichten Sie sie nie als Pretest-Daten und nutzen Sie sie nie anstelle eines echten Pretests.

## Technik

Fügen Sie die Items in Ihren KI-Assistenten ein (z. B. Copilot, ChatGPT, Claude oder Gemini) und bitten Sie ihn, unterschiedliche Befragte zu spielen; behandeln Sie die Ausgabe als Hypothesen für Probes, nie als Daten. Berichten Sie sie nicht als Pretest und legen Sie die KI-gestützte Vorbereitung offen, wo Ihre Einrichtung das verlangt.

## Stufen

### Chat

Führen Sie den Startprompt mit Ihren Items und der Zielpopulation aus. Fragen Sie im selben Chat, welche drei Items in Ihren echten kognitiven Interviews am dringendsten einen Probe brauchen, und lassen Sie für jedes einen Probe entwerfen.

### Projekt / Notebook

Fügen Sie Ihren Fragebogenentwurf, die Beschreibung der Population, Ihr Protokoll für kognitive Interviews und später Ihre Notizen aus den echten Pretests hinzu. Fragen Sie, wo die simulierten Fehlinterpretationen mit dem übereinstimmten oder danebenlagen, was echte Befragte taten. Nebeneinander gehalten zeigt das mit der Zeit, wie weit Persona-Tests für Ihre Population helfen.

### Eigener Assistent

Nennen Sie ihn „Pretest-Planer“. Anweisungen: vier unterschiedliche Personas simulieren, Fehlinterpretationen nach Antwortphase sortieren (Verstehen, Abrufen, Urteilen, Antworten), eine Tabelle mit vorgeschlagenen Probes liefern und jede Ausgabe mit „simuliert – keine Daten, kein Pretest“ kennzeichnen. Wissen: eine kurze Beschreibung Ihrer Population. Startprompt: „Pretest für diese Items für [Population]: [einfügen]“. Wiederverwendbar für jede überarbeitete Version vor jeder echten Pretest-Runde.
