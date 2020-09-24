var fs = require("fs")
var inquirer = require("inquire")
const questions = [{
    type:"input",
    message:"what is your Github username?",
    name:"username",
},
{
    type:"input",
    message:"What is your email address?",
    name:"emailAddress",
},
{
    type:"input",
    message:"what is your projects name?",
    name:"projectName",
},
{
    type:"input",
    message:"Please write a short description about your project?",
    name:"Description",
},
{
    type:"input",
    message:"What does the user need to know about using your repo",
    name:"repoUse",
},
{
    type:"input",
    message:"What does the user need to know about contributing to the repo",
    name:"contribution",
},
{
    type:"input",
    message:"",
    name:"",
},
{
    type:"input",
    message:"",
    name:"",
},
{
    type:"input",
    message:"",
    name:"",
},

];


inquirer
 .prompt(questions)
// function to initialize program
function init() {

}

// function call to initialize program
init();
