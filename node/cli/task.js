export default function getTasks() {
  const tasks = [];
  for (let i = 0; i < 4; i++) {
    let task = {
      operands: [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
      ],
    };
    task.result = task.operands[0] + task.operands[1];
    tasks.push(task);
  }
  return tasks;
}
