//Question 1: splice() method return?

//Answer: - An array containing the removed elements

//Question 2: syntax for splice()?

//Answer:-array.splice(start, deleteCount, item1, item2, ...)

//Question 3: 

let arr = [1, 2, 3, 4, 5]; 
arr.splice(2, 0, 'a'); 
//console.log(arr);
console.log(arr.length); 

//Output : 6

//Question 4: To add elements without removing any, what should be the deleteCount parameter?

//Answer:  0

//Question 5:What happens when you use a negative start index in splice()?

//Answer:  It will counts from the end of the array.

