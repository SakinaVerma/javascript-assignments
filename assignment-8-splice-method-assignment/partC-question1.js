let colorsName = ['red', 'blue', 'green', 'yellow', 'purple'];

let removedColorName = colorsName.splice(2, 1);

console.log("Removed element:", removedColorName);
console.log("Modified array:", colorsName);


//Output: Removed element: [ 'green' ]
//        Modified array: [ 'red', 'blue', 'yellow', 'purple' ]      