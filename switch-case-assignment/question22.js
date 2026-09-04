let profile = "admin";

switch (profile) {

    case "admin":
        console.log("Login with Admin Profile");
        break;

    case "buyer":
        console.log("Login with Buyer Profile");
        break;

    case "seller":
        console.log("Login with Seller Profile");
        break;

    case "guest":
        console.log("Login with Guest Profile");
        break;

    default:
        console.log("Invalid User Profile");
}