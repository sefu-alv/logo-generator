const inquirer = require("inquirer");
const fs = require ("fs");
const {Circle, Rectangle, Triangle} = require("./lib/shapes");

// generates SVG from the user data
function generateSVG(shapeChoice, { letters, textColor, shapeColor }) {
    
    const chosenShape = shapeChoice.render();
    const textElement = `<text x="150" y="100" dominant-baseline="middle"  stroke-width="0" stroke="#000" font-size="24px" text-anchor="middle" fill="${textColor}">${letters}</text>`;
  
    const svg = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill = ${shapeColor}>${chosenShape}${textElement}</svg>`;
    return svg;
  }

//   questions for user to help create SVG
const questions = [
    {
      type: "input",
      message: "Please enter 3 characters",
      name: "letters",
    }, 
    {
      type: "input",
      message: "what color whould you like the text to be?",
      name: "textColor",
  
    },
    {
      type: "list",
      message: "What shape would you like your logo to be?",
      choices: ['Triangle', 'Rectangle', 'Circle'],
      name:"logo",
    },
    {
      type: "input",
      message: "What color would you like your shape to be?",
      name:"shapeColor"
    }
  
  ];

function svgFile (fileName , data) {
    fs.writeFile(fileName,data, (err) => {
        if(err){
            console.log(err);
        } else {
            console.log(`${fileName} has been created successfully`);
        }

    })

}


function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // checks to see if user went over 3 letters
      if (answers.letters.length < 0 || answers.letters.length > 3) {
        console.log("Please do not exceed 3 letters");
      } else {
        let shapeChoice;
        // switch case to determine what shape the user wants
        switch (answers.logo) {
          case 'Triangle':
            shapeChoice = new Triangle();
            break;
          case 'Rectangle':
            shapeChoice = new Rectangle();
            break;
          case 'Circle':
            shapeChoice = new Circle();
            break;
          default:
            console.error('Invalid shape');
            return;
        }
        const svgData = generateSVG(shapeChoice, answers);
        svgFile("logo.svg", svgData);
      }
    });
}


  // calling the function
  init();
