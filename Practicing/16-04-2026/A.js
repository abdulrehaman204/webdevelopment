// Closures 
function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count)
    }
    return inner;
}

const counter = outer()
counter()
counter()
counter()


// Data privacy
function createbankaccount(){
    let balance=0;
    return {
     deposit(amount){
          balance += amount;
    },
    getbalance(){
        return balance;
    }
}
}

const account = createbankaccount()
account.deposit(1000)
console.log(account.getbalance())


// Function Factories
function multiplier(factor){
    return function(num){
        return num * factor;
    }
}

const double = multiplier(2)
const triple = multiplier(3)

console.log(double(5))
console.log(triple(5))


// closure and settimeout
function timer(){
    for(let i=0;i<=5;i++){
        setTimeout(function(){
           console.log(`Timer ${i}`)
        },i*1000)
    }
}

timer()


// Remembering State in Callbacks
function setupCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const clickCounter = setupCounter();
console.log(clickCounter())


// function currying 
function add(a){
    return function(b){
        return a+b;
    }
}

const addtwo = add(2)
console.log(addtwo(3))


// promises - resolve or reject
const promise = new Promise((resolve, reject) => {
    let sucess = true;
    if(sucess){
        resolve("Task completed")
    }
    else{
        reject("Task not completed")
    }
})
promise
.then((result)=>console.log(result))
.catch((error)=>console.log(error))



const mypromise = new Promise((resolve, reject) => {
    const a = "AbdulRehaman"
    const b = "AbdulRehaman"
    if(a==b){
        resolve()
    } else{
        reject()
    }
})
mypromise
.then(()=>console.log("Promise resolved successfully"))
.catch(()=>console.log("Promise is rejected"))



// async and Await
function fetchdata(){
    return new Promise((resolve) => {
        setTimeout(()=>console.log("Data recived"),5000)
    })
}
async function getdata(){
    const result = await fetchdata()
    console.log(result)
}

getdata()


// Error Handling in Async/Await
function helperpromise(){
    const mypromises = new Promise((resolve, reject) => {
        const x = "AbdulRehamans"
        const y = "AbdulRehaman"
        if(x==y){
            resolve("strings are same")
        } else {
            reject("strings are not same")
        }
    })
    return mypromises;
}

async function demopromise(){
    try{
        const results = await helperpromise()
        console.log(results)
    }
    catch(error){
        console.log("error :"+error)
    }
}

demopromise()


// this keyword
let person = {
    name : "Abdul",
    greet(){
        return `welcome to ${this.name}`
    }
}
console.log(person.greet())


const persons = {
    name : "AbdulRehaman",
    age : 23,
    greek(){
        console.log('Hello, my name is '+this.name+' and iam '+this.age+' years old')
    }
}

persons.greek()


// Using this in a Function
function greet1() {
    console.log('Hello, my name is ' + this.name);
}

const person1 = {
    name: 'Abdul',
    sayHello: greet1
};
const anotherPerson = {
    name: 'Rehaman'
};

greet1(); 
person1.sayHello(); 
greet1.call(anotherPerson); 



let age = 24;
function greet2(){
    return this.age;
}
console.log(greet2())


const person2 = {
    name: "ravi",
    age: 22,
    greet3 : () =>{
        return `Hello , you are ${this.age} years old`
    }
}
console.log(person2.greet3());


// event loop
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");



setTimeout(() => console.log("A"), 0);
Promise.resolve().then(() => console.log("B"));
console.log("C");