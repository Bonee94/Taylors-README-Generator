// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utilities/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'githubUsername',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your projects name?',
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'projectDescription',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'selectedLicense',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'NONE'],
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installDependencies',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'testDependencies',
        default: 'npm test',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usageNote',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributionNote',
    },
];



inquirer
    .prompt(
        questions
    )
    .then(response => {
        generateMarkdown(response);
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
