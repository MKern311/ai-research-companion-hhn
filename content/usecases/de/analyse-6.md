---
id: analyse-6
phase: analyse
order: 6
title: Forschungssoftware und Simulationscode
risk: 2
mode: Co-create
potential: 3
capabilities: generierung; analyse
routes: chat; files; external; connected
connect: GitHub (repositories)
tools: GitHub Copilot
repos: awesome-copilot
data: D6
practice_data: D6
---

Code für Modelle, Simulationen oder Labordatenpipelines schreiben, refaktorisieren, testen und dokumentieren – und numerische Ergebnisse an bekannten Lösungen, Benchmarks und physikalischer Plausibilität (Einheiten, Erhaltungsgrößen, Wertebereiche) prüfen.

## Problem

Forschungscode wächst ohne Tests und Dokumentation; Monate später lässt sich nicht sagen, ob eine Änderung ein Ergebnis verändert hat, und andere können Ihren Code weder ausführen noch wiederverwenden oder zitieren.

## Ergebnis

Erklärter, refaktorisierter Code mit Docstrings und Unit-Tests, die sein Verhalten festschreiben, einschließlich Randfällen, sowie Prüfungen der Zahlen an bekannten Lösungen und physikalischer Plausibilität – weniger stille Fehler und Software, die Sie hinterlegen und zitieren können.

## Vorgehen

1. Einen kurzen Codeabschnitt einfügen und seinen Zweck nennen
2. Prüfen, ob die Erklärung zu Ihrer Absicht passt
3. Unit-Tests anfordern, einschließlich Randfällen
4. Die Tests ausführen, bevor Sie eine Refaktorisierung akzeptieren
5. Ergebnisse an einer bekannten Lösung oder einem Benchmark prüfen
6. Vor der Weitergabe Lizenz, README und Zitationsdatei hinzufügen

## Konzepte

### Unit- und Regressionstests

Unit-Tests prüfen, ob eine kleine Funktion für gegebene Eingaben die erwartete Ausgabe liefert, einschließlich Randfällen wie leeren, fehlenden oder extremen Werten; Regressionstests prüfen, dass sich Ergebnisse nach einer Refaktorisierung nicht ändern. Werkzeuge: pytest, testthat; wo kein Framework verfügbar ist, leisten einfache assert-Anweisungen bei wenigen Prüfungen dasselbe.

### Good Enough Practices im wissenschaftlichen Rechnen

Wilson et al. (2017): Code in Funktionen zerlegen, Duplikate beseitigen, aussagekräftige Namen verwenden, Abhängigkeiten explizit machen, einen kleinen Testdatensatz bereitstellen, Änderungen mit Versionsverwaltung verfolgen und Code in einem Repositorium hinterlegen, das DOIs vergibt.

### FAIR-Prinzipien für Forschungssoftware (FAIR4RS)

FAIR, auf Code übertragen (Barker et al., 2022): Software ist auffindbar durch einen persistenten Identifikator und Metadaten, zugänglich, interoperabel durch Standardformate und Schnittstellen und wiederverwendbar durch Lizenz, Dokumentation und Herkunftsnachweis (Provenienz).

### Gleitkommaarithmetik

Computer speichern die meisten Dezimalzahlen nur näherungsweise, sodass sich Ergebnisse zwischen Rechnern oder bei anderer Reihenfolge der Operationen in den letzten Stellen unterscheiden können (Goldberg, 1991). Vergleichen Sie Gleitkommazahlen in Tests mit einer Toleranz, zum Beispiel mit pytest.approx, nie mit exakter Gleichheit.

## Literatur

