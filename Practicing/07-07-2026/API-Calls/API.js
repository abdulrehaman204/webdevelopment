// API CALLS
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.json())
.then((result)=>console.log(result))

// API methods
// POST
const Data = {name:"Abdulrehaman",age:23}
fetch("https://jsonplaceholder.typicode.com/users",{
    method : "POST",
    headers : {'content-type':'application/json'},
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



// using with async and await
async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
  })
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Fetch error:', error.message));

