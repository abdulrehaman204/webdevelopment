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
            resolve("Task 1 completed")
        },1000);
    }),
    new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Task 2 completed")
        },500);
    })
])
.then((result)=>console.log(result))


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
// Fetch Multiple APIs in Parallel (Promise.all)
function fetchUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id: 1, name: "Abdul" }), 1000);
  });
}
function fetchPosts() {
  return new Promise(resolve => {
    setTimeout(() => resolve(["Post 1", "Post 2"]), 2000);
  });
}
function fetchComments() {
  return new Promise(resolve => {
    setTimeout(() => resolve(["Comment 1", "Comment 2"]), 1500);
  });
}
Promise.all([
  fetchUser(),
  fetchPosts(),
  fetchComments()
])
.then(([user, posts, comments]) => {
  console.log(user);
  console.log(posts);
  console.log(comments);
})
.catch(err => console.log(err));


// Find the Fastest Server (Promise.race)
function server1(){
    return new Promise((resolve) => {
        setTimeout(() => {resolve("server 1")},3000);
    })
}
function server2(){
    return new Promise((resolve) => {
        setTimeout(() => {resolve("server 2")},1500);
    })
}
function server3(){
    return new Promise((resolve) => {
        setTimeout(() => {resolve("server 3")},2500);
    })
}
Promise.race([
  server1(),
  server2(),
  server3()
])
.then(result => console.log(result));


// Get the First Successful API (Promise.any)
function api1() {
  return Promise.reject("API 1 Failed");
}
function api2() {
  return Promise.reject("API 2 Failed");
}
function api3() {
  return new Promise(resolve => {
    setTimeout(() => resolve("User Data"), 1000);
  });
}
Promise.any([
  api1(),
  api2(),
  api3()
])
.then(result => console.log(result))
.catch(err => console.log(err));


// Process Tasks Sequentially (then Chaining)
function task1() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Task 1");
      resolve(10);
    }, 1000);
  });
}
function task2(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Task 2");
      resolve(value * 2);
    }, 1000);
  });
}
function task3(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Task 3");
      resolve(value + 5);
    }, 1000);
  });
}

task1()
  .then(task2)
  .then(task3)
  .then(result => console.log(result))
  .catch(console.error);


// Retry Until Success (Promise + Recursion)
let attempts = 0;
function fetchData() {
  return new Promise((resolve, reject) => {
    attempts++;
    if (attempts < 3) {
      reject(`Attempt ${attempts} Failed`);
    } else {
      resolve("Data Loaded");
    }
  });
}
function retry(fn, retries) {
  return fn().catch(error => {
    console.log(error);
    if (retries === 0) {
      throw error;
    }
    return retry(fn, retries - 1);
  });
}

retry(fetchData, 3)
  .then(console.log)
  .catch(console.error);

