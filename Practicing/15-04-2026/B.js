function getdata(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((data)=>{
        let term = document.getElementById("term")
        let clearBtn = document.getElementById("clear")
        term.innerHTML = ""
        for(let i =0 ; i< data.length; i++){
            term.innerHTML +=
            "Name:"+data[i].name + "<br>" +
            "Username:"+data[i].username + "<br>"+
            "Email:"+data[i].email + "<br>"+
            "Geo:"+data[i].address.geo.let +","+
            data[i].address.geo.lng + "<br><br>";
        }
        clearBtn.style.display="inline-block";
    })
}


// cleardata
function cleardata(){
    document.getElementById("term").innerHTML="";
    document.getElementById("clear").style.display="none";
}