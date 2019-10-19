'use strict';

jest.mock('fs');

const fileCallback = require('../lib/file-reader-callback');
const filePromises = require('../lib/file-reader-promise');
const fileAwaits = require('../lib/file-reader-await');

// test callbacks
describe('tests file handler callback', () => {
  it ('writes to a file using a callback', () => {
    fileCallback.writer('test.json', {name: 'Test'}, (err, data) => {
      expect(err).not.toBeDefined();
      expect(data).toBeDefined();
    });
  });
  it('defines err with bad path with callback', () => {
    fileCallback.writer('bad.txt', {name: 'Test'}, (err, data) => {
      expect(err).toBe('Invalid File');
      expect(data).not.toBeDefined();
    });
  });
});

// test promises
describe('tests file handler promises', () => {
  it ('writes to a file using a promise', () => {
    filePromises.writer('test.json', {name: 'Test'}, (err,data) => {
      expect(err).not.toBeDefined();
      expect(data).toBeDefined();
    });
  });
  it('defines err with bad path with promise', () => {
    filePromises.writer('bad.txt', {name: 'Test'}, (err,data) => {
      expect(err).toBe('Invalid File');
      expect(data).not.toBeDefined();
    });
  });
});

// test awaits
describe('tests file handler await', () => {
  it('writes to a file using await', () => {
    fileAwaits.writer('test.json', {name: 'Test'}, (err,data) => {
      expect(err).not.toBeDefined();
      expect(data).toBeDefined();
    });
  });
  it('defines err with bad path with await', () => {
    fileAwaits.writer('bad.txt', {name: 'Test'}, (err,data) => {
      expect(err).toBe('Invalid File');
      expect(data).not.toBeDefined();
    });
  });
});