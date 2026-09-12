const numbers = [1, 2, 2, 3, 1, 4, 2, 3, 3];

let count = numbers.reduce((dupresult, number) => {
    dupresult[number] = (dupresult[number] || 0) + 1;
    return dupresult;
}, {});

console.log(count);