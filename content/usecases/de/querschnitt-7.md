---
id: querschnitt-7
phase: querschnitt
order: 7
title: Projektassistent & Forschungsagenten
risk: 3
mode: Delegate
potential: 3
capabilities: agentisch
routes: chat; files; connected; external
connect: OpenAlex
tools: Elicit; STORM
repos: ars-deep-research; awesome-copilot
data: B2; C3; C4; C5
practice_data: B2; C3; C4; C5
---

Richten Sie einen Assistenten ein, der Ihren Standardregeln folgt (Zitierstil, Terminologie, keine erfundenen Quellen), oder lassen Sie Agenten mehrstufige Aufgaben mit festgelegten menschlichen Kontrollpunkten ausführen.

## Problem

Sie wiederholen in jedem Chat dieselben Regeln, und mehrstufige Aufgaben wie eine Scoping-Suche geraten vom Kurs ab oder mischen ungeprüfte, mitunter erfundene Quellen in das Ergebnis.

## Ergebnis

Ein wiederverwendbarer Assistent, der Ihren Zitierstil und Ihre Begriffe anwendet, und ein gestufter Arbeitsablauf, der erst weitergeht, nachdem Sie jede Stufe geprüft haben – gewonnene Zeit, bei der Sie verantwortlich bleiben.

## Vorgehen

1. Schreiben Sie Standardregeln und eine enge Frage
2. Fügen Sie die Regeln als erste Nachricht eines Chats ein
3. Testen Sie ihn zuerst mit einer Routinefrage
4. Geben Sie jede Stufe erst frei, nachdem Sie jede Quelle geprüft haben
5. Machen Sie aus den Regeln einen Agenten, sobald sie funktionieren
6. Protokollieren Sie den Arbeitsablauf und erklären Sie die KI-Nutzung

## Konzepte

### Menschliche Kontrollpunkte (Human-in-the-loop)

Der Arbeitsablauf hält nach definierten Stufen an – Suche, Extraktion, Synthese – und geht erst weiter, nachdem eine Person das Ergebnis geprüft hat. Die Verantwortung bleibt bei Ihnen, und frühe Fehler pflanzen sich nicht in spätere Stufen fort.

### Automatisierungsbias (Automation bias)

Die Neigung, automatisierten Ergebnissen zu stark zu vertrauen und ihre Fehler zu übersehen, stärker unter Zeitdruck und wenn ein System meist richtig liegt (Parasuraman & Manzey, 2010). Kontrollpunkte helfen nur, wenn Sie jede Quelle tatsächlich öffnen und lesen.

### Halluzination und Verankerung (Grounding)

Sprachmodelle können flüssige, aber unbelegte oder erfundene Inhalte erzeugen (Ji et al., 2023). Antworten auf bereitgestellte Dokumente zu stützen (Retrieval-Augmented Generation) verringert dieses Risiko, beseitigt es aber nicht; jede Quellenangabe muss weiterhin geprüft werden.

### Scoping-Review-Rahmen nach Arksey & O'Malley

Fünf Stufen: die Forschungsfrage festlegen, relevante Studien identifizieren, Studien auswählen, die Daten erfassen sowie die Ergebnisse zusammenführen, zusammenfassen und berichten. Ein Agent kann bei einzelnen Stufen helfen, aber Auswahl- und Erfassungsentscheidungen bleiben Ihre.

## Literatur

- Arksey, H., & O'Malley, L. (2005). Scoping studies: Towards a methodological framework. International Journal of Social Research Methodology, 8(1), 19–32. doi:10.1080/1364557032000119616
- Parasuraman, R., & Manzey, D. H. (2010). Complacency and bias in human use of automation: An attentional integration. Human Factors, 52(3), 381–410. doi:10.1177/0018720810376055
- Ji, Z., Lee, N., Frieske, R., Yu, T., Su, D., Xu, Y., Ishii, E., Bang, Y. J., Madotto, A., & Fung, P. (2023). Survey of hallucination in natural language generation. ACM Computing Surveys, 55(12), Article 248. doi:10.1145/3571730

