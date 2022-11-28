// Included packages needed to run this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')


// Template of the README file
// Collects user's input to generate README content
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Provide the title of the Project -',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description of the Project -',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions -',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use -',
        },
        {
            type: 'list',
            message: 'Please select the Project License (use arrow key):',
            name: 'license',
            choices: ['None', 'MIT License', 'Apache License 2.0', 'GNU General Public License', 'The 3-Clause BSD License'],
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List collaborators, if any, with links to the GitHub profiles -',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide a sample of tests that can be performed with code examples -',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Provide your GitHub username -',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Provide your email address -',
        },
    ])
    // Creates the README file based on user's input
    .then((answers) => {
        const readmeContent = generateMarkdown(answers);

        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('README is successfully created!')
        );
    });

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();