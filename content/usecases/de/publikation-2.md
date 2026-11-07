---
id: publikation-2
phase: publikation
order: 2
title: Konsistenzprüfung
risk: 2
mode: Delegate
potential: 3
capabilities: analyse
routes: files; external
tools: Paperpal; Zotero
repos: kd-citation
data: A3
practice_data: A3
---

Zahlen in Text, Tabellen und Abstract abgleichen, Terminologie vereinheitlichen und Zitate im Text mit dem Literaturverzeichnis abstimmen.

## Problem

Nach vielen Überarbeitungen passen Zahlen im Abstract nicht mehr zu den Tabellen, Begriffe und Abkürzungen driften, und Zitate fehlen im Literaturverzeichnis – Gutachtende bemerken das.

## Ergebnis

Eine Tabelle der Abweichungen mit Fundstellen, die Sie prüfen, bevor Sie etwas ändern, sowie ein Test mit eingebautem Fehler, der zeigt, wie zuverlässig der Assistent Inkonsistenzen in Ihrem Dokument erkennt.

## Vorgehen

1. Den vollständigen Entwurf einschließlich Tabellen und Literaturverzeichnis hochladen
2. Einen Abgleich von Zahlen, Begriffen und Zitaten anfordern
3. Jeden markierten Punkt im Dokument selbst verifizieren
4. Eine falsche Zahl einbauen und erneut ausführen, um die Erkennung zu testen
5. Regelbasierte Prüfungen und Ihre Literaturverwaltung einsetzen, wo sie passen

## Konzepte

### Prüfung der internen Konsistenz (Internal Consistency Audit)

Ein systematischer Abgleich jeder berichteten Zahl, jedes Begriffs und jeder Abkürzung in Abstract, Haupttext, Tabellen und Abbildungen sowie der Zitate im Text mit dem Literaturverzeichnis in beide Richtungen. Führen Sie ihn nach der letzten inhaltlichen Überarbeitung durch.

### GRIM-Test

Granularity-Related Inconsistency of Means: Prüft, ob ein berichteter Mittelwert bei gegebenem Stichprobenumfang rechnerisch möglich ist, wenn die Daten ganzzahlig sind, etwa bei Likert-Items. Ein Beispiel für eine regelbasierte Prüfung, die zuverlässiger ist als Lesen.

### statcheck

Ein Werkzeug, das p-Werte aus berichteten Teststatistiken und Freiheitsgraden im APA-Format neu berechnet und Inkonsistenzen markiert. Nuijten et al. zeigten damit, dass solche Berichtsfehler in veröffentlichten psychologischen Artikeln häufig sind.

### Fehlerinjektion (Error Seeding)

Das Einbauen bekannter Fehler, um abzuschätzen, wie viele ein Prüfverfahren findet (seine Erkennungsrate bzw. Sensitivität) – eine Technik aus dem Software-Testing. Eine eingebaute Abweichung sagt Ihnen, ob Sie dem „keine Probleme gefunden“ des Assistenten trauen können.

## Literatur

- Brown, N. J. L., & Heathers, J. A. J. (2017). The GRIM test: A simple technique detects numerous anomalies in the reporting of results in psychology. Social Psychological and Personality Science, 8(4), 363–369. doi:10.1177/1948550616673876
- Nuijten, M. B., Hartgerink, C. H. J., van Assen, M. A. L. M., Epskamp, S., & Wicherts, J. M. (2016). The prevalence of statistical reporting errors in psychology (1985–2013). Behavior Research Methods, 48(4), 1205–1226. doi:10.3758/s13428-015-0664-2

## Übung

### Aufgabe

Gleichen Sie die zentralen Zahlen im Abstract des Artikels von Forster et al. (2025) mit seinen Tabellen ab, einschließlich eines eingebauten falschen Werts. Sie erfahren, ob der Assistent Zahlen in einem 40-seitigen PDF zuverlässig findet und eine Abweichung erkennt, von der Sie wissen, dass sie existiert.

### Prompt

```text
Angehängt ist das PDF von Forster et al. (2025), Indicators of Global Climate Change 2024. Ich prüfe einen Entwurf vor der Einreichung. 1) Listen Sie jede Zahl im Abstract auf und finden Sie, wo sie in den Tabellen (besonders Tabelle 1, 5, 6 und 7) oder im Haupttext vorkommt. Geben Sie eine Tabelle zurück: Zahl, Formulierung im Abstract, Tabelle oder Abschnitt, Wert dort, Übereinstimmung oder Abweichung. 2) Prüfen Sie diesen Satz aus meinem Entwurf anhand derselben Tabellen: 'Observed warming for 2015–2024 was 1.24 [1.11 to 1.35] °C, of which 1.22 [1.0 to 1.5] °C was human-induced, and human-induced warming reached 0.29 °C per decade.' 3) Kennzeichnen Sie Schlüsselbegriffe, die uneinheitlich verwendet werden. Berichten Sie nur, was im Dokument steht; wenn Sie nicht jede Tabelle lesen konnten, sagen Sie, welche.
```

