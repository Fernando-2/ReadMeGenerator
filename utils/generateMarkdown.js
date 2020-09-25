var fs = require("fs")
const mapOfLicenseToBadge = new Map([
    ['Apache License 2.0', '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'],
  
    ['MIT', '[![License:](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'],
  
    ['Mozilla Public License 2.0', '[![License:](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)']
  
  ]);
  function generateMarkdown(data) {
   let license = data.license;
    return `# ${data.title}
   ##Description
   ${data.Description}
   ##username
   ${data.username}
   ##emailAddress
   ${data.emailAddress}
   ##repoUse
   ${data.repoUse}
   ##contribution
   ${data.contribution}
   ##installation
   ${data.installation}
   ##License
   ${mapOfLicenseToBadge.get(license)}
   ##test
   ${data.test}
   `;
}
fs.writeFile('README_practice.md',generateMarkdown,(err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

module.exports = generateMarkdown;

