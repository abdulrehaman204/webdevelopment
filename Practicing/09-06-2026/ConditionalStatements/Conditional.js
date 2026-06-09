// conditional statements
// if 
var a = 15;
if(a %2 == 0){
    console.log("even")
}
if(a %2 !== 0){
    console.log("odd")
}

// if else
var age=20;
if(age>=18){
    console.log("eligible for vote")
}
else{
    console.log("Not eligible")
}

// else-if
var a=0;
if(a>0){
    console.log("Positive")
}
else if(a<0){
    console.log("Negative")
}
else{
    console.log("Zero")
}

// switch
function points(marks) {
  switch (true) {
    case marks > 90 && marks <= 100:
      return "Grade A";
    case marks > 80:
      return "Grade B";
    case marks > 70:
      return "Grade C";
    case marks > 60:
      return "Grade D";
    case marks > 50:
      return "Grade E";
    default:
      return "Fail";
  }
}

console.log(points(85)); 

// ternary
var age = 25;
var result = (age>=18) ? "You are eligible for vote" : "You are not eligible for vote"
console.log(result)

// nested else if
var weather = "sunny"
var temp = 25;
if (weather === "sunny") {
if(temp>=30){
    console.log("Its to hot")
} else if(temp>=25){
    console.log("It's a warm day")
}
else{
    console.log("It's a bit cool today.")
}
}
else if(weather=="rainy"){
console.log("Don't forget your umbrella!");
} else {
    console.log("Check the weather forecast!");
}


// logical coding tasks using with condtional statements

// Write a program to check whether a number is positive, negative, or zero
var num = -5;

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}


// A person can vote if age is 18 or above.
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible");
}

// ATM with drawal validation
const balance = 5000;
const amount = 1300;
const isActive = true;
const pinCorrect = true;

if (
  isActive &&
  pinCorrect &&
  amount <= balance &&
  amount % 100 === 0
) {
  console.log("Withdrawal Successful");
} else {
  console.log("Transaction Failed");
}

// electricity bill
const units = 250;
let bill;

if (units <= 100) {
  bill = units * 5;
} else if (units <= 200) {
  bill = 100 * 5 + (units - 100) * 7;
} else {
  bill =
    100 * 5 +
    100 * 7 +
    (units - 200) * 10;
}

console.log(bill);

// Determine whether three sides can form a triangle.
var a = 5;
var b = 6;
var c = 7;
if (
  a + b > c &&
  a + c > b &&
  b + c > a
) {
  console.log("Valid Triangle");
} else {
  console.log("Invalid Triangle");
}

// Loan Eligibility System
// Task
// Eligible if:
// Age between 21 and 60
// Salary ≥ 30000
// Credit score ≥ 700

var age = 30;
const salary = 45000;
const creditScore = 750;

if (
  age >= 21 &&
  age <= 60 &&
  salary >= 30000 &&
  creditScore >= 700
) {
  console.log("Loan Approved");
} else {
  console.log("Loan Rejected");
}

// check leap year
const year = 1900;
if (
  (year % 4 === 0 &&
    year % 100 !== 0) ||
  year % 400 === 0
) {
  console.log("Leap Year");
} else {
  console.log("Not Leap Year");
}

// fizz buzz without else if
var num = 15;
let result1 = "";
if (num % 3 === 0) {
  result += "Fizz";
}
if (num % 5 === 0) {
  result += "Buzz";
}
console.log(result1 || num);


// username validation
const username = "User123";

if (
  username.length >= 5 &&
  username.length <= 15 &&
  /^[A-Za-z][A-Za-z0-9]*$/.test(username)
) {
  console.log("Valid Username");
} else {
  console.log("Invalid Username");
}

