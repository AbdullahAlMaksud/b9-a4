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



///Checking Part (OnlyMe)
const ticketSale = 10;
const ticketSale2 = 1055;
const ticketSale3 = 93;
const ticketSale4 = -130;
console.log(1., calculateMoney(ticketSale));
console.log(2., calculateMoney(ticketSale2));
console.log(3., calculateMoney(ticketSale3));
console.log(4., calculateMoney(ticketSale4));

///Checking Part (OnlyMe)-Extra
const ticketSale5 = ['Maksud', true, {sale:40}];
console.log(500., calculateMoney(ticketSale5));