//dependencies
const fs = require('fs');

const inquirer = require('inquirer');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');

// function to generate logo
async function generateLogo() {
    try {
        //choice arrays
        const shapeChoices = ['Circle', 'Square', 'Triangle'];
        const colorChoices = [
            'black',
            'gray',
            'white',
            'brown',
            'red',
            'orange',
            'yellow',
            'green',
            'blue',
            'yellow',
            'orange',
            'purple',
            'pink'
    ];
//input section                
    // text input
    const { text } = await inquirer.prompt([
        {
            name: 'text',
            type: 'input',
            message: 'Enter up to 3 letters to appear on your logo:',
            validate: (input) => {
                if (input.length > 3) {
                    return 'Please only enter up to 3 letters';
                }
            return true;
          },
        },
    ]);
  
    // text color input
    const { textColor } = await inquirer.prompt([
        {
            name: 'textColor',
            type: 'list',
            message: 'Select a color for your Text:',
            choices: colorChoices,

        },
    ]);
  
    // shape type input
    const { shape } = await inquirer.prompt([
        {
            name: 'shape',
            type: 'list',
            message: 'Select a shape for your logo:',
            choices: shapeChoices,
        },
      ]);
  
      // logo color input
      const { shapeColor } = await inquirer.prompt([
        {
            type: 'list',
            name: 'shapeColor',
            message: 'Select a color for your logo:',
            choices: colorChoices,
        },
      ]);
//section to create logo
    //shape object
    let logoShape;
    switch (shape) {
    case 'Circle':
        logoShape = new Circle();
        break;
    case 'Triangle':
        logoShape = new Triangle();
        break;
    case 'Square':
        logoShape = new Square();
        break;
    default:
        throw new Error('error invalid shape');
    }


      // Sets objects parameters, then render SVG string
      logoShape.setText(text);
      logoShape.setTextColor(textColor);
      logoShape.setColor(shapeColor);

      //call render and make svgFile to write
      const svgFile = logoShape.outputRender();
  
      // write svgFile
      fs.writeFileSync('logo.svg', svgFile);
  
      console.log('New logo Generated');
    } catch (error) {
      console.error('error creating logo', error.message);
    }
  }


  
  // Call function to generate logo
  generateLogo();
  