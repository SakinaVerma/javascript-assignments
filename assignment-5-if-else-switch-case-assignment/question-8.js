let browser = "Chrome";

if (browser === "Chrome") {
    console.log("Launching Chrome browser ");
} 
else if (browser === "Firefox") 
    {
    console.log("Launching Firefox browser");
     } 
else if (browser === "Edge") 
    {
    console.log("Launching Edge browser");
    } 
else if (browser === "Safari") 
    {
    console.log("Launching Safari browser ");
    } 
    
else {
    console.log("Wrong browser name ");
}
 // Using Switch Case:

let browser1 = "Firefox";

switch (browser1) {

    case "Chrome":
        console.log("Launching Chrome browser using Switch Case");
        break;

    case "Firefox":
        console.log("Launching Firefox browser using Switch Case");
        break;

    case "Edge":
        console.log("Launching Edge browser using Switch Case");
        break;

    case "Safari":
        console.log("Launching Safari browser using Switch Case");
        break;

    default:
        console.log("Please pass the right browser name.");
}