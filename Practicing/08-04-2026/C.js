// copying of arrays

// 1. normal copy
var arr = [1,2,3,4,5]
var copy = arr
console.log(copy)


// 2. shallow copy
var arr = [1,2,3,4,5]
var copy = [...arr]
console.log(copy)

// slice()
var arr = [1,2,3,4,5]
var copy =arr.slice()
console.log(copy)

// from()
var arr = [1,2,3,4,5]
var copy =Array.from(arr)
console.log(copy)

// concat()
var arr = [1,2,3,4,5]
var copy =[].concat(arr)
console.log(copy)


// 3. Deep copy
var arr = [1,2,3,4,5]
var copy =JSON.parse(JSON.stringify(arr))
console.log(copy)

// structured clone
var arr = [1,2,3,4,5]
var copy =structuredClone(arr)
console.log(copy)


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


// copying of objects

// normal copy
var obj = {Name:"Abdul",age : 23}
var obj1 = obj
console.log(obj1)


// shallow copy
var obj = {Name:"Abdul",age : 23}
var obj1 = {...obj}
console.log(obj1)

// assign()
var obj = {Name:"Abdul",age : 23}
var obj1 = Object.assign({},obj)
console.log(obj1)

// deep copy
var obj = {Name:"Abdul",age : 23}
var obj1 = JSON.parse(JSON.stringify(obj))
console.log(obj1)

// structured clone
var obj = {Name:"Abdul",age : 23}
var obj1 = structuredClone(obj)
console.log(obj1)

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


// destructing 
var a = [10, 20, 30, 40]

console.log("Example 1");
const [x, y, z, w] = a;
console.log(x);
console.log(y);
console.log(z);
console.log(w);

const [p, q, , r] = a;
console.log("Example 2");
console.log(p);
console.log(q);
console.log(r);

var [s, t] = a;
console.log("Example 3");
console.log(s);
console.log(t);

