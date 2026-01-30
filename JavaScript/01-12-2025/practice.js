// loops (it can repeated the condition ,if the given condition is true)
// for loop
// while loop
// do while loop

// for loop (The for statement creates a loop with 3 optional expressions:)

for(let i=0;i<5;i++){
    console.log(i)
}


let j;

for (j = 0; j <=5; j++) 
{
    console.log("The number is ",j ) 
}


// while loop (it loops through a block of code as long as specified condition is true)

let i=0;

while(i<5){
    console.log(i)
    i++;
}


let l=1;

while(l < 6)
{
    console.log("Hello Abdul");
    l++;
}


let count1=1;

while (count1 <= 10)
{
    console.log("*"+count1);
    count1++;
}


// do while loop (// The do while loop will execute the code block once, 
// before checking if the condition is true, 
// then it will repeat the loop as long as the condition is true.)

let k=0;
do{
    console.log("abdul")
    k++;
} while(k<4)


var a=0;
do {
    console.log("Rehaman")
    a++;
} while(a>5)   // the condition is false but the code will execute once.


// performing all logical programs using with loops 

// Use a for loop to collect the car names from the cars array:

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let len = cars.length;

for (let i = 0; i < len; i++) 
{
  console.log(cars[i]);
}


// Print numbers 1 to 10
for(let i=0;i<=10;i++){
    console.log("Print 1 to 10 numbers :",i)
}


// Sum of first N natural numbers
var sum=0;
var n=10;
for(let i=0;i<=n;i++){
    sum+=i;
}

 console.log("sum of 1 to 10 numbers is : ",sum)


// Print even numbers between 1 and 50
for(let i=1;i<=50;i++){
    if(i%2 == 0){
        console.log("even numbers btw 1 to 50 is :",i)
    }
}


// Multiplication table
var n=5;
for(let i=1;i<=10;i++){
    console.log(n+"x"+i+"="+n*i)
}


// Count digits in a number
let num = 5423;
let count = 0;

while (num > 0) {
  num = Math.floor(num / 10);
  count++;
}

console.log("Digits:", count);


// Reverse a string using a loop
var rev=" ";
var name="Hello";
for(let i=name.length-1;i>=0;i-- ){
       rev+=name[i]
}

console.log(rev)


// Factorial of a number (N!)
var n=5;
var fact=1;
for(let i=1;i<=n;i++){
    fact*=i;
}

console.log(fact)


// Check if a number is prime
var n = 17;
let isPrime = true;

for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    isPrime = false;
    break;
  }
}

console.log(isPrime ? "Prime" : "Not Prime");

// Print Fibonacci series up to N terms
let N = 10;
var a = 0, b = 1;

for (let i = 1; i <= N; i++) {
  console.log(a);
  let temp = a + b;
  a = b;
  b = temp;
}

// Find the largest number in an array
var max=0;
var arr=[10,20,30,40,100,50,70]
for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
}

console.log("largest number in array is :", max)


// length of array 
var arr=[10,20,30,40]
console.log(arr.length)

console.log(arr)
console.log(arr[2])

// index of is used to find the index of particular element in aaray 
// if the value is not present return -1
console.log(arr.indexOf(10))
console.log(arr.indexOf(1))


// includes true or false
console.log(arr.includes(0))
console.log(arr.includes(30))


// splice (to delete all the elements in array)
arr.splice(0,4)
console.log(arr)

// making array length to 0
console.log(arr.length)
arr.length=0
console.log(arr.length)




