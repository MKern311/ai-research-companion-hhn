---
id: erhebung-8
phase: erhebung
order: 8
title: LLMs als Datenquelle
risk: 3
mode: Assist
potential: 2
excursus: true
capabilities: generierung; analyse
routes: chat; external
data: B2
practice_ref: B2
---

Nutzen Sie die Antworten von Sprachmodellen selbst als Forschungsdaten – z. B. simulierte Interviews, „Silicon Samples“ oder Audits dessen, was Modelle sagen –, um die Modelle zu untersuchen, nicht als Ersatz für menschliche Teilnehmende.

## Problem

Sprachmodelle sind als billige, sofortige „Befragte“ verlockend, aber ihre Antworten repräsentieren keine echten Menschen; naiv verwendet, erzeugen sie Daten, die plausibel aussehen, für Aussagen über Menschen aber ungültig sind.

## Ergebnis

Ein belastbares Design für Forschung, in der Modellausgaben der Untersuchungsgegenstand sind – Audits von Genauigkeit, Verzerrung oder Konsistenz –, mit dokumentierten Prompts, Versionen und Variabilität und klaren Grenzen dessen, was sich schlussfolgern lässt.

## Vorgehen

1. Formulieren Sie die Frage über das Modell, nicht über eine menschliche Population
2. Legen Sie den Prompt fest; halten Sie Modell, Datum und Uhrzeit jedes Durchlaufs fest
3. Ziehen Sie wiederholte Antworten und kodieren Sie sie gegen eine Referenz
4. Berichten Sie Variabilität und Grenzen; legen Sie die Methode offen
5. Nutzen Sie für jede Aussage über Menschen echte Teilnehmende

## Konzepte

### Silicon Sampling und algorithmische Treue (Algorithmic Fidelity)

Ein Modell wird auf Personabeschreibungen konditioniert, um Befragungsantworten zu simulieren. Die Treue zu menschlichen Antwortmustern variiert nach Thema und Gruppe und muss an echten Daten getestet statt angenommen werden (Argyle et al., 2023).

### Grenzen synthetischer Befragter

Modellantworten können über Prompts und Versionen hinweg instabil sein, zu wenig Varianz zeigen und Identitätsgruppen verflachen oder falsch darstellen; für Inferenz können sie menschliche Stichproben nicht ersetzen (Bisbee et al., 2024; Wang et al., 2025).

### Modell-Audits

Systematisches, wiederholtes Abfragen eines oder mehrerer Modelle mit festen Prompts, um Genauigkeit, Verzerrung oder Konsistenz zu messen – hier ist das Modell die Analyseeinheit.

### Reproduzierbarkeit und Offenlegung

Halten Sie Modellname und -version, Datum, vollständige Prompts, Einstellungen wie Temperatur und die Anzahl der Durchläufe fest; veröffentlichen Sie Prompts und Rohausgaben, damit andere die Studie wiederholen können.

## Literatur

- Argyle, L. P., Busby, E. C., Fulda, N., Gubler, J. R., Rytting, C., & Wingate, D. (2023). Out of one, many: Using language models to simulate human samples. Political Analysis, 31(3), 337–351. doi:10.1017/pan.2023.2
- Bisbee, J., Clinton, J. D., Dorff, C., Kenkel, B., & Larson, J. M. (2024). Synthetic replacements for human survey data? The perils of large language models. Political Analysis, 32(4), 401–416. doi:10.1017/pan.2024.5
- Wang, A., Morgenstern, J., & Dickerson, J. P. (2025). Large language models that replace human participants can harmfully misportray and flatten identity groups. Nature Machine Intelligence, 7(3), 400–411. doi:10.1038/s42256-025-00986-z

## Übung

### Aufgabe

Führen Sie ein Mini-Audit durch: Stellen Sie Ihrem KI-Assistenten dieselbe Frage zur Attribution von Hitze in Großbritannien in fünf neuen Chats und kodieren Sie die Antworten gegen Christidis et al. (2020), das Sie geöffnet halten, aber nicht anhängen. Sie sehen, wie konsistent und genau Modellantworten sind – und warum sie Daten über das Modell sind, nicht über Menschen.

### Prompt

```text
Wie hat der menschengemachte Klimawandel die Wahrscheinlichkeit von Tagen über 40 °C in Großbritannien verändert, nach Forschung, die vor dem Rekord im Juli 2022 veröffentlicht wurde? Antworten Sie in etwa 120 Wörtern und mit Quellen. [Führen Sie genau diesen Prompt in fünf neuen Chats aus und speichern Sie jede Antwort mit der Uhrzeit.]
```

### Prüfung

Vergleichen Sie jede Antwort mit Christidis et al. (2020): Sommer mit mindestens einem Tag über 40 °C irgendwo in Großbritannien haben im heutigen Klima eine Wiederkehrzeit von 100–300 Jahren (suchen Sie nach „return time of 100-300 years“), gegenüber 100 bis über 1000 Jahren in einem natürlichen Klima, bis 2100 sinkend auf etwa 15 Jahre bei RCP4.5 und 3,5 Jahre bei RCP8.5. Zählen Sie korrekte, teilweise korrekte und falsche Antworten sowie erfundene Quellen.

