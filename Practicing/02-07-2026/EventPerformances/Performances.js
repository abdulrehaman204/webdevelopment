// event performance

// Normal event
const btn = document.getElementById('btn')
var c = 0;
btn.addEventListener("click",()=>{
    c++;
    console.log("Button clicked",c)
})

// Throttling
let lastclick = 0;
let AC = 0;
btn.addEventListener("click",()=>{
    const current = Date.now();
    if(current - lastclick>2000){
        AC++;
        console.log("Throttling",AC)
        lastclick = current;
    }
})

// Debouncing
let A =0;
let AA = setTimeout(()=>{
      A++;
      console.log("Debouncing",A)
},1000)
// clearTimeout(AA)


// logical tasks

// Button Click Counter (Normal Event)
let count =0;
document.getElementById("btn1").addEventListener("click",()=>{
    count++;
    document.getElementById("count").innerText="Count :"+count;
})


// Search Box (Debouncing)
let timer;

document.getElementById("search").addEventListener("input", function () {
  clearTimeout(timer);
  const value = this.value;
  timer = setTimeout(() => {
    document.getElementById("output").innerText =
      "Searching for: " + value;
  }, 500);
});


// Scroll Event Logger (Throttling)
let allow = true;

window.addEventListener("scroll", function () {
  if (allow) {
    document.getElementById("output2").innerText =
      "Scroll at: " + new Date().toLocaleTimeString();

    allow = false;

    setTimeout(() => {
      allow = true;
    }, 1000);
  }
});


// Live Price Calculator (Normal Event)
document.getElementById("qty").addEventListener("input", function () {
  let qty = this.value;
  document.getElementById("total").innerText =
    "Total: ₹" + (qty * 100);
});


// API Search Simulation (Debouncing + Real Use Case)
let timers;

document.getElementById("searchBox").addEventListener("input", function () {
  clearTimeout(timers);

  const value = this.value;

  timers = setTimeout(() => {
    document.getElementById("result").innerText =
      "API Call: Fetching results for '" + value + "'";
  }, 700);
});