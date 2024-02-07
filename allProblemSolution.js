function calculateMoney(ticketSale) {
    if (typeof ticketSale !== 'number' || ticketSale < 0) {
        return 'Please Input a Positive Number!'
    }
    const eachTicketPrice = 120;
    const totalTicketPrice = eachTicketPrice * ticketSale;
    const payToDoorKeeper = 500;
    const staffNumber = 8;
    const staffLaunchMoney = 50;
    const totalStaffLaunchMoney = staffNumber * staffLaunchMoney;
    const totalExpence = payToDoorKeeper + totalStaffLaunchMoney;
    const result = totalTicketPrice - totalExpence;
    return result;
}





function checkName(name) {
    if (typeof name !== 'string') {
        return "invalid";
    }
    const givenLastLetterShould = 'A,y,i,e,o,u,w'
    const lastLetterShould = givenLastLetterShould.toLowerCase();
    const nameInLowerCase = name.toLowerCase();
    const lastLetter = nameInLowerCase[nameInLowerCase.length - 1];
    const last = lastLetterShould.split(',');
    for (let item of last) {
        if (item === lastLetter) {
            return 'Good Name'
        }
    }
    return 'Bad Name';
}





function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Your input is not an Array. Please Input a Array!"
    }
    let arrayContainer = [];
    for (let item of array) {
        if (typeof item === 'number' && !isNaN(item)) {
            arrayContainer.push(item)
        }
    }
    return arrayContainer;
}





function password(obj) {
    if (typeof obj !== 'object' || Array.isArray(obj)) {
        return 'This is not an object. Please Provide a Object'
    }
    else if (Object.keys(obj).length < 3 || obj.birthYear.toString().length < 4) {
        return 'invalid'
    }
    const name = obj.name;
    const birthYear = obj.birthYear;
    const givenSiteName = obj.siteName;
    const siteName = givenSiteName.charAt(0).toUpperCase() + givenSiteName.slice(1);
    return `${siteName}#${name}@${birthYear}`
}





function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== "number") {
        return "invalid input"
    }
    let netIncome = [];
    for (const eachIncome of arr) {
        if (eachIncome >= 3000) {
            afterTax = (eachIncome - (eachIncome * 20 / 100));
            netIncome.push(afterTax);
        }
        else if (eachIncome < 3000) {
            netIncome.push(eachIncome);
        }
    }
    let totalIncome = 0;
    for (const eachNetIncome of netIncome) {
        totalIncome = totalIncome + eachNetIncome;
    }
    const savings = totalIncome - livingCost;
    if (savings >= 0) {
        return savings;
    }
    else if (savings < 0) {
        return "earn more"
    }
}