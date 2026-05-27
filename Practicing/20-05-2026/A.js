// event performances

// Normal event 

let count1 = 0;
document.getElementById('btn1').addEventListener("click",()=>{
    count1++;
    document.getElementById('count1').innerText=count1;
})


const input1 = document.getElementById("input");
const output1 = document.getElementById("output1");

input1.addEventListener("keyup", (e) => {
    output1.innerText = e.target.value;
});


// Throttling

function throttle(fn, delay) {
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            fn(...args);
        }
    };
}

function handleClick() {
    console.log("Clicked");
}

const throttledClick = throttle(handleClick, 2000);

document.getElementById("btn")
.addEventListener("click", throttledClick);


// Debouncing 

function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

function search(e) {
    console.log("Searching:", e.target.value);
}

const debouncedSearch = debounce(search, 1000);

document.getElementById("search")
.addEventListener("keyup", debouncedSearch);


// Browser API's 

// setinterval and clearinterval

// Countdown Timer (10 → 0)
let count =10;

let timer = setInterval(() => {
    document.getElementById("count").innerText=count;
    count--;
    if(count<0){
        clearInterval(timer)
        console.log("countdown finished")
    }
},1000);


// settimeout
setTimeout(() => {
    document.getElementById("msg").innerText="Message Loaded!"
},2000);


// cleartimeout
let Timer ;
document.getElementById("start").addEventListener("click",()=>{
  Timer = setTimeout(() => {
     document.getElementById("mssg").innerText="Hello after 2 secounds delay!"
  },2000);
})

document.getElementById("cancel").addEventListener("click",()=>{
    clearTimeout(Timer)
     document.getElementById("mssg").innerText="Cancelled!"
})


// Asynchronous javascript
console.log("Start")
setTimeout(() => {
    console.log("Async task")
},2000);
console.log("End")

// callbacks
function greet(name,callbacks){
    console.log("Hello " +  name)
    done()
}
function done(){
    console.log("Task completed")
}

greet("Abdul",done)

// Async callback
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 2000);
}

fetchData(() => {
    console.log("Processing data");
});


// Promises
let promise = new Promise((resolve, reject) => {
    let success = false;
    if(success){
        resolve("Task completed successfully")
    }
    else{
        reject("Task failed")
    }
})

promise
.then((result)=>console.log(result))
.catch((error)=>console.log(error))

// Async promises
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

fetchData()
    .then(data => console.log(data));


// Async/Await
function fetchdata() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data loaded");
        }, 2000);
    });
}

async function getData() {
    const result = await fetchdata();
    console.log(result);
}

getData();


// multiple awaits
function step1() {
    return Promise.resolve("Step 1");
}

function step2() {
    return Promise.resolve("Step 2");
}

async function run() {
    const r1 = await step1();
    console.log(r1);

    const r2 = await step2();
    console.log(r2);
}

run();


// webstorages
// local storage
const input = document.getElementById("name");
const output = document.getElementById("output");

document.getElementById("save").addEventListener("click", () => {
    localStorage.setItem("username", input.value);
    output.innerText = "Saved!";
});

const savedName = localStorage.getItem("username");
if (savedName) {
    output.innerText = "Welcome " + savedName;
}


// todolist
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function render() {
    document.getElementById("list").innerHTML = "";

    tasks.forEach((t) => {
        let li = document.createElement("li");
        li.innerText = t;
        document.getElementById("list").appendChild(li);
    });
}

document.getElementById("add").addEventListener("click", () => {
    const task = document.getElementById("task").value;

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    render();
});

render();

// remove localstorage
document.getElementById("remove").addEventListener("click", () => {
    localStorage.removeItem("username");
    console.log("Removed");
});

localStorage.clear();
console.log("All data cleared");

// session storage

document.getElementById("login").addEventListener("click",()=>{
    const user = document.getElementById("user").value

    sessionStorage.setItem("user",user)
     document.getElementById("msge").innerText = "Logged in as " + user;
})

const user = sessionStorage.getItem("user")
document.getElementById("msge").innerText="Welcome back "+ user

