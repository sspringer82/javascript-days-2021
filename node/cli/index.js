import { createInterface } from 'readline';
import ask from './ask.js';
import getTasks from './task.js';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function parseCli(args) {
  const result = {
    numberOfTasks: 4,
    level: 1,
  };
  args.forEach((arg) => {
    if (arg.startsWith('--number')) {
      result.numberOfTasks = parseInt(arg.substr(9), 10);
    } else if (arg.startsWith('--level')) {
      result.level = parseInt(arg.substr(8), 10);
    }
  });
  return result;
}

const { numberOfTasks, level } = parseCli(process.argv);

const tasks = getTasks(numberOfTasks, level);

for (let i = 0; i < tasks.length; i++) {
  try {
    const result = await ask(tasks[i], rl);
    console.log(result);
  } catch (e) {
    console.error(e);
  }
}
rl.close();