## Mit eigenem Material

### Mitbringen

Eine Frage dazu, was Sprachmodelle sagen oder wie sie antworten – keine Frage über echte Menschen – oder für die Übungsversion die Arbeit B2 zur Attribution von Hitze in Großbritannien, gegen die Sie die Antworten prüfen (nicht anhängen).

### Schritte

1. Formulieren Sie eine Forschungsfrage über das Modell, nicht über Menschen.
2. Legen Sie den Prompt fest, sammeln Sie dann mehrere Antworten in neuen Chats und notieren Sie Datum und Modell.
3. Kodieren Sie die Antworten gegen eine Referenz (die Quellenarbeit) oder ein Codebuch.
4. Berichten Sie Variabilität und Grenzen – verallgemeinern Sie nie auf eine menschliche Population.

### Prompt

```text
Ich untersuche, wie ein Sprachmodell eine Frage in [Fach] beantwortet – die Antworten des Modells sind meine Daten, kein Ersatz für Menschen. Beantworten Sie die folgende Frage so, wie Sie es normalerweise tun würden, in etwa 120 Wörtern, und nennen Sie Ihre Quellen: [Frage]. [Führen Sie genau diesen Prompt in fünf neuen Chats am selben Tag aus und speichern Sie jede Antwort mit Datum, Uhrzeit und dem angezeigten Modellnamen.]
```

### Prüfung

Kodieren Sie jede gespeicherte Antwort gegen Ihre Referenz: korrekt, teilweise korrekt, falsch, keine Quelle. Die Variabilität über die fünf Durchläufe ist selbst ein Befund; mitteln Sie die Antworten nicht zu einer „typischen befragten Person“.

### Grenze

Modellantworten ändern sich mit der Formulierung des Prompts, der Modellversion und der Zeit; sie sind keine gültigen Daten über echte Menschen und können Gruppen falsch darstellen. In einem gewöhnlichen Chat können Sie Modellversion und Einstellungen nicht festlegen – ernsthafte Studien nutzen dokumentierte Modell-APIs und halten alle Parameter fest.

## Technik

Ein gewöhnlicher Chat genügt für ein erstes Audit mit wiederholten neuen Chats, erlaubt aber nicht, Modellversion oder Einstellungen festzulegen. Richtige Studien nutzen dokumentierte Modell-APIs (Ihrer Hochschule oder einer Cloud-Plattform) mit protokollierten Prompts, Parametern und Rohausgaben.

## Stufen

### Chat

Führen Sie den festen Prompt in fünf neuen Chats aus und speichern Sie jede Antwort mit der Uhrzeit. Fragen Sie in einem davon nach mit „Sind Sie sicher? Bitte prüfen Sie Ihre Quellen.“ und halten Sie fest, ob sich die Antwort ändert – ein zweites Maß für Stabilität.

### Projekt / Notebook

Fügen Sie die gespeicherten Antworten als Word- oder Textdateien mit Datum, Uhrzeit und Modell hinzu, dazu Ihr Codebuch und die Referenzarbeit (B2 in der Übungsversion). Bitten Sie um eine Tabelle, die jede Antwort gegen die Referenz kodiert und jede genannte Quelle auflistet. Je nach Werkzeug antwortet das Projekt nur aus diesen Dateien, sodass keine neue Modellausgabe hineingerät; Sie prüfen jeden Code.

### Eigener Assistent

Lassen Sie keinen Agenten die Antworten erzeugen – seine Anweisungen würden verändern, was Sie untersuchen. Bauen Sie stattdessen einen kodierenden Agenten, „Audit-Kodierer“. Anweisungen: Ihr Codebuch (korrekt, teilweise korrekt, falsch, keine oder erfundene Quelle) und eine feste Tabelle. Wissen: die Referenzarbeit (fügen Sie sie als Wissensdatei hinzu, wenn Ihr Werkzeug es erlaubt; andernfalls hängen Sie sie im Chat mit dem Assistenten an). Startprompt: „Kodieren Sie diese gespeicherten Antworten gegen die Referenz“. Es gehen nur Modellantworten hinein, nie personenbezogene Daten, und Sie prüfen jeden Code.

### Automatisierung / eigener Code

Ein geplanter Workflow in einer Low-Code-Plattform (z. B. Power Automate, n8n) kann den festen Prompt zu festgelegten Zeiten an das auditierte Modell senden und jede Antwort mit Datum, Uhrzeit und Modell in eine Tabelle in Ihrem Cloud-Speicher schreiben – eine Zeitreihe, die ein eigener Assistent nicht von selbst erheben kann. Auf GitHub: Ein geplanter GitHub-Actions-Workflow sendet den festen Prompt an die API des auditierten Modells und hängt jede Antwort mit Datum, Uhrzeit und Modellversion an eine CSV an. Prüfen Sie Datenschutz und Freigabe vorher mit Ihrer Hochschule.
