// Array methods

var arr=[10,20,30,40,50];
console.log(arr)

// push() it can add an array elements at ending.
arr.push(60)
console.log(arr)

// unshift() it can add an array elements with starting 
arr.unshift(0)
console.log(arr)

// splice() it can add and delete an array elements at anywhere
arr.splice(0,0,5)
console.log(arr)

arr.splice(0,2)
console.log(arr)

// pop() remove the array elements at ending
arr.pop()
console.log(arr)

// shift() remove the elements in starting
arr.shift()
console.log(arr)


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


// indexof() TO find the index of particular element in array , return -1.
arr.indexOf(30)
console.log(arr)

// index of is used to find the index of particular element in aaray 
// if the value is not present return -1
console.log(arr.indexOf(10))
console.log(arr.indexOf(20))


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









