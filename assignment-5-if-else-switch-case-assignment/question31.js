let executionType = "regression";

switch (executionType) {

    case "smoke":
        console.log("Executing Smoke Tests");
        break;

    case "sanity":
        console.log("Executing Sanity Tests");
        break;

    case "regression":
        console.log("Executing Regression Tests");
        break;

    case "e2e":
        console.log("Executing End-to-End Tests");
        break;

    default:
        console.log("Invalid Execution Type");
}