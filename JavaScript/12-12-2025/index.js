// synchronous (Line by line execution)

// asynchronous (we can skip the code after some time we can run the code)

// set time out  (it can take time to execute)
setTimeout(() => {
  console.log("Hello! Abdul ");
}, 2000);


function greet() {
  console.log("Hello!");
}

setTimeout(greet, 1500); // runs after 1.5 seconds


let one =1;
console.log(one)

let two=2;
let three=3;
let four =4;
console.log(three)

setTimeout(() => {
    console.log(two)
}, 1000);



// clear time out  
const id = setTimeout(() => {
  console.log("You will never see this.");
}, 3000);

clearTimeout(id); // cancels the timeout



// set interval (it executes continously)
let a=setInterval(() => {
  console.log("This is Abdul Rehaman");
}, 2000);

clearTimeout(a) // stop the execution 


function repeat(message) {
  console.log(message);
}

setInterval(repeat, 2000, "Abdul");


// clear interval  (to stop the execution)
let b=setInterval(() => {
console.log("HITMAN ROHIT SHARMA")
},1000)

clearInterval(b)



// all in one
let c = setInterval(() => {
  console.log("This will stop soon");
}, 1000);

setTimeout(() => {
  clearInterval(c);
}, 5000); // stops after 5 seconds


let button=document.getElementById("bn")
console.log(button)


// click
button.addEventListener("click",function (){
    alert ("button clicked")
    button.innerText="button"
    console.log("button clicked")
})

// on click
function Click() {
  alert("You clicked the button!");
}


// on double click
function DoubleClick() {
  alert("Double-clicked!");
}


// mouse down
button.addEventListener("mousedown", () => {
  console.log("Mouse Down");
});



function down() {
  console.log("Button pressed down!");
}


// mouse up
button.addEventListener("mouseup", () => {
  console.log("Mouse Up");
});



function up() {
  console.log("Mouse released!");
}



// mouseenter , mouse left, click

button.addEventListener("mouseenter", () => console.log("Mouse entered"))
button.addEventListener("mouseleave", () => console.log("Mouse left"));
button.addEventListener("click", () => console.log("Clicked"));











