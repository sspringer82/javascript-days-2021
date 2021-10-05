import { createInterface } from 'readline';
import ask from './ask.js';
import getTasks from './task.js';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = getTasks();

for (let i = 0; i < tasks.length; i++) {
  try {
    const result = await ask(tasks[i], rl);
    console.log(result);
  } catch (e) {
    console.error(e);
  }
}
rl.close();
