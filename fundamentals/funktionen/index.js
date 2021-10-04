console.log(namedFunction(1, 2)); // named functions sind im gesamten gültigkeitsbereich verfügbar
function namedFunction(a, b) {
  console.log(`a: ${a}, b: ${b}`);
  const value = a + b;
  if (value < 10) {
    return value; // nur 1 Rückgabewert
  } else {
    return 10; // aber mehrere return statements
  }
}
console.log(namedFunction());

// nicht gesetzte Parameter sind undefined
// wenn kein rückgabewert dann undefined

(function (a, b) {
  return a + b;
})(); // IIFE - anonymer selbstaufrufender funktionsausdruck

// console.log('anonymousFunction: ', anonymousFunction(2, 2)); reference error bei anonymous function
const anonymousFunction = function (a, b) {
  return a + b;
};
console.log('anonymousFunction: ', anonymousFunction(2, 2));

const anonymousArrowFunction = (a, b) => {
  return a + b;
};
const result = [1, 2, 3].map((value) => value * 2);
// Parameterklammern bei einem Parameter optional
// Geschweifte Klammern bei nur einem Statement optional
// Return bei nur einem statement optional

const obj = {
  doIt() {
    /*setTimeout(function () {
      console.log(this.firstname); // funktioniert nicht weil this !== obj
    }, 1000);*/
    // setTimeout(
    //   function () {
    //     console.log(this.firstname);
    //   }.bind(this), // context binding
    //   1000,
    // );
    setTimeout(() => {
      console.log(this.firstname); // funktioniert weil this === obj
    }, 1000);
  },
  firstname: 'Tim',
};
obj.doIt();
