// Included packages needed to run this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// Template of the README file
const generateREADME = ({ title, description, usage, credits, license, git, screenshots }) =>
    `
# ${title}

## Description
${description}

  ---
  Table of Contents
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [GitHub](#git)
  - [Screenshots](#screenshots)

---
## Usage
${usage}

---
## Credits
${credits}

---
## License
${license}

---
## Links
GitHub: ${git}

---
## Screenshots and Video
![Website Screenshot and Video](./Develop/images/${screenshots})
`;
// Collects user's input to generate README content
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Provide the title of the Project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description of the Project.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List collaborators, if any, with links to the GitHub profiles.',
        },
        {
            type: 'list',
            message: 'Please select the License:',
            name: 'license',
            choices: ['None', 'MIT License', 'Apache License', 'GNU General Public License'],
        },
        {
            type: 'input',
            name: 'git',
            message: 'Provide the link to the GitHub Repository.',
        },
        {
            type: 'input',
            name: 'screenshots',
            message: 'Provide the file name of the screenshot or video.',
        },
    ])
    // Creates the README file based on user's input
    .then((answers) => {
        const readmeContent = generateREADME(answers);

        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md file!')
        );
    });

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
