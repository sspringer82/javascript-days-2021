import doItAsync from './doItAsync.js';

async function doItSync() {
  return 'foo';
}

// async function handleAsync() { // optional, wegen top level await
try {
  const result = await doItAsync();
  console.log('1: ', result);
  const result2 = await doItAsync();
  console.log('2: ', result2);
  const result2a = await doItSync();
  console.log('2a: ', result2a);
  const result3 = await doItAsync();
  console.log('3: ', result3);
} catch (e) {
  console.error('whoops: ', e);
}
// }
// handleAsync();

const arr = [Promise.resolve('a'), Promise.resolve('b'), Promise.resolve('c')];

const result = await Promise.all(arr);
console.log(result);
