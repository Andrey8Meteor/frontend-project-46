#!/usr/bin/env node

const { Command } = require('commander');
const parseJsonFile = require('./parser');
const path = require('path');

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>', 'path to first file')
  .argument('<filepath2>', 'path to second file')
  .action((filepath1, filepath2) => {
    try {
      const data1 = parseJsonFile(filepath1);
      const data2 = parseJsonFile(filepath2);

      console.log('File 1 data:', data1);
      console.log('File 2 data:', data2);

      // Add comparison logic here
      // For example, just to demonstrate:
      console.log('Differences:', JSON.stringify(data1) !== JSON.stringify(data2) ? 'Files are different' : 'Files are the same');
    } catch (error) {
      console.error('Error processing files:', error);
    }
  });

program.parse(process.argv);






