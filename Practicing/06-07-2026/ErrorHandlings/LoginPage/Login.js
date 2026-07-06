function login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin" && password === "12345") {
                resolve("Login Successful");
            } else {
                reject("Invalid Username or Password");
            }
        }, 2000);
    });
}

async function startLogin(username, password) {
    try {
        console.log("Logging in...");

        const result = await login(username, password);

        console.log(result);

    } catch (error) {
        console.log("Error:", error);

    } finally {
        console.log("Login Process Finished");
    }
}

startLogin("admin", "12345");