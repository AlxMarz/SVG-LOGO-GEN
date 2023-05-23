const shapes = require('./lib/shapes')
const inquirer = require('inquirer');



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
        message: "text-color: please input color keyword"
    },
    {
        type:"input",
        name: "shape",
        message: "Shape-color: please input shape color keyword"
    },
    {
        type:"list",
        name: "pixel-image",
        message: "Chose your shape",
        choices: ("Circle","Square","Triangle")
    },

]