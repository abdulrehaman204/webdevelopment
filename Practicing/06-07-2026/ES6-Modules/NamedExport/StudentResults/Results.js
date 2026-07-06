import { calculateAverage, findTopper } from "./Student.js";

const averages = calculateAverage();

averages.forEach(student => {
    console.log(`${student.name} Average : ${student.average}`);
});

const topper = findTopper();

console.log("\nTopper");
console.log(`${topper.name} - ${topper.average}`);