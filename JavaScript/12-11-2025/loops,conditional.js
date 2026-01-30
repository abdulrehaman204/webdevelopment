// for loop (The for statement creates a loop with 3 optional expressions:)

let i;

for(i=1;i<=5;i++)
{
    console.log("*");
}



let j;

for (j = 0; j <=5; j++) 
{
    console.log("The number is ",j ) 
}



let k;

for (k = 1; k <=10; k++)
{
    console.log("NYB infotech");
}



for (let i = 0; i < 5; i++)
{
  console.log(i); // Prints 0, 1, 2, 3, 4
}




// Use a for loop to collect the car names from the cars array:

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let len = cars.length;

for (let i = 0; i < len; i++) 
{
  console.log(cars[i]);
}



const employees= ["Abdul","Prasanth","vamsi","rishi"];
let lent= employees.length;

for (let i = 0; i < lent; i++)
{
    console.log(employees[i])
}



// while loop (The while loop loops through a block of code as long as a specified condition is true.)

let l=1;

while(l < 6)
{
    console.log("Hello Abdul");
    l++;
}



let count1=1;

while (count1 <= 10)
{
    console.log("*"+count1);
    count1++;
}

 

let b=0;

while (b <= 5)
{
    console.log("NYB Infotech")
    b++;
}



let count = 0;
while (count < 3) 
{
  console.log(count); // Prints 0, 1, 2
   count++;
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
let n=0;

while (Bikes[n])
{
    console.log(Bikes[n]);
    n++;
}


// Do while loop 
// The do while loop will execute the code block once, 
// before checking if the condition is true, 
// then it will repeat the loop as long as the condition is true.


let a=1;

do 
{
    console.log("Abdul");
     a++;
} while (a<=3)



let c=0;

do 
{
    console.log("#")
    c++;
} while (c<=5)




let d = 0;
do 
{
    console.log(d); // Prints 0
     d++;
} while (d < 0); // Condition is false, but the block ran once



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


function eligibility(){
if (age>=18)
{
    console.log('They are eligible for vote')
}
}

let age=18
eligibility(age)



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


// else if (Use the else if statement to specify a new condition if the first is false.)

let time=12;
if (time<12)
{
  console.log("its coffee time")
}
else if (time<13)
{
  console.log("its lung time")
}
else if(time<14)
{
  console.log("its tea time")
}
else {
  console.log("its dinner time")
}



// ternary (?:)

let israining=true;
let weathermessage=israining ? "brind an umbrella" : "no need for umbrella"
console.log(weathermessage)


let isMember = false;
let discount = isMember ? 3 : 2;
console.log(discount)
