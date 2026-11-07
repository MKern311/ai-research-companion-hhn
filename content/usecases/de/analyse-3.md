---
id: analyse-3
phase: analyse
order: 3
title: Text als Daten
risk: 3
mode: Delegate
potential: 3
capabilities: analyse
routes: files; external
tools: MAXQDA; GitHub Copilot
data: A3
practice_data: A3
---

Klassifikation, Sentimentanalyse und Topic Modelling großer Textkorpora mit Sprachmodellen.

## Problem

Hunderte offene Antworten, Abstracts oder Dokumente sind zu viele, um sie genau zu lesen, und sie von Hand zu kennzeichnen ist langsam und über Zeit und Codierende hinweg schwer konsistent zu halten.

## Ergebnis

Erste Labels und Themen samt dem zugehörigen Code, validiert an einer von Hand codierten Stichprobe, sodass Sie beurteilen können, ob sich eine automatisierte Textanalyse für Ihr Material eignet, bevor Sie eine Pipeline bauen.

## Vorgehen

1. Zuerst Kategorien mit kurzen Definitionen festlegen
2. Texte mit einer ID-Spalte hochladen
3. Eine Stichprobe von Hand codieren und mit den Labels des Assistenten vergleichen
4. Mit anderen Einstellungen erneut ausführen und die Stabilität vergleichen

## Konzepte

### Validieren, validieren, validieren

Das Prinzip von Grimmer und Stewart (2013): Automatisierte Textmethoden sind nicht allgemein richtig oder falsch, daher muss jede Anwendung an Ihrem eigenen Material gegen menschliches Urteil geprüft werden, bevor Sie Ergebnisse berichten.

### Precision, Recall und F1

Maße gegenüber einem von Hand codierten Goldstandard: Die Precision (Genauigkeit) ist der Anteil der Texte mit einem Label, die tatsächlich dazugehören, der Recall (Trefferquote) der Anteil der tatsächlichen Fälle, die gefunden wurden, F1 ihr harmonisches Mittel. Berichten Sie sie je Kategorie.

### Latent Dirichlet Allocation (LDA)

Ein probabilistisches Topic-Modell, das jedes Dokument als Mischung von Themen und jedes Thema als Verteilung über Wörter behandelt (Blei et al., 2003). Die Ergebnisse hängen von der Themenzahl, der Vorverarbeitung und dem Zufallsstartwert (Seed) ab und erfordern viele Dokumente.

### Zero-Shot-Klassifikation mit großen Sprachmodellen

Texte anhand von Kategoriendefinitionen in einem Prompt kennzeichnen, ohne Trainingsbeispiele. Gilardi et al. (2023) fanden, dass sie bei mehreren Annotationsaufgaben besser abschnitt als Crowd-Arbeitende, doch die Leistung schwankt je nach Aufgabe und Modell und muss an Ihren Daten geprüft werden.

## Literatur

- Grimmer, J., & Stewart, B. M. (2013). Text as data: The promise and pitfalls of automatic content analysis methods for political texts. Political Analysis, 21(3), 267–297. doi:10.1093/pan/mps028
- Blei, D. M., Ng, A. Y., & Jordan, M. I. (2003). Latent Dirichlet allocation. Journal of Machine Learning Research, 3, 993–1022.
- Gilardi, F., Alizadeh, M., & Kubli, M. (2023). ChatGPT outperforms crowd workers for text-annotation tasks. Proceedings of the National Academy of Sciences, 120(30), e2305016120. doi:10.1073/pnas.2305016120

## Übung

### Aufgabe

Führen Sie ein Topic-Modell über den Volltext des Berichts von Forster et al. (2025) aus, in Abschnitte (Chunks) zerlegt, und vergleichen Sie die Themen mit seinen Kapitelüberschriften. Sie erfahren, ob der Assistent Vorverarbeitung und Einstellungen nennt, die Stabilität über mehrere Läufe prüft und unscharfe Themen eingesteht, statt sie selbstsicher zu benennen.

### Prompt

```text
Ich teste Topic Modelling als Text-als-Daten-Methode. Angehängt ist das PDF von Forster et al. (2025), Indicators of Global Climate Change 2024, ein 40-seitiger Bericht mit nummerierten Abschnitten zu verschiedenen Indikatoren. Gehen Sie mit Python so vor: 1) Extrahieren Sie den Text bis zum Literaturverzeichnis, zerlegen Sie ihn in Chunks von etwa 150 Wörtern und nennen Sie die Anzahl der Chunks. 2) Führen Sie ein LDA-Topic-Modell mit 6 Themen aus; nennen Sie die Vorverarbeitung (Stoppwörter, minimale Wortlänge, minimale Dokumenthäufigkeit) und den Zufallsstartwert und zeigen Sie die zehn häufigsten Wörter je Thema. 3) Nennen Sie für jedes Thema die Kapitelüberschrift des Berichts, die am besten passt, oder sagen Sie, dass keine passt. 4) Führen Sie das Modell mit einem anderen Startwert und mit 10 Themen erneut aus und sagen Sie, welche Themen stabil bleiben. Zeigen Sie den Code. Wenn Python das PDF nicht lesen kann, sagen Sie das, statt den Text zu rekonstruieren.
```

### Prüfung

