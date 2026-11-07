---
name: metadaten-fair-daten-and-replikation
description: "Lassen Sie sich Metadaten, Codebooks und README-Dateien für Datenpublikationen vorschlagen, stellen Sie ein Replikationspaket zusammen und prüfen Sie, ob jede Zahl der Arbeit aus dem Code reproduzierbar ist. Einsetzen bei: Metadaten, FAIR-Daten & Replikation."
---

# Metadaten, FAIR-Daten & Replikation

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/querschnitt-4

## Ziel

Lassen Sie sich Metadaten, Codebooks und README-Dateien für Datenpublikationen vorschlagen, stellen Sie ein Replikationspaket zusammen und prüfen Sie, ob jede Zahl der Arbeit aus dem Code reproduzierbar ist.

Ein aus der Datei berechnetes Codebook, ein Entwurf für README und Repository-Metadaten sowie eine Replikations-Checkliste – Daten, die andere finden und nachnutzen können, und Ergebnisse, deren Reproduzierbarkeit Sie belegen können.

## Wann einsetzen

Datenablage und Replikationspakete kommen zuletzt, wenn Details vergessen sind; Codebooks und READMEs werden hastig geschrieben, Flags bleiben undokumentiert, und Zahlen der Arbeit lassen sich womöglich nicht reproduzieren.

## Vorgehen

1. Hängen Sie den Datensatz an und sagen Sie, was er enthält und wie er erhoben wurde.
2. Bitten Sie um ein Codebook mit berechneten Bereichen und fehlenden Werten.
3. Bitten Sie um ein README und die wichtigsten Repository-Metadatenfelder.
4. Prüfen Sie Bereiche und Anzahl fehlender Werte für zwei Spalten in der Datei.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.
- Anweisungen: Codebook-Spalten, Bereiche und Anzahl fehlender Werte mit Python berechnet, [PRÜFEN] bei jeder geratenen Bedeutung, README-Abschnitte, obligatorische DataCite-Felder, eine Replikations-Checkliste. Wissen: die Ablagerichtlinien und Lizenzoptionen Ihres Repositorys. Schalten Sie Codeausführung bzw. Datenanalyse ein, wenn Ihr Werkzeug sie anbietet. Startprompts: „Codebook und README für diese Datei“ und „Replikations-Checkliste für meine Arbeit“. Für jeden Datensatz, den Sie ablegen, wiederverwendbar.

## Startprompt

```text
Ich bereite einen Datensatz für die Ablage in [Repository] vor. Angehängt ist [Dateiname]; er enthält [kurze Beschreibung und Art der Erhebung]. Untersuche die Datei mit Python und erstelle dann eine Codebook-Tabelle: Variablenname, Beschreibung, Typ, Einheit, Bereich oder erlaubte Werte, Anzahl fehlender Werte, Code für fehlende Werte. Entwirf dann ein README mit: Titel, Urhebern [Platzhalter], Beschreibung, Methoden, Dateiliste, Variablen, Lizenz [Platzhalter], Zitierweise, Kontakt. Markiere jede Variablenbedeutung, die du geraten hast, mit [PRÜFEN]. Liste dann die zentralen Metadatenfelder auf, die das Repository voraussichtlich abfragt. Gib zum Schluss eine Checkliste für ein Replikationspaket (Daten, Code, Softwareversionen, Ausführungsreihenfolge, erwartete Ergebnisse) und sage, wie ich prüfen kann, dass jede Zahl in meiner Arbeit vom Code reproduziert wird.
```

## Prüfung

Für zwei Spalten stimmen Bereiche und Anzahl fehlender Werte im Codebook mit der Datei überein, und jede vom Assistenten geratene Variablenbedeutung ist mit [PRÜFEN] markiert.

## Grenzen

- Risiko: Eigene unveröffentlichte Entwürfe, Gutachten oder Inhalte Dritter.

## Wichtige Konzepte

- **FAIR-Prinzipien** – Wilkinson et al. (2016): Daten sollen auffindbar (persistenter Identifikator, reiche Metadaten), zugänglich (über Standardprotokolle abrufbar), interoperabel (gemeinsame Vokabulare und Formate) und wiederverwendbar (klare Lizenz, Herkunft, Community-Standards) sein. FAIR verlangt nicht, dass Daten offen sind.
- **DataCite-Metadatenschema (DataCite Metadata Schema)** – Der Metadatenstandard hinter den meisten Datensatz-DOIs. Pflichtangaben sind Identifikator, Urheber, Titel, Herausgeber, Veröffentlichungsjahr und Ressourcentyp; empfohlene Angaben wie Beschreibung, Schlagwort und Rechte erleichtern Auffindbarkeit und Nachnutzung.
- **Codebook (Datenwörterbuch)** – Es dokumentiert jede Variable: Name, Bezeichnung, Typ, Einheit, gültigen Bereich oder Codes, Codes und Flags für fehlende Werte sowie die Herleitung. Die Data Documentation Initiative (DDI) stellt einen Standard für Sozial- und Befragungsdaten bereit.
- **Reproduzierbarkeit und Replizierbarkeit (Reproducibility and replicability)** – Die National Academies (2019): Reproduzierbarkeit heißt, aus denselben Daten, demselben Code und denselben Bedingungen konsistente Ergebnisse zu erhalten; Replizierbarkeit heißt konsistente Ergebnisse über Studien hinweg, die neue Daten erheben. Ein Replikationspaket sichert die Reproduzierbarkeit.

## Wichtige Literatur

- Wilkinson, M. D., Dumontier, M., Aalbersberg, I. J., Appleton, G., Axton, M., Baak, A., … Mons, B. (2016). The FAIR Guiding Principles for scientific data management and stewardship. Scientific Data, 3, 160018. https://doi.org/10.1038/sdata.2016.18
- National Academies of Sciences, Engineering, and Medicine. (2019). Reproducibility and replicability in science. The National Academies Press. https://doi.org/10.17226/25303

## Hilfreiche Werkzeuge

GitHub (repositories) · GitHub Copilot
