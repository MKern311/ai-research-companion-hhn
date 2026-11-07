---
name: text-als-daten
description: "Klassifikation, Sentimentanalyse und Topic Modelling großer Textkorpora mit Sprachmodellen. Einsetzen bei: Text als Daten."
---

# Text als Daten

> Aus der Wissensbasis „KI im Forschungsprozess“ (Hochschule Heilbronn) – https://mkern311.github.io/ai-research-companion-hhn/#/uc/analyse-3

## Ziel

Klassifikation, Sentimentanalyse und Topic Modelling großer Textkorpora mit Sprachmodellen.

Erste Labels und Themen samt dem zugehörigen Code, validiert an einer von Hand codierten Stichprobe, sodass Sie beurteilen können, ob sich eine automatisierte Textanalyse für Ihr Material eignet, bevor Sie eine Pipeline bauen.

## Wann einsetzen

Hunderte offene Antworten, Abstracts oder Dokumente sind zu viele, um sie genau zu lesen, und sie von Hand zu kennzeichnen ist langsam und über Zeit und Codierende hinweg schwer konsistent zu halten.

## Ablauf mit der Nutzerin oder dem Nutzer

Führen Sie durch diese Schritte. Wo ein Schritt „den Assistenten bitten“ nennt, sind Sie gemeint.

1. Hängen Sie die CSV-Datei an und fügen Sie den Startprompt ein; nennen Sie dabei die Textspalte.
2. Lesen Sie zehn der gekennzeichneten Texte selbst und zählen Sie, in wie vielen Sie zustimmen.
3. Lesen Sie zwei Texte je Thema und beurteilen Sie, ob die häufigsten Wörter passen.
4. Bitten Sie den Assistenten, die Zahl der Themen zu ändern, und vergleichen Sie die Ergebnisse.

## Arbeitsregeln

- Erfinden Sie nie Quellen, Zitate, Zahlen oder DOIs; sagen Sie, wenn Sie unsicher sind.
- Kennzeichnen Sie klar, was aus dem Material der Nutzerin oder des Nutzers stammt und was Ihr eigener Vorschlag ist.
- Halten Sie an und fragen Sie nach, wenn Material fehlt oder unklar ist.

## Typische Anfrage

```text
Ich erkunde Text als Daten für ein Projekt zu [Thema]. Die angehängte CSV-Datei enthält [Anzahl] Texte in der Spalte [Spaltenname]. 1) Ordnen Sie den ersten 30 Zeilen ein Sentiment (positiv, neutral oder negativ) oder eine dieser Kategorien zu: [Kategorien mit Definitionen], jeweils mit einer einzeiligen Begründung. 2) Führen Sie mit Python ein einfaches Topic-Modell über alle Zeilen mit [5] Themen aus und zeigen Sie die zehn häufigsten Wörter je Thema sowie den Code. Nennen Sie die verwendete Methode und die Einstellungen und sagen Sie, wo die Ergebnisse instabil wirken.
```

## Prüfung

Sie stimmen mindestens acht der zehn von Hand geprüften Labels zu, und die Themen sehen ähnlich aus, wenn Sie die Themenzahl leicht ändern.

## Grenzen

- Ein Chat kann dies an einer kleinen Stichprobe testen; ein großes Korpus mit einem Sprachmodell zu klassifizieren erfordert eine skriptgesteuerte Pipeline außerhalb des Chats.
- Risiko: Personenbezogene oder sensible Daten oder Entscheidungen, die direkt in Ihre Ergebnisse einfließen.

## Wichtige Konzepte

- **Validieren, validieren, validieren** – Das Prinzip von Grimmer und Stewart (2013): Automatisierte Textmethoden sind nicht allgemein richtig oder falsch, daher muss jede Anwendung an Ihrem eigenen Material gegen menschliches Urteil geprüft werden, bevor Sie Ergebnisse berichten.
- **Precision, Recall und F1** – Maße gegenüber einem von Hand codierten Goldstandard: Die Precision (Genauigkeit) ist der Anteil der Texte mit einem Label, die tatsächlich dazugehören, der Recall (Trefferquote) der Anteil der tatsächlichen Fälle, die gefunden wurden, F1 ihr harmonisches Mittel. Berichten Sie sie je Kategorie.
- **Latent Dirichlet Allocation (LDA)** – Ein probabilistisches Topic-Modell, das jedes Dokument als Mischung von Themen und jedes Thema als Verteilung über Wörter behandelt (Blei et al., 2003). Die Ergebnisse hängen von der Themenzahl, der Vorverarbeitung und dem Zufallsstartwert (Seed) ab und erfordern viele Dokumente.
- **Zero-Shot-Klassifikation mit großen Sprachmodellen** – Texte anhand von Kategoriendefinitionen in einem Prompt kennzeichnen, ohne Trainingsbeispiele. Gilardi et al. (2023) fanden, dass sie bei mehreren Annotationsaufgaben besser abschnitt als Crowd-Arbeitende, doch die Leistung schwankt je nach Aufgabe und Modell und muss an Ihren Daten geprüft werden.

## Wichtige Literatur

- Grimmer, J., & Stewart, B. M. (2013). Text as data: The promise and pitfalls of automatic content analysis methods for political texts. Political Analysis, 21(3), 267–297. https://doi.org/10.1093/pan/mps028
- Blei, D. M., Ng, A. Y., & Jordan, M. I. (2003). Latent Dirichlet allocation. Journal of Machine Learning Research, 3, 993–1022.
- Gilardi, F., Alizadeh, M., & Kubli, M. (2023). ChatGPT outperforms crowd workers for text-annotation tasks. Proceedings of the National Academy of Sciences, 120(30), e2305016120. https://doi.org/10.1073/pnas.2305016120

## Hilfreiche Werkzeuge

MAXQDA · GitHub Copilot
