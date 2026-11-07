---
name: pseudonymisierung-von-transkripten
description: "Erkennen und ersetzen Sie Namen, Orte und andere Identifikatoren vor der Analyse – in einer freigegebenen Umgebung und immer von Hand geprüft. Einsetzen bei: Pseudonymisierung von Transkripten."
---

# Pseudonymisierung von Transkripten

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/erhebung-5

## Ziel

Erkennen und ersetzen Sie Namen, Orte und andere Identifikatoren vor der Analyse – in einer freigegebenen Umgebung und immer von Hand geprüft.

Ein pseudonymisierter Entwurf, ein Ersetzungsprotokoll und der Anteil der eingebauten direkten und indirekten Identifikatoren, die übersehen wurden – ein Beleg dafür, was Ihre manuelle Prüfung vor der Analyse noch abfangen muss.

## Wann einsetzen

Transkripte von Hand zu pseudonymisieren ist mühsam, und indirekte Identifikatoren – eine seltene Berufsbezeichnung, ein lokales Ereignis – werden leicht übersehen, sodass Kombinationen Teilnehmende weiterhin re-identifizieren können.

## Ablauf mit der Nutzerin oder dem Nutzer

Führen Sie durch diese Schritte. Wo ein Schritt „den Assistenten bitten“ nennt, sind Sie gemeint.

1. Schreiben Sie einen Ausschnitt von 200 Wörtern mit fiktiven Namen, Orten und Daten, oder lassen Sie ihn vom Assistenten erfinden.
2. Notieren Sie jeden Identifikator, den Sie eingebaut haben, auch indirekte wie eine seltene Berufsbezeichnung.
3. Fügen Sie den Startprompt mit dem Ausschnitt ein.
4. Vergleichen Sie die Ausgabe mit Ihrer Liste und markieren Sie jeden übersehenen oder nicht markierten Identifikator.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.

## Typische Anfrage

```text
Unten steht ein erfundener Interviewausschnitt. Pseudonymisieren Sie ihn für die qualitative Analyse. Ersetzen Sie Personennamen durch [P1], [P2]; Orte durch [STADT] oder [REGION]; Organisationen durch [ORG1], [ORG2]; genaue Daten durch [DATUM]; und lassen Sie alles andere wortgetreu. Markieren Sie außerdem, ohne sie zu ändern, indirekte Identifikatoren, die in Kombination jemanden verraten könnten, etwa seltene Berufsbezeichnungen oder besondere Ereignisse. Geben Sie zurück: 1) den pseudonymisierten Text und 2) eine Tabelle: ursprünglicher Begriff, Ersetzung, Typ. Ausschnitt: [erfundenen Text einfügen]
```

## Prüfung

Suchen Sie in der Ausgabe nach jedem Identifikator, den Sie eingebaut haben; jeder, der stehen bleibt oder nicht markiert wird, zeigt, warum echte Transkripte eine freigegebene Umgebung und eine vollständige manuelle Prüfung brauchen.

## Grenzen

- Dies testet die Methode nur an einem erfundenen Ausschnitt; fügen Sie nie echte Transkripte oder Daten von Teilnehmenden in einen Chat mit einem KI-Assistenten ein.
- Risiko: Personenbezogene oder sensible Daten oder Entscheidungen, die direkt in Ihre Ergebnisse einfließen.

## Wichtige Konzepte

- **Pseudonymisierung versus Anonymisierung (UK-DSGVO)** – Pseudonymisierte Daten ersetzen Identifikatoren, lassen sich aber mit einem getrennt aufbewahrten Schlüssel wieder zuordnen und bleiben daher personenbezogene Daten. Anonyme Daten können vernünftigerweise niemanden mehr identifizieren. Die meisten qualitativen Transkripte sind pseudonymisiert, nicht anonym.
- **Direkte und indirekte Identifikatoren** – Direkte Identifikatoren benennen eine Person (Name, E-Mail, Adresse). Indirekte oder Quasi-Identifikatoren – Berufsbezeichnung, Arbeitgeber, seltenes Ereignis, Alter, Ort – identifizieren in Kombination. Sweeney (2002) formalisierte den Schutz als k-Anonymität: Jede Kombination sollte auf mindestens k Personen zutreffen.
- **Recall und Precision der De-Identifizierung** – Recall ist der Anteil der echten Identifikatoren, die das Werkzeug erkannt hat; Precision ist der Anteil seiner Ersetzungen, die echte Identifikatoren waren. Für die Vertraulichkeit zählt der Recall am meisten, da ein einziger Fehler re-identifizieren kann, messen Sie ihn daher an eingebauten Identifikatoren.
- **Konsistente Ersetzung und analytische Integrität** – Verwenden Sie ein stabiles Pseudonym je Person und Kategorienbezeichnungen wie [STADT] oder [ORG1], und bewahren Sie das Ersetzungsprotokoll getrennt und sicher auf. Zu starkes Schwärzen kann analytische Bedeutung zerstören; halten Sie fest, was Sie geändert haben und warum.

## Wichtige Literatur

- Sweeney, L. (2002). k-anonymity: A model for protecting privacy. International Journal of Uncertainty, Fuzziness and Knowledge-Based Systems, 10(5), 557–570. https://doi.org/10.1142/S0218488502001648
- Saunders, B., Kitzinger, J., & Kitzinger, C. (2015). Anonymising interview data: Challenges and compromise in practice. Qualitative Research, 15(5), 616–632. https://doi.org/10.1177/1468794114550439
