const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const SVG = require ('./svg');
const { Circle, Triangle, Square } = require('./shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please, type the letters you would like to see in your logo. <up to 3 letters>',
        //how to validate 3 letters only?
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like to use to your letters? <type a color keyword or a hexadecimal number>',
    },
    {
        type: 'list',
        name: 'shapeType',
        message: 'What shape would you like to use?',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like to use as background color? <type a color keyword or a hexadecimal number>',
    }
];

class CLI {
    run() {
        return inquirer.prompt(questions).then(({ text, textColor, shapeType, shapeColor }) => {
            let shape;
            switch (shapeType) {
                case 'circle':
                shape = new Circle();
                break;

                case 'square':
                    shape = new Square();
                    break;

                case 'triangle':
                    shape = new Triangle();
                    break;
            }
            shape.setColor(shapeColor);

            const svg = new SVG();
            svg.setText(text, textColor);
            svg.setShape(shape);
            return writeFile('logo.svg', svg.render());
        })
        .then((err) => {
            err ? console.log(err) : console.log('Generated logo.svg');
        });
    }
}


module.exports = CLI;