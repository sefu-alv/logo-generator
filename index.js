const inquirer = require("inquirer");
const fs = require ("fs");

inquirer.prompt([
  {
    type: "input",
    message: "Please enter 3 characters",
    name: "letters ",
  }, 
  {
    type: "input",
    message: "what color whould you like the text to be?",
    name: "textColor",

  },
  {
    type: "list",
    message: "What shape would you like your logo to be?",
    choices: ['Triangle', 'Square', 'Circle'],
    name:"logo",
  },
  {
    type: "input",
    message: "What color would you like your shape to be?",
    name:"shapeColor"
  }

]);
