let a = 11;
let b = 22;
let c;
c = a + b + a++ + b++ + ++a + ++b;
console.log("a=" + a);
console.log("b=" + b);
console.log("c=" + c);

//Output : a=13
//b=24
//c=103