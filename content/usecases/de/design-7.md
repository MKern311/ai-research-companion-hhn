---
id: design-7
phase: design
order: 7
title: Experimentelle Stimuli & Instrumente
risk: 2
mode: Co-create
potential: 3
capabilities: generierung; agentisch
routes: chat; files; external
connect: GitHub (repositories); Figma
repos: truman; mock-social-media
data: B2; C4
practice_data: B2; C4
---

Erzeugen Sie passende Materialien für jede Bedingung eines Experiments – z. B. Fallvignetten, eine Botschaft in zwei Rahmungen (Framings), eine Mock-Webseite oder einen Mock-Newsfeed – und entwerfen Sie den Studienablauf mit Randomisierung und Variablennamen für Ihr Befragungstool.

## Problem

Realistische Stimuli für jede Bedingung – Vignetten, gerahmte Botschaften, Mock-Webseiten oder -Feeds – zu bauen und mit Randomisierung in eine Befragung einzubinden, dauert Wochen, und kleine unbeabsichtigte Unterschiede zwischen den Bedingungen verfälschen die Ergebnisse.

## Ergebnis

Passende Stimuli für jede Bedingung, eine Manipulationsprüfung und ein Studienablauf mit Variablennamen, die Sie in Ihrem Befragungstool einrichten – schneller gebaut, leichter gleichwertig zu halten, und ein Export, der direkt in Ihre Analyse geht.

## Vorgehen

1. Definieren Sie den manipulierten Faktor, seine Stufen und alles, was konstant gehalten wird
2. Erzeugen Sie Stimuli je Bedingung und listen Sie jeden Unterschied zwischen ihnen auf
3. Entwerfen Sie eine Manipulationsprüfung und den Studienablauf mit Variablennamen
4. Bauen Sie die Studie in Ihrem Befragungstool und pilotieren Sie Realismus und Manipulation mit echten Personen
5. Holen Sie die Ethikfreigabe ein und bereiten Sie ein Debriefing vor

## Konzepte

### Experimentelle Manipulation und Kontrolle

Die Bedingungen sollten sich nur im manipulierten Faktor unterscheiden; jeder andere Unterschied ist eine Störvariable (Confound). Zufällige Zuteilung gleicht Merkmale der Teilnehmenden im Erwartungswert über die Bedingungen hinweg aus.

### Manipulationsprüfung (Manipulation Check)

Eine Messung, ob die Teilnehmenden die Manipulation wie beabsichtigt wahrgenommen haben. Nützlich in Piloten; in der Hauptstudie kann sie selbst die Antworten beeinflussen, platzieren und verwenden Sie sie daher bewusst (Hauser et al., 2018).

### Vignetten und Mock-Umgebungen

Systematisch variierte Beschreibungen oder simulierte Umgebungen wie ein Social-Media-Feed, die Kontrolle und Realismus verbinden. Faktorielle Vignettendesigns variieren mehrere Faktoren zugleich (Atzmüller & Steiner, 2010).

### Stimulus-Sampling

Ein Stimulus je Bedingung vermischt die Manipulation mit den Eigenheiten dieses Stimulus; mehrere Stimuli je Bedingung stützen die Verallgemeinerung über das konkrete Material hinaus (Wells & Windschitl, 1999).

### Täuschung und Debriefing

Wenn Stimuli irreführen – fiktive Beiträge, gefälschte Anzeigen –, verlangen die ethischen Leitlinien eine Rechtfertigung, möglichst wenig Täuschung und ein Debriefing; KI-generiertes Material sollte in der Studiendokumentation als solches gekennzeichnet werden.

## Literatur

- Hauser, D. J., Ellsworth, P. C., & Gonzalez, R. (2018). Are manipulation checks necessary? Frontiers in Psychology, 9, 998. doi:10.3389/fpsyg.2018.00998
- Atzmüller, C., & Steiner, P. M. (2010). Experimental vignette studies in survey research. Methodology, 6(3), 128–138. doi:10.1027/1614-2241/a000014
- Wells, G. L., & Windschitl, P. D. (1999). Stimulus sampling and social psychological experimentation. Personality and Social Psychology Bulletin, 25(9), 1115–1125. doi:10.1177/01461672992512005

## Übung

### Aufgabe

Bauen Sie die zwei Bedingungen eines Framing-Experiments: ein Mock-Newsfeed zu einer Hitzewelle mit und ohne eine Attributionsaussage aus den Arbeiten. Sie sehen, ob der Assistent die Bedingungen gleichwertig hält und die Attributionsaussage der Quelle treu bleibt.

### Prompt

```text
Angehängt sind Christidis et al. (2020) zu heißen Tagen in Großbritannien und Zachariah et al. (2023) zur Hitzewelle 2022 in Indien und Pakistan. Ich möchte testen, ob eine Attributionsaussage verändert, wie besorgt Lesende wegen Hitzewellen sind. Erstelle zwei Versionen eines Mock-Social-Media-Newsfeeds als je eine eigenständige HTML-Seite: sechs Beiträge von fiktiven Konten, einer davon ein Beitrag über eine Hitzewelle. Bedingung A: Der Hitzewellen-Beitrag enthält einen Attributionssatz, der einer der Arbeiten originalgetreu entnommen ist, mit Quelle. Bedingung B: derselbe Beitrag ohne diesen Satz, ansonsten Wort für Wort identisch. Liste jeden Unterschied zwischen A und B auf, zitiere die Quellenpassage für den Attributionssatz und ergänze eine Frage zur Manipulationsprüfung und ein Besorgnismaß mit drei Items samt Variablennamen.
```

