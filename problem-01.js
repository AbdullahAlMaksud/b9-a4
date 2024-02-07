function calculateMoney(ticketSale) {
    if(typeof ticketSale !== 'number' || ticketSale<0){
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

const ticketSale = 10;
console.log(calculateMoney(ticketSale));