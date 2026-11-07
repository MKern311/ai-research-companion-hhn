---
name: projektassistent-und-forschungsagenten
description: "Richten Sie einen Assistenten ein, der Ihren Standardregeln folgt (Zitierstil, Terminologie, keine erfundenen Quellen), oder lassen Sie Agenten mehrstufige Aufgaben mit festgelegten menschlichen Kontrollpunkten ausführen. Einsetzen bei: Projektassistent & Forschungsagenten."
---

# Projektassistent & Forschungsagenten

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/querschnitt-7

## Ziel

Richten Sie einen Assistenten ein, der Ihren Standardregeln folgt (Zitierstil, Terminologie, keine erfundenen Quellen), oder lassen Sie Agenten mehrstufige Aufgaben mit festgelegten menschlichen Kontrollpunkten ausführen.

Ein wiederverwendbarer Assistent, der Ihren Zitierstil und Ihre Begriffe anwendet, und ein schrittweiser Arbeitsablauf, der erst weitergeht, nachdem Sie jeden Schritt geprüft haben – gewonnene Zeit, bei der Sie verantwortlich bleiben.

## Wann einsetzen

Sie wiederholen in jedem Chat dieselben Regeln, und mehrstufige Aufgaben wie eine Scoping-Suche geraten vom Kurs ab oder mischen ungeprüfte, mitunter erfundene Quellen in das Ergebnis.

## Ablauf mit der Nutzerin oder dem Nutzer

Führen Sie durch diese Schritte. Wo ein Schritt „den Assistenten bitten“ nennt, sind Sie gemeint.

1. Starten Sie einen neuen Chat und fügen Sie den Prompt mit Ihren Regeln als erste Nachricht ein.
2. Hängen Sie Ihre PDFs an oder nennen Sie Ihre Websites, falls die Websuche aktiviert ist.
3. Stellen Sie eine Routinefrage und prüfen Sie, ob der Assistent Ihren Regeln folgt.
4. Führen Sie nur Schritt 1 aus, prüfen Sie jede Quelle und geben Sie dann Extraktion und Bericht frei.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.

## Typische Anfrage

```text
Sie sind für dieses gesamte Gespräch der Forschungsassistent einer Promovierenden bzw. eines Promovierenden in [Fach]. Befolgen Sie immer diese Standardregeln: verwenden Sie [Zitierstil]; verwenden Sie diese Begriffe einheitlich: [Schlüsselbegriffe mit Definitionen]; erfinden Sie nie Quellen, Zitate oder Zahlen – sagen Sie, wenn Sie unsicher sind; [weitere Regeln]. Wenn ich eine Scoping-Aufgabe zu [Forschungsfrage] stelle, arbeiten Sie in drei Schritten und halten Sie nach jedem zu meiner Freigabe an. Schritt 1, Suche: listen Sie bis zu acht Quellen aus [angehängten PDFs / Websites] oder dem Web auf, mit Titel, Jahr, Link und einer Zeile zur Relevanz. Schritt 2, Extraktion: füllen Sie für die von mir freigegebenen Quellen eine Tabelle mit Ziel, Methode, Stichprobe und Hauptbefund. Schritt 3, Bericht: schreiben Sie eine Zusammenfassung von 300 Wörtern, die nur freigegebene Quellen zitiert. Bestätigen Sie zuerst diese Regeln in drei Zeilen und warten Sie auf meine Frage.
```

## Prüfung

Öffnen Sie vor jeder Freigabe jeden Link und jedes PDF und bestätigen Sie, dass die Quelle existiert und sagt, was die Tabelle behauptet; behandeln Sie den Abschlussbericht als ungeprüften Entwurf, der noch Ihre eigene Lektüre braucht.

## Grenzen

- In einem einfachen Chat gelten die Regeln nur für dieses Gespräch – ein neuer Chat beginnt bei null. Um sie zu behalten, nutzen Sie ein Regeldokument in einem Notebook oder die Anweisungen eines eigenen Assistenten (Stufen 2 und 3). Der Assistent führt kurze Schritte aus, die Sie einzeln freigeben; er kann keine Bibliotheksdatenbanken durchsuchen und die Pipeline nicht selbstständig ausführen.
- Risiko: Personenbezogene oder sensible Daten oder Entscheidungen, die direkt in Ihre Ergebnisse einfließen.

## Wichtige Konzepte

- **Menschliche Kontrollpunkte (Human-in-the-loop)** – Der Arbeitsablauf hält nach definierten Schritten an – Suche, Extraktion, Synthese – und geht erst weiter, nachdem eine Person das Ergebnis geprüft hat. Die Verantwortung bleibt bei Ihnen, und frühe Fehler pflanzen sich nicht in spätere Schritte fort.
- **Automatisierungsbias (Automation bias)** – Die Neigung, automatisierten Ergebnissen zu stark zu vertrauen und ihre Fehler zu übersehen, stärker unter Zeitdruck und wenn ein System meist richtig liegt (Parasuraman & Manzey, 2010). Kontrollpunkte helfen nur, wenn Sie jede Quelle tatsächlich öffnen und lesen.
- **Halluzination und Verankerung (Grounding)** – Sprachmodelle können flüssige, aber unbelegte oder erfundene Inhalte erzeugen (Ji et al., 2023). Antworten auf bereitgestellte Dokumente zu stützen (Retrieval-Augmented Generation) verringert dieses Risiko, beseitigt es aber nicht; jede Quellenangabe muss weiterhin geprüft werden.
- **Scoping-Review-Rahmen nach Arksey & O'Malley** – Fünf Phasen: die Forschungsfrage festlegen, relevante Studien identifizieren, Studien auswählen, die Daten erfassen sowie die Ergebnisse zusammenführen, zusammenfassen und berichten. Ein Agent kann bei einzelnen Phasen helfen, aber Auswahl- und Erfassungsentscheidungen bleiben Ihre.

## Wichtige Literatur

- Arksey, H., & O'Malley, L. (2005). Scoping studies: Towards a methodological framework. International Journal of Social Research Methodology, 8(1), 19–32. https://doi.org/10.1080/1364557032000119616
- Parasuraman, R., & Manzey, D. H. (2010). Complacency and bias in human use of automation: An attentional integration. Human Factors, 52(3), 381–410. https://doi.org/10.1177/0018720810376055
- Ji, Z., Lee, N., Frieske, R., Yu, T., Su, D., Xu, Y., Ishii, E., Bang, Y. J., Madotto, A., & Fung, P. (2023). Survey of hallucination in natural language generation. ACM Computing Surveys, 55(12), Article 248. https://doi.org/10.1145/3571730

## Hilfreiche Werkzeuge

OpenAlex · Elicit · STORM
