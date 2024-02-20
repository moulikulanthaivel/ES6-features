let costs = [120,320,210]

let new_cost= costs.map((cost)=>{
    return cost+100
})
console.log(new_cost);

let filt_number = new_cost.filter((new_cost)=>{
    new_cost%60 == 0
})filt_number
crossOriginIsolated