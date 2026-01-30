// Array (collection of data in homogenius or hetrogenius)
// represents array []

var arr=["abdul",23,true]
function ab(){
    console.log(arr)
}

ab()


// push (we can add a value in  ending an array)
ab(arr.push(50,60))

// unshift(we can add an array element in starting)
ab(arr.unshift("Hello"))

// spice (we can add an array at any where)
ab(arr.splice(0,0,"Hi"))

// pop(remove the array element ending )
ab(arr.pop())

// shift(remove the element in starting )
ab(arr.shift())



// Initialize an array
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Initial array:", fruits);

// 1. PUSH – add item at the end
fruits.push("Mango");
console.log("After push('Mango'):", fruits);

// 2. POP – remove item from the end
let removedEnd = fruits.pop();
console.log("After pop():", fruits);
console.log("Popped element:", removedEnd);

// 3. SHIFT – remove item from the beginning
let removedStart = fruits.shift();
console.log("After shift():", fruits);
console.log("Shifted element:", removedStart);

// 4. SPLICE – add/remove items at any position

// Add 'Orange' and 'Kiwi' at index 1
fruits.splice(1, 0, "Orange", "Kiwi");
console.log("After splice(1, 0, 'Orange', 'Kiwi'):", fruits);

// Add 'stawberr' at ending of array 
fruits.splice(4,0,"stawberry");
console.log("After splice ",fruits);

// Remove 1 element at index 2
let removedMiddle = fruits.splice(2, 1);
console.log("After splice(2, 1):", fruits);
console.log("Removed (splice) element:", removedMiddle);

// Remove last element in array index
let remove=fruits.splice(3,3);
console.log("After remove last element",fruits);
console.log("Romved element is",remove)

// Replace items using splice
fruits.splice(1, 1, "Pineapple");
console.log("After splice(1, 1, 'Pineapple'):", fruits);

// Final output
console.log("Final array:", fruits);


// find length of the array 
var arr=[10,20,30,40]
let len=arr.length
console.log(len)


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


// find length of the array 
var arr = [10, 20, 30, 40, 50];
let count = 0;

for (let item of arr) {
    count++;
}

console.log(count); // 5
