---
id: publikation-4
phase: publikation
order: 4
title: Begutachtung vor der Einreichung
risk: 2
mode: Assist
potential: 3
capabilities: analyse
routes: files; chat; external
tools: Paperpal
repos: ars-reviewer; peer-review-panel
data: C6
practice_data: C6
---

Den Text von einem Gremium kritischer Gutachtender – Methoden, Theorie, Advocatus Diaboli – beurteilen lassen, einschließlich fehlender Berichtspunkte für Ihr Design, und daraus einen Überarbeitungsfahrplan ableiten.

## Problem

Kritisches Feedback kommt meist Monate nach der Einreichung, und Betreuungspersonen haben selten Zeit, jeden Entwurf als skeptische Außenstehende zu lesen, die Methoden, Schlussfolgerungen und Berichtsstandards prüfen.

## Ergebnis

Drei Gutachten aus verschiedenen Blickwinkeln, jeweils an eine zitierte Passage gebunden, fehlende Berichtspunkte, benannt nach der passenden EQUATOR-Richtlinie, und ein priorisierter Überarbeitungsfahrplan – Sie beurteilen, welche Kommentare berechtigt sind.

## Vorgehen

1. Den Abschnitt hochladen und Zeitschrift und Artikeltyp nennen
2. Gutachten zu Methoden, Theorie und aus der Rolle des Advocatus Diaboli anfordern
3. Zu jedem wesentlichen Kommentar eine zitierte Passage verlangen
4. Berichtspunkte an der eigenen Checkliste der Richtlinie prüfen
5. Die Kommentare, die Sie akzeptieren, in einen priorisierten Fahrplan überführen

## Konzepte

### Berichtsrichtlinien des EQUATOR-Netzwerks (EQUATOR Network)

Eine kuratierte Bibliothek designspezifischer Checklisten: CONSORT (randomisierte Studien), STROBE (Beobachtungsstudien), PRISMA 2020 (systematische Übersichtsarbeiten), COREQ und SRQR (qualitative Forschung), ARRIVE (Tierforschung). In der Gesundheitsforschung entwickelt, werden sie fächerübergreifend dort genutzt, wo diese Designs vorkommen.

### Kriterien des Peer Review

Redaktionen bitten Gutachtende meist, Originalität, Validität von Methoden und Schlussfolgerungen, Bedeutung und Klarheit zu beurteilen und wesentliche Kommentare (die die Schlussfolgerungen betreffen) von geringfügigen (Darstellung, Wortwahl) zu trennen.

### Advocatus Diaboli (Red Teaming)

Eine Gutachterrolle, die bewusst gegen die zentrale Aussage argumentiert – alternative Erklärungen, Confounding, Übergeneralisierung, selektives Berichten –, um Schwächen aufzudecken, bevor externe Gutachtende es tun.

### TOP-Richtlinien (TOP Guidelines)

Transparency and Openness Promotion: 2015 mit acht Standards eingeführt und als TOP 2025 überarbeitet. Sieben Forschungspraktiken (Studienregistrierung, Studienprotokoll, Analyseplan, Materialien, Daten, Analysecode und Berichtstransparenz) können offengelegt, geteilt und zitiert oder zertifiziert werden; Verifikationspraktiken und -studien betreffen Ergebnistransparenz, computergestützte Reproduzierbarkeit, Replikationen und Registered Reports. Nutzen Sie sie, um Anfragen nach Daten und Code vorwegzunehmen.

## Literatur

