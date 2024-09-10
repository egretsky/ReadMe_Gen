// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require ('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Add Title of Project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Add Description of Project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select License',
        choices: ['MIT','Apache 2.0','ISC', 'None']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Add Installation Instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Add Usage Information'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Add Contribution Guidelines'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Add Test Instructions'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Add Questions'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Add Link to GitHub Username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Add Your Email Address'
    }
];

// TODO: Create a function to write README file
// TODO: Create a function to initialize app
function init() {
    console.error('Initializing the app...');

    inquirer
    .prompt(questions).then((answers) => {
        console.log(answers);
        console.log('Creating the README.md file');
    
    const markDown = generateMarkdown(answers);
    console.log(markDown);

    fs.writeFile('README.md', generateMarkdown(answers), (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('README file created successfully!');
    });
    })

    .catch((error) =>{
        if (error.isTtyError) {
            console.log('Prompt could not be rendered');
        } else {
            console.log('Something went wrong');
        }
    });
}

// Function call to initialize app
init();
