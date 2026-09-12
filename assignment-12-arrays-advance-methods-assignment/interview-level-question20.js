
const employees = [
{ name: "John", department: "IT", salary: 60000 },
{ name: "David", department: "HR", salary: 50000 },
{ name: "Sarah", department: "IT", salary: 90000 },
{ name: "Mike", department: "HR", salary: 70000 },
{ name: "Alex", department: "IT", salary: 80000 }
];

 let deptName=employees.filter((element)=>element.department==="IT");
 console.log(deptName);

 let itDeptSalary=deptName.reduce((Total,element)=> Total=Total+element.salary,0);

 console.log(itDeptSalary);
 
