---
id: design-4
phase: design
order: 4
title: Ethikantrag & Datenmanagementplan
risk: 2
mode: Co-create
potential: 3
capabilities: generierung
routes: chat; files
data: D3; D5; D7
practice_data: D3; D5; D7
---

Strukturieren Sie Entwürfe entlang der Vorlagen Ihrer Einrichtung – die studienspezifische Argumentation zu Einwilligung, Risiken und Anonymisierung muss Ihre eigene sein.

## Problem

Ethikformulare und Datenmanagementpläne sind lang und ungewohnt; Sie verlieren Zeit damit herauszufinden, was jeder Abschnitt erwartet, bevor Sie über Einwilligung, Risiko, Datenschutz und Nachnutzung argumentieren können.

## Ergebnis

Ein Gerüst unter jeder Überschrift mit den Erwartungen der Gutachtenden und den Fragen, die Sie beantworten müssen – damit Ihre Zeit in die studienspezifische Argumentation zu Einwilligung, Risiko und Anonymisierung fließt, die bei Ihnen bleibt.

## Vorgehen

1. Fügen Sie die Überschriften der Vorlage und eine kurze Studienzusammenfassung ein
2. Bitten Sie je Überschrift um Erwartungen und Leitfragen
3. Schreiben Sie die Argumentation zu Einwilligung, Risiko und Anonymisierung selbst
4. Prüfen Sie den Umgang mit Daten gegen FAIR und Datenminimierung
5. Prüfen Sie jeden Abschnitt gegen offizielle Hinweise und Ihre Ethikstelle

## Konzepte

### Kernprinzipien der Ethikprüfung

Kommissionen achten auf wirksame informierte Einwilligung (Information, Einwilligungsfähigkeit, Freiwilligkeit, Widerrufsrecht), ein Schadensrisiko, das im Verhältnis zum Nutzen steht, Vertraulichkeit und besondere Sorgfalt bei vulnerablen Gruppen. Die studienspezifische Argumentation zu jedem Punkt muss Ihre eigene sein.

### DCC-Checkliste für einen Datenmanagementplan

Das Digital Curation Centre gruppiert die Fragen eines Datenmanagementplans (DMP) in Verwaltungsdaten, Datenerhebung, Dokumentation und Metadaten, Ethik und rechtliche Konformität, Speicherung und Sicherung, Auswahl und Langzeitarchivierung, Datenteilung sowie Verantwortlichkeiten und Ressourcen. Viele Vorlagen von Einrichtungen verwenden ähnliche Überschriften.

### FAIR-Prinzipien

Daten und Metadaten sollen auffindbar (Findable: persistenter Identifikator, reiche Metadaten), zugänglich (Accessible: über ein Standardprotokoll abrufbar), interoperabel (Interoperable: gemeinsame Formate und Vokabulare) und nachnutzbar (Reusable: klare Lizenz, Herkunft, Standards der Community) sein. FAIR bedeutet nicht offen.

### Datenminimierung, Pseudonymisierung und Anonymisierung

Nach der UK-DSGVO (UK GDPR) erheben Sie nur die personenbezogenen Daten, die Sie benötigen. Pseudonymisierte Daten (Identifikatoren ersetzt, Schlüssel aufbewahrt) bleiben personenbezogene Daten; nur Daten, die niemanden mehr identifizieren können, sind anonym. Legen Sie fest, welche Sie halten werden und wann.

## Literatur

- Wilkinson, M. D., Dumontier, M., Aalbersberg, I. J., et al. (2016). The FAIR Guiding Principles for scientific data management and stewardship. Scientific Data, 3, 160018. doi:10.1038/sdata.2016.18
- Michener, W. K. (2015). Ten simple rules for creating a good data management plan. PLOS Computational Biology, 11(10), e1004525. doi:10.1371/journal.pcbi.1004525
- Corti, L., Van den Eynden, V., Bishop, L., & Woollard, M. (2014). Managing and sharing research data: A guide to good practice. Sage.

## Übung

### Aufgabe

Sie entwerfen einen Datenmanagementplan für ein Projekt, das drei offene Datensätze nachnutzt. Sie lernen, ob der Assistent Lizenz- und Zitierbedingungen aus den Dateien entnimmt oder erfindet und ob er vorläufige, geschätzte und verlegte Messungen bemerkt.

### Prompt

```text
Ich entwerfe einen Datenmanagementplan für ein Promotionsprojekt, das drei offene Datensätze nachnutzt, angehängt: die monatliche HadCRUT5-CSV, die NOAA-Mauna-Loa-CO₂-CSV und die Datei der Met-Office-Station Oxford. Es sind keine menschlichen Teilnehmenden beteiligt. Verwenden Sie diese Überschriften: Datenerhebung; Dokumentation und Metadaten; Ethik und rechtliche Konformität; Speicherung und Sicherung; Auswahl und Langzeitarchivierung; Datenteilung; Verantwortlichkeiten. Geben Sie für jede Überschrift an, was Gutachtende üblicherweise erwarten, welche Fragen ich selbst beantworten muss, und ein kurzes Gerüst mit [Platzhaltern]. Entnehmen Sie Lizenz-, Zitier- und Datenqualitätsinformationen nur den Dateikopfzeilen und zitieren Sie sie; wo eine Datei keine Lizenz nennt, schreiben Sie „in Datei nicht angegeben – beim Anbieter prüfen“. Weisen Sie darauf hin, wie ich Versionen, vorläufige oder geschätzte Werte und Wechsel des Messstandorts festhalten soll. Nennen Sie keine institutionellen Regeln oder rechtlichen Anforderungen, wenn Sie sich nicht sicher sind.
```

