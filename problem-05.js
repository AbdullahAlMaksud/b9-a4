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
        return "“earn more”"
    }
}


///Checking Part (OnlyMe)
const arr = [1000, 2000, 3000], livingCost = 5400;
const arr2 = [1000, 2000, 2500], livingCost2 = 5000;
const arr3 = [900, 2700, 3400], livingCost3 = 10000;
const arr4 = 100, livingCost4 = [900, 2700, 3400];
console.log(1.,monthlySavings(arr, livingCost))
console.log(2.,monthlySavings(arr2, livingCost2))
console.log(3., monthlySavings(arr3, livingCost3))
console.log(4.,monthlySavings(arr4, livingCost4))