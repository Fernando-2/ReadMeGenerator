const fs = require("fs")
const inquirer = require("inquirer")
var generatedMarkdown = require("./utils/generateMarkdown.js");
const questions = [{
    type: "input",
    message: "what is your Github username?",
    name: "username",
},
{
    type: "input",
    message: "What is your email address?",
    name: "emailAddress",
},
{
    type: "input",
    message: "what is your projects name?",
    name: "Title",
},
{
    type: "input",
    message: "Please write a short description about your project?",
    name: "Description",
},
{
    type: "input",
    message: "What does the user need to know about using your repo",
    name: "repoUse",
},
{
    type: "input",
    message: "What does the user need to know about contributing to the repo",
    name: "contribution",
},
{
    type: "list",
    message: "Please choose a license you used for this project.",
    name: "license",
    choices: [ 'Mozilla Public License 2.0', 'MIT', 'Apache License 2.0']
},
{
    type: "input",
    message: "What are the installation instructions for your project?",
    name: "installation",
    default: "npm i"
},
{
    type: "input",
    message: "Please enter if any testing protocols were used for your project?",
    name: "test",
    default: "test",
},

];
function writeToFile(fileName, data) {
    let inputData = generatedMarkdown(data);
    fs.writeFile(function (fileName, inputData, err) {
        if (err) {
            return console(err);
        }
    });
}
// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(function(data) {
            console.log(JSON.stringify(data, null, 2));
            writeToFile("README.md", data);
        })
}




// function call to initialize program
init();
