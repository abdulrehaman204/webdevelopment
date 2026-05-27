// Looping statements

// forloop
for(let i=0;i<5;i++){
    console.log(i)
}

// for in loop (objects)
let person={name:"Abdul",age:23}
for(let key in person){
    console.log(key,":",person[key])
}

// for each (arrays)
let numbers = [10,20,30,40]
numbers.forEach(function (num){
   console.log(num)
})

// while loop
var i=0;
while(i<=3){
    console.log("Numbers :",i)
    i++;
}

// do while loop
var i=1;
do{
    console.log("Iteration :",i)
    i++
}while(i<=3)


// Print all even numbers between 1 and 50 using a while loop.
var i=1;
while(i<=50){
    if(i%2==0){
        console.log("even numbers 1 to 50 is",i)
    }
    i++;
}

// Reverse a number using a loop
function reverseNumber(num) {
  let rev = 0;
  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return rev;
}
console.log(reverseNumber(12345))

// sum of digits
function sumDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(sumDigits(12345))

// polindrome check
function ispolindrome(num){
    let original = num;
    let rev =0;
    while(num>0){
        rev=rev*10+(num%10);
        num=Math.floor(num/10)
    }
    return original === rev;
}
console.log(ispolindrome(22))


// objects 
var obj = {
    name : "Abdul",
    Age : 23,
    job : "developer",
}
console.log(obj)

// use new keyword
var obj = new Object()
obj.name="Rehaman"
obj.Age=22
console.log(obj)

// Accessing Object Properties
console.log(obj.name)
console.log(obj["name"])

// Modifying Object Properties
var obj = {car : "Thar",Model : 2025}
obj.Model = 2026
console.log(obj)

// Adding Properties to an Object
var obj = {car:"Thar",Model:2026}
obj.color="Black"
console.log(obj)

// Removing Properties from an Object
var obj = {car:"Thar",Model:2026}
delete obj.Model;
console.log(obj)

// Checking if a Property Exists
var obj = { model: "Tesla" };
console.log("color" in obj);
console.log(obj.hasOwnProperty("model"));

// Iterating Through Object Properties
var obj = {car:"Thar",Model:2026}
for(let key in obj){
     console.log(key,":",obj[key])
}

// Merging Objects
let obj1 = { name: "Sourav" };
let obj2 = { age: 23};
let obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// Object Length
var obj = { name: "Sourav", age: 23 };
console.log(Object.keys(obj).length);

// Object literal
const obj4 = { key: "value" };

// Object constructor
const obj5 = new Object();
obj5.key = "value";
console.log(obj4);
console.log(obj5);

// normalcopy of object
var obj = {name:"Abdul",age:23}
var obj6=obj
console.log(obj6)

// shallow copy
var obj = {name:"Abdul",age:23}
var obj6 = {car:"Thar",color:"Black",model:2026}
var obj7 = {...obj,...obj6}
console.log(obj7)

// deep copy
var obj = {name:"Abdul",age:23}
var obj6 = JSON.parse(JSON.stringify(obj))
console.log(obj6)

// structured clone
var obj = {Name:"Abdul",age : 23}
var obj6 = structuredClone(obj)
console.log(obj6)

// destrucing 
let { name, age } = person;
console.log(person)

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


// selecting DOM elements
// get element by id
var element = document.getElementById("h1")
console.log(element)
element.style.color="green";
element.style.textAlign = "center";
element.style.margin = "30px";
element.style.fontSize = "30px";

// get element by classname
var elements = document.getElementsByClassName('selector');
elements[0].style.color = "Red";
elements[0].style.textAlign = "center";
elements[0].style.marginTop = "30px";

// get element by tagname
let paragraph = document.getElementsByTagName('p')
paragraph[0].style.color = "Blue";
paragraph[1].style.color = "Brown";
paragraph[0].style.textAlign = "center";
paragraph[1].style.textAlign = "center";
paragraph[0].style.fontSize = "20px";

// get element by queryselector
var element = document.querySelector('div')
element.style.color = "green";
element.style.textAlign = "center";
element.style.margin = "30px";
element.style.fontSize = "15px";

// get element by query selector all
var elements = document.querySelectorAll('.demo')
elements[0].innerHTML="This is queryselector all"
elements[0].style.color = "Red";
elements[0].style.textAlign = "center";
elements[0].style.marginTop = "30px";

// add event listener
var button = document.getElementById('btn')
button.addEventListener("click", function(){
    document.getElementById('try').innerText="You clicked the button"
})

