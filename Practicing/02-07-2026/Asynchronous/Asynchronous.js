// Asynchronous 

// promises
let checkeven = new Promise((resolve, reject) => {
    let number = 4;
    if(number%2===0){
        resolve("Even number")
    }else{
        reject("Not an even")
    }
})
checkeven
.then((message)=>console.log("sucess"))
.catch((error)=>console.log("failure"))


// Promises (Modern Async)
let promise =new Promise((resolve, reject) => {
    let sucess = true;
    setTimeout(()=>{
        if(sucess){
            resolve("Data loaded")
        }else{
            reject("Error occured")
        }
    },2000)
})

promise
  .then(result => console.log(result))
  .catch(error => console.log(error));


// Wrapping Callbacks into Promises
function loadData(callback) {
    setTimeout(() => 
        callback("Data loaded"), 1000);
}
function promisifiedLoadData() {
    return new Promise((resolve) => {
        loadData((result) => 
            resolve(result));
    });
}
promisifiedLoadData().then((data) => 
    console.log(data));


// Async
let data = async()=>{
    let a = "Hello world"
    return a;
}

data().then((a)=>console.log(a))

// Await function 
let getdata = async()=>{
    let y = await "Hello! Abdul";
    console.log(y)
}
getdata()


// Async / Await (Best & Clean)
function fetchdata(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("data recieved")
        },2000);
    })
}

async function showdata() {
    console.log("fetching...")
    let result = await fetchdata();
    console.log(result)
}
showdata()



// Asynchronous logical tasks
// callback function
function getUser(callback) {
    setTimeout(() => {
        callback({
            id: 1,
            name: "Abdul"
        });
    }, 2000);
}

getUser((user) => {
    console.log(user);
});

// promoise creation
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

delay(3000)
    .then(() => console.log("Done"));

// promise rejection
function checkage(age){
    return new Promise((resolve, reject) => {
        if(age>=18){
            resolve("eligible")
        }else{
            reject("Not eligible")
        }
    })
}
checkage(15)
.then((er)=>console.log(er))
.catch((e)=>console.log(e))


// convert callback to promise
function getData(callback) {
    setTimeout(() => {
        callback("Data");
    }, 1000);
}
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data");
        }, 1000);
    });
}

getData()
    .then(data => console.log(data));

// promise chaining
function getUser() {
    return Promise.resolve({
        id: 1,
        name: "John"
    });
}
function getPosts(userId) {
    return Promise.resolve([
        "Post 1",
        "Post 2"
    ]);
}
getUser()
    .then(user => getPosts(user.id))
    .then(posts => console.log(posts))
    .catch(console.error);


// Async/await
async function fetchData() {
    try {
        const user = await getUser();

        const posts = await getPosts(user.id);

        console.log(posts);

    } catch (error) {
        console.error(error);
    }
}

fetchData();




