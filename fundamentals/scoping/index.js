// var v2 = undefined;
// let l;
// const, let und var

// const - Konstante
const c = 42;
// c = 43; // TypeError
const c2 = {
  firstname: 'Uli',
};
c2.firstname = 'Ida'; // nur die referenz ist konstant
console.log(c2);
// c2 = 'foo'; // TypeError

// let - variable
let l = 42;
l = 'adsf';
l = true;
console.log(l);

// console.log(l2); ReferenceError
let l2 = 'bar';
// console.log(c3); // Reference Error
const c3 = 'baz';

// var - varible => bitte komplett aus dem Kopf streichen!!!
var v = 42;
v = 'zweiundvierzig';
console.log(v);

console.log(v2);
var v2 = '42';

// Scoping - global, module, function, block, closure
