// Count Word Occurrences

function Countwords(Sentence){
    let words = Sentence.split(" ")
    let count = {}
    words.forEach(word => {
        count[word] = (count[word] || 0 ) + 1;
        });
        return count;
}
console.log(Countwords("javascript hello javascript hello hi"))


// Create a Digital Clock
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  const time = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = time;
}
setInterval(updateClock, 1000);

// deepclone
function deepClone(obj, seen = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;

  if (seen.has(obj)) return seen.get(obj);

  const clone = Array.isArray(obj) ? [] : {};
  seen.set(obj, clone);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], seen);
    }
  }

  return clone;
}

// API fetch
function retryApi(fn, retries, delay) {
  return new Promise((resolve, reject) => {
    function attempt(n) {
      fn()
        .then(resolve)
        .catch(err => {
          if (n === 0) {
            reject(err);
          } else {
            setTimeout(() => attempt(n - 1), delay);
          }
        });
    }

    attempt(retries);
  });
}

retryApi(() => fetch("https://api.example.com"), 3, 1000)
  .then(res => console.log("Success"))
  .catch(err => console.log("Failed"));


// custom map
Array.prototype.myMap = function (callback, thisArg) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result.push(callback.call(thisArg, this[i], i, this));
    }
  }

  return result;
};


// object difference
function objectDiff(obj1, obj2) {
  const diff = {};

  for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (typeof obj2[key] === "object" && obj2[key] !== null) {
        const nestedDiff = objectDiff(obj1[key] || {}, obj2[key]);
        if (Object.keys(nestedDiff).length > 0) {
          diff[key] = nestedDiff;
        }
      } else if (obj1[key] !== obj2[key]) {
        diff[key] = obj2[key];
      }
    }
  }

  return diff;
}
objectDiff(
  { a: 1, b: 2 },
  { a: 1, b: 3 }
);


// event delegation
const list = document.getElementById("list");
const addBtn = document.getElementById("add");

let count = 1;

addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = `Item ${count++} `;
  
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";

  li.appendChild(removeBtn);
  list.appendChild(li);
});

// Event Delegation
list.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
});


// polindrome
function isPalindrome(str) {
    const normal = str.toLowerCase()
    const reversed = normal.split("").reverse().join("");
    return normal === reversed;
}

console.log(isPalindrome("Racecar"));
console.log(isPalindrome("Hello"))

// palindrome 
function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("madam"));


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

// remove duplicates from array
const ar =  [1,2,3,3,4,5,5,5,6]
const ab = [...new Set(ar)]
console.log(ab)


// 	Returns only numbers greater than 10
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


// greater (a,b)
let a=10;
let b=20;
if(a>b){
    console.log("a is greater")
}
else {
    console.log("b is greater")
}


// divisible by 3 and 5
function divisible (a){
    if(a%3==0 && a%5==0){
        return "it is divisible"
    }
    else {
        console.log("it is not divisible")
    }
}

console.log(divisible(30))


// mutiplecation table
function multiple(n){
    for(let i=0;i<=10;i++){
        console.log(n +"x" + i + "=" + n*i)
    }
}

multiple(12)



// Array sum 
var arr=[10,20,30,40]
let sum=0;
function ars(){
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
     console.log("sum = ",sum)
}

ars()


// reversed array
var arr=[10,20,30,40,50]
var abc=arr.toReversed()
console.log(abc)


// reverse a string 
function reverseString(str) {
  return str.split('').reverse().join('');
}
const reversed = reverseString('hello'); // reversed is 'olleh'

console.log(reversed)


// find max and min in array
var arr=[10,20,30,40,50]
const max=Math.max(...arr)
const min=Math.min(...arr)
console.log("max",max)
console.log("min",min)



// Remove even numbers from array
var arr=[1,2,3,4,5,6,7,8,9]
console.log(arr)
const oddnumbers= arr.filter(function(arr){
    return arr % 2 !== 0;
})

console.log(oddnumbers)


// arrow function 
var arr=[1,2,3,4,5,6,7,8,9]
const odd=arr.filter(n => n% 2 !==0);

console.log(odd)


// count vowels
let count1=0;
function vowels(str){
    for(i=0;i<str.length;i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=="i" || str[i]=="o" || str[i]=="u"){
            count1++;
        }
    }
    console.log(count1)
}
vowels("abdul")

// multiplication table
function multiplicationTable(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n; j++) {
            row += (i * j) + " ";
        }
        console.log(row.trim());
    }
}

multiplicationTable(3);

// random loop
function randomNumberLoop() {
    let num;

    while (true) {
        num = Math.floor(Math.random() * 10) + 1; // generates 1–10
        console.log(num);

        if (num === 7) {
            break;
        }
    }
}

randomNumberLoop();

// sort descending array 
function sortDescending(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let num1 = [5, 12, 3, 20, 15];
console.log(sortDescending(num1)); 


// Average Age Calculator
const people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 20 }
];
function averageAge(arr) {
    const ages = arr.map(person => person.age); // extract ages
    const total = ages.reduce((sum, age) => sum + age, 0); // sum of ages
    return total / ages.length; // average
}
console.log(averageAge(people));


// Nested Array Flattening
function flattenArray(arr) {
    let result = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item)); // recursive call
        } else {
            result.push(item);
        }
    }
    return result;
}

console.log(flattenArray([1, [2, [3, 4]], 5]));


// password checker
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


// largest number in array
function findLargest(arr) {
    if (arr.length === 0) return undefined;
    let largest = arr[0]; // assume first element is largest
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
// Example
console.log(findLargest([10, 5, 30, 2, 8]));

// count down timer
  let timeLeft = 10;
        const timerElement = document.getElementById("timer");

        const countdown = setInterval(() => {
            timeLeft--;
            timerElement.textContent = timeLeft;

            if (timeLeft === 0) {
                clearInterval(countdown);
                timerElement.textContent = "Time Up!";
            }
        }, 1000);






