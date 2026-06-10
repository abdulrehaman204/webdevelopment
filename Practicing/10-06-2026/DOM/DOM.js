// selecting DOM elements

// get element by id
var element = document.getElementById('h1')
console.log(element)
element.style.color = "green"
element.style.textAlign = "center";
element.style.margin = "30px";
element.style.fontSize = "30px";

// get element by classname
var elements = document.getElementsByClassName('selector');
elements[0].style.color = "Red";
elements[0].style.textAlign = "center";
elements[0].style.marginTop = "30px";

// get element by tagname
let paragraph = document.getElementsByTagName('p')
paragraph[0].style.color = "Blue";
paragraph[1].style.color = "Brown";
paragraph[0].style.textAlign = "center";
paragraph[1].style.textAlign = "center";
paragraph[0].style.fontSize = "20px";

// get element by queryselector
var element = document.querySelector('div')
element.style.color = "green";
element.style.textAlign = "center";
element.style.margin = "30px";
element.style.fontSize = "15px";

// get element by query selector all
var elements = document.querySelectorAll('.demo')
elements[0].innerHTML="This is queryselector all"
elements[0].style.color = "Red";
elements[0].style.textAlign = "center";
elements[0].style.marginTop = "30px";

// adding event listener
var button = document.getElementById('btn')
button.addEventListener("click",function(){
    document.getElementById('try').innerText="You clicked Me"
})

button.style.backgroundColor="yellow"
button.style.alignItems="center"
button.style.cursor="pointer"
button.style.padding="10px"

// creating DOM element
var newelement = document.createElement('h1')
console.log(newelement)
newelement.innerHTML="New element created"

// append
var parent = document.getElementById('list')
let newItem = document.createElement("li");
newItem.textContent = "New Item";
parent.append(newItem);

// prepend
newItem.textContent = "First Item";
parent.prepend(newItem);

// remove
let item = document.getElementById("item");
item.remove();

// adding events
var btn = document.getElementById('mybutton')
var msg = document.getElementById('message')

btn.addEventListener("click",function(){
    btn.style.backgroundColor="lightblue"
    msg.innerHTML="button clicked"
})

btn.addEventListener("mouseenter", function () {
     msg.innerText = "Mouse is over the button!";
});

btn.addEventListener("mouseleave", function () {
    msg.innerText = "Mouse left the button!";
});

btn.addEventListener("keydown",function(){
     if (event.key === "Enter") {
    msg.style.color = "green";
    msg.innerText = "Enter key pressed!";
    }
})

