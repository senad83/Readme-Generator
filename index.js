var fs = require('fs');
var template = require("./utils/generateMarkdown")
var inquirer = require("inquirer")


const questions = [

    {
        type: "input",
        name: "projectTitle",
        message: "What is project name?",
    },
    {   
        type: "input",
        name: "description",
        message: "Describe your project"
    },

    {   
        type: "input",
        name: "installation",
        message: "What command runs dependencies?",
        default: "npm i"
    },
    {   
        type: "input",
        name: "usage",
        message: "What is usage of the project"
    },
    {   
        type: "list",
        name: "license",
        message: "What licenses are used in project?",
        choices: ["MIT", "APACHE", "None"]
    },
    {   
        type: "input",
        name: "contributing",
        message: "What is way for user to contribute to the project"
    },
    {   
        type: "input",
        name: "tests",
        message: "What command runs test?",
        default: "npm test"
    },
    {   
        type: "input",
        name: "URL to picture",
        message: "What is URL to profile picture?"
    },
    {   
        type: "input",
        name: "email",
        message: "What is email?"
    },
    ]

    inquirer.prompt(questions).then(response => {
        console.log (response)

          var filename = "readme.md"
        
          fs.writeFile(filename, template(response), function(err) {
        
            if (err) {
              return console.log(err);
            }
            console.log (response);
            console.log("Success!");
            
        });
    });
    



