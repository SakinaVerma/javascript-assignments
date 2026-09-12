const numbers = [10, 15, 20, 25, 30, 35, 40];

let evenNumber=numbers.filter((element)=> element%2===0);

console.log(evenNumber);

//evenNumber=[ 10, 20, 30, 40 ]

let finalTotal=evenNumber.reduce((Total , element)=> Total = Total+element,0);
console.log(finalTotal);

