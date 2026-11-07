---
id: idee-5
phase: idee
order: 5
title: Forschungslücken kartieren
risk: 2
mode: Co-create
potential: 3
capabilities: synthese; analyse
routes: files; chat; external
tools: Elicit; scite
repos: kd-literature-review
data: AB
practice_data: AB
---

Sortieren Sie die Lücken, die eine Literatur hinterlässt, nach Typen – empirisch, methodisch, theoretisch, praktisch oder widersprüchliche Befunde – und belegen Sie jede mit den Studien, die sie zeigen.

## Problem

Jedes Kapitel „Future Research“ behauptet eine Lücke, aber einen Stapel Studien in eine typisierte, belastbare Lücke zu verwandeln, die Ihr Projekt rechtfertigt, ist schwer; genannte Lücken bleiben oft vage.

## Ergebnis

Eine Tabelle der Lücken nach Typ, jeweils verknüpft mit den Studien und Textstellen, die sie zeigen, und als genannt oder abgeleitet gekennzeichnet, dazu eine Einschätzung, wie gut Ihre Frage eine davon füllt.

## Vorgehen

1. Hängen Sie fünf bis acht Studien und Ihre Entwurfsfrage an
2. Bitten Sie um Lücken nach Typ, jeweils mit belegenden Textstellen
3. Trennen Sie Lücken, die die Autorinnen und Autoren nennen, von abgeleiteten Lücken
4. Fragen Sie, wie überzeugend Ihre Frage eine Lücke adressiert
5. Prüfen Sie zwei zitierte Textstellen an den Originalpapern

## Konzepte

### Lückentypologie

Lücken können empirisch (fehlende Populationen, Settings, Zeiträume), methodisch (fehlende Designs oder Datenquellen), theoretisch (unerklärte Phänomene), praktisch (fehlende Evidenz zur Umsetzung) oder widersprüchliche Befunde sein. Typologien unterscheiden sich zwischen Autorinnen und Autoren; die Benennung des Typs macht eine Lücke prüfbar.

### Gap-Spotting versus Problematisierung

Sandberg und Alvesson (2011) zeigen, dass die meisten Fragen aus Gap-Spotting stammen – dem Erkennen von Verwirrung, Vernachlässigung oder Anwendungslücken. Problematisierung hinterfragt stattdessen die Annahmen bestehender Arbeiten und bringt tendenziell einflussreichere Fragen hervor.

### Gründe für eine Lücke (Robinson et al.)

Evidenz kann unzureichend oder ungenau, verzerrt, widersprüchlich oder nicht die passende Information für die Frage sein. Die Nennung des Grundes zeigt, welche Art von Studie die Lücke schließen würde.

### Abwesenheit versus Evidenz der Abwesenheit

Ein Thema, das in fünf Papern fehlt, ist noch keine Lücke im Feld: Eine Lücke braucht eine systematische Suche oder ausdrückliche Aussagen in der Literatur. Halten Sie Lücken, die die Autorinnen und Autoren nennen, von Lücken getrennt, die Sie ableiten.

## Literatur

- Sandberg, J., & Alvesson, M. (2011). Ways of constructing research questions: Gap-spotting or problematization? Organization, 18(1), 23–44. doi:10.1177/1350508410372151
- Robinson, K. A., Saldanha, I. J., & McKoy, N. A. (2011). Development of a framework to identify research gaps from systematic reviews. Journal of Clinical Epidemiology, 64(12), 1325–1330. doi:10.1016/j.jclinepi.2011.06.009

## Übung

### Aufgabe

Kartieren Sie die Lücken, die sechs Abstracts zu Hitze und Dürre gegenüber einer Übungsfrage hinterlassen. Sie erfahren, ob Ihr KI-Assistent jede Lücke an eine echte Textstelle bindet oder Lücken aus dem erfindet, was die Abstracts schlicht nicht erwähnen.

### Prompt

```text
Die angehängte Textdatei enthält die Abstracts von 12 Papern. Verwenden Sie ausschließlich diese sechs Datensätze: B2, B3, C1, C3, C4 und C5 (Christidis et al. 2020 und 2023, Vautard et al. 2023, Perkins-Kirkpatrick und Lewis 2020, Zachariah et al. 2023, Schumacher et al. 2024). Identifizieren Sie die Forschungslücken, die sie hinterlassen. Sortieren Sie sie nach Typ: empirisch, methodisch, theoretisch, praktisch und widersprüchliche Befunde. Zeigen Sie eine Tabelle: Lückentyp, die Lücke in einem Satz, Datensätze, die sie zeigen, die belegende Textstelle wortwörtlich zitiert, und ob die Autorinnen und Autoren die Lücke selbst nennen oder Sie sie ableiten. Beurteilen Sie dann, wie überzeugend diese Entwurfsfrage eine Lücke adressiert: „Unterschätzen Klimamodelle den beobachteten Trend bei sommerlichen Hitzeextremen in Großbritannien, und wie wirkt sich das auf Attributionsschätzungen für heiße Tage in Großbritannien aus?“ Fügen Sie keine Studien hinzu, die ich Ihnen nicht gegeben habe.
```

