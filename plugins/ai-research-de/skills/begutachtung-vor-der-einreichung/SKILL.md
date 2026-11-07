---
name: begutachtung-vor-der-einreichung
description: "Den Text von einem Gremium kritischer Gutachtender – Methoden, Theorie, Advocatus Diaboli – beurteilen lassen, einschließlich fehlender Berichtspunkte für Ihr Design, und daraus einen Überarbeitungsfahrplan ableiten. Einsetzen bei: Begutachtung vor der Einreichung."
---

# Begutachtung vor der Einreichung

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/publikation-4

## Ziel

Den Text von einem Gremium kritischer Gutachtender – Methoden, Theorie, Advocatus Diaboli – beurteilen lassen, einschließlich fehlender Berichtspunkte für Ihr Design, und daraus einen Überarbeitungsfahrplan ableiten.

Drei Gutachten aus verschiedenen Blickwinkeln, jeweils an eine zitierte Passage gebunden, fehlende Berichtspunkte, benannt nach der passenden EQUATOR-Richtlinie, und ein priorisierter Überarbeitungsfahrplan – Sie beurteilen, welche Kommentare berechtigt sind.

## Wann einsetzen

Kritisches Feedback kommt meist Monate nach der Einreichung, und Betreuungspersonen haben selten Zeit, jeden Entwurf als skeptische Außenstehende zu lesen, die Methoden, Schlussfolgerungen und Berichtsstandards prüfen.

## Vorgehen

1. Hängen Sie den Text an oder fügen Sie ihn ein und nennen Sie Zielzeitschrift und Artikeltyp.
2. Bitten Sie um drei kurze Gutachten aus verschiedenen Rollen: Methoden, Theorie, Advocatus Diaboli.
3. Bitten Sie den Assistenten, die Passage hinter jedem wesentlichen Kommentar zu zitieren und fehlende Berichtspunkte zu benennen.
4. Fordern Sie einen Überarbeitungsfahrplan an und entwerfen Sie, wie Sie die zwei nützlichsten Kommentare aufgreifen würden.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.
- Erstellen Sie einen konfigurierten Assistenten (z. B. einen Copilot-Agenten, einen Custom GPT, ein Gemini Gem oder ein Claude-Projekt). Definieren Sie in seinen dauerhaften Anweisungen das Gremium: eine Methodenexpertin bzw. ein Methodenexperte, eine Fachexpertin bzw. ein Fachexperte und eine Advocatus-Diaboli-Rolle, jeweils mit kurzer Einschätzung und bis zu vier wesentlichen Kommentaren, die ihre Passage zitieren und eine Korrektur vorschlagen; dann eine Prüfung der Berichtsrichtlinie („sagen, wenn keine passt“) und ein priorisierter Fahrplan mit Aufwand. Fügen Sie Ihre Checklisten als Wissensdateien hinzu (unterstützt Ihr Werkzeug sie nicht, hängen Sie sie im Chat an). Startprompt: „Begutachten Sie diesen Entwurf für [Zeitschrift].“ Wiederverwendbar für jedes Manuskript – nur eigene Entwürfe oder mit Zustimmung der Mitautorinnen und Mitautoren.

## Startprompt

```text
Ich bin Promovierende bzw. Promovierender im Fach [Disziplin] und plane, diesen [Artikeltyp] bei [Zeitschrift] einzureichen. Angehängt ist [Abschnitt meines Entwurfs]. Handeln Sie als Gremium aus drei kritischen, aber fairen Peer-Review-Gutachtenden: einer Methodenexpertin bzw. einem Methodenexperten, einer Theorieexpertin bzw. einem Theorieexperten und einer Advocatus-Diaboli-Rolle, die die zentrale Behauptung infrage stellt. Jede Gutachterrolle gibt eine Einschätzung in zwei Sätzen und bis zu vier wesentliche Kommentare ab; zitieren Sie zu jedem Kommentar die Passage, auf die er sich bezieht, und schlagen Sie eine konkrete Korrektur vor. Benennen Sie dann Punkte, die die Berichtsrichtlinie für mein Design erwarten würde und die fehlen (zum Beispiel CONSORT, STROBE, COREQ oder SRQR – sagen Sie, welche anwendbar ist). Schließen Sie mit einem Überarbeitungsfahrplan: die Änderungen in der Reihenfolge ihrer Priorität, mit Aufwand (klein, mittel, groß). Kommentieren Sie nur, was im Text steht; wenn etwas möglicherweise an anderer Stelle des Artikels abgedeckt ist, sagen Sie das.
```

