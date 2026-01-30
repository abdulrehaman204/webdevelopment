let obj={
    name:"abdul",
    age : 23,
Hi(){
    console.log(this.name)
}
}

obj.Hi()

console.log(obj['age'])


// arrow function 

let ab=()=>{
    console.log(this)
}

ab()

// change of this reference

// call , apply and bind 

// call (we can pass obj and no.of arguments)

function Hi(a,b){
    console.log(this)
    console.log(a,b)
}

Hi.call(obj,10,20)



// call using with object.
function greet(city, country) {
  console.log(`Hello, my name is ${this.name} from ${city}, ${country}`);
}

const person = { name: "Abdul" };

greet.call(person, "Hyderabad", "India");
// this → person



// 1st argument will be object reference
// next will be the arguments for the functions.

// apply 

Hi.apply(obj,[20,30])


// apply using with object.
const patient ={name:"Ravi"}
function hello(a,b){
   console.log(`patient name is ${this.name} from ${a} ,treatment ${b}`)
}


hello.apply(patient,["Hyderabad","heart surgery"])


// bind 

Hi.bind(obj,30,40)()


function abd() {
  console.log(`Hi, I am ${this.name}`);
}

const nam = { name: "abdul" };

const a = abd.bind(nam);

a(); // Executes later


// using with 2 objects parent and child.
const outer = {
name: "Abdul",

inner: {
name: "Rehaman",

showThis() {
    console.log(this.name);  // "Rehaman"
}
}
};

outer.inner.showThis();



// In two objects using this keyword 
const user = {
name: "Abdul",

settings: {
anothername: "Ravi",

printUserName() {
// normal function → has its own this (settings)
const fn = () => {
 console.log(this.name); 
};

fn();
}
}
};

user.settings.printUserName();




// Array 
var arr=[10,20,30,40]
console.log(arr)

// push() it can add an element in array ending
arr.push(50)
console.log(arr)

// unshift() it can add an element in array starting
arr.unshift(5)
console.log(arr)

// splice()  it can add an element in array anywhere
arr.splice(1,0,"hello")
console.log(arr)


//pop()  remove element in array ending
arr.pop()
console.log(arr)

// shift() remove element in array starting 
arr.shift()
console.log(arr)