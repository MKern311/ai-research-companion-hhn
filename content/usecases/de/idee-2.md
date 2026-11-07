---
id: idee-2
phase: idee
order: 2
title: Strukturierte Operationalisierung
risk: 1
mode: Co-create
potential: 2
capabilities: generierung; synthese
routes: chat; files; external
tools: Scholar GPT
repos: ars-deep-research
data: D1; B2
practice_data: D1
practice_ref: B2
---

Strukturieren Sie Fragen mit etablierten Rahmenwerken (z. B. PICO, PICOC, SPIDER, PEO), leiten Sie Teilfragen und Suchbegriffe je Element ab, schärfen Sie die Konstrukte und prüfen Sie die Frage anhand von FINER.

## Problem

Eine Frage, die im Gespräch klar klingt, scheitert oft, sobald man sie suchen oder messen will: Elemente des Rahmenwerks fehlen, Konstrukte sind undefiniert, der Umfang ist für Zeit und Daten unrealistisch.

## Ergebnis

Ihre Frage, abgebildet auf ein passendes Rahmenwerk (PICO, PICOC, PEO oder SPIDER), mit Teilfragen, Suchbegriffen, operationalen Definitionen und einer FINER-Bewertung – eine direkte Brücke zu Suchstrategie und Studiendesign.

## Vorgehen

1. Fügen Sie Ihren Fragenentwurf ein und nennen Sie Ihr Fachgebiet
2. Lassen Sie Ihren KI-Assistenten ein Rahmenwerk begründen und die Frage dann zerlegen
3. Prüfen Sie, welche Elemente er angenommen statt von Ihnen übernommen hat
4. Bewerten Sie die Frage selbst anhand von FINER
5. Formulieren Sie vage Konstrukte als operationale Definitionen um

## Konzepte

### PICO und PICOC

Population, Intervention, Comparison, Outcome – für Fragen zur Wirkung einer Intervention. PICOC ergänzt Context (Setting, Ort, Zeit) und wird weit über die Gesundheitsforschung hinaus genutzt, etwa in Übersichtsarbeiten der Sozialwissenschaften und des Software Engineering.

### PEO

Population, Exposure, Outcome – für Fragen zu Zusammenhängen, Risikofaktoren oder Folgen einer Exposition, bei denen nichts gezielt angewendet wird, wie in der Beobachtungs- und Ursachenforschung.

### SPIDER

Sample, Phenomenon of Interest, Design, Evaluation, Research type – für qualitative und Mixed-Methods-Fragen zu Erfahrungen und Sichtweisen (Cooke et al., 2012). Spezifischer als PICO, sodass darauf aufgebaute Suchen relevante Studien übersehen können (Methley et al., 2014).

### FINER-Kriterien

Feasible, Interesting, Novel, Ethical, Relevant – eine Checkliste, um eine Forschungsfrage zu beurteilen, bevor man sich festlegt (Hulley et al.). Die Machbarkeit umfasst Zugang zu Stichprobe oder Daten, Zeit, Kompetenzen und Kosten.

### Operationale Definition

Legt fest, wie ein abstraktes Konstrukt beobachtet oder gemessen wird – Indikator, Instrument, Schwellenwert, Einheit. Die Trennung von konzeptioneller Definition (was es bedeutet) und Messung (wie man es erfasst) macht die Validität überprüfbar.

## Literatur

- Petticrew, M., & Roberts, H. (2006). Systematic reviews in the social sciences: A practical guide. Blackwell.
- Cooke, A., Smith, D., & Booth, A. (2012). Beyond PICO: The SPIDER tool for qualitative evidence synthesis. Qualitative Health Research, 22(10), 1435–1443. doi:10.1177/1049732312452938
- Hulley, S. B., Cummings, S. R., Browner, W. S., Grady, D. G., & Newman, T. B. (2013). Designing clinical research (4th ed.). Lippincott Williams & Wilkins.
- Methley, A. M., Campbell, S., Chew-Graham, C., McNally, R., & Cheraghi-Sohi, S. (2014). PICO, PICOS and SPIDER: A comparison study of specificity and sensitivity in three search tools for qualitative systematic reviews. BMC Health Services Research, 14, 579. doi:10.1186/s12913-014-0579-0

## Übung

### Aufgabe

Operationalisieren Sie eine Übungsfrage zu Hitze in Großbritannien und vergleichen Sie dann die Rahmenwerk-Elemente des Assistenten damit, wie Christidis et al. (2020) Exposition, Vergleich und Ergebnis definiert haben – und prüfen Sie, ob sich seine Definition eines heißen Tages in der täglichen CET-Datei zählen lässt.

### Prompt

```text
Ich bin Promovierende bzw. Promovierender. Meine Entwurfsfrage lautet: „Wie hat der menschengemachte Klimawandel die Wahrscheinlichkeit sehr heißer Tage in Großbritannien verändert?“ Schlagen Sie das am besten geeignete Rahmenwerk zur Strukturierung vor (PICO, PICOC, PEO oder SPIDER) und erklären Sie in zwei Sätzen, warum es besser passt als die anderen. Zeigen Sie dann eine Tabelle: Element des Rahmenwerks, der Teil meiner Frage, den es abdeckt, was noch fehlt oder unklar ist, und drei Suchbegriffe oder Synonyme. Kennzeichnen Sie jedes Element, das Sie annehmen mussten. Schlagen Sie drei Teilfragen vor, jeweils einem Element zugeordnet. Bewerten Sie die Frage anhand von FINER mit je einer Begründung pro Kriterium. Definieren Sie schließlich „sehr heißer Tag“ auf zwei Arten operational und sagen Sie, ob sich jede davon in der angehängten täglichen HadCET-Maximumdatei zählen ließe.
```

