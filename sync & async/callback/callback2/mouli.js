let employees = [
{ID:21 ,NAME:"mouli",SALARY:25000},
{ID:21 ,NAME:"navani",SALARY:35000},
{ID:21, NAME:"gopi",SALARY:45000}

]

let createEmployee = (first,callback)=>{

setTimeout(()=>{

    employees.push(first)
    callback()
},2000)

}

let getEmployee = ()=>{

    setTimeout(()=>{

        let rows=""
        for(emp of employees){
            
            rows = rows + `<tr>   
                                
                            <td>${emp.ID} </td>
                            <td>${emp.NAME} </td>
                            <td>${emp.SALARY} </td>
                          
                            </tr>`

        }
        document.getElementById('assign').innerHTML = rows
        
    },4000)
    
}
createEmployee({ID:27, NAME:"manoj",SALARY:95000},getEmployee)
