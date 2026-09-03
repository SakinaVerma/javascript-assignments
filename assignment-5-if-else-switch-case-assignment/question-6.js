let environment = "QA";

switch (environment) {

    case "QA":
        console.log("Test cases are running in QA environment");
        break;

    case "Stage":
        console.log("Test cases are running in Stage environment");
        break;

    case "Dev":
        console.log("Test cases are running in Dev environment");
        break;

    case "UAT":
        console.log("Test cases are running in UAT environment");
        break;

    case "Prod":
        console.log("Test cases are running in Prod environment");
        break;

    default:
        console.log("Invalid environment");
}