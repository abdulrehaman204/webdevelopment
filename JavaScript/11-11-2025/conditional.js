// else if (Use the else if statement to specify a new condition if the first is false.)

let score=200;
if (score>=200)
{
   console.log("Roht Sharma")
}
else if(score>=100)
{
    console.log("Virat Kohli")
}
else 
{
    console.log("other playes")
}



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
let weathermessage=israining ? "bring an umbrella" : "no need for umbrella"
console.log(weathermessage)


let isMember = false;
let discount = isMember ? 0.2 : 0;
console.log(discount)


let winter = true;
let season=winter ? "it is very cold" : "it is very hot"
console.log(season)


let marks=100;
 marks==100 ? console.log("topper") : console.log("not a topper")

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



let player = "Hitman";

switch(player)
{
    case "king" :
       console.log("virat kohli")
    break;
    case "Thala" :
        console.log("MS Dhoni")
    break;
    case "Hitman" :
        console.log("Rohit Sharma")
    break;
    default :
    console.log("other players")     
        
}


let days;
let date = new Date().getDay();
 
switch (date) {
  case 0:
    days = "Sunday";
    break;
  case 1:
    days = "Monday";
    break;
  case 2:
    days = "Tuesday";
    break;
  case 3:
    days = "Wednesday";
    break;
  case 4:
    days = "Thursday";
    break;
  case 5:
    days = "Friday";
    break;
  case  6:
    days = "Saturday";
}

console.log("Today is",days)


// if statment (Use the JavaScript if statement to execute a block of code when a condition is true.)
let creditcard=1000;
if (creditcard>=1000)
{
    console.log("you are eligible for creditcard");
}


let age=27
if (age>=18)
{
    console.log('They are eligible for vote')
}


// nested if (You can use an if statement inside another if statement:)

let employee="Abdul";
let company="nyb infotech";
if (company="nyb infotech")
{
  if (employee="Abdul")
  {
    console.log("he is Abdul ")
  }
}


let num = 20;
let country = "America";

if (country == "America")
  {
    if (num>=18)
    {
      console.log("he is an NRI and they have greencard")
    }
  }



// if else (Use the else statement to specify a block of code to be executed if a condition is false.)

let age1=15;
if (age1<18)
{
  console.log("you are a minor")
}
else 
{
  console.log("you are a major")
}
   

// // primitive datatypes

// Number

let a=123;
console.log(a)

let b=23;
console.log(b)

// string

var name='Abdul Rehaman'
console.log(name)

var em="web Development"
console.log(em)

var c=`Abdul`
console.log(c)

// Boolean

var ab=true
console.log(ab)

var d=false
console.log(d)

// undefined

let e;
console.log(e)

let f;
let g;
console.log(f,g)

// Null

let h=null;
console.log(h)
 
   