// promises
// pending : resolve and reject
let p= new Promise((resolve,reject)=>{
    let percentage=100
   if(percentage==100){
    resolve("Topper")
   }
   else {
    reject("failure")
   }
})

p.then((a)=>{
    console.log(a)
})

p.catch((b)=>{
    console.log(b)
})


// promise.all

let p1=Promise.resolve("completed")
let p2=Promise.reject("failure")
Promise.all([p1,p2])
.then(()=>{
    console.log("done")
})
.catch(()=>{
    console.log("failed")
})


// promise.race

let ab=Promise.resolve("success")
let ba=Promise.reject("fail")
Promise.race([ab,ba])
.then((ab)=>{
    console.log(ab)
})
.catch((ba)=>{
    console.log(ba)
})


let a=new Promise((resolve)=>{
setTimeout(() => {
  resolve("sucessfull")
}, 2000);
})

let b=new Promise((reject)=>{
setTimeout(() => {
  reject("failed")
}, 2000);
})


Promise.race([a,b])
.then((a)=>{
    console.log(a)
})
.catch((a)=>{
    console.log(a)
})



const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 500));
const slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 1000));

Promise.race([fast, slow])
  .then(result => console.log(result)); // Fast



// promise.allsettled (fulfilled or rejected)
Promise.allSettled([ab,ba])
.then((ab)=>{
    console.log(ab)
})


Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Failed")
])
.then(results => console.log(results));


// promose.any
Promise.any([a,b])
.then((a)=>{
    console.log(a)
})
.catch((b)=>{
    console.log(b)
})


// Async (The async keyword is used before a function to make it asynchronous)
//An async function always returns a Promise
//If you return a value, it’s automatically wrapped in a Promise)

async function name(){
    return "Abdul"
}

name().then(result => console.log(result))



// await (The await keyword is used inside an async function to pause execution until a Promise resolves.)
async function example() {
  const result = await Promise.resolve("Done!");
  console.log(result);
}

example();





