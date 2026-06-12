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

// traffic light 
function trafficLight() {
  console.log("Red");

  setTimeout(() => {
    console.log("Yellow");

    setTimeout(() => {
      console.log("Green");

      setTimeout(() => {
        trafficLight();
      }, 2000);

    }, 1000);

  }, 3000);
}

trafficLight();

// stop watch
let seconds = 0;
let intervalid = null;
function start() {
  if (intervalid) return;
  intervalid = setInterval(() => {
    seconds++;
    console.log(seconds);
  }, 1000);
}

function pause() {
  clearInterval(intervalid);
  intervalId = null;
}

function reset() {
  pause();
  seconds = 0;
}
start();
pause();
reset();