Listen Sie die Kapitelüberschriften selbst auf (die Abschnitte 2–12 reichen von 'Greenhouse gas emissions' bis 'Global mean sea-level rise') und zählen Sie, wie viele Themen eindeutig zu einer passen. Erwarten Sie, dass das nur bei einigen der Fall ist und allgemeine Wörter wie 'global', 'warming' oder 'change' die Spitzenlisten füllen; der Assistent sollte das sagen und zusätzliche Stoppwörter vorschlagen, statt jedes Thema selbstsicher zu benennen. Die Themen sollten sich zwischen den Startwerten verschieben.

## Mit eigenem Material

### Mitbringen

Eine CSV-Datei mit 50–200 kurzen öffentlichen Texten, etwa Open-Access-Abstracts oder öffentlichen Produktbewertungen ohne Autorennamen, sowie eine ID-Spalte.

### Schritte

1. Hängen Sie die CSV-Datei an und fügen Sie den Startprompt ein; nennen Sie dabei die Textspalte.
2. Lesen Sie zehn der gekennzeichneten Texte selbst und zählen Sie, in wie vielen Sie zustimmen.
3. Lesen Sie zwei Texte je Thema und beurteilen Sie, ob die häufigsten Wörter passen.
4. Bitten Sie den Assistenten, die Zahl der Themen zu ändern, und vergleichen Sie die Ergebnisse.

### Prompt

```text
Ich erkunde Text als Daten für ein Projekt zu [Thema]. Die angehängte CSV-Datei enthält [Anzahl] Texte in der Spalte [Spaltenname]. 1) Ordnen Sie den ersten 30 Zeilen ein Sentiment (positiv, neutral oder negativ) oder eine dieser Kategorien zu: [Kategorien mit Definitionen], jeweils mit einer einzeiligen Begründung. 2) Führen Sie mit Python ein einfaches Topic-Modell über alle Zeilen mit [5] Themen aus und zeigen Sie die zehn häufigsten Wörter je Thema sowie den Code. Nennen Sie die verwendete Methode und die Einstellungen und sagen Sie, wo die Ergebnisse instabil wirken.
```

### Prüfung

Sie stimmen mindestens acht der zehn von Hand geprüften Labels zu, und die Themen sehen ähnlich aus, wenn Sie die Themenzahl leicht ändern.

### Grenze

Ein Chat kann dies an einer kleinen Stichprobe testen; ein großes Korpus mit einem Sprachmodell zu klassifizieren erfordert eine skriptgesteuerte Pipeline außerhalb des Chats.

## Technik

Laden Sie eine CSV-Datei oder PDFs in Ihren KI-Assistenten hoch; er kennzeichnet die Texte selbst und führt, wenn er Code ausführen kann, ein Topic-Modell in Python aus (zum Beispiel LDA mit scikit-learn). Akzeptiert Ihr Werkzeug den Dateityp nicht, speichern Sie ihn als .xlsx oder .txt. Führen Sie bei größeren Korpora den zurückgegebenen Code in Ihrer eigenen Python- oder R-Umgebung aus.

## Stufen

### Chat

Führen Sie den Startprompt mit dem angehängten Forster-PDF aus. Bitten Sie den Assistenten danach im selben Chat, die von ihm vorgeschlagenen zusätzlichen Stoppwörter zu ergänzen, mit zwei Startwerten erneut zu rechnen und eine Tabelle der Themen zu zeigen, die bestehen bleiben.

### Projekt / Notebook

Fügen Sie den Forster-Bericht (A3), Code und Themenlisten Ihrer Chat-Läufe als .txt gespeichert und eine Notiz zu Ihren Einstellungen hinzu. Fragen Sie, zu welchen Passagen des Berichts jedes gespeicherte Thema passt und wie sich zwei Läufe unterscheiden. Fügen Sie für Ihr eigenes Korpus nur genehmigte, nicht sensible Texte hinzu. Einstellungen, Ausgaben und Ihre Interpretation bleiben beieinander; jedes Themenlabel beurteilen Sie selbst.

### Eigener Assistent

Erstellen Sie einen konfigurierten Assistenten (z. B. einen Copilot-Agenten, einen Custom GPT, ein Gemini Gem oder ein Claude-Projekt). Legen Sie in seinen dauerhaften Anweisungen die Methode fest: Vorverarbeitungsregeln, einen festen Zufallsstartwert, die Zahl der Themen, einen Stabilitätslauf, Tabellen der häufigsten Wörter und „ein unscharfes Thema unscharf nennen“. Ergänzen Sie für das Labeln Kategoriendefinitionen und fordern Sie je Text eine einzeilige Begründung. Schalten Sie Codeausführung bzw. Datenanalyse ein, wenn Ihr Werkzeug sie anbietet. Startprompt: „Führen Sie das Standard-Topic-Modell für dieses Korpus aus und berichten Sie die Stabilität.“ Es kommen nur genehmigte, nicht sensible Texte hinein, und Sie prüfen eine Stichprobe der Labels von Hand.

### Automatisierung / eigener Code

Nutzen Sie für ein großes Korpus eine Low-Code-Automatisierungsplattform (z. B. Power Automate oder n8n), die jeden neuen Text aus einem Cloud-Ordner an den Assistenten übergibt und sein Label samt Begründung in eine Tabelle schreibt – ein konfigurierter Assistent allein arbeitet immer nur in einem Chat. Auch hier prüfen Sie eine Zufallsstichprobe. Auf GitHub: Ein Python-Skript führt das Topic-Modell und das Labeln über das gesamte Korpus über die von Ihrer Institution freigegebene KI-API aus – nur mit genehmigten, nicht sensiblen Texten. Prüfen Sie Datenschutz und Freigabe vorher mit Ihrer Hochschule.
