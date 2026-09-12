const employees = [
    { name: "John", age: 28, department: "IT", salary: 60000 },
    { name: "David", age: 35, department: "HR", salary: 50000 },
    { name: "Sarah", age: 30, department: "IT", salary: 90000 },
    { name: "Mike", age: 25, department: "Finance", salary: 70000 },
    { name: "Alex", age: 32, department: "IT", salary: 80000 }
];


//Task A: Get names of all IT employees.

let itEmployees = employees.filter((element) => element.department === "IT");

//console.log(itEmployees);

let itEmpNames = itEmployees.map((element) => element.name);
console.log("All IT employees names are:", itEmpNames);

//Task B: Get names of employees whose salary is greater than 70,000.

let empSalary = employees.filter((element) => element.salary > 70000);
let empName = empSalary.map((element) => element.name);
console.log("Employee name whose salary is greater than 70,000 :", empName);

//Task C: Calculate total salary of IT employees.

let itEmpSalary = itEmployees.reduce((Total, element) => Total = Total + element.salary, 0);

console.log("Total salary of IT employee :", itEmpSalary);

//Task D: Find the highest-paid employee.

let highSalary = employees.reduce((max, current) => current.salary > max.salary ? current : max);
console.log("Highest-paid employee :", highSalary);

//Task E: Calculate the average salary of all employees.

let totalSalary = itEmployees.reduce((Total, element) => Total = Total + element.salary, 0);
console.log("Total Salary of all Employees :", totalSalary);

//Avarage: sum of all elements ÷ number of elements

let averageSalary = totalSalary / employees.length;
console.log("Average Salary of all the employees : ", averageSalary);


//Task F:Create an array containing employee names in uppercase.

let empNameWithUppercase = employees.map((element) => element.name.toUpperCase());

console.log("Employees names in uppercase :", empNameWithUppercase)

//Task G: Find employees whose age is greater than 30 and return only their names.

let age = employees.filter((element) => element.age > 30);
console.log("Employees whose age is greater than 30 are : ", age);

let name = age.map((elemnt) => elemnt.name);
console.log("Employees whose age is greater than 30 name are : ", name);

//Task H:Find the total salary of employees whose age is greater than 30. 

let totalSal = age.reduce((Total, element) => Total = Total + element.salary, 0);
console.log("Total salary of employees whose age is greater than 30: ", totalSal);


