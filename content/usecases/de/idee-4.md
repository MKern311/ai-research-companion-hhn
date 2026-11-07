---
id: idee-4
phase: idee
order: 4
title: Interdisziplinäre Brücken
risk: 1
mode: Co-create
potential: 2
capabilities: generierung; recherche
routes: chat; files; external
tools: Semantic Scholar; Open Knowledge Maps; Perplexity
data: D2; C6
practice_data: D2
practice_ref: C6
---

Lassen Sie sich Konzepte und Methoden aus Nachbardisziplinen vorschlagen, die sich auf Ihre Forschungsfrage übertragen lassen.

## Problem

Nützliche Konzepte und Methoden existieren oft schon in einer Nachbardisziplin, aber Sie lesen deren Zeitschriften selten und kennen das Vokabular nicht, mit dem man sie suchen würde.

## Ergebnis

Eine Tabelle übertragbarer Konzepte oder Methoden, was jeweils angepasst werden muss und wo die Übertragung scheitern könnte – dazu die Suchbegriffe, die dieses Fach verwendet, damit Sie weiterlesen können.

## Vorgehen

1. Geben Sie Ihrem KI-Assistenten Ihre Frage und Ihre Herkunftsdisziplin
2. Bitten Sie um vier Konzepte oder Methoden aus Nachbarfächern
3. Fragen Sie, was sich ändern muss und wo die Übertragung scheitert
4. Prüfen Sie die Bedeutung eines Konzepts in der Literatur des jeweiligen Fachs

## Konzepte

### Concept Stretching (Sartori)

Ein Konzept auf neue Fälle anzuwenden, indem man seine Definition lockert, bis es seine Bedeutung verliert. Prüfen Sie bei der Übertragung eines Konzepts, ob seine definierenden Merkmale in Ihrem Setting weiterhin gelten, statt nur das Etikett zu behalten.

### Grenzobjekte (Boundary Objects)

Konzepte oder Werkzeuge, die flexibel genug sind, um von mehreren Gemeinschaften genutzt zu werden, und zugleich robust genug, um eine gemeinsame Identität zu bewahren (Star & Griesemer, 1989). Gute Kandidaten für die Übertragung – und Stellen, an denen Disziplinen mit einem Wort Unterschiedliches meinen können.

### Literaturbasierte Entdeckung (ABC-Modell)

Swansons Ansatz verbindet zwei Literaturen, die sich nicht zitieren, über ein gemeinsames Zwischenkonzept B. Ein systematischer Weg, übertragbare Ideen zu finden; jeder Kandidat muss dennoch im Herkunftsfach geprüft werden.

### Multi-, Inter- und Transdisziplinarität

Multidisziplinäre Arbeit stellt Disziplinen nebeneinander; interdisziplinäre Arbeit integriert ihre Konzepte und Methoden; transdisziplinäre Arbeit bezieht zusätzlich Partner außerhalb der Wissenschaft ein. Sagen Sie, auf welcher Ebene Ihre Übertragung zielt.

## Literatur

- Sartori, G. (1970). Concept misformation in comparative politics. American Political Science Review, 64(4), 1033–1053. doi:10.2307/1958356
- Star, S. L., & Griesemer, J. R. (1989). Institutional ecology, 'translations' and boundary objects: Amateurs and professionals in Berkeley's Museum of Vertebrate Zoology, 1907–39. Social Studies of Science, 19(3), 387–420. doi:10.1177/030631289019003001
- Swanson, D. R. (1986). Undiscovered public knowledge. The Library Quarterly, 56(2), 103–118. doi:10.1086/601720

## Übung

### Aufgabe

Stellen Sie eine Klimafrage und fragen Sie, welche Methoden aus Statistik, Ökonometrie oder Ingenieurwesen sie beantworten könnten. Prüfen Sie dann, ob die Vorschläge des Assistenten zu den Methoden und Literaturen passen, auf die sich der Changepoint-Preprint tatsächlich stützt.

### Prompt

