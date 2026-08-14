// Function 1: Check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false


// Function 2: Find the largest of three numbers
function findLargest(a, b, c) {
    return Math.max(a, b, c);
}

console.log(findLargest(10, 25, 15)); // 25


// Function 3: Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("JavaScript")); // tpircSavaJ