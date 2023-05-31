var inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./lib/generateLogo')




//QUESTIONS TO ASK USER
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter (3) characters please"
    },
    {
        type: "input",
        name: "text-color",
        message: "text_color: please input color keyword"
    },
    {
        type:"input",
        name: "shape",
        message: "Shape_color: please input shape color keyword"
    },
    {
        type:"list",
        name: "pixel-image",
        message: "Chose your shape",
        choices: ["Circle","Square","Triangle"]
    },
];

//TAKES IN CONTENTS OF FILENAME, DATA TO WRITE TO FILE
function writeToFile(fileName, data){
    var content = generateLogo(data);
    fs.writeFile(fileName, content, function(error){
        if (error){
            return console.log(error);
        }
        console.log('GENERATED logo.svg');
    });

};

//FUNCTION TO PROMPT THE USER
    function init(){
        inquirer.prompt(questions).then(function (data){
            var fileName = 'logo.svg';
            writeToFile(fileName, data);
        })
    }

    //CALL TO INIT THE APP
    init();