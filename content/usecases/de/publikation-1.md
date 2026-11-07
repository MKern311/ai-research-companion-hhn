---
id: publikation-1
phase: publikation
order: 1
title: Sprachliche Überarbeitung
risk: 2
mode: Assist
potential: 3
capabilities: generierung
routes: chat; files; connected; external
connect: DeepL Write
tools: DeepL Write; Paperpal; QuillBot
repos: kd-writing
data: B3
practice_data: B3
---

Klarheit, Präzision und Textfluss verbessern – besonders in einer Zweitsprache – und generische oder KI-typisch klingende Formulierungen erkennen, damit der Text Ihrer bleibt. Prüfen Sie für die Abschlussarbeit die Regeln Ihrer Hochschule zu Lektorat und Korrekturlesen.

## Problem

Das Schreiben in einer Zweitsprache dauert länger, und generische Lektoratswerkzeuge glätten Ihren Text zu Formulierungen, die Abschwächungen, Betonung oder Bedeutung verschieben und nicht mehr nach Ihnen klingen.

## Ergebnis

Ein klarerer Absatz in Bekannt-neu-Reihenfolge und eine Änderungstabelle, über die Sie Zeile für Zeile entscheiden – Fachbegriffe, Zahlen, Abschwächungen und Zitate unangetastet, KI-typische Wendungen markiert, damit Sie sie selbst umschreiben.

## Vorgehen

1. Einen Absatz einfügen und Ihr Fach und Ihre Leserschaft nennen
2. Änderungen nach der Bekannt-neu-Reihenfolge und Prinzipien der einfachen Sprache anfordern
3. Prüfen, dass keine Abschwächung, kein Begriff, keine Zahl und kein Zitat geändert wurde
4. Jede Änderung annehmen oder ablehnen; markierte Formulierungen selbst umschreiben
5. Vor der Überarbeitung einer Abschlussarbeit die Korrekturleseregeln Ihrer Hochschule prüfen

## Konzepte

### Bekannt-neu-Prinzip (Given–New, Gopen & Swan)

Lesende erwarten vertraute Information am Satzanfang (Themenposition) und den neuen, betonten Punkt am Satzende (Betonungsposition), mit Subjekt und Verb nah beieinander. Nutzen Sie es, um Sätze zu verbessern, die korrekt, aber schwer nachzuvollziehen sind.

### Abschwächung (Hedging)

Abgestufte Einschränkung von Aussagen (kann, deutet darauf hin, ist wahrscheinlich), die zeigt, wie stark die Evidenz ist. Hyland zeigt, dass sie ein Kernmerkmal wissenschaftlichen Schreibens ist; eine Änderung, die eine Abschwächung entfernt oder hinzufügt, verändert Ihre Aussage.

### Prinzipien der einfachen Sprache

Konkrete Verben statt Nominalisierungen bevorzugen („wir analysierten“ statt „eine Analyse wurde durchgeführt“), das Aktiv, wo es auf die handelnde Person ankommt, eine Hauptidee je Satz und einheitliche Begriffe. Sie verbessern die Klarheit, ohne den Inhalt zu vereinfachen.

### Autorenstimme (Authorial Voice)

Die erkennbare Haltung und Wortwahl, die einen Text zu Ihrem machen. Formelhafte Wendungen („plays a crucial role“, „delve into“) und leere Verstärker schwächen sie und sind in KI-erzeugten Texten häufig; schreiben Sie sie um, statt sie zu übernehmen.

## Literatur

- Gopen, G. D., & Swan, J. A. (1990). The science of scientific writing. American Scientist, 78(6), 550–558.
- Hyland, K. (1998). Hedging in scientific research articles. John Benjamins.

## Übung

### Aufgabe

Überarbeiten Sie das Abstract des Artikels von Vautard et al. (2023), als wäre es Ihr eigener Absatz. Sie erfahren, ob der Assistent Abschwächungen, Unsicherheitsbereiche und Fachbegriffe unangetastet lässt oder Aussagen beim Glätten des Flusses unbemerkt verstärkt.

### Prompt

```text
Angehängt ist das PDF von Vautard et al. (2023). Nehmen Sie sein Abstract (den Absatz vor der Einleitung) und behandeln Sie es als meinen eigenen Entwurf für eine klimawissenschaftliche Fachzeitschrift. Überarbeiten Sie es auf Klarheit, Präzision und Fluss in britischem Englisch und wenden Sie dabei das Bekannt-neu-Prinzip an: vertraute Information am Satzanfang, der neue Punkt am Ende. Lassen Sie Bedeutung, Fachbegriffe, Zahlen, Unsicherheitsbereiche und Abschwächungen (wie 'can be due to') unverändert und fügen Sie keinen Inhalt hinzu. Geben Sie 1) das überarbeitete Abstract und 2) eine Tabelle zurück: ursprüngliche Formulierung, Änderung, Begründung. Markieren Sie jeden Satz, dessen Bedeutung unklar ist, statt zu raten, und kennzeichnen Sie generische oder KI-typische Formulierungen.
```

