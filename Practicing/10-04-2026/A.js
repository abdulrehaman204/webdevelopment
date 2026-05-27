// Asynchronous functions 

// set time out
setTimeout(()=>{
    console.log("Runs after 2 seconds")
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
}, 10000);

// cancel timeout
let id2 = setTimeout(() => {
  console.log("This won't run");
}, 5000);

setTimeout(() => {
  clearTimeout(id2);
}, 2000);


// set interval
let A = setInterval(()=>{
    console.log("It runs every 2 seconds")
},2000)

clearInterval(A)

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


// DOM concepts

// event bubbling
document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});


// event capturing
document.getElementById("parent").addEventListener("click",()=>{
    console.log("parent cliclked")
},
true
);

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});


// event delegation
document.getElementById("list").addEventListener("click",(e)=>{
    console.log(e.target.textContent)
})


// DOM events

// Normal event

let AB = document.getElementById("btn")
let C = 0;
AB.addEventListener("click",()=>{
  C++;
  console.log("button clicked",C)
})


// Throttling

let lastclick = 0;
let AC = 0;
AB.addEventListener("click",()=>{
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
