// Array destructuring

var a=["Abdulrehaman",1,2,3,4,5]
let [A,B,C,D,E]=a
console.log(a[0])
console.log(a[1])
console.log(a)
console.log(A,B,C)


// nested array destructuring
const numbers = [1, [2, 3], 4, 5];

var [a, [b, c], d] = numbers;

console.log(a); 
console.log(b); 
console.log(c); 
console.log(d); 



// object destructuring

let obj={name:"Abdul rehaman",location:"Hyderabad"}
console.log(obj.name)
console.log(obj.location)

var M=obj.name
console.log(M)


// nested object destructuring

const user = {
  name: "Abdul",
  address: {
    city: "hyderabad",
    password: 12345
  }
};

const {
  name,
  address: { city, password }
} = user;

console.log(name); 
console.log(city); 
console.log(password);  



// mixed nested objects and arrays

const response = {
  status: 200,
  data: [
    {
      id: 1,
      user: { name1: "rehaman", age: 22 }
    }
  ]
};

const {
  data: [
    {
      user: { name1, age }
    }
  ]
} = response;

console.log(name1); 
console.log(age);  


// itterators and generators
for (i in a){
  console.log(i)
}


var num=[1,2,3]
var k=num[Symbol.iterator]()

console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())


// generators
function hi(){
  console.log("hello")
  return "abdul"
  console.log("hello")
}

console.log(hi())


function hello(){
  console.log("hi")
  console.log("hello")
  return "abdul"
}

console.log(hello())


function* hai(){
  yield "hi"
  yield "done"
  yield "complete"
}

var n=hai()
console.log(n.next())
console.log(n.next())
console.log(n.next())
console.log(n.next())



// webstorage 
// In this the data will be stores in the form of an object
// key value pairs
// setitem to store the data
// getitem to retrive the data
// removeitem to emove the data
// local and session storeages


// local storage
localStorage.setItem("name","abdul rehaman")

localStorage.setItem("role","webdeveloper")

console.log(localStorage.getItem("name"))

console.log(localStorage.getItem("role"))

localStorage.removeItem("role")

console.log(localStorage.getItem("role"))


// session storage
sessionStorage.setItem("name","abdul")

console.log(sessionStorage.getItem("name"))


sessionStorage.setItem("role","webdeveloper")

console.log(sessionStorage.getItem("role"))


sessionStorage.clear()


console.log(sessionStorage.getItem("name"))

console.log(sessionStorage.getItem("role"))
