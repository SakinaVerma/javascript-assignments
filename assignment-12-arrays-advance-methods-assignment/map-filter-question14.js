const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
 let evenNumber=numbers.filter((element)=>element%2==0);

 let numberDouble=evenNumber.map((element)=>element*2);

 console.log(numberDouble);
