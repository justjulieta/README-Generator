// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
    case 'Creative Commons Zero v1.0 Universal':
      return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]';
    case 'Eclipse Public License 1.0':
      return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]';
    case 'GNU Lesser General Public License v3':
      return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]';
    case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
    case 'BSD 2-Clause "Simplified" License':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]';
    case 'BSD 3-Clause "New" or "Revised" License':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]';
    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]';
    case 'GNU General Public License v3.0':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]';
    case 'GNU General Public License v2.0':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]';
    case 'The Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]';
    default:
      return '';  
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'Apache License 2.0':
      return '(https://opensource.org/licenses/Apache-2.0)';
    case 'Creative Commons Zero v1.0 Universal':
      return '(http://creativecommons.org/publicdomain/zero/1.0/)';
    case 'Eclipse Public License 1.0':
      return '(https://opensource.org/licenses/EPL-1.0)';
    case 'GNU General Public License v3.0':
      return '(https://www.gnu.org/licenses/agpl-3.0)';
    case 'Mozilla Public License 2.0':
      return '(https://opensource.org/licenses/MPL-2.0)';
    case 'MIT License':
      return '(https://opensource.org/licenses/MIT)';
    case 'BSD 2-Clause "Simplified" License':
      return '(https://opensource.org/licenses/BSD-2-Clause)';
    case 'BSD 3-Clause "New" or "Revised" License':
      return '(https://opensource.org/licenses/BSD-3-Clause)';
    case 'Boost Software License 1.0':
      return '(https://www.boost.org/LICENSE_1_0.txt)';
      case 'GNU Lesser General Public License v3':
      return '(https://www.gnu.org/licenses/lgpl-3.0)';
    case 'GNU General Public License v2.0':
      return '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    case 'The Unlicense':
      return '(http://unlicense.org/)';
    default:
      return '';  
    }
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);

  if(!license){
  return'';
} else{
  return '## License: This Project is covered under the follwoing license ${licenseLink}'
}
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license)
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}
  ${licenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents
  - [GitHub](#GitHub)
  - [Email](#Email)
  - [Title](#Title)
  - [Description](#Description)
  - [Usage](#Usage)
  - [Installation](#installation)
  - [License](#license)
  - [Contribution](#Contribution)
  - [Test](#Test)
  - [Questions](#Questions)

  ## GitHub
  ${data.GitHub}

  ## Email
  ${data.Email}

  ## Title
  ${data.Title}

  ## Description
  ${data.Description}

  ## Usage
  ${data.Usage}

  ## Installation
  ${data.Installation}

  ## License
  ${licenseSection}
  ${licenseLink}
  ${data.License}

  ## Contribution
  Created by: 
  ${data.GitHub}
  <br>
  ${data.Contribution}

  ## Test
  ${data.Test}

  ## Questions
  If there are any more questions regarding anything related to this application, please contact me through:
  <br> 
  Email: ${data.email}
  <br>
  GitHub: ${data.GitHub}
`;
}

module.exports = generateMarkdown;