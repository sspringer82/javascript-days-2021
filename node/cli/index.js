import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = [
  {
    operands: [2, 2],
    result: 4,
  },
  {
    operands: [3, 2],
    result: 5,
  },
];

rl.question(
  `What is ${tasks[0].operands[0]} + ${tasks[0].operands[1]}? `,
  (answer) => {
    const intAnswer = parseInt(answer, 10);
    if (intAnswer === tasks[0].result) {
      console.log('Awesome!');
    } else {
      console.log('Nope!');
    }
    rl.question(
      `What is ${tasks[1].operands[0]} + ${tasks[1].operands[1]}? `,
      (answer) => {
        const intAnswer = parseInt(answer, 10);
        if (intAnswer === tasks[1].result) {
          console.log('Awesome!');
        } else {
          console.log('Nope!');
        }
        rl.close();
      },
    );
  },
);
