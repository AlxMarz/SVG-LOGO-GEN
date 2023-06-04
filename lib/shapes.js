class Shape {
    constructor(){
        this.color = '';
    }

    setColo(color) {
        this.color = color;
    }
}

class Triangle extends shape{
    render(){
        return `<polygon points="150,50 50,150 250,150" style="fill:${this.color}"/>`;
    }
}
class Circle extends shape{
    render(){
        return `<circle cx="150" cy="100" r="75" style="fill:${this.color}"/>`;
    }
}
class Square extends shape{
    render(){
        return `<rect x="50" y="50" width="200" height="200" style="fill:${this.color}"/>`;
    }
}


exports.modules = {
    Shape,
    Triangle,
    Circle,
    Square
}