## Prüfung

Jeder Kommentar verweist auf eine Passage, die Sie in Ihrem Text finden, und mindestens einer benennt eine Schwäche, die Ihnen oder Ihrer Betreuungsperson bereits aufgefallen war.

## Grenzen

- Risiko: Eigene unveröffentlichte Entwürfe, Gutachten oder Inhalte Dritter.

## Wichtige Konzepte

- **Berichtsrichtlinien des EQUATOR-Netzwerks (EQUATOR Network)** – Eine kuratierte Bibliothek designspezifischer Checklisten: CONSORT (randomisierte Studien), STROBE (Beobachtungsstudien), PRISMA 2020 (systematische Übersichtsarbeiten), COREQ und SRQR (qualitative Forschung), ARRIVE (Tierforschung). In der Gesundheitsforschung entwickelt, werden sie fächerübergreifend dort genutzt, wo diese Designs vorkommen.
- **Kriterien des Peer Review** – Redaktionen bitten Gutachtende meist, Originalität, Validität von Methoden und Schlussfolgerungen, Bedeutung und Klarheit zu beurteilen und wesentliche Kommentare (die die Schlussfolgerungen betreffen) von geringfügigen (Darstellung, Wortwahl) zu trennen.
- **Advocatus Diaboli (Red Teaming)** – Eine Gutachterrolle, die bewusst gegen die zentrale Aussage argumentiert – alternative Erklärungen, Confounding, Übergeneralisierung, selektives Berichten –, um Schwächen aufzudecken, bevor externe Gutachtende es tun.
- **TOP-Richtlinien (TOP Guidelines)** – Transparency and Openness Promotion: 2015 mit acht Standards eingeführt und als TOP 2025 überarbeitet. Sieben Forschungspraktiken (Studienregistrierung, Studienprotokoll, Analyseplan, Materialien, Daten, Analysecode und Berichtstransparenz) können offengelegt, geteilt und zitiert oder zertifiziert werden; Verifikationspraktiken und -studien betreffen Ergebnistransparenz, computergestützte Reproduzierbarkeit, Replikationen und Registered Reports. Nutzen Sie sie, um Anfragen nach Daten und Code vorwegzunehmen.

## Wichtige Literatur

- Simera, I., Moher, D., Hirst, A., Hoey, J., Schulz, K. F., & Altman, D. G. (2010). Transparent and accurate reporting increases reliability, utility, and impact of your research: Reporting guidelines and the EQUATOR Network. BMC Medicine, 8, 24. https://doi.org/10.1186/1741-7015-8-24
- Nosek, B. A., Alter, G., Banks, G. C., Borsboom, D., Bowman, S. D., Breckler, S. J., Buck, S., Chambers, C. D., Chin, G., Christensen, G., Contestabile, M., Dafoe, A., Eich, E., Freese, J., Glennerster, R., Goroff, D., Green, D. P., Hesse, B., Humphreys, M., … Yarkoni, T. (2015). Promoting an open research culture. Science, 348(6242), 1422–1425. https://doi.org/10.1126/science.aab2374
- Grant, S., Corker, K. S., Mellor, D., Stewart, S. L. K., Mayo-Wilson, E., Cashin, A. G., Lagisz, M., Moher, D., Umpierre, D., Barbour, V., Buck, S., Collins, G. S., Hazlett, H. F., Hrynaszkiewicz, I., Lee, C. J., Parker, T. H., Rethlefsen, M. L., Toomey, E., Nosek, B. A., & the TOP Advisory Board. (2026). TOP 2025: An update to the Transparency and Openness Promotion Guidelines. Research Integrity and Peer Review, 11, 40. https://doi.org/10.1186/s41073-026-00223-0

## Hilfreiche Werkzeuge

Paperpal
