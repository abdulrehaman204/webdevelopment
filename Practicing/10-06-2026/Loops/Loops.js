// Looping statements

// forloop
for(let i=0;i<5;i++){
    console.log(i)
}

// for in loop (objects)
let person={name:"Abdul",age:23}
for(let key in person){
    console.log(key,":",person[key])
}

// for each (arrays)
let numbers = [10,20,30,40]
numbers.forEach(function (num){
   console.log(num)
})

// while loop
var i=0;
while(i<=3){
    console.log("Numbers :",i)
    i++;
}

// do while loop
var i=1;
do{
    console.log("Iteration :",i)
    i++
}while(i<=3)


// Print all even numbers between 1 and 50 using a while loop.
var i=1;
while(i<=50){
    if(i%2==0){
        console.log("even numbers 1 to 50 is",i)
    }
    i++;
}

// Reverse a number using a loop
function reverseNumber(num) {
  let rev = 0;
  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return rev;
}
console.log(reverseNumber(12345))

// sum of digits
function sumDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(sumDigits(12345))

// polindrome check
function ispolindrome(num){
    let original = num;
    let rev =0;
    while(num>0){
        rev=rev*10+(num%10);
        num=Math.floor(num/10)
    }
    return original === rev;
}
console.log(ispolindrome(22))

// Find the Second Largest Number Without Sorting
var arr = [10,30,5,60,26,78,90]
var largest = -Infinity
var secondlargest = -Infinity

for(let num of arr){
    if(num > largest){
     secondlargest = largest;
     largest = num;
    }else if(num > secondlargest && num !== largest){
        secondlargest = num;
    }
}

console.log(secondlargest)

// Count Character Frequency Without Using Objects Built-in Methods
var str = "programming";
var freq = {};
for (let char of str) {
    if (freq[char]) {
        freq[char]++;
    } else {
        freq[char] = 1;
    }
}

console.log(freq);

// Find Duplicate Elements
var arr =[1,2,2,3,4,5,5,5,6,7]
var duplicates = {}
for(let i=0; i<arr.length;i++){
    for(let j=i+1;j<arr,length;j++){
         if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
            duplicates.push(arr[i]);
         }
    }
}
console.log(duplicates)

// Generate Prime Numbers Between 1 and 50
for (let num = 2; num <= 50; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}

// Pyramid Pattern
let rows = 5;
for(let i=1;i<=rows;i++){
    let line=""
    for(let j=1;j<=rows-i;j++){
        line +=""
    }
    for(let k=1;k<=(2*i-1);k++){
        line += "*"
    }
    console.log(line)
}

// matrix multiplication
var A = [
  [1,2],
  [3,4]
];

var B = [
  [5,6],
  [7,8]
];

var result = [];
for (let i = 0; i < A.length; i++) {
    result[i] = [];
    for (let j = 0; j < B[0].length; j++) {
        result[i][j] = 0;
        for (let k = 0; k < B.length; k++) {
            result[i][j] += A[i][k] * B[k][j];
        }
    }
}

console.log(result);

// Find Missing Number in Sequence
var arr = [1,2,3,5,6,7];
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] > 1) {
        console.log(arr[i] + 1);
        break;
    }
}


