// operators

// Arthamatic operators]
var a = 15;
var b = 4;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);

// Increment and Decrement Operators
var x = 5;

console.log(x++); 
console.log(x);
console.log(++x); 

// Assignment Operators
let num = 10;

num += 5;
console.log(num);
num -= 3;
console.log(num);
num *= 2;
console.log(num);

// Comparison Operators
var a = 10;
var b = "10";

console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);

// logical operator
var age = 20;
let citizen = true;
if (age >= 18 && citizen) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible");
}

// ternary operator
let num1 = 7;
let result = (num1 % 2 === 0) ? "Even" : "Odd";
console.log(result);

// conditional statements
// if
var age = 20;
if (age >= 18) {
    console.log("Eligible to vote");
}

// if-else
let num2 = 4;

if (num2 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// if-else if-else
let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// switch
let day = 2;

switch(day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}


// looping statements
// for loop
for(let i = 1; i <= 5; i++) {
    console.log(i);
}

// while loop
let i=6
while(i<=10){
    console.log(i)
    i++;
}

// do while
let j=11;
do{
  console.log(j)
  j++;
}while(j<=15)

// for of loop
let colors = ["Red", "Blue", "Green"];

for(let color of colors) {
    console.log(color);
}

// for in loop
let student = {
    name: "Ravi",
    age: 22
};

for(let key in student) {
    console.log(key, student[key]);
}


// practice above all topics with coding questions
// Check Even or Odd
var number = 12;
if(number % 2 == 0){
    console.log("Even number")
}
else{
    console.log("Odd number")
}

// Swap Two Numbers Without Third Variable
var a = 10;
var b = 20;
a = a + b
b = a - b
a = a - b
console.log(a,b)

// Find Largest of Three Numbers
var a = 15;
var b = 25;
var c =40;
if(a>=b && a>=c){
    console.log("a is largest")
}else if(b>=a && b>=c){
     console.log("b is largest")
}else{
    console.log("c is largest")
}

// Check Leap Year
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}

// simple calculator using switch
var a = 10;
var b = 5;
let operator = "*";

switch(operator) {
    case "+":
        console.log(a + b);
        break;

    case "-":
        console.log(a - b);
        break;

    case "*":
        console.log(a * b);
        break;

    case "/":
        console.log(a / b);
        break;

    default:
        console.log("Invalid Operator");
}

// Login Validation
let username = "Abdul"
let password = 12345
if(username === "Abdul" && password === 12345){
    console.log("Login successfull")
}else{
    console.log("You have entered wrong password or username")
}

// print even numbers 1 t0 20
for(let i =1;i<=20;i++){
    if(i%2===0){
        console.log(i)
    }
}

// Find Sum of First 10 Numbers
let sum=0;
for(let i=1;i<=10;i++){
    sum +=i
}

console.log(sum)

// Reverse a string
let str = "javascript";
let reverse = "";

for(let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}

console.log(reverse);

// multiplication table
let n = 5
for(let i=1;i<=10;i++){
    console.log(n+"x"+i+"="+n*i)
}

// factorial of a number
var number = 5;
let fact =1;
for(let i =1;i<=number;i++){
    fact*=i
}
console.log("factorial : ",fact)

// check prime number
let num3 = 13;
let isPrime = true;

for(let i = 2; i < num3; i++) {

    if(num3 % i === 0) {
        isPrime = false;
        break;
    }

}

if(isPrime && num3 > 1) {
    console.log("Prime Number");
} else {
    console.log("Not Prime");
}

// Count Vowels in String
let count =0;
let string = "javascript"
for(let ch of string){
    if("aeiou".includes(ch)){
        count++
    }
}
console.log("count of vowels : ",count)

// fibonace series
let n1 = 10;
var a = 0;
var b = 1;

console.log(a);
console.log(b);

for(let i = 3; i <= n1; i++) {

    let c = a + b;
    console.log(c);

    a = b;
    b = c;
}


// functions 
// A function is a reusable block of code designed to perform a specific task.

// function declaration
function abdul(){
    console.log("Hello Abdul")
}
abdul()

// Function with Parameters
function add(a, b) {
    console.log(a + b);
}

add(10, 20);

// Function with Return Value
function sub(a,b){
    return a+b
}
console.log(sub(20,20))

// Function Expression
const square = function(num) {
    return num * num;
};

console.log(square(5));

// Arrow Function
const greet2 = () => {
    console.log("Welcome");
};

greet2();


// Arrow Function with Parameters
const Ab = (a) =>{
    console.log("Hello ",a)
}
Ab("abdul")

// Default Parameters
const AB = (name="Rehaman") =>{
    console.log("Hello Mr."+name)
}
AB()
AB("Ravi")

// Anonymous Function
setTimeout(function() {
    console.log("Executed");
}, 1000);

// Callback Function
function hello(name,Callback){
    console.log("Welcome ",name)
    done()
}
function done(){
     console.log("Completed")
}

hello("Abdul",done)

// Recursive Function
function factorial(n){
    if(n===1){
        return 1;
    }
  return  n * factorial(n-1)
}

console.log(factorial(5));

// higher order function
function calculator(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

console.log(calculator(5, 3, add));

// iife 
(function() {
    console.log("IIFE Executed");
})();

// Rest Parameters
function s(...numbers) {

    let total = 0;

    for(let num of numbers) {
        total += num;
    }

    return total;
}

console.log(s(1, 2, 3, 4));

// nested functions
function outer() {

    function inner() {
        console.log("Inner Function");
    }

    inner();
}

outer();

// palindrame check
function isPalindrome(str) {

    let reversed = str.split("").reverse().join("");

    return str === reversed;
}

console.log(isPalindrome("madam"));

// closures
function outer() {

    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

const counter = outer();

counter();
counter();


