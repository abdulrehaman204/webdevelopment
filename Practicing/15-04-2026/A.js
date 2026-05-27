// API calls

// fetch 
// axios

// fetch  Methods
// GET
// POST
// PUT
// PATCH
// DELETE


// GET Request to Retrieve Data
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.json())
.then((data)=>console.log(data))



// POST Request to Submit Data
const data = {name : "Abdul", age : 23}
fetch("https://jsonplaceholder.typicode.com/users",{
    method : "POST",
    headers:{'content-type': 'application/json'},
    body : JSON.stringify(data)
}
)
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



// using with async and await
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}


// error handlings 
// Example of using fetch() to get data from an API
// Note: The link used here (https://api.example.com/data) is just a placeholder.
// It’s not a real API, so this code will NOT show any output in the console.

fetch('https://api.example.com/data')
  .then(response => {
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
  })
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Fetch error:', error.message));



