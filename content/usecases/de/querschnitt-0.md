---
id: querschnitt-0
phase: querschnitt
order: 0
title: Betreuungsgespräche
risk: 2
mode: Assist
potential: 3
capabilities: synthese; generierung
routes: chat; connected
connect: Otter.ai
tools: Otter.ai; Sally AI
---

Bereiten Sie Agenden und Fragen für Betreuungsgespräche vor und fassen Sie danach vereinbarte Aufgaben aus Ihren eigenen Notizen zusammen.

## Problem

Die Betreuungszeit ist knapp: Ohne Agenda gehen wichtige Entscheidungen unter, Erwartungen bleiben unausgesprochen, und vereinbarte Aufgaben liegen in verstreuten Notizen, die niemand ausformuliert.

## Ergebnis

Eine Agenda mit Zeitangaben und den Entscheidungen, die Sie brauchen, sowie eine Aufgabenliste mit Zuständigkeit und Frist, die Sie gegen Ihre Notizen geprüft haben – besser genutzte Gespräche und ein gemeinsames schriftliches Protokoll.

## Vorgehen

1. Fügen Sie Ihre Fortschrittsnotizen und offenen Fragen ein
2. Bitten Sie um eine Agenda mit Zeitangaben und drei Entscheidungen
3. Machen Sie nach dem Gespräch aus Ihren Notizen SMART-Aufgaben
4. Prüfen Sie jede Aufgabe gegen Ihre Notizen
5. Teilen Sie die Aufgabenliste mit Ihren Betreuungspersonen

## Konzepte

### Ansätze der Promotionsbetreuung nach Lee

Lee (2008) unterscheidet fünf Ansätze: funktional (Projektmanagement), Enkulturation (Hineinwachsen in die Disziplin), kritisches Denken, Emanzipation (persönliche Entwicklung) und Beziehungsentwicklung. Wenn Sie benennen, welchen Ansatz ein Agendapunkt braucht, wird klarer, worum Sie Ihre Betreuungsperson bitten.

### SMART-Aufgaben

Die Kriterien von Doran (1981) für Ziele: spezifisch, messbar, zuweisbar (heute oft „erreichbar“), realistisch und terminiert. Eine Aufgabe mit benannter Zuständigkeit und Frist lässt sich beim nächsten Gespräch überprüfen.

### Entscheidungs- und Aufgabenprotokoll

Eine fortlaufende Aufzeichnung, die Entscheidungen (was vereinbart wurde und warum), Aufgaben (wer macht was bis wann) und offene Fragen trennt. Sie macht den Fortschritt für Jahresgespräche nachvollziehbar und schützt Sie und Ihre Betreuungspersonen.

## Literatur

- Lee, A. (2008). How are doctoral students supervised? Concepts of doctoral research supervision. Studies in Higher Education, 33(3), 267–281. doi:10.1080/03075070802049202
- Doran, G. T. (1981). There's a S.M.A.R.T. way to write management's goals and objectives. Management Review, 70(11), 35–36.

## Mit eigenem Material

### Mitbringen

Ihre eigenen kurzen Notizen zum Fortschritt seit dem letzten Betreuungsgespräch und einige offene Fragen; keine persönlichen Angaben zu anderen Personen.

### Schritte

1. Fügen Sie Ihre Notizen ein und bitten Sie um eine Agenda für ein 45-minütiges Gespräch.
2. Bitten Sie um drei Entscheidungen, die Sie brauchen, und um passende Fragen.
3. Fügen Sie nach einem Gespräch Ihre eigenen Notizen ein und bitten Sie um eine Aufgabenliste.
4. Prüfen Sie die Aufgabenliste Zeile für Zeile gegen Ihre Notizen.

### Prompt

```text
Ich bin Promovierende/Promovierender in [Fach] und bereite ein [45-minütiges] Betreuungsgespräch vor. Meine Notizen zu Fortschritt und offenen Punkten lauten: [Notizen einfügen]. Entwerfe eine Agenda mit Zeitfenstern, die drei Entscheidungen, die ich von meinen Betreuungspersonen brauche, und konkrete Fragen zu jedem Agendapunkt. Nach dem Gespräch füge ich meine Notizen ein; fasse sie dann als Tabelle zusammen: Aufgabe, Zuständigkeit, Frist, und ergänze offene Fragen. Verwende nur, was in meinen Notizen steht, und füge keine Aufgaben oder Vereinbarungen hinzu, die dort nicht stehen.
```

### Prüfung

Jede Aufgabe in der Zusammenfassung steht in Ihren Notizen, und nichts, was Sie im Gespräch vereinbart haben, fehlt.

### Grenze

Der KI-Assistent nimmt nicht am Gespräch teil und zeichnet es nicht auf; er arbeitet nur mit den Notizen, die Sie schreiben und einfügen.

## Technik

Fügen Sie Ihre eigenen Notizen in Ihren KI-Assistenten ein. Ein Transkriptionswerkzeug wie Otter.ai lässt sich nur anbinden, wenn Ihre Hochschule es erlaubt; für eine Aufzeichnung braucht es die Einwilligung aller Beteiligten.

## Stufen

### Chat

Führen Sie den Startprompt vor dem Gespräch mit eingefügten Notizen aus. Fügen Sie danach im selben Chat Ihre Gesprächsnotizen ein, bitten Sie um die Aufgabentabelle und fragen Sie, zu welchen Agendapunkten noch keine Aufgabe vereinbart ist.

### Projekt / Notebook

Legen Sie ein Projekt oder Notebook für die Betreuung an und fügen Sie Ihren Projektplan, frühere Aufgabenlisten und Ihre eigenen Gesprächsnotizen (keine persönlichen Angaben zu anderen) als Referenzen hinzu. Fragen Sie vor jedem Gespräch, welche Aufgaben noch offen sind und was auf die Agenda gehört – so entsteht ein fortlaufendes Protokoll über mehrere Gespräche, das ein einzelner Chat vergisst.

### Eigener Assistent

Anweisungen: Agenda mit Zeitfenstern, die drei benötigten Entscheidungen, Fragen je Punkt, Aufgaben als Tabelle mit Zuständigkeit und Frist in SMART-Form, nur die eingefügten Notizen verwenden, nie Vereinbarungen hinzufügen, die nicht dort stehen, offene Fragen auflisten. Kein Wissen nötig. Startprompts: „Agenda für mein 45-minütiges Gespräch“ und „Aufgabenliste aus diesen Notizen“. Für jedes Betreuungsgespräch wiederverwendbar.
