const employees = [
{ name: "John", salary: 50000 },
{ name: "David", salary: 60000 },
{ name: "Sarah", salary: 70000 }
];

let totalSalary=employees.reduce((Total,empsalary)=>Total+empsalary.salary,0);

console.log(totalSalary);
