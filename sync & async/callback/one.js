let showroom = (val1,val2,val3,Add)=>{

if(Add === "sum"){
return val1+ val2+ val3
}

if(Add === "multi"){
return val1* val2* val3
}

}

let value1 = showroom(100,200,300,"sum");
let value2 = showroom(100,200,300,"multi");
console.log(value1);
console.log(value2);
// let ExshowRoom = (val1,val2,val3,Add)=>{}

let exam =(tamil,english,maths,physics,chemistry,computerscience,mark)=>{

    if(mark === "pass"){

return tamil+english+maths+physics+chemistry+computerscience

    }


if(mark === "fail"){
    return console.log("your fail go to meet class teacher");
}

=
}
let result1 = exam(36,35,76,56,99,43,"pass");
let result2 = exam(36,35,76,56,99,43,"fail");

console.log(result1);
console.log(result2);
