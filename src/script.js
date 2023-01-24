const inquirer = require("inquirer");

const employeeQuestions = [
  {
    type: "input",
    message:"What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is a breif description of your project?",
    name: "description",
  },
  {
    type:"input",
    message:"How do you install your project?",
    name:"install",
  },
  {
    type:"input",
    message:"How does one use your project?",
    name:"usage",
  },
  {
    type:"input",
    message:"How can people contribute?",
    name:"contribute",
  },
  {
    type:"input",
    message:"What are the tests for this project?",
    name:"testing",
  },
  {
    type:"list",
    message:"What license is this covered by?",
    choices: ["None", "Apache","MIT","BSD 2", "BSD 3","Boost","CC","Eclipse Public", "GNU Affero", "GNU General", "GNU Lesser","Monzilla","The Unlicense"],
    name:"license",
  },
  {
    type:"input",
    message:"What is you github username?",
    name:"github",
  },
  {
    type:"input",
    message:"What is your email?",
    name:"email",
  },
];

const managaerQuestions = [];
const engineerQuestions = [];
const ineternQuestions = [];


