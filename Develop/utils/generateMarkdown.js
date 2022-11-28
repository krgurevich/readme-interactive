// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license !== "None") {
    badge = "![license](https://shields.io/badge/license-" + license + "-green)";
  }
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";

  switch (license) {
    case "MIT":
      licenseLink = "https://opensource.org/licenses/MIT";
      break;

    case "Apache License 2.0":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0";
      break;

    case "GNU General Public License":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;

    case "The 3-Clause BSD License":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;

    default:
      licenseLink = "";
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;
