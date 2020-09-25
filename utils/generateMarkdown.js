function generateMarkdown(data) {
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
   ${data.License}
   ##test
   ${data.test}
   `;
}

module.exports = generateMarkdown;

