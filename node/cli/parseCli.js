import { Command } from 'commander/esm.mjs';

export default function parseCli(args) {
  const program = new Command();

  program
    .option('-n, --number <number>', 'Anzahl der Aufgaben', 4)
    .option('-l, --level <number>', 'Schwierigkeitsgrad', 1);

  program.parse(args);

  const options = program.opts();

  const result = {
    numberOfTasks: parseInt(options.number, 10),
    level: parseInt(options.level, 10),
  };

  // args.forEach((arg) => {
  //   if (arg.startsWith('--number')) {
  //     result.numberOfTasks = parseInt(arg.substr(9), 10);
  //   } else if (arg.startsWith('--level')) {
  //     result.level = parseInt(arg.substr(8), 10);
  //   }
  // });
  return result;
}