- Simera, I., Moher, D., Hirst, A., Hoey, J., Schulz, K. F., & Altman, D. G. (2010). Transparent and accurate reporting increases reliability, utility, and impact of your research: Reporting guidelines and the EQUATOR Network. BMC Medicine, 8, 24. doi:10.1186/1741-7015-8-24
- Nosek, B. A., Alter, G., Banks, G. C., Borsboom, D., Bowman, S. D., Breckler, S. J., Buck, S., Chambers, C. D., Chin, G., Christensen, G., Contestabile, M., Dafoe, A., Eich, E., Freese, J., Glennerster, R., Goroff, D., Green, D. P., Hesse, B., Humphreys, M., … Yarkoni, T. (2015). Promoting an open research culture. Science, 348(6242), 1422–1425. doi:10.1126/science.aab2374
- Grant, S., Corker, K. S., Mellor, D., Stewart, S. L. K., Mayo-Wilson, E., Cashin, A. G., Lagisz, M., Moher, D., Umpierre, D., Barbour, V., Buck, S., Collins, G. S., Hazlett, H. F., Hrynaszkiewicz, I., Lee, C. J., Parker, T. H., Rethlefsen, M. L., Toomey, E., Nosek, B. A., & the TOP Advisory Board. (2026). TOP 2025: An update to the Transparency and Openness Promotion Guidelines. Research Integrity and Peer Review, 11, 40. doi:10.1186/s41073-026-00223-0

## Übung

### Aufgabe

Lassen Sie ein Gremium aus drei Gutachtenden über die Preprint-Fassung des Changepoint-Artikels von Shi et al. laufen und behandeln Sie ihn, als wäre er noch in Begutachtung. Sie erfahren, ob der Assistent jeden Kommentar an eine echte Passage bindet und ob er einer statistischen Analyse eine ungeeignete Berichtsrichtlinie aufzwingt.

### Prompt

```text
Angehängt ist die arXiv-Preprint-Fassung (v2, Juni 2022) von Shi et al. zu Changepoints in der Zeitreihe der Central England Temperature. Der Artikel wurde später im Journal of Climate veröffentlicht; behandeln Sie diese Preprint-Fassung für diese Übung, als wäre sie ein Manuskript in Begutachtung bei einer statistischen oder klimawissenschaftlichen Zeitschrift. Handeln Sie als Gremium aus drei kritischen, aber fairen Peer-Review-Gutachtenden: einer Expertin bzw. einem Experten für Zeitreihenmethoden, einer Klimawissenschaftlerin bzw. einem Klimawissenschaftler und einer Advocatus-Diaboli-Rolle, die die zentrale Behauptung eines Changepoints Ende der 1980er-Jahre infrage stellt. Jede Gutachterrolle gibt eine Einschätzung in zwei Sätzen und bis zu vier wesentliche Kommentare ab; zitieren Sie zu jedem die Passage, auf die er sich bezieht, und schlagen Sie eine konkrete Korrektur vor. Sagen Sie dann, ob eine EQUATOR-Berichtsrichtlinie anwendbar ist; wenn keine passt, sagen Sie das. Schließen Sie mit einem nach Priorität geordneten Überarbeitungsfahrplan mit Aufwand (klein, mittel, groß). Kommentieren Sie nur, was im Text steht.
```

### Prüfung

Suchen Sie jede zitierte Passage im PDF. Kommentare zur Modellwahl sollten sich mit den Vergleichen von Log-Likelihood, BIC und MDL in den Tabellen 2–3 befassen. Dem Design sollte keine klinische Richtlinie wie CONSORT aufgezwungen werden. Wenn der Assistent die veröffentlichte Fassung erwähnt (Journal of Climate, 2022, doi 10.1175/JCLI-D-21-0489.1), ist das korrekt.

## Mit eigenem Material

### Mitbringen

Zwei bis drei Seiten Ihres eigenen Entwurfs (zum Beispiel Methoden und Diskussion), dessen alleinige Autorin bzw. alleiniger Autor Sie sind oder den Sie mit Zustimmung der Mitautorinnen und Mitautoren teilen dürfen, oder ein Open-Access-Artikel aus Ihrem Fach.

### Schritte

1. Hängen Sie den Text an oder fügen Sie ihn ein und nennen Sie Zielzeitschrift und Artikeltyp.
2. Bitten Sie um drei kurze Gutachten aus verschiedenen Rollen: Methoden, Theorie, Advocatus Diaboli.
3. Bitten Sie den Assistenten, die Passage hinter jedem wesentlichen Kommentar zu zitieren und fehlende Berichtspunkte zu benennen.
4. Fordern Sie einen Überarbeitungsfahrplan an und entwerfen Sie, wie Sie die zwei nützlichsten Kommentare aufgreifen würden.

