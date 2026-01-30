// functions :
// it is a block to perform some task and return some value

function add(a,b)     // function parameters 
{
    console.log(a+b)
}

add(10,20)  //function calling and passing arguments


// return statement 

function multiple(A,B)
{
    return A*B;
}

console.log(multiple(5,10))



function divison(c,d)
{
    console.log(c/d)
    return "Abdul";
}

let result=divison(100,50)
console.log(result)


// default parameters ?

function hello(a=0,b=null)  // null value
{
    console.log(a+b)
}

hello(1,20) // arguments have high priority then parameters 



function hi(a=2,b=50)
{
    console.log(a+b)
}

hi(50,undefined) // undefined is not a high priority then numerical values


function abdul(a=10,b=30) // boolean  values high priority
{
    console.log(a,b)
}

abdul(50,true)


function abd(a=20,b=30)  // string and array values high priority
{
    console.log(a,b)
}

abd("10",[50])


function ab(a=50,b)
{
    console.log(a,b)
}

ab(100,20)  


// varifying the no of arguments and parameters
function rehaman(a,b=10,c,d)
{
    console.log(a,b,c,d)
}

rehaman(10,20,30)


function reham(a,b,c,d)
{
    console.log(a+b+c)
}

reham(10,20,30)


function re(a=10,b,c,d)
{
    console.log(a,b,c,d)
    console.log(arguments)
}



// varying rest parameters 
re(undefined,1,2,3,4,5,6,7,8,9,10)


function ref(a,b,c,d,...f)
{
    console.log(a,b,c,d)
    console.log(f)
}

ref(1,2,3,4,5,6,7,8,9,10,11)



// Anonymous or Named: Function expressions can be anonymous 
// (without a name after the function keyword) or named.

// Anonymous function expression
const greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet("abdul"))


// Named function expression (name primarily for debugging within the function)
const calculate = function sum(a, b) {
  return a + b;
};

console.log(calculate(10,20))


// arrow function 
let ac=(a,d) =>
{
  return a+d;
}

console.log(ac(10,20))



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

