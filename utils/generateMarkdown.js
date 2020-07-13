function generateMarkdown(data) {
  return `
# ${data.projectTitle}
 
## description
 ${data.description}
 
 ## table of content
 ${data.tableofcontent}
 
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
 
 ## questions
 ${data.questions}
 
`;
}

module.exports = generateMarkdown;


// change markdown file return between tildas
// create markdownt file
// copy and paste from console
// {
//   projectTitle: 'kjj',
//   desctiption: 'lkj',
//   nstallation: ';jj',
//   usage: 'kljjk',
//   license: 'MIT'
// }