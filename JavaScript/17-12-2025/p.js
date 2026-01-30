// Async (The async keyword is used before a function to make it asynchronous)
//An async function always returns a Promise
//If you return a value, it’s automatically wrapped in a Promise)

async function name(){
    return "Abdul"
}

name().then(result => console.log(result))



// await (The await keyword is used inside an async function to pause execution until a Promise resolves.)
async function example() {
  const result = await Promise.resolve("Done!");
  console.log(result);
}

example();


// promises
// pending : resolve and reject
let p= new Promise((resolve,reject)=>{
    let percentage=100
   if(percentage==100){
    resolve("Topper")
   }
   else {
    reject("failure")
   }
})

p.then((a)=>{
    console.log(a)
})

p.catch((b)=>{
    console.log(b)
})




// smartconvert
function smartConvert(value) {
    let originalType = typeof value;
    let convertedValue;
    let convertedType;

    if (originalType === "string" && !isNaN(value)) {
        convertedValue = Number(value);
        convertedType = typeof convertedValue;
    } else if (originalType === "boolean") {
        convertedValue = value.toString();
        convertedType = typeof convertedValue;
    } else {
        convertedValue = value;
        convertedType = originalType;
    }

    console.log(`Original: ${originalType}, Converted: ${convertedType}`);
    return convertedValue;
}

// Examples
smartConvert("123"); // Original: string, Converted: number
smartConvert(true);  // Original: boolean, Converted: string


// smart convert
function smart(value){
    console.log("original :",typeof(value))
    value= 123;
    console.log("converted :",typeof(value))
    
}

smart("123")
smartConvert(true)


// random loop
let randomNumber;

while (randomNumber !== 7) {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
}



// object iteration
let students = { Alice: 85, Bob: 92, Carol: 78 }
for(let key in students){
    console.log(key ,":",students[key])
}



// closure multipler
function createMultiplier(x) {
  return function (number) {
    return number * x;
  };
}
const multiplyBy3 = createMultiplier(3);
console.log(multiplyBy3(5)); 



// average calculator
let ar=[{name: "John", age: 25}, {name: "Jane", age: 30}, {name: "Bob", age: 20}]
let ages = ar.map(p => p.age);
let average = ages.reduce((sum, age) => sum + age, 0) / ages.length;

console.log(average)


// prime numbers
function findprimes(n){
    let arr=[1,2,3,4,5,6,7,8,9,10]
    if(n>=1){
        return arr
    }
}

console.log(findprimes(10))



// multiplication table
function multiplicationTable(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += (i * j) + " ";
    }
    console.log(row.trim());
  }
}


multiplicationTable(3)
