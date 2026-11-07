---
id: querschnitt-6
phase: querschnitt
order: 6
title: Neue Fähigkeiten lernen
risk: 1
mode: Assist
potential: 2
capabilities: generierung
routes: chat; files
tools: Jamovi; GitHub Copilot
data: D2; C6
practice_data: D2
practice_ref: C6
---

Lernen Sie eine Methode, ein Statistikpaket oder eine Programmiersprache Schritt für Schritt mit einem KI-Tutor – und testen Sie sich selbst.

## Problem

Kurse passen selten zu Ihrer Methode oder Ihrem Zeitplan, Dokumentationen setzen Wissen voraus, das Ihnen fehlt, und passives Lesen von Tutorials fühlt sich produktiv an, hinterlässt aber wenig Anwendbares.

## Ergebnis

Ein getaktetes Tutorial an Ihrem eigenen Beispiel, aufgebaut auf ausgearbeiteten Beispielen und Abrufübung, mit Übungen und Rückmeldung – schnelleres Lernen, sofern Sie Funktionen mit der offiziellen Dokumentation abgleichen.

## Vorgehen

1. Nennen Sie die Fähigkeit und lassen Sie den Assistenten Ihr Niveau testen
2. Studieren Sie ein ausgearbeitetes Beispiel und lösen Sie dann eine ähnliche Übung
3. Antworten Sie, bevor Sie die Lösung erfragen
4. Schließen Sie mit einem Quiz ab und wiederholen Sie es Tage später
5. Gleichen Sie Funktionen mit der offiziellen Dokumentation ab

## Konzepte

### Abrufübung (Retrieval practice, Testeffekt)

Aktives Abrufen von Wissen, etwa in einem Quiz, verbessert das langfristige Behalten stärker als erneutes Lesen (Roediger & Karpicke, 2006). Bitten Sie den Tutor, Sie zu testen, bevor er erneut erklärt.

### Effekt ausgearbeiteter Beispiele (Worked-example effect)

Aus der Cognitive-Load-Theorie (Sweller, 1988): Anfängerinnen und Anfänger lernen schneller, wenn sie vollständig ausgearbeitete Lösungen studieren, bevor sie ähnliche Aufgaben lösen; mit wachsender Expertise werden die ausgearbeiteten Schritte ausgeblendet, und Sie lösen Aufgaben selbstständig.

### Verteiltes Üben (Spaced practice)

Üben, das sich über mehrere Tage verteilt, statt in einer Sitzung gebündelt zu werden, verbessert das Behalten. Dunlosky et al. (2013) bewerten Übungstests und verteiltes Üben als die nützlichsten von zehn gängigen Lerntechniken.

### Gerüstbildung und Ausblenden (Scaffolding and fading)

Unterstützung wird am Anfang gegeben und schrittweise zurückgenommen. Bitten Sie den Tutor um Hinweise vor vollständigen Lösungen, damit Sie selbst denken und er nur Lücken füllt.

## Literatur

- Roediger, H. L., III, & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. Psychological Science, 17(3), 249–255. doi:10.1111/j.1467-9280.2006.01693.x
- Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. Cognitive Science, 12(2), 257–285. doi:10.1207/s15516709cog1202_4
- Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students' learning with effective learning techniques: Promising directions from cognitive and educational psychology. Psychological Science in the Public Interest, 14(1), 4–58. doi:10.1177/1529100612453266

## Übung

### Aufgabe

Lernen Sie Changepoint-Erkennung Schritt für Schritt an der monatlichen Central-England-Reihe. Sie lernen, ob der Assistent die Methode korrekt vermittelt und ob die gefundenen Changepoints mit denen im Preprint von Shi et al. übereinstimmen, das Sie zur Prüfung geöffnet halten.

### Prompt

```text
Ich bin Promovierende bzw. Promovierender und möchte Changepoint-Erkennung in Python lernen. Seien Sie ein geduldiger Tutor. Stellen Sie mir zuerst drei kurze Fragen, um mein Niveau einzuschätzen. Vermitteln Sie dann Schritt für Schritt in kurzen Abschnitten: erklären Sie eine Idee, zeigen Sie ein kleines ausgearbeitetes Beispiel und geben Sie mir eine Übung; warten Sie auf meine Antwort und geben Sie Rückmeldung, bevor Sie die Lösung zeigen. Verwenden Sie die angehängte monatliche HadCET-Textdatei: Helfen Sie mir, sie einzulesen, nur vollständige Jahre zu behalten und die Spalte „Annual“ zu verwenden (-99.9 kennzeichnet fehlende Werte). Behandeln Sie Mean-Shift- gegenüber Trend-Shift-Modellen und Strafterme wie BIC und MDL. Passen Sie im letzten Schritt ein Trend-Shift-Modell mit BIC-Strafterm an die Jahresreihe an und listen Sie die Changepoint-Jahre auf. Verwenden Sie nur Python-Pakete, die in Ihrer Umgebung bereits verfügbar sind; wenn kein Changepoint-Paket installiert ist, setzen Sie die Methode mit numpy und statsmodels um und sagen Sie das. Verweisen Sie mich auf die Dokumentation jedes Pakets, das Sie nutzen, und sagen Sie, wenn Sie unsicher sind.
```

