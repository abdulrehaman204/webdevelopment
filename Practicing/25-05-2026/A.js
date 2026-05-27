// Error handlings
// Try...catch
try {
  let result = riskyFunction();
  console.log(result);
} catch (error) {
  console.log("Something went wrong");
  console.log(error.message);
}

// Finally 
try {
  console.log("Running...");
} catch (error) {
  console.log("Error occurred");
} finally {
  console.log("Cleanup done");
}

// throw
function divide(a,b){
    if(b===0){
        throw new Error("cannot divide by zero");
    }
    return a/b;
}
try{
    console.log(divide(10,0))
}
catch(error){
    console.log(error.message)
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


// Async error handlings
async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");

    if (!response.ok) {
      throw new Error("API request failed");
    }

    let data = await response.json();
    console.log(data);

  } catch (error) {
    console.log("Fetch error:", error.message);
  }
}

fetchData();

// promises .catch()
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("Error:", error));


// login process using error handlings
function login(username,password){
    try{
        if(!username || !password){
            throw new Error("Username and password are required");
        }
        const correctusername="Abdul"
        const correctpassword = 12345
        if(username !== correctusername || password !== correctpassword){
            throw new Error("Invalid username or password");
        }
        console.log("Login successfull")
    }
    catch(error){
         console.log("Login failed:", error.message);
    }
    finally{
         console.log("Login process completed");
    }
}

login("Abdul",12345)


// ES6 datastructures 
// set
const numbers = new Set();

numbers.add(10);
numbers.add(20);
numbers.add(10); 

console.log(numbers);
console.log(numbers.has(20)); 
console.log(numbers.size);    

// map
const user = new Map();

user.set("name", "Abdul");
user.set("age", 25);

console.log(user.get("name"));
console.log(user.has("age"));
console.log(user.size);

for (let [key, value] of user) {
  console.log(key, value);
}

// weakset
let obj = { Tool: "JavaScript" };

const weakSet = new WeakSet();
weakSet.add(obj);

console.log(weakSet.has(obj));

// weakmap
let userObj = {};

const weakMap = new WeakMap();

weakMap.set(userObj, "Private Data");

console.log(weakMap.get(userObj));

// examples
const nums = [1,2,2,3,4,5,5,5,6,7,8]
const unique = [...new Set(nums)]
console.log(unique)

const fruits = new Set(["Apple", "Mango"]);
for (let fruit of fruits) {
  console.log(fruit);
}

const users = new Map();
users.set(1, "Abdul");
users.set(2, "Rehaman");
console.log(users.get(1));

// iterators 
const colors = ['red', 'green', 'blue'];
const GFG = colors[Symbol.iterator]();
console.log(GFG.next());
console.log(GFG.next());
console.log(GFG.next());
console.log(GFG.next());

// genarators
function* gfg() {
    yield 10;
    yield 20;
    yield 30;
}
const generator = gfg();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

function* demo() {
  console.log("Start");
  yield 1;
  console.log("Middle");
  yield 2;
  console.log("End");
}
const g = demo();
g.next(); 
g.next(); 
g.next(); 


// common methods
// parsint
console.log(parseInt("123"));      
console.log(parseInt("123.45"));   
console.log(parseInt("abc"));

// parsefloat
console.log(parseFloat("12.33"))
console.log(parseFloat("2.44px"))

// json.stringfy
const obj2 = { name: "Alice", age: 25 };
const str = JSON.stringify(obj2);
console.log(str);

// json.parse
const str1 = '{"name":"Abdul","age":25}';
const obj3 = JSON.parse(str1);
console.log(obj3.name); 

// tostring
let n = 10;
console.log(n.toString())

// tofixed
let num1 = 12.345;
console.log(num1.toFixed(2)); 

// touppercase
let name = "javascript";
console.log(name.toUpperCase());

// tolowercase
let text = "HELLO";
console.log(text.toLowerCase());


// API calls
fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>data.json())
.then((result)=>console.log(result))

// API methods 
// POST the data to submit
const Data = {name : "Abdul", username:"rehaman",email:"A@gamail.com"}
fetch("https://jsonplaceholder.typicode.com/users",{
    method : "POST",
    headers : {'content-type' : 'application/json'},
    body : JSON.stringify(Data)
})
.then((response)=>response.json())
.then((result)=>console.log(result))

// PUT Request to Update Data
const updateddata = {id : 2, name : "Rehaman"}
fetch("https://jsonplaceholder.typicode.com/users/2",{
    method : "PUT",
    headers:{'content-type' : 'application/json'},
    body : JSON.stringify(updateddata)
})
.then((response)=>response.json())
.then((result)=>console.log(result))

// PATCH 
const updateddatas = {id : 1, name : "Rehaman"}
fetch("https://jsonplaceholder.typicode.com/users/2",{
    method : "PATCH",
    headers:{'content-type' : 'application/json'},
    body : JSON.stringify(updateddatas)
})
.then((response)=>response.json())
.then((result)=>console.log(result))

// DELETE Request to Remove Data
fetch("https://jsonplaceholder.typicode.com/users/1",{
    method : "DELETE"
})
.then((response)=>response.json())
.then((result)=>console.log("Deleted :",result))


// search user
async function searchUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    const user = users.find(
      user => user.name === "Leanne Graham"
    );

    console.log(user);

  } catch (error) {
    console.log(error.message);
  }
}

searchUser();
