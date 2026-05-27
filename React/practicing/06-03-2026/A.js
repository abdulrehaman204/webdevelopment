// copying of objects 
// normal copy
// shallow copy
// deep copy

// normal copy
let obj = {
    name : "abdul",
    city : "hyderabad"       
}
let obj1=obj
console.log(obj1)

// shallow copy 
let obj2={
    name : "vamsi",
    city : "banglore"
}

let obj3={...obj2}
obj3.name="abdul"
console.log(obj3)


// deep copy
let ob={
    name : "hello",
    number : 1234
}

let obe=JSON.parse(JSON.stringify(ob))
console.log(obe)


// higher order functions

function A (a){
    return "hello"+a
}

function B (b){
    let a=20
    console.log(b(a))
}

B(A)


// Array copying
// normal copy
// shallow copy
// deep copy

// normal copying
let ar=["abdul",123,true]

let arr1=[ar]

console.log(arr1)

// shallow copying
let ar2=["vamsi",123,false]

let ar3=[...ar2]

ar3=[234,"prasanth"]

console.log(ar3)

// deep copying 
let ar4=["abdul",123,null,true,
    arr5=[
        "vamsi",234,true
    ]
]

let ar6=JSON.parse(JSON.stringify(ar4))

console.log(ar6)

ar6=["prasanth",345]

console.log(ar6)


// function - function declaration, function expression

// function declaration
function AB(){
    console.log("hello")
}

AB()

// DOM 
let Ab=document.getElementById("button")

let count = 100;

Ab.addEventListener("click",()=>{
    console.log(count++)
})


let AR=document.createElement('h1')

console.log(AR)

AR.innerText= 'hello prasanth'

console.log(AR)

const R=document.createElement("h2")
// Ab.appendChild(AR)

R.innerText="NYB"

let RR=document.getElementById("h1")

RR.appendChild(R)

let d=new Date()
console.log(d)

 let w=setInterval(() => {
        console.log("hello")
    },5000);

let ww=setTimeout(() => {
    console.log("HI")
}, 2000);


// clearInterval(ww)

clearTimeout(ww)

let c = 0
let lastclick = 0
let current = Date.now()
if(current - lastclick > 2000){
    c++
    console.log("throtlling",c)
    lastclick = current
}


let T=[1,2,3,4,5,6,7]

let u=T.map((z)=>{
    return z*10
})

console.log(u)

let v = T.filter(num => {
 return num%2==0
})
console.log(v)

let y = T.reduce((num,total)=>{
   return num+total
},0)

console.log(y)


// promise - resolve , reject

let promise=new Promise((resolve,reject)=>{
    resolve()
})

promise 
.then((r)=>{
    console.log("sucess")
})
.catch((error)=>{
    console.log("error")
})


