// switch (switch executes the code blocks that matches an expression.)

let role="webdeveloper";

switch(role)
{
  case "admin":
    console.log("acess granted to admin")
    break;
  case "editor":
    console.log("acess granted to editor")
    break;
  case "webdeveloper":
    console.log("acess granted to webdeveloper")
    break;
  default :
    console.log("acess denied")      
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


// date function using with switch
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



// switch statement using with function call.
function abdul(){
    switch(name)
    {
        case "prasanth" :
            console.log("its prasanth")
            break;
        case "abdul" :
            console.log("its abdul")
            break;
        case "vamsi" :
            console.log("its vamsi")
            break;
        default :
        console.log("no name is given")           
    }
}


let name="abdul";
abdul(name)



// Truthy and falsy values in conditional statements.

// Boolean values datatype true and false 
if (true) 
{
    console.log("Truthy value")
}


if (false)
{
    console.log("falsy value")
}


// Number value datatype
if (1)
{
    console.log("Truthy value")
}


if (-1)
{
    console.log("Truthy value")
}


if (0.2)
{
    console.log("Truthy value")
}


if (-0.66)
{
    console.log("Truthy value")
}


if(0)
{
    console.log("falsy value")
}


// null value datatype
if (null)
{
    console.log("falsy value")
}


// undefined value datatype
if (undefined)
{
    console.log("falsy value")
}


// using a string value datatype
if ("Abdul")
{
    console.log("Truthy value")
}


if ("")
{
    console.log("falsy value")
}


// using an array value 
if ([])
{
    console.log("Truthy value")
}


if (["abdul","rehaman"])
{
    console.log("Truthy value")
}


// using object datatype
if ({})
{
    console.log("Truthy value")
}


if ({name:"abdul"})
{
    console.log("Truthy value")
}



// using Big Int datatype
if(97123456548769n)
{
    console.log("Truthy value")
}



// for loop (The for statement creates a loop with 3 optional expressions:)
for (i=0;i<6;i++)
{
    console.log(i)
}


// using arrays and functions to for loop.
let arole = [1,2,3]
for(i=0;i<arole.length;i++){
function abd(arole){
switch(arole)
{
  case 1:
    console.log("acess granted to admin")
    break;
  case 2:
    console.log("acess granted to editor")
    break;
  case 3:
    console.log("acess granted to webdeveloper")
    break;
  default :
    console.log("acess denied")      
}
}

abd(arole[2])
}




const cars = ["BMW", "Volvo", "Saab", "Ford"];
let len = cars.length;

for (let i = 0; i < len; i++) 
{
    function ab(cars){
switch(cars)
{
  case "BMW":
    console.log("its BMW car")
    break;
  case "Volvo":
    console.log("its volvo car")
    break;
  case "Saab":
    console.log("its saab car")
    break;
    case "Ford" :
     console.log("its ford car")   
  default :
    console.log("acess denied")      
}
}
ab (cars[i])
}



