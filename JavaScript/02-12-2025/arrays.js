// arrays 
// combining 2 arrays 
var arr=[1,2,3,4,5]
var ab=["abdul","rehaman","ravi","kumar"]
console.log(arr,ab)

console.log(arr.concat(ab))


// rest parameters (They are denoted by three dots (...) followed by the name of the parameter,
//  which will hold the collected arguments.)
var arr=[10,20,30,40]
var ab=["a","b","c","d"]
console.log(arr,ab)

console.log(...arr,...ab)


// example program for rest parameters
function sumAll(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log(sumAll(5,5,5));        
console.log(sumAll(5, 10, 15, 20));   
console.log(sumAll());                


// combining of 2 arrays using with push()
var arr=["a","b","c"]
var ab=[100,200,300,400,500]

var a = arr.push(...ab)

console.log([a])



// Last index of (method returns the last index (position) of a specified value.)
// method returns -1 if the value is not found.
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var index = fruits.lastIndexOf("Apple");

console.log(index)


var fruits = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
var index = fruits.lastIndexOf("Apple",4);

console.log(index)


// Assign empty array 
// To assign an empty array in JavaScript, you use the array literal syntax with empty square brackets [].

// Given array 
var a = [ 10, 20, 30, 40, 50 ];

// Assign new array to make it empty
a = [];

// Display the updated array
console.log("Updated Array: ", a)



// empty array with length to 0 :
var a = ["abdul","rehaman","ravi"];
a.length = 0;

// Display Updated array and its length
console.log("Updated Array: ", a);
console.log("Length of Updated Array: ", a.length);



// using pop() to empty array 
var ab =[100,200,300,400,500]
while(ab.length>0)
{
    ab.pop()
}

console.log(ab)


// using splice() method for empty array 
var a = [ 10, 20, 30, 40, 50 ];
a.splice(0);

// Display the updated array
console.log("Updated Array: ", a)



// combining of 2 arrays 
var arr=[1,2,3]
var ab=[4,5]

console.log(arr.concat(ab))


// combining of objects 
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
const combinedObject = Object.assign({}, object1, object2); 

console.log(combinedObject)


var obj1={ a : 10, b : 20}
var obj2={ c : 30, d : 40}
// console.log(obj1.concat(obj2))



// function combining 
function addOne(x) {
  return x + 1;
}

function multiplyByTwo(x) {
  return x * 2;
}

// Composing functions
function composedFunction(x) {
  return multiplyByTwo(addOne(x));
}

const result = composedFunction(5); // (5 + 1) * 2 = 12

console.log(result)





