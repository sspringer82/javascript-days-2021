import { createServer } from 'http';
import _ from 'lodash';

// import { User } from './user.js';
import User from './user.js';

// alte Welt: (CommonJS Modulsystem)
// const {createServer} = require('http');
// const _ = require('lodash');

const server = createServer((request, response) => {
  const result = _.intersection([2, 1], [2, 3]);
  const klaus = new User('Bettina', 'Meier');
  response.end(`Hallo ${klaus.fullname}! ${result}`);
});

const port = 8080;
server.listen(port, () => {
  console.log(`Server is listening to http://localhost:${port}`);
});
