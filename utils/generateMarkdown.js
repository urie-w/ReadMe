// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
      return '![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)';
   } else if (license === 'Apache') {
        return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      } else if(license === 'BSD') {
        return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
      } else {
        return '';
      }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
switch (license) {
  case 'MIT':
    return 'https://opensource.org/licenses/MIT';
  case 'Apache':
    return 'https://opensource.org/licenses/Apache-2.0';
  case 'BSD':
    return 'https://opensource.org/licenses/BSD-3-Clause';
  default:
    return '';
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
  return '';
}
return `[${renderLicenseBadge(license)}](${renderLicenseLink(license)})`;
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.Title}

  ##Description
  ${data.Description}

  ##Installation
  ${data.Installation}

  ##Usage
  ${data.Usage}
  
  ##Table of Contents
  *[Description](#description)
  *[Installation](#installation)
  *[Usage](#usage)
  *[Credits](#credits)
  *[License](#license)
  *[GitHub](#github)
  *[Email](#email)
  *[Questions](#questions)

  ##Credits
   ${data.Credits}

  ##License
  ${renderLicenseSection(data.License)}


  ## Questions
  [Link to GitHub profile](https://github.com/${data.GitHub})
  You can reach me at ${data.email} for any further questions.`;
}
module.exports = generateMarkdown;