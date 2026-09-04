let environment = "QA";

switch (environment) {

    case "QA":
        console.log("Running Regression Test Suite");
        break;

    case "STAGE":
        console.log("Running Sanity Test Suite");
        break;

    case "DEV":
        console.log("Running Smoke Test Suite");
        break;

    case "UAT":
        console.log("Running UAT Test Suite");
        break;

    case "PROD":
        console.log("Running Production Smoke Test Suite");
        break;

    default:
        console.log("Invalid Environment");
}