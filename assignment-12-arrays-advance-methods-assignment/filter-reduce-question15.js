const employees = [
    { name: "John", salary: 50000 },
    { name: "David", salary: 80000 },
    { name: "Sarah", salary: 95000 },
    { name: "Mike", salary: 45000 }
];

let empSalary = employees.filter((employee) => employee.salary > 60000);

let totalSalary = empSalary.reduce((total, employee) => total + employee.salary,0);

console.log(totalSalary);