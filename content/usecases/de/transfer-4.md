---
id: transfer-4
phase: transfer
order: 4
title: Mehrsprachige Verbreitung
risk: 1
mode: Assist
potential: 2
capabilities: generierung
routes: chat; files; external
tools: DeepL Write
data: B2
practice_data: B2
---

Übersetzen Sie Inhalte für internationale Zielgruppen und passen Sie sie kulturell an.

## Problem

Zielgruppen in anderen Ländern zu erreichen braucht mehr als wörtliche Übersetzung – Fachbegriffe, Einheiten, Zahlenformate und Beispiele müssen zum lokalen Gebrauch und zur Terminologie des Fachs passen.

## Ergebnis

Eine lokalisierte Übersetzung mit Begriffsglossar und aufgelisteten Anpassungen, per Rückübersetzung in einem frischen Chat geprüft und von einer fließend lesenden Person durchgesehen, da die Rückübersetzung unnatürlichen Stil übersieht.

## Vorgehen

1. Fügen Sie die Zusammenfassung ein und nennen Sie Sprache, Land und Zielgruppe
2. Bitten Sie um Übersetzung, Glossar und eine Liste der Anpassungen
3. Übersetzen Sie in einem neuen Chat ohne das Original zurück
4. Vergleichen Sie die Bedeutung Satz für Satz mit Ihrem Original
5. Lassen Sie eine fließend lesende Person Begriffe und Stil prüfen

## Konzepte

### Rückübersetzung (Back-translation)

Der Zieltext wird unabhängig – hier in einem frischen Chat – in die Ausgangssprache zurückübersetzt und in der Bedeutung mit dem Original verglichen (Brislin 1970). Sie entdeckt Auslassungen und Bedeutungsverschiebungen, aber keinen unnatürlichen oder unidiomatischen Stil.

### TRAPD-Teamübersetzung

Translation, Review, Adjudication, Pretesting und Documentation: parallele Übersetzungen, die ein Team bespricht, eine Entscheidung zu jedem strittigen Begriff, ein Test mit Zielleserschaft und eine Dokumentation der Entscheidungen (Harkness et al., 2004). Der Standard in der interkulturellen Umfrageforschung; stärker als Rückübersetzung allein.

### Lokalisierung (Localisation)

Die Anpassung eines Textes über die Wörter hinaus: Einheiten, Dezimal- und Datumsformate, Beispiele, Institutionen und kulturelle Bezüge, damit er für Lesende im Zielland funktioniert.

### Terminologiemanagement (Terminology management)

Für jeden Schlüsselbegriff in einem Glossar ein vereinbartes Äquivalent festlegen und es mit fachspezifischen Terminologiebanken abgleichen, etwa IATE (Interactive Terminology for Europe) für EU-Sprachen.

## Literatur

- Brislin, R. W. (1970). Back-translation for cross-cultural research. Journal of Cross-Cultural Psychology, 1(3), 185–216. doi:10.1177/135910457000100301
- Harkness, J., Pennell, B.-E., & Schoua-Glusberg, A. (2004). Survey questionnaire translation and assessment. In S. Presser et al. (Eds.), Methods for testing and evaluating survey questionnaires (pp. 453–473). Wiley. doi:10.1002/0471654728.ch22

## Übung

### Aufgabe

Übersetzen Sie das Abstract der Arbeit von Christidis et al. (2020) für ein nicht fachkundiges Publikum und übersetzen Sie es dann in einem neuen Chat zurück. Sie lernen, ob der Assistent Begriffe wie „return time“ einheitlich hält und ob die Rückübersetzung Bedeutungsverschiebungen offenlegt.

### Prompt

```text
Angehängt ist das PDF von Christidis et al. (2020). Nimm sein Abstract und übersetze es ins Englische für interessierte Mitglieder der Öffentlichkeit in Großbritannien (ersetze Englisch und Großbritannien durch eine Sprache, die jemand in deiner Gruppe liest, und ein passendes Land). Verwende einen klaren, natürlichen Stil. Halte Fachbegriffe einheitlich und gib ein kurzes Glossar mit der übersetzten Entsprechung für jedes Schlüsselkonzept, etwa return time, human influence, attribution und greenhouse gas emissions. Passe an, was lokal keinen Sinn ergäbe, und liste jede Anpassung auf. Halte alle Zahlen und Einheiten exakt und verwende lokale Zahlenformate. Markiere jeden Begriff, bei dem du dir über die in der Klimawissenschaft übliche Übersetzung unsicher bist.
```

