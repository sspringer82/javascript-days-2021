const input = 'a';
if (input === 'a') {
  console.log('erster Zweig');
} else if (input === 'b') {
  console.log('zweiter Zweig');
} else {
  console.log('else Zweig');
}

const input2 = 42;
switch (input2) {
  case 'a':
    console.log('case a');
    break;
  case '42':
    console.log('case b');
    break;
  case 'c':
    console.log('case c');
    break;
  default:
    console.log('default zweig');
    break;
}

const input3 = 41;

console.log(
  input3 === 43
    ? 'Input ist 43'
    : input3 === 42
    ? 'input ist 42'
    : 'input ist weder 42 noch 43',
);

// schleifen
const arr = new Array(10).fill(1).map((data, index) => {
  return data * index + 1;
});
console.log(arr);

let count = 0;
while (count < arr.length) {
  // 0 - n mal
  console.log(arr[count]);
  count++;
}

let count2 = 0;
do {
  // 1 - n mal
  console.log(arr[count2]);
} while (count2++ < arr.length);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