## Übung

### Aufgabe

Starten Sie einen neuen Chat, fügen Sie Ihre Standardregeln als erste Nachricht ein, hängen Sie vier Attributions-PDFs an und führen Sie eine Extraktionsstufe mit Kontrollpunkt aus. Sie lernen, wie oft extrahierte Zahlen, Wiederkehrperioden und Wahrscheinlichkeitsänderungen falsch oder unbelegt sind und warum jede Stufe Ihre Freigabe braucht.

### Prompt

```text
Du bist für dieses gesamte Gespräch der Forschungsassistent einer Promovierenden/eines Promovierenden. Standardregeln: zitiere im APA-7-Stil; behandle „return time“ und „return period“ als dasselbe Konzept – die durchschnittliche Zeit zwischen Ereignissen einer bestimmten Größe – und schreibe „return period“; „probability ratio“ bedeutet, um das Wievielfache ein Ereignis mit menschlichem Einfluss wahrscheinlicher ist; erfinde nie Quellen, Zitate oder Zahlen und sage, wenn du unsicher bist; verwende nur die vier angehängten PDFs (Christidis et al., 2020; Christidis et al., 2023; Zachariah et al., 2023; Schumacher et al., 2024). Arbeite in zwei Stufen und halte nach jeder zu meiner Freigabe an. Stufe 1, Extraktion: eine Tabelle mit einer Zeile pro Arbeit – Ereignis und Region, Variable, Methode, Änderung der Wahrscheinlichkeit, Änderung der Intensität, Zukunftsprojektion – jede Zelle mit einem wörtlichen Zitat und Seitenzahl. Stufe 2, nach meiner Freigabe: ein Vergleich von 200 Wörtern, der nur freigegebene Zellen zitiert und mit einer Liste von Aussagen endet, die ich noch prüfen sollte.
```

### Prüfung

Prüfen Sie jede Zelle gegen die PDFs, z. B. Zachariah et al.: 30 times more likely und etwa 1 °C heißer (Strg+F „30 times more likely“); Christidis et al. (2020): „100-300 years“ für Sommer mit 40 °C, was die Tabelle als „return period“ bezeichnen sollte. Geben Sie erst dann Stufe 2 im selben Chat frei, beobachten Sie, ob die Regeln noch gelten, und protokollieren Sie die KI-Nutzung.

## Mit eigenem Material

### Mitbringen

Ihre Standardregeln für die Arbeit mit KI (Zitierstil, Schlüsselbegriffe, was nie passieren darf), eine enge Forschungsfrage und zwei oder drei vertrauenswürdige Quellen – Open-Access-PDFs oder öffentliche Websites.

### Schritte

1. Starten Sie einen neuen Chat und fügen Sie den Prompt mit Ihren Regeln als erste Nachricht ein.
2. Hängen Sie Ihre PDFs an oder nennen Sie Ihre Websites, falls die Websuche aktiviert ist.
3. Stellen Sie eine Routinefrage und prüfen Sie, ob der Assistent Ihren Regeln folgt.
4. Führen Sie nur Stufe 1 aus, prüfen Sie jede Quelle und geben Sie dann Extraktion und Bericht frei.

### Prompt

```text
Du bist für dieses gesamte Gespräch der Forschungsassistent einer Promovierenden/eines Promovierenden in [Fach]. Befolge immer diese Standardregeln: verwende [Zitierstil]; verwende diese Begriffe einheitlich: [Schlüsselbegriffe mit Definitionen]; erfinde nie Quellen, Zitate oder Zahlen – sage, wenn du unsicher bist; [weitere Regeln]. Wenn ich eine Scoping-Aufgabe zu [Forschungsfrage] stelle, arbeite in drei Stufen und halte nach jeder zu meiner Freigabe an. Stufe 1, Suche: liste bis zu acht Quellen aus [angehängten PDFs / Websites] oder dem Web auf, mit Titel, Jahr, Link und einer Zeile zur Relevanz. Stufe 2, Extraktion: fülle für die von mir freigegebenen Quellen eine Tabelle mit Ziel, Methode, Stichprobe und Hauptbefund. Stufe 3, Bericht: schreibe eine Zusammenfassung von 300 Wörtern, die nur freigegebene Quellen zitiert. Bestätige zuerst diese Regeln in drei Zeilen und warte auf meine Frage.
```

