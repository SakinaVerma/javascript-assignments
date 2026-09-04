let amount = 1200;
let discount = 0;

if (amount >= 1000) {

    discount = amount * 20 / 100;

} else if (amount >= 500) {

    discount = amount * 10 / 100;

} else if (amount >= 250) {

    discount = amount * 5 / 100;

} else {

    discount = 0;
}

let finalAmount = amount - discount;

console.log("Original Amount: $" + amount);
console.log("Discount: $" + discount);
console.log("Final Amount: $" + finalAmount);