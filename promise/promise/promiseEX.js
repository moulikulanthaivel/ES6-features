let values = 0;

let evaluate = new Promise ((resolve,reject)=>{

setTimeout(()=>{

if(values){
    console.log("sucess");
} else{
    console.log("failure");
}

},4000)

})

evaluate.then((part1)=>{console.log(part1);})
.catch((part2)=>{console.log(part2);})