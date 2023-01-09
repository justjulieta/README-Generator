// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

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
        name: "Project Title"
    },

    {
        type: "input",
        message: "Please enter a description of your project.",
        name: "Description of Project",
    },

    {
        type: "input",
        message: "Please enter in usage information for your project.",
        name: "Usage Information",
    },

    {
        type: "input",
        message: "Please enter installation instructions for your project.",
        name: "Installation Instructions",
    },

    {
        type: "input",
        message: "Please select the license for your project.",
        name: "License",
    },

    {
        type: "input",
        message: "Please enter enter contribution guidelines for your project.",
        name: "Contribution Guidelines",
    },

    {
        type: "input",
        message: "Please enter test instructions for your project.",
        name: "Test",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