### Prüfung

Die Werte im Abstract sollten mit Tabelle 5 (1.24 [1.11 to 1.35] °C), Tabelle 6 (1.22 und 1.36 °C), Tabelle 7 (0.27 °C per decade) und Tabelle 1 (53.6 ± 5.2 Gt CO₂e) übereinstimmen. Die eingebaute 0.29 muss markiert werden.

## Mit eigenem Material

### Mitbringen

Ein kurzer eigener Artikel oder Entwurfsabschnitt als Word oder PDF mit Abstract, mindestens einer Tabelle und einem Literaturverzeichnis.

### Schritte

1. Hängen Sie das Dokument an und fügen Sie den Startprompt ein.
2. Prüfen Sie jeden markierten Punkt selbst im Dokument, bevor Sie etwas ändern.
3. Ändern Sie in Ihrer Kopie absichtlich eine Zahl und hängen Sie sie erneut an.
4. Sehen Sie, ob ein erneuter Lauf des Prompts die eingebaute Abweichung erkennt.

### Prompt

```text
Ich prüfe meinen eigenen [Artikel oder mein Kapitel] vor der Einreichung. Prüfen Sie im angehängten Dokument die Konsistenz: 1) Zahlen (Stichprobenumfänge, Prozentwerte, Statistiken), die sich zwischen Abstract, Haupttext und Tabellen unterscheiden; 2) Schlüsselbegriffe oder Abkürzungen, die uneinheitlich verwendet werden; 3) Zitate im Text, die im Literaturverzeichnis fehlen, und Literaturangaben, die nie zitiert werden. (Ob die Literaturangaben selbst existieren und den Text stützen, ist eine separate Prüfung.) Geben Sie eine Tabelle zurück: Art des Problems, Fundstelle (Abschnitt oder Seite), was jede Stelle sagt, Korrekturvorschlag. Berichten Sie nur, was Sie im Dokument finden; wenn Teile zu lang waren, um sie vollständig zu lesen, sagen Sie, welche.
```

### Prüfung

Mindestens drei markierte Probleme sind echt, wenn Sie sie nachschlagen, und die eingebaute Abweichung wird erkannt; falls nicht, prüfen Sie lange Dokumente abschnittsweise.

## Technik

Laden Sie die Word- oder PDF-Datei in Ihren KI-Assistenten hoch; prüfen Sie bei langen Dokumenten, ob er sagt, dass er jeden Teil gelesen hat, und arbeiten Sie andernfalls abschnittsweise; gleichen Sie Zitate und Literaturangaben außerdem in Ihrer Literaturverwaltung ab.

## Stufen

### Chat

Führen Sie den Startprompt mit dem angehängten Forster-PDF aus. Bitten Sie den Assistenten danach im selben Chat, jede Tabelle, die er nach eigener Aussage nicht vollständig lesen konnte, abschnittsweise erneut zu prüfen.

### Projekt / Notebook

Fügen Sie den Forster-Bericht (A3) oder, für Ihre eigene Arbeit, den aktuellen Entwurf, seine Tabellen als einzelne .xlsx-Dateien und Ihr Literaturverzeichnis hinzu. Fordern Sie Zahlen und Begriffe an, die sich zwischen Abstract, Text und Tabellen unterscheiden. Einzelne Tabellen lassen sich leicht eine nach der anderen prüfen, und Sie führen nach jeder Überarbeitung dieselbe Prüfung erneut aus.

### Eigener Assistent

Erstellen Sie einen konfigurierten Assistenten (z. B. einen Copilot-Agenten, einen Custom GPT, ein Gemini Gem oder ein Claude-Projekt). Definieren Sie in seinen dauerhaften Anweisungen die Prüfung: Zahlen über Abstract, Text und Tabellen hinweg; Begriffe und Abkürzungen; Zitate im Text gegen das Literaturverzeichnis; eine Tabelle mit Art des Problems, Fundstelle, was jede Stelle sagt, und Korrekturvorschlag; nur berichten, was im Dokument steht, und sagen, welche Teile nicht gelesen wurden. Startprompt: „Führen Sie die Konsistenzprüfung für diesen Entwurf durch.“ Wiederverwendbar vor jeder Einreichung – bauen Sie eine Abweichung ein, um sie zu testen.
