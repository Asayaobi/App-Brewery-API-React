import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
    name: 'userInput',       // Name to store the answer
    message: 'type your URL here'         // No message displaye      
    }
  ])
  .then((answers) => {
    // Get user website
    //console.log(answers); {userInput: www.google.com}
    const userWebsite = answers.userInput;
    //2.Use the qr-image npm package to turn the user entered URL into a QR code image.
    const qr_svg = qr.image(userWebsite, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qrcode.png'));
    //3.Create a txt file to save the user input using the native fs node module.
    fs.writeFile('message.txt', userWebsite, (err) => {
    if (err) throw err;
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


  /* 
  Note
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
