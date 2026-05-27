var a = 1;
let b = 2;
const c = 3;

console.log(a, b, c); 

const isEven = n => n % 2 === 0;
console.log(isEven(4)); 

let x = 5, y = 10;
[x, y] = [y, x];
console.log(x, y);

// control flow
for (let i = 1; i <= 15; i++) {
  let out = "";
  if (i % 3 === 0) out += "Fizz";
  if (i % 5 === 0) out += "Buzz";
  console.log(out || i);
}


const isLeap = y =>
  (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;

console.log(isLeap(2024)); 

// largest of 3
const max3 = (a,b,c) => Math.max(a,b,c);
console.log(max3(8,2,3))

// reverse number
const reverseNum = n => Number(String(n).split("").reverse().join(""));
console.log(reverseNum(123456789))


// functions
const fact = n => n <= 1 ? 1 : n * fact(n - 1);
console.log(fact(5)); 

function counter() {
  let count = 0;
  return () => ++count;
}
const c1 = counter();
console.log(c1()); 
console.log(c1()); 

const sum = a => b => c => a + b + c;
console.log(sum(1)(2)(3));


// Arrays
const arr =[1,2,3,3,4]
console.log(Math.max(...arr))
console.log([...new Set(arr)])

const nested = [1, [2, [3]]];
console.log(nested.flat(Infinity));

const rotate = (arr,k) => [...arr.slice(-k), ...arr.slice(0,-k)];
console.log(rotate([1,2,3,4,5], 2));

// objects
const obj = {a:1, b:2};
const clone = JSON.parse(JSON.stringify(obj));
console.log(clone);

const toQuery = o =>
  Object.entries(o).map(([k,v]) => `${k}=${v}`).join("&");
console.log(toQuery({a:1,b:2})); 


// Async 
const delay = ms => new Promise(res => setTimeout(res, ms));
delay(1000).then(() => console.log("Done after 1s"));

// sequential
async function run() {
  await delay(500);
  console.log("Task 1");
  await delay(500);
  console.log("Task 2");
}
run();

// closures
for (let i=0;i<3;i++){
  setTimeout(()=>console.log(i),1000);
}


// prototype
function Person(name){
  this.name = name;
}
Person.prototype.say = function(){
  return this.name;
};

const p = new Person("Abdul");
console.log(p.say()); 

// Debounce/throtling
const debounce = (fn, delay) => {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
};

const log = debounce(() => console.log("Called"), 500);
log(); log(); log();

// event loop
console.log("A");

setTimeout(()=>console.log("B"),0);

Promise.resolve().then(()=>console.log("C"));

console.log("D");


// error handling
try{
    throw new Error("Something went wrong");
}catch(e){
   console.log(e.message)
}

// API Fetch
async function getdata(){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data = await res.json()
        console.log(data)
    }catch(e){
        console.log("Error : ",e)
    }
}
getdata()

// polindrome
function isPalindrome(str) {
    const normal = str.toLowerCase()
    const reversed = normal.split("").reverse().join("");
    return normal === reversed;
}

console.log(isPalindrome("Racecar"));
console.log(isPalindrome("Hello"))

// vowelcounts
function countVowels(str){
    const vowels = "aeiouAEIOU"
    let count = 0;
    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count ;
}

console.log(countVowels("JavaScript")); 
console.log(countVowels("HELLO"));   


// smartconverter
function smart(value){
    let originaltype = typeof value;
    let convertedtype;
    let convertedvalue;
    if(originaltype==="string"&&!isNaN(value)){
        convertedvalue=Number(value)
        convertedtype=typeof convertedvalue
    } else if(originaltype==="boolean"){
        convertedvalue=String(value)
        convertedtype=typeof convertedvalue
    } else {
        convertedValue = value;
        convertedType = originalType;
    }
    console.log(`original:${originaltype},converted:${convertedtype}`)
      
}

smart("123")
smart(true)


// Logical Expression Evaluator
function evaluateExpression(a, b, c) {
    return (a + b) > c && (b - c) < a;
}

console.log(evaluateExpression(5, 3, 6)); 
console.log(evaluateExpression(2, 2, 5)); 


// Maximum of Three Numbers
function maxOfThree(a, b, c){
  return  ( a>b ) ? (a>c ? a:c) :  (b>c ? b : c)
}
console.log(maxOfThree(5, 10, 8)); 


// Grading System
function finalGrade(score, attendance) {
     if(score > 90 && attendance > 75){
         console.log("A+")
     }else if (score > 75 && attendance > 60){
        console.log("B")
     }else {
        console.log("C")
     }
}

finalGrade(73,50)


//  Season Finder
function season(month) {
    switch(month){
        case "December" :
        case "January" :
        case  "February" :
            return "Winter";

        case "March" :
        case "April" :
        case "May" :
            return "Spring";

        case "June" :
        case  "July" :
        case "August" :
            return "Summer" ;

        case "September":
        case "October" :
        case "November" :
            return "Autumn" ;

        default :
          return "Not eligible"
    }
}

console.log(season("March"))


// Prime Numbers Finder
function findPrimes(n) {
    let primes = [];

    for (let i = 2; i < n; i++) {
        let isPrime = true;

        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(i);
        }
    }

    return primes;
}

// Example
console.log(findPrimes(10)); // [2, 3, 5, 7]


// Object Iteration
const students = { Alice: 85, Bob: 92, Carol: 78 }
for(let key in students){
    console.log(key+":"+students[key])
}

for(let value of Object.values(students)){
    console.log(value)
}


// closure multipler
function createMultiplier(x) {
    return function(y){
        return x * y;
    }
}

const multiplyBy3 = createMultiplier(3);
console.log(multiplyBy3(5));


// currying function
function su(a){
     return function(b){
        return a+b;
     }
}

console.log(su(5)(10))


// Recursive Factorial
function factorial(n){
    if(n===0) return 1;
    return n*factorial(n-1)
}

console.log(factorial(5))

// remove duplicates
const ar =  [1,2,3,3,4,5,5,5,6]
const ab = [...new Set(ar)]
console.log(ab)

// with filter
const ac = [1,2,3,67,89,45,20,4,5]
const re = ac.filter(num => num > 10)
console.log(re)

// without filter
const r = [];
for(let i=0;i<ac.length;i++){
    if(ac[i]>10){
        r.push(ac[i])
    }
}

console.log(r)


// String to Capitalized Dash Array
function Hello(str) {
  return str
    .split(' ').map(word => word.toUpperCase()).join('-');               
}
const result = Hello("Hello World");
console.log(result);
