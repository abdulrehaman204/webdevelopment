// DOM 

// Select and Change Text (Easy)
const tittle = document.getElementById("title")
const button = document.getElementById("changeBtn")

button.addEventListener("click",()=>{
    tittle.textContent="Hello JavaScript!"
})


// Change Background Color (Easy)
const buttons = document.getElementById("btn");
const boxes = document.querySelectorAll(".box");

buttons.addEventListener("click", function(){

    boxes.forEach(function(box){
        box.style.backgroundColor="lightblue";
    });

});


// Add New List Item (Easy)
const input=document.getElementById("taskInput");
const btn=document.getElementById("addBtn");
const list=document.getElementById("list");

btn.addEventListener("click",function(){
    if(input.value==="") return;
    const li = document.createElement("li");
    li.textContent=input.value;
    list.appendChild(li)
    input.value="";
})


// Remove an Element (Medium)
const students = document.getElementById("students")
const removebtn = document.getElementById("removeBtn")

removebtn.addEventListener("click",function(){
    if(students.lastElementChild){
        students.lastElementChild.remove()
    }
})


// Replace an Element (Medium)
const bun=document.getElementById("bun");
bun.addEventListener("click",function(){
    const replace = document.querySelector("#content p")
    const h2 = document.createElement("h2")
    h2.textContent="New Heading"
    replace.replaceWith(h2)
})


// DOM Traversing (Parent Element)
const buttonss = document.getElementById("Highlight");
buttonss.addEventListener("click",function(){
    const parent = this.parentElement;

    const heading = parent.querySelector("h2");
    const paragraph = parent.querySelector("p");

    heading.style.color = "red";
    paragraph.style.color = "red";
})


// Toggle Dark Mode
const bttn=document.getElementById("mode");

bttn.addEventListener("click",function(){

    document.body.classList.toggle("dark");

});


// Delete Clicked Item
const items=document.querySelectorAll("#items li");

items.forEach(function(item){
    item.addEventListener("click",function(){
        this.remove();
    });

});


// DOM Traversal Challenge
const b=document.querySelectorAll(".boxes button");
b.forEach(function(button){
    button.addEventListener("click",function(){
        const current=this.parentElement;
        const next=current.nextElementSibling;
        if(next){
            next.style.backgroundColor="yellow"
        }else{
            alert("last box")
        }
    })
})



// adding events
const bt = document.getElementById('mybutton')
const msg = document.getElementById('message')

bt.addEventListener("click",function(){
    bt.style.backgroundColor="lightblue"
    msg.innerHTML="button clicked"
})

bt.addEventListener("mouseenter", function () {
     msg.innerText = "Mouse is over the button!";
});

bt.addEventListener("mouseleave", function () {
    msg.innerText = "Mouse left the button!";
});

bt.addEventListener("keydown",function(){
     if (event.key === "Enter") {
    msg.style.color = "green";
    msg.innerText = "Enter key pressed!";
    }
})


