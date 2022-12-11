// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if (license === 'MIT') {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

    return licenseBadge
  } else if (license === 'APACHE 2.0') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

    return licenseBadge

  } else if (license === 'GPL 3.0') {
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

    return licenseBadge

  } else if (license === 'BSD 3') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';

    return licenseBadge

  } else if (license === 'NONE') {
    licenseBadge = '';

    return licenseBadge

  }
   
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = data.selectedLicense;
  renderLicenseBadge(license)

  console.log(licenseBadge)
  return `# ${data.title}

  ${licenseBadge}


## Description

${data.projectDescription}}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributor](#contributor)
- [License](#license)


## To install the necessary dependencies, run the following command:

${data.installDependencies}

## Usage

  ${data.usageNote}

## Contributor 

  ${data.contributionNote}

## License

  ${license}

## Tests

To run tests, run the following command:

  ${data.testDependencies}

`;
}

module.exports = generateMarkdown;
