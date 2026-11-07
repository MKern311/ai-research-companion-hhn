---
id: erhebung-0
phase: erhebung
order: 0
title: Transkription & Übersetzung
risk: 3
mode: Delegate
potential: 3
capabilities: analyse
routes: chat; external; connected
connect: Otter.ai; Whisper (OpenAI)
tools: TurboScribe; MAXQDA
---

Transkribieren Sie Interviews und Fokusgruppen, trennen Sie Sprechende und übersetzen Sie bei Bedarf – nur mit freigegebenen Tools.

## Problem

Eine Stunde Interview von Hand zu transkribieren dauert mehrere Stunden, und die Übersetzung kommt hinzu; automatische Tools sparen Zeit, können aber unbemerkt Formulierungen verändern, Sprechende vermischen und Zögern auslassen.

## Ergebnis

Ein Transkriptentwurf mit Sprecherkennzeichnung und eine Übersetzung, die Sie korrigieren statt tippen – erzeugt nur mit freigegebenen Tools, Zeile für Zeile gegen das Audio geprüft und mit offengelegter KI-Nutzung in Ihrer Methodik.

## Vorgehen

1. Wählen Sie eine Transkriptionskonvention, bevor Sie etwas erzeugen
2. Testen Sie an einem erfundenen Ausschnitt statt an echten Interviews
3. Bitten Sie um Sprecherkennzeichnung, Unklarheitsmarkierungen und eine Übersetzung
4. Vergleichen Sie Zeile für Zeile; zählen Sie veränderte Wörter und verschmolzene Redebeiträge
5. Nutzen Sie für echtes Audio freigegebene Tools und legen Sie die KI-Nutzung offen

## Konzepte

### Wörtlich, geglättet wörtlich und Jefferson-Notation

Wörtliche Transkription (Verbatim) behält jedes Wort, Füllwort und jeden Abbruch; geglättet wörtlich (Intelligent Verbatim) entfernt sie zugunsten der Lesbarkeit; die Jefferson-Notation ergänzt Pausen, Überlappungen und Intonation für die Konversationsanalyse. Wählen Sie nach der Analysemethode: Eine thematische Analyse braucht selten Jefferson, eine Diskursanalyse oft.

### Transkription als Interpretation

Transkripte sind konstruiert, keine neutralen Kopien: Entscheidungen zu Zeichensetzung, Dialekt und nonverbalen Hinweisen prägen die Bedeutung. Dokumentieren Sie Ihre Konventionen und wer das Transkript gegen das Audio geprüft hat, besonders wenn ein automatisches Tool den Entwurf erzeugt hat.

### Wortfehlerrate (Word Error Rate, WER)

Standardmaß für die Genauigkeit automatischer Spracherkennung: (Ersetzungen + Auslassungen + Einfügungen) ÷ Wörter in einem Referenztranskript. Die Fehlerraten steigen bei Akzenten, überlappender Sprache und schlechtem Audio, prüfen Sie daher Ihre eigenen Aufnahmen stichprobenartig, statt veröffentlichten Zahlen zu vertrauen.

### Rückübersetzung (Back-Translation, Brislin)

Eine zweite übersetzende Person überträgt die Übersetzung zurück in die Ausgangssprache, ohne das Original zu sehen; Abweichungen zeigen Bedeutungsverschiebungen. Nutzen Sie sie oder die Durchsicht durch eine zweisprachige Kollegin bzw. einen zweisprachigen Kollegen für Zitate, die Sie analysieren oder veröffentlichen.

## Literatur

- Jefferson, G. (2004). Glossary of transcript symbols with an introduction. In G. H. Lerner (Ed.), Conversation analysis: Studies from the first generation (pp. 13–31). John Benjamins.
- Oliver, D. G., Serovich, J. M., & Mason, T. L. (2005). Constraints and opportunities with interview transcription: Towards reflection in qualitative research. Social Forces, 84(2), 1273–1289. doi:10.1353/sof.2006.0023
- Brislin, R. W. (1970). Back-translation for cross-cultural research. Journal of Cross-Cultural Psychology, 1(3), 185–216. doi:10.1177/135910457000100301

## Mit eigenem Material

### Mitbringen

Nichts Persönliches: einen erfundenen Interviewausschnitt von etwa 200 Wörtern, selbst geschrieben oder im ersten Schritt unten vom Assistenten erzeugt.

### Schritte