button.style.backgroundColor="yellow"
button.style.alignItems="center"
button.style.cursor="pointer"
button.style.padding="10px"

// creating DOM element
var newelement = document.createElement('h1')
console.log(newelement)
newelement.innerHTML="New element created"

// append 
let parent = document.getElementById("list");
let newItem = document.createElement("li");
newItem.textContent = "New Item";
parent.append(newItem);

// prepend
newItem.textContent = "First Item";
parent.prepend(newItem);

// remove
let item = document.getElementById("item");
item.remove();

// adding events
let btn = document.getElementById('mybutton')
let msg = document.getElementById("message")

btn.addEventListener("click",function(){
    btn.style.backgroundColor="Lightblue"
    msg.innerText="Button was clicked"
})

btn.addEventListener("mouseenter", function () {
     msg.innerText = "Mouse is over the button!";
});

btn.addEventListener("mouseleave", function () {
    msg.innerText = "Mouse left the button!";
});

btn.addEventListener("keydown",function(){
     if (event.key === "Enter") {
    msg.style.color = "green";
    msg.innerText = "Enter key pressed!";
    }
})


// event handlings
// event buubbling
document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

// event capturing
document.getElementById("parent").addEventListener("click",
  () => console.log("Parent clicked"),
  true
);

document.getElementById("child").addEventListener("click",
  () => console.log("Child clicked"),
  true
);

// event delegation
document.getElementById("List").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});


// event performance
// normal event
let A = document.getElementById("button")
let c=0;
A.addEventListener("click",()=>{
    c++;
    console.log("Button clicked",c)
})

// Throttling 
let lastclick = 0;
let AC = 0;
A.addEventListener("click",()=>{
  let current = Date.now();
   if(current - lastclick > 2000){
      AC++;
      console.log("Throttling",AC)
      lastclick = current;
   }
})

// Debouncing
let AA =0;
let AAA = setTimeout(()=>{
      AA++;
      console.log("Debouncing",AA)
},1000)
clearTimeout(AAA)


// browser APIs
// set timeout
setTimeout(()=>{
     console.log("It runs after 2 seconds")
},2000)

function greek(){
    console.log("Hello! Abdul")
}
setTimeout(greek,2000)

// auto start timer
let id4 = setInterval(() => {
  console.log("Running...");
}, 1000);

setTimeout(() => {
  clearInterval(id4);
}, 1000);

// cancel timeout
let id2 = setTimeout(() => {
  console.log("This won't run");
}, 5000);

setTimeout(() => {
  clearTimeout(id2);
}, 2000);

// set interval
let a = setInterval(()=>{
    console.log("It runs every 2 seconds")
},2000)

clearInterval(a)

// countdown timer
let count=5;
let id = setInterval(()=>{
    console.log(count)
    count--;
    if(count==0){
        clearInterval(id)
    }
},1000)

// digital clock
let B=setInterval(() => {
    let now =new Date();
    let time =now.toLocaleTimeString();
    console.log(time)
    clearInterval(B)
},1000);

// type edit
let text = "Hello";
let index = 0;
let id3=setInterval(() => {
    console.log(text.slice(0,index+1))
    index++;
    if(index==text.length){
        clearInterval(id3)
    }
},1000);


// clear timeout
let timeoutId = setTimeout(() => {
  console.log("This won't run");
}, 3000);

clearTimeout(timeoutId);


// clear interval
let intervalId = setInterval(() => {
  console.log("Running...");
}, 1000);

clearInterval(intervalId);


// Asynchronous 
// promises
let checkeven = new Promise((resolve, reject) => {
  let number = 4;
  if(number % 2 == 0){
    resolve("number is even")
  } else{
    reject("number is not a even")
  }
})
checkeven
.then((message)=>console.log("sucess"))
.catch((error)=>console.log("failure"))

// Async
let data = async()=>{
    let a = "Hello world"
    return a;
}

data().then((a)=>console.log(a))

// Await function 
let getdata = async()=>{
    let y = await "Hello! Abdul";
    console.log(y)
}
getdata()

// Wrapping Callbacks into Promises
function loadData(callback) {
    setTimeout(() => 
        callback("Data loaded"), 1000);
}
function promisifiedLoadData() {
    return new Promise((resolve) => {
        loadData((result) => 
            resolve(result));
    });
}
promisifiedLoadData().then((data) => 
    console.log(data));