'use strict';

jest.mock('fs');

const fileReader = require('../lib/file-reader-callback');

describe('tests file handler', () => {
  it ('writes to a file using a callback', () => {
    fileReader.writer('test.json', {name: 'Test'}, (err, data) => {
      expect(err).not.toBeDefined();
      expect(data).toBeDefined();
    });
  });
  it('defines err with bad path with callback', () => {
    fileReader.writer('bad.txt', {name: 'Test'}, (err, data) => {
      expect(err).toBe('Invalid File');
      expect(data).not.toBeDefined();
    });
  });
});

//test promises

//test awaits
