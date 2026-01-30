
// ternary (?:)  provides a concise way to write conditional expressions. 

let israining=true;
let weathermessage=israining ? "bring an umbrella" : "no need for umbrella"
console.log(weathermessage) // output : bring an umbrella



let isMember = false;
let discount = isMember ? 3 : 2;
console.log(discount) //output : 2



let marks=100;
marks==100 ? console.log("topper") : console.log("not a topper")  //output : topper



const age = 20;
const eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(eligibility); // Output: Eligible to vote



const temperature = 25;
const weatherMessage = (temperature > 30) ? "It's hot!" : "It's pleasant.";
console.log(weatherMessage); // Output: It's pleasant.



// ternary operator using with functions.
function abdul()
{
   marks1==100 ? console.log("topper") : console.log("not a topper")  
}

let marks1 = 94;
abdul()


// todays date function.
let date = new Date().getDay();
let Todaysdate = date ? console.log("Todays date is ",new Date()) : console.log( "it is not a todays date");




// loops in javascript :
// for loop 
// while loop 
// do while
// for...of
// for..in


// for loop (The for statement creates a loop with 3 optional expressions:)

// right angled traingle shape using with for loop :
let n=5;
for(let i=1;i<=n;i++)
{
    let row="";
    for(j=1;j<=i;j++)
    {
        row +=" * ";
    }
    console.log(row)
}



// while loop (The while loop loops through a block of code as long as a specified condition is true.)
let i=0;
while (i <= 5)
{
    console.log(i)
    i++;
}    


// Use a while loop to collect the fruits names from the Fruits array:

const Fruits = ["mango","apple","banana","papaya"];
let m= 0;

while (Fruits[m])
{
    console.log(Fruits[m]);
    m++;
  
}



const Bikes = ["Duke","pulsar","KTM"];
let p=0;

while (Bikes[p])
{
    console.log(Bikes[p]);
    p++;
}



// while loop using with objects .

let student ={name:"rehaman",age:22,course:"wed development"}
const keys=Object.keys(student)

let J=0;
while(J<keys.length)
{
    const key = keys[J];
    console.log(key + ":",student[key])
    J++;
}


// Do while loop 
// The do while loop will execute the code block once, 
// before checking if the condition is true, 
// then it will repeat the loop as long as the condition is true.


let a=1;
do {
    console.log(a)
    a++;
} while (a <= 5)


let d = 0;
do 
{
    console.log(d); // Prints 0
     d++;
} while (d < 0); // Condition is false, but the block ran once



// do while loop using with array 

const numbers=[10,11,12,13,14,15]

let M=0;
do{
    console.log(numbers[M])
    M++;
} while (M<numbers.length);




// using do while with array of objects.
const students=[
    {name:"rehman",marks:85},
    {name:"abdul",marks:90},
    {name:"ayaan",marks:88},
    
]

let e=0;
do{
    console.log(students[e].name,"-",students[e].marks)
    e++;
} while (e < students.length)






