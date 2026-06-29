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


// practice array coding tasks

// Find the Second Most Frequent Element
const arr = [2, 3, 2, 4, 5, 3, 2, 5, 5, 5, 4, 4];
const frequency = {};
for (const num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
}

const sorted = Object.entries(frequency).sort((a, b) => b[1] - a[1]);
console.log(sorted);

console.log("Second Most Frequent:", sorted[1][0]);


// Group Students by Grade
const students=[
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B" },
    { name: "John", grade: "A" },
    { name: "David", grade: "C" },
    { name: "Sara", grade: "B" }
]
const grouped = {}
for(let student of students){
    if (!grouped[student.grade]) {
        grouped[student.grade] = [];
    }

    grouped[student.grade].push(student.name);
}

console.log(grouped)


// Flatten a Nested Array (Without flat())
const arrr1 =  [1, [2, [3, 4], 5], [6, 7], 8];
function Flatten(array){
    let result = []
    for(let item of array){
        if(Array.isArray(item)){
             result = result.concat(Flatten(item));
        }else{
            result.push(item)
        }
    }
    return result;
}
console.log(Flatten(arrr1));

// Rotate Array by K Positions
const arrr2 = [10,20,30,40,50];
const k = 2;
function rotateRight(array, k) {
    k = k % array.length;
    return [
        ...array.slice(-k),
        ...array.slice(0, array.length - k)
    ];
}

console.log(rotateRight(arrr2, k));



