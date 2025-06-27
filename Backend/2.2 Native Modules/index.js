//using File system module
const fs = require('fs');

//write file : fs.writeFile(file, data[, options], callback)de 
// fs.writeFile('message.txt', 'Hello from Node JS', (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

//read file : readFile('/etc/passwd', 'utf8', callback); 
// fs.readFile('./message.txt','utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//install npm package - npm init
//install npm sillyname - npm i sillyname

//common js
var generateName = require('sillyname');
var sillyName = generateName();
console.log(`my name is ${sillyName}`)//my name is Hailterrier Fancier