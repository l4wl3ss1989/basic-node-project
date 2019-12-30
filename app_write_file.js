const fs = require('fs'); //fileSystem

const userName = 'Max';

fs.writeFile('user-data.txt', `Name: ${userName}`, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('WROTE FILE');
});