1. Bitten Sie den Assistenten, einen erfundenen Interviewausschnitt von 200 Wörtern zwischen zwei Personen zu Ihrem Thema zu schreiben, ohne Sprecherkennzeichnung.
2. Fügen Sie den Startprompt mit diesem Ausschnitt ein und wählen Sie eine Zielsprache, die Sie lesen können.
3. Vergleichen Sie die gekennzeichnete Fassung Zeile für Zeile mit dem ursprünglichen Ausschnitt.
4. Notieren Sie, wo Formulierungen verändert, Sprechende vermischt oder Zögern geglättet wurden.

### Prompt

```text
Unten steht ein kurzer, erfundener Interviewausschnitt zwischen einer interviewenden Person und einer teilnehmenden Person, ohne Sprecherkennzeichnung. 1) Füge bei jedem Sprecherwechsel Kennzeichnungen hinzu (I: und P:) und lass den Wortlaut genau so, wie er ist. 2) Markiere jede Stelle, an der unklar ist, wer spricht, mit [unklar]. 3) Übersetze den gekennzeichneten Text in [Sprache] und behalte Zögern und Wiederholungen bei. Zeige das Original und die Übersetzung nebeneinander in einer Tabelle mit zwei Spalten. Fasse nicht zusammen, kürze nicht und korrigiere nicht die Grammatik der Sprechenden. Ausschnitt: [erfundenen Text einfügen]
```

### Prüfung

Jeder Satz des Originals erscheint unverändert in der gekennzeichneten Fassung, und die Übersetzung behält die Bedeutung; echte Interviews dürfen nur durch das freigegebene Transkriptionstool Ihrer Hochschule laufen, nie in diesen Chat.

### Grenze

Je nach Tool transkribiert ein Chat keine Audiodateien; dies testet daher nur die Sprecherkennzeichnung und die Übersetzung eines erfundenen Textausschnitts.

## Technik

In der Übung fügen Sie erfundenen Text in Ihren KI-Assistenten ein. Für echtes Audio führen Sie Whisper lokal aus, sodass die Aufnahmen auf Ihrem Rechner bleiben, oder nutzen einen Dienst, den Ihre Einrichtung für personenbezogene Daten freigibt; Otter.ai kann angebunden werden, wenn Ihre Hochschule es erlaubt.

## Stufen

### Chat

Führen Sie den Startprompt mit einem erfundenen Ausschnitt aus. Bitten Sie im selben Chat um eine Liste jeder Stelle, an der der gekennzeichnete Text oder die Übersetzung vom ursprünglichen Wortlaut abweicht, und prüfen Sie jede selbst.

### Projekt / Notebook

Hinein gehören nur freigegebene, pseudonymisierte Transkriptentwürfe aus Ihrem freigegebenen Transkriptionstool – nie Audio oder personenbezogene Rohdaten – zusammen mit Ihrem Interviewleitfaden und einem Glossar der Begriffe. Fragen Sie, wo derselbe Begriff in verschiedenen Interviews unterschiedlich übersetzt wird. Sie kommen darauf zurück, wenn jedes Transkript geprüft ist, und Sie prüfen jedes Ergebnis gegen das Audio.

### Eigener Assistent

Nennen Sie ihn „Transkript-Formatierer“. Anweisungen: Sprecherkennzeichnung ergänzen, [unklar] markieren, übersetzen und dabei Zögern beibehalten, Original und Übersetzung nebeneinander zeigen, nie Sprache zusammenfassen, kürzen oder korrigieren und daran erinnern, vorher Namen zu entfernen. Wissen: Ihr Glossar der Begriffe. Hinein gehört nur freigegebener, pseudonymisierter Text, und Sie prüfen jede Zeile gegen das Audio. Startprompt: „Kennzeichne und übersetze diesen Ausschnitt in [Sprache]“.

### Automatisierung / eigener Code

Binden Sie den MCP-Server von Otter.ai an oder einen Low-Code-Ablauf (z. B. Power Automate, n8n) auf einem freigegebenen Cloud-Ordner, sodass der Assistent Transkripte aus Ihrem freigegebenen Tool abruft, statt dass Sie sie einfügen – nur wenn Ihre Ethikfreigabe und Ihre Datenschutzbeauftragten es erlauben. Eigener Code auf GitHub ist hier nicht der Weg: Transkripte müssen in dem Speicher bleiben, den Ihre Ethikfreigabe nennt. Prüfen Sie Datenschutz und Freigabe vorher mit Ihrer Hochschule.
