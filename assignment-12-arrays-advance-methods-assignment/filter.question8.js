const employees = [
{ name: "John", salary: 50000 },
{ name: "David", salary: 75000 },
{ name: "Sarah", salary: 90000 },
{ name: "Mike", salary: 55000 }
];

let salary=employees.filter((element)=> element.salary>60000);
     console.log(salary);