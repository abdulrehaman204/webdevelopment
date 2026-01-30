// Document object model

// it will attach the document in the form of a tree structure.

// reading dom properties

// selecting dom elements
// get element Byid
// get element Byclassname
// get element Bytagname
// query selector
// query selector all

console.log(document)

let h1 =document.getElementById("heading")
console.log(h1)

let h3=document.getElementById("text")
console.log(h3)

console.log(document.getElementById("text"))

let a=document.getElementsByClassName("h1")
console.log(a)


console.log(document.getElementsByClassName("h1"))

console.log(document.getElementsByTagName("h1"))

let b=document.querySelector("h1")
console.log(b)


console.log(document.querySelector(".h1"))


let c=document.querySelectorAll("h1")
console.log(c)


console.log(document.querySelectorAll("h2"))

let name=document.getElementById("name")
console.log(name)

// parent element
console.log(name.parentElement)
let parentelement=name.parentElement

// children element
console.log(name.children)

console.log(parentelement.children)

// first element child
console.log(parentelement.firstElementChild)

// last element child
console.log(parentelement.lastElementChild)


// creating a DOM element
let newelement= document.createElement("h1")
console.log(newelement)


newelement.innerText="hello abdul";
console.log(newelement)

// append child()
parentelement.appendChild(newelement)
console.log(parentelement)


// prepend ()
parentelement.prepend(newelement)
console.log(parentelement)


// before (its added first )
parentelement.before(newelement)
console.log(parentelement)


// after (it added last)
parentelement.after(newelement)
console.log(parentelement)


parentelement.before("hello rehaman")
parentelement.after("hi world")


// on click
let btn=document.getElementById("btn")
console.log(btn)

btn.onclick=function(){
    alert("button clicked")
    console.log("button clicked")
}


// // add event listener (it can attach events)
btn.addEventListener("click",function(){
    alert("button clicked")
})


function click (){
alert("button clicked")
btn.innerText="button clicked"
console.log("welcome")
}



btn.addEventListener("click",click )

// sibbling
const el = document.getElementById('two');

console.log(el.previousElementSibling.textContent); 
console.log(el.nextElementSibling.textContent);   


// set time out
let one =1;
console.log(one)

let two=2;
let three=3;
let four =4;
console.log(three)

setTimeout(() => {
    console.log(two)
}, 100);


