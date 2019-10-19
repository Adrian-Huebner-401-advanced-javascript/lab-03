'use strict';

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

exports.reader = async (path) => {
  try {
    const data = await readFile(path);
    const fileObject = JSON.parse(data.toString());
    return fileObject;
  } catch (error) {
    throw error;
  }
};

exports.writer = async (path, data) => {
  try{
    let textString = JSON.stringify(data) || data;
    await writeFile(path, textString);
  } catch (error) {
    throw error;
  }
};