### Prompt

```text
Ich bin Promovierende bzw. Promovierender im Fach [Disziplin] und plane, diesen [Artikeltyp] bei [Zeitschrift] einzureichen. Angehängt ist [Abschnitt meines Entwurfs]. Handeln Sie als Gremium aus drei kritischen, aber fairen Peer-Review-Gutachtenden: einer Methodenexpertin bzw. einem Methodenexperten, einer Theorieexpertin bzw. einem Theorieexperten und einer Advocatus-Diaboli-Rolle, die die zentrale Behauptung infrage stellt. Jede Gutachterrolle gibt eine Einschätzung in zwei Sätzen und bis zu vier wesentliche Kommentare ab; zitieren Sie zu jedem Kommentar die Passage, auf die er sich bezieht, und schlagen Sie eine konkrete Korrektur vor. Benennen Sie dann Punkte, die die Berichtsrichtlinie für mein Design erwarten würde und die fehlen (zum Beispiel CONSORT, STROBE, COREQ oder SRQR – sagen Sie, welche anwendbar ist). Schließen Sie mit einem Überarbeitungsfahrplan: die Änderungen in der Reihenfolge ihrer Priorität, mit Aufwand (klein, mittel, groß). Kommentieren Sie nur, was im Text steht; wenn etwas möglicherweise an anderer Stelle des Artikels abgedeckt ist, sagen Sie das.
```

### Prüfung

Jeder Kommentar verweist auf eine Passage, die Sie in Ihrem Text finden, und mindestens einer benennt eine Schwäche, die Ihnen oder Ihrer Betreuungsperson bereits aufgefallen war.

## Technik

Laden Sie den Entwurfsabschnitt in Ihren KI-Assistenten hoch, um das Gutachtergremium zu nutzen, und haken Sie fehlende Punkte an der eigenen Checkliste der Richtlinie auf der Website des EQUATOR-Netzwerks ab; quelloffene Gutachter-Skills in einem Coding-Assistenten in Ihrem Editor (z. B. GitHub Copilot in VS Code, Claude Code) liefern ein umfassenderes Gutachten.

## Stufen

### Chat

Führen Sie den Startprompt mit dem angehängten Shi-Preprint aus. Bitten Sie den Assistenten danach im selben Chat, die zwei Kommentare mit der höchsten Priorität in einen konkreten Überarbeitungsplan für den Methodenteil zu überführen.

### Projekt / Notebook

Fügen Sie den Shi-Preprint (C6) oder Ihren eigenen Entwurf, die Hinweise für Gutachtende der Zielzeitschrift und die Checkliste der zu Ihrem Design passenden Berichtsrichtlinie (von der Website des EQUATOR-Netzwerks) hinzu. Fragen Sie, welche Punkte der Checkliste fehlen. Nach jeder Überarbeitung fügen Sie die neue Fassung hinzu und sehen, welche Kommentare erledigt sind.

### Eigener Assistent

Erstellen Sie einen konfigurierten Assistenten (z. B. einen Copilot-Agenten, ein ChatGPT-Projekt, ein Gemini Gem oder ein Claude-Projekt). Definieren Sie in seinen dauerhaften Anweisungen das Gremium: eine Methodenexpertin bzw. ein Methodenexperte, eine Fachexpertin bzw. ein Fachexperte und eine Advocatus-Diaboli-Rolle, jeweils mit kurzer Einschätzung und bis zu vier wesentlichen Kommentaren, die ihre Passage zitieren und eine Korrektur vorschlagen; dann eine Prüfung der Berichtsrichtlinie („sagen, wenn keine passt“) und ein priorisierter Fahrplan mit Aufwand. Fügen Sie Ihre Checklisten als Wissensdateien hinzu (unterstützt Ihr Werkzeug sie nicht, hängen Sie sie im Chat an). Startprompt: „Begutachten Sie diesen Entwurf für [Zeitschrift].“ Wiederverwendbar für jedes Manuskript – nur eigene Entwürfe oder mit Zustimmung der Mitautorinnen und Mitautoren.
