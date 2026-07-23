// realtime examples 

// Close a Modal When Clicking Outside (Event Bubbling)
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

overlay.addEventListener("click", () => {
    console.log("Modal Closed");
});

modal.addEventListener("click", (e) => {
    e.stopPropagation();
});


// Shopping Cart (Event Delegation)
const products = document.getElementById("products");

products.addEventListener("click", (e) => {

    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
});


// Navigation Menu (Capture vs Bubble)
nav.addEventListener("click", () => {
    console.log("Bubble");
});

nav.addEventListener("click", () => {
    console.log("Capture");
}, true);

document.querySelector("a")
.addEventListener("click", () => {
    console.log("Link");
});


// Todo List with Complete and Delete (Event Delegation)
const todos = document.getElementById("todos");

todos.addEventListener("click", (e) => {

    const li = e.target.closest("li");

    if (!li) return;

    if (e.target.classList.contains("done")) {
        li.style.textDecoration = "line-through";
    }

    if (e.target.classList.contains("delete")) {
        li.remove();
    }

});


// Nested Div (Event Bubbling Demo)
document.getElementById("grandparent").addEventListener("click",()=>{
    console.log("Grand Parent")
})

document.getElementById("parent").addEventListener("click",()=>{
    console.log("Parent")
})

document.getElementById("child").addEventListener("click",()=>{
    console.log("Children")
})


// Product List (Event Delegation + dataset)
const list = document.getElementById("product");
const output = document.getElementById("output");

list.addEventListener("click",(e)=>{
    output.innerText="Selected: " + e.target.dataset.name;
})


// show/hide password
const password = document.getElementById("password");
const toggle = document.getElementById("toggle");

toggle.addEventListener("change",()=>{
    password.type = toggle.checked ? "text" : "password"
})


// Button Click Counter
var count =0;
const countdisplay = document.getElementById("count")

document.getElementById("incrementbtn").addEventListener("click",()=>{
   count++;
   countdisplay.textContent=count;
})

document.getElementById("resetbtn").addEventListener("click", () => {
    count = 0;
    countdisplay.textContent = count;
});


