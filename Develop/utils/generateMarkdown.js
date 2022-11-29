// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license, { licenseLink, licenseImage }) {
  let badge = "";
  if (license !== "None") {
    badge = `[![License:${license}](${licenseImage})](${licenseLink})`
  }
  return badge
}

// Function that returns the license link
// If there is no license, returns an empty string
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

// Function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  let licenseSection = "";

  if (license != "None") {
    licenseSection += "---\n";
    licenseSection += "## License \n";
    licenseSection += "\nTo review the terms of the license, please see " + renderLicenseLink(license).licenseLink + "\n"
  }
  return licenseSection;
}

// Function to generate markdown for README
// Template of the README file
const generateMarkdown = ({ title, description, installation, usage, license, credits, tests, github, email }) =>
  `# ${title}
${description}\n

${renderLicenseBadge(license, renderLicenseLink(license))}
---
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits) ${license != "None" ? "\n- [License](#license)" : ""}
- [Support](#github)


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
## Support
GitHub Username: ${github}\n
For support, please email at ${email}.
`;

module.exports = generateMarkdown;

