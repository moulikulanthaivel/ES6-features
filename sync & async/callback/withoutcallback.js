let employees = [
    
{name:"mouli",Id:455646,salary:45500},
{name:"navani",Id:953246,salary:85500},
{name:"gopi",Id:53246,salary:75500}

]

let createEmployee = (emp)=>{

setTimeout((employees)=>{

employees.push(emp)
},5000)

}

let getEmployee = ()=>{

setTimeout(()=>{

let rows =""
for(employees of employees){
rows = rows + `<tr>

<td> ${employees.name} </td>
<td> ${employees.Id} </td>
<td>  ${employees.salary} </td>

</tr>`
}


document.getElementById('forms').innerHTML= rows

},8000)

}


createEmployee({name:'suki',Id:758668,salary:87575});
getEmployee()

















let employees=[ {id:101,name:"Rahul",sal:45000},
                {id:102,name:"Sonia",sal:55000}
                ]

let createEmployee=(emp,callback)=>{
    //represent time
    setTimeout(()=>{
        employees.push(emp)
        callback()
    },4000)
}

let getEmployees=()=>{
    setTimeout(()=>{
        let rows=""
        for(employee of employees){
            rows = rows +`<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.sal}</td>
                           </tr>`
        }
        document.getElementById('abc').innerHTML  = rows
    },2000)
}
createEmployee({id:103,name:"Priyanka",sal:65000},getEmployees)