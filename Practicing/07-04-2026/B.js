// conditional statements

// if
var a = 20;
if(a % 2 == 0){
    console.log("Even")
}
if(a % 2 !== 0){
    console.log("odd")
}

// if-else
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
const marks = 85;

let Branch;

switch (true) {
    case marks >= 90:
        Branch = "Computer science engineering";
        break;
    case marks >= 80:
        Branch = "Mechanical engineering";
        break;
    case marks >= 70:
        Branch = "Chemical engineering";
        break;
    case marks >= 60:
        Branch = "Electronics and communication";
        break;
    case marks >= 50:
        Branch = "Civil engineering";
        break;
    default:
        Branch = "Bio technology";
        break;
}

console.log(`Student Branch name is : ${Branch}`);

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

// logical questions examples

// Logical Expression Evaluator
function expression(a,b,c){
    if(a+b>c){
       if(b-c<a){
         return true;
       }
}
else{
    return false;
}
}

console.log(expression(30,20,5))


// Maximum of Three Numbers
function maxofthree(a,b,c){
  return (a>b)?(a>c ? a : c) :(c>b ? c : b)
}

console.log(maxofthree(15,10,12))

// Grading System
function finalgrade(score,attendance){
    if(score>90 && attendance>75){
        return "A+"
    } else if(score>60 && attendance>60){
        return "B"
    }
    else{
        return "c"
    }
}

console.log(finalgrade(85,80))

// Season Finder
function season(month){
    switch(month){
        case "december" :
        case "january" :
        case "febrauary" :
            return "Winter season"
        case "march" :
        case "april" :
        case "may" :
            return "spring season"  
        case "june" :
        case "july" :
        case "august" :
            return "summer season"  
        case "september" :
        case "october" :
        case "november" :
            return "rainy season"
        default :
            return "invalid month "  
    }
}

console.log(season("january"))

// Password Strength Checker
function checkPasswordStrength(password){
    if(password.length < 8){
        return "Password must be at least 8 characters long"
    } 
    if(!password.match(/[0-9]/)){
        return "Password must contain at least one number"
    }
    if(!password.match(/[A-Z]/)){
        return "Password must contain at least one uppercase letter"
    }
    return "Password is strong";
}

console.log(checkPasswordStrength("abdul123"))


// iterative statements

// for loop
for(let i=0;i<=3;i++){
    console.log("count :",i)
}

// for in loop (objects)
let person={name:"abdul",age:23}

for(let key in person){
    console.log(key,":",person[key])
}

// for each loop (arrays)
const numbers = [10, 20, 30];

numbers.forEach(function(num) {
  console.log(num);
});


// while loop
var i=0;

while(i<3){
    console.log("Number :",i)
    i++;
}


// do-while loop
var i=0;

do{
    console.log("iteration :",i)
    i++;
}while(i<3)


// logical questions 

// Vowel Counter

var count =0;
function countVowels(str){
    for(let i=0;i<str.length;i++){
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
            count++;
        }
    }
    console.log(count)
}

countVowels("JavaScript"); 
countVowels("HELLO");      


//  Prime Numbers Finder
function findPrimes(n) {
  const primes = [];

  for (let i = 2; i < n; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
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

console.log(findPrimes(10))

// Random Number Loop
let num;
do{
    num=Math.floor(Math.random()*10)+1;
    console.log(num)
}while(num !==7)


// Object Iteration
const students = { Alice: 85, Bob: 92, Carol: 78 };

// Using for-in loop (keys + values)
for (let name in students) {
  console.log(name + ": " + students[name]);
}

// Using for-of loop (values only)
for (let score of Object.values(students)) {
  console.log(score);
}

