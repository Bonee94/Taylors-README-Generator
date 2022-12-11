const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utilities/generateMarkdown');

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
        default: 'npm i',
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

function generateREADME() {

    inquirer
        .prompt(
            questions
        )
        .then(response => {
            const markdown = generateMarkdown(response);
            writeToFile(markdown)
        });
}

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("README.md", data, (err) =>
    err ? console.log(err) : console.log('\x1B[96mGenerating \x1B[31mR\x1B[33mE\x1B[34mA\x1B[95mD\x1B[97mM\x1B[96mE...')
    )};

// TODO: Create a function to initialize app
function init() {
    generateREADME();
}

// Function call to initialize app
init();
