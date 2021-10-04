import doItAsync from './doItAsync.js';

const result = doItAsync(
  undefined,
  undefined,
  undefined,
  (error, asyncValue) => {
    if (error) {
      throw error;
    }
    console.log(asyncValue);
  },
);

console.log(result);

// function add(a, b) {
//   return a + b;
// }

// console.log(add); // function object
// console.log(add()); // function call

doItAsync(undefined, undefined, undefined, (error, asyncValue) => {
  if (error) {
    throw error;
  }
  console.log('1: ', asyncValue);
  doItAsync(undefined, undefined, undefined, (err, val) => {
    console.log('2: ', val);
    doItAsync(undefined, undefined, undefined, (e, v) => {
      console.log('3: ', v);
    });
  });
});
