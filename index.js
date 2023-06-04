var inquirer = require('inquirer');
const fs = require('fs');
// const generateLogo = require('./lib/generateLogo')
const {Shape, Triangle, Circle, Square} =require('./lib/shapes')




//QUESTIONS TO ASK USER
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter (3) characters please",
        validate: (input) => input.length < 3,
    },
    {
        type: "input",
        name: "textColor",
        message: "text_color: please input color keyword"
    },
    {
        type:"input",
        name: "shape",
        message: "ShapeColor: please input shape color keyword"
    },
    {
        type:"list",
        name: "shape",
        message: "Chose your shape",
        choices: ["Circle","Square","Triangle"]
    },
];

inquirer.Prompt(questions).then((answers)) => {
    const {text, textColor, shape, shapeColor} = answers;
    const shapeObj = new shape()
    let svgElement = '';

    shapeObj.setColor(shapeColor);
    
    switch(shape){
        case 'Triangle':
            const Triangle = new Triangle();
            Triangle.setColor(shapeColor);
    }
}


















// //TAKES IN CONTENTS OF FILENAME, DATA TO WRITE TO FILE
// function writeToFile(fileName, data){
//     var content = generateLogo(data);
//     fs.writeFile(fileName, content, function(error){
//         if (error){
//             return console.log(error);
//         }
//         console.log('GENERATED logo.svg');
//     });

// };

// //FUNCTION TO PROMPT THE USER
//     function init(){
//         inquirer.prompt(questions).then(function (data){
//             var fileName = 'logo.svg';
//             writeToFile(fileName, data);
//         })
//     }

//     //CALL TO INIT THE APP
//     init();