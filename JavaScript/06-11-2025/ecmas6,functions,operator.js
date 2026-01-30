// map , set , weakmap ,weakset ,date

// map  (You can create a Map by passing an Array to the new Map() constructor:)

const fruits = new Map([
  ["apples", 500],
  ["mangoes",600],
  ["bananas",700],
 
]);
 console.log(fruits.get("mangoes"));

 console.log("There are",fruits.get("mangoes"),"mangoes")


//  another example of map
var maps=new Map()

maps.set("prasant","abdul")
console.log(maps.get("prasant"))




// set (You can add elements to a Map with the set() method:)

// create a map
const students = new Map();

// set of values
students.set("abdul",100)
students.set("rehaman",200)
students.set("ravi",300)

let nam=students.get("abdul")

console.log(nam)
console.log("abdul gets",nam,"marks")



// weakmap (A JavaScript WeakMap is a collection of key/value pairs where the keys must be objects.)

// Create a WeakMap
let myMap = new WeakMap();

// Create an Object
let myObj = {name:"abdul", lname:"rehaman"};

// Set a WeakMap value
myMap.set(myObj,"player");

// Get the WeakMap value
type=myMap.get(myObj)


console.log("he is a",type)




// weakset  (A JavaScript WeakSet is a collection of values where the values must be objects.)

// Create a WeakSet
let mySet = new WeakSet();

// Create an Object
let Obj = {fname:"John", lname:"Doe"};

// Add then Object
mySet.add(Obj);

// Do I have Obj in the mySet?
let answer = mySet.has(Obj);

console.log("i have object",answer)



// date 

const date = new Date("2025-11-06");
console.log(date)


var namb= new Date("1945-08-15");
console.log(namb)

// null object

let a=null;
console.log(a)
console.log(typeof(a))


// functions
// function decleration

function add(b,c)
{
    return b+c;
    
}
console.log(add(10,20));


function ap(d,f)
{
    return d*f;
}
console.log(ap(9,8))


// function expresssion

let tan=function (i,j)
{
    return i+j;
}
console.log(tan(800,200))


let dd=function (g,h)
{
    return g-h;
}
console.log(dd(500,200))



// Arrow function
let b=(u,i) =>
{
    return u+i;
}
console.log(b(300,500))


let ad=(m,n) => m+n;
console.log(ad(100,400))


// arthematic operators(+,-,*,/,%,++,--)
// addition
let num1=1234
let num2=567
console.log(num1+num2)

// subtraction
let at=98765
let ar=2345
console.log(at-ar)

// multiple
let ac=12
let ay=5
console.log(ac*ay)

// divison
let ba=100
let ca=5
console.log(ba/ca)

// remainder
let x = 5;
let y = 2;
let z = x % y;
console.log(z)

// pre increment
let G = 5;
console.log(G)
G++;
let H = G;
console.log(H)

// post 
let k=10;
++k;
console.log(k)

// pre decrement
let I=5;
I--;
let J=I;
console.log(J)

// post 
let l=11
--l;
console.log(l)







