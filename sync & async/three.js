let sum = ((a,b)=>{

    return a+b;
})

let multi = ((a,b)=>{

    return a*b;
})

let added = (a,b,callback)=>{

    return callback(a,b)
}

let a1= added(10,20,sum);
let a2= added(10,20,multi);


console.log(a1);
console.log(a2);

