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


// coding task on array concept
// sum of array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4])); 

// find largest
function findLargest(arr) {
  return Math.max(...arr);
}
console.log(findLargest([5, 10, 3, 20]));

// reverse an array
function reverseArray(arr) {
  return [...arr].reverse();
}
console.log(reverseArray([1, 2, 3, 4]));

// remove duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1,2,2,3,4,4]));

// count accurance
function countOccurrences(arr, target) {
  return arr.filter(item => item === target).length;
}
console.log(countOccurrences([1,2,2,3,2], 2));

// find even 
function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log(getEvenNumbers([1,2,3,4,5,6]));

// sort array
function sortAscending(arr) {
  return [...arr].sort((a, b) => a - b);
}
console.log(sortAscending([5,1,9,2]));

// find second largest
function secondLargest(arr) {
  const unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);

  return unique[1];
}
console.log(secondLargest([10,5,8,20,20]));

// rotate array
function rotateRight(arr) {
  const last = arr.pop();
  arr.unshift(last);

  return arr;
}
console.log(rotateRight([1,2,3,4]));

