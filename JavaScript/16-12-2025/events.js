// Normal event
let button=document.getElementById("button")
let a=0;
button.addEventListener("click",function (){
    a+=1;
    console.log("value of a",a)
    console.log("button clicked")
})



// Throttling
let lastclick=0;
let b=0;

button.addEventListener("click",function (){
let current = Date.now()
if(current - lastclick > 2000){
    b+=1;
    console.log("value of b",b)
    lastclick = current;
}
    console.log("button clicked")
})



// debouncing 
let c=0;
let T;
button.addEventListener("click",function(){
    clearTimeout(T);
    T=setTimeout(() => {
        c+=1;
        console.log("value of c",c)
    }, 2000);
})



function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    },delay);
  };
}


// call back functions 
function Abdul(s){
    console.log(s)
}

function Hi(a,b,c){
    console.log("Hi! I am Abdul")
    c(a+b);
}

Hi(10,20,Abdul)



function calculate(a, b, callback) {
  const result = a + b;
  callback(result);
}

calculate(5, 3, function(result) {
  console.log("Result:", result);
});


// promise
// resolve and reject


let p=new Promise((resolve,reject) =>{
    let status=false;
    if(status){
       // console.log("resolved")
       resolve("success")
    }
    else {
        //console.log("reject")
        reject("failure")
    }
})


p
.then((a)=>{
    console.log(a)
})


.catch((b)=>{
    console.log(b)
})



let myPromise = new Promise(function(myResolve, myReject) {
  result = true;

// Code that might take some time goes here

  if (result == true) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});


myPromise.then((a)=>{
    console.log(a)
})


