
const employees = [
    { name: "John", salary: 55000 },
    { name: "David", salary: 85000 },
    { name: "Sarah", salary: 95000 },
    { name: "Mike", salary: 65000 }
];

let highSalary = employees.reduce((max, current) => current.salary > max.salary ? current : max);
console.log(highSalary);
