# History API

Nutzt die History API, um in der Applikation zu navigieren
Wir benötigen 3 "Routen":

- list: /list
- new: /new
- edit: /edit/id

Bei jeder "navigation" per Button soll der URL-Pfad entsprechend angepasst werden

Die Browser Controls "forward" + "back" sollen unterstützt werden.

**Hinweis:** was ihr braucht:

- `history.pushState(data, title, url);`
- `window.onpopstate = (e) => {...}`
