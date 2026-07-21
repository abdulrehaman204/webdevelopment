// objects

// creating objects
var obj = {Name:"Abdul",Age:23}
console.log(obj)

// using new keyword
var ob = new Object()
ob.name="Rehaman"
ob.course="Bsc"
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
var obj = {RollNo:10,Class:8}
var obj1={Name:"Abdul"}
var obj2={...obj,...obj1}
console.log(obj2)

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

// loops in objects
var user = {Name : "AbdulRehaman",City : "Hyderabad"}
for(let key in user){
    console.log(`${key} : ${user[key]}`)
}

// convert object to array
var user = {Name : "AbdulRehaman",City : "Hyderabad"}
var result = Object.entries(user)
console.log(result)

// find objects in highest value
var students = [
  { name: "Tom", score: 80 },
  { name: "Sara", score: 95 },
  { name: "Mike", score: 88 }
];

const topstudent = students.reduce((max,student)=>
 student.score> max.score ? student : max)
console.log(topstudent)


// logical tasks using objects 

// Deep Object Flattening
var obj = {
    user : {
        name : "Abdul",
        address : {
            city : "Hyderabad",
            zip : 10001,
        }
    },
    active : true
}

function flattenObject(obj,prefix="",result={}){
    for(const key in obj){
        const value = obj[key]
        const newkey = prefix ?  `${prefix}.${key}` : key;
    if(value&&
        typeof value === 'object' &&
        !Array.isArray(value)
    ){
            flattenObject(value, newkey, result);
        } else {
            result[newkey] = value;
        }
    }
    return result;
}

console.log(flattenObject(obj))


// Group Users by Multiple Properties
var users = [
    {name:"A", dept:"IT", city:"Delhi"},
    {name:"B", dept:"HR", city:"Mumbai"},
    {name:"C", dept:"IT", city:"Delhi"},
    {name:"D", dept:"IT", city:"Pune"},
    {name:"E", dept:"HR", city:"Mumbai"}
];
var grouped = users.reduce((acc,user)=>{
    acc[user.dept]??={},
    acc[user.dept][user.city] ??= [];
    acc[user.dept][user.city].push(user);
    return acc;
},{})

console.log(grouped)

// Find Differences Between Two Nested Objects
var obj1 = {
    name:"Abdul",
    age:23,
    address:{
        city:"London",
        zip:10001
    }
};

var obj2 = {
    name:"Abdul",
    age:32,
    address:{
        city:"Paris",
        zip:10001
    }
};
function diff(obj1, obj2) {
    const result = {};

    for (const key in obj1) {
        if (
            typeof obj1[key] === "object" &&
            obj1[key] &&
            typeof obj2[key] === "object"
        ) {
            const nested = diff(obj1[key], obj2[key]);
            if (Object.keys(nested).length) {
                result[key] = nested;
            }
        } else if (obj1[key] !== obj2[key]) {
            result[key] = {
                old: obj1[key],
                new: obj2[key]
            };
        }
    }

    return result;
}

console.log(diff(obj1, obj2));

// Build Tree from Flat Object List
const categories = [
    {id:1,parent:null,name:"Electronics"},
    {id:2,parent:1,name:"Laptop"},
    {id:3,parent:1,name:"Phone"},
    {id:4,parent:2,name:"Gaming"}
];
function buildTree(data) {
    const map = {};
    const roots = [];

    data.forEach(item => {
        map[item.id] = { ...item, children: [] };
    });

    data.forEach(item => {
        if (item.parent === null) {
            roots.push(map[item.id]);
        } else {
            map[item.parent].children.push(map[item.id]);
        }
    });

    return roots;
}

console.log(buildTree(categories));

