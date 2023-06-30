// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your project?",
  "Describe your project.",
  "Enter installation instructions for your project.",
  "How does someone use your project? Please include details",
  "Are there any contribution guidelines for your project? Hit enter/return an empty string if no.",
  "How can your project be tested?",
];
const questionNames = [
  "title",
  "description",
  "installation",
  "usage",
  "contribution",
  "tests",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: questionNames[0],
      },
      {
        type: "input",
        message: questions[1],
        name: questionNames[1],
      },
      {
        type: "input",
        message: questions[2],
        name: questionNames[2],
      },
      {
        type: "input",
        message: questions[3],
        name: questionNames[3],
      },
      {
        type: "input",
        message: questions[4],
        name: questionNames[4],
      },
      {
        type: "input",
        message: questions[5],
        name: questionNames[5],
      },
    ])
    .then((response) => {
      console.log(`${response.title}: ${response.usage}`);
    });
}

// Function call to initialize app
init();
