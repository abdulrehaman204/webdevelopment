// operators

// Arithmetic Operators
const sum1 = 5 + 3; // Addition
const diff = 10 - 2; // Subtraction
const p = 4 * 2; // Multiplication
const q = 8 / 2; // Division
console.log(sum1, diff, p, q);


// Assignment Operators
var a = 10;
console.log(a += 5)
console.log(a -= 2)
console.log(a *= 2)
console.log(a /= 2)
console.log(a %= 2)


// Comparison Operators
console.log(5 == '5');   // true
console.log(5 === '5');  // false
console.log(5 != '5');   // false
console.log(5 !== '5');  // true
console.log(5 > 3);      // true
console.log(5 <= 5);     // true


// Logical Operators
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false


// Ternary Operator
let A = 18;
let results = (A>=18) ? "Major" : "Minor";
console.log(results)


// Bitwise Operators
console.log(5 & 1); // 1
console.log(5 | 1); // 5
console.log(5 ^ 1); // 4
console.log(~5);    // -6


// logical coding tasks using all operators

// Calculate the area of a rectangle.
const length = 10;
const width = 5;
const area = length * width;
console.log(area);

// Check if a number is even or odd.
var num = 17;
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// Print numbers from 1 to 5 using ++.
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}

// Determine whether a user can vote.
var age = 20;
console.log(age >= 18);

// Allow login only if username and password are correct.
var username = "admin"
var password = 12345
if(username === "admin" && password === 12345){
    console.log("Login sucessfull")
}

// Grant access if user is admin or moderator.
const role = "moderator";
if (role === "admin" || role === "moderator") {
  console.log("Access Granted");
}

// Check if a user is not active
var isActive = false;
if (!isActive) {
  console.log("User is inactive");
}

// Check if a user is eligible for a discount.
var age = 65;
var isStudent = false;
var isActive = true;

const eligible =
  (age > 60 || isStudent) && isActive;
console.log(eligible);




