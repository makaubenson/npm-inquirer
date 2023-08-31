import inquirer from 'inquirer';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'name', 
        message: 'What is your name?',
        default:'Super Admin'
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
  });