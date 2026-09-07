{
    var a = 100;
    let b = 200;
    const c = 300;
}

console.log(a);
console.log(b);
console.log(c);


// Output: 100(var - function scoped)
// Error(let - block scoped)
// never reached(const-block scoped)