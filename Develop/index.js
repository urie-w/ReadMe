// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'Could you describe your project?',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'Project installation instructions?',
        name: 'Installation',
    },
    {
        type: 'list',
        message: 'Which license is used for this project?',
        name: 'License',
        choices: ['MIT', 'Apache', 'BSD', 'None'],
    },
    {
        type: 'input',
        message: 'Who or what resources did you use to help you with this project?',
        name: 'Credits',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'GitHub',
    },
];

validate: (value) => {
    if (value) {
        return true;
    } else {
        console.log('Please enter a value to continue.');
        return false;
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
