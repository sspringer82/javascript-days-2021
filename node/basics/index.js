import { createServer } from 'http';
import _ from 'lodash';

// alte Welt: (CommonJS Modulsystem)
// const {createServer} = require('http');
// const _ = require('lodash');

const server = createServer((request, response) => {
  const result = _.intersection([2, 1], [2, 3]);
  response.end('Hallo Welt!' + result);
});

const port = 8080;
server.listen(port, () => {
  console.log(`Server is listening to http://localhost:${port}`);
});
