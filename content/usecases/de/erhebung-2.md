---
id: erhebung-2
phase: erhebung
order: 2
title: LLM als Annotator
risk: 3
mode: Delegate
potential: 3
capabilities: analyse
routes: files; chat; external
tools: MAXQDA; NVivo
data: AB
practice_data: AB
---

Annotieren Sie große Textmengen anhand eines Kodierschemas vor; Menschen prüfen Stichproben mit einem Übereinstimmungsmaß.

## Problem

Hunderte Texte von Hand zu kodieren dauert Wochen, und eine zweite kodierende Person für die Reliabilität fehlt oft – große Textsammlungen bleiben daher ungenutzt oder werden nur dünn gesampelt.

## Ergebnis

Eine vorkodierte Tabelle mit zitierten Begründungen und Konfidenz, dazu Cohens Kappa und eine Konfusionsmatrix gegen Ihre eigenen Codes – sie zeigen, wo das Codebuch unklar ist, bevor Sie dem Modell im großen Maßstab vertrauen.

## Vorgehen

1. Schreiben Sie ein Codebuch mit Definitionen sowie Ein- und Ausschlussregeln
2. Kodieren Sie eine Stichprobe selbst, bevor Sie den Assistenten fragen
3. Bitten Sie um Codes, zitierte Begründungen und Konfidenz je Text
4. Berechnen Sie Cohens Kappa und eine Konfusionsmatrix in Python
5. Überarbeiten Sie Definitionen, wo sich Abweichungen häufen; testen Sie erneut an neuen Texten

## Konzepte

### Codebuch (Inhaltsanalyse)

Jeder Code hat einen Namen, eine Definition, Ein- und Ausschlusskriterien sowie typische und Grenzbeispiele. Klare Ausschlussregeln sind für Sprachmodelle am wichtigsten, die Codes sonst so weit dehnen, bis sie passen.

### Cohens Kappa

Übereinstimmung zweier kodierender Personen, um den Zufall korrigiert: κ = (pₒ – pₑ) ÷ (1 – pₑ). Nach der Konvention von Landis und Koch (1977) gilt 0,41–0,60 als moderat, 0,61–0,80 als substanziell und über 0,80 als nahezu perfekt; diese Bezeichnungen sind Konventionen, keine Tests.

### Krippendorffs Alpha

Reliabilitätskoeffizient, der mehr als zwei kodierende Personen, fehlende Codes und Daten vom Nominal- bis zum Verhältnisniveau verarbeitet. Krippendorff schlägt α ≥ 0,80 für belastbare Schlüsse und ≥ 0,667 für vorläufige vor – ebenfalls eine Konvention.

### Konfusionsmatrix und Stichprobengröße

Die Kreuztabelle Ihrer Codes gegen die des Modells zeigt, welche Codepaare verwechselt werden. Kappa aus kleinen Stichproben ist instabil und hängt von der Häufigkeit der Codes ab; berichten Sie die Anzahl der Texte und testen Sie an Texten, die nicht zur Verfeinerung des Codebuchs dienten.

## Literatur

- Cohen, J. (1960). A coefficient of agreement for nominal scales. Educational and Psychological Measurement, 20(1), 37–46. doi:10.1177/001316446002000104
- Landis, J. R., & Koch, G. G. (1977). The measurement of observer agreement for categorical data. Biometrics, 33(1), 159–174. doi:10.2307/2529310
- Krippendorff, K. (2019). Content analysis: An introduction to its methodology (4th ed.). SAGE. doi:10.4135/9781071878781

## Übung

### Aufgabe

Bevor Sie Ihren KI-Assistenten öffnen, kodieren Sie die 12 Abstracts in der Abstract-Datei selbst (etwa drei Minuten – Titel und erste Sätze genügen meist). Lassen Sie sie dann vom Assistenten mit demselben Schema kodieren und Kappa berechnen. Sie lernen, wie die Klarheit des Codebuchs die Übereinstimmung bestimmt und wie instabil Kappa bei nur 12 Texten ist.

### Prompt

```text
Ich teste, ob ein Sprachmodell Texte vorannotieren kann. Angehängt ist eine Textdatei mit den Titeln und Abstracts von 12 Arbeiten zum Klimawandel, jede mit einer ID von A1 bis C6. Kodierschema, ein Code je Arbeit: DATASET – beschreibt, wie ein Beobachtungsdatensatz aufgebaut oder aktualisiert wird; ATTRIBUTION – quantifiziert den menschlichen Beitrag zur Erwärmung oder zu einem bestimmten Extremereignis; TREND – quantifiziert beobachtete oder projizierte Änderungen ohne formale Attribution; METHOD – demonstriert hauptsächlich ein statistisches Verfahren an bestehenden Daten. Verwende „unklar“, wenn kein Code passt; erfinde keine neuen Codes. Gib eine Tabelle zurück: ID, Erstautor/in und Jahr, Code, Konfidenz (hoch, mittel oder niedrig) und eine Begründung in einem Satz, die das Abstract zitiert. Als Nächstes füge ich meine eigenen Codes ein: Berechne dann Cohens Kappa in Python, zeige eine Konfusionsmatrix und liste jede Abweichung auf.
```

