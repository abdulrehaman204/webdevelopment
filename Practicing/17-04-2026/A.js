//  selecting DOM elements

// id
let h1 = document.getElementById("h1")
console.log(h1)
h1.innerText="Hello! My Name is AbdulRehaman"
h1.style.color="green"
h1.style.textAlign="center"
h1.style.margin="30px"
h1.style.fontSize="30px"

// classname
let h2 = document.getElementsByClassName("h2")
console.log(h2)
h2[0].innerText="Welcome to our webpage"
h2[0].style.color="Red"
h2[0].style.textAlign="center"
h2[0].style.marginTop="30px"


//BY Tag Name
let paragraph = document.getElementsByTagName('p')
paragraph[0].style.color = "Blue";
paragraph[1].style.color = "Brown";
paragraph[0].style.textAlign = "center";
paragraph[1].style.textAlign = "center";
paragraph[0].style.fontSize = "20px";


// query selector
var element = document.querySelector('div')
element.style.color = "green";
element.style.textAlign = "center";
element.style.margin = "30px";
element.style.fontSize = "15px";


// query selector all
var elements = document.querySelectorAll('.demo')
elements[0].innerHTML="This is queryselector all"
elements[0].style.color = "Red";
elements[0].style.textAlign = "center";
elements[0].style.marginTop = "30px";


// createing DOM elements
let newelement = document.createElement('h1')
console.log(newelement)
newelement.innerText="New element created"



// DOM traversing elements
let name = document.getElementById("name")
console.log(name)

// parent element
let parentelement=name.parentElement
console.log(name.parentelement)

// children element
console.log(name.children)
console.log(parentelement.children)

// first element child
console.log(parentelement.firstElementChild)

// last element child
console.log(parentelement.lastElementChild)


// events
const button = document.getElementById('btn')
const msg = document.getElementById('message')


button.addEventListener("click",function(){
    msg.innerText="Button clicked"
})

button.addEventListener("mouseenter",function(){
    msg.innerText="Mouse is over the button"
})

button.addEventListener("mouseleave", function () {
    msg.innerText = "Mouse left the button!";
});

document.addEventListener("keydown",function(event){
    if(event.key ==="Enter"){
        msg.style.color="Green"
        msg.innerText="Enter key pressed"
    }
})


// Map()
var arr =[10,20,30,40]
var updated =arr.map((value)=>value+2)
console.log(arr)
console.log(updated)

// doubled numbers
var arr=[1,2,3,4]
var results = arr.map((val)=>val*2)
console.log(results)

// convert uppercase
var arr=["hello","abdul"]
var results =arr.map((str)=>str.toUpperCase())
console.log(results)


// filter()
let ar =[2,4,5,6,7]
let updatedar = ar.filter((value)=>value<=5)
console.log(ar)
console.log(updatedar)

var arr = ["apple", "banana", "grapes", "kiwi"];
const result = arr.filter(word => word.length > 5);
console.log(result)


let arr1 = [2, 4, 8, 10];
let updatedArr = arr1.slice().filter(val => val < 5);
console.log(arr1);
console.log(updatedArr);


// reduce()
let sum = [1,2,3,4,5]
let up = sum.reduce((acc,curr)=>acc+curr)
console.log(sum)
console.log(up)


var arr = [1, 2, 3, 4];
const result1 = arr.reduce((acc, num) => {
  if (num % 2 === 0) {
    acc.even.push(num);
  } else {
    acc.odd.push(num);
  }
  return acc;
}, { even: [], odd: [] });

console.log(result1)



// webstorages

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

// Store Object in localStorage

let USER = {name:"AbdulReahamn", age : 23}

localStorage.setItem("USER", JSON.stringify(USER))

let data = JSON.parse(localStorage.getItem("USER"))

console.log(data.name)

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
