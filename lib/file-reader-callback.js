'use strict';

const fs = require('fs');

//add the ability to actually add files look at fs write file methods
//we want to read the file and write information to a new file
//write that takes a buffer
//findout what is in the file, how can I change it and rewrite the file
// redo as promise and await
// add tests

/**
 * @param {String} filePath
 * @param {Function} cb
 */
exports.reader = (filePath, cb) => {
  fs.readFile(filePath, (err,data) => {
    if(err){
      cb(err);
    } else {
      try {
        cb(null, JSON.parse(data.toString()));
      } catch(e){
        cb(e);
      }
    }
  });
};

/**
 * @param {String} file -location to write to
 * @param {Object : Text : String} text - text info to write at the provided file path
 * @param {Function} cb - our callback function
 */
exports.writer = (file, text, cb) => {
  try{
    const bufferText = JSON.stringify(text) || text;
    const buffer = Buffer.from(bufferText);
    fs.writeFile(file, buffer, cb);
  } catch (e){
    cb(e);
  }
};