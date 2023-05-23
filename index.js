const shapes = require('./lib/shapes')
const inquirer = require('inquirer');

class Svg{
    constructor(){
        this.textElement = ''
        this.ShapeElement = ''
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg`
    }
}



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
];