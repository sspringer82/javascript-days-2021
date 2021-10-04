const o = { name: 'Dieter' };
const o2 = { ...o };
console.log(o2);

const a = [1, 2, 3];
const a2 = [...a];
console.log(a2);

// rest operator - viele Argumente => array
function add(...args) {
  // [1, 2, 3]
  // console.log(arguments.reduce);
  return args.reduce((prev, current) => {
    return prev + current;
  }, 0);
}

console.log(add(1, 2, 3)); // 6

const values = [9, 8, 7];
// spread operator - array => viele Argumente
const result = add(...values);
console.log(result);
