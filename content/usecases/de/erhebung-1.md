---
id: erhebung-1
phase: erhebung
order: 1
title: Extraktion aus Dokumenten
risk: 3
mode: Delegate
potential: 3
capabilities: analyse; agentisch
routes: files; external
tools: Elicit
data: D7; D8
practice_data: D7; D8
---

Gewinnen Sie strukturierte Daten aus Berichten, Webseiten, Archivalien oder Datendokumentationen (z. B. Kennzahlen, Aussagen, Metadaten).

## Problem

Kennzahlen, Aussagen und Metadaten sind über lange Berichte, Webseiten, Archivalien und Datendokumentationen verstreut; sie von Hand in eine Tabelle zu kopieren ist langsam und führt zu Übertragungsfehlern und uneinheitlichen Definitionen.

## Ergebnis

Eine Tabelle auf Basis eines vorab definierten Extraktionsformulars, jeder Wert mit Seite oder Zeile und einem wörtlichen Zitat als Herkunftsnachweis, „nicht angegeben“, wo etwas fehlt, und eine Fehlerrate aus Ihrer eigenen Verifikationsstichprobe.

## Vorgehen

1. Definieren Sie die Analyseeinheit und die operationale Definition jedes Feldes
2. Pilotieren Sie das Formular an einem Dokument und verfeinern Sie die Definitionen
3. Bitten Sie um Seiten- oder Zeilennummern, Zitate und Markierungen „nicht angegeben“
4. Verifizieren Sie eine Zufallsstichprobe und halten Sie die Fehlerrate fest

## Konzepte

### Extraktionsformular

Eine vorab definierte Liste von Feldern mit operationalen Definitionen, Einheiten und zulässigen Werten, die vor dem vollen Einsatz an einigen Dokumenten pilotiert wird. Standard in systematischen Übersichtsarbeiten über Fächer hinweg; es hält die Extraktion über Dokumente, Personen und Tools hinweg konsistent.

### Doppelextraktion und Verifikation

Zwei Personen extrahieren unabhängig voneinander und klären Abweichungen, oder eine extrahiert und eine zweite verifiziert. Wenn die KI als Erstextraktorin dient, verifizieren Sie jeden Wert, den Sie analysieren werden, oder zumindest eine Zufallsstichprobe mit dokumentierter Fehlerrate.

### Herkunftsnachweis: Fundstelle und wörtliches Zitat

Wenn Sie festhalten, woher jeder Wert stammt – Seite in einem PDF, Zeile in einer Textdatei, URL und Abrufdatum bei einer Webseite –, wird die Extraktion nachprüfbar, und erfundene Werte fallen schnell auf. Unterscheiden Sie „nicht angegeben“ von „null“ und von „unklar“, und lassen Sie die Extraktion nie eine Lücke aus Allgemeinwissen füllen.

### Dokumentenanalyse (Bowen)

Ein systematisches Verfahren zur Durchsicht gedruckter und elektronischer Dokumente – Überfliegen, gründliches Lesen, Interpretation – mit Blick auf Authentizität, Glaubwürdigkeit, Repräsentativität und den Zweck, für den jedes Dokument entstand.

## Literatur

- Higgins, J. P. T., Thomas, J., Chandler, J., Cumpston, M., Li, T., Page, M. J., & Welch, V. A. (Eds.). (2019). Cochrane handbook for systematic reviews of interventions (2nd ed.). Wiley. doi:10.1002/9781119536604
- Bowen, G. A. (2009). Document analysis as a qualitative research method. Qualitative Research Journal, 9(2), 27–40. doi:10.3316/QRJ0902027

## Übung

### Aufgabe

Sie extrahieren Metadaten aus den Kopfzeilen dreier britischer Wetterdatendateien – Dokumente, keine Fachartikel – in eine Tabelle. Sie lernen, ob der Assistent die richtige Zeile zitiert, „nicht angegeben“ schreibt, wo eine Datei schweigt, oder Lücken mit seinem Wissen über den Met Office füllt.

### Prompt

```text
Angehängt sind drei Klartextdateien mit britischen Wetteraufzeichnungen: die Stationsdateien Oxford und Durham und die UK-Niederschlagsreihe. Behandle die Kopfzeilen und das Layout jeder Datei als das Dokument. Extrahiere in eine Tabelle, eine Zeile je Datei: Name der Station oder Reihe; Anbieter oder Quelle; Standort (Breite, Länge, Höhe) oder abgedecktes Gebiet; Variablen mit ihren Einheiten; erstes Jahr und erster Monat der Daten; letztes Jahr und letzter Monat der Daten; Datum der letzten Aktualisierung; wie fehlende Werte markiert sind; wie geschätzte Werte markiert sind; wie vorläufige Werte markiert sind; Hinweise zu Instrumenten oder Methoden; Lizenz oder Nutzungsbedingungen. Gib für jeden Wert die Zeilennummer und den wörtlichen Text aus der Datei als Beleg an. Schreibe „nicht angegeben“, wenn eine Datei ein Feld nicht nennt; nutze weder dein eigenes Wissen noch das Web. Biete die Tabelle dann als CSV-Datei an.
```

### Prüfung

