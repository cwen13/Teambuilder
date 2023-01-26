const inquirer = require("inquirer");

const employeeQuestions = [
  {
    type: "input",
    message:"What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your id?",
    name: "id",
  },
  {
    type:"input",
    message:"What is your email?",
    name:"email",
  }
];

const managerQuestion = [
  {
    type:"input",
    message:"What is your office number?",
    name:"officeNum",
  }
];

const engineerQuestion = [
  {
    type:"input",
    message:"What s your github?",
    name:"contribute",
  }
];

const internQuestion = [
  {
    type:"input",
    message:"What school are you from?",
    name:"school",
  },
];


const bootstrap = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">`;

const fawe = `<link rel="stylesheet" href="https://kit.fontawesome.com/a284b5a489.css" crossorigin="anonymous">`;
