function deleteInvalids(array) {
    if(!Array.isArray(array)){
        return "Your input is not an Array. Please Input a Array!"
    }
    let arrayContainer = [];
    for(let item of array){
        if(typeof item === 'number' && !isNaN(item)){
            arrayContainer.push(item)
        }
    }
    return arrayContainer;
}

const array = ['32', 43, NaN, 432];
console.log(deleteInvalids(array))