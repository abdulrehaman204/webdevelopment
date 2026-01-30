// event bubbling
// capturing
// deligation

let child=document.getElementById("innertext")
function Hello(){
    console.log("inner text clicked")
}

child.addEventListener("click",Hello)



let parent=document.getElementById("outertext")
function Hello1(){
    console.log("outer text clicked")
}

parent.addEventListener("click",Hello1)



// event bubbling (it travels from child element to parent element.)

let div=document.getElementById("div")
function Hi(){
    console.log("parent clicked")
}

div.addEventListener("click",Hi)


// capturing (it travels parent element to child element)
let div1=document.getElementById("div1")
function Hi1(){
    console.log("Top parent clicked")
}

div1.addEventListener("click",Hi1,true)


// deligation (event will be added to the parent element and the event will be used by all the)

let list =document.getElementById("menu")
function H(){
    console.log("clicked")
}

list.addEventListener("click",H)


document.addEventListener("click", (event) => {
    console.log(event.target); // element clicked
});




document.getElementById("menu").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        console.log("You clicked:", e.target.textContent);
    }
});



// scroll event 
let box=document.getElementById("box")
function onScroll(){
    console.log("event scrooled")
}

box.addEventListener("scroll", onScroll, { passive: true });


window.addEventListener("scroll", () => {
    console.log(window.scrollY)})



// Normal events     
let button=document.getElementById("button")
let a=0;
button.addEventListener("click",function (){
    a+=1;
    console.log(a)
    console.log("button clicked")
})


let key=document.getElementById("keydown")
 key.addEventListener("keydown", (e) => {
     console.log("Key pressed:", e.key);
 });



//  document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault(); // stop page refresh
//   console.log("Form submitted");
// });



// scrolling event
const box1 = document.getElementById("box1");

box1.addEventListener("scroll", () => {
  console.log(box1.scrollTop);
});


