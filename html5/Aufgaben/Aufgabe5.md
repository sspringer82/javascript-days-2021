# Indexeddb

Installiere Dexie (https://dexie.org/) und stelle die Persistenz von localStorage auf IndexedDB um.

**Achtung:** im Gegensatz zu localStorage ist indexeddb asynchron.

## Installation und Einbindung von Dexie:

`npm install dexie`

**entweder**

in der index.html: `<script src="node_modules/dexie/dist/dexie.js"></script>`

**oder**

in der model.js: `import Dexie from './node_modules/dexie/dist/dexie.mjs';`

dann:

`const db = new Dexie('pw');`
