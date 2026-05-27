// error handlings

// try...catch
try{
    let result = 10/0;
    console.log(result)
}catch(error){
    console.log("error occured :",error.message)
}


// try...catch...finally
try{
    let x = JSON.parse("Invalid json")
}catch(error){
    console.log("parsing error")
}finally{
    console.log("This always runs")
}

// throw 
// let age = -1;
// if(age < 0){
//     throw new Error("Age cannot be negative")
// }

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

console.log(10,20)

// module import 

// import { add, sub } from './B.js';

// console.log(add(2, 3));
// console.log(sub(10,5));



// export default function greet() {
//   console.log("Hello!");
// }


// webstorage

// local storage
localStorage.setItem("name","Abdul")

let Name = localStorage.getItem(name)

console.log(Name)

localStorage.removeItem("name")

localStorage.setItem("message","Hello world")

let Message = localStorage.getItem("message")

console.log(Message)

localStorage.setItem("username","Abdul")

let UserName = localStorage.getItem("username")

localStorage.removeItem("username")

localStorage.clear()

// Store Object in localStorage

let USER = {name:"AbdulReahamn", age : 23}

localStorage.setItem("USER", JSON.stringify(USER))

let data = JSON.parse(localStorage.getItem("USER"))

console.log(data.name)

localStorage.clear()

// Check Key Exists

function keyExists(key) {
  return localStorage.getItem(key) !== null;
}

console.log(keyExists("user"));


// Persistent Counter

let count = localStorage.getItem("count") || 0;
document.getElementById("count").innerText= count;

function increment(){
    count++;
    localStorage.setItem("count",count)
    document.getElementById("count").innerText= count;
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
let user = sessionStorage.getItem("user");
console.log(user);


sessionStorage.setItem("session user","Rehaman")

let Users = sessionStorage.getItem("session user")
console.log(Users)




