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
const add2 = function(a, b) {
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
let double = (n)=> n*2;
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

// Recursive Function
function factorial(n){
    if(n==0){
        return 1;
    }
    return n* factorial(n-1)
}
console.log(factorial(5))

// Higher-Order Function
function multiplyBy(factor) {
  return function(num) {
    return num * factor;
  };
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


// practice some logical tasks about functions

// Function Calculator (Higher-Order Function)
function calculator(operation){
    return function(a,b){
        switch(operation){
            case "add" :
                return a+b;
            case "multiply":
                return a*b;
            case "subtract":
                return a-b;
            case "divide":
                return b!==0 ? a/b : "cannot divide by zero"
            case "modulus":
                return a % b;
            default:
                return "Invalid operation";
        }
    }
}

const add1 = calculator("add");
const multiply = calculator("multiply");

console.log(add1(10, 5));        
console.log(multiply(4, 6));    


// Custom Array Filter
function myFilter(array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }

    return result;
}

const number = [10, 25, 18, 40, 5];
const filtered = myFilter(number, num => num > 20);
console.log(filtered);


// Function Execution Counter (Closure)
function createcounter(){
    let count = 0;
    return function(){
        count++;
        console.log(`Called ${count} times`)
    }
}
const counter = createcounter()
counter()
counter()
counter()


// Callback-Based Login System
function login(username,password,sucesscallback,failurecallback){
    const correctusername = "Abdul"
    const correctpasssword = "12345"
    if(username === correctusername && password === correctpasssword){
        sucesscallback()
    }
    else {
        failurecallback()
    }
}

login("Abdul","12345",
    () => console.log("Login Successful"),
    () => console.log("Invalid Credentials")
);
login("john","1111",
    () => console.log("Login Successful"),
    () => console.log("Invalid Credentials")
);


// Recursive File Explorer
const folders = {
    name: "Root",
    children: [
        {
            name: "Documents",
            children: [
                { name: "Resume.pdf", children: [] },
                { name: "Notes.txt", children: [] }
            ]
        },
        {
            name: "Pictures",
            children: [
                { name: "Photo.jpg", children: [] }
            ]
        }
    ]
};

function printFolder(folder) {
    console.log(folder.name);

    for (let child of folder.children) {
        printFolder(child);
    }
}

printFolder(folders);


// Function Pipeline
function pipe(...functions) {
    return function(value) {
        let result = value;
        for (let fn of functions) {
            result = fn(result);
        }
        return result;
    };
}

const double1 = x => x * 2;
const square = x => x * x;
const minusFive = x => x - 5;
const calculate = pipe(double1, square, minusFive);
console.log(calculate(5));


// Memoization Function
function memoize(fn) {
    const cache = {};
    return function(num) {
        if (cache[num] !== undefined) {
            return cache[num];
        }
        console.log("Calculating...");
        cache[num] = fn(num);
        return cache[num];
    };
}

const slowSquare = memoize(function(n) {
    return n * n;
});

console.log(slowSquare(10));
console.log(slowSquare(10));
console.log(slowSquare(10));


