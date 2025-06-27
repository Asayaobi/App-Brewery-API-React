//using File system module
const fs = require('fs');

//write file : fs.writeFile(file, data[, options], callback)de 
fs.writeFile('message.txt', 'Hello from Node JS', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

