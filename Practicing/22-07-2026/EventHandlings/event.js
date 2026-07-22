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
},true
)

document.getElementById('child2').addEventListener("click",()=>{
    console.log("Button clicked")
},true
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