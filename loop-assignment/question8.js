//For Loop 

console.log("Uppercase Letters:");

for (let i = 65; i <= 90; i++) {
    let character = String.fromCharCode(i);
    console.log(character + " = " + i);
}

console.log("Lowercase Letters:");

for (let i = 97; i <= 122; i++) {
    let character = String.fromCharCode(i);
    console.log(character + " = " + i);
}

console.log("Numbers:");

for (let i = 48; i <= 57; i++) {
    let character = String.fromCharCode(i);
    console.log(character + " = " + i);
}


// Using While Loop 

console.log("Uppercase Letters:");

let i = 65;

while (i <= 90) {
    let character = String.fromCharCode(i);
    console.log(character + " = " + i);
    i++;
}

console.log("Lowercase Letters:");

i = 97;

while (i <= 122) {
    let character = String.fromCharCode(i);
    console.log(character + " = " + i);
    i++;
}

console.log("Numbers:");

i = 48;

while (i <= 57) {
    let character = String.fromCharCode(i);
    console.log(character + " = " + i);
    i++;
}