// webstorages

// 1. localStorage
// localStorage stores data permanently (until the user clears it or your code removes it).
localStorage.setItem("Username","Abdul")
const name = localStorage.getItem("Username");
console.log(name);

localStorage.setItem("message","Hello world")
let Message = localStorage.getItem("message")
console.log(Message)

// removing the object
localStorage.removeItem("message")

// // update data
localStorage.setItem("Username", "David");

// Check if Key Exists
if (localStorage.getItem("Username")) {
    console.log("Exists");
}

// storing object
let USER = {name:"AbdulRehaman",age:23}
localStorage.setItem("USER", JSON.stringify(USER))
let data = JSON.parse(localStorage.getItem("USER"))
console.log(data.name)


// storing arrays
const colors = ["Red", "Blue", "Green"];
localStorage.setItem("colors", JSON.stringify(colors));
const color = JSON.parse(localStorage.getItem("colors"));
console.log(color);


// counter application
let count = localStorage.getItem("count") || 0;
document.getElementById("count").innerText=count;

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


// remembered username 
function saveName() {
    const name1 = document.getElementById("name1").value;
    localStorage.setItem("name", name1);
}

function showName() {
    const name2 = localStorage.getItem("name");
    alert(name2);
}

// 2. sessionStorage
// sessionStorage works the same way but the data is removed when the browser tab is closed.
sessionStorage.setItem("theme", "dark");
const theme1 = sessionStorage.getItem("theme");
console.log(theme1);


// login session
sessionStorage.setItem("isLoggedIn", "true");
if (sessionStorage.getItem("isLoggedIn") === "true") {
    console.log("Welcome!");
}
sessionStorage.removeItem("isLoggedIn");



