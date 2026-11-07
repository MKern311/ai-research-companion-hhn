---
id: publikation-7
phase: publikation
order: 7
title: Vorbereitung auf die Probe-Disputation (Mock Viva)
risk: 2
mode: Co-create
potential: 3
capabilities: generierung; analyse
routes: chat; files
tools: Gemini Notebook (formerly NotebookLM)
data: B2
practice_data: B2
---

Aus Ihrer Abschlussarbeit wahrscheinliche Prüfungsfragen erzeugen und Ihre Antworten üben – eine Ergänzung zu Ihren Betreuungspersonen, kein Ersatz.

## Problem

Sie haben selten die Gelegenheit, vor der Verteidigung (Viva) schwierige Fragen zu Ihrer eigenen Arbeit laut zu beantworten, und Probe-Disputationen hängen von der Zeit ausgelasteter Kolleginnen und Kollegen ab.

## Ergebnis

Eine Sammlung wahrscheinlicher Prüfungsfragen zu Originalität, Bedeutung und Sorgfalt, jeweils mit Ihren eigenen Aussagen verknüpft, sowie Übungsantworten mit Feedback – ein Training neben Ihren Betreuungspersonen, nicht an deren Stelle.

## Vorgehen

1. Ihr Abstract und die Zusammenfassung eines Kapitels einfügen
2. Fragen zu Beitrag, Methodik, Ergebnissen und weiterer Forschung anfordern
3. Jeweils eine Frage beantworten, am besten laut
4. Zu jeder Antwort Feedback und eine vertiefende Nachfrage anfordern
5. Die schwierigsten Fragen zu Ihrer Betreuungsperson mitnehmen

## Konzepte

### Britische Viva voce (UK Viva Voce)

Eine mündliche Prüfung, meist mit einer internen und einer externen Prüfungsperson, in der Sie die Abschlussarbeit anhand der Promotionskriterien Ihrer Hochschule verteidigen. Die Ergebnisse reichen typischerweise von bestanden über geringfügige oder umfangreiche Korrekturen bis zur Neueinreichung; die Regelungen unterscheiden sich je nach Hochschule.

### Deskriptoren des FHEQ-Levels 8 (FHEQ Level 8 Descriptors)

Die Deskriptoren der QAA für Promotionen (zweite Ausgabe der Rahmenwerke, 2024; die Level-Deskriptoren sind unverändert): neues Wissen, geschaffen durch originäre Forschung in einer Qualität, die einem Peer Review genügt, systematische Beherrschung eines umfangreichen Wissensbestands und die Fähigkeit, ein Forschungsprojekt zu konzipieren, zu entwerfen und durchzuführen.

### Originalität, Bedeutung, Sorgfalt

Die Kriterien, zu denen die meisten Prüfungsfragen zurückkehren: was neu ist, warum es für das Fach wichtig ist und ob Methoden und Schlussfolgerungen tragfähig sind. Üben Sie zu jedem eine kurze Antwort zu Ihrer eigenen Arbeit.

### Abrufübung (Retrieval Practice, Testeffekt)

Stoff unter Befragung abzurufen und zu erklären stärkt das langfristige Behalten mehr als erneutes Lesen (Roediger & Karpicke 2006). Laut zu antworten deckt außerdem Punkte auf, die Sie noch nicht klar erklären können.

## Literatur

- Quality Assurance Agency for Higher Education. (2024). The frameworks for higher education qualifications of UK degree-awarding bodies (2nd ed.). QAA.
- Roediger, H. L., III, & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. Psychological Science, 17(3), 249–255. doi:10.1111/j.1467-9280.2006.01693.x

## Übung

### Aufgabe

Proben Sie eine Viva, als wäre der Artikel von Christidis et al. (2020) das Kernkapitel Ihrer Abschlussarbeit. Sie erfahren, ob die Prüfungsfragen des Assistenten auf die konkreten Aussagen und die Methode des Artikels eingehen oder allgemein bleiben.

### Prompt

```text
Angehängt ist das PDF von Christidis et al. (2020) zu Temperaturen über 30 bis 40 °C im Vereinigten Königreich. Stellen Sie sich vor, es sei das Kernkapitel meiner Dissertation und ich stehe vor einer Viva an einer britischen Universität. Handeln Sie als erfahrene externe Prüfungsperson. Schreiben Sie 12 Fragen, gruppiert nach: Beitrag zum Wissen, Methodik, Ergebnisse und Einschränkungen sowie weitere Forschung. Machen Sie einige breit und einige vertiefend und verknüpfen Sie jede mit einer konkreten Aussage des Artikels, die Sie zitieren. Stellen Sie mir dann jeweils eine Frage, warten Sie auf meine Antwort und geben Sie kurzes Feedback zu Klarheit, Nutzung von Evidenz und dazu, was eine Prüfungsperson als Nächstes fragen könnte.
```

