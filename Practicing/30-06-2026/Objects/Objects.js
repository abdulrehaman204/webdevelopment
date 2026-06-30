// objects

// using new onject
const ob = new Object()
ob.name="Abdulrehaman"
ob.age=23
ob.role="Webdeveloper"
console.log(ob)

// accessing object
var obj={name:"abdul",age:23}
console.log(obj.name)
console.log(obj["age"])

// modifying objects
var obj={name:"abdul",age:23}
console.log(obj)
obj.age=25;
console.log(obj)

// adding object properties
var obj={name:"abdul",age:23}
obj.number=2
console.log(obj)

// removing object properties
var obj={name:"abdul",age:23}
delete obj.name;
console.log(obj)

//checking properties
var obj = { model: "Tesla" };
console.log("color" in obj);
console.log(obj.hasOwnProperty("model"));

// iterating 
var obj = { name: "Sourav", age: 23 };
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}

// merging objects
var obj1={name:"Abdul"}
var obj2={age:23}
var obj3={...obj1,...obj2}
console.log(obj3)


// object length
var obj = { name: "Sourav", age: 23 };
console.log(Object.keys(obj).length);


// object destructing
var user = {
  name: "Abdul",
  age: 23,
  city: "Paris"
};
var { name, age } = user;

console.log(name);
console.log(age);

// copying of objects

// normal copy
var arr = {Name:"Ravi",Role:"Developer"}
var ar=arr
console.log(ar)

// shallow copy
var obj = {Name : "Abdul",City : "Delhi", age : 23}
var obj1 = {...obj}
console.log(obj1)

// deep copy
var obj = {model: "Tesla", color : "red"}
var obj1 = JSON.parse(JSON.stringify(obj))
console.log(obj1)

// deep clone
var original = {
  name: "John",
  address: {
    city: "New York"
  }
};

var clone = structuredClone(original);
clone.address.city = "London";
console.log(original.address.city);


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

// find objects in highest value
var students = [
  { name: "Tom", score: 80 },
  { name: "Sara", score: 95 },
  { name: "Mike", score: 88 }
];

const topstudent = students.reduce((max,student)=>
 student.score> max.score ? student : max)
console.log(topstudent)

// loops in objects
var user = {Name : "AbdulRehaman",City : "Hyderabad"}
for(let key in user){
    console.log(`${key} : ${user[key]}`)
}

// convert object to array
var user = {Name : "AbdulRehaman",City : "Hyderabad"}
var result = Object.entries(user)
console.log(result)


// coding tasks about the objects

// Deep Clone
function deepclone(obj){
    if(obj===null || typeof obj !== "object"){
        return obj;
    }
    if(Array.isArray(obj)){
        return obj.map((item)=>deepclone(item))
    }
    const clone = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepclone(obj[key]);
        }
    }
    return clone;
}

const original1 = {
    name: "Alice",
    address: {
        city: "Delhi"
    },
    hobbies: ["Reading", "Coding"]
};
const copied = deepclone(original1)
copied.address.city = "Mumbai";
console.log(original1.address.city);


// Deep Equality
function isEqual(obj1, obj2) {
    if (obj1 === obj2) return true;

    if (
        obj1 === null ||
        obj2 === null ||
        typeof obj1 !== "object" ||
        typeof obj2 !== "object"
    ) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!keys2.includes(key)) {
            return false;
        }

        if (!isEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}

console.log(isEqual({ a: 1, b: { c: 2 } },{ a: 1, b: { c: 2 } })); 


// Flatten Object
function flatten(obj, prefix = "", result = {}) {
    for (let key in obj) {
        const newKey = prefix ? `${prefix}.${key}` : key;
        if (
            typeof obj[key] === "object" &&
            obj[key] !== null &&
            !Array.isArray(obj[key])
        ) {
            flatten(obj[key], newKey, result);
        } else {
            result[newKey] = obj[key];
        }
    }
    return result;
}
const obj5 = {
    user: {
        name: "Abdul",
        address: {
            city: "Hyderabad",
            state: "TS"
        }
    }
};

console.log(flatten(obj5));


// Unflatten Object
function unflatten(obj) {
    const result = {};
    for (let key in obj) {
        const parts = key.split(".");
        let current = result;

        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];

            if (i === parts.length - 1) {
                current[part] = obj[key];
            } else {
                if (!current[part]) {
                    current[part] = {};
                }
                current = current[part];
            }
        }
    }

    return result;
}

const input = {
    "user.name": "John",
    "user.address.city": "Hyderabad"
};

console.log(unflatten(input));


// Find Duplicate Objects
function findduplicates(arr){
    const count = {}
    const results = []
    for(const item of arr){
        count[item.id]=(count[item.id]||0)+1;
    }
    for(const item of arr){
        if(count[item.id]>1){
            results.push(item)
        }
    }
    return results;
}
const data = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 1, name: "C" },
    { id: 3, name: "D" }
];

console.log(findduplicates(data));


