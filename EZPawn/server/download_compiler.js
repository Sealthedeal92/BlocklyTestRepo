const https = require('https');
const fs = require('fs');
const unzip = require('unzipper');

const url = 'https://sm.alliedmods.net/smdrop/1.11/sourcemod-latest-windows.zip';

console.log('Downloading SourceMod compiler...');

https.get(url, (res) => {
  res.pipe(unzip.Extract({ path: './compiler' }))
    .on('close', () => {
      console.log('Compiler downloaded and extracted to ./compiler');
    });
});