### Prüfung

Öffnen Sie vor jeder Freigabe jeden Link und jedes PDF und bestätigen Sie, dass die Quelle existiert und sagt, was die Tabelle behauptet; behandeln Sie den Abschlussbericht als ungeprüften Entwurf, der noch Ihre eigene Lektüre braucht.

### Grenze

In einem einfachen Chat gelten die Regeln nur für dieses Gespräch – ein neuer Chat beginnt bei null. Um sie zu behalten, nutzen Sie ein Regeldokument in einem Notebook oder die Anweisungen eines eigenen Assistenten (Stufen 2 und 3). Der Assistent führt kurze Schritte aus, die Sie einzeln freigeben; er kann keine Bibliotheksdatenbanken durchsuchen und die Pipeline nicht selbstständig ausführen.

## Technik

Erstellen Sie einen eigenen Assistenten (z. B. einen Copilot-Agenten, ein Custom GPT, ein Gemini Gem oder ein Claude-Projekt) mit Ihren Regeln als Anweisungen und öffentlichen Websites oder Übungs-PDFs als Wissen; wenn Ihr Werkzeug keine Wissensdateien annimmt, hängen Sie sie im Chat an. Suchwerkzeuge wie OpenAlex brauchen eine Anbindung (MCP oder API) – prüfen Sie Datenschutz und Freigabe vorher mit Ihrer Hochschule.

## Stufen

### Chat

Fügen Sie die Standardregeln und die gestufte Aufgabe als erste Nachricht ein, hängen Sie B2, C3, C4 und C5 an und führen Sie Stufe 1 aus. Geben Sie im selben Chat nur die Zellen frei, die Sie geprüft haben, und führen Sie Stufe 2 aus – die Regeln gelten nur für dieses Gespräch.

### Projekt / Notebook

Fügen Sie die vier PDFs und ein einseitiges Regeldokument (Zitierstil, Begriffe, nie erfinden, nach jeder Stufe anhalten) als Referenzen hinzu – nur freigegebenes, nicht sensibles Material. Beginnen Sie jede Frage mit „Befolge das Regeldokument“. Je nach Werkzeug antwortet das Notebook hauptsächlich aus diesen Quellen, sodass keine ungeprüften Webquellen hineingelangen, und Sie können später Arbeiten ergänzen. Sie prüfen weiterhin jede Zelle.

### Eigener Assistent

Anweisungen: APA 7, Ihre Begriffe mit Definitionen, nie Quellen, Zitate oder Zahlen erfinden, pro Zelle ein wörtliches Zitat mit Seite, nach jeder Stufe zur Freigabe anhalten. Wissen: die vier PDFs oder Ihre eigenen freigegebenen, nicht sensiblen Arbeiten. Startprompts: „Stufe-1-Extraktion für diese Arbeiten“ und „Vergleiche die freigegebenen Zellen“. Ein Mensch prüft jedes Ergebnis; für jede neue Scoping- oder Vergleichsaufgabe wiederverwendbar.

### Automatisierung / eigener Code

Binden Sie den OpenAlex-MCP-Server an, sodass der Assistent nach Quellen suchen und prüfen kann, ob jede Referenz existiert, und verketten Sie die Stufen in einem Arbeitsablauf, der weiterhin für Ihre Freigabe anhält – ein einfacher eigener Assistent erreicht keine wissenschaftlichen Datenbanken. Auf GitHub: Ein Python-Skript verkettet die Stufen, prüft jede Referenz über die API von OpenAlex oder Crossref und hält zwischen den Stufen für Ihre Freigabe an. Prüfen Sie Datenschutz und Freigabe vorher mit Ihrer Hochschule.
