let loanType = "Housing Loan";
let salary = 30000;

switch (loanType) {

    case "Car Loan":
        console.log("Interest Rate: 7%");
        break;

    case "Housing Loan":
        if (salary < 35000) {
            console.log("NOT APPLICABLE FOR Housing Loan");
        } else {
            console.log("Interest Rate: 6.5%");
        }
        break;

    case "Personal Loan":
        console.log("Interest Rate: 10%");
        break;

    case "Education Loan":
        console.log("Interest Rate: 5%");
        break;

    default:
        console.log("Invalid Loan Type");
}