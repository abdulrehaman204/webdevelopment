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


// logical tasks

// Total Price Calculator
const getPrice1 = () => Promise.resolve(100);
const getPrice2 = () => Promise.resolve(200);
const getPrice3 = () => Promise.resolve(300);
Promise.all([
    getPrice1(),
    getPrice2(),
    getPrice3()
])
.then((prices)=>{
    const total = prices.reduce((sum,price)=>sum+price,0)
    console.log(total)
})

// promise chaining
Promise.resolve(5)
  .then(num => num * 2)
  .then(num => num + 10)
  .then(num => num * 3)
  .then(console.log);

// timeout wrapper
function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => {
      reject("Request timed out");
    }, ms);
  });
  return Promise.race([promise, timeout]);
}

const slowPromise = new Promise((resolve) =>
  setTimeout(() => resolve("Done"), 3000)
);

withTimeout(slowPromise, 2000)
  .then(console.log)
  .catch(console.error);

// sequential execution
function task(id, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(id), delay);
  });
}

async function sequential() {
  console.time("Sequential");
  await task(1, 1000);
  await task(2, 1000);
  await task(3, 1000);
  console.timeEnd("Sequential");
}
sequential();

// Parallel execution
async function parallel() {
  console.time("Parallel");

  await Promise.all([
    task(1, 1000),
    task(2, 1000),
    task(3, 1000)
  ]);

  console.timeEnd("Parallel");
}

parallel();

// catch and finally
Promise.resolve(10)
  .then((num) => {
    throw new Error("Oops!");
  })
  .catch((err) => {
    console.log(err.message);
  })
  .finally(() => {
    console.log("Always runs");
  });
  