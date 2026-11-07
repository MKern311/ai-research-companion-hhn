---
name: forschungssoftware-und-simulationscode
description: "Code für Modelle, Simulationen oder Labordatenpipelines schreiben, refaktorisieren, testen und dokumentieren – und numerische Ergebnisse an bekannten Lösungen, Benchmarks und physikalischer Plausibilität (Einheiten, Erhaltungsgrößen, Wertebereiche) prüfen. Einsetzen bei: Forschungssoftware und Simulationscode."
---

# Forschungssoftware und Simulationscode

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/analyse-6

## Ziel

Code für Modelle, Simulationen oder Labordatenpipelines schreiben, refaktorisieren, testen und dokumentieren – und numerische Ergebnisse an bekannten Lösungen, Benchmarks und physikalischer Plausibilität (Einheiten, Erhaltungsgrößen, Wertebereiche) prüfen.

Erklärter, refaktorisierter Code mit Docstrings und Unit-Tests, die sein Verhalten festschreiben, einschließlich Randfällen, sowie Prüfungen der Zahlen an bekannten Lösungen und physikalischer Plausibilität – weniger stille Fehler und Software, die Sie hinterlegen und zitieren können.

## Wann einsetzen

Forschungscode wächst ohne Tests und Dokumentation; Monate später lässt sich nicht sagen, ob eine Änderung ein Ergebnis verändert hat, und andere können Ihren Code weder ausführen noch wiederverwenden oder zitieren.

## Ablauf mit der Nutzerin oder dem Nutzer

Führen Sie durch diese Schritte. Wo ein Schritt „den Assistenten bitten“ nennt, sind Sie gemeint.

1. Fügen Sie den Startprompt mit Ihrem Code ein und nennen Sie Sprache und Zweck.
2. Lesen Sie die Erklärung und prüfen Sie, ob sie dem entspricht, was der Code Ihrer Absicht nach tun soll.
3. Fordern Sie Unit-Tests für eine Funktion an, falls sie nicht enthalten waren.
4. Führen Sie die Tests in Ihrer eigenen Umgebung aus oder bitten Sie den Assistenten, sie auszuführen, wenn er Python ausführen kann; ist pytest dort nicht verfügbar, fordern Sie einfache assert-Anweisungen an.
5. Führen Sie eine vorgeschlagene Plausibilitätsprüfung durch, zum Beispiel an einem Fall, dessen Antwort Sie kennen.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.

## Typische Anfrage

```text
Ich bin Forschende bzw. Forschender und schreibe [Sprache]-Code für [Zweck, z. B. eine agentenbasierte Simulation von X]. Unten steht ein Teil meines eigenen Codes. Bitte 1) erklären Sie in einfacher Sprache, was er tut, 2) listen Sie mögliche Fehler, Randfälle und numerische Probleme auf, 3) schlagen Sie eine refaktorisierte Version mit klaren Namen und Docstrings vor, die das Verhalten unverändert lässt, 4) schreiben Sie Unit-Tests in [pytest oder testthat], die normale Fälle und Randfälle abdecken, und 5) schlagen Sie Prüfungen der numerischen Ergebnisse vor: einen Fall mit bekannter analytischer Lösung oder einem Benchmark, konsistente Einheiten, Erhaltungsgrößen und plausible Wertebereiche. Wenn Sie sich beim gewünschten Verhalten nicht sicher sind, fragen Sie nach, statt etwas anzunehmen. Code: [Code einfügen]
```

## Prüfung

Die Tests laufen, die refaktorisierte Version liefert bei gleicher Eingabe dieselbe Ausgabe wie Ihr Original, und Sie können jeden gemeldeten Fehler reproduzieren. Bei einem Fall mit bekannter Antwort reproduziert der Code sie.

## Grenzen

- Risiko: Eigene unveröffentlichte Entwürfe, Gutachten oder Inhalte Dritter.

## Wichtige Konzepte

- **Unit- und Regressionstests** – Unit-Tests prüfen, ob eine kleine Funktion für gegebene Eingaben die erwartete Ausgabe liefert, einschließlich Randfällen wie leeren, fehlenden oder extremen Werten; Regressionstests prüfen, dass sich Ergebnisse nach einer Refaktorisierung nicht ändern. Werkzeuge: pytest, testthat; wo kein Framework verfügbar ist, leisten einfache assert-Anweisungen bei wenigen Prüfungen dasselbe.
- **Good Enough Practices im wissenschaftlichen Rechnen** – Wilson et al. (2017): Code in Funktionen zerlegen, Duplikate beseitigen, aussagekräftige Namen verwenden, Abhängigkeiten explizit machen, einen kleinen Testdatensatz bereitstellen, Änderungen mit Versionsverwaltung verfolgen und Code in einem Repositorium hinterlegen, das DOIs vergibt.
- **FAIR-Prinzipien für Forschungssoftware (FAIR4RS)** – FAIR, auf Code übertragen (Barker et al., 2022): Software ist auffindbar durch einen persistenten Identifikator und Metadaten, zugänglich, interoperabel durch Standardformate und Schnittstellen und wiederverwendbar durch Lizenz, Dokumentation und Herkunftsnachweis (Provenienz).
- **Gleitkommaarithmetik** – Computer speichern die meisten Dezimalzahlen nur näherungsweise, sodass sich Ergebnisse zwischen Rechnern oder bei anderer Reihenfolge der Operationen in den letzten Stellen unterscheiden können (Goldberg, 1991). Vergleichen Sie Gleitkommazahlen in Tests mit einer Toleranz, zum Beispiel mit pytest.approx, nie mit exakter Gleichheit.

## Wichtige Literatur

- Wilson, G., Bryan, J., Cranston, K., Kitzes, J., Nederbragt, L., & Teal, T. K. (2017). Good enough practices in scientific computing. PLoS Computational Biology, 13(6), e1005510. https://doi.org/10.1371/journal.pcbi.1005510
- Barker, M., Chue Hong, N. P., Katz, D. S., Lamprecht, A.-L., Martinez-Ortiz, C., Psomopoulos, F., Harrow, J., Castro, L. J., Gruenpeter, M., Martinez, P. A., & Honeyman, T. (2022). Introducing the FAIR Principles for research software. Scientific Data, 9, 622. https://doi.org/10.1038/s41597-022-01710-x
- Goldberg, D. (1991). What every computer scientist should know about floating-point arithmetic. ACM Computing Surveys, 23(1), 5–48. https://doi.org/10.1145/103162.103163

## Hilfreiche Werkzeuge

GitHub (repositories) · GitHub Copilot
