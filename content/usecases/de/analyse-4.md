---
id: analyse-4
phase: analyse
order: 4
title: Explorative Analyse im Dialog
risk: 2
mode: Assist
potential: 2
capabilities: analyse; agentisch
routes: files; external
tools: Jamovi; JASP
repos: kd-eda
data: A1; A2; D3; D4; D9
practice_data: A1; A2; D3; D4; D9
---

Datensätze in natürlicher Sprache erkunden („Wie ist … verteilt?“) und erste Muster sichtbar machen.

## Problem

Vor der formalen Analyse müssen Sie wissen, was ein Datensatz enthält, aber jede schnelle Frage zu programmieren bremst Sie, und explorative Muster werden leicht zu ungeprüften Behauptungen.

## Ergebnis

Ein dokumentierter erster Blick auf Struktur, Verteilungen und Muster, mit dem Code hinter jeder Zahl, als explorativ gekennzeichnet und getrennt von den Hypothesen, die Sie später testen werden.

## Vorgehen

1. Datei hochladen und Quelle, Einheit und Zeitraum nennen
2. Jeweils eine Frage in einfacher Sprache stellen
3. Den Code hinter jeder berichteten Zahl anfordern
4. Muster als Fragen festhalten, nicht als Befunde
5. Ein Ergebnis in Ihrer eigenen Software verifizieren

## Konzepte

### Explorative Datenanalyse (Exploratory Data Analysis, EDA)

Der Ansatz von Tukey (1977), Daten mit Kennzahlen und Grafiken zu untersuchen, um vor der Modellierung Struktur, Auffälligkeiten und Fragen zu entdecken. Sie erzeugt Hypothesen; sie testet sie nicht.

### Anscombe-Quartett (Anscombe's Quartet)

Vier Datensätze mit nahezu identischen Mittelwerten, Varianzen, Korrelationen und Regressionsgeraden, aber sehr unterschiedlichen Streudiagrammen (Anscombe, 1973). Es zeigt, warum man Daten abbildet, statt allein Kennzahlen zu vertrauen.

### Explorative versus konfirmatorische Analyse

Muster, die beim Erkunden gefunden werden, lassen sich nicht mit denselben Daten bestätigen. Sie so darzustellen, als wären sie vorhergesagt gewesen, ist HARKing – Hypothesen aufstellen, nachdem die Ergebnisse bekannt sind (Kerr, 1998). Kennzeichnen Sie explorative Ergebnisse und testen Sie sie an neuen Daten oder in einer präregistrierten Analyse.

### Referenzzeitraum (Baseline)

Anomalien und Indizes werden relativ zu einem Referenzzeitraum oder einer Referenzkategorie ausgedrückt. Reihen mit unterschiedlichen Baselines sind erst vergleichbar, nachdem sie auf eine gemeinsame umgerechnet wurden; das verschiebt ihr Niveau, nicht ihre Trends.

## Literatur

- Tukey, J. W. (1977). Exploratory data analysis. Addison-Wesley.
- Anscombe, F. J. (1973). Graphs in statistical analysis. The American Statistician, 27(1), 17–21. doi:10.1080/00031305.1973.10478966
- Kerr, N. L. (1998). HARKing: Hypothesizing after the results are known. Personality and Social Psychology Review, 2(3), 196–217. doi:10.1207/s15327957pspr0203_4

## Übung

### Aufgabe

Vergleichen Sie drei globale Temperaturreihen auf einer gemeinsamen Baseline. Sie erfahren, ob der Assistent unterschiedliche Baselines, Codes für fehlende Werte und Zeitauflösungen bemerkt und ob seine Erklärung der verbleibenden Unterschiede mit den Fachartikeln übereinstimmt.

### Prompt

```text
Ich erkunde drei globale Temperaturdatensätze vor jeder formalen Analyse. Angehängt sind die monatliche HadCRUT5-CSV (Anomalien relativ zu 1961–1990), die GISTEMP-CSV (die erste Zeile ist ein Titel, *** kennzeichnet fehlende Werte, die Spalte J-D ist das Jahresmittel) und die tägliche ERA5-CSV (Zeilen, die mit # beginnen, sind Kommentare; ano_91-20 ist die Anomalie relativ zu 1991–2020). Beschreiben Sie zuerst jede Datei: Zeilen, Spalten, Zeitauflösung, Zeitraum und fehlende Werte. Berechnen Sie dann Jahresmittel nur für vollständige Jahre, rechnen Sie alle drei Reihen auf die Baseline 1991–2020 um und stellen Sie sie ab 1940 gemeinsam dar. Geben Sie eine Tabelle der Werte für 2024 und den verwendeten Python-Code an. Erklären Sie abschließend anhand der angehängten PDFs von Morice et al. (2021) und Rohde & Hausfather (2020), warum sich die Reihen dennoch unterscheiden, und zitieren Sie die Passagen, auf die Sie sich stützen. Behandeln Sie alles als explorativ.
```

