const { Circle, Triangle, Square } = require('./shapes');


describe('Triangle', () => { 
    it('should confirm that the shape and color chosen are being applied', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150,20 15,180 275,180" fill="blue"/>');
    })
})

describe('Circle', () => { 
    it('should confirm that the shape and color chosen are being applied', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');
    })
})

describe('Square', () => { 
    it('should confirm that the shape and color chosen are being applied', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill="blue"/>');
    })
})

