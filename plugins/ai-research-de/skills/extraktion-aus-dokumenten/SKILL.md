---
name: extraktion-aus-dokumenten
description: "Gewinnen Sie strukturierte Daten aus Berichten, Webseiten, Archivalien oder Datendokumentationen (z. B. Kennzahlen, Aussagen, Metadaten). Einsetzen bei: Extraktion aus Dokumenten."
---

# Extraktion aus Dokumenten

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/erhebung-1

## Ziel

Gewinnen Sie strukturierte Daten aus Berichten, Webseiten, Archivalien oder Datendokumentationen (z. B. Kennzahlen, Aussagen, Metadaten).

Eine Tabelle auf Basis eines vorab definierten Extraktionsformulars, jeder Wert mit Seite oder Zeile und einem wörtlichen Zitat als Herkunftsnachweis, „nicht angegeben“, wo etwas fehlt, und eine Fehlerrate aus Ihrer eigenen Verifikationsstichprobe.

## Wann einsetzen

Kennzahlen, Aussagen und Metadaten sind über lange Berichte, Webseiten, Archivalien und Datendokumentationen verstreut; sie von Hand in eine Tabelle zu kopieren ist langsam und führt zu Übertragungsfehlern und uneinheitlichen Definitionen.

## Ablauf mit der Nutzerin oder dem Nutzer

Führen Sie durch diese Schritte. Wo ein Schritt „den Assistenten bitten“ nennt, sind Sie gemeint.

1. Hängen Sie das PDF an, oder nur die relevanten Seiten eines langen Berichts.
2. Fügen Sie den Startprompt mit den Feldern ein, die extrahiert werden sollen.
3. Prüfen Sie fünf Werte anhand der zitierten Seitenzahlen stichprobenartig gegen das PDF.
4. Übernehmen Sie die geprüfte Tabelle in Excel oder bitten Sie den Assistenten um eine CSV-Datei.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.

## Typische Anfrage

```text
Ich sammle Daten aus Dokumenten für ein Forschungsprojekt zu [Thema]. Extrahieren Sie aus dem angehängten PDF diese Felder: [Feld 1, Feld 2, Feld 3, z. B. Jahr, Umsatz, Anzahl Mitarbeitende, genannte Ziele]. Geben Sie eine Tabelle zurück mit einer Zeile je [Einheit, z. B. Jahr oder Organisation] und einer Spalte je Feld, dazu die Seitenzahl und ein kurzes wörtliches Zitat als Beleg für jeden Wert. Wenn ein Wert fehlt oder mehrdeutig ist, schreiben Sie „nicht gefunden“, statt zu schätzen. Nutzen Sie keine Informationen von außerhalb des Dokuments.
```

## Prüfung

Fünf zufällig gewählte Werte stimmen auf der zitierten Seite exakt mit dem PDF überein, und „nicht gefunden“ steht nur dort, wo dem Dokument der Wert tatsächlich fehlt.

## Grenzen

- Risiko: Personenbezogene oder sensible Daten oder Entscheidungen, die direkt in Ihre Ergebnisse einfließen.

## Wichtige Konzepte

- **Extraktionsformular** – Eine vorab definierte Liste von Feldern mit operationalen Definitionen, Einheiten und zulässigen Werten, die vor dem vollen Einsatz an einigen Dokumenten pilotiert wird. Standard in systematischen Übersichtsarbeiten über Fächer hinweg; es hält die Extraktion über Dokumente, Personen und Werkzeuge hinweg konsistent.
- **Doppelextraktion und Verifikation** – Zwei Personen extrahieren unabhängig voneinander und klären Abweichungen, oder eine extrahiert und eine zweite verifiziert. Wenn die KI als Erstextraktorin dient, verifizieren Sie jeden Wert, den Sie analysieren werden, oder zumindest eine Zufallsstichprobe mit dokumentierter Fehlerrate.
- **Herkunftsnachweis: Fundstelle und wörtliches Zitat** – Wenn Sie festhalten, woher jeder Wert stammt – Seite in einem PDF, Zeile in einer Textdatei, URL und Abrufdatum bei einer Webseite –, wird die Extraktion nachprüfbar, und erfundene Werte fallen schnell auf. Unterscheiden Sie „nicht angegeben“ von „null“ und von „unklar“, und lassen Sie die Extraktion nie eine Lücke aus Allgemeinwissen füllen.
- **Dokumentenanalyse (Bowen)** – Ein systematisches Verfahren zur Durchsicht gedruckter und elektronischer Dokumente – Überfliegen, gründliches Lesen, Interpretation – mit Blick auf Authentizität, Glaubwürdigkeit, Repräsentativität und den Zweck, für den jedes Dokument entstand.

## Wichtige Literatur

- Higgins, J. P. T., Thomas, J., Chandler, J., Cumpston, M., Li, T., Page, M. J., & Welch, V. A. (Eds.). (2019). Cochrane handbook for systematic reviews of interventions (2nd ed.). Wiley. https://doi.org/10.1002/9781119536604
- Bowen, G. A. (2009). Document analysis as a qualitative research method. Qualitative Research Journal, 9(2), 27–40. https://doi.org/10.3316/QRJ0902027

## Hilfreiche Werkzeuge

Elicit
