//Question 2: difference between arr.splice(2, 1); and arr.splice(2, 0, 'new');

//Answer:
//arr.splice(2, 1)	Remove 1 element at index 2
//arr.splice(2, 0, 'new')	Remove nothing and add "new" at index 2


//Question 3:Remove the last 3 elements using splice()

let arr = ['AA', 'BB', 'CC', 'DD', 'EE'];

arr.splice(-3, 3);

console.log(arr);