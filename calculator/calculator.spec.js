const { add } = require('./calculator.js');

// test away!


describe('the add function', () => {
    
    it('should add two values', () => {
        const result = add(2,2)

        // assertion
        expect(result).toBe(4);
        expect(add(-1,4)).toBe(3);
        expect(add(0,6)).toBe(6);
    });

    it('should return 0 when no arguements are provided', () => {
        expect(add()).toBe(0);
    })

    it('should return the passed in value when only one arguement is provided', () => {
        expect(add(5)).toBe(5);
        expect(add(1)).toBe(1);
    })

    it('should add any number of arguements', () => {
        expect(add(1, 2, 3)).toBe(6);
        expect(add(1, 1, 10, 2, 4, 1, 0)).toBe(19);
    })

    it('should acceept an array as an arguement', () => {
        expect(add([1,2,3,4])).toBe(10);
    })
    
});