### Prüfung

Vergleichen Sie beide Fassungen Satz für Satz: 0,8 °C [0,2–1,4 °C], 3,4 °C, 170 Simulationen und 32 Modelle bleiben unverändert, und die beiden möglichen Erklärungen bleiben abgeschwächt formuliert, statt zu einer Ursache verschmolzen zu werden.

## Mit eigenem Material

### Mitbringen

Ein oder zwei Absätze (bis zu 300 Wörter) eigener Texte; nicht den Text einer Mitautorin oder eines Mitautors ohne deren bzw. dessen Zustimmung.

### Schritte

1. Fügen Sie den Startprompt mit Ihrem Absatz, Ihrem Fach und Ihrer Leserschaft ein.
2. Gehen Sie die Änderungstabelle durch und nehmen Sie jede Änderung an oder lehnen Sie sie ab.
3. Schreiben Sie jeden Satz um, bei dem die Änderung nicht mehr nach Ihnen klingt.
4. Prüfen Sie die Regeln Ihrer Hochschule zum Korrekturlesen, bevor Sie dies bei einer Abschlussarbeit einsetzen.

### Prompt

```text
Ich bin Promovierende bzw. Promovierender im Fach [Disziplin] und schreibe auf Englisch als meiner [ersten oder zweiten] Sprache für [Leserschaft, z. B. eine Zeitschrift meines Fachs]. Überarbeiten Sie den folgenden Absatz auf Klarheit, Präzision und Fluss in britischem Englisch und lassen Sie Bedeutung, Terminologie und Zitate unverändert. Fügen Sie keine neuen Inhalte oder Aussagen hinzu. Geben Sie 1) den überarbeiteten Absatz und 2) eine Tabelle zurück: ursprüngliche Formulierung, Änderung, Begründung. Markieren Sie jeden Satz, bei dem meine Bedeutung unklar ist, statt zu raten, und kennzeichnen Sie generische oder typisch KI-klingende Wendungen (zum Beispiel 'delve into', 'plays a crucial role', leere Verstärker), damit ich sie in meiner eigenen Stimme umschreiben kann. Absatz: [Text einfügen]
```

### Prüfung

Lesen Sie beide Fassungen nebeneinander: Kein Fachbegriff, keine Zahl, keine Abschwächung und kein Zitat hat sich geändert, und Sie verstehen jede Änderung in der Tabelle und stimmen ihr zu.

## Technik

Fügen Sie den Absatz in Ihren KI-Assistenten ein und bitten Sie um eine Änderungstabelle; DeepL Write liefert, sofern Ihre Hochschule es erlaubt, eine zweite Meinung, die Sie Zeile für Zeile vergleichen können.

## Stufen

### Chat

Führen Sie den Startprompt mit dem angehängten Vautard-PDF aus. Bitten Sie den Assistenten danach im selben Chat um zwei Alternativen für jeden Satz, der nicht mehr nach den Autorinnen und Autoren klingt, bei Beibehaltung jeder Zahl und jeder Abschwächung.

### Projekt / Notebook

Fügen Sie Ihre Entwürfe, ein kurzes Stilblatt (britische Schreibweise, bevorzugte Begriffe, zu vermeidende Wörter) und einen Absatz, mit dem Sie zufrieden sind, als Muster Ihrer Stimme hinzu; für die Übung den Artikel von Vautard (B3). Fordern Sie Überarbeitungen an, die dem Stilblatt folgen. Terminologie und Ton bleiben über Kapitel hinweg konsistent, die Sie über Wochen überarbeiten.

### Eigener Assistent

Legen Sie Ihr Stilblatt in die Anweisungen: britisches Englisch, das Bekannt-neu-Prinzip, Begriffe, Zahlen, Abschwächungen und Zitate unverändert lassen, keinen Inhalt hinzufügen, eine Änderungstabelle zurückgeben, unklare Sätze markieren und KI-typische Formulierungen kennzeichnen. Fügen Sie ein Glossar der Fachbegriffe Ihres Fachs als Wissen hinzu. Startprompt: „Überarbeiten Sie diesen Absatz und geben Sie mir die Änderungstabelle.“ Wiederverwendbar für jedes Kapitel – prüfen Sie für die Abschlussarbeit die Regeln Ihrer Hochschule zum Korrekturlesen.
