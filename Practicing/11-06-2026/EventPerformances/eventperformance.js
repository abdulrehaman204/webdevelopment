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


// logical coding tasks 

// debounce function
function debounce(fn,delay){
    var timer;
    return function(...args){
         clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

const search = debounce(() => {
    console.log("Searching...");
}, 500);

document.querySelector("input")
    .addEventListener("input", search);

// debounce search
function debounce(fn, delay) {
    var timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

const searchHandler = debounce((event) => {
    console.log("API Call:", event.target.value);
}, 500);

document
    .getElementById("search")
    .addEventListener("input", searchHandler);

// throttled scroll position
function throttle(fn, delay) {
    let last = 0;

    return (...args) => {
        const now = Date.now();

        if (now - last >= delay) {
            last = now;
            fn(...args);
        }
    };
}

window.addEventListener(
    "scroll",
    throttle(() => {
        document.getElementById("scrollPos").textContent =
            window.scrollY;
    }, 200)
);



