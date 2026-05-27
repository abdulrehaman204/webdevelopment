
// promises 
let checkEven = new Promise((resolve, reject) => {
    let number = 4;
    if(number % 2 == 0)
        resolve("The number is even!")
     else reject("The number is odd!");
})
checkEven
.then((message)=>console.log("On sucess"))
.catch((error)=>console.log("On failure"))

// promises methods 

// Promise.all() Method
Promise.all([
    Promise.resolve("Task 1 completed"),
    Promise.resolve("Task 2 completed"),
    Promise.reject("Task 3 failed")
])
    .then((results) => console.log(results))
    .catch((error) => console.error(error));

//  Promise.allSettled() Method
Promise.allSettled([
    Promise.resolve("Task 1 completed"),
    Promise.reject("Task 2 failed"),
    Promise.resolve("Task 3 completed")
])
    .then((results) => console.log(results));

// Promise.race() Method
Promise.race([
    new Promise((resolve) => 
        setTimeout(()=>
            resolve("Task 1 completed"),1000)),
    new Promise((resolve) => 
        setTimeout(()=>
            resolve("Task 2 completed"),500))
])
    .then((results)=>console.log(results))

// Promise.any() Method
Promise.any([
    Promise.reject("Task 1 failed"),
    Promise.resolve("Task 2 completed"),
    Promise.resolve("Task 3 completed")
])
    .then((result)=>console.log(result))
    .catch((error)=>console.log(error))

// Promise.resolve() Method
Promise.resolve("Immediate success")
    .then((value) => console.log(value));

// Promise.reject() Method
Promise.reject("Immediate failure")
    .catch((error) => console.error(error));

// Promise.finally() Method
Promise.resolve("Task completed")
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log("Cleanup completed"));

//  Promise.prototype.then() Method
Promise.resolve(5)
.then((value)=>value*2)
.then((value)=>value+3)
.then((finalvalue)=>console.log(finalvalue))

// Dynamic Promise Creation
function async(taskname){
   return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(`${taskname} completed`)
        },1000)
   })
}
async("Download file").then((results)=>{
    console.log(results)
})

// error handlings
// try...catch
try{
   let results = Abdul;
   console.log(results)
}
catch(error){
    console.log("error occured : ",error.message)
}

// try, catch and finally
try {
  let result = riskyFunction();
  console.log(result);
} catch (error) {
  console.error("Something went wrong:", error.message);
} finally {
  console.log("This always runs");
}

// type error
try{
    let num = 5;
    console.log(num.toUpperCase())
}catch(error){
    console.log("Type error : ",error.message)
}finally{
    console.log("This always runs")
}

// try , catch, finally and throw 
try {
    let re = 10 / 0;
    if (!isFinite(re)) {
        throw new Error("Cannot divide by zero");
    }
    console.log(re);
} catch (error) {
    console.error("Error occurred:", error.message);
} finally {
    console.log("Execution completed");
}

// throwing custom error
function checkage(age){
    if(age<18){
        throw new Error("Age must be 18 or above")
    }
    console.log("Acess granted")
}
try{
    checkage(16)
}catch(error){
    console.log(error.message)
}

// handling Async 
async function fetchData() {
  try {
    let response = await fetch("https://api.example.com");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Fetch error:", error.message);
  }
}

// iterators 
const colors = ['red', 'green', 'blue'];
const GFG = colors[Symbol.iterator]();
console.log(GFG.next());
console.log(GFG.next());
console.log(GFG.next());
console.log(GFG.next());

// genarators
function* gfg() {
    yield 10;
    yield 20;
    yield 30;
}
const generator = gfg();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

function* demo() {
  console.log("Start");
  yield 1;
  console.log("Middle");
  yield 2;
  console.log("End");
}
const g = demo();
g.next(); // Start
g.next(); // Middle
g.next(); // End

// destrucing 
// objects
var users = {name:"Abdul",Age:23}
var {name,Age}=users
console.log(name,Age)

// renameing
var {name : username}=users
console.log(username)

// default values
var { country = "USA" } = users;
console.log(country)

// nested objects
const settings = { theme: { color: "blue" } };
const { theme: { color } } = settings; 
console.log(settings.theme)

// Arrays
const fruits = ["Apple", "Banana", "Cherry"];
const [first, second] = fruits;
console.log(first,second)

// default values
const nums = [10];
const [A, B = 50] = nums;
console.log(B); // 50

// swaping
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2, 1

// example 
const response = {
  status: 200,
  data: {
    user: ["A", "B"]
  }
};
const {
  data: { user }
} = response;
console.log(user);


