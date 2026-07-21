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


// logical tasks 

// Find Whether Exactly One Number Is Positive
function isExactlyOnePositive(a, b){
    return (a>0 && b<0) || (a<0 && b>0)
}

console.log(isExactlyOnePositive(5, -3));
console.log(isExactlyOnePositive(5,5))
console.log(isExactlyOnePositive(-7,-8))


// Check Leap Year Using Operators
function isLeapYear(year){
    return (year%400===0) || (year%4===0 && year%100!==0)
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2023));


// Use the Nullish Coalescing Operator (??)
function getName(nickname) {
    return nickname ?? "Guest";
}

console.log(getName(undefined)); 
console.log(getName(""));        


// Swap Two Numbers Without a Temporary Variable
var a = 10;
var b = 20;

a = a + b;
b = a - b;
a = a - b;

console.log(a, b); 


// Determine If a Number Is Even Using a Bitwise Operator
function isEven(num) {
    return (num & 1) === 0;
}

console.log(isEven(10)); 
console.log(isEven(7));  

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

