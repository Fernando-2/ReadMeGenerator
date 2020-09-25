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