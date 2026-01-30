// function currying (single function with single parameter)
function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
 
console.log(add(10)(20)(30))



function ad(a) {
  return function(b) {
    return a + b;
  };
}

console.log(ad(2)(3)); // 5


function division(a){
    return function (b){
        return a/b ;
    }
}

console.log(division(100)(50))

// Arrow function 
const multiply = a => b => a * b;

const double = multiply(2);
console.log(double(10)); // 20

const triple = multiply(3);
console.log(triple(10)); // 30



// first class (in object)
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
};

console.log(calculator.add(2, 3)); // 5



// pure function (we can guess the output or values)
function square(x) {
  return x * x;
}

console.log(square(10))




let a=30
let b=50
if(a>b)
{
    console.log("a is greater")
}
else (b>a)
{
    console.log("b is greater")
}



let count = 0;

function increment() {
  count++;   // modifies external state → impure
}

increment();
console.log(count); // output depends on how many times it's called



// using arrays
const nums = [1, 2, 3];

function addNumber(arr, num) {
  arr.push(num);   // mutates the original array → impure
}

addNumber(nums, 4);
console.log(nums); // [1, 2, 3, 4]



// higher order function 
function Numbers(num1, num2, operation) {
   return operation(num1, num2);
}

function addd(a, b) {
     return a + b;
}

function subtract(a, b) {
     return a - b;
}

console.log(Numbers(5, 3, addd)); // Output: 8
console.log(Numbers(5, 3, subtract)); // Output: 2

// task random numbers 1 to 100


function RandomNumber(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(RandomNumber());     
console.log(RandomNumber(50, 60)); 


// IIFE 
(function(){
    console.log("abdul")
}
)
();


(function(){
    let a=50;
    let b=20;
    console.log(a+b)
})

();


(function(name){
    console.log("hi",name)
})

("Rehaman")



// this keyword 

console.log(this)



function Hi(){
    console.log(this)
}

Hi()




let obj={
    name:"abdul",
    age : 23,
Hi(){
    console.log(this.name)
}
}

obj.Hi()

console.log(obj['age'])


// arrow function 

let ab=()=>{
    console.log(this)
}

ab()
