---
id: idee-1
phase: idee
order: 1
title: Sparringspartner für Forschungsfragen
risk: 1
mode: Co-create
potential: 3
capabilities: generierung
routes: chat; external
tools: Scholar GPT
repos: ars-deep-research
data: C6; B1
practice_ref: C6; B1
---

Verwandeln Sie grobe Ideen in alternative Forschungsfragen, machen Sie Annahmen sichtbar und erzeugen Sie Gegenpositionen und Einwände.

## Problem

Frühe Ideen werden meist nur an der eigenen Sichtweise oder an der einer vielbeschäftigten Betreuungsperson geprüft; blinde Flecken, ungeprüfte Annahmen und naheliegende Einwände zeigen sich spät, manchmal erst in der Disputation.

## Ergebnis

Alternative Rahmungen Ihrer Frage, die Annahmen, auf denen sie beruht, und die stärksten Einwände mit Gegenargumenten – so wählen Sie eine Richtung bewusst und kommen besser vorbereitet in die Betreuung.

## Vorgehen

1. Beschreiben Sie Ihre Idee in zwei oder drei Sätzen
2. Bitten Sie Ihren KI-Assistenten, als kritische Betreuungsperson zu argumentieren
3. Fordern Sie engere, weitere und anders ausgerichtete Fragen an
4. Fragen Sie, welche Annahmen die Idee als selbstverständlich voraussetzt
5. Entwerfen Sie Ihre eigene Antwort auf den stärksten Einwand

## Konzepte

### Problematisierung (Alvesson & Sandberg)

Fragen entstehen, indem man die Annahmen hinter bestehender Forschung identifiziert und hinterfragt – hauseigene, Wurzelmetapher-, Paradigma-, Ideologie- und Feldannahmen –, statt nur Lücken zu füllen. Nutzen Sie sie, wenn sich eine Idee inkrementell anfühlt.

### Toulmin-Modell der Argumentation

Zerlegt ein Argument in Behauptung (claim), Belege (grounds), Schlussregel (warrant), Stützung (backing), Einschränkung (qualifier) und Widerlegung (rebuttal). Damit sehen Sie, welchen Teil Ihrer Idee ein Einwand angreift und welche Belege ihn beantworten würden.

### Steelmanning

Die stärkste Version einer gegnerischen Position formulieren, bevor man darauf antwortet – das Gegenteil eines Strohmanns. Wer nach den stärksten statt den leichtesten Einwänden fragt, bereitet sich auf Begutachtung und Disputation vor.

### Was-, Warum- und Wie-Fragen (Blaikie)

„Was“-Fragen beschreiben, „Warum“-Fragen erklären, „Wie“-Fragen betreffen Veränderung oder Intervention. Der Wechsel zwischen ihnen – enger, weiter, anderer Blickwinkel – verändert Design, Daten und Aussagen, die Ihre Studie tragen kann.

## Literatur

- Alvesson, M., & Sandberg, J. (2011). Generating research questions through problematization. Academy of Management Review, 36(2), 247–271. doi:10.5465/amr.2009.0188
- Toulmin, S. E. (2003). The uses of argument (Updated ed.). Cambridge University Press.
- Blaikie, N., & Priest, J. (2019). Designing social research: The logic of anticipation (3rd ed.). Polity Press.

## Übung

### Aufgabe

Spielen Sie eine grobe Idee durch, die aus dem Paket stammt: dass sich die Erwärmung in Zentralengland seit den 1980er-Jahren beschleunigt hat. Vergleichen Sie dann die Einwände des Assistenten mit den Fragen, die der Changepoint-Preprint und das HadCET-Paper tatsächlich behandeln.

### Prompt

```text
Ich bin Promovierende bzw. Promovierender und plane eine kurze Studie. Meine grobe Idee: Die Central England Temperature-Reihe zeigt, dass sich die Erwärmung in England seit den 1980er-Jahren beschleunigt hat, und ich möchte diese Veränderung statistisch datieren. Agieren Sie als kritische, aber faire Betreuungsperson. Nennen Sie erstens drei alternative Forschungsfragen: eine engere, eine weitere und eine aus einem anderen Blickwinkel, jeweils mit einem Satz dazu, was sie beitragen würde. Listen Sie zweitens die Annahmen auf, die meine Idee als selbstverständlich voraussetzt – zu den Daten, zur Methode und zu den Ursachen. Nennen Sie drittens die drei stärksten Einwände, die eine Gutachterin bzw. ein Gutachter erheben könnte, und zu jedem eine mögliche Gegenposition. Bleiben Sie unter 350 Wörtern. Zitieren Sie keine Literatur, wenn Sie nicht sicher sind, dass es sie gibt.
```

