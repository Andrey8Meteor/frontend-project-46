const fs = require('fs');
const path = require('path');

const parseJsonFile = (filePath) => {
  try {
    const absolutePath = path.resolve(filePath);
    const data = fs.readFileSync(absolutePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading or parsing file ${filePath}:`, error);
    throw error;
  }
};

module.exports = parseJsonFile;
