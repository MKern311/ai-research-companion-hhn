---
id: querschnitt-4
phase: querschnitt
order: 4
title: Metadaten, FAIR-Daten & Replikation
risk: 2
mode: Co-create
potential: 2
capabilities: generierung
routes: files; external; connected
connect: GitHub (repositories)
tools: GitHub Copilot
data: D7
practice_data: D7
---

Lassen Sie sich Metadaten, Codebooks und README-Dateien für Datenpublikationen vorschlagen, stellen Sie ein Replikationspaket zusammen und prüfen Sie, ob jede Zahl der Arbeit aus dem Code reproduzierbar ist.

## Problem

Datenablage und Replikationspakete kommen zuletzt, wenn Details vergessen sind; Codebooks und READMEs werden hastig geschrieben, Flags bleiben undokumentiert, und Zahlen der Arbeit lassen sich womöglich nicht reproduzieren.

## Ergebnis

Ein aus der Datei berechnetes Codebook, ein Entwurf für README und Repository-Metadaten sowie eine Replikations-Checkliste – Daten, die andere finden und nachnutzen können, und Ergebnisse, deren Reproduzierbarkeit Sie belegen können.

## Vorgehen

1. Laden Sie den Datensatz hoch und beschreiben Sie, wie er erhoben wurde
2. Bitten Sie um ein aus der Datei berechnetes Codebook
3. Entwerfen Sie ein README und DataCite-Metadatenfelder
4. Wählen Sie eine Lizenz und ein Repository, das DOIs vergibt
5. Prüfen Sie zwei Spalten und jede [PRÜFEN]-Markierung selbst

## Konzepte

### FAIR-Prinzipien

Wilkinson et al. (2016): Daten sollen auffindbar (persistenter Identifikator, reiche Metadaten), zugänglich (über Standardprotokolle abrufbar), interoperabel (gemeinsame Vokabulare und Formate) und wiederverwendbar (klare Lizenz, Herkunft, Community-Standards) sein. FAIR verlangt nicht, dass Daten offen sind.

### DataCite-Metadatenschema (DataCite Metadata Schema)

Der Metadatenstandard hinter den meisten Datensatz-DOIs. Pflichtangaben sind Identifikator, Urheber, Titel, Herausgeber, Veröffentlichungsjahr und Ressourcentyp; empfohlene Angaben wie Beschreibung, Schlagwort und Rechte erleichtern Auffindbarkeit und Nachnutzung.

### Codebook (Datenwörterbuch)

Es dokumentiert jede Variable: Name, Bezeichnung, Typ, Einheit, gültigen Bereich oder Codes, Codes und Flags für fehlende Werte sowie die Herleitung. Die Data Documentation Initiative (DDI) stellt einen Standard für Sozial- und Befragungsdaten bereit.

### Reproduzierbarkeit und Replizierbarkeit (Reproducibility and replicability)

Die National Academies (2019): Reproduzierbarkeit heißt, aus denselben Daten, demselben Code und denselben Bedingungen konsistente Ergebnisse zu erhalten; Replizierbarkeit heißt konsistente Ergebnisse über Studien hinweg, die neue Daten erheben. Ein Replikationspaket sichert die Reproduzierbarkeit.

## Literatur

- Wilkinson, M. D., Dumontier, M., Aalbersberg, I. J., Appleton, G., Axton, M., Baak, A., … Mons, B. (2016). The FAIR Guiding Principles for scientific data management and stewardship. Scientific Data, 3, 160018. doi:10.1038/sdata.2016.18
- National Academies of Sciences, Engineering, and Medicine. (2019). Reproducibility and replicability in science. The National Academies Press. doi:10.17226/25303

## Übung

### Aufgabe

Schreiben Sie Codebook, README und Metadatensatz für die Oxford-Stationsdatei, als würden Sie eine bereinigte Fassung hinterlegen. Sie lernen, ob der Assistent Bereiche und Anzahl fehlender Werte aus der Datei berechnet und geratene Bedeutungen markiert, statt sie zu erfinden.

### Prompt

```text
Ich bereite eine bereinigte Fassung der angehängten Textdatei der Met-Office-Station Oxford für die Ablage in einem Datenrepository vor. Lies zuerst die Kopfzeilen. Untersuche die Datei mit Python und erstelle dann eine Codebook-Tabelle: Variablenname, Beschreibung, Typ, Einheit, beobachteter Bereich, Anzahl fehlender Werte, Code für fehlende Werte und verwendete Flags (*, # oder „Provisional“). Entwirf dann ein README mit Titel, Urhebern (als Platzhalter lassen), Beschreibung, Quelle und Entstehung der Daten, Dateiliste, Variablen, Lizenz (als Platzhalter lassen), Zitierweise der ursprünglichen Met-Office-Daten und Kontakt. Markiere jede Bedeutung, die du geraten hast, mit [PRÜFEN]. Liste die obligatorischen DataCite-Metadatenfelder mit Vorschlagswerten auf. Gib zum Schluss eine Replikations-Checkliste zu Daten, Code, Softwareversionen, Ausführungsreihenfolge und erwarteten Ergebnissen.
```

