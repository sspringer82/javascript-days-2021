# Node.js

## Links

- Node.js: https://nodejs.org/en/
- LTS Zeitplan: https://nodejs.org/en/about/releases/
- Other Downloads: https://nodejs.org/en/download/current/
- Node via Package Manager: https://nodejs.org/en/download/package-manager/
- NVM: https://github.com/nvm-sh/nvm
- Shell mit Linux Commands unter Windows: https://cmder.net/
- package.json: https://docs.npmjs.com/cli/v7/configuring-npm/package-json
- Semver: https://semver.org/lang/de/
- Semver NPM: https://www.npmjs.com/package/semver
- Licensing: https://choosealicense.com/
- Node License Finder: https://github.com/iandotkelly/nlf
- Lodash: https://lodash.com/

## Ausführung

1. REPL: `node`
2. Ausführung mit einer Datei: `node index.js`

## Initialisierung

- Wir starten mit einem leeren Repo
- README.md erzeugen => Dokumentation!
- `npm init` => package.json erzeugen. Alternative: `npm init -y`... jaja passt schon
- package.json:
  - private: true => kein versehentliches publizieren
  - type: module => ECMAScript Modules
- .gitignore - mindestens node_modules => vom Versionskontrollsystem ignorieren lassen
- index.js erzeugen und mit Leben füllen
- Start:
  - `node index.js`
  - package.json => script => start: "node index.js" => `npm start`
- Pakete installieren
  - `npm i lodash` `npm install lodash`
    - Lädt das Paket herunter
    - Trägt es in die package.json ein
    - Trägt es in die package-lock.json ein
    - fügt die entpacken quellen in node_modules ein

## Verwendung und Weiterentwicklung

- Repo klonen oder Sourcen anderweitig beschaffen
- Ins Verzeichnis wechseln und `npm install`
- `npm start`
