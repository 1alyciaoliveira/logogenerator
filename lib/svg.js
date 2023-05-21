class SVG {
    constructor() {
        this.text = '';
        this.shape = '';
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">${this.shape}${this.text}`
    }   

    setText(text, textColor) {
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }

    setShape(shape) {
        this.shape = shape.render();
    }

}

module.exports = SVG;