- Wilson, G., Bryan, J., Cranston, K., Kitzes, J., Nederbragt, L., & Teal, T. K. (2017). Good enough practices in scientific computing. PLoS Computational Biology, 13(6), e1005510. doi:10.1371/journal.pcbi.1005510
- Barker, M., Chue Hong, N. P., Katz, D. S., Lamprecht, A.-L., Martinez-Ortiz, C., Psomopoulos, F., Harrow, J., Castro, L. J., Gruenpeter, M., Martinez, P. A., & Honeyman, T. (2022). Introducing the FAIR Principles for research software. Scientific Data, 9, 622. doi:10.1038/s41597-022-01710-x
- Goldberg, D. (1991). What every computer scientist should know about floating-point arithmetic. ACM Computing Surveys, 23(1), 5–48. doi:10.1145/103162.103163

## Übung

### Aufgabe

Lassen Sie den Assistenten eine Funktion schreiben und testen, die den unregelmäßigen täglichen Meereis-Datensatz in Monatsmittel überführt. Sie erfahren, ob seine Tests echte Randfälle abdecken – Messung an jedem zweiten Tag, die Lücke 1987–88, die Zeile mit den Einheiten – oder nur den einfachen Pfad.

### Prompt

```text
Ich schreibe Python-Code für eine Forschungsdatenpipeline. Angehängt ist die CSV-Datei des NSIDC mit der täglichen arktischen Meereisausdehnung: Die zweite Zeile ist eine Zeile mit Einheiten, die Werte wurden bis Mitte 1987 an jedem zweiten Tag erfasst, und um Dezember 1987 und Januar 1988 gibt es eine Lücke. 1) Schreiben Sie eine dokumentierte Funktion monthly_extent(df, min_days), die für jeden Monat die mittlere Ausdehnung, die Anzahl der verwendeten Tageswerte und ein Kennzeichen zurückgibt, wenn weniger als min_days Werte vorliegen; in diesem Fall fehlt der Mittelwert. 2) Schreiben Sie pytest-Unit-Tests für einen normalen Monat, einen Monat mit Daten an jedem zweiten Tag, einen Monat innerhalb der Lücke, eine leere Eingabe und einen Gleitkommavergleich mit Toleranz. 3) Führen Sie die Tests aus; ist pytest nicht verfügbar, führen Sie dieselben Prüfungen als einfache assert-Anweisungen aus und sagen Sie das. Führen Sie die Funktion anschließend mit min_days = 10 auf der Datei aus und zeigen Sie die Ergebnisse für 1987 und 1988. Wenn das gewünschte Verhalten unklar ist, fragen Sie nach, statt etwas anzunehmen.
```

### Prüfung

Der Dezember 1987 hat nur 2 Tageswerte und der Januar 1988 19, daher muss der Dezember gekennzeichnet sein und sein Mittelwert fehlen. Monate vor August 1987 sollten etwa 15 Werte zeigen. Rechnen Sie ein Monatsmittel in Excel nach. Einfache assert-Anweisungen statt pytest sind in Ordnung, solange ein falsches Ergebnis einen Test fehlschlagen ließe.

## Mit eigenem Material

### Mitbringen

50–150 Zeilen eigenen, nicht vertraulichen Codes ohne Passwörter, API-Schlüssel oder Daten oder eine kurze Beschreibung eines kleinen Modells, das Sie bauen möchten.

### Schritte

1. Fügen Sie den Startprompt mit Ihrem Code ein und nennen Sie Sprache und Zweck.
2. Lesen Sie die Erklärung und prüfen Sie, ob sie dem entspricht, was der Code Ihrer Absicht nach tun soll.
3. Fordern Sie Unit-Tests für eine Funktion an, falls sie nicht enthalten waren.
4. Führen Sie die Tests in Ihrer eigenen Umgebung aus oder bitten Sie den Assistenten, sie auszuführen, wenn er Python ausführen kann; ist pytest dort nicht verfügbar, fordern Sie einfache assert-Anweisungen an.
5. Führen Sie eine vorgeschlagene Plausibilitätsprüfung durch, zum Beispiel an einem Fall, dessen Antwort Sie kennen.

### Prompt

