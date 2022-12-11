function renderLicenseBadge(license) {
  let licenseBadge = '';

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
    return licenseBadge
  }
}

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

function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);

  if (license !== 'NONE') {
    let licenseSection = `## License

  - This project is licensed under the ${license} License.
  - ${licenseLink}

  `

    return licenseSection
  } else {
    let licenseSection = '';

    return licenseSection
  }
}

const renderLicenseTOC = license => {
  if (license !== 'NONE') {
    let licenseTOC = `- [License](#license)`

    return licenseTOC
  } else {
    let licenseTOC = '';

    return licenseTOC
  }
}

function generateMarkdown(data) {
  const license = data.selectedLicense;
  const licenseBadge = renderLicenseBadge(license);
  const licenseSection = renderLicenseSection(license);
  const licenseTOC = renderLicenseTOC(license);
  
  return `# ${data.projectName}

  ${licenseBadge}


## Description

${data.projectDescription}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
${licenseTOC}


## Installation

To install the necessary dependencies, run the following command:

- ${data.installDependencies}

## Usage

- ${data.usageNote}

## Contributing 

- ${data.contributionNote}

${licenseSection}
## Tests

To run tests, run the following command:

- ${data.testDependencies}

## Questions

  If you have any questions about the repo, open an issue or contact me directly at <span style="color:blue"> ${data.email}</span>. You can find more of my work at [${data.githubUsername}](https://github.com/${data.githubUsername}).

`;
}

module.exports = generateMarkdown;
