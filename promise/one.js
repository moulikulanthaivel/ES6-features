let result = (resolve,reject)=>{

let accBal = 21000 ;
 
accBal > 20000 ? resolve("you are passed") : reject("you are failed")

}

result((pass)=>{pass},(failed)=>{failed})
// console.log(result);




// let goToGoa = (success,failure)=>{
//     let acc_Bal = 1000;

//     acc_Bal > 40000 ? success("Go 2 Goa! Enjoy") 
//                     : failure("Go to PG! Sleep!")
// }

// goToGoa((msg)=>{
//     console.log(msg)
// },(err)=>{
//     console.log(err)
// })