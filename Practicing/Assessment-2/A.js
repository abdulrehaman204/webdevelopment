// function deepClone(obj, seen = new WeakMap()) {
//   if (obj === null || typeof obj !== "object") return obj;

//   if (seen.has(obj)) return seen.get(obj);

//   const clone = Array.isArray(obj) ? [] : {};
//   seen.set(obj, clone);

//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       clone[key] = deepClone(obj[key], seen);
//     }
//   }

//   return clone;
// }

// console.log(deepClone({name:"Abdul",Age:23}))

//   let timeLeft = 10;
//         const timerElement = document.getElementById("timer");

//         const countdown = setInterval(() => {
//             timeLeft--;
//             timerElement.textContent = timeLeft;

//             if (timeLeft === 0) {
//                 clearInterval(countdown);
//                 timerElement.textContent = "Time Up!";
//             }
//         }, 1000);



// function Countwords(Sentence){
//     let words = Sentence.split(" ")
//     let count = {}
//     words.forEach(word => {
//         count[word] = (count[word] || 0 ) + 1;
//         });
//         return count;
// }
// console.log(Countwords("I love JavaScript"))


// shallow copy
let a = {name:"abdul",age:23}
let b = {...a}
console.log(b)


// deep copy
let c = {name:"abdul",age:23}
let d=JSON.parse(JSON.stringify(c))
console.log(d)