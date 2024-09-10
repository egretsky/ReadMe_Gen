// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    switch (license) {
      case 'MIT':
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      
      case 'Apache 2.0':
        return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      
      case 'ISC':
        return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
      
      default:
       return '';
    }
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    switch (license) {
      case 'MIT':
        return '[MIT License](https://opensource.org/license/mit)';
      
      case 'Apache 2.0':
        return '[Apache License 2.0](https://opensource.org/license/apache-2-0)';
      
      case 'ISC':
        return '[ISC License](https://opensource.org/license/isc-license-txt)';
      
      default:
       return '';
    }
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `
      This application is covered under the ${license} license.`;
  }
    return '';
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} by ${data.username}
   ${renderLicenseBadge(data.license)}

  ## Title
    ${data.title}

  ## Description
    ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contribution)
  - [Test](#test)
  - [Questions](#questions)

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}
  
  ## License
  ${renderLicenseBadge(data.license)}

  ${renderLicenseLink(data.license)}

  ${renderLicenseSection(data.license)}

  ## Contributing
    ${data.contribution}
  
  ## Tests
    ${data.test}

  ## Questions
    ${data.questions}

    If you have any questions, you can reach out to me via email at ${data.email}. 
    Additionally, you can find more information on my GitHub page here: ${data.username}.
`;
}

module.exports = generateMarkdown;
