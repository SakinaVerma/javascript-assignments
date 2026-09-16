function insertAt(array, index, elements) {
    array.splice(index, 0, ...elements);
}

let numbers = [1, 2, 5, 6];

insertAt(numbers, 2, [3, 4]);

console.log(numbers);