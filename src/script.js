const inquirer = require("inquirer");
const fs = require("fs");
const engineer = require("../lib/engineer");
const intern = require("../lib/intern");
const manager = require("../lib/manager");

const { employeeQuestions,
	managerQuestion,
	engineerQuestion,
	internQuestion } = require("../lib/questions");
let mainQuestion = [
  {
    type: "confirm",
    message: "Do you want to ad another memeber to the team?",
    name: "addMember"
  },
  {
    type:"list"
    message: "What role will they fill?",
    choices: ["Intern","Engineer","Manager"],
    name: "role";
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

function gatherTheTeam() {
  let building = true;
  while (building){
    inquirer.promt(mainQuestion)
      .then((response) => {
	if (!response.addMember) {
	  break;
	} else {
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
	}
	inquirer.prompt(questions)
	  .then((personelInfo) => {
	    switch(response.role) {
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
	    })
      });
  }

  html += managers.forEach(getCard)
    + engineers.forEach(getCard)
    + interns.forEach(getCard);
  html += footer;

  return html;
}

function writeHTML(HTML) {
  fs.writeFile("../dist/index.html", HTML, (err) =>
    err ? console.log(err) : conseol.log("HTML file written!")
  );
  return 0;
}
		