### Prüfung

Vergleichen Sie mit Christidis et al. (2020): Ergebnis als Überschreiten von 30, 35 und 40 °C irgendwo in Großbritannien, Vergleich als Welt ohne menschlichen Einfluss, HadUK-Grid-Beobachtungen und CMIP5-Modelle. Validitätslücke: Die CET-Datei ist ein Regionalmittel für ein Dreieck in Zentralengland, nicht das Maximum für Großbritannien. 40 °C kommt darin nie vor (höchster Wert 37,3 °C am 19. Juli 2022). Hat der Assistent bemerkt, dass ein in dieser Datei gezählter Schwellenwert etwas anderes misst als das Ergebnis im Paper?

## Mit eigenem Material

### Mitbringen

Eine eigene Entwurfsfrage in ein oder zwei Sätzen.

### Schritte

1. Fügen Sie Ihre Forschungsfrage ein und nennen Sie Ihr Fachgebiet.
2. Fragen Sie, welches Rahmenwerk am besten passt (PICO, PICOC, PEO, SPIDER oder ein anderes) und warum.
3. Bitten Sie darum, die Frage in die Elemente des Rahmenwerks zu zerlegen, mit Teilfragen und englischen Suchbegriffen je Element.
4. Bitten Sie um eine FINER-Prüfung und darum zu benennen, welche Konstrukte vage sind.

### Prompt

```text
Ich bin Promovierende bzw. Promovierender in [Fachgebiet]. Meine Entwurfsfrage lautet: [Frage]. Schlagen Sie das am besten geeignete Rahmenwerk zur Strukturierung vor (zum Beispiel PICO, PICOC, PEO oder SPIDER) und erklären Sie in zwei Sätzen, warum es besser passt als die anderen. Zeigen Sie dann eine Tabelle: Element des Rahmenwerks, der Teil meiner Frage, den es abdeckt, was noch fehlt oder unklar ist, und drei englische Suchbegriffe oder Synonyme. Kennzeichnen Sie jedes Element, das Sie annehmen mussten, statt es aus meiner Frage zu übernehmen. Schlagen Sie als Nächstes drei bis fünf Teilfragen vor, jeweils einem Element zugeordnet. Bewerten Sie die Frage kurz anhand von FINER (feasible, interesting, novel, ethical, relevant) mit je einer Begründung pro Kriterium. Listen Sie abschließend die zentralen Konstrukte auf, sagen Sie, welche vage sind, und schlagen Sie zu jedem eine Arbeitsdefinition und eine mögliche Art vor, es zu messen oder zu beobachten.
```

### Prüfung

Jedes Element der Tabelle lässt sich auf Wörter zurückführen, die tatsächlich in Ihrer Frage stehen, angenommene Elemente sind gekennzeichnet, die FINER-Begründungen beziehen sich auf Ihr Projekt statt auf Forschung im Allgemeinen, und jede Arbeitsdefinition lässt sich mit Daten messen, die Sie tatsächlich beschaffen können.

## Technik

Ein einfacher Chat mit dem Startprompt genügt; bitten Sie um die Ausgabe als Tabelle, die Sie in Word kopieren können. Für die Übung hängen Sie die tägliche HadCET-Maximumdatei (D1) an. Der Deep-Research-Skill führt in Coding-Assistenten wie GitHub Copilot ein vergleichbares, auf FINER gestütztes Fragen-Briefing aus.

## Stufen

### Chat

Hängen Sie die tägliche HadCET-Datei (D1) an und führen Sie den Startprompt aus. Bitten Sie den Assistenten im selben Chat, Python zu schreiben und auszuführen, das zählt, an wie vielen Tagen der Datei jede seiner beiden Definitionen eines „sehr heißen Tages“ erfüllt ist – kann er keinen Code ausführen, führen Sie das Skript selbst aus – und zu sagen, was diese Zählung misst und was nicht.

### Projekt / Notebook

Fügen Sie Ihre Entwurfsfrage, eine Bibliotheksanleitung zu PICO, PEO oder SPIDER, das Paper, auf dessen Design Sie aufbauen (Übung: B2), und eine Beschreibung Ihrer Daten hinzu (D1 ist .txt und funktioniert direkt). Fragen Sie, wie jedes Element des Rahmenwerks und jedes Konstrukt auf das Paper und die Daten abgebildet wird. Ändert sich die Frage, führen Sie dieselbe Prüfung erneut mit denselben Quellen durch.

### Eigener Assistent

Nennen Sie ihn „Fragen-Strukturierer“. Anweisungen: ein Rahmenwerk wählen und begründen, die Elementtabelle mit fehlenden Teilen und je drei Suchbegriffen liefern, angenommene Elemente kennzeichnen, Teilfragen den Elementen zuordnen, FINER mit projektspezifischen Begründungen bewerten und messbare Arbeitsdefinitionen vorschlagen. Schalten Sie Codeausführung bzw. Datenanalyse ein, wenn Ihr Werkzeug sie anbietet und Definitionen an Daten getestet werden sollen. Startprompt: „Strukturiere diese Frage und teste sie anhand von FINER.“ Wiederverwendbar für jede neue Entwurfsfrage.
