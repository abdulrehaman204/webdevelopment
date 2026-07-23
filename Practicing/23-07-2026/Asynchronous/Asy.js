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


// logical tasks using asynchronous 
// Execute Three Tasks in Order Using Callbacks
function download(callback) {
    console.log("Downloading...");

    setTimeout(() => {
        console.log("Download Complete");
        callback();
    }, 2000);
}

function compress(callback) {
    console.log("Compressing...");

    setTimeout(() => {
        console.log("Compression Complete");
        callback();
    }, 2000);
}

function upload(callback) {
    console.log("Uploading...");

    setTimeout(() => {
        console.log("Upload Complete");
    }, 2000);
}

download(() => {
    compress(() => {
        upload();
    });
});


// Convert Callback Code into Promise
function getuser(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id:1,
                name:"Abdul",
            })
        }, 2000);
    })
}

getuser().then((user)=>{console.log(user)})


// Promise Chaining
function login() {
    return new Promise(resolve => {

        setTimeout(() => {
            resolve("Login Success");
        }, 1000);

    });
}

function getProfile() {
    return new Promise(resolve => {

        setTimeout(() => {
            resolve("Profile Loaded");
        }, 1000);

    });
}

function getOrders() {
    return new Promise(resolve => {

        setTimeout(() => {
            resolve("Orders Loaded");
        }, 1000);

    });
}

login().then(result => { console.log(result);
     return getProfile();})

.then(result => {console.log(result);
    return getOrders();})

.then(result => {console.log(result);});


// Async/Await with Error Handling
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Data Received");
            } else {
                reject("Server Error");
            }
        }, 2000);
    });
}

async function loadData() {
    try {
        const result = await fetchData();
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}

loadData();


// Run Promises in Parallel
function api1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("API 1");
        }, 2000);
    });
}

function api2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("API 2");
        }, 3000);
    });
}

function api3() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("API 3");
        }, 1000);
    });
}

async function loadAll() {
    const result = await Promise.all([
        api1(),
        api2(),
        api3()
    ]);
    console.log(result);
}

loadAll();


