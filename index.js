'use strict';

const filePath = process.argv[2];

const useCallback = require('./lib/file-reader-callback');
const usePromise = require('./lib/file-reader-promise');
const useAwait = require('./lib/file-reader-await');

useCallback.reader(filePath, (err,data) => {
  if (err){
    console.error(err);
  } else {
    data.lastName = "Changed from a callback";
    useCallback.writer(filePath, data, (err) => {
      if(err){
        console.error(err);
      } else {
        useCallback.reader(filePath, (err, newData) => {
          console.log(newData);
        });
      }
    });
    console.log(data);
  }
});

usePromise.read(filePath)
  .then(data => {
    data.lastName = 'here is my promist name';
    return data;
  })
  .then(obj => usePromise.writer(filePath, obj))
  .then(() => usePromise.reader(filePath).then((content) => {console.log(content);}))
  .catch(e => {
    throw e;
  });

async function callUseAwait(){
  const contents = await useAwait.reader(filePath);
  contents.lastName = 'Changed with await method';
  await useAwait.writer(filePath, contents);;
  const newContents = await useAwait.reader(filePath);
  return newContents;
}

callUseAwait().then((fileData) => console.log(fileData));