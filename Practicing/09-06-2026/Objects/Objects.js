// objects 

// using new object
const ob= new Object()
ob.name="rehaman",
ob.age=24,
ob.job="Developer"

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
var obj = {Name : "AbdulRehaman",City : "Hyderabad"}
var obj1 = obj 
console.log(obj1)

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

const topStudent = students.reduce((max, student) =>
  student.score > max.score ? student : max
);
console.log(topStudent);

// loop in objects
var user = {Name : "AbdulRehaman",City : "Hyderabad"}
for(const key in user){
    console.log(`${key} : ${user[key]}`)
}

// convert object to array
var user = {Name : "AbdulRehaman",City : "Hyderabad"}
var results = Object.entries(user)
console.log(results)




