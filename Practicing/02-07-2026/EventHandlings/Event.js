// event bubbling
document.getElementById('parent').addEventListener("click",()=>{
    console.log("parent clicked")
})

document.getElementById('child').addEventListener("click",()=>{
    console.log("Button clicked")
})


// event capturing
document.getElementById('parent2').addEventListener("click",()=>{
    console.log("parent clicked")
},
true
)

document.getElementById('child2').addEventListener("click",()=>{
    console.log("Button clicked")
},
true
)


// event delegation
let items = document.querySelectorAll('li')
items.forEach((item)=>{
    item.addEventListener("click",()=>{
        console.log(item.textcontent="Fruits")
    })
})


const list = document.getElementById("fruits");
list.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});



// realtime examples 

// to-do list (event delegation)
const input = document.getElementById("taskInput");
const btn = document.getElementById("addBtn");
const list2 = document.getElementById("list");

btn.addEventListener("click",()=>{
    const li = document.createElement('li')
     li.innerHTML = `<span class="task">${input.value}</span>
     <button class="delete">X</button>`;
     list2.appendChild(li)
     input.value=""

     list2.addEventListener("click",(e)=>{
         if(e.target.classList.contains("delete")){
            e.target.parentElement.remove();
         }
          if (e.target.classList.contains("task")) {
              e.target.parentElement.style.textDecoration ="line-through";
          }
     })
})


// Nested Div (Event Bubbling Demo)
document.getElementById('grandparent').addEventListener("click",()=>{
    console.log("Grand parent clicked")
})

document.getElementById("parent3").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child3").addEventListener("click", () => {
  console.log("child clicked")
});


// Product List (Event Delegation + dataset)
const list3 = document.getElementById("products");
const output = document.getElementById("output");

list3.addEventListener("click",(e)=>{
    output.innerText="Selected: " + e.target.dataset.name;
})


// Stop Propagation Example
document.getElementById("box").addEventListener("click", () => {
  console.log("Box clicked");
});

document.getElementById("btn").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Button clicked");
});


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





