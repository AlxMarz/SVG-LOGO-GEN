var inquirer = require('inquirer');
const fs = require('fs');
// const generateLogo = require('./lib/generateLogo')
const {Shape, Triangle, Circle, Square} = require ('./lib/shapes')




//QUESTIONS TO ASK USER
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter (3) characters please",

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

inquirer.prompt(questions).then((answers) => {
    const {text, textColor, shape, shapeColor} = answers
    const shapeObj = new Shape()
    let svgElement = ''

    shapeObj.setColor
    
    switch(shape){
        case 'Triangle':
            const Triangle = new Triangle();
            Triangle.setColor(shapeColor);
            svgElement = triangle.render()
            break;
        case 'Circle':
            const Circle = new Circle()
            Circle.setColor(shapeColor)
            svgElement = circle.render()
            break
        case 'Square':
            const Square = new Square()
            Square.setColor(shapeColor)
            svgElement = Square.render
            break
    }

    let x = 150, y=120
    if (shape === 'Triangle'){
        y = 135
    } else if (shape === 'Square'){
        y = 145
    }

    const finalSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${svgElement}
        <text x="${x}" y="${y}" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>`

      fs.writeFileSync('logo.svg', finalSvg)
      console.log('GeneratedLogo.svg');



})


















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