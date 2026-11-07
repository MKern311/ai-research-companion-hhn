---
id: erhebung-4
phase: erhebung
order: 4
title: Datensatzsuche
risk: 1
mode: Assist
potential: 2
capabilities: recherche
routes: chat; files; connected
connect: OpenAlex
tools: Perplexity
data: D9; D1; D2; D3; D4
practice_data: D9
---

Finden Sie offene Sekundärdaten und Repositorien zur Forschungsfrage und beurteilen Sie ihre Eignung.

## Problem

Geeignete Sekundärdaten gibt es oft, aber sie liegen bei Statistikämtern, Archiven und Repositorien, die Sie nicht kennen – Sie finden sie, nachdem Sie eigene erhoben haben, oder übersehen Unterschiede bei Lizenz und Definitionen.

## Ergebnis

Eine Auswahlliste verifizierter Datensätze mit Abdeckung, Analyseeinheit, Zugangsbedingungen, Lizenz und Lücken gegenüber Ihren Variablen – ein schnellerer Weg zu Daten oder ein klares Argument, eigene zu erheben.

## Vorgehen

1. Legen Sie Region, Zeitraum, Analyseeinheit und zentrale Variablen fest
2. Bitten Sie den Assistenten in einer Tabelle um mögliche Datensätze
3. Öffnen Sie jeden Link; bestätigen Sie Variablen, Lizenz und Version
4. Lesen Sie die Dokumentation, um die Eignung für Ihren Zweck zu beurteilen
5. Streichen Sie nicht verifizierbare Einträge und ordnen Sie den Rest nach Passung

## Konzepte

### Eignung für den Verwendungszweck (Fitness for Use, Wang & Strong)

Datenqualität wird relativ zu Ihrem Zweck in vier Kategorien beurteilt: intrinsisch (Genauigkeit, Herkunft), kontextuell (Relevanz, Abdeckung, Aktualität, Granularität), repräsentational (Format, Dokumentation) und Zugänglichkeit (Lizenz, Zugangsweg). Beurteilen Sie jede gegen Ihre Frage.

### FAIR-Prinzipien

Ein schneller Filter für die Nachnutzung: Ist der Datensatz auffindbar (Findable: persistenter Identifikator wie ein DOI), zugänglich (Accessible: klarer Zugangsweg), interoperabel (Interoperable: Standardformat) und nachnutzbar (Reusable: Lizenz, Herkunft, Dokumentation)? Ohne Lizenz dürfen Sie keine Nachnutzungsrechte annehmen.

### Datasheets und Dokumentation

Gute Datensätze dokumentieren Motivation, Zusammensetzung, Erhebungsprozess, Vorverarbeitung, vorgesehene Verwendungen, Verbreitung und Pflege (Gebru et al. 2021). Lesen Sie diese Dokumentation, das Codebuch oder das Benutzerhandbuch, bevor Sie einer Zusammenfassung des Assistenten vertrauen.

### Einschränkungen von Sekundärdaten

Nachgenutzte Daten wurden für einen anderen Zweck erhoben: Variablen können anders definiert sein, Bezugszeiträume und Einheiten können abweichen, und Versionen ändern sich. Halten Sie Version und Abrufdatum jeder verwendeten Datei fest.

## Literatur

- Wang, R. Y., & Strong, D. M. (1996). Beyond accuracy: What data quality means to data consumers. Journal of Management Information Systems, 12(4), 5–33. doi:10.1080/07421222.1996.11518099
- Wilkinson, M. D., Dumontier, M., Aalbersberg, I. J., et al. (2016). The FAIR Guiding Principles for scientific data management and stewardship. Scientific Data, 3, 160018. doi:10.1038/sdata.2016.18
- Gebru, T., Morgenstern, J., Vecchione, B., Vaughan, J. W., Wallach, H., Daumé III, H., & Crawford, K. (2021). Datasheets for datasets. Communications of the ACM, 64(12), 86–92. doi:10.1145/3458723

## Übung

### Aufgabe

Sie bitten Ihren KI-Assistenten, offene globale und zentralenglische Temperaturdatensätze zu finden, und vergleichen seine Liste dann mit den Beschreibungen von D1–D4 und D9 im Tab „Übungsdaten“, den Sie geöffnet halten, aber nicht anhängen. Sie lernen, ob er die wichtigsten Datenreihen findet und ihre Basisperioden und Lizenzen korrekt nennt oder erfindet.

### Prompt

```text
Ich promoviere. Forschungsfrage: Wie haben sich die jährlichen globalen und zentralenglischen Temperaturen seit dem späten 19. Jahrhundert verändert, und wie stark unterscheiden sich die wichtigsten globalen Datenreihen? Ich brauche offene monatliche oder tägliche Daten, global und für Zentralengland, ab 1880 oder früher. Suche im Web nach geeigneten Datensätzen. Gib bis zu sechs Optionen als Tabelle an: Name, Anbieter, Link, abgedeckter Zeitraum, zeitliche Auflösung, Basisperiode der Anomalien, Lizenz, Passung und was fehlt. Wenn du dir bei einer Basisperiode oder Lizenz nicht sicher bist, sage das; erfinde keine Datensätze. Lies dann die Kopfzeile der angehängten täglichen ERA5-CSV und sage, ob sie die Basisperiode bestätigt, die du für ERA5 genannt hast.
```

