class Shape {
    constructor() {
        this.color = '';
    }
    setColor(shapeColor) {
        this.color = shapeColor;
    }
}

class Triangle extends Shape {
    render () {
        return `<polygon points="150,20 15,180 275,180" fill="${this.color}"/>`;
    }
}

class Circle extends Shape {
    render () {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    }
}

class Square extends Shape {
    render () {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.color}"/>`;
    }
}

module.exports = {Circle, Triangle, Square};