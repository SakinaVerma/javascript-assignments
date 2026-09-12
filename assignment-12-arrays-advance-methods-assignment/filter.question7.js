const users = [
{ name: "John", active: true },
{ name: "David", active: false },
{ name: "Sarah", active: true },
{ name: "Mike", active: false }
];

 let activeUser=users.filter((element)=>element.active===true);
  console.log(activeUser);