### Prüfung

Öffnen Sie beide HTML-Dateien nebeneinander (wenn der Assistent nur Code zeigt, bitten Sie ihn um beide als herunterladbare .html-Dateien oder kopieren Sie den Code selbst in zwei .html-Dateien): Nur der Attributionssatz darf sich unterscheiden. Suchen Sie dann die zitierte Passage im PDF – bei Zachariah et al. nach „30 times more likely“, bei Christidis et al. nach „return time of 100-300 years“ – und prüfen Sie, dass der Beitrag sie nicht überzeichnet.

## Mit eigenem Material

### Mitbringen

Ihre Hypothese mit dem Faktor, den Sie manipulieren, und dem Outcome, den Sie messen – oder für die Übungsversion die Attributionsarbeiten B2 und C4.

### Schritte

1. Nennen Sie den manipulierten Faktor, seine Stufen und was über die Bedingungen hinweg identisch bleiben muss.
2. Bitten Sie den Assistenten je Bedingung um die Stimulustexte oder ein einfaches HTML-Mock-up, dazu eine Manipulationsprüfung.
3. Bitten Sie um den Befragungsablauf: Einwilligung, zufällige Zuteilung, Stimulus, Messungen, Debriefing – mit Variablennamen.
4. Vergleichen Sie die Bedingungen nebeneinander: Nur das manipulierte Element darf sich unterscheiden.

### Prompt

```text
Ich plane ein Between-Subjects-Experiment in [Fach]. Hypothese: [z. B. eine als Verlust gerahmte Botschaft verändert Intentionen stärker als dieselbe Botschaft, als Gewinn gerahmt]. Manipulierter Faktor: [Faktor] mit den Stufen [Stufe A] und [Stufe B]. Outcome-Messungen: [Messungen]. 1) Erstelle den Stimulus für jede Bedingung: [z. B. eine kurze Fallvignette, eine öffentliche Informationsbotschaft oder eine Mock-Webseite als eine eigenständige HTML-Seite]. Halte alles identisch außer dem manipulierten Element und liste jeden Unterschied zwischen den Bedingungen auf. 2) Schreibe eine Frage zur Manipulationsprüfung. 3) Entwirf den vollständigen Studienablauf für ein Befragungstool – Einwilligung, zufällige Zuteilung, Stimulus, Messungen, Manipulationsprüfung, Demografie, Debriefing – als Tabelle mit Variablennamen und Kodierung, sodass der Export direkt analysiert werden kann. Verwende keine realen Organisationen, Marken, Personen oder Logos.
```

### Prüfung

Legen Sie die Bedingungen nebeneinander: Abgesehen vom manipulierten Element müssen Texte, Bilder, Layout und Länge identisch sein; die Variablennamen im Ablauf müssen zu dem passen, was Ihr Analyseplan erwartet.

### Grenze

Stimuli brauchen eine Ethikfreigabe, ein Debriefing, wenn sie irreführen, und eine Kennzeichnung KI-generierter Bilder; prüfen Sie Urheberrecht und Nutzungsbedingungen der Plattformen, verwenden Sie fiktive Namen und Organisationen und pilotieren Sie den Realismus mit echten Personen vor der Hauptstudie.

## Technik

Ihr KI-Assistent schreibt Stimulustexte und eigenständige HTML-Mock-ups und entwirft den Befragungsablauf; die Studie bauen Sie in Ihrem Befragungstool (z. B. Qualtrics oder Microsoft Forms). Für realistische interaktive Feeds protokollieren Forschungsplattformen wie Truman oder das Mock Social Media Website Tool das Verhalten der Teilnehmenden.

## Stufen

### Chat

Führen Sie den Startprompt mit B2 und C4 aus, oder mit Ihrer eigenen Hypothese. Bitten Sie im selben Chat um eine Vergleichstabelle der beiden Bedingungen Satz für Satz, damit Sie bestätigen können, dass sich nur das manipulierte Element unterscheidet.

### Projekt / Notebook

Fügen Sie die Quellenarbeiten hinter Ihren Stimuli, Ihren Analyseplan oder Ihre Präregistrierung sowie die Stimulustexte und den Studienablauf aus dem Chat hinzu – in der Übungsversion B2 und C4. Fragen Sie, ob die Variablennamen zum Analyseplan passen und ob jede Tatsachenbehauptung in einem Stimulus eine Quelle hat. Bedingungen, Quellen und Plan bleiben über die Pilotrunden hinweg zusammen.

### Eigener Assistent

Nennen Sie ihn „Stimulus-Bauer“ und schalten Sie Codeausführung bzw. Dateierstellung ein, wenn Ihr Tool sie anbietet, damit er HTML-Dateien liefert. Anweisungen: Bedingungen identisch halten außer dem manipulierten Element, jeden Unterschied auflisten, die Quelle jeder Tatsachenbehauptung zitieren, eine Manipulationsprüfung und einen Studienablauf mit Variablennamen ergänzen, keine realen Organisationen, Marken, Personen oder Logos verwenden. Startprompt: „Baue die Bedingungen [A] und [B] für: [Hypothese]“. Wiederverwendbar für jedes Folgeexperiment.
