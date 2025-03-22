import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from './main.js'

test('works', () => {
    expect(capitalize("ciao")).toBe("Ciao");
})

test('its reversed', () => {
    expect(reverseString("ci")).toBe("ic")
})

test('calculated', () => {
    expect(calculator.add(3,6)).toBe(9)
});

test('calculate subtraction', () => {
    expect(calculator.subtract(6,3)).toBe(3);
})

test('calculate multiplication', () => {
    expect(calculator.multiply(6,3)).toBe(18);
})

test('calculate division', () => {
    expect(calculator.divide(6,3)).toBe(2);
})

test('ceasar cipher', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})
test('analyzeArray', () => {
    expect(analyzeArray()).toBe()
})