```text
Ich bin Promovierende bzw. Promovierender der Klimawissenschaft und arbeite an der Frage: „Wann hat sich die Erwärmungsrate in der Central England Temperature-Reihe verändert, und war die Veränderung abrupt oder allmählich?“ Die Daten sind monatliche und jährliche Mitteltemperaturen ab 1659 (angehängte monatliche HadCET-Datei). Schlagen Sie vier Konzepte oder Methoden aus Nachbardisziplinen vor – zum Beispiel Statistik, Ökonometrie, Ingenieurwesen oder Ökologie –, die helfen könnten, sie zu beantworten. Zeigen Sie eine Tabelle: Disziplin, Konzept oder Methode, wie es sich auf meine Frage übertragen ließe, was angepasst werden müsste (zum Beispiel Autokorrelation oder die frühen, weniger präzisen Werte), Risiko einer Fehlpassung. Fügen Sie pro Zeile eine Schlüsselreferenz nur hinzu, wenn Sie sicher sind, dass sie existiert, wenn möglich mit Link. Erfinden Sie keine Quellen.
```

### Prüfung

Vergleichen Sie mit Shi et al. (2021): Abschnitt 3 verwendet Penalized Likelihood mit BIC- und MDL-Strafterm, und das Paper zitiert ökonometrische Arbeiten zu Strukturbrüchen (Bai und Perron; Chow-Tests). Schlagen Sie eine vom Assistenten genannte Referenz nach und bestätigen Sie, dass sie existiert.

## Mit eigenem Material

### Mitbringen

Ihre Forschungsfrage und den Namen Ihrer Disziplin.

### Schritte

1. Fügen Sie Ihre Forschungsfrage ein und nennen Sie Ihre Disziplin.
2. Bitten Sie um Konzepte oder Methoden aus Nachbardisziplinen, die sich übertragen ließen.
3. Fragen Sie, was angepasst werden müsste und wo die Übertragung scheitern könnte.
4. Schlagen Sie ein vorgeschlagenes Konzept nach, um zu bestätigen, dass es wie beschrieben existiert.

### Prompt

```text
Ich bin Promovierende bzw. Promovierender in [Fachgebiet] und arbeite an: [Forschungsfrage]. Schlagen Sie vier Konzepte, Theorien oder Methoden aus Nachbardisziplinen vor, die helfen könnten, sie zu beantworten. Zeigen Sie eine Tabelle: Disziplin, Konzept oder Methode, wie es sich auf meine Frage übertragen ließe, was angepasst werden müsste, Risiko einer Fehlpassung. Fügen Sie pro Zeile eine Schlüsselreferenz nur hinzu, wenn Sie sicher sind, dass sie existiert, wenn möglich mit Link. Wenn Sie nicht sicher sind, sagen Sie es; erfinden Sie keine Quellen.
```

### Prüfung

Schlagen Sie ein vorgeschlagenes Konzept und seine Referenz nach: Die Quelle existiert und verwendet das Konzept so, wie der Assistent es beschreibt.

## Technik

Ein einfacher Chat mit dem Startprompt; behandeln Sie jede Referenz nur als Hinweis. Um ein vorgeschlagenes Konzept zu bestätigen, suchen Sie es in Semantic Scholar oder Open Knowledge Maps, die zeigen, wo der Begriff tatsächlich verwendet wird. Für die Übung hängen Sie die monatliche HadCET-Datei an.

## Stufen

### Chat

Hängen Sie die monatliche CET-Datei (D2) an und führen Sie den Startprompt aus. Bitten Sie im selben Chat um die Suchbegriffe, die jedes Nachbarfach für seine Methode verwendet, damit Sie diese Literatur selbst finden können.

### Projekt / Notebook

Fügen Sie Ihre Frage, das Paper, mit dem Sie arbeiten (Übung: C6, das sich auf ökonometrische Arbeiten zu Strukturbrüchen stützt), und zwei oder drei Paper aus dem Nachbarfach hinzu, sobald Sie sie gefunden haben. Fragen Sie, was jede Methode voraussetzt und was Ihre Daten bräuchten. Der Arbeitsbereich wächst zu einem Leselogbuch für die andere Disziplin.

### Eigener Assistent

Nennen Sie ihn „Disziplinbrücke“. Anweisungen: vier Konzepte oder Methoden aus benannten Nachbarfächern, die Tabelle des Startprompts (Übertragung, Anpassung, Risiko einer Fehlpassung), das Suchvokabular jedes Fachs und eine Referenz nur, wenn er sicher ist, dass sie existiert. Schalten Sie Codeausführung bzw. Datenanalyse ein, wenn Ihr Werkzeug sie anbietet und Sie eine Methode an Ihren Daten ausprobieren möchten. Startprompt: „Welche Methoden aus anderen Fächern passen zu dieser Frage?“ Wiederverwendbar für jede neue Frage.
