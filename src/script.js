const inquirer = require("inquirer");
const fs = require("fs");
const engineer = require("../lib/engineer");
const intern = require("../lib/intern");
const manager = require("../lib/manager");
const { employeeQuestions,
	managerQuestion,
	engineerQuestion,
	internQuestion } = require("../lib/questions");

const { bootstrap,
	fontAwe,
	header,
	bodyTop,
	footer } = require("../lib/html");
