let employees = [
   { id:8900,name:"mouli",salary:18999},
   { id:2133,name:"shiva",salary:8999},
   { id:8550,name:"loiua",salary:18779},
   { id:2120,name:"mouni",salary:18999}
]


let createEmp = ((emp)=>{

    return new Promise ((resolve,reject)=>{

setTimeout(()=>{

let values = true

if(values){
    resolve("success")
    employees.push(emp)
}

else{
    reject("failure")
}
    

},4000)


    })

})

let getEmp = ()=>{

setTimeout(()=>{

let rows = ""
employees.forEach((employee)=>{
rows = rows + ` <tr> 
<td> ${employee.id}  </td>
<td> ${employee.name} </td>
<td> ${employee.salary} </td>

</tr>`
})
document.getElementById('quick').innerHTML = rows

},3000)

}

createEmp( { id:900,name:"vel",salary:8999}).
then((mark1)=>{console.log(mark1);})
.catch((mark2)=>{console.log(mark2);})













// let createEmployee = (emp)=>{

// return new Promise((resolve,reject)=>{

//     setTimeout(()=>{

//         let flag = true;
//         flag ? resolve("sucess"): reject("failure")


//     },4000)

// })

// }

// createEmployee({id:8900,name:"mouli",salary:18999}=>{}).then((msg)=>{console.log(msg);})
// .catch((err)=>{console.log(err);})