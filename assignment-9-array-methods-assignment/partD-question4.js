let shoppingCart = [];

// Adding 3 items:
shoppingCart.push("Apple");
shoppingCart.push("Banana");
shoppingCart.push("Milk");

// Removeing the last item:
shoppingCart.pop();

// Adding item at the beginning:
shoppingCart.unshift("KIwi");

// Joining all items with commas
console.log("Shopping List: " + shoppingCart.join(", "));