```text
Ich bin Forschende bzw. Forschender und schreibe [Sprache]-Code für [Zweck, z. B. eine agentenbasierte Simulation von X]. Unten steht ein Teil meines eigenen Codes. Bitte 1) erklären Sie in einfacher Sprache, was er tut, 2) listen Sie mögliche Fehler, Randfälle und numerische Probleme auf, 3) schlagen Sie eine refaktorisierte Version mit klaren Namen und Docstrings vor, die das Verhalten unverändert lässt, 4) schreiben Sie Unit-Tests in [pytest oder testthat], die normale Fälle und Randfälle abdecken, und 5) schlagen Sie Prüfungen der numerischen Ergebnisse vor: einen Fall mit bekannter analytischer Lösung oder einem Benchmark, konsistente Einheiten, Erhaltungsgrößen und plausible Wertebereiche. Wenn Sie sich beim gewünschten Verhalten nicht sicher sind, fragen Sie nach, statt etwas anzunehmen. Code: [Code einfügen]
```

### Prüfung

Die Tests laufen, die refaktorisierte Version liefert bei gleicher Eingabe dieselbe Ausgabe wie Ihr Original, und Sie können jeden gemeldeten Fehler reproduzieren. Bei einem Fall mit bekannter Antwort reproduziert der Code sie.

## Technik

Fügen Sie Code in Ihren KI-Assistenten ein; kann er Python ausführen, kann er die Tests selbst ausführen. Nutzen Sie für ganze Projekte einen Coding-Assistenten in Ihrem Editor (z. B. GitHub Copilot, Claude Code), der Ihr Repository liest. Fügen Sie nie Schlüssel, Passwörter oder vertrauliche Daten ein.

## Stufen

### Chat

Führen Sie den Startprompt mit der angehängten Meereis-CSV aus. Bitten Sie den Assistenten danach im selben Chat, einen Test hinzuzufügen, der fehlschlagen würde, wenn das Kennzeichen für Dezember 1987 fehlte, und führen Sie ihn aus (oder führen Sie ihn selbst aus).

### Projekt / Notebook

Fügen Sie die Meereis-Datei (D6; speichern Sie sie als .xlsx oder .txt, wenn Ihr Werkzeug keine CSV-Dateien akzeptiert) mit Ihrer Funktion und Ihren Tests als .txt gespeichert und einer kurzen Designnotiz zum gewünschten Verhalten hinzu. Fragen Sie, ob die Tests jede Regel der Designnotiz abdecken. Je nach Werkzeug führt das Projekt oder Notebook keinen Code aus, bewahrt aber mit der Zeit die Dokumentation darüber auf, warum sich der Code so verhält.

### Eigener Assistent

Erstellen Sie einen konfigurierten Assistenten (z. B. einen Copilot-Agenten, ein ChatGPT-Projekt, ein Gemini Gem oder ein Claude-Projekt). Legen Sie in seinen dauerhaften Anweisungen Ihre Sprache und Regeln fest: Docstrings, Unit-Tests für normale Fälle und Randfälle (einfache asserts, wenn pytest fehlt), eine Prüfung an einem bekannten Ergebnis oder Benchmark, Einheiten und Wertebereiche benennen, „bei unklarem Verhalten nachfragen“ und nie Schlüssel oder Passwörter einfügen. Schalten Sie Codeausführung ein, wenn Ihr Werkzeug sie anbietet, damit er Python-Tests ausführen kann. Startprompt: „Prüfen Sie diese Funktion und schreiben Sie Tests für ihre Randfälle.“ Wiederverwendbar für jedes neue Modul.

### Automatisierung / eigener Code

Verbinden Sie GitHub (repositories) über seinen MCP-Server, damit der Assistent Ihr Repository, Issues und Pull Requests lesen und Änderungen kommentieren kann – ein konfigurierter Assistent ohne Verbindungen sieht nur, was Sie einfügen oder hochladen. Auf GitHub selbst: Ein GitHub-Actions-Workflow führt Ihre Tests bei jeder Änderung aus, und ein KI-Code-Reviewer kann Ihre Pull Requests prüfen. Prüfen Sie Datenschutz und Freigabe vorher mit Ihrer Hochschule.