### Prüfung

Vergleichen Sie mit den Beschreibungen des Übungspakets im Tab „Übungsdaten“: HadCRUT5 (D3) Anomalien relativ zu 1961–1990, GISTEMP (D4) 1951–1980, ERA5 (D9) 1991–2020 – die einzige dieser Basisperioden, die in einer Dateikopfzeile steht; HadCET (D1 täglich ab 1878, D2 monatlich ab 1659) liefert tatsächliche Temperaturen, keine Anomalien, unter der Open Government Licence v3; Berkeley-Earth-Daten sind CC BY-NC (siehe „Not included“). Öffnen Sie jeden Link, den der Assistent nennt.

## Mit eigenem Material

### Mitbringen

Ihre Forschungsfrage und eine Notiz zu den Daten, die Sie brauchen: Land, Zeitraum, Analyseeinheit und zentrale Variablen.

### Schritte

1. Schalten Sie die Websuche ein (sofern Ihr Tenant sie erlaubt) und fügen Sie dann den Startprompt mit Ihrer Forschungsfrage und Ihren Datenanforderungen ein.
2. Öffnen Sie jeden vorgeschlagenen Link und prüfen Sie Abdeckung, Zugangsbedingungen und letzte Aktualisierung.
3. Entfernen Sie jeden Datensatz, den Sie nicht finden oder dem Ihre zentralen Variablen fehlen.
4. Bitten Sie den Assistenten, die bestätigten Datensätze nach Passung zu Ihrer Frage zu ordnen.

### Prompt

```text
Ich promoviere in [Fach]. Meine Forschungsfrage lautet: [Frage]. Ich brauche Sekundärdaten, die [Land oder Region] und [Zeitraum] abdecken, auf der Ebene von [Individuen, Unternehmen, Regionen oder Texten], mit Variablen zu [zentrale Variablen]. Suche im Web nach offenen Datensätzen und Repositorien (zum Beispiel dem UK Data Service, nationalen Statistikämtern, Zenodo oder Fach-Repositorien). Gib bis zu sechs Optionen als Tabelle an: Name, Anbieter, Link, Abdeckung, Zugangsbedingungen, Passung und was fehlt. Wenn du dir nicht sicher bist, ob ein Datensatz eine Variable enthält, sage das; erfinde keine Datensätze.
```

### Prüfung

Jeder Link führt zu einer echten Datensatzseite, deren Dokumentation die Abdeckung und mindestens eine zentrale Variable bestätigt, die der Assistent behauptet hat.

## Technik

Ihr KI-Assistent listet mögliche Datensätze auf (die Websuche hängt von Ihrem Tool und Ihren Einstellungen ab); Sie öffnen jeden Link und lesen die Dokumentation. Üben Sie an Temperaturreihen: Findet er HadCRUT5, GISTEMP, ERA5 und Central England Temperature? Die Suche in OpenAlex-Datensatzeinträgen braucht einen Konnektor (MCP) oder ein Skript, siehe Stufe 4.

## Stufen

### Chat

Führen Sie den Startprompt mit eingeschalteter Websuche aus, mit der ERA5-Datei oder Ihrem eigenen Datenbedarf. Bitten Sie im selben Chat darum, die Datensätze, deren Links Sie bestätigt haben, nach Passung zu ordnen und aufzulisten, was jedem für Ihre Variablen fehlt.

### Projekt / Notebook

Speichern Sie die Dokumentationsseiten oder Codebücher der möglichen Datensätze als PDF und fügen Sie sie mit Ihrer Variablenliste hinzu – für die Übungsversion D9 (speichern Sie sie vorher als .xlsx, wenn Ihr Tool kein CSV akzeptiert). Fragen Sie, welcher Datensatz welche Variable, welchen Zeitraum und welche Einheit abdeckt, unter welcher Lizenz. Je nach Tool antwortet das Projekt nur aus diesen Dokumenten, sodass jede Aussage aus der Dokumentation stammt, nicht aus dem Web.

### Eigener Assistent

Nennen Sie ihn „Daten-Scout“. Anweisungen: die feste Tabelle (Name, Anbieter, Link, Abdeckung, Analyseeinheit, Zugang, Lizenz, Passung, Lücken), „sage, wenn du dir nicht sicher bist“ und „erfinde nie Datensätze“. Wissen: die öffentlichen Websites von Repositorien, denen Sie vertrauen, etwa der UK Data Service oder das Archiv Ihres Fachs. Startprompt: „Finde offene Daten für: [Frage, Region, Zeitraum, Variablen]“. Wiederverwendbar für jede neue Frage; Sie öffnen weiterhin jeden Link.

### Automatisierung / eigener Code

Fügen Sie den MCP-Server von OpenAlex einem eigenen Assistenten oder Workflow hinzu, damit der Assistent einen wissenschaftlichen Katalog nach Datensätzen und den Arbeiten durchsucht, die sie genutzt haben, statt sich auf die allgemeine Websuche zu verlassen. Dafür braucht es ein Tool, das MCP-Konnektoren unterstützt. Auf GitHub: Ein Skript durchsucht die OpenAlex-API nach Arbeiten, die einen Datensatz nutzen, und die DataCite- oder Zenodo-API nach den Datensatzeinträgen selbst. Prüfen Sie Datenschutz und Freigabe vorher mit Ihrer Hochschule.
