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
- NPM Probleme unter Windows: https://www.com-magazin.de/tipps-tricks/powershell/windows-10-verweigert-ausfuehrung-powershell-skript-2546684.html
- Nodemon: https://github.com/remy/nodemon
- NPM Scripts: https://docs.npmjs.com/cli/v7/using-npm/scripts
- npmtrends: https://www.npmtrends.com/
- OpenJS Foundation: https://openjsf.org/
- Express: https://expressjs.com
- Dissertation von Roy Fielding: https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm
- Nestjs: https://nestjs.com/
- TypeORM: https://typeorm.io/#/
- Passport: http://www.passportjs.org/

## Ausführung

1. REPL: `node`
2. Ausführung mit einer Datei: `node index.js`

### Nodemon

1. `npm run start:watch` (mit start:watch als script in der package.json)
2. `npx nodemon index.js`
3. `nodemon index.js` (mit global installiertem nodemon)

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
