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


// practical questions 
// Print all even numbers between 1 and 30 using a while loop.
var i=1;
while(i<=30){
    if(i%2==0){
        console.log("even numbers from 1 to 30 is",i)
    }
    i++;
}


// Reverse a number using a loop
function reversenumber(num){
    let rev = 0;
    while(num>0){
        rev= rev*10 + (num%10)
        num=Math.floor(num / 10)
    }
    return rev;
}
console.log(reversenumber(12345))


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


// real time examples
// Shopping Cart Total
let cart = [
    {name: "Laptop", price: 50000},
    {name: "Mouse", price: 800},
    {name: "Keyboard", price: 1500}
];
var total =0;
for(let i=0;i<cart.length;i++){
    total += cart[i].price
}
console.log(total)


// Attendance System
let attendance = [
    true,
    false,
    true,
    true,
    false,
    true
];
let present = 0;
for(let i=0;i<attendance.length;i++){
    if(attendance[i]){
        present++;
    }
}
console.log(present);


// Find Highest Salary
let salary = [25000,45000,32000,70000,28000];
let highest = salary[0];

for(let i=1;i<salary.length;i++){
    if(salary[i]>highest){
        highest=salary[i]
    }
}
console.log(highest)

// Online Exam Result
let marks = [80,90,75,95,88];
var total = 0;

for(let i=0;i<marks.length;i++){
    total += marks[i];
}
let average = total / marks.length;
console.log(average);


// Hospital Patient Search
let patients = [
    {id:101,name:"Rahul"},
    {id:102,name:"Anjali"},
    {id:103,name:"Kiran"}
];
let searchId = 102;

for(let i=0;i<patients.length;i++){
    if(patients[i].id===searchId){
        console.log(patients[i].name);
    }
}


// Banking transaction
let transactions = [
    1000,
    -500,
    3000,
    -1000,
    2500
];
let balance = 0;
for(let i=0;i<transactions.length;i++){
    balance += transactions[i];
}

console.log(balance);

