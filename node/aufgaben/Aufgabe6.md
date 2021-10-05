# Aufgabe 6: REST Webschnittstelle

1. Erzeugt eine `addresses` Ressource aka. Pfad auf dem die folgenden Operationen möglich sind:

- (\*) GET /addresses => alle Adressen
- GET /addresses/:id => eine Adresse
- (\*) POST /addresses => neue Adresse anlegen
- PUT /addresses/:id => Adresse aktualisieren
- DELETE /addresses/:id => Adresse löschen

'/addresses/:id' => Zugriff auf id request.params.id
Zugriff auf den Request-Body: express.json (https://expressjs.com/de/api.html) - als Middleware einbinden - Zugriff über request.body

Die Datenhaltung erfolgt temporär im Speicher in Form eines Arrays.

Bonus: Die Datenhaltung erfolgt asynchron mit Promises
