export default function getTasks(numberOfTasks, level) {
  const tasks = [];
  for (let i = 0; i < numberOfTasks; i++) {
    let task = {
      operands: [
        Math.floor(Math.random() * (level === 1 ? 9 : 99)),
        Math.floor(Math.random() * (level < 3 ? 9 : 99)),
      ],
    };
    task.result = task.operands[0] + task.operands[1];
    tasks.push(task);
  }
  return tasks;
}
