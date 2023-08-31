import inquirer from 'inquirer';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'input_type', 
        message: 'What is your name?',
        default:'Super Admin'
    },
    {
        type: 'list',
        name: 'list question', 
        message: 'What programming language do you like?',
        choices:['JavaScript', 'C++','Java','Python'],
        default:'JavaScript'
    },
    {
        type: 'checkbox',
        name: 'checkbox question', 
        message: 'How many programming languages do you speak?',
        choices:['JavaScript', 'C++','Java','Python'],
        default:'JavaScript'
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
  });