### Prüfung

Übersetzen Sie in einem neuen Chat zurück und vergleichen Sie mit dem Original-Abstract: 38.7 °C, 100–300 years und 3.5 years by 2100 müssen erhalten bleiben, zusammen mit der Bedingung „without mitigating greenhouse gas emissions“.

## Mit eigenem Material

### Mitbringen

Eine eigene Laienzusammenfassung oder ein eigenes Abstract (150–250 Wörter) und eine Zielsprache, die Sie lesen, oder eine Kollegin bzw. einen Kollegen, die oder der sie liest.

### Schritte

1. Fügen Sie den Text ein und nennen Sie Zielsprache, Land und Zielgruppe.
2. Bitten Sie um eine Übersetzung samt einer Liste der vorgenommenen kulturellen Anpassungen.
3. Bitten Sie den Assistenten in einem neuen Chat, das Ergebnis ins Deutsche zurückzuübersetzen.
4. Vergleichen Sie die Rückübersetzung mit Ihrem Original auf Bedeutungsänderungen.

### Prompt

```text
Ich bin Forschende/Forschender in [Fach] und teile meine Arbeit mit [Zielgruppe] in [Land]. Unten steht meine Laienzusammenfassung auf Deutsch: [Text einfügen]. Übersetze sie für diese Zielgruppe in [Sprache], in klarem und natürlichem Stil. Halte Fachbegriffe einheitlich und gib in einem kurzen Glossar den [Sprache]-Begriff für jedes Schlüsselkonzept an. Passe Beispiele, Einheiten oder Bezüge an, die lokal keinen Sinn ergäben, und liste jede vorgenommene Anpassung auf. Markiere jeden Begriff, bei dem du dir über die übliche Übersetzung in diesem Fach unsicher bist.
```

### Prüfung

Die Rückübersetzung erhält die Bedeutung jedes Satzes Ihres Originals, und eine fließend sprechende Person bestätigt die markierten Begriffe.

## Technik

Fügen Sie den Text in Ihren KI-Assistenten ein oder hängen Sie ihn an und lassen Sie ihn übersetzen; führen Sie die Rückübersetzung in einem frischen Chat durch, damit der Assistent nicht seine eigene Formulierung wiederverwendet, und überarbeiten Sie den Zieltext in DeepL Write.

## Stufen

### Chat

Führen Sie den Startprompt mit angehängter Arbeit aus und bitten Sie den Assistenten im selben Chat, seine Übersetzung gegen sein eigenes Glossar zu prüfen und jeden uneinheitlich verwendeten Begriff und jede Zahl ohne lokales Format aufzulisten. Führen Sie die Rückübersetzung in einem neuen Chat durch, der das Original nicht sehen darf.

### Projekt / Notebook

Fügen Sie B2, Ihre freigegebenen früheren Übersetzungen und ein Glossardokument mit Schlüsselbegriffen je Sprache hinzu, abgestimmt mit einer fließend sprechenden Kollegin oder einem Kollegen. Bitten Sie darum, dass jede neue Übersetzung dem Glossar folgt und neue Begriffe markiert. Sie gewinnen einheitliche Terminologie über alle Ihre Übersetzungen und ein Glossar, das mit jedem Projekt wächst; übersetzen Sie in einem einfachen Chat außerhalb des Notebooks zurück.

### Eigener Assistent

Anweisungen: Zielsprache, Land und Zielgruppe, natürlicher Stil, Zahlen und Einheiten exakt im lokalen Format, Glossarbegriffe beibehalten, jede Anpassung aufgelistet, unsichere Begriffe markiert. Wissen: Ihr Begriffsglossar. Ein zweiter Agent, der nur zurückübersetzt und keinen Zugriff auf das Original hat, macht die Prüfung wiederholbar. Startprompt: „Übersetze dieses Abstract für die Öffentlichkeit in [Land]“. Für jede Zusammenfassung, die Sie im Ausland teilen, wiederverwendbar.
