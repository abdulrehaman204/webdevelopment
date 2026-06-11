// event handlings

// event buubbling
document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

// event capturing
document.getElementById("message").addEventListener("click",() =>
     console.log("Parent clicked"),
  true
);

document.getElementById("try").addEventListener("click",
  () => console.log("Child clicked"),
  true
);


// event delegation
document.getElementById("List").addEventListener("click", (e)=> {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});


// logical coding tasks

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


// change background color
function randomColor() {
    const color = "#" + Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    return color;
}

document.getElementById("colorBtn").addEventListener("click", () => {
    const color = randomColor();

    document.body.style.backgroundColor = color;
    document.getElementById("colorCode").textContent = color;
});

// show/hide password
const password = document.getElementById("password");
const toggle = document.getElementById("toggle");

toggle.addEventListener("change", () => {
    password.type = toggle.checked ? "text" : "password";
});

// live greeting
const input =document.getElementById("nameInput")
const greeting = document.getElementById("greeting")

input.addEventListener("input",()=>{
      const name = input.value.trim()
    greeting.textContent=name
    ? `hello, ${name}`
    : `hello!`
})

// character count
const textarea = document.getElementById("messages");
const counts = document.getElementById("counts");
const warning = document.getElementById("warning");

textarea.addEventListener("input", () => {
    const length = textarea.value.length;

    counts.textContent = length;

    if (length > 100) {
        warning.textContent = "Character limit exceeded!";
        warning.style.color = "red";
    } else {
        warning.textContent = "";
    }
});



