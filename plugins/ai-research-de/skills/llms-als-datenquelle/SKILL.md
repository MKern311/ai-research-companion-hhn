---
name: llms-als-datenquelle
description: "Nutzen Sie die Antworten von Sprachmodellen selbst als Forschungsdaten – z. B. simulierte Interviews, „Silicon Samples“ oder Audits dessen, was Modelle sagen –, um die Modelle zu untersuchen, nicht als Ersatz für menschliche Teilnehmende. Einsetzen bei: LLMs als Datenquelle."
---

# LLMs als Datenquelle

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/erhebung-8

## Ziel

Nutzen Sie die Antworten von Sprachmodellen selbst als Forschungsdaten – z. B. simulierte Interviews, „Silicon Samples“ oder Audits dessen, was Modelle sagen –, um die Modelle zu untersuchen, nicht als Ersatz für menschliche Teilnehmende.

Ein belastbares Design für Forschung, in der Modellausgaben der Untersuchungsgegenstand sind – Audits von Genauigkeit, Verzerrung oder Konsistenz –, mit dokumentierten Prompts, Versionen und Variabilität und klaren Grenzen dessen, was sich schlussfolgern lässt.

## Wann einsetzen

Sprachmodelle sind als billige, sofortige „Befragte“ verlockend, aber ihre Antworten repräsentieren keine echten Menschen; naiv verwendet, erzeugen sie Daten, die plausibel aussehen, für Aussagen über Menschen aber ungültig sind.

## Vorgehen

1. Formulieren Sie eine Forschungsfrage über das Modell, nicht über Menschen.
2. Legen Sie den Prompt fest, sammeln Sie dann mehrere Antworten in neuen Chats und notieren Sie Datum und Modell.
3. Kodieren Sie die Antworten gegen eine Referenz (die Quellenarbeit) oder ein Codebuch.
4. Berichten Sie Variabilität und Grenzen – verallgemeinern Sie nie auf eine menschliche Population.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.
- Lassen Sie keinen Agenten die Antworten erzeugen – seine Anweisungen würden verändern, was Sie untersuchen. Bauen Sie stattdessen einen kodierenden Agenten, „Audit-Kodierer“. Anweisungen: Ihr Codebuch (korrekt, teilweise korrekt, falsch, keine oder erfundene Quelle) und eine feste Tabelle. Wissen: die Referenzarbeit (fügen Sie sie als Wissensdatei hinzu, wenn Ihr Tool es erlaubt; andernfalls hängen Sie sie im Chat mit dem Assistenten an). Startprompt: „Kodiere diese gespeicherten Antworten gegen die Referenz“. Es gehen nur Modellantworten hinein, nie personenbezogene Daten, und Sie prüfen jeden Code.

## Startprompt

```text
Ich untersuche, wie ein Sprachmodell eine Frage in [Fach] beantwortet – die Antworten des Modells sind meine Daten, kein Ersatz für Menschen. Beantworte die folgende Frage so, wie du es normalerweise tun würdest, in etwa 120 Wörtern, und nenne deine Quellen: [Frage]. [Führen Sie genau diesen Prompt in fünf neuen Chats am selben Tag aus und speichern Sie jede Antwort mit Datum, Uhrzeit und dem angezeigten Modellnamen.]
```

## Prüfung

Kodieren Sie jede gespeicherte Antwort gegen Ihre Referenz: korrekt, teilweise korrekt, falsch, keine Quelle. Die Variabilität über die fünf Durchläufe ist selbst ein Befund; mitteln Sie die Antworten nicht zu einer „typischen befragten Person“.

## Grenzen

- Modellantworten ändern sich mit der Formulierung des Prompts, der Modellversion und der Zeit; sie sind keine gültigen Daten über echte Menschen und können Gruppen falsch darstellen. In einem gewöhnlichen Chat können Sie Modellversion und Einstellungen nicht festlegen – ernsthafte Studien nutzen dokumentierte Modell-APIs und halten alle Parameter fest.
- Risiko: Personenbezogene oder sensible Daten oder Entscheidungen, die direkt in Ihre Ergebnisse einfließen.

## Wichtige Konzepte

- **Silicon Sampling und algorithmische Treue (Algorithmic Fidelity)** – Ein Modell wird auf Personabeschreibungen konditioniert, um Befragungsantworten zu simulieren. Die Treue zu menschlichen Antwortmustern variiert nach Thema und Gruppe und muss an echten Daten getestet statt angenommen werden (Argyle et al., 2023).
- **Grenzen synthetischer Befragter** – Modellantworten können über Prompts und Versionen hinweg instabil sein, zu wenig Varianz zeigen und Identitätsgruppen verflachen oder falsch darstellen; für Inferenz können sie menschliche Stichproben nicht ersetzen (Bisbee et al., 2024; Wang et al., 2025).
- **Modell-Audits** – Systematisches, wiederholtes Abfragen eines oder mehrerer Modelle mit festen Prompts, um Genauigkeit, Verzerrung oder Konsistenz zu messen – hier ist das Modell die Analyseeinheit.
- **Reproduzierbarkeit und Offenlegung** – Halten Sie Modellname und -version, Datum, vollständige Prompts, Einstellungen wie Temperatur und die Anzahl der Durchläufe fest; veröffentlichen Sie Prompts und Rohausgaben, damit andere die Studie wiederholen können.

## Wichtige Literatur

- Argyle, L. P., Busby, E. C., Fulda, N., Gubler, J. R., Rytting, C., & Wingate, D. (2023). Out of one, many: Using language models to simulate human samples. Political Analysis, 31(3), 337–351. https://doi.org/10.1017/pan.2023.2
- Bisbee, J., Clinton, J. D., Dorff, C., Kenkel, B., & Larson, J. M. (2024). Synthetic replacements for human survey data? The perils of large language models. Political Analysis, 32(4), 401–416. https://doi.org/10.1017/pan.2024.5
- Wang, A., Morgenstern, J., & Dickerson, J. P. (2025). Large language models that replace human participants can harmfully misportray and flatten identity groups. Nature Machine Intelligence, 7(3), 400–411. https://doi.org/10.1038/s42256-025-00986-z
