// primitive datentypen

// Boolean
const b = true;
const b2 = false;

// Number
const n = 42;
const n2 = 3.14;

console.log(n / 0); // Infinity

console.log('Typeof infinity: ', typeof Infinity); // number
console.log(0 / 0);
console.log(' typeof 0/0', 0 / 0);

// String

const s = 'Hallo "Welt"';
console.log(s);
const s2 = "Hallo 'Welt'";
console.log(s2);
const s3 = "Hallo 'Welt'";
console.log(s3);

const templateString = `Hello World`;
// line breaks
console.log(templateString);
const ts = `Hallo 
Welt`;
console.log(ts);
const s4 = 'Hallo\n' + 'Welt';
console.log(s4);
const value = 'Welt';

// Template Strings
const ts2 = `Hallo ${value}`;
console.log(ts2);

function tag(...values) {
  console.log(values);
}

tag`Hallo ${value}`;

const first = 'Klaus';
const last = 'Müller';
const full = first + ' ' + last;
const full2 = `${first} ${last}`;

// Symbol - eindeutige Identifier
const sym = Symbol();
console.log('symbol: ', sym);
const sym2 = Symbol('Label');
console.log('symbol: ', sym2);

const o = {
  name: 'Klaus',
  getAge() {
    return 42;
  },
  [sym]: 'foo',
  [sym2]() {
    return 'bar';
  },
};
console.log(o[sym]);
console.log(o[sym2]());

// null + undefined - Abwesenheit eines Wertes
const nix = null; // für uns - anzeigen, dass eine variable explizit leer ist
console.log('nix', nix);
const nix2 = undefined; // für die engine
console.log('nix', nix2);

// truthy & falsy
const notANumber = 42 / nix2; // NaN - falsy
if (notANumber) {
  console.log('Ergebnis: ', 42);
} else {
  console.log('🍄');
}

// strict equal (===/!==) - kein Typecast vs. non strict (==/!=) - Typecast möglich
if (42 === '42') {
  console.log('foo');
} else {
  console.log('bar');
}

// Numeric separators
const bigNumber = 9_007_199_254_740_987;
console.log(bigNumber);
const bigNumber2 = 9_0_0_7_1_9_9_2_5_4_7_4_0_9_8_7;
console.log(bigNumber2);
const bn1 = BigInt(Number.MAX_SAFE_INTEGER + 2);
const bn2 = BigInt(Number.MAX_SAFE_INTEGER + 4);
console.log(bn1 + bn2);

console.log(typeof 42n); // bigint

// console.log(BigInt(Number.MAX_SAFE_INTEGER) ** 10_000n);

// composite datentypen
const lastname = Symbol('Lastname');
const obj = {
  firstname: 'Lisa',
  [lastname]: 'Meier',
  getFullname() {
    return `${this.firstname} ${this[lastname]}`;
  },
};

console.log(obj.firstname);
console.log(obj.gibtsNicht);
console.log(obj[lastname]);
console.log(obj.getFullname());

const obj2 = new Object();
obj2.name = 'Peter';
console.log(obj2);

// Array
const arr = [1, 2, 3];
console.log(arr);
const arr2 = new Array(10).fill(1).map((value, index) => {
  return value * index;
});
console.log(arr2);

// schleife
arr2.forEach((value, key) => {
  console.log('Value', value, 'Key', key, ' ', arr2[key]);
});

const result = arr2.find((value) => value === 2);
console.log(result);

const allNumbers = arr2.every((value) => {
  console.log('allNumbers');
  return typeof value === 'number';
});
console.log('allNumbers', allNumbers);

const someEvenNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9].some((value) => {
  console.log('someEvenNumbers');
  return value % 2 === 0;
});
console.log('someEvenNumbers', someEvenNumber);

// by-Value by-Reference

const inputString = 'Hallo'; // by value
const inputObj = { name: 'Ursula', address: { street: 'Sesamstraße' } }; // by reference

function doIt(str, obj) {
  // const copy = { ...obj }; // achtung: nur flache kopie!
  const copy = JSON.parse(JSON.stringify(obj)); // tiefe kopie - achtung - methoden gehen verloren
  str = 'asdf';
  // obj.name = 'jklö';
  copy.name = 'Dietmar';
  copy.address.street = 'Mainstr.';
  console.log('copy: ', copy);
}

doIt(inputString, inputObj);

console.log('original string', inputString);
console.log('original obj', inputObj);
