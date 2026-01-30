// Primitive data types

// BigInit  (A number representing a large integer)

let a= 9000876543210023456n;
console.log(a)
console.log(typeof a)


let f=765n;
console.log(f)


// negitive nuumer BigInit
let b= -98765432187654321n;
console.log(b)
console.log(typeof b)


let c= -70009876543217896n;
console.log(c)
console.log(typeof c)



// addition of BigInit
let d=100n;
let e=200n;
console.log(d+e)


// substruction of BigInit
let ab=100n;
let ac=200n;
console.log(ac-ab)



// assignment of BigInit
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)
console.log(y)



// string into BigInit
let z = BigInt("123456789012345678901234567890");
console.log(z)
console.log(typeof z)



// Symbol  (A unique and primitive identifier)
const g = Symbol();
const h = Symbol();
console.log(g)


// symbol with string
const i=Symbol("123456")
console.log(i)


const j=Symbol("Abdul Rehaman")
console.log(j)


const k=Symbol("Abdul")
const l=Symbol("Rehaman")
console.log(k.Symbol+l.Symbol)


// symbol with number
const m=Symbol(123)
console.log(m)
console.log(typeof m)


const n=Symbol(123)
const o=Symbol(123)
console.log(n===o)


const p=Symbol()
const q=Symbol()
console.log(p==q)


// keywords in primitive datatypes

// let 
// var 
// const
// typeof
// n
// null
// true
// false




// Reference Datatypes

// Object
// Array
// Function

// object (collection of key value pairs)
var obj={
    name:"Abdul Rehaman",
    role:"Associate software engineer",
    Number:987654321,
    Male:true,
   attendence: {jan: 20,feb :23},
   num:[1,2,3]
}
console.log(obj)



var ob={firstname:"Abdul",secondname:"Rehaman"}
console.log(ob.firstname+ob.secondname)


// Array (type of homogenius or tetrogenius data)
var arr=[12335,"Abdul",true,null,[1,2,3,4],{name:"Rehaman"}]
console.log(arr)


var ar=["abdul",1,2,3,4,5]
console.log(ar)


// function (block of code)
function atb(){
    console.log("This is Abdul")
}

atb()



function salary(name,days){
    let perday=2000;
    console.log("salary of ",name,"is",perday*days)
    return perday*days;
}

console.log(salary("abdul",30))
console.log(salary("rehaman",40))



