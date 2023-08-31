import inquirer from 'inquirer';

const questions = [
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'name', 
        message: 'What is your name?',
        validate:(answer)=>{
                if(answer === ''){
                    return 'Please enter a valid name'
                }
                    return true
        }
    },
    {
        type: 'input',
        name: 'height', 
        message: 'What is your height (in inches)? ',
        validate:(answer)=>{
            if(isNaN(answer)){
                return 'Please enter a valid number'
            }
                return true
        }
    },
    {
        type: 'input',
        name: 'weight', 
        message: 'What is your current weight (in pound)? ',
        validate:(answer)=>{
            if(isNaN(answer)){
                return 'Please enter a valid number'
            }
                return true
        }
    },
  ];

console.log('----------BMI CALCULATOR----------');

inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    const height = answers.height;
    const weight = answers.weight;
    const name = answers.name;

    const BMI = (weight / (height*height))*703;

 if(BMI < 16){
    console.log(`${name}, your BMI is ${BMI} and it is considered to be severely under weight`);
 }else{
    console.log(`${name}, your BMI is ${BMI}`);
 }
  });