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

let addQuestion = [
  {
    type: "confirm",
    message: "Do you want to add another memeber to the team?",
    name: "addMember"
  }
];

let roleQuestion = [
  {
    type:"list",
    message: "What role will they fill?",
    choices: ["Intern","Engineer","Manager"],
    name: "role"
  }
];


module.exports = { employeeQuestions,
		   managerQuestion,
		   engineerQuestion,
		   internQuestion,
		   addQuestion,
		   roleQuestion};

