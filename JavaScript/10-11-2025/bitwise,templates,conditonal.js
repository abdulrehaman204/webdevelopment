// Template literal (it is enclosed with backsticks)
// syynatx : carly brases and dollar symbol

var first ="Abdul"
var last ="Rehaman"
console.log(`My name is ${first} ${last} and iam working as Associate software engineer`)



var firstn="Rohit"
var lastn="Sharma"
console.log(`Who is the captain of indian cricket team ..?  ${firstn} ${lastn} `)




// bitwise operators (it is used for binary operations)
// (&,|,^,~,>>,<<,>>>)

//  code : 8421 

// &  (Sets each bit to 1 if both bits are 1)
const a = 5; // 0101 in binary
const b = 3; // 0011 in binary
const result = a & b; // 0001 (1 in decimal)
console.log(result); // Output: 1


const A=5;  //0101     
const B=9;  //1001
console.log(A & B)


const ab=3;
const ba=7;
console.log(ab & ba)

// |  (Sets each bit to 1 if one of two bits is 1)
const c=10; //1010
const d=7;  //0111
console.log(c | d) //1111


const C=6;
const D=2;
console.log(C | D)


const cd=4;
const dc=6;
console.log(cd | dc)


// ^  (Sets each bit to 1 if only one of two bits is 1)
const e=5;  //0101
const f=3;  //0011
console.log(e ^ f)  //0110


const E=12;
const F=7;
console.log(E ^ F)


const ef=10;
const fe=5;
console.log(ef ^ fe)


// ~   (Inverts all the bits)
const g= 5; // 00000000000000000000000000000101 in 32-bit binary
const Result = ~g; // 11111111111111111111111111111010 (-6 in decimal)
console.log(Result); // Output: -6



// << (Shifts left by pushing zeros in from the right and let the leftmost bits fall off)
const h=5;
console.log(h<<2)


const G=6;
console.log(G<<3)


// >> (Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off)
const H=7;
console.log(H>>2)


const i=-3;
console.log(i>>3)


// conditional statments

// if
// if...else
// if...else if...else
// switch
// ternary (? :)


// if statment (Use the JavaScript if statement to execute a block of code when a condition is true.)

let temparature=25
if (temparature<30)
{
    console.log("its pleasent day");
}


let age=18
if (age>=18)
{
    console.log('They are eligible for vote')
}


let number = 20;
let text = "You can Not drive";


if (number >= 18) {
  text = "You can drive";
  console.log(text)
}


// nested if (You can use an if statement inside another if statement:)

let nam=20;
let state='Andhra pradesh';

if (state=='Andhra pradesh')
{
if(nam<=20)
{
  console.log('These is Andhra pradesh ')
}
}



let num = 16;
let country = "USA";
let test = "You can Not drive!";

if (country == "USA" && num >= 16)
   {
  test = "You can drive!";
  console.log(test)
   }


// if else (Use the else statement to specify a block of code to be executed if a condition is false.)

let age1=20;
if (age1<18)
{
  console.log("you are a minor")
}
else 
{
  console.log("you are a major")
}


let age2=20;
if (age2>18)
{
  console.log("you are a minor")
}
else 
{
  console.log("you are a major")
}



let cs=700;
if(cs>=700)
{
    console.log("you are approved for this loan")
}
else 
{
    console.log("you are not approved for this loan")
}




