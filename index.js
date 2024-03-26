const fs = require('fs'); // calling the file system
const inquirer = require('inquirer'); //
const path = require('path'); //
const GenerateRM = require('./readMe'); //
const { title } = require('process');

/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/

const Questions =[ {
    type:'input',
    name:'title',
    message:"What is the title of your project?"
},
{
    type:'input',
    name:'description',
    message:'What is the description of your project?'
},
{
    type:'input',
    name:'installation',
    message:'What are the installation instructions for your project?'

},
{
    type:'input',
    name:'usage',
    message:'What is the usage information for your project?'
},
{
    type:'input',
    name:'guidelines',
    message:'Who contributed with your project?'
},
{
    type:'input',
    name:'test',
    message:'What are the test instructions for your project?'
},
{
    type:'list',
    name:'license',
    message:'What license type would you like to include for your project?',
    choices: ['MIT', 'Apache License 2.0','Mozilla Public License 2.0']
},
{
    type:'input',
    name:'username',
    message:'what is your GitHub username?'
},
{
    type:'input',
    name:'name',
    message:'What is your name?'
},
{
    type:'input',
    name:'email',
    message:'what is your email?'
}

];

const writingFile = function(fileName,data){
return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

const initiateFile = function(){
    inquirer.prompt(Questions).then((answers)=>{
        writingFile("./projectInfo.md",GenerateRM({...answers}))
    }).catch((error)=>{
        if(error){
            console.log('an error has ocurred:',error);
        }
    })
}
initiateFile();