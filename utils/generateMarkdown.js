// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "") {
    const licenseName = license.replace(" ", "_");
    const badgeURL = `[![${license} badge](https://img.shields.io/badge/License-${licenseName}-lightblue)](${renderLicenseLink(
      license
    )})`;
    return badgeURL;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "GNU AGPLv3") {
    return "https://spdx.org/licenses/AGPL-3.0-or-later.html";
  } else if (license === "GNU GPLv3") {
    return "https://www.gnu.org/licenses/gpl-3.0-standalone.html";
  } else if (license === "GNU LGPLv3") {
    return "https://www.gnu.org/licenses/lgpl-3.0-standalone.html";
  } else if (license === "Mozilla Public License 2.0") {
    return "https://opensource.org/license/mpl-2-0/";
  } else if (license === "Apache License 2.0") {
    return "https://opensource.org/license/apache-2-0/";
  } else if (license === "MIT License") {
    return "https://spdx.org/licenses/MIT.html";
  } else if (license === "Boost Software License 1.0") {
    return "https://opensource.org/license/bsl-1-0/";
  } else if (license === "") {
    return "";
  } else {
    throw new Error("Unrecognized license. Please choose one from the list.");
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "") {
    return (
      "## License\n\n" +
      `The license for this application is ${license}. For more information about this license, click the badge or go to this link: ${renderLicenseLink(
        license
      )}`
    );
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let contributionSection = "";
  if (data.contribution !== "") {
    contributionSection = `## Contribution Guidelines\n\n ${data.contribution}`;
  }
  return (
    `# ${data.title}\n\n` +
    renderLicenseBadge(data.license) +
    `

  ## Description\n\n${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation\n\n${data.installation}
  
  ## Usage\n\n${data.usage}\n\n` +
    renderLicenseSection(data.license) +
    "\n\n---\n\n" +
    contributionSection +
    `\n\n## Tests\n\n${data.tests}`
  );
}

module.exports = generateMarkdown;
