// Challenge 1: Find duplicates in a list
// Approach: Loop through the array and use an object to count occurrences.
// If an item appears more than once, add it to the duplicates array.

const numbers = [1, 2, 3, 4, 2, 5, 3, 6, 1];
const count = {};
const duplicates = [];

for (let num of numbers) {
    count[num] = (count[num] || 0) + 1;

    if (count[num] === 2) {
        duplicates.push(num);
    }
}

console.log("Duplicates:", duplicates);
// Challenge 2: Count how many fellows scored above a given mark
// Approach: Loop through the fellows array and increase the counter
// whenever a fellow's score is greater than the target score.

const fellows = [
    { name: "Alice", score: 75 },
    { name: "Bob", score: 45 },
    { name: "Charlie", score: 88 },
    { name: "David", score: 60 }
];

const targetScore = 60;
let countAbove = 0;

for (let fellow of fellows) {
    if (fellow.score > targetScore) {
        countAbove++;
    }
}

console.log(`Number of fellows scoring above ${targetScore}:`, countAbove);
// Challenge 3: Group items by category
// Approach: Create an object where each category becomes a key.
// Loop through the items and place each item into its category group.

const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Phone", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Jeans", category: "Clothing" },
    { name: "Book", category: "Education" }
];

const grouped = {};

for (let product of products) {
    if (!grouped[product.category]) {
        grouped[product.category] = [];
    }

    grouped[product.category].push(product.name);
}

console.log("Grouped Products:", grouped);
// Challenge 4: Find the highest-scoring fellow
// Approach: Start with the first fellow as the highest scorer.
// Compare each fellow's score and update the highest scorer when needed.

const team = [
    { name: "Alice", score: 75 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 88 },
    { name: "David", score: 67 }
];

let highest = team[0];

for (let fellow of team) {
    if (fellow.score > highest.score) {
        highest = fellow;
    }
}

console.log("Highest Scorer:", highest);"Add data manipulation challenges with approach comments