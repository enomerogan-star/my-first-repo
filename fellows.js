// Array of fellow profiles (objects)
let fellows = [
  {
    name: "Alice",
    role: "Frontend Developer",
    points: 85
  },
  {
    name: "Bob",
    role: "Backend Developer",
    points: 92
  },
  {
    name: "Carol",
    role: "UI/UX Designer",
    points: 78
  }
];

// Add a new fellow using .push()
fellows.push({
  name: "David",
  role: "Full Stack Developer",
  points: 88
});

// Loop through the array and print summaries
console.log("=== Fellow Profiles ===");

for (let fellow of fellows) {
  console.log(
    `Name: ${fellow.name} | Role: ${fellow.role} | Points: ${fellow.points}`
  );
}

// Example of .map()
let names = fellows.map(fellow => fellow.name);
console.log("\nFellow Names:", names);

// Example of .filter()
let highPerformers = fellows.filter(fellow => fellow.points >= 85);
console.log("\nHigh Performers:");
highPerformers.forEach(fellow => {
  console.log(`${fellow.name} - ${fellow.points} points`);
});