// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What's your GitHub username",
        name: "Github",
    },

    {
        type: "input",
        message: "What's your email?",
        name: "Email",
    },

    {
        type: "input",
        message: "What's the title of your project?",
        name: "Title"
    },

    {
        type: "input",
        message: "Please enter a description of your project.",
        name: "Description",
    },

    {
        type: "input",
        message: "Please enter in usage information for your project.",
        name: "Usage",
    },

    {
        type: "input",
        message: "Please enter installation instructions for your project.",
        name: "Installation",
    },

    {
        type: "input",
        message: "Please select the license for your project.",
        name: "License",
        choices: ['None', 'Apache License 2.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 1.0','GNU Lesser General Public License v3', 
        'Mozilla Public License 2.0','MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0',  
        'GNU General Public License v3.0', 'GNU General Public License v2.0',  'The Unlicense']
    },

    {
        type: "input",
        message: "Please enter enter contribution guidelines for your project.",
        name: "Contribution",
    },

    {
        type: "input",
        message: "Please enter test instructions for your project.",
        name: "Test",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("writing to file")
    fs.writeFile(fileName, generateMarkdown(data), function(err){
        if(err){
            return console.error(err);
        } else 
        console.log('README successfully created!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile(README.md, answers);
    })
}


// Function call to initialize app
init();
