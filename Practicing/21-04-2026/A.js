// Data types
// primitive and non primitive data types

// primitive data types

// Number
let number = 20;
let length = 40;
console.log(number,length)
console.log(typeof(number,length))

// string
let color = "Red"
let firstnumber = 9876;
let s1 = `Hello Mr.Abdul${firstnumber}`
let s2 = firstnumber.toString()
console.log(typeof(color))
console.log(firstnumber)
console.log(s1)
console.log(typeof(s2))

// Null
let x = null;
let y = null;
console.log(x,y)

// symbol
const z = Symbol();
const z1 = Symbol();
console.log(z)

const s3 = Symbol('id');
const s4 = Symbol('id');
console.log(s3 === s4);

// boolen
let t =true;
let f=false;
console.log(typeof(t),f)

// undefined
var a;
var b;
console.log(a)

// Bigint
let R = 1234567890123456789012345n;
let T = BigInt(1234567890123456789012345)
console.log(typeof(R),T)


// Non primitive datatypes

// functions
function Abdul(){
    console.log("Hello! Mr.Abdul")
}
Abdul()

// objects
var obj={Name:"Abdul",age:23}
var obj1=obj
console.log(obj)
console.log(obj.Name)
console.log(obj1.age)


// Arrays
let arr = [1,2,3,4,5]
console.log(arr)
let ar = [1,2,3,["Abdul",123,[12345]]]
console.log(ar)

// Creating and Initializing an array with values
let ab = new Array(10, 20, 30);
console.log(ab);

// datatypes practicing questions

// 1. Type Coercion Puzzle
console.log('5' + 3);
console.log('5' - 3);
console.log(true + false);
console.log(null + 1);
console.log(undefined + 1);

// 2. typeof Oddities
console.log(typeof (null));
console.log(typeof (NaN));
console.log(typeof []);
console.log(typeof {});

// 3. Equality Check Logic
console.log(0 == false);   // true
console.log(0 === false);  // false
console.log('' == false);  // true
console.log([] == false);  // true
console.log([] === false); // false

// 4. Array check
function isArray(value) {
  return Array.isArray(value);
}
console.log(isArray([10]))

// 5. object value change
var obj2 = { value: 10 };
var obj3 = obj2;
obj2.value = 20;
console.log(obj2.value); // 20

console.log([] + []); // ""
console.log([] + {}); // "[object Object]"
console.log({} + []); // "[object Object]"


// functions 

// function declaration
function greet(name){
    console.log("Hello " + name)
}
greet("Abdul")

// default parameter
function greet1(name="Rehaman"){
    console.log("Hello! "+name)
}
greet1()
greet1("Abdul")

// return statements
function add(a,b){
    return a+b;
}
console.log(add(10,20))

// types of functions 
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
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));



// Arrays
// Creating an Array and Initializing with Values
let a1 = ["HTML", "CSS", "JS"];

// Accessing Array Elements
console.log(a1[0]);
console.log(a1[1]);
// All Array methods

// Array length
var a = ["HTML","CSS","JS","React"]
console.log(a.length)

// tostring()
var a = ["HTML","CSS","JS","React"]
var s = a.toString()
console.log(s)

// join()
var a = ["HTML","CSS","JS","React"]
var s = a.join('|')
console.log(s)

// delete operator
var a = ["HTML","CSS","JS","React"]
var s = delete a[2]
console.log(s)

// concat()
var a = ["HTML","CSS","JS","React"]
var b = [11,12,13,14]
var s = a.concat(b)
console.log(s)

// flat()
var a = [1,2,3,[4,5,[6,7]],[8,9]]
var s = a.flat(Infinity)
console.log(s)

// push()
var a = ["HTML","CSS","JS","React"]
var b = a
b.push("SQl")
console.log(b)

// unshift()
var a = ["HTML","CSS","JS","React"]
a.unshift("Node.js")
console.log(a)

// pop()
var a = ["HTML","CSS","JS","React"]
a.pop()
console.log(a)

// shift()
var a = ["HTML","CSS","JS","React"]
a.shift()
console.log(a)

// splice()
var a = ["HTML","CSS","JS","React"]
a.splice(1,0,"C++")
console.log(a)

a.splice(1,3)
console.log(a)

var a = [1,2,3,4,5]
a.splice(1,3,6,7,8)
console.log(a)

// slice()
var a = ["HTML","CSS","JS"]
var b = a.slice(1,3)
console.log(b)

var a = [1,2,3,4,5]
var b = a.slice(1,3)
console.log(b)
console.log(a)

// some()
var a = [1, 2, 3, 4, 5];
var res = a.some((val) => val >= 5);
console.log(res);

// map()
var a = [4, 9, 16, 25];
var sub = a.map(geeks);

function geeks() {
    return a.map(Math.sqrt);
}
console.log(sub);

// filter()
var a = [1,2,3,4,5]
var b = a.filter((num)=>num>2)
console.log(b)

// reduce()
var a = [88, 50, 25, 10];
var sub = a.reduce(geeks);

function geeks(tot, num) {
    return tot - num;
}
console.log(sub);

// reverse()
var a = [1,2,3,4,5]
a.reverse()
console.log(a)

// values()
var a = ["Apple", "Banana", "Cherry"];
var res = a.values();

for (const value of res) {
    console.log(value);
}

// sort()
var a = [70,50,30,80,100]
a.sort()
console.log(a)

// index of ()
var beasts = ["ant", "bison", "camel", "duck", "bison"];
var b = beasts.indexOf("camel")
console.log(beasts.indexOf("camel",2))
console.log(beasts.indexOf("Hello"))
console.log(b)

// includes ()
var a = [1,2,3,4,5]
var b = a.includes(4)
console.log(b)

// last index of ()
var a = [1,2,3,4,5,3]
a.length = 0
console.log(a.length)
console.log(a.lastIndexOf(3))


// copying of arrays 
// normal copy
var arrr = [1,2,3,4,5]
var arr2 = arrr
console.log(arr2)

// shallow copy
var arrr = [1,2,3,4,5]
var arr2 = [...arrr]
console.log(arr2)

// deep copy
var arrr = [1,2,3,4,5]
var arr2 = JSON.parse(JSON.stringify(arr))
console.log(arr2)


// objects 
// using new object
const ob= new Object()
ob.name="rehaman",
ob.age=24,
ob.job="Developer"

console.log(ob)

// accessing object
var obj={name:"abdul",age:23}
console.log(obj.name)
console.log(obj["age"])

// modifying objects
var obj={name:"abdul",age:23}
console.log(obj)
obj.age=25;
console.log(obj)

// adding object properties
var obj={name:"abdul",age:23}
obj.number=2
console.log(obj)

// removing object properties
var obj={name:"abdul",age:23}
delete obj.name;
console.log(obj)

//checking properties
var obj = { model: "Tesla" };
console.log("color" in obj);
console.log(obj.hasOwnProperty("model"));

// iterating 
var obj = { name: "Sourav", age: 23 };
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}

// merging objects
var obj1={name:"Abdul"}
var obj2={age:23}
var obj3={...obj1,...obj2}
console.log(obj3)

// object length
var obj = { name: "Sourav", age: 23 };
console.log(Object.keys(obj).length);


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
let results = (A>=18) ? "Adult" : "Minor";
console.log(results)

// Bitwise Operators
console.log(5 & 1); // 1
console.log(5 | 1); // 5
console.log(5 ^ 1); // 4
console.log(~5);    // -6


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
const result = (age>=18) ? "You are eligible for vote" : "You are not eligible for vote"
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
