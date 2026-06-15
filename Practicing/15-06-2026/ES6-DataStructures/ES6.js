// es6 destructuring

// map
const map = new Map();
map.set("name","Rehaman")
map.set(1,"number key")
console.log(map.get("name"))
console.log(map.size)

for (let [key, value] of map) {
  console.log(key , value);
}

// set
const set = new Set([1, 2, 2, 3]);
console.log(set);

set.add(4);
console.log(set.has(2));   
set.delete(1);
set.size;
console.log(set)

const numS = [1, 2, 2, 3];
const unique = [...new Set(numS)];
console.log(unique);

// weak map
let obj = {};
const weakMap = new WeakMap();
weakMap.set(obj, "data");
obj = null; // garbage collector can clean it
console.group(obj)

// weak set
let obj1 = {};
const weakSet = new WeakSet();
weakSet.add(obj1);
obj1 = null; // eligible for garbage collection
console.log(obj1)


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

