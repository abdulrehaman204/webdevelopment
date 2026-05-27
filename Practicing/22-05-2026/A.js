// Arrays
// Creating an Array and Initializing with Values
let a1 = ["HTML", "CSS", "JS"];

// Accessing Array Elements
console.log(a1[0]);
console.log(a1[1]);
// All Array methods

// Array length
var a = ["HTML","CSS","JS","React"]
console.log(a.length)

// tostring()
var a = ["HTML","CSS","JS","React"]
var s = a.toString()
console.log(s)

// join()
var a = ["HTML","CSS","JS","React"]
var s = a.join('|')
console.log(s)

// delete operator
var a = ["HTML","CSS","JS","React"]
var s = delete a[2]
console.log(s)

// concat()
var a = ["HTML","CSS","JS","React"]
var b = [11,12,13,14]
var s = a.concat(b)
console.log(s)

// flat()
var a = [1,2,3,[4,5,[6,7]],[8,9]]
var s = a.flat(Infinity)
console.log(s)

// push()
var a = ["HTML","CSS","JS","React"]
var b = a
b.push("SQl")
console.log(b)

// unshift()
var a = ["HTML","CSS","JS","React"]
a.unshift("Node.js")
console.log(a)

// pop()
var a = ["HTML","CSS","JS","React"]
a.pop()
console.log(a)

// shift()
var a = ["HTML","CSS","JS","React"]
a.shift()
console.log(a)

// splice()
var a = ["HTML","CSS","JS","React"]
a.splice(1,0,"C++")
console.log(a)

a.splice(1,3)
console.log(a)

var a = [1,2,3,4,5]
a.splice(1,3,6,7,8)
console.log(a)

// slice()
var a = ["HTML","CSS","JS"]
var b = a.slice(1,3)
console.log(b)

var a = [1,2,3,4,5]
var b = a.slice(1,3)
console.log(b)
console.log(a)

// some()
var a = [1, 2, 3, 4, 5];
var res = a.some((val) => val >= 5);
console.log(res);

// map()
var a = [4, 9, 16, 25];
var sub = a.map(geeks);

function geeks() {
    return a.map(Math.sqrt);
}
console.log(sub);

// filter()
var a = [1,2,3,4,5]
var b = a.filter((num)=>num>2)
console.log(b)

// reduce()
var a = [88, 50, 25, 10];
var sub = a.reduce(geeks);

function geeks(tot, num) {
    return tot - num;
}
console.log(sub);

// reverse()
var a = [1,2,3,4,5]
a.reverse()
console.log(a)

// values()
var a = ["Apple", "Banana", "Cherry"];
var res = a.values();

for (const value of res) {
    console.log(value);
}

// sort()
var a = [70,50,30,80,100]
a.sort()
console.log(a)

// index of ()
var beasts = ["ant", "bison", "camel", "duck", "bison"];
var b = beasts.indexOf("camel")
console.log(beasts.indexOf("camel",2))
console.log(beasts.indexOf("Hello"))
console.log(b)

// includes ()
var a = [1,2,3,4,5]
var b = a.includes(4)
console.log(b)

// last index of ()
var a = [1,2,3,4,5,3]
a.length = 0
console.log(a.length)
console.log(a.lastIndexOf(3))


// copying of arrays 
// normal copy
var arrr = [1,2,3,4,5]
var arr2 = arrr
console.log(arr2)

// shallow copy
var arrr = [1,2,3,4,5]
var arr2 = [...arrr]
console.log(arr2)

// deep copy
var arrr = [1,2,3,4,5]
var arr2 = JSON.parse(JSON.stringify(arrr))
console.log(arr2)


// array coding questions 
// Sum of Array Elements
function sumarray(arr){
    return arr.reduce((sum,num)=>sum+num,0)
}
console.log(sumarray([1,2,3,4,5]))

// Find Maximum Number
function maximum(arr){
      return Math.max(...arr)
}
console.log(maximum([22,33,12,23,56,98,76]))

// Reverse an Array (Without reverse())
function reversed(arr){
    let  result = []
    for(let i = arr.length-1;i>=0;i--){
        result.push(arr[i])
    }
    return result;
}

console.log(reversed([1,2,3,4,5]))

