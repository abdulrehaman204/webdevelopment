// webstorages
// local storages
localStorage.setItem("Name","Abdul")
let Name = localStorage.getItem("Name")
console.log(Name)

localStorage.setItem("message","Hello world")
let Message = localStorage.getItem("message")
console.log(Message)

// removing the object
localStorage.removeItem("message")

// storing object
let USER = {name:"AbdulRehaman",age:23}
localStorage.setItem("USER", JSON.stringify(USER))
let data = JSON.parse(localStorage.getItem("USER"))
console.log(data.name)

// key exists
function checkkey(key){
    return localStorage.getItem(key) !== null;
}
console.log(checkkey("USER"))

// counter
let count =localStorage.getItem("count") || 0;
document.getElementById("count").innerText=count

function increment(){
    count++;
    localStorage.setItem("count",count)
    document.getElementById("count").innerText=count
}

// Save Input Field Data
let input = document.getElementById("name")
input.value = localStorage.getItem("name") || "";
input.addEventListener("input", ()=>{
    localStorage.setItem("name",input.value)
})

// toggle theme
let theme = localStorage.getItem("theme") || "light";
document.body.className = theme;
function Toggle(){
    theme = theme === "light"? "dark" : "white"
    localStorage.setItem("theme",theme)
    document.body.className=theme
}


// session storage 
// Save data
sessionStorage.setItem("user", "Abdul");
// Get data
let us = sessionStorage.getItem("user");
console.log(us);


sessionStorage.setItem("session user","Rehaman")
let Users = sessionStorage.getItem("session user")
console.log(Users)


