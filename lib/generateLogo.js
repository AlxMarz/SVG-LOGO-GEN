const square = require('../lib/square');
const triangle = require('../lib/triangle');
const circle = require('../lib/circle');

function generateLogo (data){
    let shape = undefined
    if (data.shape === 'triangle'){
        shape = new triangle(data.shape_color, data.text, data.text_color)
    } else if (data.shape == 'square'){
        shape = new square(data.shape_color, data.text, data.text_color)
    } else {
        shape = new circle(data.shape_color, data.text, data.text_color)
    }
    return shape.render();
};

module.exports= generateLogo;