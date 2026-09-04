for (let i = 97; i <= 122; i++) {

    let character = String.fromCharCode(i);

    if ("aeiou".includes(character)) {
        console.log(character);
    }
}

// Using While Loop 

let j = 97;

while (j <= 122) {

    let character = String.fromCharCode(j);

    if ("aeiou".includes(character)) {
        console.log(character);
    }

    j++;
}