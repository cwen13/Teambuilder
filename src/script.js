const inquirer = require("inquirer");
const fs = require("fs");
const engineer = require("../lib/engineer");
const intern = require("../lib/intern");
const manager = require("../lib/manager");

const { employeeQuestions,
	managerQuestion,
	engineerQuestion,
	internQuestion,
	addQuestion,
	roleQuestion} = require("../lib/questions");


const { bootstrap,
	fontAwe,
	header,
	bodyTop,
	footer } = require("../lib/htmls");

// Variables
let interns = [];
let engineers = [];
let managers = [];

//setting up html top section
let html = header +  bodyTop;

async function gatherTheTeam() {
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
    
    await inquirer.prompt(questions)
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
 
  html += managers.map((manager) => manager.getCard()).join("")
    + engineers.map((engineer) => engineer.getCard()).join("")
    + interns.map((intern) => intern.getCard()).join("")
    + footer;
  
    return html;
}

function writeHTML(HTML) {
  fs.writeFile("../dist/index.html", HTML, (err) =>
    err ? console.log(err) : console.log("HTML file written!")
  );
  return 0;
}

async function main () {

  writeHTML(await gatherTheTeam());
  return 0;

}

main();

