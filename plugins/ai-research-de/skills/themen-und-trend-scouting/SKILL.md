---
name: themen-und-trend-scouting
description: "Gruppieren Sie eine Liste aktueller Titel nach Themen, zählen Sie sie pro Jahr und erkennen Sie selten kombinierte Themen – eine erste Hypothese, die Sie mit einem bibliometrischen Werkzeug oder einer angebundenen Datenbank wie OpenAlex prüfen. Einsetzen bei: Themen- und Trend-Scouting."
---

# Themen- und Trend-Scouting

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/idee-0

## Ziel

Gruppieren Sie eine Liste aktueller Titel nach Themen, zählen Sie sie pro Jahr und erkennen Sie selten kombinierte Themen – eine erste Hypothese, die Sie mit einem bibliometrischen Werkzeug oder einer angebundenen Datenbank wie OpenAlex prüfen.

Eine Thementabelle mit Jahreszählungen und eine Liste selten kombinierter Themen – eine Hypothese zu Trends und Lücken, die Sie mit einer bibliometrischen Abfrage im großen Maßstab prüfen.

## Wann einsetzen

Wohin sich ein Feld entwickelt, lässt sich aus verstreuter Lektüre nur unzuverlässig beurteilen: Wachsende Cluster und vernachlässigte Schnittstellen bleiben ohne Co-Word- oder Zitationsanalyse unsichtbar, und die wenigsten Forschenden führen eine solche Analyse früh durch.

## Ablauf mit der Nutzerin oder dem Nutzer

Führen Sie durch diese Schritte. Wo ein Schritt „den Assistenten bitten“ nennt, sind Sie gemeint.

1. Fügen Sie die Liste mit Titeln und Jahren in Ihren KI-Assistenten ein.
2. Bitten Sie ihn, die Paper nach Themen zu gruppieren und pro Jahr zu zählen.
3. Fragen Sie, welche Themenpaare selten im selben Paper vorkommen.
4. Vergleichen Sie die Themen mit Ihrem eigenen Eindruck vom Feld und notieren Sie Überraschungen.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.

## Typische Anfrage

```text
Ich bin Promovierende bzw. Promovierender in [Fachgebiet] und suche wachsende Themen und Lücken. Unten stehen [Anzahl] Paper-Titel mit ihren Erscheinungsjahren, kopiert aus [Quelle]. Gruppieren Sie sie in vier bis sechs Themen. Zeigen Sie eine Tabelle: Thema, Paper-Titel zu diesem Thema, Anzahl der Paper pro Jahr. Nennen Sie dann zwei oder drei Kombinationen von Themen, die selten gemeinsam vorkommen und möglicherweise unterforscht sind. Stützen Sie sich ausschließlich auf die Liste, die ich Ihnen gebe, und sagen Sie deutlich, dass eine kleine Liste keine echten Trends zeigen kann.

[Titel und Jahre einfügen]
```

## Prüfung

Wählen Sie zwei Themen und prüfen Sie, ob jeder zugeordnete Titel wirklich dorthin gehört und ob die Zählungen pro Jahr zu Ihrer Liste passen.

## Grenzen

- Der Assistent kann keine Publikations- oder Zitationsdatenbanken auswerten; geprüft wird hier das Clustern einer kleinen, von Ihnen gelieferten Liste, keine bibliometrische Trendanalyse.
- Risiko: Öffentliches oder eigenes, nicht sensibles Material; Fehler sind leicht zu erkennen.

## Wichtige Konzepte

- **Co-Word-Analyse** – Bildet ein Feld über Begriffe ab, die gemeinsam in Titeln, Abstracts oder Schlagwörtern auftreten; häufige Paare bilden Themen, und die Zählung pro Jahr zeigt Wachstum. Eine bibliometrische Technik, die Hunderte von Datensätzen benötigt, nicht eine Handvoll.
- **Kozitation und bibliografische Kopplung** – Kozitation verbindet zwei Arbeiten, die spätere Arbeiten gemeinsam zitieren, und zeigt die intellektuelle Basis eines Feldes; bibliografische Kopplung verbindet Arbeiten mit gemeinsamen Referenzen und eignet sich für aktuelle Forschungsfronten. Beides sind etablierte Methoden des Science Mapping.
- **Swansons ABC-Modell** – Literaturbasierte Entdeckung: Ist Literatur A mit Konzept B verknüpft und B mit C, werden A und C aber nie gemeinsam untersucht, ist A–C eine mögliche Lücke. Eine Heuristik für unterforschte Schnittstellen, kein Beleg dafür, dass sie relevant sind.
- **Bibliometrischer Arbeitsablauf (Donthu et al.)** – Vier Schritte: Ziele und Umfang festlegen, Techniken wählen (Performance-Analyse, Science Mapping), Daten aus einer dokumentierten Datenbankabfrage erheben, dann die Analyse durchführen und berichten. Zu den Werkzeugen zählen VOSviewer, Bibliometrix und OpenAlex.

## Wichtige Literatur

- Zupic, I., & Čater, T. (2015). Bibliometric methods in management and organization. Organizational Research Methods, 18(3), 429–472. https://doi.org/10.1177/1094428114562629
- Donthu, N., Kumar, S., Mukherjee, D., Pandey, N., & Lim, W. M. (2021). How to conduct a bibliometric analysis: An overview and guidelines. Journal of Business Research, 133, 285–296. https://doi.org/10.1016/j.jbusres.2021.04.070
- Swanson, D. R. (1986). Undiscovered public knowledge. The Library Quarterly, 56(2), 103–118. https://doi.org/10.1086/601720

## Hilfreiche Werkzeuge

OpenAlex · Litmaps · Open Knowledge Maps · Research Rabbit
