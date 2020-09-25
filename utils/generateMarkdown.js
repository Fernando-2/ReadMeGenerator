var fs = require("fs")
const mapOfLicenseToBadge = new Map([
    ['Apache License 2.0', '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'],
  
    ['MIT', '[![License:](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'],
  
    ['Mozilla Public License 2.0', '[![License:](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)']
  
  ]);
  function generateMarkdown(answers) {
   let license = answers.license;
    return `
   ##Description
   ${answers.Description}
   ##username
   ${answers.username}
   ##emailAddress
   ${answers.emailAddress}
   ##repoUse
   ${answers.repoUse}
   ##contribution
   ${answers.contribution}
   ##installation
   ${answers.installation}
   ##License
   ${mapOfLicenseToBadge.get(license)}
   ##test
   ${answers.test}
   `;
}


module.exports = generateMarkdown;

