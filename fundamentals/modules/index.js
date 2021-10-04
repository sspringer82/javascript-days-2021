// import { Human } from './human.js'; // named import
// import { Human as Gummibarchen, names } from './human.js'; // named import
// import Human from './human.js';
// import Gummibaerchen from './human.js'; // ohne stress umbenennen
import Human, { names } from './human.js';

// import _ from 'lodash';
// console.log(_.intersection([2, 1], [2, 3]));

const baerbel = new Human('Bärbel', 'Bär');
console.log(baerbel.fullname);
