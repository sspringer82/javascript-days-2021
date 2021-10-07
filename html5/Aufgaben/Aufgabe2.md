# Aufgabe 2

Macht aus der Liste und dem Formular Web Components.

Tipp: Ihr könnt Attribute an Web Components übergeben und auf eine Änderung der Attribute reagieren. `observedAttributes` und `attributeChangedCallback`

Tipp2: Ihr könnt Events aus Web Components heraus auslösen:

```
const event = new CustomEvent('name', {});
this.dispatchEvent(event);

myCustomElement.addEventListener('name', () => {...});
```
