export default function ask(task, rl) {
  return new Promise((resolve, reject) => {
    rl.question(
      `What is ${task.operands[0]} + ${task.operands[1]}? `,
      (answer) => {
        const intAnswer = parseInt(answer, 10);
        if (intAnswer === task.result) {
          resolve('Awesome!');
        } else {
          reject('Nope!');
        }
      },
    );
  });
}
