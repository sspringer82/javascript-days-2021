import { createInterface } from 'readline';
import ask from './ask.js';
import getTasks from './task.js';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = getTasks();

ask(tasks[0], rl)
  .then((result) => {
    console.log(result);
    return ask(tasks[1], rl);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(() => {
    rl.close();
  });
