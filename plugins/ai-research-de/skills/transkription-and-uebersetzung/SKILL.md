---
name: transkription-and-uebersetzung
description: "Transkribieren Sie Interviews und Fokusgruppen, trennen Sie Sprechende und übersetzen Sie bei Bedarf – nur mit freigegebenen Tools. Einsetzen bei: Transkription & Übersetzung."
---

# Transkription & Übersetzung

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/erhebung-0

## Ziel

Transkribieren Sie Interviews und Fokusgruppen, trennen Sie Sprechende und übersetzen Sie bei Bedarf – nur mit freigegebenen Tools.

Ein Transkriptentwurf mit Sprecherkennzeichnung und eine Übersetzung, die Sie korrigieren statt tippen – erzeugt nur mit freigegebenen Tools, Zeile für Zeile gegen das Audio geprüft und mit offengelegter KI-Nutzung in Ihrer Methodik.

## Wann einsetzen

Eine Stunde Interview von Hand zu transkribieren dauert mehrere Stunden, und die Übersetzung kommt hinzu; automatische Tools sparen Zeit, können aber unbemerkt Formulierungen verändern, Sprechende vermischen und Zögern auslassen.

## Vorgehen

1. Bitten Sie den Assistenten, einen erfundenen Interviewausschnitt von 200 Wörtern zwischen zwei Personen zu Ihrem Thema zu schreiben, ohne Sprecherkennzeichnung.
2. Fügen Sie den Startprompt mit diesem Ausschnitt ein und wählen Sie eine Zielsprache, die Sie lesen können.
3. Vergleichen Sie die gekennzeichnete Fassung Zeile für Zeile mit dem ursprünglichen Ausschnitt.
4. Notieren Sie, wo Formulierungen verändert, Sprechende vermischt oder Zögern geglättet wurden.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.
- Nennen Sie ihn „Transkript-Formatierer“. Anweisungen: Sprecherkennzeichnung ergänzen, [unklar] markieren, übersetzen und dabei Zögern beibehalten, Original und Übersetzung nebeneinander zeigen, nie Sprache zusammenfassen, kürzen oder korrigieren und daran erinnern, vorher Namen zu entfernen. Wissen: Ihr Glossar der Begriffe. Hinein gehört nur freigegebener, pseudonymisierter Text, und Sie prüfen jede Zeile gegen das Audio. Startprompt: „Kennzeichne und übersetze diesen Ausschnitt in [Sprache]“.

## Startprompt

```text
Unten steht ein kurzer, erfundener Interviewausschnitt zwischen einer interviewenden Person und einer teilnehmenden Person, ohne Sprecherkennzeichnung. 1) Füge bei jedem Sprecherwechsel Kennzeichnungen hinzu (I: und P:) und lass den Wortlaut genau so, wie er ist. 2) Markiere jede Stelle, an der unklar ist, wer spricht, mit [unklar]. 3) Übersetze den gekennzeichneten Text in [Sprache] und behalte Zögern und Wiederholungen bei. Zeige das Original und die Übersetzung nebeneinander in einer Tabelle mit zwei Spalten. Fasse nicht zusammen, kürze nicht und korrigiere nicht die Grammatik der Sprechenden. Ausschnitt: [erfundenen Text einfügen]
```

## Prüfung

Jeder Satz des Originals erscheint unverändert in der gekennzeichneten Fassung, und die Übersetzung behält die Bedeutung; echte Interviews dürfen nur durch das freigegebene Transkriptionstool Ihrer Hochschule laufen, nie in diesen Chat.

## Grenzen

- Je nach Tool transkribiert ein Chat keine Audiodateien; dies testet daher nur die Sprecherkennzeichnung und die Übersetzung eines erfundenen Textausschnitts.
- Risiko: Personenbezogene oder sensible Daten oder Entscheidungen, die direkt in Ihre Ergebnisse einfließen.

## Wichtige Konzepte

- **Wörtlich, geglättet wörtlich und Jefferson-Notation** – Wörtliche Transkription (Verbatim) behält jedes Wort, Füllwort und jeden Abbruch; geglättet wörtlich (Intelligent Verbatim) entfernt sie zugunsten der Lesbarkeit; die Jefferson-Notation ergänzt Pausen, Überlappungen und Intonation für die Konversationsanalyse. Wählen Sie nach der Analysemethode: Eine thematische Analyse braucht selten Jefferson, eine Diskursanalyse oft.
- **Transkription als Interpretation** – Transkripte sind konstruiert, keine neutralen Kopien: Entscheidungen zu Zeichensetzung, Dialekt und nonverbalen Hinweisen prägen die Bedeutung. Dokumentieren Sie Ihre Konventionen und wer das Transkript gegen das Audio geprüft hat, besonders wenn ein automatisches Tool den Entwurf erzeugt hat.
- **Wortfehlerrate (Word Error Rate, WER)** – Standardmaß für die Genauigkeit automatischer Spracherkennung: (Ersetzungen + Auslassungen + Einfügungen) ÷ Wörter in einem Referenztranskript. Die Fehlerraten steigen bei Akzenten, überlappender Sprache und schlechtem Audio, prüfen Sie daher Ihre eigenen Aufnahmen stichprobenartig, statt veröffentlichten Zahlen zu vertrauen.
- **Rückübersetzung (Back-Translation, Brislin)** – Eine zweite übersetzende Person überträgt die Übersetzung zurück in die Ausgangssprache, ohne das Original zu sehen; Abweichungen zeigen Bedeutungsverschiebungen. Nutzen Sie sie oder die Durchsicht durch eine zweisprachige Kollegin bzw. einen zweisprachigen Kollegen für Zitate, die Sie analysieren oder veröffentlichen.

## Wichtige Literatur

- Jefferson, G. (2004). Glossary of transcript symbols with an introduction. In G. H. Lerner (Ed.), Conversation analysis: Studies from the first generation (pp. 13–31). John Benjamins.
- Oliver, D. G., Serovich, J. M., & Mason, T. L. (2005). Constraints and opportunities with interview transcription: Towards reflection in qualitative research. Social Forces, 84(2), 1273–1289. https://doi.org/10.1353/sof.2006.0023
- Brislin, R. W. (1970). Back-translation for cross-cultural research. Journal of Cross-Cultural Psychology, 1(3), 185–216. https://doi.org/10.1177/135910457000100301

## Hilfreiche Werkzeuge

Otter.ai · Whisper (OpenAI) · TurboScribe · MAXQDA
