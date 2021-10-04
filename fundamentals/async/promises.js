import doItAsync from './doItAsync.js';

const promise = doItAsync(true);
console.log(promise);

promise.then(
  (value) => {
    console.log('success: ', value);
  },
  // (error) => { // geht auch, catch ist aber schöner
  //   console.error('failure: ', error.message);
  // },
);

promise.catch((e) => {
  console.error('failure im catch: ', e.message);
});
