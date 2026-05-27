// selecting DOM elements

// BY id
var element = document.getElementById("h1")
console.log(element)
element.style.color="green";
element.style.textAlign = "center";
element.style.margin = "30px";
element.style.fontSize = "30px";

// BY class Name
var elements = document.getElementsByClassName('selector');
elements[0].style.color = "Red";
elements[0].style.textAlign = "center";
elements[0].style.marginTop = "30px";


//BY Tag Name
let paragraph = document.getElementsByTagName('p')
paragraph[0].style.color = "Blue";
paragraph[1].style.color = "Brown";
paragraph[0].style.textAlign = "center";
paragraph[1].style.textAlign = "center";
paragraph[0].style.fontSize = "20px";


// query selector
var element = document.querySelector('div')
element.style.color = "green";
element.style.textAlign = "center";
element.style.margin = "30px";
element.style.fontSize = "15px";


// query selector all
var elements = document.querySelectorAll('.demo')
elements[0].innerHTML="This is queryselector all"
elements[0].style.color = "Red";
elements[0].style.textAlign = "center";
elements[0].style.marginTop = "30px";


// // creating a DOM element
// var newelement = document.createElement('h1')
// console.log(newelement)
// newelement.innerText="New element created"


// Addeventlistener
document.getElementById('btn').addEventListener("click",function(){
    document.getElementById('try').innerText="You clicked the Button"
})

var element=document.getElementById('btn')
element.style.color="Black";
element.style.textAlign = "center";
element.style.background="Yellow"
element.style.alignItems="center"
element.style.cursor="pointer"
element.style.padding="10px"


// DOM traversing elements
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










