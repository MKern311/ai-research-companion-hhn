---
id: idee-6
phase: idee
order: 6
title: Theoretischer Rahmen und Hypothesen
risk: 2
mode: Co-create
potential: 3
capabilities: generierung; synthese
routes: chat; files; external
tools: Consensus; Scholar GPT
repos: kd-hypothesis
data: A3; D3; D5
practice_data: A3; D3; D5
---

Vergleichen Sie Kandidatentheorien für Ihre Frage, leiten Sie Hypothesen oder Propositionen samt Begründung ab und beschreiben Sie das konzeptionelle Modell in Worten.

## Problem

Die Wahl zwischen Theorien und die Ableitung von Hypothesen bleiben oft implizit; Gutachtende finden dann Sprünge in der Argumentation, Hypothesen ohne theoretischen Mechanismus oder ein Modell, das die Frage nicht beantwortet.

## Ergebnis

Ein Vergleich von Kandidatentheorien, falsifizierbare Hypothesen oder Propositionen mit expliziter Begründung und ein konzeptionelles Modell mit Mediatoren und Moderatoren – ein Entwurf, den Sie verteidigen können, sobald jeder Schritt geprüft ist.

## Vorgehen

1. Nennen Sie Ihre Frage, zwei oder drei Theorien und Schlüsselabstracts
2. Bitten Sie um eine Vergleichstabelle der Theorien
3. Leiten Sie Hypothesen oder Propositionen ab, jeweils mit ihrem Mechanismus
4. Beschreiben Sie das Modell: Konstrukte, Richtung, Mediatoren, Moderatoren
5. Führen Sie jeden Begründungsschritt auf die ursprüngliche Theorie zurück

## Konzepte

### Bausteine einer Theorie (Whetten)

Eine Theorie benennt das Was (Konstrukte), das Wie (Beziehungen), das Warum (zugrunde liegender Mechanismus) sowie Wer, Wo und Wann (Randbedingungen). Prüfen Sie mit diesen vier Fragen, ob jede Hypothese einen Mechanismus und einen benannten Geltungsbereich hat.

### Propositionen versus Hypothesen (Bacharach)

Propositionen formulieren Beziehungen zwischen abstrakten Konstrukten; Hypothesen formulieren sie zwischen messbaren Variablen und müssen falsifizierbar sein. Qualitative Arbeiten nutzen statt Hypothesen oft Propositionen oder sensibilisierende Fragen.

### Mediator und Moderator

Ein Mediator erklärt, wie oder warum X auf Y wirkt (X → M → Y); ein Moderator verändert Stärke oder Richtung der Beziehung zwischen X und Y (Baron & Kenny, 1986). Mediation wird heute meist über Bootstrap-Schätzungen indirekter Effekte geprüft.

### Theoretischer versus konzeptioneller Rahmen

Ein theoretischer Rahmen beruht auf einer oder mehreren etablierten Theorien; ein konzeptioneller Rahmen ist Ihr eigenes Modell von Konstrukten und Beziehungen, abgeleitet aus Theorie und früheren Befunden. Der Sprachgebrauch variiert je nach Fach, sagen Sie also, welchen Sie vorlegen.

### Falsifizierbarkeit (Popper)

Eine wissenschaftliche Hypothese muss benennen, welche Beobachtung ihr widersprechen würde. Formulieren Sie jede Hypothese so, dass ein Ergebnis sie widerlegen könnte, einschließlich der erwarteten Richtung des Effekts.

## Literatur

- Whetten, D. A. (1989). What constitutes a theoretical contribution? Academy of Management Review, 14(4), 490–495. doi:10.5465/amr.1989.4308371
- Bacharach, S. B. (1989). Organizational theories: Some criteria for evaluation. Academy of Management Review, 14(4), 496–515. doi:10.5465/amr.1989.4308374
- Baron, R. M., & Kenny, D. A. (1986). The moderator–mediator variable distinction in social psychological research: Conceptual, strategic, and statistical considerations. Journal of Personality and Social Psychology, 51(6), 1173–1182. doi:10.1037/0022-3514.51.6.1173
- Popper, K. (2002). The logic of scientific discovery. Routledge. (Original work published 1959)

## Übung

### Aufgabe

Leiten Sie Hypothesen zum Zusammenhang von CO₂ und Temperatur ab, lassen Sie Ihren KI-Assistenten eine davon mit Python an den Dateien HadCRUT5 und Mauna Loa testen und kritisieren Sie das Ergebnis dann anhand des Indikatoren-Papers. Sie erfahren, ob seine Modelle Antriebe und Bezugszeiträume auslassen, die das Paper ausdrücklich behandelt.

### Prompt

