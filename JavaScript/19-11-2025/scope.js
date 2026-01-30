// variable behaviour

//                    var            let          const
// redeclare          yes             no           no
// reassignment       yes             yes          no
// initilization      yes             yes          no
// hoisting           yes             no           no


// redeclare (only var is used to redeclared )
var a=10;
console.log(a)


var a=20;
console.log(a)

// let and const are not redeclared.

// reassignment (var and let both are used to reassignment)
var b=30;
console.log(b)

b=40;
console.log(b)

let c=50;
console.log(c)

c=60;
console.log(c)

const d=70;    // const is not used to reassignment
console.log(d)

// d=80;   
//console.log(d)


// initilization (var and let both are used to initilization)
var x;
console.log(x)

let y;
console.log(y)

// const z; is not used to initilization 


// hoisting   (accessing of memory values even before its execution)
console.log(z) 
var z=100;
console.log(z)


// console.log(p)   
// let p=200;       (let is not used for hoisting)
// console.log(p)


// console.log(s)
// const s=200;    (const is also not used for hoisting)
// console.log(s)

console.log(marks)
var marks=100;
function student(){
    if(marks=100){
        console.log("topper")
    }
}

student()

// with function 
var a = 1;

function demo() {
  console.log(a); // undefined (local var a is hoisted)
  var a = 2;
}
demo();


// with object
console.log(obj); // undefined (var hoisted)
var obj = {
  x: 10,
  y: value
};

var value = 20;


// scope ( Scope determines the accessibility (visibility) of variables. )

// global scope 
// function scope
// block scope 


// global scope (Variables declared Globally (outside any block or function) have Global Scope.)
var carName = "Volvo";
myFunction()

function myFunction() {
    if(true){
   console.log("This is a",carName)
}
}


var arr=["abdul","rehaman","ravi"]
function rr(){
    for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
}

rr()


var x = 10; // global

function test() {
  console.log(x); // 10
}


// function scope (Variables defined inside a function are not accessible (visible) 
// from outside the function.)
function myFunction1() {
  var carName = "BMW";  // Function Scope
  console.log("This is ",carName)
}

function myFunction2() {
  let carName = "Volvo";  // Function Scope
   console.log("This is ",carName)
}

function myFunction3() {
  const carName = "Bench";  // Function Scope
   console.log("This is ",carName)
}

myFunction1()


function hello() {
  var msg = "Hi";
  console.log(msg); // "Hi"
}
//console.log(msg); // ❌ Error: msg is not defined



// block scope (Variables declared with let and const inside a code block are "block-scoped," 
// meaning they are only accessible within that block.)
function abdul(){
    let name="Rehaman";
    if (true){
        console.log(name)
    }  
}

abdul()



// global , function and block 

let global = "I am global"; // Global scope

function exampleFunction() {
  var functionVar = "I am function-scoped"; // Function scope (for var)
  let blockVar1 = "I am block-scoped in a function"; // Block scope (for let/const)

  if (true) {
    let blockVar2 = "I am block-scoped in an if statement"; // Block scope
    console.log(blockVar2); // Accessible
  }
  // console.log(blockVar2); // Not accessible here

  console.log(functionVar); // Accessible
  console.log(blockVar1); // Accessible
  console.log(global); // Accessible
}

exampleFunction();
// console.log(functionVar); // Not accessible here
// console.log(blockVar1); // Not accessible here
console.log(global); // Accessible
