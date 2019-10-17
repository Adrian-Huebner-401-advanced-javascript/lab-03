'use strict';

jest.mock('fs');

const fileReader = require('../lib/file-reader-callback');

//await
//good path
//bad path

// callback
//bad path
describe('Testing file reader module', () => {
  it ('Throws err when bad file path is given', (done) => {
    let file = `${__dirname}../data/bad.json`;
    fileReader(file, (err, data) => {
      expect(err).toBeDefined();
      expect(data).not.toBeDefined();
      expect(err).toEqual('Invalid File');
      done();
    });
  });
  //good path
  it('Returns text when a proper file is given', (done) => {
    let file = `${__dirname}../data/person.json`;
    fileReader(file, (err,data) => {
      expect(err).toBe(null);
      expect(data).toBeDefined();
      done();
    });
  });
});
//test promises
describe('Testing file reader module for promises' () => {

})