const names = require('./names');
const sayHi = require('./utils');
require('./runFirst')

sayHi(names.john)
sayHi(names.peter)

// built in modules

const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is: ${os.uptime()} seconds`);

const path = require('path');

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);


// sync - blocking method
const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
  './content/result-sync.txt', 
  `Here is the result: ${first}, ${second}`, 
  { flag: 'a' }
  )
  
  // async call
const { readFile, writeFile } = require('fs')

readFile(
  './content/first.txt', 'utf8', (err, result) => {
   if (err) {
    console.log(err);
    return
   }
   const first = result;

   readFile(
    './content/second.txt', 'utf8', (err, result) => {
     if (err) {
      console.log(err);
      return
     }
     const second = result;
     writeFile(
      './content/result-async.txt', 
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return
        }
        console.log(result);
      }
     )
    })
  })
