let number = 12345;
let reverse = "";

while (number > 0) {
    reverse = reverse + (number % 10);
    number = Math.floor(num / 10);
}

console.log("Reverse = " + reverse);