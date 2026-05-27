// data types

// primitive data types

// number 
let length = 16;
let weight =17.5;

console.log(typeof(length))
console.log(length,weight)

// string
let color = "Green";
let lastName = 123;
let s1= `Hello Abdul ${lastName}`
let s2=lastName.toString(2)

console.log(color)
console.log(color.length)
console.log(s2)
console.log(s1)

// Null
let x = null;
let y = null;

console.log(x,y)

// symbol
const z = Symbol();
const zz = Symbol();

console.log(z)

// boolen
let t =true;
let f=false;

console.log(t,f)

// undefined
let a;
let b;

console.log(a,b)

// bigint
let R = 1234567890123456789012345n;
let T = BigInt(1234567890123456789012345)

const AB = BigInt(Number.MAX_SAFE_INTEGER);
let result = AB + 1n == AB + 2n;

console.log(result)
console.log(R,T)

// concatenations 
let A = 100 + "HELLO"
console.log(A)

let C = "Volvo" + 16 + 4;
console.log(C)
console.log(typeof(C))

let B = 42;
let foo = B + "3"
console.log(foo)
console.log(typeof(foo))

console.log(42/0) // infinity

// non primitive data types

// functions

// named function
function Abdul(){
    console.log("Hello"+`Rehaman ${1234}`)
}

Abdul()

// anonymous function
const greet = function(){
    console.log("Hello")
}

greet()

// arrow function
let Rehaman = ()=>{
    console.log("Hello Abdul")
}

Rehaman()

// even numbers
function even(num){
    return num % 2 == 0;
}

console.log(even(10))

// polindrame check
function isPalindrome(str) {
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("Hello"))

// factorial of a number
function factorial(n){
    if(n==0) return 1;
    return n*factorial(n-1)
}

console.log(factorial(5))

// currying function
function sum(a){
    return function(b){
        return a+b;
    }
}

console.log(sum(5)(10))

// closeur function
function createMultiplier(x){
   return function(y){
    return x*y;
   }
}

const multiplyBy3 = createMultiplier(3);
console.log(multiplyBy3(5))


// objects 
const ab={
    name : "abdul",
    age : 23,
    job : "Developer"
}

console.log(ab)

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


// Arrays
// Creating an Empty Array
var ar = [];
console.log(ar);

// Creating an Array and Initializing with Values
var ar = [10, 20, 30];
console.log(ar);

// Creating and Initializing an array with values
var ar= new Array(10, 20, 30);

console.log(ar);

// Creating an Array and Initializing with Values
var ar = ["HTML", "CSS", "JS"];

// Accessing Array Elements
console.log(ar[0]);
console.log(ar[1]);

// Creating an Array and Initializing with Values
var ar= ["HTML", "CSS", "JS"];

// Accessing First Array Elements
let fst = ar[0];

console.log("First Item: ", fst);

// Creating an Array and Initializing with Values
var ar = ["HTML", "CSS", "JS"];

// Accessing Last Array Elements
let lst = ar[ar.length - 1];

console.log("First Item: ", lst);

// Creating an Array and Initializing with Values
var ar = ["HTML", "CSS", "JS"];
console.log(ar);

ar[1]= "Bootstrap";
console.log(ar);

// Creating an Array and Initializing with Values
var ar = ["HTML", "CSS", "JS"];

// Add Element to the end of Array
ar.push("Node.js");

// Add Element to the beginning
ar.unshift("Web Development");

console.log(ar);

// Creating an Array and Initializing with Values
var ar = ["HTML", "CSS", "JS"];
console.log("Original Array: " + ar);

// Removes and returns the last element
let last = ar.pop();
console.log("After Removing the last: " + ar);

// Removes and returns the first element
let first = ar.shift();
console.log("After Removing the First: " + ar);

// Removes 2 elements starting from index 1
ar.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + ar);

// Creating an Array and Initializing with Values
var ar = ["HTML", "CSS", "JS"];

var ar = ar.length;

console.log("Array Length: " + ar);