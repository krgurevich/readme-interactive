// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, { licenseLink, licenseImage }) {
  let badge = "";
  if (license !== "None") {
    badge = `[![License:${license}](${licenseImage})](${licenseLink})`
  }
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  let licenseImage = "";

  switch (license) {
    case "MIT License":
      licenseLink = "https://opensource.org/licenses/MIT";
      licenseImage = "https://img.shields.io/badge/License-MIT-yellow.svg"
      break;

    case "Apache License 2.0":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0";
      licenseImage = "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
      break;

    case "GNU General Public License":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      licenseImage = "https://img.shields.io/badge/License-GPLv3-blue.svg"
      break;

    case "The 3-Clause BSD License":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      licenseImage = "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg"
      break;

    default:
      licenseLink = "";
      break;
  }
  return { licenseLink, licenseImage }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";

  if (license != "None") {
    licenseSection += "---\n";
    licenseSection += "## License \n";
    licenseSection += "To review the terms of this license, please see " + renderLicenseLink(license).licenseLink
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ title, description, installation, usage, license, credits, tests, github, email }) =>
  `# ${title}
## Description
${description}
${renderLicenseBadge(license, renderLicenseLink(license))}

---
Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${license != "None" && "- [License](#license)"}
- [GitHub](#questions)

---
## Installation
${installation}

---
## Usage
${usage}

---
## Contributing
${credits}

${renderLicenseSection(license)}

--- 
## Tests
${tests}

---
## Questions
My GitHub Username: ${github}
If you have any additional questions, please contact me at ${email}.
`;

module.exports = generateMarkdown;

