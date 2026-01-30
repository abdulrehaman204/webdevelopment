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


// else if (Use the else if statement to specify a new condition if the first is false.)

let hour=20;
if (hour<12)
{
  console.log("Good Morning")
} 
else if (hour<16)
{
  console.log("Good Afternoon")
}
else 
{
  console.log("Good Evening")
}


let time=12;
if (time<12)
{
  console.log("its coffee time")
}
else if (time<16)
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
let discount = isMember ? 0.2 : 0;
console.log(discount)


// switch (switch executes the code blocks that matches an expression.)

let userrole="student";

switch(userrole)
{
  case "admin":
    console.log("acess granted to admin")
    break;
  case "editor":
    console.log("acess granted to editor")
    break;
  case "student":
    console.log("acess granted to student")
    break;
  default :
    console.log("acess denied")      
}



let day=0;

switch(day)
{
  case 0:
  case 6:  
    console.log("happy weekend")
    break;
  case 1:
    console.log("happy monday")
    break;
  case 2:
  case 3:
  case 4:
    console.log("happy midweek")
    break;
  case 5:
    console.log("happy friday ")      
}