### Prüfung

Mindestens die Hälfte der Fragen zitiert echte Sätze – zum Beispiel die Wiederkehrzeit von 100–300 Jahren für Sommer mit 40 °C oder den Schritt, der lokale Extreme mit Extremen im UK-Mittel in Beziehung setzt –, und das Feedback benennt etwas Konkretes, das Sie verbessern können.

## Mit eigenem Material

### Mitbringen

Das Abstract Ihrer Abschlussarbeit und eine einseitige Zusammenfassung eines Kapitels oder das Abstract eines veröffentlichten Artikels aus Ihrer Abschlussarbeit.

### Schritte

1. Fügen Sie Ihr Abstract und die Kapitelzusammenfassung ein und bitten Sie um wahrscheinliche Prüfungsfragen.
2. Wählen Sie drei Fragen und beantworten Sie jede im Chat.
3. Bitten Sie zu jeder Antwort um Feedback und eine vertiefende Nachfrage.
4. Notieren Sie, welche Fragen Sie am schwierigsten fanden, um sie mit Ihrer Betreuungsperson zu besprechen.

### Prompt

```text
Ich bereite mich auf meine Promotionsverteidigung (Viva) im Fach [Disziplin] an einer britischen Universität vor. Unten stehen mein Dissertationsabstract und eine Zusammenfassung von Kapitel [Nummer]: [Text einfügen]. Handeln Sie als erfahrene externe Prüfungsperson. Schreiben Sie 12 Fragen, die mir wahrscheinlich gestellt werden, gruppiert nach: Beitrag zum Wissen, Methodik, Ergebnisse und Einschränkungen sowie weitere Forschung. Machen Sie einige breit und einige vertiefend und verknüpfen Sie jede mit einer konkreten Aussage in meinem Text. Stellen Sie mir dann jeweils eine Frage, warten Sie auf meine Antwort und geben Sie kurzes Feedback zu Klarheit, Nutzung von Evidenz und dazu, was eine Prüfungsperson als Nächstes fragen könnte.
```

### Prüfung

Mindestens die Hälfte der Fragen bezieht sich auf konkrete Aussagen in Ihrem Abstract oder Ihrer Zusammenfassung, und das Feedback zu Ihren Antworten weist auf etwas Konkretes hin, das Sie besser sagen könnten.

## Technik

Fügen Sie Abstract und Zusammenfassung in Ihren KI-Assistenten ein und führen Sie die Fragen als Dialog durch; bitten Sie nach jeder Antwort um Feedback, bevor die nächste Frage kommt.

## Stufen

### Chat

Führen Sie den Startprompt mit dem angehängten Christidis-PDF von 2020 aus und beantworten Sie drei Fragen. Fragen Sie danach im selben Chat, bei welcher Ihrer Antworten eine Prüfungsperson am stärksten nachhaken würde und warum.

### Projekt / Notebook

Fügen Sie das Abstract Ihrer Abschlussarbeit, Kapitelzusammenfassungen, Schlüsselartikel und Notizen aus Betreuungsgesprächen hinzu; für die Übung den Artikel von Christidis (B2). Fordern Sie Prüfungsfragen jeweils zu einem Kapitel an und speichern Sie die besten Fragen und Ihre Antworten als Notiz im Projekt bzw. Notebook (oder als Datei, die Sie hinzufügen). Über Wochen bauen Sie eine Viva-Akte auf, zu der Sie zurückkehren können.

### Eigener Assistent

Erstellen Sie einen konfigurierten Assistenten, zum Beispiel „Viva-Prüfer“ (z. B. einen Copilot-Agenten, einen Custom GPT, ein Gemini Gem oder ein Claude-Projekt). Beschreiben Sie in den dauerhaften Anweisungen die Prüfungsperson: britische Viva, Fragen gruppiert nach Beitrag, Methodik, Ergebnissen und Einschränkungen sowie weiterer Forschung, jeweils an eine zitierte Aussage gebunden; jeweils eine Frage, auf die Antwort warten, dann kurzes Feedback und eine Nachfrage. Fügen Sie Ihr Abstract und Ihre Kapitelzusammenfassungen als Wissensdateien hinzu (unterstützt Ihr Werkzeug keine Wissensdateien, hängen Sie sie im Chat an). Startprompt: „Prüfen Sie mich zu Kapitel 3.“ Wiederverwendbar für regelmäßiges Üben – eine Ergänzung zu Probe-Disputationen mit Ihren Betreuungspersonen.
