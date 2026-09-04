let passengers = 5;

if (passengers >= 1 && passengers <= 3) {

    console.log("Mini");

} else if (passengers === 4) {

    console.log("Sedan");

} else if (passengers >= 5 && passengers <= 6) {

    console.log("SUV");

} else if (passengers > 6) {

    console.log("Please select a larger vehicle.");

} else {

    console.log("Invalid number of passengers.");

}