### Prüfung

Vautard et al. (2023) sollten eine methodische oder widersprüchliche Lücke stützen: Modelle unterschätzen den beobachteten Hitzetrend in Westeuropa, und die Autoren nennen diese Diskrepanz „not well understood“. Finden Sie zwei zitierte Textstellen in der Datei mit Strg+F; keine abgeleitete Lücke darf als von den Autoren genannt ausgegeben werden.

## Mit eigenem Material

### Mitbringen

Abstracts von fünf bis acht Studien zu Ihrem Thema (oder ihre Open-Access-PDFs) und Ihre Entwurfs-Forschungsfrage.

### Schritte

1. Fügen Sie die Studien und Ihre Entwurfs-Forschungsfrage ein oder hängen Sie sie an.
2. Bitten Sie um die Lücken, die sie hinterlassen, nach Typ sortiert, jeweils mit den Studien, die sie zeigen.
3. Fragen Sie, welche Lücke Ihre Forschungsfrage adressiert und wie überzeugend.
4. Öffnen Sie zwei der zitierten Studien und prüfen Sie, ob sie das wirklich sagen.

### Prompt

```text
Ich bin Promovierende bzw. Promovierender in [Fachgebiet]. Identifizieren Sie ausschließlich anhand der Studien, die ich bereitstelle, die Forschungslücken, die sie hinterlassen. Sortieren Sie sie nach Typ: empirisch (fehlende Populationen, Settings, Länder oder Zeiträume), methodisch (ähnliche Designs, fehlende Methoden oder Datenquellen), theoretisch (Phänomen noch nicht erklärt oder nicht mit bestimmten Theorien verglichen), praktisch (fehlende Evidenz zu Umsetzung oder Anwendung) und widersprüchliche Befunde. Zeigen Sie eine Tabelle: Lückentyp, die Lücke in einem Satz, Studien, die sie zeigen, und die Textstelle, die sie belegt. Sagen Sie dann, welche Lücke meine Entwurfs-Forschungsfrage adressiert und wie überzeugend sie das tut. Meine Frage: [Frage]. Fügen Sie keine Studien hinzu, die ich Ihnen nicht gegeben habe.

[Abstracts einfügen oder Dateien anhängen]
```

### Prüfung

Jede belegende Textstelle steht in der Studie, der sie zugeschrieben wird, und jede Lücke ergibt sich aus dem, was die Studien sagen, nicht aus dem, was sie schlicht nicht erwähnen.

### Grenze

Der Assistent sieht nur die Studien, die Sie ihm geben; eine Lücke in einer Handvoll Studien ist noch keine Lücke im Feld – bestätigen Sie sie mit einer Datenbanksuche.

## Technik

Laden Sie die Open-Access-PDFs in Ihren KI-Assistenten hoch (oder fügen Sie Abstracts ein) und bitten Sie um eine auf diese Dateien beschränkte Tabelle. Für die Übung hängen Sie die Abstract-Datei mit den 12 Papern an. Für größere Mengen strukturiert der Literature-Review-Skill für Coding-Assistenten wie GitHub Copilot dieselbe Arbeit systematisch.

## Stufen

### Chat

Hängen Sie die Abstract-Datei (AB) an und führen Sie den Startprompt aus. Bitten Sie den Assistenten im selben Chat, jede Lücke erneut als genannt oder abgeleitet zu kennzeichnen und jedes Zitat zu streichen, das er nicht wortwörtlich in der Datei findet.

### Projekt / Notebook

Fügen Sie die Abstract-Datei (AB) oder, für Ihre eigene Arbeit, die Volltexte Ihrer Schlüsselstudien hinzu, dazu Ihre Entwurfsfrage als .docx. Bitten Sie um Lücken nach Typ über alle Quellen hinweg, jeweils mit zitierter Textstelle. Bitten Sie ihn, nur aus diesen Quellen zu antworten, damit jede Lücke an Ihre Paper gebunden ist; ergänzen Sie neue Studien und prüfen Sie, ob eine Lücke weiterhin besteht.

### Eigener Assistent

Nennen Sie ihn „Lückenkartierer“. Anweisungen: die fünf Lückentypen, eine Tabelle mit Datensätzen, wörtlicher Textstelle und „genannt“ oder „abgeleitet“, eine Einschätzung, wie gut die Entwurfsfrage eine Lücke füllt, und niemals Studien hinzufügen, die Sie ihm nicht gegeben haben. Kein Code nötig. Startprompts: „Kartiere die Lücken in diesen Abstracts“, „Welche Lücke füllt meine Frage?“ Wiederverwendbar für jede neue Studienauswahl.
