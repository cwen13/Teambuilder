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


let mainQuestions = [
  {
    type: "confirm",
    message: "Do you want to add another memeber to the team?",
    name: "addMember"
  },
  {
    type:"list",
    message: "What role will they fill?",
    choices: ["Intern","Engineer","Manager"],
    name: "role"
  }
];

const { bootstrap,
	fontAwe,
	header,
	bodyTop,
	footer } = require("../lib/html");
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
  let {addMember, role} = await inquirer.prompt(mainQuestions);
  console.log(role);
  console.log(typeof employeeQuestions);
  if(addMember) {
    switch (role){
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

  if (questions) {
    let person = await inquirer.prompt(questions)
      .then((info) => {
	if (addMember) {
	  switch(role) {
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
	  //	  gatherTheTeam();
	}
      });
  }
    
    html += managers.forEach(manager.prototype.getCard)
    + engineers.forEach(engineer.prototype.getCard)
    + interns.forEach(intern.prototype.getCard)
    + footer;
  
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