```text
Ich bin Promovierende bzw. Promovierender. Meine Frage: Wie viel des Anstiegs der globalen Oberflächentemperatur seit 1959 lässt sich durch steigendes atmosphärisches CO₂ erklären? Angehängt sind die monatliche HadCRUT5-CSV, die monatliche Mauna-Loa-CO₂-CSV und das PDF von Forster et al. (2025). Vergleichen Sie erstens zwei Erklärungsmodelle in einer Tabelle – nur CO₂ gegenüber gesamtem menschlichem und natürlichem Antrieb – mit Kerngedanke, zentralen Konstrukten, Vorhersagen und Grenzen. Leiten Sie zweitens drei Hypothesen ab, jeweils mit Begründung und einer belegenden Textstelle aus dem PDF. Berechnen Sie drittens mit Python in beiden Dateien Jahresmittel für vollständige Jahre, regressieren Sie die Temperaturanomalie auf den natürlichen Logarithmus von CO₂ und berichten Sie die Steigung, das Bestimmtheitsmaß (R²) und das Muster der Residuen. Sagen Sie viertens, welche Antriebe und welche Unterschiede der Bezugszeiträume die Regression ignoriert. Erfinden Sie keine Studien.
```

### Prüfung

Die HadCRUT5-Anomalien beziehen sich auf 1961–1990, Forster et al. berichten die Erwärmung relativ zu 1850–1900 – der Assistent darf beide nicht direkt vergleichen. Das Abstract nennt verringerte Aerosolkühlung als Treiber; ein reines CO₂-Modell lässt sie aus. Die Regression sollte 1959 beginnen.

## Mit eigenem Material

### Mitbringen

Ihre Forschungsfrage, die zwei oder drei Theorien oder Modelle, die Sie erwägen, und Abstracts von drei Schlüsselstudien.

### Schritte

1. Fügen Sie Ihre Forschungsfrage, die Kandidatentheorien und die Abstracts ein.
2. Bitten Sie um einen Vergleich der Theorien für Ihre Frage.
3. Bitten Sie um Hypothesen oder Propositionen, jeweils mit Begründung und Quelle.
4. Prüfen Sie jeden Begründungsschritt an der ursprünglichen Theorie.

### Prompt

```text
Ich bin Promovierende bzw. Promovierender in [Fachgebiet]. Meine Forschungsfrage lautet: [Frage]. Ich erwäge diese Theorien oder Modelle: [Theorien]. Vergleichen Sie sie für meine Frage in einer Tabelle: Kerngedanke, zentrale Konstrukte, was jede in meinem Fall vorhersagen oder erklären helfen würde, typische Methoden und Grenzen. Leiten Sie dann drei bis fünf Hypothesen ab (bei qualitativer Arbeit Propositionen oder sensibilisierende Fragen), jeweils mit einer kurzen Begründung, die die Theorie nennt und, wo möglich, eine der von mir bereitgestellten Studien. Beschreiben Sie abschließend das konzeptionelle Modell in Worten: Konstrukte, erwartete Beziehungen und ihre Richtung sowie mögliche Moderatoren oder Mediatoren. Erfinden Sie keine Studien; kennzeichnen Sie jeden Link, bei dem Sie unsicher sind.

[Abstracts einfügen]
```

### Prüfung

Jede Hypothese folgt aus der Theorie, so wie ihre Autorinnen und Autoren sie beschreiben, und jede zitierte Studie ist eine, die Sie bereitgestellt haben und die sagt, was der Assistent behauptet.

### Grenze

Das Aufbauen des theoretischen Arguments ist ein Kernbestandteil Ihres eigenen Beitrags; nutzen Sie die Ausgabe, um Ihre Argumentation zu testen, nicht um sie zu ersetzen.

## Technik

Fügen Sie Abstracts ein oder laden Sie PDFs in Ihren KI-Assistenten hoch. Für die Übung laden Sie die Dateien HadCRUT5 (D3) und CO₂ (D5) hoch, regressieren die Temperatur auf CO₂ und kritisieren die Hypothesen des Assistenten anhand des Indikatoren-Papers (A3).

## Stufen

### Chat

Hängen Sie HadCRUT5 (D3), Mauna-Loa-CO₂ (D5) und Forster et al. (A3) an und führen Sie den Startprompt aus. Fragen Sie im selben Chat, welche Hypothese die Regression tatsächlich testet und was die unterschiedlichen Bezugszeiträume (1961–1990 und 1850–1900) ändern würden.

### Projekt / Notebook

Fügen Sie die Theorietexte, zwischen denen Sie wählen, das Indikatoren-Paper (A3) und Ihren Hypothesenentwurf hinzu; akzeptiert Ihr Werkzeug die Datendateien nicht, speichern Sie HadCRUT5 (D3) und Mauna Loa (D5) zuerst als .xlsx. Je nach Werkzeug führt der Arbeitsbereich kein Python aus – nutzen Sie ihn, um die Begründung jeder Hypothese an den Quellen zu prüfen, und führen Sie die Regression im Chat oder in einem eigenen Assistenten mit Codeausführung durch.

### Eigener Assistent

Nennen Sie ihn „Theorie und Hypothesen“. Anweisungen: Kandidatentheorien in einer Tabelle vergleichen, Hypothesen jeweils mit Begründung und belegender Textstelle ableiten, das Modell in Worten beschreiben, Probleme mit Bezugszeiträumen und ausgelassenen Variablen kennzeichnen und niemals Studien erfinden. Wissen: Ihre zentralen Theoriepaper. Schalten Sie Codeausführung bzw. Datenanalyse ein, wenn Ihr Werkzeug sie anbietet, um eine Hypothese an Daten zu testen – hängen Sie die Datendatei im Chat an, nicht als Wissen. Startprompt: „Leite aus diesen Theorien Hypothesen ab und teste eine an dieser Datei.“
