export function sum(a, b) {
    return a + b;
}

export function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

export function reverseString(str) {
    return str.split('').reverse().join('');
}

export const calculator = {
    add(num1, num2) {
        return num1 + num2;
    },
    substract(num1, num2) {
        return num1 - num2;
    },
    divide(num1, num2) {
        return num1 / num2;
    },
    multiply(num1, num2) {
        return num1 * num2;
    }
}

export function caesarCipher(str, key) {
    return str
    .split('')
    .map(char => {
      const code = char.charCodeAt(0);

      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + key) % 26 + 26) % 26 + 97);
      }
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + key) % 26 + 26) % 26 + 65);
      }
      return char;
    })
    .join('');
}

export function analyzeArray(arr) {
    return {
        average: arr.reduce((sum, cur) => sum + cur, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    }
}