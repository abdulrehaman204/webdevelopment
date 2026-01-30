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
 
 


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h3>Get Details</h3>
    <button onclick="getdata()">Get data</button>
    <button id="clear" onclick="cleardata()" style= "display:none">Clear</button>
    <p id="term"></p>
    <script src="./task.js"></script>
</body>
</html>