let environment = "QA";
let userProfile = "admin";

switch (environment) {

    case "QA":
        console.log("Running tests in QA");

        switch (userProfile) {
            case "admin":
                console.log("Login with Admin Profile");
                break;

            case "seller":
                console.log("Login with Seller Profile");
                break;

            case "buyer":
                console.log("Login with Buyer Profile");
                break;

            default:
                console.log("Invalid User Profile");
        }
        break;

    case "STAGE":
        console.log("Running tests in STAGE");

        switch (userProfile) {
            case "admin":
                console.log("Login with Admin Profile");
                break;

            case "seller":
                console.log("Login with Seller Profile");
                break;

            case "buyer":
                console.log("Login with Buyer Profile");
                break;

            default:
                console.log("Invalid User Profile");
        }
        break;

    case "PROD":
        console.log("Running tests in PROD");

        switch (userProfile) {
            case "admin":
                console.log("Login with Admin Profile");
                break;

            case "seller":
                console.log("Login with Seller Profile");
                break;

            case "buyer":
                console.log("Login with Buyer Profile");
                break;

            default:
                console.log("Invalid User Profile");
        }
        break;

    default:
        console.log("Invalid Environment");
}