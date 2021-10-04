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
let global = 'foo'; // global - außerhalb eines Moduls, einer Funktion eines Blocks
let moduleScope = 'bar'; // module - innerhalb eines Moduls - außerhalb einer Funktion/eines Blocks (einer Datei)

function myFunction() {
  let myFunctionVar = 'hallo'; // function scoped - toplevel in der Funktion
  console.log(myFunctionVar);
  if (true) {
    let myBlockVar = 'Welt'; // block scoped - toplevel in einem Block
    console.log(myFunctionVar + myBlockVar);
  }
  // console.log(myBlockVar); // ReferenceError
}
myFunction();
// console.log(myFunctionVar); // ReferenceError

function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Not a number');
  }
  return a + b;
}

let result = null;
try {
  result = add(1, '2');
} catch (e) {
  console.error('whoops');
}
console.log(result);

// var: global, module, function, closure
// let & const: global, module, function, closure, block

function createObject() {
  let value = 42;
  return {
    getValue() {
      return value;
    },
    setValue(newValue) {
      value = newValue;
    },
  };
}

const obj = createObject();
console.log(obj.getValue()); // 42
obj.setValue(123);
console.log(obj.getValue()); // 123

setTimeout(() => {
  console.log(obj.getValue()); // 123
}, 1000);
