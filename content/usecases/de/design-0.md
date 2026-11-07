---
id: design-0
phase: design
order: 0
title: Methodenberatung
risk: 2
mode: Co-create
potential: 2
capabilities: generierung; synthese
routes: chat; files
tools: Statistik GPT
data: D3; D5; A3
practice_data: D3; D5
practice_ref: A3
---

Vergleichen Sie Designalternativen mit ihren Vor- und Nachteilen, planen Sie Experimente (Bedingungen, Variablen, Kontrollen) – auch Designs mit weniger Durchläufen, etwa faktorielle oder Wirkungsflächen-Designs (Response-Surface) – und arbeiten Sie Gefährdungen der Validität systematisch ab.

## Problem

Designs folgen oft der ersten Idee oder der Gewohnheit des Fachs; Alternativen und Gefährdungen der Validität oder Vertrauenswürdigkeit tauchen spät auf – im Kolloquium oder im Gutachten.

## Ergebnis

Ein Vergleich von drei Designs und eine Liste von Gefährdungen, sortiert nach Validitätstyp (statistische Schlussvalidität, interne, Konstrukt- und externe Validität), jeweils mit einer Gegenmaßnahme, die zu Ihrer Studie passt – und für Experimente ein Design mit weniger Durchläufen. Ein besser begründetes Methodenkapitel.

## Vorgehen

1. Nennen Sie Ihre Frage, das geplante Design und die Analyseeinheit
2. Bitten Sie um zwei realistische alternative Designs in einer Vergleichstabelle
3. Bitten Sie um Gefährdungen, sortiert nach den vier Validitätstypen
4. Bitten Sie bei einem Experiment um ein Design mit weniger Durchläufen
5. Bitten Sie bei interpretativen Designs stattdessen um Kriterien der Vertrauenswürdigkeit
6. Prüfen Sie die Gefährdungen anhand Ihres Methodenlehrbuchs oder mit Ihrer Betreuungsperson

## Konzepte

### Validitätstypologie (Shadish, Cook & Campbell)

Vier Typen: statistische Schlussvalidität (ist die Kovariation real?), interne Validität (ist sie kausal?), Konstruktvalidität (repräsentieren Messungen und Interventionen die Konzepte?) und externe Validität (lässt sich verallgemeinern?). Nutzen Sie sie, um Gefährdungen in quantitativen Designs systematisch zu sortieren.

### Gefährdungen der internen Validität

Die klassische Liste: Geschichte (History), Reifung (Maturation), Testeffekte, Instrumentierung, Regression zur Mitte, Selektion, Ausfälle (Attrition) und ihre Wechselwirkungen. Randomisierung, Kontrollgruppen und Vormessungen beseitigen jeweils andere Gefährdungen; sagen Sie, welche Gefährdung jede Designentscheidung adressiert.

### Experimentelle, quasi-experimentelle und beobachtende Designs

Experimente manipulieren eine unabhängige Variable und randomisieren die Zuteilung; Quasi-Experimente manipulieren oder nutzen Veränderungen ohne Randomisierung (z. B. unterbrochene Zeitreihen, nicht äquivalente Gruppen); beobachtende Designs messen nur. Kausale Aussagen erfordern in dieser Reihenfolge einen zunehmend expliziten Umgang mit Störvariablen (Confounding).

### Vertrauenswürdigkeit (Lincoln & Guba)

Das qualitative Gegenstück zur Validität: Glaubwürdigkeit (z. B. Member Checking, Triangulation), Übertragbarkeit (dichte Beschreibung), Zuverlässigkeit (Audit Trail) und Bestätigbarkeit (Reflexivität, nachvollziehbare Entscheidungen). Verwenden Sie diese Kriterien statt der Validitätssprache, wenn Ihr Design interpretativ ist.

### Mixed-Methods-Designs (Creswell & Plano Clark)

Kerndesigns: konvergent (beide Stränge parallel, danach zusammengeführt), explanatorisch-sequenziell (zuerst quantitativ, qualitativ zur Erklärung) und exploratorisch-sequenziell (zuerst qualitativ, dann quantitativ zur Prüfung oder zum Aufbau eines Instruments). Benennen Sie den Integrationspunkt ausdrücklich.

## Literatur

- Shadish, W. R., Cook, T. D., & Campbell, D. T. (2002). Experimental and quasi-experimental designs for generalized causal inference. Houghton Mifflin.
- Lincoln, Y. S., & Guba, E. G. (1985). Naturalistic inquiry. Sage.
- Creswell, J. W., & Plano Clark, V. L. (2018). Designing and conducting mixed methods research (3rd ed.). Sage.

## Übung

### Aufgabe

Sie schlagen ein bewusst einfaches Design vor – eine Regression der jährlichen globalen Temperatur auf CO₂ – und bitten Ihren KI-Assistenten um Alternativen und Gefährdungen der Validität, ohne die Regression zu rechnen. Sie lernen, ob er Scheinkorrelationen zwischen Trendreihen und ausgelassene Antriebe erkennt oder eine generische Lehrbuchliste liefert.

### Prompt

