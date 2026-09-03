let environment = "QA";
let testType = "Regression";

switch (environment) {

    case "QA":

        switch (testType) {
            case "Smoke":
                console.log("Running Smoke Tests on QA Environment");
                break;

            case "Sanity":
                console.log("Running Sanity Tests on QA Environment");
                break;

            case "Regression":
                console.log("Running Regression Tests on QA Environment");
                break;

            default:
                console.log("Invalid Test Type");
        }
        break;

    case "STAGE":

        switch (testType) {
            case "Smoke":
                console.log("Running Smoke Tests on STAGE Environment");
                break;

            case "Sanity":
                console.log("Running Sanity Tests on STAGE Environment");
                break;

            case "Regression":
                console.log("Running Regression Tests on STAGE Environment");
                break;

            default:
                console.log("Invalid Test Type");
        }
        break;

    case "UAT":

        switch (testType) {
            case "Smoke":
                console.log("Running Smoke Tests on UAT Environment");
                break;

            case "Sanity":
                console.log("Running Sanity Tests on UAT Environment");
                break;

            case "Regression":
                console.log("Running Regression Tests on UAT Environment");
                break;

            default:
                console.log("Invalid Test Type");
        }
        break;

    case "PROD":

        switch (testType) {
            case "Smoke":
                console.log("Running Smoke Tests on PROD Environment");
                break;

            case "Sanity":
                console.log("Running Sanity Tests on PROD Environment");
                break;

            case "Regression":
                console.log("Running Regression Tests on PROD Environment");
                break;

            default:
                console.log("Invalid Test Type");
        }
        break;

    default:
        console.log("Invalid Environment");
}