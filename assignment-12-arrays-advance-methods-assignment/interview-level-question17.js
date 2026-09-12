const products = [
{ name: "Laptop", price: 80000 },
{ name: "Mouse", price: 1500 },
{ name: "Keyboard", price: 3000 },
{ name: "Monitor", price: 20000 }
];

let totalPrice = products.reduce((Total,element)=> Total= Total+element.price ,0);
console.log(totalPrice);