// DOM selecting elemnts

const container = document.getElementById("container");
console.log(container);


const items = document.getElementsByClassName("item");
console.log(items[0]);


const listItems = document.getElementsByTagName("li");
console.log(listItems.length);


const title = document.querySelector(".title");
console.log(title.textContent);
title.style.color="red"


const allItems = document.querySelectorAll(".item");
allItems.forEach(item => {
  console.log(item.textContent);
});


// DOM traversing elements

const list = document.getElementById("list");
console.log(list.parentElement);
list.style.color="green"


console.log(list.children);

console.log(list.firstElementChild);
console.log(list.lastElementChild);


const firstItem = document.querySelector(".item");
console.log(firstItem.nextElementSibling);


const secondItem = firstItem.nextElementSibling;
console.log(secondItem.previousElementSibling);


// changing content
title.textContent = "Hello JavaScript!";
title.innerHTML = "<span>New Title</span>";

// changing styles
title.style.color = "blue";
title.style.backgroundColor = "yellow";


// adding new elements
const newItem = document.createElement("li");
newItem.textContent = "mango";
list.appendChild(newItem);

newItem.textContent = "papaya";
list.appendChild(newItem);


// removing elements
const orange = list.lastElementChild;
orange.remove();


// event handlings
const button = document.getElementById("btn")
button.addEventListener("click" ,function(){
      alert("Button Clicked")
})

button.addEventListener("mouseenter", function(){
    button.style.backgroundColor="yellow"
})

button.addEventListener("mouseleave",function(){
    button.style.backgroundColor="red"
})

button.style.cursor="pointer"
button.style.padding="5px"


button.addEventListener("click",function(){
    document.getElementById('try').innerText="You clicked the Button"
})


// event bubbling
document.getElementById("parent").addEventListener("click",function(){
    console.log("parent element clicked")
})

document.getElementById("child").addEventListener("click",function(){
    console.log("child element clicked")
})

// Stops event from moving upward.
document.getElementById("child")
.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("Only child");
});


// event capturing
document.getElementById("parent")
.addEventListener("click",() => {
        console.log("Parent capturing");
    },
    true
);

document.getElementById("child")
.addEventListener("click", () => {
    console.log("Child clicked");
});


// event delegation
document.getElementById("list")
.addEventListener("click", function(event) {

    if (event.target.tagName === "LI") {
        console.log(event.target.textContent);
    }

});

