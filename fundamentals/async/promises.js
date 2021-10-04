import doItAsync from './doItAsync.js';

const promise = doItAsync(true);
console.log(promise);

promise.then(
  (value) => {
    console.log('success: ', value);
  },
  (error) => {
    // geht auch, catch ist aber schöner
    console.error('failure: ', error.message);
  },
);

promise.catch((e) => {
  console.error('failure im catch: ', e.message);
});

doItAsync()
  .then((value) => {
    console.log('1: ', value);
    return doItAsync();
  })
  .then((value) => {
    console.log('2: ', value);
    return doItAsync();
  })
  .then((value) => {
    console.log('3: ', value);
    return doItAsync();
  })
  .catch((error) => {
    console.error('OH NO: ', error);
  });

// Promise.all([
//   doItAsync(),
//   doItAsync(),
//   doItAsync(),
//   doItAsync(),]).then((values) => {
// Promise.race([doItAsync(), doItAsync(), doItAsync(), doItAsync()]).then(
Promise.allSettled([
  doItAsync(),
  doItAsync(true),
  doItAsync(),
  doItAsync(),
]).then((values) => {
  console.log('all: ', values);
});

// console.log(Promise.resolve('foo'));
// console.log(Promise.reject('foo'));
