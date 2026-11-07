---
id: erhebung-6
phase: erhebung
order: 6
title: Historische & handschriftliche Quellen lesen
risk: 2
mode: Co-create
potential: 2
capabilities: analyse; generierung
routes: files; external; connected
connect: Transkribus
tools: Transkribus
---

Transkribieren Sie gedrucktes oder handschriftliches Archivmaterial (OCR/HTR) und lassen Sie erste Übersetzungen für das Close Reading entwerfen.

## Problem

Alter Druck und alte Handschriften bremsen Sie: Eine Seite in einer ungewohnten Hand zu entziffern kann eine Stunde dauern, noch bevor die Übersetzung beginnt.

## Ergebnis

Eine zeilenweise diplomatische Transkription mit markierten unsicheren Lesungen, eine Fehlerzählung aus Ihrer Stichprobe und eine wörtliche Übersetzung der bestätigten Zeilen – ein schnellerer Einstieg ins Close Reading, weiterhin am Bild verifiziert.

## Vorgehen

1. Laden Sie eine Seite hoch; nennen Sie Sprache, Schrift und Zeit
2. Bitten Sie um eine diplomatische Transkription mit Unsicherheitsmarkierungen
3. Zählen Sie Fehler in fünf Zeilen gegen eine vorhandene Transkription
4. Übersetzen Sie nur die Zeilen, die Sie bestätigt haben

## Konzepte

### OCR und HTR

Die optische Zeichenerkennung (OCR) liest gedruckten Text; die Handschriftenerkennung (HTR) liest Manuskripte und braucht meist Modelle, die auf ähnlichen Händen trainiert wurden. Allgemeine Chatmodelle sind nicht auf Ihre Hand trainiert und können flüssige, aber erfundene Lesungen liefern.

### Diplomatische versus normalisierte Transkription

Die diplomatische Transkription behält Originalschreibung, Abkürzungen, Zeichensetzung und Zeilenumbrüche bei; die normalisierte modernisiert sie zur besseren Lesbarkeit. Entscheiden Sie vor dem Transkribieren und nennen Sie die Konvention, denn Normalisieren ist bereits Interpretation.

### Zeichenfehlerrate (Character Error Rate, CER)

Standardmaß für die Genauigkeit von OCR und HTR: (Ersetzungen + Auslassungen + Einfügungen) ÷ Zeichen in einer Referenztranskription (Ground Truth). Messen Sie sie selbst an einer Stichprobe; flüssige Ausgabe mit hoher Fehlerrate ist das Hauptrisiko.

### Quellenkritik

Beurteilen Sie Echtheit, Herkunft, Datierung und Zweck des Dokuments, bevor Sie es interpretieren, und behandeln Sie jede maschinelle Übersetzung als Entwurf, da sich die historische Bedeutung von Wörtern vom modernen Gebrauch unterscheiden kann.

## Literatur

- Muehlberger, G., Seaward, L., Terras, M., et al. (2019). Transforming scholarship in the archives through handwritten text recognition: Transkribus as a case study. Journal of Documentation, 75(5), 954–976. doi:10.1108/JD-07-2018-0114
- Kahle, P., Colutto, S., Hackl, G., & Mühlberger, G. (2017). Transkribus – A service platform for transcription, recognition and retrieval of historical documents. In 2017 14th IAPR International Conference on Document Analysis and Recognition (ICDAR) (pp. 19–24). IEEE. doi:10.1109/ICDAR.2017.307

## Mit eigenem Material

### Mitbringen

Ein Foto oder einen Scan einer Seite gemeinfreien gedruckten oder handschriftlichen Materials, idealerweise aus einem digitalisierten Archiv, das auch eine Transkription anbietet.

### Schritte

1. Hängen Sie das Bild einer einzelnen Seite oder eines kurzen Abschnitts an.
2. Fügen Sie den Startprompt mit Sprache und ungefährem Datum ein.
3. Vergleichen Sie fünf Zeilen mit der Transkription des Archivs oder Ihrer eigenen sorgfältigen Lesung.
4. Bitten Sie um einen Übersetzungsentwurf nur der Zeilen, die Sie bestätigt haben.

### Prompt

```text
Ich bin Forschende/r und arbeite mit Archivquellen. Das angehängte Bild zeigt ein [gedrucktes oder handschriftliches] Dokument in [Sprache] aus der Zeit um [Datum oder Zeitraum]. Transkribieren Sie es zeilenweise und behalten Sie die Originalschreibung, Abkürzungen und Zeilenumbrüche bei. Markieren Sie unsichere Lesungen mit [?] und unleserliche Stellen mit [unleserlich], statt zu raten. Geben Sie dann einen wörtlichen Übersetzungsentwurf in modernes Deutsch, zeilenweise, in einer Tabelle mit zwei Spalten. Nennen Sie Wörter, deren Bedeutung sich seit dieser Zeit möglicherweise geändert hat.
```

### Prüfung

In fünf Zeilen, die Sie gegen die vorhandene Transkription oder das Bild geprüft haben, ist jedes Wort ohne [?] korrekt; wenn Sie sicher vorgetragene Fehler finden, behandeln Sie die gesamte Ausgabe als grobe Rohfassung.

### Grenze

Ein Chat arbeitet Seite für Seite; ganze Sammlungen zu transkribieren braucht eigene OCR- oder Handschriftenerkennungs-Werkzeuge.

## Technik

Laden Sie ein einzelnes Seitenbild in Ihren KI-Assistenten hoch, um Transkription und einen Übersetzungsentwurf zu erhalten. Für ganze Sammlungen oder schwierige Hände trainiert Transkribus HTR-Modelle; sein MCP-Server der Community läuft lokal und funktioniert daher aus einem MCP-fähigen Desktop-Assistenten oder Code-Editor, nicht aus einem einfachen Browser-Chat.

## Stufen

### Chat

Hängen Sie ein Seitenbild an und führen Sie den Startprompt aus. Fügen Sie im selben Chat Ihre Korrekturen der fünf geprüften Zeilen ein und bitten Sie um eine überarbeitete Transkription und eine Übersetzung nur der bestätigten Zeilen.

### Projekt / Notebook

Fügen Sie Ihre geprüften Transkriptionen früherer Seiten, eine Liste von Abkürzungen und Schreibweisen und die Katalogbeschreibung des Archivs als Word- oder Textdateien hinzu. Fragen Sie, wie ein Wort oder eine Abkürzung auf früheren Seiten gelesen wurde, bevor Sie eine neue Lesung akzeptieren. Die Lesungen bleiben über eine ganze Sammlung hinweg konsistent; die Seitenbilder selbst gehen weiterhin in den Chat.

### Eigener Assistent

Nennen Sie ihn „Archiv-Transkribent“. Anweisungen: zeilenweise, Originalschreibung und Abkürzungen beibehalten, [?] für Unsicheres und [unleserlich] für Unlesbares, eine wörtliche Übersetzung in einer Tabelle mit zwei Spalten, Hinweise zu Wörtern mit gewandelter Bedeutung. Wissen: Ihre Abkürzungsliste und geprüfte Beispieltranskriptionen. Startprompt: „Transkribieren Sie diese Seite – [Sprache], um [Datum]“. Wiederverwendbar für jede Seite; Sie prüfen jede weiterhin stichprobenartig am Bild.
