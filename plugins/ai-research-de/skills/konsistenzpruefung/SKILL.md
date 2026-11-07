---
name: konsistenzpruefung
description: "Zahlen in Text, Tabellen und Abstract abgleichen, Terminologie vereinheitlichen und Zitate im Text mit dem Literaturverzeichnis abstimmen. Einsetzen bei: Konsistenzprüfung."
---

# Konsistenzprüfung

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/publikation-2

## Ziel

Zahlen in Text, Tabellen und Abstract abgleichen, Terminologie vereinheitlichen und Zitate im Text mit dem Literaturverzeichnis abstimmen.

Eine Tabelle der Abweichungen mit Fundstellen, die Sie prüfen, bevor Sie etwas ändern, sowie ein Test mit eingebautem Fehler, der zeigt, wie zuverlässig der Assistent Inkonsistenzen in Ihrem Dokument erkennt.

## Wann einsetzen

Nach vielen Überarbeitungen passen Zahlen im Abstract nicht mehr zu den Tabellen, Begriffe und Abkürzungen driften, und Zitate fehlen im Literaturverzeichnis – Gutachtende bemerken das.

## Vorgehen

1. Hängen Sie das Dokument an und fügen Sie den Startprompt ein.
2. Prüfen Sie jeden markierten Punkt selbst im Dokument, bevor Sie etwas ändern.
3. Ändern Sie in Ihrer Kopie absichtlich eine Zahl und hängen Sie sie erneut an.
4. Sehen Sie, ob ein erneuter Lauf des Prompts die eingebaute Abweichung erkennt.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.
- Erstellen Sie einen konfigurierten Assistenten (z. B. einen Copilot-Agenten, einen Custom GPT, ein Gemini Gem oder ein Claude-Projekt). Definieren Sie in seinen dauerhaften Anweisungen die Prüfung: Zahlen über Abstract, Text und Tabellen hinweg; Begriffe und Abkürzungen; Zitate im Text gegen das Literaturverzeichnis; eine Tabelle mit Art des Problems, Fundstelle, was jede Stelle sagt, und Korrekturvorschlag; nur berichten, was im Dokument steht, und sagen, welche Teile nicht gelesen wurden. Startprompt: „Führen Sie die Konsistenzprüfung für diesen Entwurf durch.“ Wiederverwendbar vor jeder Einreichung – bauen Sie eine Abweichung ein, um sie zu testen.

## Startprompt

```text
Ich prüfe meinen eigenen [Artikel oder mein Kapitel] vor der Einreichung. Prüfen Sie im angehängten Dokument die Konsistenz: 1) Zahlen (Stichprobenumfänge, Prozentwerte, Statistiken), die sich zwischen Abstract, Haupttext und Tabellen unterscheiden; 2) Schlüsselbegriffe oder Abkürzungen, die uneinheitlich verwendet werden; 3) Zitate im Text, die im Literaturverzeichnis fehlen, und Literaturangaben, die nie zitiert werden. (Ob die Literaturangaben selbst existieren und den Text stützen, ist eine separate Prüfung.) Geben Sie eine Tabelle zurück: Art des Problems, Fundstelle (Abschnitt oder Seite), was jede Stelle sagt, Korrekturvorschlag. Berichten Sie nur, was Sie im Dokument finden; wenn Teile zu lang waren, um sie vollständig zu lesen, sagen Sie, welche.
```

## Prüfung

Mindestens drei markierte Probleme sind echt, wenn Sie sie nachschlagen, und die eingebaute Abweichung wird erkannt; falls nicht, prüfen Sie lange Dokumente abschnittsweise.

## Grenzen

- Risiko: Eigene unveröffentlichte Entwürfe, Gutachten oder Inhalte Dritter.

## Wichtige Konzepte

- **Prüfung der internen Konsistenz (Internal Consistency Audit)** – Ein systematischer Abgleich jeder berichteten Zahl, jedes Begriffs und jeder Abkürzung in Abstract, Haupttext, Tabellen und Abbildungen sowie der Zitate im Text mit dem Literaturverzeichnis in beide Richtungen. Führen Sie ihn nach der letzten inhaltlichen Überarbeitung durch.
- **GRIM-Test** – Granularity-Related Inconsistency of Means: Prüft, ob ein berichteter Mittelwert bei gegebenem Stichprobenumfang rechnerisch möglich ist, wenn die Daten ganzzahlig sind, etwa bei Likert-Items. Ein Beispiel für eine regelbasierte Prüfung, die zuverlässiger ist als Lesen.
- **statcheck** – Ein Werkzeug, das p-Werte aus berichteten Teststatistiken und Freiheitsgraden im APA-Format neu berechnet und Inkonsistenzen markiert. Nuijten et al. zeigten damit, dass solche Berichtsfehler in veröffentlichten psychologischen Artikeln häufig sind.
- **Fehlerinjektion (Error Seeding)** – Das Einbauen bekannter Fehler, um abzuschätzen, wie viele ein Prüfverfahren findet (seine Erkennungsrate bzw. Sensitivität) – eine Technik aus dem Software-Testing. Eine eingebaute Abweichung sagt Ihnen, ob Sie dem „keine Probleme gefunden“ des Assistenten trauen können.

## Wichtige Literatur

- Brown, N. J. L., & Heathers, J. A. J. (2017). The GRIM test: A simple technique detects numerous anomalies in the reporting of results in psychology. Social Psychological and Personality Science, 8(4), 363–369. https://doi.org/10.1177/1948550616673876
- Nuijten, M. B., Hartgerink, C. H. J., van Assen, M. A. L. M., Epskamp, S., & Wicherts, J. M. (2016). The prevalence of statistical reporting errors in psychology (1985–2013). Behavior Research Methods, 48(4), 1205–1226. https://doi.org/10.3758/s13428-015-0664-2

## Hilfreiche Werkzeuge

Paperpal · Zotero
