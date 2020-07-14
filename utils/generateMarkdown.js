function generateMarkdown(data) {
  return `
# ${data.projectTitle}
 
## description
 ${data.description}
 
 ## table of content
 * [Installation](#installation)
 
 * [description](#description)
 
 * [usage](#usage)
 
 * [lisence](#lisence)
 
 * [contributing](#contributing)
 
 * [tests](#tests)
 
 ## installation
 ${data.installation}
 
 ## usage
 ${data.usage}
 
 ## lisence
 ${data.lisence}
 
 ## contributing
 ${data.contributing}
 
 ## tests
 ${data.tests}
 
 ## email
 ${data.email}

 ## URL
 ${data.URL}
 
`;
}

module.exports = generateMarkdown;

