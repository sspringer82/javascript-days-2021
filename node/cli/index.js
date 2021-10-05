import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const task = {
  operands: [2, 2],
  result: 4,
};

rl.question(`What is ${task.operands[0]} + ${task.operands[1]}? `, (answer) => {
  const intAnswer = parseInt(answer, 10);
  if (intAnswer === task.result) {
    console.log('Awesome!');
  } else {
    console.log('Nope!');
  }
  rl.close();
});
