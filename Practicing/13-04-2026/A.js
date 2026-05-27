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


// Timeout Handling with Promise.race() Method
let fetchdata = new Promise((resolve) => {
     setTimeout(()=>{
        resolve("Data loaded")
     },3000)
})
let timeout = new Promise(( reject) => {
    setTimeout(()=>{
        reject("Timeout!")
    },2000)
})
Promise.race([fetchdata,timeout])
.then((results)=>console.log(results))
.catch((error)=>console.log(error))



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



// Async function
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

console.log(1)
getdata()
console.log(2)


async function fetchData() {
  try {
    const response = await Promise.resolve({
      json: async () => ({
        userId: 1,
        id: 1,
        title: "Sample Post",
        body: "This is mock data for async/await demonstration"
      })
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();


// generators 

function* gFG() {
    yield 10;
    yield 20;
    yield 30;
}
const generator = gFG();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);


// iterators 
const colors = ['red', 'green', 'blue'];
const GFG = colors[Symbol.iterator]();
console.log(GFG.next());
console.log(GFG.next());
console.log(GFG.next());
console.log(GFG.next());

