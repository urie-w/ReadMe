// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


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
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'ReadMe file created!'
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
        return generateMarkdown(answers);
    })
    .then(markdown => {
        writeToFile('./output/README.md', markdown);
        console.log('ReadMe created!');
    })
    .catcher((error) => {
        console.log(error);
    });
}

// Function call to initialize app
init();
