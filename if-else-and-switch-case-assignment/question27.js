let username = "admin";
let password = "admin123";

if (username === "admin" && password === "admin123") {

    console.log("Login Successful");

} else if (username !== "admin" && password !== "admin123") {

    console.log("Invalid Username and Password");

} else if (username !== "admin") {

    console.log("Invalid Username");

} else {

    console.log("Invalid Password");
}