### Prüfung

Die NOAA-Kopfzeile bittet um Zitierung und erwähnt mögliche Koautorschaft und den Standort Maunakea; die Oxford-Datei kennzeichnet geschätzte Werte mit * und Zeilen mit „Provisional“; die HadCRUT5-CSV nennt keine Lizenz, daher braucht jede Lizenz, die der Assistent nennt, eine Quelle.

## Mit eigenem Material

### Mitbringen

Die Abschnittsüberschriften des Ethikformulars Ihrer Einrichtung oder einer öffentlichen Vorlage für einen Datenmanagementplan, dazu eine kurze fiktive oder nicht sensible Studienzusammenfassung.

### Schritte

1. Fügen Sie die Überschriften der Vorlage und Ihre kurze Studienzusammenfassung ein.
2. Bitten Sie um einen Gerüstentwurf unter jeder Überschrift mit Leitfragen.
3. Bitten Sie ihn, die Argumentation zu Einwilligung, Risiko und Anonymisierung als Aufforderungen an Sie offen zu lassen.
4. Vergleichen Sie jeden Abschnitt mit den offiziellen Hinweisen zur Vorlage.

### Prompt

```text
Ich bereite [einen Ethikantrag oder einen Datenmanagementplan] für eine Studie zu [Thema] vor. Die Überschriften der Vorlage sind: [Überschriften]. Meine Studie in Kürze: [Zusammenfassung]. Geben Sie für jede Überschrift an: was Gutachtende üblicherweise erwarten, welche Fragen ich selbst beantworten muss, und ein kurzes Gerüst mit [Platzhaltern]. Schreiben Sie keine studienspezifische Argumentation zu Einwilligung, Risiken oder Anonymisierung; lassen Sie stattdessen klare Aufforderungen an mich. Nennen Sie keine institutionellen Regeln oder rechtlichen Anforderungen, wenn Sie sich nicht sicher sind; wenn Sie sich nicht sicher sind, sagen Sie das.
```

### Prüfung

Jeder Abschnitt entspricht den offiziellen Hinweisen zur Vorlage, es taucht keine institutionelle Regel und keine rechtliche Aussage (zum Beispiel zur UK-DSGVO) auf, die Sie nicht bestätigen können, und die Argumentation zu Einwilligung und Risiko ist Ihnen zum Schreiben überlassen.

## Technik

Fügen Sie die Überschriften der Vorlage in Ihren KI-Assistenten ein oder laden Sie das leere Formular Ihrer Einrichtung oder eine öffentliche DMPonline-Vorlage als Word oder PDF hoch; laden Sie nie echte Informationen zu Teilnehmenden hoch. In der Übung hängen Sie drei Übungsdateien an und prüfen, was der Assistent über sie behauptet.

## Stufen

### Chat

Führen Sie den Startprompt mit den Überschriften Ihrer Vorlage aus, oder mit den drei Übungsdateien. Bitten Sie im selben Chat um eine Liste jeder Aussage im Gerüst, die Sie noch mit Ihrer Ethikstelle, Bibliothek oder Ihrem Datenanbieter klären müssen.

### Projekt / Notebook

Fügen Sie das Ethikformular und die DMP-Vorlage Ihrer Einrichtung mit ihren Hinweisen hinzu, dazu Ihr Protokoll und die Lizenz- oder Dokumentationsseiten nachgenutzter Daten, gespeichert als PDF – in der Übungsversion D7 sowie D3 und D5 (speichern Sie sie vorher als .xlsx, wenn Ihr Werkzeug kein CSV akzeptiert). Fragen Sie, welche Fragen der Vorlage Ihre Entwürfe noch nicht beantworten. Sie kommen darauf zurück, wenn der Antrag Überarbeitungen und Anmerkungen der Gutachtenden durchläuft.

### Eigener Assistent

Nennen Sie ihn „Ethik- und DMP-Entwerfer“. Anweisungen: den Überschriften der Vorlage folgen, Erwartungen der Gutachtenden, offene Fragen und ein Gerüst mit [Platzhaltern] liefern, Lizenzen nur aus Quelldokumenten übernehmen und nie Argumentation zu Einwilligung, Risiko oder Anonymisierung schreiben oder Regeln nennen, die er nicht belegen kann. Wissen: die öffentlichen Vorlagen und Hinweisseiten Ihrer Einrichtung. Startprompt: „Entwerfen Sie das Gerüst für [Ethikantrag oder DMP]: [Studienzusammenfassung]“. Wiederverwendbar für jedes neue Projekt.
