// authtoken task

const message=document.getElementById("message")
const loginbtn=document.getElementById("loginbtn")
const logoutbtn=document.getElementById("logoutbtn")

checkAuth();

loginbtn.addEventListener("click",() => {
    localStorage.setItem("authtoken","12345htk")
    checkAuth();
}
)


logoutbtn.addEventListener("click",() => {
    localStorage.removeItem("authtoken")
    checkAuth();
}
)


function checkAuth(){
    const token=localStorage.getItem("authtoken")

if (token){
    message.innerText="hello user"
    loginbtn.style.display="none"
    logoutbtn.style.display="inline"
}
else{
    message.innerText="please login"
    loginbtn.style.display="inline"
    logoutbtn.style.display="none"
}

}



// error handlings

console.log("Hello")


// try and catch
try{
     console.log(Abdul)
}
catch (error){
    console.log(error)
    console.log("error occured")
}



function validage(age) {
  if (age < 18) {
    throw ("Age must be 18 or older."); 
  }
  return true;
}

try {
  validage(16);
} catch (error) {
  console.log(error); 
}



try {
  console.log("Trying...");
  throw new Error("Something went wrong");
} catch (error) {
  console.error("Caught error:", error.message);
} finally {
  console.log("Cleanup finished.");
}


// output methods

// alert("Hello")

document.write("welcome")


let d=document.getElementById("h1")
let d1=document.getElementById("hi")

console.log(d)
console.log(d1)


// BOM (browser object model)

console.log(screen.width)

console.log(screen.height)

console.log(navigator.userAgent)

let data= prompt("enter name")

// parsint (convert the values into numbers)
let m=parseInt(data)

console.log(typeof(m))

let k=m.toString()

console.log(typeof(k))

let f=10.22333

console.log(f)

console.log(f.toFixed(2))



