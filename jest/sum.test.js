import { 
    sum,
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
} from "./sum.js";

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3)
}); 

test("returns string, first char capitalized", () => {
    expect(capitalize("test")).toBe("Test")
});

test("reverse a string", () => {
    expect(reverseString("test")).toBe("tset")
});

describe("calculator", () => {
    test("add", () => {
        expect(calculator.add(1, 2)).toBe(3);
    });

    test("substract", () => {
        expect(calculator.substract(1, 2)).toBe(-1);
    })

    test("divide", () => {
        expect(calculator.divide(1, 2)).toBe(0.5);
    })

    test("multi", () => {
        expect(calculator.multiply(1, 2)).toBe(2);
    })

})

test("calc 2", () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.substract(1, 2)).toBe(-1);
})

test("caesar", () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

test("analyze", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    })
})©