### Prüfung

Vergleichen Sie mit der Datei: tmax reicht von −0.2 bis 28.2 °C, sun fehlt („---“) in 912 Monaten und rain in keinem. Jede Bedeutung, die der Kopf nicht definiert, etwa „af“, muss [PRÜFEN] tragen.

## Mit eigenem Material

### Mitbringen

Einen kleinen öffentlichen oder fiktiven Datensatz als CSV oder Excel, zum Beispiel von data.gov.uk oder den offenen Daten des UK Data Service.

### Schritte

1. Hängen Sie den Datensatz an und sagen Sie, was er enthält und wie er erhoben wurde.
2. Bitten Sie um ein Codebook mit berechneten Bereichen und fehlenden Werten.
3. Bitten Sie um ein README und die wichtigsten Repository-Metadatenfelder.
4. Prüfen Sie Bereiche und Anzahl fehlender Werte für zwei Spalten in der Datei.

### Prompt

```text
Ich bereite einen Datensatz für die Ablage in [Repository] vor. Angehängt ist [Dateiname]; er enthält [kurze Beschreibung und Art der Erhebung]. Untersuche die Datei mit Python und erstelle dann eine Codebook-Tabelle: Variablenname, Beschreibung, Typ, Einheit, Bereich oder erlaubte Werte, Anzahl fehlender Werte, Code für fehlende Werte. Entwirf dann ein README mit: Titel, Urhebern [Platzhalter], Beschreibung, Methoden, Dateiliste, Variablen, Lizenz [Platzhalter], Zitierweise, Kontakt. Markiere jede Variablenbedeutung, die du geraten hast, mit [PRÜFEN]. Liste dann die zentralen Metadatenfelder auf, die das Repository voraussichtlich abfragt. Gib zum Schluss eine Checkliste für ein Replikationspaket (Daten, Code, Softwareversionen, Ausführungsreihenfolge, erwartete Ergebnisse) und sage, wie ich prüfen kann, dass jede Zahl in meiner Arbeit vom Code reproduziert wird.
```

### Prüfung

Für zwei Spalten stimmen Bereiche und Anzahl fehlender Werte im Codebook mit der Datei überein, und jede vom Assistenten geratene Variablenbedeutung ist mit [PRÜFEN] markiert.

## Technik

Laden Sie die CSV- oder Textdatei in Ihren KI-Assistenten hoch; wenn er Code ausführen kann, berechnet er Bereiche und fehlende Werte in Python und entwirft das README – wenn nicht, führen Sie den Code selbst aus. Für das Replikationspaket hilft ein Code-Editor mit KI-Assistent, etwa VS Code, die Ausführungsreihenfolge zu skripten und zu testen.

## Stufen

### Chat

Führen Sie den Startprompt mit angehängter D7-Oxford-Datei aus. Bitten Sie den Assistenten im selben Chat, die Python-Zeilen zu zeigen, die den tmax-Bereich und die Anzahl fehlender Sonnenscheinwerte berechnet haben, und aufzulisten, welche Spaltenbedeutungen er dem Kopf entnommen und welche er geraten hat.

### Projekt / Notebook

Fügen Sie die D7-Textdatei, die Kopfnotizen des Met Office, Ihre Methodennotizen und die Ablagerichtlinien des Repositorys als Referenzen hinzu; für Ihre eigenen Daten Ihr Protokoll und Ihre Dateiliste. Bitten Sie um Entwürfe für README und Metadaten, die diese Quellen zitieren, und behalten Sie sie bis zur Ablage als gespeicherte Notizen. Je nach Werkzeug führt ein Notebook kein Python aus – dann berechnen Sie das Codebook in einem Chat und fügen es hinzu.

### Eigener Assistent

Anweisungen: Codebook-Spalten, Bereiche und Anzahl fehlender Werte mit Python berechnet, [PRÜFEN] bei jeder geratenen Bedeutung, README-Abschnitte, obligatorische DataCite-Felder, eine Replikations-Checkliste. Wissen: die Ablagerichtlinien und Lizenzoptionen Ihres Repositorys. Schalten Sie Codeausführung bzw. Datenanalyse ein, wenn Ihr Werkzeug sie anbietet. Startprompts: „Codebook und README für diese Datei“ und „Replikations-Checkliste für meine Arbeit“. Für jeden Datensatz, den Sie ablegen, wiederverwendbar.

### Automatisierung / eigener Code

Binden Sie GitHub über seinen MCP-Server oder einen Connector an, sodass der Assistent Code, README und Issues Ihres Repositorys liest und das Replikationspaket daran prüft – ein einfacher eigener Assistent sieht nur Dateien, die Sie hochladen. Auf GitHub selbst: Ein GitHub-Actions-Workflow führt den Replikationscode bei jeder Änderung erneut aus, und die Zenodo-Integration archiviert jedes Release mit einem DOI. Prüfen Sie Datenschutz und Freigabe vorher mit Ihrer Hochschule.
