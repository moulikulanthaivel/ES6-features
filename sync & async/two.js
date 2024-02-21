let album =((a,b,AM)=>{
if(AM === "sum"){

    return a+b;

}

if(AM === "multi"){
    return a*b;
}

})
let a1= album(10000,28333,"sum");
let a2= album(10000,28333,"multi");

console.log(a1);
console.log(a2);