### Prüfung

Nach der Umrechnung der Baseline hat jede Reihe über 1991–2020 den Mittelwert 0.00, und die Werte für 2024 liegen nahe beieinander: etwa 0.63 °C (HadCRUT5), 0.67 °C (GISTEMP) und 0.72 °C (ERA5). Suchen Sie jede zitierte Passage in den PDFs.

## Mit eigenem Material

### Mitbringen

Ein öffentlicher Datensatz als CSV oder Excel, über den Sie bereits ein wenig wissen, etwa eine ONS-Tabelle oder eine Datei aus einem Datenrepositorium.

### Schritte

1. Hängen Sie die Datei an und fügen Sie den Startprompt mit zwei Fragen in einfacher Sprache ein.
2. Bitten Sie den Assistenten, den Code hinter jeder berichteten Zahl zu zeigen (Python, sofern er Code ausführen kann).
3. Stellen Sie eine Anschlussfrage zu jedem Muster, das Sie überrascht.
4. Verifizieren Sie ein Ergebnis selbst in Excel oder Ihrer üblichen Software.

### Prompt

```text
Ich erkunde einen Datensatz vor der formalen Analyse. Die angehängte Datei enthält [Beschreibung: Quelle, Einheit, Zeitraum]. Beschreiben Sie zuerst seine Struktur: Anzahl der Zeilen und Spalten, Variablentypen und fehlende Werte. Beantworten Sie dann: [Frage 1, z. B. Wie ist das Einkommen verteilt?] und [Frage 2, z. B. Unterscheidet sich X zwischen den Gruppen von Y?]. Geben Sie zu jeder Antwort eine Übersichtstabelle oder ein Diagramm, den verwendeten Python-Code und einen Satz mit einem Vorbehalt, zum Beispiel zu Ausreißern oder kleinen Gruppen. Behandeln Sie alle Befunde als explorativ, nicht als bestätigt.
```

### Prüfung

Zeilenzahl und eine Kennzahl stimmen mit dem überein, was Sie beim Öffnen der Datei in Excel erhalten, und jedes vom Assistenten berichtete Muster ist in seinem Diagramm erkennbar.

## Technik

Laden Sie die CSV- oder Excel-Datei in Ihren KI-Assistenten hoch; kann er Python ausführen (pandas, matplotlib), liefert er Tabellen, Diagramme und Code. Führen Sie den Code erneut aus oder prüfen Sie Zahlen in Excel, Jamovi oder JASP.

## Stufen

### Chat

Führen Sie den Startprompt mit den drei angehängten CSV-Dateien und zwei PDFs aus. Fragen Sie danach im selben Chat, in welchem Jahr der größte Abstand zwischen den Reihen auftritt und was laut den Fachartikeln ihn erklären könnte, samt Code.

### Projekt / Notebook

Fügen Sie die Dateien HadCRUT5, GISTEMP und ERA5 (D3, D4, D9; speichern Sie sie als .xlsx oder .txt, wenn Ihr Werkzeug keine CSV-Dateien akzeptiert) mit den Artikeln von Morice und von Rohde & Hausfather (A1, A2) hinzu. Fragen Sie, wie jeder Artikel die im Chat gefundenen Unterschiede erklärt. Fügen Sie bei eigenen Daten Codebook und Dokumentation hinzu: Datenbeschreibungen und Quellenartikel bleiben beieinander, und die Antworten bleiben konsistent, wenn Sie zurückkehren.

### Eigener Assistent

Erstellen Sie einen konfigurierten Assistenten (z. B. einen Copilot-Agenten, einen Custom GPT, ein Gemini Gem oder ein Claude-Projekt). Legen Sie in seinen dauerhaften Anweisungen die Erkundungsroutine fest: zuerst Struktur, Typen und fehlende Werte beschreiben, Baselines und Einheiten prüfen, den Code hinter jeder Zahl zeigen, je Befund einen Satz mit Vorbehalt ergänzen und alles als explorativ kennzeichnen. Schalten Sie Codeausführung bzw. Datenanalyse ein, wenn Ihr Werkzeug sie anbietet. Startprompts: „Beschreiben Sie diese Datei, bevor wir Muster ansehen.“ und „Wie ist X über Y verteilt?“ Wiederverwendbar für jeden neuen Datensatz.
