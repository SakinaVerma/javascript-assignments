const employees = [
{ name: "John", salary: 50000 },
{ name: "David", salary: 70000 },
{ name: "Sarah", salary: 90000 },
{ name: "Mike", salary: 60000 }
];

let totalSalary=employees.reduce((Total,element)=> Total = Total+element.salary,0);
console.log(totalSalary);

//Average = sum of all elements ÷ number of elements

let lengthIs=employees.length;
console.log(lengthIs);

//Average

let average= totalSalary/lengthIs;

console.log(average);