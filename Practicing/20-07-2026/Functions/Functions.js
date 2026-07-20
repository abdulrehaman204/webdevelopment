// functions

// function declaration
function greet(name){
    console.log("Hello " + name)
}
greet("Abdul")

// default parameter
function greet1(name="Abdul"){
    console.log("Hello Mr."+name)
}
greet1()
greet1("AbdulRehaman")

// return statements
function add(a,b){
    return a+b;
}
console.log(add(10,20))


// Types of functions 
// named function
function greet() {
  return "Hello!";
}
console.log(greet());

// Anonymous function
const greet2 = function(){
    console.log("Hello NYB")
}
greet2()

// function expression
var add2 = function(a, b) {
  return a + b;
};
console.log(add2(2, 3));

// Arrow function
const hello = (a,b)=>{
    return a*b
}
console.log(hello(10,20))

// Immediately Invoked Function Expression (IIFE)
// (function () {
//     console.log("This runs immediately!");
// })();

// callback function
function add3(n,callback){
    return callback(n)
}
var double = (n)=> n*2;
console.log(add3(5,double))

// constructor function
function Person(name,age){
    this.name = name;
    this.age = age ;
}
let user = new Person("Abdul",23)
console.log(user.name)

// Async Function
async function fetch(){
    return "data fetched"
}
fetch().then(console.log)

// Generator Function
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numbers();
console.log(gen.next().value); 
console.log(gen.next().value);

// recursive function
function factorial(n){
    if(n==0){
        return 1;
    }
    return n*factorial(n-1)
}
console.log(factorial(5))

// higher order function
function multiplyBy(factor){
    return function(num){
        return factor * num;
    }
}

const double2 = multiplyBy(2);
console.log(double2(5));

// nested function
function outerFun(a) {
    function innerFun(b) {
        return a + b;
    }
    return innerFun;
}

const addTen = outerFun(10);
console.log(addTen(5));

// pure function
function pureAdd(a, b) {
    return a + b;
}

console.log(pureAdd(2, 3));

// rest parameter
function sum(...nums) {
  return nums.reduce((a, b) =>  a + b, 0);
}
console.log(sum(1, 2, 3, 4));


// logical tasks using functions 

// Function Composition (Higher-Order Functions)
function compose(...fns){
    return function(value){
        return fns.reduceRight((acc,fn)=>fn(acc),value)
    }
}
var add2 = x => x + 2;
var square = x => x * x;
var double = x => x * 2;

const fn = compose(square, add2, double);
console.log(fn(3))


// Password Strength Checker
function checkPasswordStrength(password) {
    if (password.length < 8) {
        return "Password must be at least 8 characters long";
    }

    if (!password.match(/[0-9]/)) {
        return "Password must contain at least one number";
    }

    if (!password.match(/[A-Z]/)) {
        return "Password must contain at least one uppercase letter";
    }
    
    return "Password is strong";
}


console.log(checkPasswordStrength("abc"));        
console.log(checkPasswordStrength("abcdefgh"));  
console.log(checkPasswordStrength("Abcdef1"));  


// Event Counter (Closure)
function createClickCounter(){
    let count = 0;
    return function(){
        count++;
        console.log(`Button clicked ${count} time(s).`)
        document.getElementById("result").textContent ="Button clicked " + count + " times";

    }
    return count;
}

const clickCounter = createClickCounter();

document.getElementById("btn").addEventListener("click",clickCounter)


// Theme Switcher
const button = document.getElementById("themeBtn");
let darkMode = false;

button.addEventListener("click", function () {
    darkMode = !darkMode;
    if (darkMode) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        button.textContent = "Switch to Light Mode";
    } 
    else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        button.textContent = "Switch to Dark Mode";
    }
});


// Promise-Based Delay
function delay(fm){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        },fm);
    })
}
console.log("start")
delay(3000)
.then(()=>{console.log("Executed after 3 seconds")})
console.log("end")

// reverse a string
function reverseString(str){
    return str.split('').reverse().join('')
}
const reversed = reverseString('frontend'); 
console.log(reversed)

// Find the Largest Number in an Array
function findLargest(arr){
    let Largest = arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>Largest){
            Largest=arr[i]
        }
    }
    return Largest;
}
const numbs = [10, 5, 30, 2, 8];

console.log(findLargest(numbs));

// Check Palindrome String
function isPalindrome(str){
        const reversed = str.split("").reverse().join("");
        return str === reversed;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"))


// Remove Duplicate Values from Array
let numbe = [1, 2, 2, 3, 4, 4, 5];
let n = [...new Set(numbe)];
console.log(n); 


// Implement a Countdown Timer
let timer=document.getElementById("timer")
let timeleft=10;

const countdown = setInterval(() => {
    timeleft--;
    if(timeleft>0){
        timer.textContent=timeleft
    }
    else{
        timer.textContent="Timeup!"
         clearInterval(countdown);
    }
}, 1000);


