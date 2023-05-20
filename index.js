const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please, type the letters you would like to see in your logo. <up to 3 letters>',
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'What color would you like to use to your letters? <type a color keyword or a hexadecimal number>',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to use?',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'What color would you like to use as background color? <type a color keyword or a hexadecimal number>',
    }
];

// function writeToFile (fileName, data) {
//     fs.writeFile(fileName, data, (err) =>
//         err ? console.log(err) : console.log('Generated logo.svg')
//     );
// };

// function init() {
//     inquirer.prompt(questions).then((responses) => {
//         writeToFile("logo.svg", responses);
// });
// }

// init();