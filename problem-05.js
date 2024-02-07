function monthlySavings(arr, livingCost) {
    if(!Array.isArray(arr) || typeof livingCost !=="number"){
        return "invalid input"
    }
    let netIncome = [];    
    for(const eachIncome of arr){
        if(eachIncome>=3000){
            afterTax = (eachIncome - (eachIncome * 20 /100));
            netIncome.push(afterTax);
        }
        else if(eachIncome<3000){
            netIncome.push(eachIncome);
        }
    }
    let totalIncome = 0;
    for(const eachNetIncome of netIncome){
        totalIncome = totalIncome+eachNetIncome;
    }
    
    const savings = totalIncome - livingCost;
    if(savings>=0){
        return savings;
    }
    else if(savings<0){
        return "earn more"
    }
}

const arr = [1000, 2000, 2500]
const livingCost = 5000;
console.log(monthlySavings(arr, livingCost))