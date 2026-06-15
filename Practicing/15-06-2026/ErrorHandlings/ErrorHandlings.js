// error handlings
// try...catch
try{
   let results = Abdul;
   console.log(results)
}
catch(error){
    console.log("error occured : ",error.message)
}

// try, catch and finally
try {
  let result = riskyFunction();
  console.log(result);
} catch (error) {
  console.error("Something went wrong:", error.message);
} finally {
  console.log("This always runs");
}

// type error
try{
    let num = 5;
    console.log(num.toUpperCase())
}catch(error){
    console.log("Type error : ",error.message)
}finally{
    console.log("This always runs")
}

// try , catch, finally and throw 
try {
    let re = 10 / 0;
    if (!isFinite(re)) {
        throw new Error("Cannot divide by zero");
    }
    console.log(re);
} catch (error) {
    console.error("Error occurred:", error.message);
} finally {
    console.log("Execution completed");
}

// throwing custom error
function checkage(age){
    if(age<18){
        throw new Error("Age must be 18 or above")
    }
    console.log("Acess granted")
}
try{
    checkage(16)
}catch(error){
    console.log(error.message)
}

// handling Async 
async function fetchData() {
  try {
    let response = await fetch("https://api.example.com");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Fetch error:", error.message);
  }
}
fetchData()

// coding tasks 
// Safe JSON Parser
function safeparsejson(str){
    try{
        return JSON.parse(str)
    }catch(error){
        console.log("Invalid JSON input")
        return null ;
    }
}

console.log(safeparsejson('{"name":"Abdul"}'))
console.log(safeparsejson("{name:Abdul}"))

// Division with Error Handling
function divide(a,b){
    if(b===0){
        throw new Error("Cannot divide by zero");   
    }
    return a/b;
}
    try{
        console.log(divide(10,2))
        console.log(divide(10,0))
    }catch(error){
        console.log("Error:",error.message)
    }

// Async API Fetch Simulator
function getuserdata(id){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(typeof id !== "number" | id <=0){
           reject("Invalid user id")
        }else {
            resolve(`User data for ID: ${id}`)
        }
    },1000);
    })
}

async function fetchuser(){
    try{
        const result = await getuserdata(5)
        console.log(result)
    }catch(error){
        console.log("Error:",error)
    }
}
fetchuser()

// Array Access Safety Wrapper
function getElement(arr, index) {
  if (!Array.isArray(arr)) {
    throw new Error("Input is not an array");
  }
  if (index < 0 || index >= arr.length) {
    throw new Error("Index out of bounds");
  }
  return arr[index];
}

// Testing
try {
  console.log(getElement([10, 20, 30], 1)); 
  console.log(getElement([10, 20, 30], 5)); 
} catch (error) {
  console.log("Error:", error.message);
}

// Custom Error Class for Validation
class ValidationError extends Error {}

function validateAge(age) {
  if (typeof age !== "number" || age < 18) {
    throw new ValidationError("Age must be a number and at least 18");
  }
  return "Valid age";
}
// Testing
try {
  console.log(validateAge(20)); // Valid age
  console.log(validateAge(15)); // error
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("Validation Error:", error.message);
  } else {
    console.log("Other Error:", error.message);
  }
}

