// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your project?",
  "Describe your project.",
  "Enter installation instructions for your project.",
  "How does someone use your project? Please include details",
  "Choose a license from the following list for your project. If no license, hit enter/return an empty string.\n\nGNU AGPLv3\nGNU GPLv3\nGNU LGPLv3\nMozilla Public License 2.0\nApache License 2.0\nMIT License\nBoost Software License 1.0",
  "Are there any contribution guidelines for your project? Hit enter/return an empty string if no.",
  "How can your project be tested?",
];
const questionNames = [
  "title",
  "description",
  "installation",
  "usage",
  "license",
  "contribution",
  "tests",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    error ? console.log(error) : console.log("Success");
  });
}

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
      {
        type: "input",
        message: questions[6],
        name: questionNames[6],
      },
    ])
    .then((response) => {
      const markdown = generateMarkdown(response);

      writeToFile("generated-README.md", markdown);
    });
}

// Function call to initialize app
init();
