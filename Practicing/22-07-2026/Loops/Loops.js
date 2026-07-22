// Loops

// for loop
for(let i=1;i<=5;i++){
    console.log(i)
}

// for in loop (objects)
var person = {name:"Abdul",age:23}
for(let key in person){
    console.log(key,":",person[key])
}

// for each (arrays)
let numbers = [10,20,30,40]
numbers.forEach(function (num){
   console.log(num)
})

// while loop
var i=1;
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


// logical tasks using loops
// Print a Hollow Diamond Pattern
var n = 5;
// Upper half
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = i; j < n; j++) {
        row += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1)
            row += "*";
        else
            row += " ";
    }
    console.log(row);
}
// lower half
for(let i=n-1; i>=1; i--){
    let row = "";
    for(let j=n; j>i; j--){
        row += " ";
    }
    for(let j=1; j<=2*i-1; j++){
        if(j===1 || j===2*i-1)
            row += "*";
        else 
            row += " ";
    }
    console.log(row)
}


// Find All Prime Numbers Between 1 and 50
for(let num=2; num<=50; num++){
    let prime = true;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            prime=false;
            break;
        }
    }
    if(prime){
        console.log(num)
    }
}


// Multiplication Table Triangle
for(let i=1; i<=5; i++){
    let row="";
    for(let j=1; j<=i; j++){
        row += (i*j)+ " ";
    }
    console.log(row)
}


// Find the Second Largest Number Without Using sort()
let arr = [12, 55, 7, 89, 34, 89, 65, 78];

let largest = -Infinity
let second = -Infinity
for(let i=0;i<=arr.length;i++){
    if(arr[i]>largest){
        second = largest;
        largest = arr[i];
    } else if(arr[i]>second && arr[i] !== largest){
        second = arr[i];
    }
}
console.log(second)


// Matrix Multiplication Using Nested Loops
let A = [
    [1, 2, 3],
    [4, 5, 6]
];

let B = [
    [7, 8],
    [9, 10],
    [11, 12]
];

let result = [];

for (let i = 0; i < A.length; i++) {
    result[i] = [];
    for (let j = 0; j < B[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < B.length; k++) {
            sum += A[i][k] * B[k][j];
        }
        result[i][j] = sum;
    }
}
console.log(result);


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


// Find Highest Salary
let salary = [25000,45000,32000,70000,28000];
let highest = salary[0];

for(let i=1;i<salary.length;i++){
    if(salary[i]>highest){
        highest=salary[i]
    }
}
console.log(highest)

