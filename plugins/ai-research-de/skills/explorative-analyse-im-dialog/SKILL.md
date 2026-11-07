---
name: explorative-analyse-im-dialog
description: "Datensätze in natürlicher Sprache erkunden („Wie ist … verteilt?“) und erste Muster sichtbar machen. Einsetzen bei: Explorative Analyse im Dialog."
---

# Explorative Analyse im Dialog

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/analyse-4

## Ziel

Datensätze in natürlicher Sprache erkunden („Wie ist … verteilt?“) und erste Muster sichtbar machen.

Ein dokumentierter erster Blick auf Struktur, Verteilungen und Muster, mit dem Code hinter jeder Zahl, als explorativ gekennzeichnet und getrennt von den Hypothesen, die Sie später testen werden.

## Wann einsetzen

Vor der formalen Analyse müssen Sie wissen, was ein Datensatz enthält, aber jede schnelle Frage zu programmieren bremst Sie, und explorative Muster werden leicht zu ungeprüften Behauptungen.

## Ablauf mit der Nutzerin oder dem Nutzer

Führen Sie durch diese Schritte. Wo ein Schritt „den Assistenten bitten“ nennt, sind Sie gemeint.

1. Hängen Sie die Datei an und fügen Sie den Startprompt mit zwei Fragen in einfacher Sprache ein.
2. Bitten Sie den Assistenten, den Code hinter jeder berichteten Zahl zu zeigen (Python, sofern er Code ausführen kann).
3. Stellen Sie eine Anschlussfrage zu jedem Muster, das Sie überrascht.
4. Verifizieren Sie ein Ergebnis selbst in Excel oder Ihrer üblichen Software.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.

## Typische Anfrage

```text
Ich erkunde einen Datensatz vor der formalen Analyse. Die angehängte Datei enthält [Beschreibung: Quelle, Einheit, Zeitraum]. Beschreiben Sie zuerst seine Struktur: Anzahl der Zeilen und Spalten, Variablentypen und fehlende Werte. Beantworten Sie dann: [Frage 1, z. B. Wie ist das Einkommen verteilt?] und [Frage 2, z. B. Unterscheidet sich X zwischen den Gruppen von Y?]. Geben Sie zu jeder Antwort eine Übersichtstabelle oder ein Diagramm, den verwendeten Python-Code und einen Satz mit einem Vorbehalt, zum Beispiel zu Ausreißern oder kleinen Gruppen. Behandeln Sie alle Befunde als explorativ, nicht als bestätigt.
```

## Prüfung

Zeilenzahl und eine Kennzahl stimmen mit dem überein, was Sie beim Öffnen der Datei in Excel erhalten, und jedes vom Assistenten berichtete Muster ist in seinem Diagramm erkennbar.

## Grenzen

- Risiko: Eigene unveröffentlichte Entwürfe, Gutachten oder Inhalte Dritter.

## Wichtige Konzepte

- **Explorative Datenanalyse (Exploratory Data Analysis, EDA)** – Der Ansatz von Tukey (1977), Daten mit Kennzahlen und Grafiken zu untersuchen, um vor der Modellierung Struktur, Auffälligkeiten und Fragen zu entdecken. EDA erzeugt Hypothesen; sie testet sie nicht.
- **Anscombe-Quartett (Anscombe's Quartet)** – Vier Datensätze mit nahezu identischen Mittelwerten, Varianzen, Korrelationen und Regressionsgeraden, aber sehr unterschiedlichen Streudiagrammen (Anscombe, 1973). Es zeigt, warum man Daten abbildet, statt allein Kennzahlen zu vertrauen.
- **Explorative versus konfirmatorische Analyse** – Muster, die beim Erkunden gefunden werden, lassen sich nicht mit denselben Daten bestätigen. Sie so darzustellen, als wären sie vorhergesagt gewesen, ist HARKing – Hypothesen aufstellen, nachdem die Ergebnisse bekannt sind (Kerr, 1998). Kennzeichnen Sie explorative Ergebnisse und testen Sie sie an neuen Daten oder in einer präregistrierten Analyse.
- **Referenzzeitraum (Baseline)** – Anomalien und Indizes werden relativ zu einem Referenzzeitraum oder einer Referenzkategorie ausgedrückt. Reihen mit unterschiedlichen Baselines sind erst vergleichbar, nachdem sie auf eine gemeinsame umgerechnet wurden; das verschiebt ihr Niveau, nicht ihre Trends.

## Wichtige Literatur

- Tukey, J. W. (1977). Exploratory data analysis. Addison-Wesley.
- Anscombe, F. J. (1973). Graphs in statistical analysis. The American Statistician, 27(1), 17–21. https://doi.org/10.1080/00031305.1973.10478966
- Kerr, N. L. (1998). HARKing: Hypothesizing after the results are known. Personality and Social Psychology Review, 2(3), 196–217. https://doi.org/10.1207/s15327957pspr0203_4

## Hilfreiche Werkzeuge

Jamovi · JASP
