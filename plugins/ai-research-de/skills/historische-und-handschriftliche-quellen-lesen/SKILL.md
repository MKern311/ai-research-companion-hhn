---
name: historische-und-handschriftliche-quellen-lesen
description: "Transkribieren Sie gedrucktes oder handschriftliches Archivmaterial (OCR/HTR) und lassen Sie erste Übersetzungen für das Close Reading entwerfen. Einsetzen bei: Historische & handschriftliche Quellen lesen."
---

# Historische & handschriftliche Quellen lesen

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/erhebung-6

## Ziel

Transkribieren Sie gedrucktes oder handschriftliches Archivmaterial (OCR/HTR) und lassen Sie erste Übersetzungen für das Close Reading entwerfen.

Eine zeilenweise diplomatische Transkription mit markierten unsicheren Lesungen, eine Fehlerzählung aus Ihrer Stichprobe und eine wörtliche Übersetzung der bestätigten Zeilen – ein schnellerer Einstieg ins Close Reading, weiterhin am Bild verifiziert.

## Wann einsetzen

Alter Druck und alte Handschriften bremsen Sie: Eine Seite in einer ungewohnten Hand zu entziffern kann eine Stunde dauern, noch bevor die Übersetzung beginnt.

## Ablauf mit der Nutzerin oder dem Nutzer

Führen Sie durch diese Schritte. Wo ein Schritt „den Assistenten bitten“ nennt, sind Sie gemeint.

1. Hängen Sie das Bild einer einzelnen Seite oder eines kurzen Abschnitts an.
2. Fügen Sie den Startprompt mit Sprache und ungefährem Datum ein.
3. Vergleichen Sie fünf Zeilen mit der Transkription des Archivs oder Ihrer eigenen sorgfältigen Lesung.
4. Bitten Sie um einen Übersetzungsentwurf nur der Zeilen, die Sie bestätigt haben.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.

## Typische Anfrage

```text
Ich bin Forschende/r und arbeite mit Archivquellen. Das angehängte Bild zeigt ein [gedrucktes oder handschriftliches] Dokument in [Sprache] aus der Zeit um [Datum oder Zeitraum]. Transkribieren Sie es zeilenweise und behalten Sie die Originalschreibung, Abkürzungen und Zeilenumbrüche bei. Markieren Sie unsichere Lesungen mit [?] und unleserliche Stellen mit [unleserlich], statt zu raten. Geben Sie dann einen wörtlichen Übersetzungsentwurf in modernes Deutsch, zeilenweise, in einer Tabelle mit zwei Spalten. Nennen Sie Wörter, deren Bedeutung sich seit dieser Zeit möglicherweise geändert hat.
```

## Prüfung

In fünf Zeilen, die Sie gegen die vorhandene Transkription oder das Bild geprüft haben, ist jedes Wort ohne [?] korrekt; wenn Sie sicher vorgetragene Fehler finden, behandeln Sie die gesamte Ausgabe als grobe Rohfassung.

## Grenzen

- Ein Chat arbeitet Seite für Seite; ganze Sammlungen zu transkribieren braucht eigene OCR- oder Handschriftenerkennungs-Werkzeuge.
- Risiko: Eigene unveröffentlichte Entwürfe, Gutachten oder Inhalte Dritter.

## Wichtige Konzepte

- **OCR und HTR** – Die optische Zeichenerkennung (OCR) liest gedruckten Text; die Handschriftenerkennung (HTR) liest Manuskripte und braucht meist Modelle, die auf ähnlichen Händen trainiert wurden. Allgemeine Chatmodelle sind nicht auf Ihre Hand trainiert und können flüssige, aber erfundene Lesungen liefern.
- **Diplomatische versus normalisierte Transkription** – Die diplomatische Transkription behält Originalschreibung, Abkürzungen, Zeichensetzung und Zeilenumbrüche bei; die normalisierte modernisiert sie zur besseren Lesbarkeit. Entscheiden Sie vor dem Transkribieren und nennen Sie die Konvention, denn Normalisieren ist bereits Interpretation.
- **Zeichenfehlerrate (Character Error Rate, CER)** – Standardmaß für die Genauigkeit von OCR und HTR: (Ersetzungen + Auslassungen + Einfügungen) ÷ Zeichen in einer Referenztranskription (Ground Truth). Messen Sie sie selbst an einer Stichprobe; flüssige Ausgabe mit hoher Fehlerrate ist das Hauptrisiko.
- **Quellenkritik** – Beurteilen Sie Echtheit, Herkunft, Datierung und Zweck des Dokuments, bevor Sie es interpretieren, und behandeln Sie jede maschinelle Übersetzung als Entwurf, da sich die historische Bedeutung von Wörtern vom modernen Gebrauch unterscheiden kann.

## Wichtige Literatur

- Muehlberger, G., Seaward, L., Terras, M., et al. (2019). Transforming scholarship in the archives through handwritten text recognition: Transkribus as a case study. Journal of Documentation, 75(5), 954–976. https://doi.org/10.1108/JD-07-2018-0114
- Kahle, P., Colutto, S., Hackl, G., & Mühlberger, G. (2017). Transkribus – A service platform for transcription, recognition and retrieval of historical documents. In 2017 14th IAPR International Conference on Document Analysis and Recognition (ICDAR) (pp. 19–24). IEEE. https://doi.org/10.1109/ICDAR.2017.307

## Hilfreiche Werkzeuge

Transkribus
