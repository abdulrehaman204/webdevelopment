// javascript data types
// non primitive data types
// multiple values in single memory
// 1.objects
// 2.arrays
// 3.functions

// objects (objects are stored in keys and values - columns)
// obects are defined by carrly brackets.
var obj={name:"prasanth",age:24,location:"dharmavaram",male:true}
console.log(obj)
console.log(obj.name)

// nested objests (we can write multiple objests in that objest)
var obj={
    name: 'vamsi',
    age:24,
   place: {
        name:"jeevan",
        age:25,
        location:'vijayawada',
        male :{ 
            name:"sanjay",
            age:25,

        }
    }
}
console.log(obj)

console.log(obj.place)

// arrays (collection of data to stored in homogenius or hetrogenius)
// it is defined - []
var arr=[10,"hello",true,[10,20.30,40]]
console.log(arr)
console.log(arr.length)
console.log(arr[2])


// functions (block of code)
// function decelaration
// function expression
// a. function decelaration 
function ab(){
    console.log("abdul")
}
ab()

// b.function expression
// named function, anynomous function and arrow function
// named function 
function ad(){
    console.log("rehaman")
}
ad()

// anynomous function
let ff=function(){
    console.log("anynomous function")
}
ff()


// arrow function
let ar=(r,s)=>{
    console.log(r+s)
}
ar(10,20)


// conditional statements (we can bulid a logic using with conditions )
// if - nested if
// if else
// if else if-else
// switch

// if (it can execute the code which the condition is true)
let a=10;
let b=20;
if(a<b){
    console.log("a is big")
}


// if else(if condition is true , execute the block.otherwise , else block is executed )
let c=50;
let d= 30;
if(c<d){
    console.log("d is big")
}
else {
    console.log("false")
}


// if else if-else (we can use multiple conditions in sequence)
var marks=74;
if(marks>=90){
    console.log("A")
}
else if(marks>=80){
    console.log("B")
}
else if(marks>=70){
    console.log("C")
}
else if(marks>=60){
    console.log("D")
}
else {
    console.log("Fail")
}


// nested if (we cane use if in another if)
var marks=30;
if(marks>=30){
    if(marks>=50){
        console.log("A")
    }
}
else{
    console.log("fail")
}


// switch (exect value)
marks=100;
switch(marks){
    case 90:
        console.log("A")
    break;
    case 80:
        console.log("B")
    break;
    case 70 :
        console.log("C")
    break;
    default :
    console.log("fail")        
}


// divisible by both 3 and 5
function divisible(a){
    if(a%3==0 && a%5==0){
        console.log("it is divisible by both 3 and 5")
    }
    else{
        console.log("not divisible")
    }
}

divisible(25)



// count vowels 
let count=0;
function vowels(str){
    for(i=0;i<str.length-1;i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=="i" || str[i]=="o" || str[i]=="u"){
            count++;
        }
    }
    console.log(count)
}

vowels("abdul")


// // count consonants
// let cont=0;
// function consonants(str){
//     for(i=0;i<str.length;i++){
//         if(str[i]=='a'  || str[i]=='e' || str[i]=="i" || str[i]=="o" || str[i]=="u"){
            
//     }
// }
// console.log(cont)
// }
// consonants("abdul")

// max and min of array elements
var arr=[10,20,30,40,50]
const max=Math.max(...arr)
const min=Math.min(...arr)
console.log("max",max)
console.log("min",min)


// sum of the array
var arr=[10,20,30,40,50]
let sum=0;
function arb(){
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log(sum)
}

arb()


