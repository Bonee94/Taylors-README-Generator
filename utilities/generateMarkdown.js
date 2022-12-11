// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
  console.log(`\n License Badge is being rendered \n ${license} \n`)

  if (license === 'MIT') {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

    console.log(`\n License Logic triggered \n ${licenseBadge} \n`)

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
    return licenseBadge
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';

  if (license === 'MIT') {
    licenseLink = "https://www.mit.edu/~amini/LICENSE.md";

    return licenseLink
  } else if (license === 'APACHE 2.0') {
    licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0.txt';

    return licenseLink

  } else if (license === 'GPL 3.0') {
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.txt';

    return licenseLink

  } else if (license === 'BSD 3') {
    licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';

    return licenseLink

  } else if (license === 'NONE') {
    return licenseLink
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  let licenseSection = `## License

  - This project is licensed under the ${license} License.

  `;
  console.log(licenseSection);

  return licenseSection
}

function generateMarkdown(data) {
  const license = data.selectedLicense;
  let licenseBadge = renderLicenseBadge(license);
  let licenseSection = renderLicenseSection(license);
  let licenseLink = renderLicenseLink(license);


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

${licenseSection}
## Tests

To run tests, run the following command:

  ${data.testDependencies}

`;
}

module.exports = generateMarkdown;
