const numbers = [1, 2, 2, 3, 1, 4, 2, 3, 3];

let countList = numbers.reduce((result, number) => {result[number] = (result[number] || 0) + 1;
    return result;
}, {});

console.log(countList);