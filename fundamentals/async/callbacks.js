function doItAsync(fail = false, time = 1000, value = 'Hallo Welt', cb) {
  setTimeout(() => {
    if (cb) {
      if (fail) {
        cb(Error('Whoops'));
      } else {
        cb(null, value);
      }
    }
  }, time);
}

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
