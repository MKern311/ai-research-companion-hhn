---
name: datensatzsuche
description: "Finden Sie offene Sekundärdaten und Repositorien zur Forschungsfrage und beurteilen Sie ihre Eignung. Einsetzen bei: Datensatzsuche."
---

# Datensatzsuche

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/erhebung-4

## Ziel

Finden Sie offene Sekundärdaten und Repositorien zur Forschungsfrage und beurteilen Sie ihre Eignung.

Eine Auswahlliste verifizierter Datensätze mit Abdeckung, Analyseeinheit, Zugangsbedingungen, Lizenz und Lücken gegenüber Ihren Variablen – ein schnellerer Weg zu Daten oder ein klares Argument, eigene zu erheben.

## Wann einsetzen

Geeignete Sekundärdaten gibt es oft, aber sie liegen bei Statistikämtern, Archiven und Repositorien, die Sie nicht kennen – Sie finden sie, nachdem Sie eigene erhoben haben, oder übersehen Unterschiede bei Lizenz und Definitionen.

## Ablauf mit der Nutzerin oder dem Nutzer

Führen Sie durch diese Schritte. Wo ein Schritt „den Assistenten bitten“ nennt, sind Sie gemeint.

1. Schalten Sie die Websuche ein (sofern Ihr Tenant sie erlaubt) und fügen Sie dann den Startprompt mit Ihrer Forschungsfrage und Ihren Datenanforderungen ein.
2. Öffnen Sie jeden vorgeschlagenen Link und prüfen Sie Abdeckung, Zugangsbedingungen und letzte Aktualisierung.
3. Entfernen Sie jeden Datensatz, den Sie nicht finden oder dem Ihre zentralen Variablen fehlen.
4. Bitten Sie den Assistenten, die bestätigten Datensätze nach Passung zu Ihrer Frage zu ordnen.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.

## Typische Anfrage

```text
Ich promoviere in [Fach]. Meine Forschungsfrage lautet: [Frage]. Ich brauche Sekundärdaten, die [Land oder Region] und [Zeitraum] abdecken, auf der Ebene von [Individuen, Unternehmen, Regionen oder Texten], mit Variablen zu [zentrale Variablen]. Suchen Sie im Web nach offenen Datensätzen und Repositorien (zum Beispiel dem UK Data Service, nationalen Statistikämtern, Zenodo oder Fach-Repositorien). Geben Sie bis zu sechs Optionen als Tabelle an: Name, Anbieter, Link, Abdeckung, Zugangsbedingungen, Passung und was fehlt. Wenn Sie sich nicht sicher sind, ob ein Datensatz eine Variable enthält, sagen Sie das; erfinden Sie keine Datensätze.
```

## Prüfung

Jeder Link führt zu einer echten Datensatzseite, deren Dokumentation die Abdeckung und mindestens eine zentrale Variable bestätigt, die der Assistent behauptet hat.

## Grenzen

- Risiko: Öffentliches oder eigenes, nicht sensibles Material; Fehler sind leicht zu erkennen.

## Wichtige Konzepte

- **Eignung für den Verwendungszweck (Fitness for Use, Wang & Strong)** – Datenqualität wird relativ zu Ihrem Zweck in vier Kategorien beurteilt: intrinsisch (Genauigkeit, Herkunft), kontextuell (Relevanz, Abdeckung, Aktualität, Granularität), repräsentational (Format, Dokumentation) und Zugänglichkeit (Lizenz, Zugangsweg). Beurteilen Sie jede gegen Ihre Frage.
- **FAIR-Prinzipien** – Ein schneller Filter für die Nachnutzung: Ist der Datensatz auffindbar (Findable: persistenter Identifikator wie ein DOI), zugänglich (Accessible: klarer Zugangsweg), interoperabel (Interoperable: Standardformat) und nachnutzbar (Reusable: Lizenz, Herkunft, Dokumentation)? Ohne Lizenz dürfen Sie keine Nachnutzungsrechte annehmen.
- **Datasheets und Dokumentation** – Gute Datensätze dokumentieren Motivation, Zusammensetzung, Erhebungsprozess, Vorverarbeitung, vorgesehene Verwendungen, Verbreitung und Pflege (Gebru et al. 2021). Lesen Sie diese Dokumentation, das Codebuch oder das Benutzerhandbuch, bevor Sie einer Zusammenfassung des Assistenten vertrauen.
- **Einschränkungen von Sekundärdaten** – Nachgenutzte Daten wurden für einen anderen Zweck erhoben: Variablen können anders definiert sein, Bezugszeiträume und Einheiten können abweichen, und Versionen ändern sich. Halten Sie Version und Abrufdatum jeder verwendeten Datei fest.

## Wichtige Literatur

- Wang, R. Y., & Strong, D. M. (1996). Beyond accuracy: What data quality means to data consumers. Journal of Management Information Systems, 12(4), 5–33. https://doi.org/10.1080/07421222.1996.11518099
- Wilkinson, M. D., Dumontier, M., Aalbersberg, I. J., et al. (2016). The FAIR Guiding Principles for scientific data management and stewardship. Scientific Data, 3, 160018. https://doi.org/10.1038/sdata.2016.18
- Gebru, T., Morgenstern, J., Vecchione, B., Vaughan, J. W., Wallach, H., Daumé III, H., & Crawford, K. (2021). Datasheets for datasets. Communications of the ACM, 64(12), 86–92. https://doi.org/10.1145/3458723

## Hilfreiche Werkzeuge

OpenAlex · Perplexity
