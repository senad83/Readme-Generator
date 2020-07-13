var fs = require('fs');
var template = require("./utils/generateMarkdown")
var inquirer = require("inquirer")


const questions = [

    {
        type: "input",
        name: "title",
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
        type: "input",
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
    })

    .then(function(data) {
        console.log (data);
          var filename = data.name.toLowerCase().split(' ').join('') + ".json";
        
          fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
        
            if (err) {
              return console.log(err);
            }
        
            console.log("Success!");
            
        });
    });
    // fs.writeFile("log.txt", 'hello \n new', function(err) {
        
    //     if (err) {
    //       return console.log(err);
    //     }
      
    //     console.log("Success!");
      
        
    //   });

// function writeToFile(fileName, data) {
// }

// function init() {
//     console.log (template({title: "homework", name:"Jim", age:23}))
    

//     inquirer
//     .prompt([
       
        
//         {
//         type: 'input',
//         name: 'projectTitle',
//         message: 'what is your project title',
//         },
//         {
//         type: 'input',
//         name: 'description',
//         message: 'short description',
//         },
//         {
//         type: 'input',
//         name: 'teble of content',
//         message: 'table of content',
//         },
//         {
//             type: 'input',
//             name: 'installation',
//             message: 'how did you install',
//         },
//         {
//             type: 'input',
//             name: 'usage',
//             message: 'how whats the usage',
//         },
//         {
//             type: 'list',
//             name: 'license',
//             message: 'Which license?',
//             choices: ['MIT', 'GLP', 'Unlicensed'],
//         },
//         {   type: 'input',
//             name: 'contributing',
//             message: 'who were contributors',
//         },
//         {
//             type: 'input',
//             name: 'tests',
//             message: 'run test',
//         },
//         {
//             type: 'input',
//             name: 'questions',
//             message: 'url',
//         },
//         {
//             type: 'input',
//             name: 'questions',
//             message: 'email',
//         },
        
        
//     ])
    // .then(answers => {
    //     console.info('Answer:', answers);

    //     console.log (template(answers));
    //     fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

    //         if (err) {
    //           return console.log(err);
    //         }
        
    //         console.log("Success!");
        
    //       });
    // });
//}


//init();