### Prüfung

Vergleichen Sie mit Shi et al. (Table 2, Figure 2): BIC- und MDL-Trend-Shift-Modelle markieren Changepoints in 1700, 1739 und 1988, und das Mean-Shift-Modell mit fester Steigung markiert 1988. Die Arbeit nutzte eine frühere CET-Version, kleine Abweichungen sind also möglich; große brauchen eine Erklärung.

## Mit eigenem Material

### Mitbringen

Den Namen einer Methode, eines Statistikpakets oder einer Programmiersprache, die Sie lernen möchten, und optional einen kleinen öffentlichen oder fiktiven Datensatz.

### Schritte

1. Nennen Sie die Fähigkeit und bitten Sie den Assistenten, Ihr Niveau mit drei Fragen zu testen.
2. Arbeiten Sie den ersten Schritt durch und versuchen Sie die kleine Übung selbst.
3. Bitten Sie um Rückmeldung zu Ihrer Antwort, bevor Sie die Lösung sehen.
4. Schließen Sie mit einem Quiz aus fünf Fragen ab und notieren Sie, was Sie nachschlagen müssen.

### Prompt

```text
Ich bin Promovierende bzw. Promovierender in [Fach] und möchte [Methode / Paket / Sprache] für [Zweck in meinem Projekt] lernen. Seien Sie ein geduldiger Tutor. Stellen Sie mir zuerst drei kurze Fragen, um mein Niveau einzuschätzen. Vermitteln Sie dann Schritt für Schritt in kurzen Abschnitten: erklären Sie eine Idee, zeigen Sie ein kleines Beispiel und geben Sie mir eine Übung. Warten Sie auf meine Antwort und geben Sie Rückmeldung, bevor Sie die Lösung zeigen. Verwenden Sie [Datensatz oder ein einfaches erfundenes Beispiel]. Verweisen Sie mich bei jedem Schritt auf die offizielle Dokumentation, und sagen Sie, wenn Sie sich bei einer Funktion oder Option nicht sicher sind.
```

### Prüfung

Führen Sie ein Beispiel in Ihrer eigenen Software aus oder vergleichen Sie es mit der offiziellen Dokumentation und bestätigen Sie, dass es funktioniert bzw. übereinstimmt.

### Grenze

Je nach Werkzeug führt der Assistent höchstens Python aus. Für R, Stata, SPSS oder andere Software schreibt und erklärt er den Code, und Sie führen ihn in Ihrer eigenen Software aus.

## Technik

Nutzen Sie den Tutor in Ihrem KI-Assistenten; laden Sie einen kleinen Datensatz hoch, damit die Übungen reales Material nutzen, und der Assistent kann Python-Beispiele selbst ausführen, wenn Ihr Werkzeug Codeausführung unterstützt. Halten Sie eine Methodenarbeit zur Prüfung dessen offen, was der Tutor vermittelt. Führen Sie Übungen in R, Stata oder SPSS in Ihrer eigenen Software aus.

## Stufen

### Chat

Führen Sie den Startprompt mit angehängter monatlicher D2-Datei aus und arbeiten Sie die Schritte im selben Chat durch. Bitten Sie am Ende um ein Quiz aus fünf Fragen und beantworten Sie es, bevor Sie die Lösungen sehen; wiederholen Sie es einige Tage später.

### Projekt / Notebook

Fügen Sie C6, die offizielle Dokumentation des genutzten Pakets (als PDF gespeichert) und Ihre eigenen Notizen als Referenzen hinzu. Stellen Sie Fragen über alle davon, wenn Sie nicht weiterkommen, und behalten Sie ausgearbeitete Beispiele und Quizantworten als gespeicherte Notizen – Erklärungen bleiben an die Arbeit und die Dokumentation gebunden. Führen Sie Code je nach Werkzeug in einem Chat aus, da ein Notebook womöglich kein Python ausführt.

### Eigener Assistent

Anweisungen: Tutorrolle, zuerst das Niveau testen, jeweils eine Idee, ein ausgearbeitetes Beispiel und eine Übung, auf meine Antwort warten, Rückmeldung vor der Lösung, am Ende ein Quiz, auf die offizielle Dokumentation verweisen, Unsicherheit benennen. Wissen: die Paketdokumentation. Schalten Sie Codeausführung bzw. Datenanalyse ein, um Python-Beispiele auszuführen, wenn Ihr Werkzeug das anbietet; für R, Stata oder SPSS führen Sie den Code in Ihrer eigenen Software aus. Startprompts: „Bringen Sie mir Changepoint-Erkennung bei“ und „Fragen Sie mich zum Thema der letzten Woche ab“. Für jede neue Methode wiederverwendbar.
