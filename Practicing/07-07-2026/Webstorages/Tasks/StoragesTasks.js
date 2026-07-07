// Save User Name
var name = prompt("Enter your name:")
localStorage.setItem("UserName",name)
var username = localStorage.getItem("UserName")

document.getElementById("output").innerHTML="Welcome Mr "+username;


// Page Visit Counter
var count = localStorage.getItem("visitcount")
if(count === null){
    count = 1;
}else{
    count = parseInt(count)+1
}

localStorage.setItem("visitcount",count)
document.getElementById("counter").innerHTML =`You visited this page ${count} times`;


// Dark Mode Preference
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
    document.getElementById("themeBtn").addEventListener("click", () => {
        document.body.classList.toggle("dark");
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });


// student information form
function saveData(){
    let student = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        course: document.getElementById("course").value
    }
    localStorage.setItem("student",JSON.stringify(student))
    displayData()
}

function displayData(){
   let data = localStorage.getItem("student")
   if(data){
      let student = JSON.parse(data)
     document.getElementById("result").innerHTML =
            `Name: ${student.name}<br>
             Age: ${student.age}<br>
             Course: ${student.course}`;
   }
}
displayData();