Prüfen Sie jede Zelle an der zitierten Zeile. Oxford: Lat 51.761 Lon -1.262, 63 metres amsl, January 1853 to September 2026. Durham: Lat 54.768 Lon -1.585, 102 metres amsl, January 1880 to September 2026. Beide markieren Schätzungen mit *, fehlende Monate mit --- und die Zeilen von 2026 als „Provisional“ und nennen weder Anbieter noch Aktualisierungsdatum noch Lizenz; das Kennzeichen # für den Sonnenscheinsensor ist definiert, aber kein Wert trägt es. Die Niederschlagsdatei nennt „Met Office National Climate Information Centre“, „Last updated 01-Oct-2026“ und „starting in 1836“, gibt aber weder Einheiten noch Lizenz an. Jeder Anbieter, jede Einheit und jede Lizenz, die der Assistent aus eigenem Wissen ergänzt, ist ein Extraktionsfehler.

## Mit eigenem Material

### Mitbringen

Ein Open-Access-PDF mit Zahlen oder Tabellen, etwa einen Geschäftsbericht, eine Veröffentlichung amtlicher Statistik oder einen Open-Access-Artikel.

### Schritte

1. Hängen Sie das PDF an, oder nur die relevanten Seiten eines langen Berichts.
2. Fügen Sie den Startprompt mit den Feldern ein, die extrahiert werden sollen.
3. Prüfen Sie fünf Werte anhand der zitierten Seitenzahlen stichprobenartig gegen das PDF.
4. Übernehmen Sie die geprüfte Tabelle in Excel oder bitten Sie den Assistenten um eine CSV-Datei.

### Prompt

```text
Ich sammle Daten aus Dokumenten für ein Forschungsprojekt zu [Thema]. Extrahiere aus dem angehängten PDF diese Felder: [Feld 1, Feld 2, Feld 3, z. B. Jahr, Umsatz, Anzahl Mitarbeitende, genannte Ziele]. Gib eine Tabelle zurück mit einer Zeile je [Einheit, z. B. Jahr oder Organisation] und einer Spalte je Feld, dazu die Seitenzahl und ein kurzes wörtliches Zitat als Beleg für jeden Wert. Wenn ein Wert fehlt oder mehrdeutig ist, schreibe „nicht gefunden“, statt zu schätzen. Nutze keine Informationen von außerhalb des Dokuments.
```

### Prüfung

Fünf zufällig gewählte Werte stimmen auf der zitierten Seite exakt mit dem PDF überein, und „nicht gefunden“ steht nur dort, wo dem Dokument der Wert tatsächlich fehlt.

## Technik

Laden Sie das Dokument – ein PDF, ausgewählte Seiten, eine gespeicherte Webseite oder eine Textdatei – in Ihren KI-Assistenten hoch und bitten Sie um eine Tabelle mit Seiten- oder Zeilennummern und Zitaten; die Tabelle lässt sich meist als CSV oder Excel speichern. Für die Extraktion aus Forschungsarbeiten in großem Umfang leistet Elicit dasselbe – verifizieren Sie in beiden Fällen.

## Stufen

### Chat

Führen Sie den Startprompt mit den Dateien Oxford, Durham und Niederschlag aus, oder mit Ihrem eigenen PDF. Nennen Sie im selben Chat zufällig fünf Zellen und bitten Sie darum, die Belegzeile erneut zu zitieren, und vergleichen Sie dann selbst mit der Datei.

### Projekt / Notebook

Fügen Sie die Dokumente hinzu, aus denen Sie extrahieren – Berichte, Archivalien oder Datendokumentationen (D7 und D8 funktionieren als .txt) – und Ihr Extraktionsformular als Word-Datei. Bitten Sie um dieselben Felder über alle Dokumente hinweg, jeweils mit Zeile oder Seite und Zitat. Neue Dokumente kommen in eine konsistente Tabelle; es geht nur freigegebenes Material hinein, und Sie verifizieren von jedem Stapel eine Stichprobe.

### Eigener Assistent

Nennen Sie ihn „Extraktionsassistent“ und schalten Sie Codeausführung bzw. Dateierstellung ein, wenn Ihr Tool sie anbietet, für den CSV-Export. Anweisungen: Ihr Extraktionsformular mit Felddefinitionen, eine Zeile je Dokument, Zeile oder Seite und ein wörtliches Zitat für jeden Wert, „nicht angegeben“, wo etwas fehlt, kein Wissen von außen. Startprompt: „Extrahiere die Formularfelder aus den angehängten Dokumenten“. Es geht nur freigegebenes Material hinein; wiederverwendbar für jeden Stapel, und Sie prüfen jedes Mal eine Zufallsstichprobe.

### Automatisierung / eigener Code

Ein Low-Code-Ablauf (z. B. Power Automate, n8n) kann jedes neue Dokument in einem Cloud-Ordner an den Assistenten übergeben und die extrahierten Zeilen an eine Tabelle anhängen, mit einem Protokoll für Ihre Verifikationsstichprobe. Ein eigener Assistent allein kann diese mehrstufige Automatisierung nicht ausführen. Auf GitHub: Ein Python-Skript ruft die von Ihrer Einrichtung freigegebene KI-API für jedes Dokument auf und schreibt die Zeilen in eine Tabelle, versioniert neben Ihrem Verifikationsprotokoll. Prüfen Sie Datenschutz und Freigabe vorher mit Ihrer Hochschule.