### Prüfung

Berechnen Sie Kappa von Hand aus der Konfusionsmatrix nach. Erwarten Sie Abweichungen bei Grenzfällen wie Forster et al. (2025) und Vautard et al. (2023), und bestätigen Sie, dass jede zitierte Begründung wörtlich in der Abstract-Datei steht. Bei 12 Texten ist Kappa nur illustrativ; streben Sie vor dem Kodieren im großen Maßstab etwa 0,7–0,8 an einer größeren Menge von Texten an, die nicht zur Verfeinerung des Codebuchs dienten.

## Mit eigenem Material

### Mitbringen

Ihr Kodierschema (3–6 Codes mit Definitionen) und 20 kurze unkritische Texte, etwa Open-Access-Abstracts oder erfundene Aussagen, nummeriert in einer Liste oder CSV.

### Schritte

1. Kodieren Sie zehn der Texte selbst, bevor Sie Ihren KI-Assistenten öffnen, und legen Sie Ihre Codes beiseite.
2. Fügen Sie den Startprompt mit Ihrem Schema und allen Texten ein, oder hängen Sie die CSV an.
3. Fügen Sie Ihre eigenen zehn Codes ein und bitten Sie den Assistenten, Cohens Kappa in Python zu berechnen (wenn er keinen Code ausführen kann, bitten Sie um den Code und führen Sie ihn selbst aus).
4. Lesen Sie jede Abweichung und entscheiden Sie, ob das Schema oder der Assistent unklar war.

### Prompt

```text
Ich teste, ob ein Sprachmodell Texte für meine Studie zu [Thema] vorannotieren kann. Kodierschema: [Code: Definition, einer je Zeile]. Weise jedem untenstehenden Text (oder in der angehängten Datei) genau einen Code zu. Gib eine Tabelle zurück: Text-ID, Code, Konfidenz (hoch, mittel oder niedrig) und eine Begründung in einem Satz, die den Text zitiert. Verwende „unklar“, wenn kein Code passt; erfinde keine neuen Codes. Texte: [nummerierte Texte einfügen]
```

### Prüfung

Bei zehn Texten ist Kappa ein grobes Signal, kein Freigabetest: Schauen Sie zuerst, wo sich Abweichungen häufen, und verfeinern Sie die Codedefinitionen. Streben Sie vor dem Kodieren im großen Maßstab ein Kappa (oder Krippendorffs Alpha) von etwa 0,7–0,8 an einer größeren Textstichprobe an, die nicht zur Verfeinerung des Codebuchs diente.

### Grenze

Ein Chat erlaubt es, das Schema an einer kleinen Stichprobe zu testen; das Vorannotieren großer Mengen braucht eine skriptgesteuerte Pipeline in einem freigegebenen Tool.

## Technik

Laden Sie die Texte als CSV- oder Textdatei mit Ihrem Codebuch in Ihren KI-Assistenten hoch; er kodiert sie und berechnet Cohens Kappa in Python gegen Ihre Codes – wenn er keinen Code ausführen kann, bitten Sie um den Code und führen Sie ihn selbst aus. Kodieren im großen Maßstab braucht eine skriptgesteuerte Pipeline in einem freigegebenen Tool. Üben Sie an der Abstract-Datei der 12 Übungsarbeiten.

## Stufen

### Chat

Führen Sie den Startprompt mit der Abstract-Datei aus und fügen Sie Ihre eigenen Codes für Kappa ein. Schreiben Sie im selben Chat die Definition des Codes mit den meisten Abweichungen um und bitten Sie darum, nur die strittigen Texte neu zu kodieren.

### Projekt / Notebook

Fügen Sie Ihr Codebuch mit Definitionen und Beispielen hinzu, die Texte (AB funktioniert als .txt; wenn Ihr Tool den Dateityp nicht akzeptiert, speichern Sie als .xlsx oder .txt) und Ihre Notizen zu jeder Abweichung. Fragen Sie, auf welche Definitionen die Abweichungen hindeuten, und lassen Sie ein überarbeitetes Codebuch entwerfen. Je nach Tool kann das Projekt Kappa nicht berechnen, bewahrt aber jede Codebuchversion mit ihren Gründen auf – Material für Ihren Methodenteil.

### Eigener Assistent

Nennen Sie ihn „Vorannotator“ und schalten Sie Codeausführung bzw. Datenanalyse ein, wenn Ihr Tool sie anbietet, für Kappa und die Konfusionsmatrix. Anweisungen: das Kodierschema, ein Code je Text, „unklar“ statt neuer Codes, Konfidenz und ein wörtliches Zitat als Begründung, Kappa gegen menschliche Codes, wenn sie vorliegen. Wissen: Ihr Codebuch. Es geht nur freigegebener, unkritischer Text hinein, und ein Mensch prüft von jedem Stapel eine Stichprobe. Startprompt: „Kodiere diese Texte: [einfügen]“.
