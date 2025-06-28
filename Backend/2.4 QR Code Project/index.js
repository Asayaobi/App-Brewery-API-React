import inquirer from 'inquirer';
import qr from 'qr-image';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
    type: 'input',           // Use the input type
    name: 'userInput',       // Name to store the answer
    message: 'type your website here'         // No message displaye      
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const userWebsite = answers.userInput;
    console.log('You typed:', userWebsite);
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