// Count Even Numbers
function counteven(arr){
    let count =0;
    for(let num of arr){
        if(num%2===0){
            count++;
        }
    }
    return count;
}
console.log(counteven([1,2,3,4,5,6,7,8]))

// Remove Duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1,2,2,3,4,4]));

// Find Second Largest Number
function secondLargest(arr) {
  let unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);

  return unique[1];
}

console.log(secondLargest([10, 5, 8, 20]));


// Rotate Array
function rotate(arr, k) {
  k = k % arr.length;

  return arr.slice(-k).concat(arr.slice(0, -k));
}

console.log(rotate([1,2,3,4,5], 2));

// Check if Array is Sorted
function issorted(arr){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            return false;
        }
    }
    return true;
}
console.log(issorted([1,3,2,47,8,2]))

// missing numbers
function findMissing(arr) {
  let n = arr.length + 1;

  let total = (n * (n + 1)) / 2;

  let sum = arr.reduce((a, b) => a + b, 0);

  return total - sum;
}

console.log(findMissing([1,2,4,5])); 

// Merge Arrays Alternately
function mergeAlt(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
    result.push(arr2[i]);
  }

  return result;
}

console.log(mergeAlt([1,2,3], ['a','b','c']));


// objects 
var obj = {
    name : "Abdul",
    Age : 23,
    job : "developer",
}
console.log(obj)

// use new keyword
var obj = new Object()
obj.name="Rehaman"
obj.Age=22
console.log(obj)

// Accessing Object Properties
console.log(obj.name)
console.log(obj["name"])

// Modifying Object Properties
var obj = {car : "Thar",Model : 2025}
obj.Model = 2026
console.log(obj)

// Adding Properties to an Object
var obj = {car:"Thar",Model:2026}
obj.color="Black"
console.log(obj)

// Removing Properties from an Object
var obj = {car:"Thar",Model:2026}
delete obj.Model;
console.log(obj)

// Checking if a Property Exists
var obj = { model: "Tesla" };
console.log("color" in obj);
console.log(obj.hasOwnProperty("model"));

// Iterating Through Object Properties
var obj = {car:"Thar",Model:2026}
for(let key in obj){
     console.log(key,":",obj[key])
}

// Merging Objects
let obj1 = { name: "Sourav" };
let obj2 = { age: 23};
let obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// Object Length
var obj = { name: "Sourav", age: 23 };
console.log(Object.keys(obj).length);

// Object literal
const obj4 = { key: "value" };

// Object constructor
const obj5 = new Object();
obj5.key = "value";
console.log(obj4);
console.log(obj5);

// normalcopy of object
var obj = {name:"Abdul",age:23}
var obj6=obj
console.log(obj6)

// shallow copy
var obj = {name:"Abdul",age:23}
var obj6 = {car:"Thar",color:"Black",model:2026}
var obj7 = {...obj,...obj6}
console.log(obj7)

// deep copy
var obj = {name:"Abdul",age:23}
var obj6 = JSON.parse(JSON.stringify(obj))
console.log(obj6)

// structured clone
var obj = {Name:"Abdul",age : 23}
var obj6 = structuredClone(obj)
console.log(obj6)

// math methods
let d = new Date()
console.log(d)
console.log(Math.floor(3.7))
console.log(Math.ceil(5.02))
console.log(Math.round(4.7))
console.log(Math.sqrt(5))
console.log(Math.pow(5,3))
console.log(Math.random()*10)
console.log(Math.max(12,0,54,78,888))
console.log(Math.min(12,0,54,78,888))

// sum of object values
const marks = {
  math: 80,
  science: 90,
  english: 70
};

let sum = 0;

for (let key in marks) {
  sum += marks[key];
}

console.log(sum);

// largest value in object
const scores = {
  john: 85,
  jane: 92,
  sam: 78
};

let max = 0;

for (let key in scores) {
  if (scores[key] > max) {
    max = scores[key];
  }
}

console.log(max);

// shoping cart total
const cart = [
  { name: "Phone", price: 500 },
  { name: "Case", price: 50 }
];

const total = cart.reduce((sum, item) => {
  return sum + item.price;
}, 0);

console.log(total);

// remove duplicates from objects
const users = [
  { id: 1, name: "John" },
  { id: 1, name: "John" },
  { id: 2, name: "Alice" }
];

const unique = [
  ...new Map(users.map(user => [user.id, user])).values()
];

console.log(unique);


