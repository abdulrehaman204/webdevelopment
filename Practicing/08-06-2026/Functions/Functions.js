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
  return nums.reduce((a, b) =>  a + b, 0);
}
console.log(sum(1, 2, 3, 4));


// logical coding tasks about functions 
// add two numbers
function abdul(a,b){
    console.log(a+b)
}
abdul(10,20)

// check even or not
function evencheck(num){
  return num % 2 === 0 ? "even" : "odd" 
}
console.log(evencheck(4))

// find maximum of two numbers
function checkmax(a,b){
    return a>b ? "a is highest" : "b is highest"
}
console.log(checkmax(10,20))

// reverse string
function reversestr(str){
    return str.split("").reverse().join("")
}
console.log(reversestr("Abdul"))

// count vowels
function countvowels(str){
    let vowels = "aeiouAEIOU"
    let count = 0
       for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
       }
       return count;
}
console.log(countvowels("javascript"))

// factorial 
function factorial(n){
   if(n === 0 || n === 1) return 1;
   let result = 1;
   for(let i=2;i<=n;i++){
    result*=i;
   }
   return result;
}
console.log(factorial(5))

// checkpalindrome
function palindrome(str){
    const reversed = str.split("").reverse().join("")
    return str === reversed;
}
console.log(palindrome("madam"))

// sum of array elements
function arraysum(arr){
  return arr.reduce((sum,num)=>sum+num,0)
}
console.log(arraysum([1,2,3,4,5,6,7,8]))

// find largest number in array
function findLargest(arr) {
  return Math.max(...arr);
}
console.log(findLargest([4, 8, 2, 15, 7])); 

// remove duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

// custom map 
function customMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}
console.log(customMap([1, 2, 3], num => num * 2));

// function composition
function compose(...functions) {
  return function (value) {
    return functions.reduceRight((acc, fn) => fn(acc), value);
  };
}
const add4 = x => x + 2;
const multiply3 = x => x * 3;
console.log(compose(multiply3, add4)(5));

// memoization function
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}
function square(n) {
  console.log("Calculating...");
  return n * n;
}
const memoizedSquare = memoize(square);
console.log(memoizedSquare(5));
console.log(memoizedSquare(5));

// debounce function
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
function search() {
  console.log("Searching...");
}

const debouncedSearch = debounce(search, 500);
console.log(debouncedSearch())

// custom bind
Function.prototype.myBind = function (context, ...args) {
  const fn = this;

  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};
function greet(city) {
  console.log(`Hi ${this.name} from ${city}`);
}
const use = { name: "John" };
const bound = greet.myBind(use);
bound("Delhi");


// custom call
Function.prototype.myCall = function (context, ...args) {
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

// currying function
function curry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(curry(1)(2)(3));

// calculator 
function calculator() {
  let value = 0;
  return {
    add(num) {
      value += num;
      return value;
    },
    subtract(num) {
      value -= num;
      return value;
    },
    getValue() {
      return value;
    }
  };
}

const calc = calculator();
calc.add(10);
calc.subtract(3);
console.log(calc.getValue());

// deep clone
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  const cloned = {};
  for (let key in obj) {
    cloned[key] = deepClone(obj[key]);
  }
  return cloned;
}
const original = {
  name: "John",
  details: {
    age: 25
  }
};

const copy = deepClone(original);

copy.details.age = 30;

console.log(original.details.age); 
console.log(copy.details.age); 
