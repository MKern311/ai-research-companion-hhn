---
id: analyse-7
phase: analyse
order: 7
title: Codebook mit Ankerbeispielen
risk: 3
mode: Co-create
potential: 3
capabilities: analyse; generierung
routes: chat; files; external
tools: MAXQDA; NVivo; Taguette
data: B2; C3; C4
practice_data: B2; C3; C4
---

Ein Kategoriensystem in ein Codebook überführen – Definition, Ein- und Ausschlussregeln, Ankerbeispiel und Regel für Grenzfälle – und es an einer Beispielpassage und mit einer zweiten codierenden Person testen.

## Problem

Kategorien, die im Kopf klar erscheinen, werden in der Anwendung unscharf: Codierende sind bei Grenzfällen uneins, Regeln verstreuen sich über Memos, und die Übereinstimmung lässt sich nicht berichten.

## Ergebnis

Ein Codebook mit Definitionen, Ein-, Ausschluss- und Grenzfallregeln sowie Ankerbeispielen aus Ihrem Material, getestet mit einer zweiten codierenden Person und mit einer Übereinstimmungsstatistik, die Sie berichten können.

## Vorgehen

1. Forschungsfrage und vier bis sechs Kategorien angeben
2. Definitionen sowie Ein-, Ausschluss- und Grenzfallregeln anfordern
3. Ankerbeispiele ergänzen, die aus Ihrem eigenen Material zitiert sind
4. Eine Stichprobe unabhängig mit einer zweiten codierenden Person codieren
5. Übereinstimmung berechnen, Abweichungen besprechen und die Regeln schärfen

## Konzepte

### Qualitative Inhaltsanalyse

Eine systematische, regelgeleitete Methode zur Kategorisierung von Text (Mayring; Kuckartz & Rädiker). Kategorien werden deduktiv aus der Theorie oder induktiv aus dem Material gebildet, und jede wird in einem Codebook mit Definition, Codierregeln und Ankerbeispielen dokumentiert.

### Codebook-Eintrag

Für jede Kategorie: Name, Definition, Einschlusskriterien, Ausschlusskriterien (oft mit Verweis auf eine benachbarte Kategorie), eine Regel für Grenzfälle und ein Ankerbeispiel – eine typische Passage, wörtlich aus Ihrem eigenen Material zitiert. Eine Restkategorie („keine davon“) verhindert, dass Einheiten in eine Kategorie gepresst werden.

### Cohens Kappa

Übereinstimmung zwischen zwei Codierenden, korrigiert um den Zufall: κ = (pₒ − pₑ) / (1 − pₑ) (Cohen, 1960). Weit verbreitete, aber willkürliche Konvention nach Landis und Koch (1977): 0,41–0,60 mäßig, 0,61–0,80 substanziell, 0,81–1,00 nahezu perfekt.

### Krippendorffs Alpha

Ein Reliabilitätskoeffizient für beliebig viele Codierende, fehlende Daten und Skalen vom nominalen bis zum Verhältnisniveau. Krippendorffs Konvention: α ≥ 0,800 für verlässliche Daten; 0,667 bis 0,800 nur für vorläufige Schlüsse.

## Literatur

- Cohen, J. (1960). A coefficient of agreement for nominal scales. Educational and Psychological Measurement, 20(1), 37–46. doi:10.1177/001316446002000104
- Landis, J. R., & Koch, G. G. (1977). The measurement of observer agreement for categorical data. Biometrics, 33(1), 159–174. doi:10.2307/2529310
- Krippendorff, K. (2019). Content analysis: An introduction to its methodology (4th ed.). SAGE. doi:10.4135/9781071878781
- Mayring, P. (2014). Qualitative content analysis: Theoretical foundation, basic procedures and software solution. Klagenfurt.
- Kuckartz, U., & Rädiker, S. (2023). Qualitative content analysis: Methods, practice and software (2nd ed.). SAGE.

## Übung

### Aufgabe

Erstellen Sie ein Codebook dazu, wie Attributionsstudien den menschlichen Einfluss auf Extremereignisse ausdrücken, mit Ankerbeispielen, die aus zwei Studien zitiert sind, und codieren Sie dann ein drittes Abstract gemeinsam mit einer Nachbarin oder einem Nachbarn. Sie erfahren, ob der Assistent Anker erfindet und wie gut zwei Personen mit seinen Regeln übereinstimmen.

### Prompt

```text
Ich führe eine qualitative Inhaltsanalyse durch. Forschungsfrage: Wie drücken Klimaattributionsstudien den menschlichen Einfluss auf Extremereignisse aus? Kategorien: Wahrscheinlichkeitsänderung (mehr oder weniger wahrscheinlich, Risikoverhältnisse); Wiederkehrperiode (wie oft ein Ereignis wiederkehrt); Intensitätsänderung (wie viel heißer oder trockener); Zukunftsprojektion (Veränderung bei weiterer Erwärmung); Unsicherheit oder Einschränkung (genannte Vorbehalte); keine davon (für Sätze, die in keine Kategorie passen). Erstellen Sie ein Codebook: Geben Sie für jede Kategorie außer „keine davon“ den Namen, eine Definition, eine Einschlussregel, eine Ausschlussregel, eine Grenzfallregel und ein Ankerbeispiel an, das wörtlich und mit Seitenzahl aus dem angehängten PDF von Christidis et al. (2020) oder Christidis et al. (2023) zitiert ist. Codieren Sie dann das Abstract des angehängten PDFs von Zachariah et al. (2023) Satz für Satz: Kategorie, genaues Zitat und ob die Entscheidung eindeutig, unklar oder problematisch war. Verwenden Sie nur direkte Zitate.
```

