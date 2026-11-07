---
name: llm-als-annotator
description: "Annotieren Sie große Textmengen anhand eines Kodierschemas vor; Menschen prüfen Stichproben mit einem Übereinstimmungsmaß. Einsetzen bei: LLM als Annotator."
---

# LLM als Annotator

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/erhebung-2

## Ziel

Annotieren Sie große Textmengen anhand eines Kodierschemas vor; Menschen prüfen Stichproben mit einem Übereinstimmungsmaß.

Eine vorkodierte Tabelle mit zitierten Begründungen und Konfidenz, dazu Cohens Kappa und eine Konfusionsmatrix gegen Ihre eigenen Codes – sie zeigen, wo das Codebuch unklar ist, bevor Sie dem Modell im großen Maßstab vertrauen.

## Wann einsetzen

Hunderte Texte von Hand zu kodieren dauert Wochen, und eine zweite kodierende Person für die Reliabilität fehlt oft – große Textsammlungen bleiben daher ungenutzt oder werden nur dünn gesampelt.

## Ablauf mit der Nutzerin oder dem Nutzer

Führen Sie durch diese Schritte. Wo ein Schritt „den Assistenten bitten“ nennt, sind Sie gemeint.

1. Kodieren Sie zehn der Texte selbst, bevor Sie Ihren KI-Assistenten öffnen, und legen Sie Ihre Codes beiseite.
2. Fügen Sie den Startprompt mit Ihrem Schema und allen Texten ein, oder hängen Sie die CSV an.
3. Fügen Sie Ihre eigenen zehn Codes ein und bitten Sie den Assistenten, Cohens Kappa in Python zu berechnen (wenn er keinen Code ausführen kann, bitten Sie um den Code und führen Sie ihn selbst aus).
4. Lesen Sie jede Abweichung und entscheiden Sie, ob das Schema oder der Assistent unklar war.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.

## Typische Anfrage

```text
Ich teste, ob ein Sprachmodell Texte für meine Studie zu [Thema] vorannotieren kann. Kodierschema: [Code: Definition, einer je Zeile]. Weisen Sie jedem untenstehenden Text (oder in der angehängten Datei) genau einen Code zu. Geben Sie eine Tabelle zurück: Text-ID, Code, Konfidenz (hoch, mittel oder niedrig) und eine Begründung in einem Satz, die den Text zitiert. Verwenden Sie „unklar“, wenn kein Code passt; erfinden Sie keine neuen Codes. Texte: [nummerierte Texte einfügen]
```

## Prüfung

Bei zehn Texten ist Kappa ein grobes Signal, kein Freigabetest: Schauen Sie zuerst, wo sich Abweichungen häufen, und verfeinern Sie die Codedefinitionen. Streben Sie vor dem Kodieren im großen Maßstab ein Kappa (oder Krippendorffs Alpha) von etwa 0,7–0,8 an einer größeren Textstichprobe an, die nicht zur Verfeinerung des Codebuchs diente.

## Grenzen

- Ein Chat erlaubt es, das Schema an einer kleinen Stichprobe zu testen; das Vorannotieren großer Mengen braucht eine skriptgesteuerte Pipeline in einem freigegebenen Werkzeug.
- Risiko: Personenbezogene oder sensible Daten oder Entscheidungen, die direkt in Ihre Ergebnisse einfließen.

## Wichtige Konzepte

- **Codebuch (Inhaltsanalyse)** – Jeder Code hat einen Namen, eine Definition, Ein- und Ausschlusskriterien sowie typische und Grenzbeispiele. Klare Ausschlussregeln sind für Sprachmodelle am wichtigsten, die Codes sonst so weit dehnen, bis sie passen.
- **Cohens Kappa** – Übereinstimmung zweier kodierender Personen, um den Zufall korrigiert: κ = (pₒ – pₑ) ÷ (1 – pₑ). Nach der Konvention von Landis und Koch (1977) gilt 0,41–0,60 als moderat, 0,61–0,80 als substanziell und über 0,80 als nahezu perfekt; diese Bezeichnungen sind Konventionen, keine Tests.
- **Krippendorffs Alpha** – Reliabilitätskoeffizient, der mehr als zwei kodierende Personen, fehlende Codes und Daten vom Nominal- bis zum Verhältnisniveau verarbeitet. Krippendorff schlägt α ≥ 0,80 für belastbare Schlüsse und ≥ 0,667 für vorläufige vor – ebenfalls eine Konvention.
- **Konfusionsmatrix und Stichprobengröße** – Die Kreuztabelle Ihrer Codes gegen die des Modells zeigt, welche Codepaare verwechselt werden. Kappa aus kleinen Stichproben ist instabil und hängt von der Häufigkeit der Codes ab; berichten Sie die Anzahl der Texte und testen Sie an Texten, die nicht zur Verfeinerung des Codebuchs dienten.

## Wichtige Literatur

- Cohen, J. (1960). A coefficient of agreement for nominal scales. Educational and Psychological Measurement, 20(1), 37–46. https://doi.org/10.1177/001316446002000104
- Landis, J. R., & Koch, G. G. (1977). The measurement of observer agreement for categorical data. Biometrics, 33(1), 159–174. https://doi.org/10.2307/2529310
- Krippendorff, K. (2019). Content analysis: An introduction to its methodology (4th ed.). SAGE. https://doi.org/10.4135/9781071878781

## Hilfreiche Werkzeuge

MAXQDA · NVivo
