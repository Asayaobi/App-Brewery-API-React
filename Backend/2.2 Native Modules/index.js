//using File system module
//const fs = require('fs');

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
// var generateName = require('sillyname');
// var sillyName = generateName();
// console.log(`my name is ${sillyName}`)//my name is Hailterrier Fancier

//ES Module style - add "type":"module" in package.json 
import generateName from "sillyname";
const sillyName = generateName();
console.log(`my name is ${sillyName}`); //my name is Gravelfish Falcon

//add superhero names package -npm i superheroes
import {randomSuperhero} from 'superheroes';
const superheroName = randomSuperhero();//my name is Flintgull Biter
console.log(`I am ${superheroName} !`);//I am Thor Girl !