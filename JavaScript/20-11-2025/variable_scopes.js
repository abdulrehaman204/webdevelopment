// scope ( Scope determines the accessibility (visibility) of variables. )

// global scope 
// function scope
// block scope 


// global scope (Variables declared Globally (outside any block or function) have Global Scope.)

// Global array using with let variable.
let numbers = [10, 20, 30];

function addNumber(num) {
  numbers.push(num);   // modifies global array
}

addNumber(40);

for (let n of numbers) {
  console.log(n);  // 10, 20, 30, 40
}

console.log("Global array:", numbers);



let flowers=["rose","jasmine","lotus","sunflower"];
function flow(){
    console.log("Global Array",flowers)
}

flow()



// Global object with const variable
const user = {
  name: "Abdul",
  age: 23,
  loggedIn: false
};

function login() {
  user.loggedIn = true; // modifies global object
}

if (user.loggedIn) {
  login();
}

console.log(user);


// using var variable.

var score = 50;  // global

function updateScore(points) {
  score += points;
}

if (score < 100) {
  updateScore(30);
} else {
  updateScore(10);
}

console.log("Final score:", score);


// count the total numbers

let total = 0;  // global

let values = [3, 4, 5, 6];

for (let v of values) {
  total += v;    // modifies global variable
}

console.log("Total:", total);  // 18


// function scope (Variables defined inside a function are not accessible (visible) 
// from outside the function.)

function sumNatural(n) {
  let sum = 0;         // function scope
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumNatural(10));


// mutiplication table 

function table(){
    var number=5;
    for(let i=0;i<=10;i++){
        console.log(number +'x'+ i+ '='+ number*i)
    }
}

table()



// function scope using with arrays.
function hospital(){
    let arr = ["doctors","patients","nurses"]
   var a=arr.length
    for(let i=0;i<a;i++)
    {
        console.log(arr[i])
    }
}
hospital()



// block scope (Variables declared with let and const inside a code block are "block-scoped," 
// meaning they are only accessible within that block.)

// array sum 

{
const number=[10,20,30,40,50];
let sum=0;
for(let i=0;i<number.length;i++)
{
    sum+=number[i];
}

console.log('sum = ',sum)
}




function name(){
var number=[10,20,30,40,50];
var sum=0;
for(var i=0;i<number.length;i++)
{
    sum+=number[i];
}

console.log('sum = ',sum)
name()
}




// recursive function (calling its self)

function factorial(n) {
  if (n === 0) return 1;     // base case
  return n * factorial(n - 1); // recursive case
}

console.log(factorial(5)); // 120




function countdown(n) {
  if (n === 0) return; // base case (stop)

  console.log(n);
  countdown(n - 1); // recursive call
}

countdown(5);






