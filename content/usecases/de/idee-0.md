---
id: idee-0
phase: idee
order: 0
title: Themen- und Trend-Scouting
risk: 1
mode: Assist
potential: 2
capabilities: recherche; analyse
routes: chat; files; connected; external
connect: OpenAlex; Litmaps
tools: Litmaps; Open Knowledge Maps; Research Rabbit
data: AB
practice_data: AB
---

Gruppieren Sie eine Liste aktueller Titel nach Themen, zählen Sie sie pro Jahr und erkennen Sie selten kombinierte Themen – eine erste Hypothese, die Sie mit einem bibliometrischen Werkzeug oder einer angebundenen Datenbank wie OpenAlex prüfen.

## Problem

Wohin sich ein Feld entwickelt, lässt sich aus verstreuter Lektüre nur unzuverlässig beurteilen: Wachsende Cluster und vernachlässigte Schnittstellen bleiben ohne Co-Word- oder Zitationsanalyse unsichtbar, und die wenigsten Forschenden führen eine solche Analyse früh durch.

## Ergebnis

Eine Thementabelle mit Jahreszählungen und eine Liste selten kombinierter Themen – eine Hypothese zu Trends und Lücken, die Sie mit einer bibliometrischen Abfrage im großen Maßstab prüfen.

## Vorgehen

1. Exportieren Sie 15–20 aktuelle Titel mit Jahreszahlen aus einer Datenbank
2. Bitten Sie Ihren KI-Assistenten, sie nach Themen zu gruppieren und pro Jahr zu zählen
3. Listen Sie Themenpaare auf, die selten gemeinsam in einem Paper vorkommen
4. Prüfen Sie eine vielversprechende Schnittstelle selbst mit einer größeren OpenAlex-Suche

## Konzepte

### Co-Word-Analyse

Bildet ein Feld über Begriffe ab, die gemeinsam in Titeln, Abstracts oder Schlagwörtern auftreten; häufige Paare bilden Themen, und die Zählung pro Jahr zeigt Wachstum. Eine bibliometrische Technik, die Hunderte von Datensätzen benötigt, nicht eine Handvoll.

### Kozitation und bibliografische Kopplung

Kozitation verbindet zwei Arbeiten, die spätere Arbeiten gemeinsam zitieren, und zeigt die intellektuelle Basis eines Feldes; bibliografische Kopplung verbindet Arbeiten mit gemeinsamen Referenzen und eignet sich für aktuelle Forschungsfronten. Beides sind etablierte Methoden des Science Mapping.

### Swansons ABC-Modell

Literaturbasierte Entdeckung: Ist Literatur A mit Konzept B verknüpft und B mit C, werden A und C aber nie gemeinsam untersucht, ist A–C eine mögliche Lücke. Eine Heuristik für unterforschte Schnittstellen, kein Beleg dafür, dass sie relevant sind.

### Bibliometrischer Arbeitsablauf (Donthu et al.)

Vier Schritte: Ziele und Umfang festlegen, Techniken wählen (Performance-Analyse, Science Mapping), Daten aus einer dokumentierten Datenbankabfrage erheben, dann die Analyse durchführen und berichten. Zu den Werkzeugen zählen VOSviewer, Bibliometrix und OpenAlex.

## Literatur

- Zupic, I., & Čater, T. (2015). Bibliometric methods in management and organization. Organizational Research Methods, 18(3), 429–472. doi:10.1177/1094428114562629
- Donthu, N., Kumar, S., Mukherjee, D., Pandey, N., & Lim, W. M. (2021). How to conduct a bibliometric analysis: An overview and guidelines. Journal of Business Research, 133, 285–296. doi:10.1016/j.jbusres.2021.04.070
- Swanson, D. R. (1986). Undiscovered public knowledge. The Library Quarterly, 56(2), 103–118. doi:10.1086/601720

## Übung

### Aufgabe

Hängen Sie die Abstract-Datei der 12 Übungs-Paper an und lassen Sie Ihren KI-Assistenten sie nach Themen gruppieren und pro Jahr zählen. Sie erfahren, ob er korrekt zählt und wie bereitwillig er „Trends“ aus einer Stichprobe meldet, die viel zu klein ist, um welche zu zeigen.

### Prompt

```text
Die angehängte Textdatei listet 12 Open-Access-Paper zu Wetter und Klimawandel, jeweils mit ID, Zitat, Titel und Abstract. Gruppieren Sie die Paper anhand ihrer Titel und Abstracts in vier bis sechs Themen. Zeigen Sie eine Tabelle: Thema, Paper zu diesem Thema (ID, Erstautorin bzw. Erstautor und Jahr), Anzahl der Paper pro Erscheinungsjahr. Nennen Sie dann zwei oder drei Kombinationen von Themen, die selten gemeinsam in einem Paper vorkommen und möglicherweise unterforscht sind. Sagen Sie deutlich, was eine Liste von 12 Papern über Trends in diesem Feld zeigen kann und was nicht. Fügen Sie keine Paper hinzu, die nicht in der Datei stehen.
```

