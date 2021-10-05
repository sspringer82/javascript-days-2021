export default function parseCli(args) {
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