```text
Ich prüfe ein Forschungsdesign mit Klimadaten. Forschungsfrage: Wie viel der globalen Erwärmung seit 1959 hängt mit dem steigenden atmosphärischen CO₂ zusammen? Geplantes Design: eine einfache Regression nach der Methode der kleinsten Quadrate (OLS) der jährlichen globalen Temperaturanomalie (die angehängte monatliche HadCRUT5-CSV) auf die jährliche mittlere CO₂-Konzentration (die angehängte NOAA-Mauna-Loa-CO₂-CSV), 1959–2024. Vergleichen Sie dieses Design in einer Tabelle mit zwei realistischen Alternativen: Design, was es beantworten kann, wichtigste Stärken, wichtigste Schwächen, benötigte Daten. Listen Sie dann die wichtigsten Gefährdungen der Validität meines geplanten Designs auf, sortiert nach statistischer Schlussvalidität, interner, Konstrukt- und externer Validität, jeweils mit einer konkreten Gegenmaßnahme. Beziehen Sie sich, wo es passt, auf Merkmale der angehängten Dateien, etwa Basisperioden, Messstandorte und Codes für fehlende Werte. Führen Sie die Regression nicht aus; ich möchte eine Kritik des Designs, keine Ergebnisse. Seien Sie spezifisch für diese Studie statt generisch und bleiben Sie unter 450 Wörtern.
```

### Prüfung

Halten Sie Forster et al. (2025) bereit, hängen Sie es aber nicht an: Abschnitt 8, „Human contribution to surface temperature change“, kombiniert drei Attributionsmethoden mit allen Antrieben, nicht nur mit CO₂. Hat der Assistent ausgelassene Antriebe wie Aerosole genannt, ebenso die Gefahr einer Scheinkorrelation zwischen zwei Trendreihen, die Autokorrelation und die Messungen auf dem Maunakea in der CO₂-Datei (Dezember 2022 bis Juli 2023)?

## Mit eigenem Material

### Mitbringen

Ihre Forschungsfrage und Ihr geplantes Design in zwei bis drei Sätzen.

### Schritte

1. Fügen Sie Ihre Forschungsfrage und das geplante Design ein.
2. Bitten Sie um einen Vergleich von drei Designalternativen in einer Tabelle.
3. Bitten Sie um die wichtigsten Gefährdungen der Validität Ihres bevorzugten Designs mit Gegenmaßnahmen – und bei einem Experiment um einen Plan aus Bedingungen, Variablen und Kontrollen, der mit möglichst wenigen Durchläufen auskommt.
4. Vergleichen Sie die Gefährdungen mit dem, was Ihr Methodenlehrbuch oder Ihre Betreuungsperson nennen würde.

### Prompt

```text
Ich promoviere in [Fach]. Meine Forschungsfrage lautet: [Frage]. Mein geplantes Design ist: [Design]. Vergleichen Sie es in einer Tabelle mit zwei realistischen Alternativen: Design, was es beantworten kann, wichtigste Stärken, wichtigste Schwächen, praktische Anforderungen (Zeit, Zugang, Daten). Listen Sie dann für mein geplantes Design die wichtigsten Gefährdungen der Validität auf (bei qualitativer Arbeit: der Vertrauenswürdigkeit), jeweils mit einer konkreten Möglichkeit, sie zu verringern. Wenn mein Design ein Experiment ist, ergänzen Sie einen kurzen Plan: Bedingungen, unabhängige und abhängige Variablen, Kontrollen und Randomisierung, und schlagen Sie einen Versuchsplan vor (zum Beispiel ein fraktionelles faktorielles oder ein Response-Surface-Design), der die Informationen, die ich brauche, mit weniger Durchläufen liefert; nennen Sie dabei, welche Effekte er nicht trennen kann. Seien Sie spezifisch für meine Studie statt generisch. Bleiben Sie unter 450 Wörtern.
```

### Prüfung

Unter den genannten Gefährdungen sind die, die Sie aus Ihrer methodischen Ausbildung bereits kennen, und jede ist spezifisch für Ihre Studie statt eine Lehrbuchliste. Bei einem reduzierten Versuchsplan sind die Effekte benannt, die er nicht trennen kann, und Sie können damit leben.

## Technik

Fügen Sie Ihre Frage und Ihr Design in Ihren KI-Assistenten ein (z. B. Copilot, ChatGPT, Claude oder Gemini); Daten sind nicht nötig. Alternativ laden Sie einen nicht sensiblen Entwurf Ihres Methodenteils hoch. In der Übung hängen Sie die HadCRUT5- und die Mauna-Loa-CO₂-Datei an, damit der Assistent auf deren Eigenschaften eingehen kann.

## Stufen

### Chat

Führen Sie den Startprompt mit Ihrer Frage und Ihrem Design aus, oder mit den Dateien HadCRUT5 und Mauna-Loa-CO₂. Fragen Sie im selben Chat, welche einzelne Änderung am Design die schwerwiegendste Gefährdung beseitigen würde und was sie an Daten oder Zeit kosten würde.

### Projekt / Notebook

Fügen Sie Ihren Antragsentwurf, zwei oder drei zentrale Methodenarbeiten Ihres Fachs und die Anmerkungen Ihrer Betreuungsperson hinzu – in der Übungsversion A3 sowie D3 und D5 (speichern Sie die CSV-Dateien vorher als .xlsx). Fragen Sie, welche Gefährdungen die Methodenarbeiten ansprechen, die Ihr Design nicht abdeckt. Die Kritik bleibt neben ihren Quellen, sodass Sie nach jeder Überarbeitung darauf zurückkommen können.

### Eigener Assistent

Nennen Sie ihn „Design-Kritiker“. Anweisungen: das Design in einer festen Tabelle mit zwei realistischen Alternativen vergleichen, Gefährdungen nach den vier Validitätstypen sortieren (bei interpretativer Arbeit nach Kriterien der Vertrauenswürdigkeit), je eine studienspezifische Gegenmaßnahme nennen, nie Analysen ausführen oder Quellen erfinden. Wissen: die methodischen Hinweise Ihres Instituts, sofern Sie sie teilen dürfen. Startprompt: „Kritisieren Sie dieses Design: [Frage, Design, Analyseeinheit]“. Wiederverwendbar für jede neue Studie und jede Kapitelüberarbeitung.
