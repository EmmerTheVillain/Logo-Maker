const fs = require('fs');
const inquirer = require('inquirer');

//main function
async function generateLogo(){
    const ColorOptions = [
        'black',
        'gray',
        'white',
        'brown',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
        'pink'
    ];
    const shapeOptions = [
        'circle', 
        'triangle', 
        'square'
    ];

const input = await inquierer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Please enter a maximum of three characters for the logo text:',
        validate: (text) => text.length <= 3,
    },
    {
        type: 'list',
        name: 'textColor',
        message: 'Please select a text color:',
        choices: ColorOptions,
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape:',
        choices: shapeOptions,
    },
    {
        type: 'list',
        name: 'logoColor',
        message: 'Please select a logo color:',
        choices: ColorOptions,
    },
    
    ]);
    
}
//call main function
generateLogo();