### Prüfung

Suchen Sie jeden Anker und jedes Zitat in den PDFs. Eine Nachbarin oder ein Nachbar codiert das Zachariah-Abstract unabhängig mit dem Codebook, einschließlich „keine davon“; bitten Sie den Assistenten, aus beiden Codierungen Cohens Kappa zu berechnen, und prüfen Sie die prozentuale Übereinstimmung von Hand. Bei nur elf Sätzen ist Kappa lediglich anschaulich – besprechen Sie, wo Sie uneins sind, statt den Wert.

## Mit eigenem Material

### Mitbringen

Ihre Forschungsfrage, vier bis sechs Kategorien mit je einer einzeiligen Beschreibung und eine kurze Passage aus einer Open-Access-Studie oder ein erfundener Text – niemals Daten von Teilnehmenden.

### Schritte

1. Fügen Sie Ihre Forschungsfrage und Ihre Kategorien ein.
2. Fordern Sie ein Codebook mit Definitionen, Ein- und Ausschlussregeln und Grenzfallregeln an.
3. Fügen Sie die Beispielpassage ein und bitten Sie den Assistenten, sie mit dem Codebook zu codieren.
4. Bitten Sie eine Kollegin oder einen Kollegen, dieselbe Passage mit dem Codebook zu codieren, vergleichen Sie die Entscheidungen und schärfen Sie die Regeln.

### Prompt

```text
Ich führe eine qualitative Inhaltsanalyse durch (zum Beispiel nach Mayring oder Kuckartz). Forschungsfrage: [Frage]. Kategorien: [Liste mit einzeiligen Beschreibungen]. Erstellen Sie ein Codebook: Geben Sie für jede Kategorie den Namen, eine Definition, eine Einschlussregel, eine Ausschlussregel und eine Regel für Grenzfälle an. Erfinden Sie keine Ankerbeispiele; schreiben Sie stattdessen „Ankerbeispiel aus dem Material ergänzen“. Codieren Sie dann die folgende Passage mit diesem Codebook: Geben Sie für jedes codierte Segment die Kategorie, das genaue Zitat, ob die Entscheidung eindeutig, unklar oder problematisch war, und an, wie das Codebook geändert werden sollte. Verwenden Sie nur direkte Zitate aus der Passage.

[Passage einfügen]
```

### Prüfung

Jedes Zitat steht wortgetreu in der Passage, keine Kategorie überschneidet sich mit einer anderen, und eine zweite Person, die dieselbe Passage mit dem Codebook codiert, kommt überwiegend zu denselben Entscheidungen.

## Technik

Fügen Sie Kategorien und eine Beispielpassage in Ihren KI-Assistenten ein und führen Sie das Codebook in Word. Ankerbeispiele stammen aus Ihrem eigenen Material, das Sie in QDA-Software wie MAXQDA oder NVivo codieren; beide Werkzeuge können die Intercoder-Übereinstimmung ausweisen.

## Stufen

### Chat

Führen Sie den Startprompt mit den drei angehängten PDFs aus. Fügen Sie danach im selben Chat die Codierung des Zachariah-Abstracts durch Ihre Nachbarin bzw. Ihren Nachbarn ein und fordern Sie Cohens Kappa, die prozentuale Übereinstimmung und eine Liste aller Abweichungen an.

### Projekt / Notebook

Fügen Sie die Christidis-Studien (B2, C3), die Zachariah-Studie (C4) und Ihr Codebook als Word-Datei hinzu, die Sie nach jeder Runde aktualisieren. Fordern Sie Passagen an, die eine Grenzfallregel auf die Probe stellen. Verwenden Sie für Ihre eigene Studie nur genehmigtes, anonymisiertes Material. Codebook-Versionen, Anker und Notizen zu Abweichungen sammeln sich an einem Ort; jede Regel entscheiden Sie.

### Eigener Assistent

Erstellen Sie einen konfigurierten Assistenten, zum Beispiel „Codebook-Codierer“ (z. B. einen Copilot-Agenten, ein ChatGPT-Projekt, ein Gemini Gem oder ein Claude-Projekt). Fügen Sie das endgültige Codebook als Wissensdatei hinzu (unterstützt Ihr Werkzeug keine Wissensdateien, hängen Sie es im Chat an). In den dauerhaften Anweisungen: Satz für Satz codieren, Kategorie, genaues Zitat und „eindeutig, unklar oder problematisch“ angeben, „keine davon“ verwenden, wenn nichts passt, und nie einen Anker oder ein Zitat erfinden. Startprompt: „Codieren Sie diese Passage mit dem Codebook und kennzeichnen Sie jede Grenzfall-Entscheidung.“ Wiederverwendbar für jeden neuen Stapel – es kommt nur genehmigtes, anonymisiertes Material hinein, und ein Mensch prüft jede Codierung.