// es6 destructuring
// map
const map = new Map();
map.set("name","Rehaman")
map.set(1,"number key")
console.log(map.get("name"))
console.log(map.size)

for (let [key, value] of map) {
  console.log(key, value);
}

// set
const set = new Set([1, 2, 2, 3]);
console.log(set);

set.add(4);
set.has(2);   
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

// output methods
// inner.HTML
let d= document.getElementById("gfg")
d.innerHTML="Hello Abdul"
d.style.color="green"
d.style.textAlign="Center"

// console.log
console.log("Hello, Mr.Abdul")

// document.write
document.write("hello")

// window.alert
// window.alert("Hello Abdul")

// window.print

// // window.prompt
//   let userInput = window.prompt("Please Enter your Input");
//         if (userInput !== null) {
//             window.alert("Hello, " + userInput + "!");
//         } else {
//             window.alert("You clicked Cancel or closed the prompt.");
//         }

// webstorages
// local storages
localStorage.setItem("Name","Abdul")
let Name = localStorage.getItem("Name")
console.log(Name)

localStorage.setItem("message","Hello world")
let Message = localStorage.getItem("message")
console.log(Message)

// removing the object
localStorage.removeItem("message")

// storing object
let USER = {name:"AbdulRehaman",age:23}
localStorage.setItem("USER", JSON.stringify(USER))
let data = JSON.parse(localStorage.getItem("USER"))
console.log(data.name)

// key exists
function checkkey(key){
    return localStorage.getItem(key) !== null;
}
console.log(checkkey("USER"))

// counter
let count =localStorage.getItem("count") || 0;
document.getElementById("count").innerText=count

function increment(){
    count++;
    localStorage.setItem("count",count)
    document.getElementById("count").innerText=count
}

// Save Input Field Data
let input = document.getElementById("name")
input.value = localStorage.getItem("name") || "";
input.addEventListener("input", ()=>{
    localStorage.setItem("name",input.value)
})

// toggle theme
let theme = localStorage.getItem("theme") || "light";
document.body.className = theme;
function Toggle(){
    theme = theme === "light"? "dark" : "white"
    localStorage.setItem("theme",theme)
    document.body.className=theme
}


// session storage 
// Save data
sessionStorage.setItem("user", "Abdul");
// Get data
let us = sessionStorage.getItem("user");
console.log(us);


sessionStorage.setItem("session user","Rehaman")
let Users = sessionStorage.getItem("session user")
console.log(Users)

// common methods
// parsint
console.log(parseInt("123"));      
console.log(parseInt("123.45"));   
console.log(parseInt("abc"));

// parsefloat
console.log(parseFloat("12.33"))
console.log(parseFloat("2.44px"))

// json.stringfy
const obj2 = { name: "Alice", age: 25 };
const str = JSON.stringify(obj2);
console.log(str);

// json.parse
const str1 = '{"name":"Abdul","age":25}';
const obj3 = JSON.parse(str1);
console.log(obj3.name); 

// tostring
let n = 10;
console.log(n.toString())

// tofixed
let num1 = 12.345;
console.log(num1.toFixed(2)); // "12.35"


// API calls
fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>data.json())
.then((result)=>console.log(result))

// API methods
// POST Request to Submit Data
const Data = {name : "Abdul", age : 23}
fetch("https://jsonplaceholder.typicode.com/users",{
    method : "POST",
    headers:{'content-type': 'application/json'},
    body : JSON.stringify(Data)
}
)
.then((response)=>response.json())
.then((result)=>console.log(result))

// PUT Request to Update Data
const updateddata = {id : 2, name : "Rehaman"}
fetch("https://jsonplaceholder.typicode.com/users/2",{
    method : "PUT",
    headers:{'content-type' : 'application/json'},
    body : JSON.stringify(updateddata)
})
.then((response)=>response.json())
.then((result)=>console.log(result))

// PATCH 
const updateddatas = {id : 1, name : "Rehaman"}
fetch("https://jsonplaceholder.typicode.com/users/2",{
    method : "PATCH",
    headers:{'content-type' : 'application/json'},
    body : JSON.stringify(updateddatas)
})
.then((response)=>response.json())
.then((result)=>console.log(result))

// DELETE Request to Remove Data
fetch("https://jsonplaceholder.typicode.com/users/1",{
    method : "DELETE"
})
.then((response)=>response.json())
.then((result)=>console.log("Deleted :",result))

// using with async and await
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetch('https://api.example.com/data')
  .then(response => {
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
  })
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Fetch error:', error.message));

  