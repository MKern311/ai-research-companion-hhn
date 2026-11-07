---
name: methodenberatung
description: "Vergleichen Sie Designalternativen mit ihren Vor- und Nachteilen, planen Sie Experimente (Bedingungen, Variablen, Kontrollen) – auch Designs mit weniger Durchläufen, etwa faktorielle oder Wirkungsflächen-Designs (Response-Surface) – und arbeiten Sie Gefährdungen der Validität systematisch ab. Einsetzen bei: Methodenberatung."
---

# Methodenberatung

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/design-0

## Ziel

Vergleichen Sie Designalternativen mit ihren Vor- und Nachteilen, planen Sie Experimente (Bedingungen, Variablen, Kontrollen) – auch Designs mit weniger Durchläufen, etwa faktorielle oder Wirkungsflächen-Designs (Response-Surface) – und arbeiten Sie Gefährdungen der Validität systematisch ab.

Ein Vergleich von drei Designs und eine Liste von Gefährdungen, sortiert nach Validitätstyp (statistische Schlussvalidität, interne, Konstrukt- und externe Validität), jeweils mit einer Gegenmaßnahme, die zu Ihrer Studie passt – und für Experimente ein Design mit weniger Durchläufen. Ein besser begründetes Methodenkapitel.

## Wann einsetzen

Designs folgen oft der ersten Idee oder der Gewohnheit des Fachs; Alternativen und Gefährdungen der Validität oder Vertrauenswürdigkeit tauchen spät auf – im Kolloquium oder im Gutachten.

## Vorgehen

1. Fügen Sie Ihre Forschungsfrage und das geplante Design ein.
2. Bitten Sie um einen Vergleich von drei Designalternativen in einer Tabelle.
3. Bitten Sie um die wichtigsten Gefährdungen der Validität Ihres bevorzugten Designs mit Gegenmaßnahmen – und bei einem Experiment um einen Plan aus Bedingungen, Variablen und Kontrollen, der mit möglichst wenigen Durchläufen auskommt.
4. Vergleichen Sie die Gefährdungen mit dem, was Ihr Methodenlehrbuch oder Ihre Betreuungsperson nennen würde.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.
- Nennen Sie ihn „Design-Kritiker“. Anweisungen: das Design in einer festen Tabelle mit zwei realistischen Alternativen vergleichen, Gefährdungen nach den vier Validitätstypen sortieren (bei interpretativer Arbeit nach Kriterien der Vertrauenswürdigkeit), je eine studienspezifische Gegenmaßnahme nennen, nie Analysen ausführen oder Quellen erfinden. Wissen: die methodischen Hinweise Ihres Instituts, sofern Sie sie teilen dürfen. Startprompt: „Kritisiere dieses Design: [Frage, Design, Analyseeinheit]“. Wiederverwendbar für jede neue Studie und jede Kapitelüberarbeitung.

## Startprompt

```text
Ich promoviere in [Fach]. Meine Forschungsfrage lautet: [Frage]. Mein geplantes Design ist: [Design]. Vergleiche es in einer Tabelle mit zwei realistischen Alternativen: Design, was es beantworten kann, wichtigste Stärken, wichtigste Schwächen, praktische Anforderungen (Zeit, Zugang, Daten). Liste dann für mein geplantes Design die wichtigsten Gefährdungen der Validität auf (bei qualitativer Arbeit: der Vertrauenswürdigkeit), jeweils mit einer konkreten Möglichkeit, sie zu verringern. Wenn mein Design ein Experiment ist, ergänze einen kurzen Plan: Bedingungen, unabhängige und abhängige Variablen, Kontrollen und Randomisierung, und schlage einen Versuchsplan vor (zum Beispiel ein fraktionelles faktorielles oder ein Response-Surface-Design), der die Informationen, die ich brauche, mit weniger Durchläufen liefert; nenne dabei, welche Effekte er nicht trennen kann. Sei spezifisch für meine Studie statt generisch. Bleibe unter 450 Wörtern.
```

## Prüfung

Unter den genannten Gefährdungen sind die, die Sie aus Ihrer methodischen Ausbildung bereits kennen, und jede ist spezifisch für Ihre Studie statt eine Lehrbuchliste. Bei einem reduzierten Versuchsplan sind die Effekte benannt, die er nicht trennen kann, und Sie können damit leben.

## Grenzen

- Risiko: Eigene unveröffentlichte Entwürfe, Gutachten oder Inhalte Dritter.

## Wichtige Konzepte

- **Validitätstypologie (Shadish, Cook & Campbell)** – Vier Typen: statistische Schlussvalidität (ist die Kovariation real?), interne Validität (ist sie kausal?), Konstruktvalidität (repräsentieren Messungen und Interventionen die Konzepte?) und externe Validität (lässt sich verallgemeinern?). Nutzen Sie sie, um Gefährdungen in quantitativen Designs systematisch zu sortieren.
- **Gefährdungen der internen Validität** – Die klassische Liste: Geschichte (History), Reifung (Maturation), Testeffekte, Instrumentierung, Regression zur Mitte, Selektion, Ausfälle (Attrition) und ihre Wechselwirkungen. Randomisierung, Kontrollgruppen und Vormessungen beseitigen jeweils andere Gefährdungen; sagen Sie, welche Gefährdung jede Designentscheidung adressiert.
- **Experimentelle, quasi-experimentelle und beobachtende Designs** – Experimente manipulieren eine unabhängige Variable und randomisieren die Zuteilung; Quasi-Experimente manipulieren oder nutzen Veränderungen ohne Randomisierung (z. B. unterbrochene Zeitreihen, nicht äquivalente Gruppen); beobachtende Designs messen nur. Kausale Aussagen erfordern in dieser Reihenfolge einen zunehmend expliziten Umgang mit Störvariablen (Confounding).
- **Vertrauenswürdigkeit (Lincoln & Guba)** – Das qualitative Gegenstück zur Validität: Glaubwürdigkeit (z. B. Member Checking, Triangulation), Übertragbarkeit (dichte Beschreibung), Zuverlässigkeit (Audit Trail) und Bestätigbarkeit (Reflexivität, nachvollziehbare Entscheidungen). Verwenden Sie diese Kriterien statt der Validitätssprache, wenn Ihr Design interpretativ ist.
- **Mixed-Methods-Designs (Creswell & Plano Clark)** – Kerndesigns: konvergent (beide Stränge parallel, danach zusammengeführt), explanatorisch-sequenziell (zuerst quantitativ, qualitativ zur Erklärung) und exploratorisch-sequenziell (zuerst qualitativ, dann quantitativ zur Prüfung oder zum Aufbau eines Instruments). Benennen Sie den Integrationspunkt ausdrücklich.

## Wichtige Literatur

- Shadish, W. R., Cook, T. D., & Campbell, D. T. (2002). Experimental and quasi-experimental designs for generalized causal inference. Houghton Mifflin.
- Lincoln, Y. S., & Guba, E. G. (1985). Naturalistic inquiry. Sage.
- Creswell, J. W., & Plano Clark, V. L. (2018). Designing and conducting mixed methods research (3rd ed.). Sage.

## Hilfreiche Werkzeuge

Statistik GPT
