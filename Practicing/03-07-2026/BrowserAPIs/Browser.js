// browser APIs
// set timeout
setTimeout(()=>{
     console.log("It runs after 2 seconds")
},2000)

function greek(){
    console.log("Hello! Abdul")
}
setTimeout(greek,2000)


// clearTimeout()
const timer = setTimeout(() => {
    console.log("This won't run");
}, 5000);

clearTimeout(timer);
console.log("Timeout cancelled");


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
var count=5;
let id = setInterval(()=>{
    console.log(count)
    count--;
    if(count==0){
        clearInterval(id)
        console.log(" Timer stop")
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


// logical tasks

// Traffic Light Simulation (Recursive setTimeout)
function trafficlight(){
    console.log("🔴 Red");
    setTimeout(() => {
        console.log("🟡 Yellow");
        setTimeout(() => {
            console.log("🟢 Green");
            setTimeout(trafficlight, 4000);
        },2000);
    },3000);
}

trafficlight();


// Debounce Search Input (setTimeout + clearTimeout)
let timers;
function search(query) {
    console.log("Searching:", query);
}
function handleInput(query) {
    clearTimeout(timers);

    timers = setTimeout(() => {
        search(query);
    }, 500);
}
// Simulate typing
handleInput("J");
handleInput("Ja");
handleInput("Jav");
handleInput("Java");
handleInput("JavaScript");


// Countdown Timer with Pause and Resume
let count1 = 10;
let timerss = null;
function start() {
    timerss = setInterval(() => {
        console.log(count1);
        count--;
        if (count1 < 0) {
            clearInterval(timerss);
            console.log("Finished");
        }
    }, 1000);
}
function pause() {
    clearInterval(timerss);
    console.log("Paused");
}
function resume() {
    start();
}
start();

// Pause after 4 seconds
setTimeout(pause, 4000);

// Resume after 7 seconds
setTimeout(resume, 7000);


// Retry API Every 3 Seconds Until Success
let attempts = 0;

const retry = setInterval(() => {
    attempts++;
    console.log(`Attempt ${attempts}`);
    if (attempts === 4) {
        console.log("API Success");
        clearInterval(retry);
    }
}, 3000);


