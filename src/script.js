const inquirer = require("inquirer");
const fs = require("fs");
const engineer = require("../lib/engineer");
const intern = require("../lib/intern");
const manager = require("../lib/manager");

//const { employeeQuestions,
//	managerQuestion,
//	engineerQuestion,
//	internQuestion } = require("../lib/questions");
//===================================================

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

//===================================================


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

// const { bootstrap,
// 	fontAwe,
// 	header,
// 	bodyTop,
// 	footer } = require("../lib/html");
//==================================================
const bootstrap = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">`;

const fontAwe = `<link rel="stylesheet" href="https://kit.fontawesome.com/a284b5a489.css" crossorigin="anonymous">`;

const header = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
  <meta name="Team Builder" content="A CLI that creates a team for you witha few questions"/>
  ${bootstrap}
  ${fontAwe}
  <title>The Team's Team</title>
</head>`;

const bodyTop = `<body class="min-vh-100 d-flex align-items-center bg-dark">
    <section class="w-100 d-flex flex-row flex-wrap justify-content-around">`;


const footer = `    </section>
  </div>
</body>
  <footer>
    Made by Teambuild
    Developed by Cody Wenrich
    Powered by <i class="fa-brands fa-github"></i><a href="https://github.com/cwen13> Github</a>
  </footer>
</html>`;

//==================================================

let html = header + bodyTop;

// Variables 
let interns = [];
let engineers = [];
let managers = [];
let questions = [];
let roles = [];

function addAnotherMember() {
  console.log("\nThere");
  inquirer.prompt(mainQuestion)
    .then((response) => {
      if(response.addMember) {
	switch (response.role){
	case "Intern":
	  questions = employeeQuestions.concat(internQuestion);
	  break;
	case "Engineer":
	  questions = employeeQuestions.concat(engineerQuestion);	    
	  break;
	case "Manager":
	  questions = employeeQuestions.concat(managerQuestion);	    
	  break;
	}
      } else {
	questions = null;
      }
      return response;
    })
    .catch((err) => {
  console.error(err.stack)
    });
}

//  return response;
//}

function addTheMember(role, personelInfo) {
    switch(role) {
    case "Intern":
      interns.push(Intern(personelInfo.name,
			  personelInfo.id,
			  personelInfo.email,
			  personelInfo.school));
      break;
    case "Engineer":
      engineers.push(Intern(personelInfo.name,
			    personelInfo.id,
			    personelInfo.email,
				personelInfo.github));
      break;
    case "Manager":
      managers.push(Intern(personelInfo.name,
			   personelInfo.id,
				   personelInfo.email,
			   personelInfo.officeNumber));
      
      break;
    }
  return 0;
}

async function gatherTheTeam() {
//  let role = "";
  while (true) {
    response = await inquirer.prompt(addQuestion);   
    if (!response.addMember) break;
 
    response = await inquirer.prompt(roleQuestion);
    switch (response.role){
    case "Intern":
      questions = employeeQuestions.concat(internQuestion);
      break;      
    case "Engineer":
      questions = employeeQuestions.concat(engineerQuestion);	    
      break;
    case "Manager":
      questions = employeeQuestions.concat(managerQuestion);	    
      break;
    }
    
    if (questions) {
      let person = await inquirer.prompt(questions)
	  .then((info) => {
	    switch(response.role) {
	    case "Intern":
	      interns.push(new intern(info.name,
				      info.id,
				      info.email,
				      info.school));
	      break;
	    case "Engineer":
	      engineers.push(new engineer(info.name,
					  info.id,
					  info.email,
					  info.github));
	      break;
	    case "Manager":
	      managers.push(new manager(info.name,
					info.id,
					info.email,
					info.officeNumber));
	      
	      break;
	    }
	  });
    }
  }


  html += managers.map((manager) => manager.getCard())
    + engineers.map((engineer) => engineer.getCard())
    + interns.map((intern) => intern.getCard())
    + footer;
  
  console.log(html);
    return html;
}


gatherTheTeam();

//function writeHTML(HTML) {
//  fs.writeFile("../dist/index.html", HTML, (err) =>
//    err ? console.log(err) : conseol.log("HTML file written!")
//  );
//  return 0;
//}
//
//  
//writeHTML(gatherTheTeam());
//
