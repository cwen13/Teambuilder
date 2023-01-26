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

module.exports = [
  employeeQuestions,
  managerQuestion,
  engineerQuestion,
  internQuestion,
];