### Prüfung

Öffnen Sie den Preprint von Shi et al. (2021): Geht er auf die Einwände des Assistenten ein – Autokorrelation oder langes Gedächtnis, Wahl des Strafterms (penalty), Zeitpunkt (1987/1988)? Hat der Assistent Stationswechsel und Stadtkorrektur angesprochen, die Legg et al. (2025) dokumentieren?

## Mit eigenem Material

### Mitbringen

Eine grobe eigene Forschungsidee in zwei oder drei Sätzen, nichts Vertrauliches.

### Schritte

1. Fügen Sie Ihre Idee ein und bitten Sie Ihren KI-Assistenten, als kritische Betreuungsperson zu agieren.
2. Bitten Sie um alternative Forschungsfragen mit anderem Umfang oder Blickwinkel.
3. Fragen Sie nach verdeckten Annahmen und den stärksten Einwänden gegen Ihre Idee.
4. Wählen Sie einen Einwand und fragen Sie, wie Sie ihn beantworten könnten.

### Prompt

```text
Ich bin Promovierende bzw. Promovierender in [Fachgebiet]. Meine grobe Forschungsidee lautet: [Idee]. Agieren Sie als kritische, aber faire Betreuungsperson. Nennen Sie erstens drei alternative Forschungsfragen: eine engere, eine weitere und eine aus einem anderen Blickwinkel, jeweils mit einem Satz dazu, was sie beitragen würde. Listen Sie zweitens die Annahmen auf, die meine Idee als selbstverständlich voraussetzt. Nennen Sie drittens die drei stärksten Einwände, die eine Gutachterin bzw. ein Gutachter erheben könnte, und eine mögliche Gegenposition. Bleiben Sie unter 350 Wörtern. Zitieren Sie keine Literatur, wenn Sie nicht sicher sind, dass es sie gibt.
```

### Prüfung

Sie finden mindestens eine alternative Frage oder einen Einwand, den Sie noch nicht bedacht hatten und den Sie mit Literatur, die Sie kennen, stützen oder entkräften könnten.

## Technik

Ein einfacher Chat genügt: Fügen Sie Ihre Idee mit einem Rollenprompt ein und führen Sie den Dialog weiter. Der Deep-Research-Agent-Skill bietet für Coding-Assistenten (z. B. GitHub Copilot in VS Code) einen sokratischen Modus, der Sie Schritt für Schritt befragt.

## Stufen

### Chat

Führen Sie den Startprompt mit Ihrer groben Idee in einem Chat aus. Wählen Sie im selben Chat den Einwand, der Sie am meisten beunruhigt, bitten Sie den Assistenten, ihn härter vorzubringen, und fragen Sie dann nach der stärksten Antwort, die Sie geben könnten.

### Projekt / Notebook

Fügen Sie eine einseitige Notiz zu Ihrer Idee, die Kommentare Ihrer Betreuungsperson, zwei oder drei Schlüsselpapers (Übung: C6 und B1) und ein kurzes Regeldokument hinzu – „agiere als kritische, aber faire Betreuungsperson, keine erfundene Literatur“. Fragen Sie, welche Einwände die Paper bereits beantworten. Jede Runde bleibt als Seite erhalten, sodass Sie sehen, wie sich die Idee verändert.

### Eigener Assistent

Nennen Sie ihn „Kritische Betreuungsperson“. Anweisungen: die drei Teile des Startprompts – alternative Fragen (enger, weiter, anderer Blickwinkel), verdeckte Annahmen, drei stärkste Einwände mit Gegenpositionen – unter 350 Wörtern, keine Literatur, wenn er nicht sicher ist, dass es sie gibt, und niemals die Richtung für Sie wählen. Weder Wissen noch Code nötig. Startprompts: „Fordere diese Idee heraus“, „Agiere als Reviewer 2 für meine überarbeitete Frage“. Wiederverwendbar für jede neue Idee oder Überarbeitung.
