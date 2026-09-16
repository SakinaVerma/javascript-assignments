let cart = ["Laptop", "Phone", "Key", "Earphone", "Mouse"];

// 1. Removeing the product at index 2
// 2. Adding 2 new products at the same position
cart.splice(2, 1, "Pen", "Book");

// 3. Removeing the last product
cart.pop();

// 4. Printing the final cart
console.log(cart);