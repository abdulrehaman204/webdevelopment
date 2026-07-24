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
// Waits for all promises to resolve.
// Rejects immediately if any promise rejects.
Promise.all([
    Promise.resolve("Task 1 completed"),
    Promise.resolve("Task 2 completed"),
    Promise.resolve("Task 3 completed")
])
    .then((results) => console.log(results))
    .catch((error) => console.error(error));


//  Promise.allSettled() Method
// Waits for all promises to settle (fulfilled or rejected).
Promise.allSettled([
    Promise.resolve("Task 1 completed"),
    Promise.reject("Task 2 failed"),
    Promise.resolve("Task 3 completed")
])
    .then((results) => console.log(results));


// Promise.race() Method
// Returns the result of the first settled promise (fulfilled or rejected).
Promise.race([
    new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 1 completed")
        }, 1000);
    }),
    new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 2 completed")
        }, 500);
    })
])
.then((result)=>{console.log(result)})


// Promise.any()
// Returns the first fulfilled promise.
// Rejects only if all promises reject.
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
// Runs regardless of whether the Promise is fulfilled or rejected.
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


// logical tasks about using promises 
// Sequential Promise Execution
const tasks = [
  () => Promise.resolve(1),
  () => Promise.resolve(2),
  () => Promise.resolve(3)
];
function runSequentially(tasks) {
  return tasks.reduce((promise, task) => {
    return promise.then(() => {
      return task().then(result => {
        console.log(result);
      });
    });
  }, Promise.resolve());
}

runSequentially(tasks).then(() => console.log("Done"));


// Retry Until Success
let count = 0;
function fetchData() {
    return new Promise((resolve, reject) => {
        count++;
        if(count < 3)
            reject("Failed");
        else
            resolve("Success");
    });
}
function retry(fn, retries) {
    return fn().catch(err => {
        if(retries === 0)
            throw err;
        return retry(fn, retries - 1);
    });
}

retry(fetchData, 3)
.then(console.log)
.catch(console.error);


// Timeout Promise
function withTimeout(promise, ms) {
    const timeout = new Promise((_, reject) => {
        setTimeout(() => reject("Timeout"), ms);
    });
    return Promise.race([promise, timeout]);
}

withTimeout(
    new Promise(resolve =>
        setTimeout(() => resolve("Done"), 3000)
    ),
    2000
)
.catch(console.log);


// Execute Until One Succeeds
const p1 = Promise.reject("A");
const p2 = Promise.reject("B");
const p3 = Promise.resolve("C");
Promise.any([p1, p2, p3])
.then(console.log)
.catch(console.error);


// Difference Between all() and allSettled()
const p10 = Promise.resolve(10);
const p12 = Promise.reject("Error");
const p13 = Promise.resolve(30);
Promise.all([p10, p12, p13])
.then(console.log)
.catch(console.log);

Promise.allSettled([p10, p12, p13])
.then(console.log);


// Chain Dynamic Promises
const numbers = [1,2,3,4];

numbers.reduce((promise, number) => {
    return promise.then(() => {
        console.log(number);
    });
}, Promise.resolve().then(() => console.log("Start")))
.then(() => console.log("End"));


// Implement a custom version of Promise.race.
function myPromiseRace(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(p => {
            Promise.resolve(p)
                .then(resolve)
                .catch(reject);
        });
    });
}

const p20 = new Promise(resolve => setTimeout(() => resolve("First"), 1000));
const p21 = new Promise(resolve => setTimeout(() => resolve("Second"), 2000));
myPromiseRace([p20, p21]).then(console.log);


