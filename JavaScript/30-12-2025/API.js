// API Methods

// get (fetching the data)
// post (to send the data)
// put (it change entire record)
// patch (specific data will updated)
// delete (to delete the data)



// https://jsonplaceholder.typicode.com/users

// https://jsonplaceholder.typicode.com/albums


let data={name : "abdulrehaman"}
fetch("https://jsonplaceholder.typicode.com/users")

//console.log(data)

.then((data)=>{
    return data.json()
    //console.log(data)
})

.then(d => console.log(d))

.catch((e)=>{
    console.log(e)
})


fetch(" https://jsonplaceholder.typicode.com/albums")
.then(e => e.json())
.then(a => console.log(a))


// post method
fetch(" https://jsonplaceholder.typicode.com/albums", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Abdul",
    age: 23
  })
})
.then(res => res.json())
.then(data => console.log(data));




document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("clear").style.display = "none";
});
 
// fetch data
function getdata() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      let term = document.getElementById("term");
      let clearBtn = document.getElementById("clear");
 
      term.innerHTML = "";
 
      for (let i = 0; i < data.length; i++) {
        term.innerHTML +=
          "Name: " + data[i].name + "<br>" +
          "Username: " + data[i].username + "<br>" +
          "Email: " + data[i].email + "<br>" +
          "Geo: " + data[i].address.geo.lat + ", " +
          data[i].address.geo.lng + "<br><br>";
      }
 
      clearBtn.style.display = "inline-block";
    });
}
 
// clear data

function cleardata() {
  document.getElementById("term").innerHTML = "";
  document.getElementById("clear").style.display = "none";
}



