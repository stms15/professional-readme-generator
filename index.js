// Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
require("./utils/generateMarkdown");

// Create an array of questions for user input
const questions = [
  "What is the title of your project?\n",
  "Describe your project.\n",
  "Enter installation instructions for your project.\n",
  "How does someone use your project? Please include details.\n",
  "Choose a license from the following list for your project. If no license, select the empty string.",
  "Are there any contribution guidelines for your project? Hit enter/return an empty string if no.\n",
  "How can your project be tested?\n",
  "What is your GitHub username?\n",
  "What is your email address?\n",
];
const licenseOptions = [
  "GNU AGPLv3",
  "GNU GPLv3",
  "GNU LGPLv3",
  "Mozilla Public License 2.0",
  "Apache License 2.0",
  "MIT License",
  "Boost Software License 1.0",
  "",
];
const questionNames = [
  "title",
  "description",
  "installation",
  "usage",
  "license",
  "contribution",
  "tests",
  "username",
  "email",
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    error ? console.log(error) : console.log("Success");
  });
}

// Create a function to initialize app
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
        type: "list",
        message: questions[4],
        choices: licenseOptions,
        name: questionNames[4],
      },
      {
        type: "input",
        message: questions[5],
        name: questionNames[5],
      },
      {
        type: "editor",
        message: questions[6],
        name: questionNames[6],
      },
      {
        type: "input",
        message: questions[7],
        name: questionNames[7],
      },
      {
        type: "input",
        message: questions[8],
        name: questionNames[8],
      },
    ])
    .then((response) => {
      const markdown = generateMarkdown(response);

      writeToFile("./results/README.md", markdown);
    });
}

// Function call to initialize app
init();
