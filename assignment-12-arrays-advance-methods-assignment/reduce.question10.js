const numbers = [45, 78, 23, 90, 56, 12];

let maxNumber = numbers.reduce((max, current) => current > max ? current : max);

console.log(maxNumber);