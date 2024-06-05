#!/usr/bin/env node

const { program } = require('commander');

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2, options) => {
    console.log(`Comparing files: ${filepath1} and ${filepath2}`);
    if (options.format) {
      console.log(`Output format: ${options.format}`);
    }
  });

// Проверка, если нет аргументов или недостаточно аргументов, выводим справку
if (process.argv.length < 4) {
  program.help();
}

program.parse(process.argv);






