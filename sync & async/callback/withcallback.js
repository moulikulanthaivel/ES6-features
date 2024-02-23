let employees = [
    
    {name:"mouli",Id:455646,salary:45500},
    {name:"navani",Id:953246,salary:85500},
    {name:"gopi",Id:53246,salary:75500}
    
    ]

    let createEmployee = (first,callback)=>{

                setTimeout(()=>{

                employees.push(first)
                callback()
                },2000)

    }
    
    let getEmployee = ()=>{

setTimeout(()=>{

let rows =""
for(employee of  employees){

    rows = rows + `<tr> 
    <td> ${employee.Id} </td>
    <td> ${employee.name} </td>
    <td> ${employee.salary} </td>

       
    </tr>`

    
}
document.getElementById('forms').innerHTML = rows

},4000)

    }

    createEmployee({name:"kavin",Id:6557,salary:68890},getEmployees)