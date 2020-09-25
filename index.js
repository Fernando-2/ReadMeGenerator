const fs = require("fs")
const inquire = require("inquire")
const generateMarkdown = require("./utils/generateMarkdown");
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
    type: "input",
    default: "",
    name: "",
},
{
    type: "input",
    default: "",
    name: "",
},
{
    type: "input",
    default: "",
    name: "",
},

];
function writeToFile(fileName, data) {
    let inputData = generateMarkdown(data);
    fs.writeFileSync(fileName, inputData, err => {
            if (err) {
                return console(err);
            }
        });
}
function init() {
    inquire
        .prompt(questions)
        .then(function (data) {
            console.log(JSON.stringify(data, null, 2));
            writeToFile("README.md", data);
        })
}
// function generateMarkdown(data) {
//     return `# ${data.title}
//    ##Description
//    ${data.Description}
//    ##username
//    ${data.username}
//    ##emailAddress
//    ${data.emailAddress}
//    ##repoUse
//    ${data.repoUse}
//    ##contribution
//    ${data.contribution}
//    `;
// }

module.exports = generateMarkdown;


// function to initialize program


// function call to initialize program
init();