### Prüfung

Zählen Sie die Jahre selbst: 2019 – 1, 2020 – 3, 2021 – 2, 2023 – 3, 2024 – 1, 2025 – 2 (die Datei führt Shi et al. als Preprint von 2021). Jedes Paper steht in der Tabelle, und der Assistent hält fest, dass 12 Paper keinen Trend zeigen können.

## Mit eigenem Material

### Mitbringen

Titel und Jahre von 15 bis 20 aktuellen Papern aus Ihrem Fach, kopiert aus einer Datenbank oder einer Google-Scholar-Trefferliste.

### Schritte

1. Fügen Sie die Liste mit Titeln und Jahren in Ihren KI-Assistenten ein.
2. Bitten Sie ihn, die Paper nach Themen zu gruppieren und pro Jahr zu zählen.
3. Fragen Sie, welche Themenpaare selten im selben Paper vorkommen.
4. Vergleichen Sie die Themen mit Ihrem eigenen Eindruck vom Feld und notieren Sie Überraschungen.

### Prompt

```text
Ich bin Promovierende bzw. Promovierender in [Fachgebiet] und suche wachsende Themen und Lücken. Unten stehen [Anzahl] Paper-Titel mit ihren Erscheinungsjahren, kopiert aus [Quelle]. Gruppieren Sie sie in vier bis sechs Themen. Zeigen Sie eine Tabelle: Thema, Paper-Titel zu diesem Thema, Anzahl der Paper pro Jahr. Nennen Sie dann zwei oder drei Kombinationen von Themen, die selten gemeinsam vorkommen und möglicherweise unterforscht sind. Stützen Sie sich ausschließlich auf die Liste, die ich Ihnen gebe, und sagen Sie deutlich, dass eine kleine Liste keine echten Trends zeigen kann.

[Titel und Jahre einfügen]
```

### Prüfung

Wählen Sie zwei Themen und prüfen Sie, ob jeder zugeordnete Titel wirklich dorthin gehört und ob die Zählungen pro Jahr zu Ihrer Liste passen.

### Grenze

Der Assistent kann keine Publikations- oder Zitationsdatenbanken auswerten; geprüft wird hier das Clustern einer kleinen, von Ihnen gelieferten Liste, keine bibliometrische Trendanalyse.

## Technik

Fügen Sie Titel und Jahre in Ihren KI-Assistenten ein oder hängen Sie sie als Datei an, um eine erste Gruppierung zu erhalten. Ist OpenAlex angebunden (sofern Ihr Werkzeug und Ihre Hochschule dies erlauben), kann der Assistent Publikationen pro Thema und Jahr über die gesamte Datenbank zählen; Litmaps ergänzt Zitationskarten. Für die Übung hängen Sie die Abstract-Datei mit den 12 Papern an.

## Stufen

### Chat

Hängen Sie die Abstract-Datei (AB) an und führen Sie den Startprompt in einem Chat aus. Bitten Sie den Assistenten im selben Chat, die Paper pro Jahr aus der Datei neu zu zählen und jedes Paper zu nennen, das in seiner Tabelle fehlt.

### Projekt / Notebook

Fügen Sie die Abstract-Datei (AB) hinzu – sie ist eine .txt-Datei, die die meisten Werkzeuge als Quelle akzeptieren –, oder für Ihr eigenes Fach aus einer Datenbank exportierte Titellisten, gespeichert als .xlsx oder .txt. Bitten Sie um Themen und Jahreszählungen über alle Listen hinweg. Je nach Werkzeug führt der Arbeitsbereich keinen Code aus, zählen Sie die Zahlen dann selbst nach. Mit jedem Semester können Sie einen neuen Export ergänzen und sehen, ob die Themen Bestand haben.

### Eigener Assistent

Nennen Sie ihn „Themen-Scout“. Anweisungen: vier bis sechs Themen, eine Tabelle aus Thema, Paper und Jahr, selten kombinierte Themen, eine Aussage dazu, was die Stichprobe zeigen kann und was nicht, und niemals Paper hinzufügen, die nicht im Upload stehen. Schalten Sie Codeausführung bzw. Datenanalyse ein, wenn Ihr Werkzeug sie anbietet, damit er Paper pro Jahr zählt und grafisch darstellt. Startprompt: „Clustere diese Titelliste und stelle die Paper pro Jahr grafisch dar.“ Wiederverwendbar für jeden neuen Export.

### Automatisierung / eigener Code

Binden Sie den OpenAlex-MCP-Server an, damit der Assistent Titel, Jahre und Themen für eine ganze Feldabfrage abruft und im großen Maßstab zählt, statt mit einer eingefügten Liste zu arbeiten. Ein einfacher Chat-Assistent kann keine externe Datenbank erreichen. Auf GitHub: Ein Python-Skript fragt die OpenAlex-API für das gesamte Feld ab und zählt die Themen pro Jahr – versionierter Code macht die Zählungen reproduzierbar. Prüfen Sie Datenschutz und Freigabe vorher mit Ihrer Hochschule.
