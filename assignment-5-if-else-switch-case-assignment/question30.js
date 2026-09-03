let role = "Tester";

switch (role) {

    case "Admin":
        console.log("Full Application Access");
        break;

    case "Manager":
        console.log("Reports + User Management");
        break;

    case "Tester":
        console.log("Test Management");
        break;

    case "Developer":
        console.log("Development Module");
        break;

    case "Guest":
        console.log("Read Only Access");
        break;

    default:
        console.log("Invalid User Role");
}