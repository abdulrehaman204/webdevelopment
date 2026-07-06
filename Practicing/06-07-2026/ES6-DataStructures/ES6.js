// 1. Set (Unique Values Collection)
// A Set stores only unique values (no duplicates).

var numbers = new Set();
numbers.add(10);
numbers.add(20);
numbers.add(10); 
console.log(numbers); 

var set = new Set([1, 2, 3, 3, 4]);
set.add(5);
set.delete(2);
console.log(set.has(3)); 
console.log(set.size);

var set = new Set(["a", "b", "c"]);
for (let value of set) {
    console.log(value);
}

const arr = [1, 2, 2, 3, 3, 4];
const unique = [...new Set(arr)];
console.log(unique);


// 2. Map (Key-Value Collection)
// A Map stores key-value pairs (keys can be any type).

var map = new Map();
map.set("name", "Abdul");
map.set(1, "one");
map.set(true, "boolean value");
console.log(map.get("name")); 

var map = new Map();
map.set("a", 100);
map.set("b", 200);
console.log(map.has("a"));
console.log(map.size); 
map.delete("a");

var map = new Map([
    ["name", "Alice"],
    ["age", 23]
]);
for (let [key, value] of map) {
    console.log(key, value);
}

// 3. WeakSet
// A WeakSet only stores objects and holds weak references (garbage collected automatically).

let obj1 = { name: "Abdul" };
let obj2 = { name: "praveen" };
const ws = new WeakSet();
ws.add(obj1);
ws.add(obj2);
console.log(ws.has(obj1)); 


// 4. WeakMap
// A WeakMap stores key-value pairs where:
// Keys must be objects
// Keys are weakly referenced

let user = { name: "John" };
const wm = new WeakMap();
wm.set(user, "Admin");
console.log(wm.get(user)); 



// coding problems
// Remove duplicates using Set
function array(arr){
   return [...new Set(arr)]
} 
console.log(array([1,2,2,3,4,5,6,6,6]))

// Word frequency counter using Map
function wordCount(str) {
  const map = new Map();
  const words = str.split(" ");
  for (let word of words) {
    map.set(word, (map.get(word) || 0) + 1);
  }
  return map;
}
console.log(wordCount("apple banana apple orange apple"));

// Unique characters in a string
function isUnique(str) {
  const set = new Set(str);
  return set.size === str.length;
}

console.log(isUnique("abc")); 
console.log(isUnique("aabc")); 

// Simple cache using Map
const cache = new Map();
function slowSquare(n) {
  if (cache.has(n)) {
    return cache.get(n);
  }
  const result = n * n; 
  cache.set(n, result);
  return result;
}

console.log(slowSquare(5)); 
console.log(slowSquare(5)); 

// Private user data using WeakMap
const privateData = new WeakMap();

class User {
  constructor(name, age) {
    privateData.set(this, { name, age });
  }
  getName() {
    return privateData.get(this).name;
  }
}
const u1 = new User("Abdul", 23);
console.log(u1.getName())




