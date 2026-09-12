const employees = [
{ name: "John", salary: 50000 },
{ name: "David", salary: 80000 },
{ name: "Sarah", salary: 95000 },
{ name: "Mike", salary: 45000 }
];

let empSalary=employees.filter((element)=>element.salary>60000);
   let empName = empSalary.map((element)=>element.name);

console.log(empName);