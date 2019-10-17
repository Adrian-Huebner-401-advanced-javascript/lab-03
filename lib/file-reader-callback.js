'use strict';

const fs = require('fs');

//add the ability to actually add files look at fs write file methods
//we want to read the file and write information to a new file
//write that takes a buffer
//findout what is in the file, how can I change it and rewrite the file
// redo as promise and await
// add tests

//file reader
const reader = (file, cb) => {
  fs.readFile(file,(err, data) => {

    console.log(err);
    if(err){
      console.log('here');
      cb(err);
    } else {
      cb(null, data.toString());
    }
  });
};

//file write
const writer = () => {}

module.exports = {reader, writer};