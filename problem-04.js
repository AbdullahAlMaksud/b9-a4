function password(obj) {
    if(typeof obj !== 'object' || Array.isArray(obj)){
        return 'This is not an object. Please Provide a Object'
    }
    //একট্রা অংশ। প্রশ্নে চায় নাই।
    else if (Object.keys(obj).length < 3 || obj.birthYear.toString().length<4 ){
        return 'invalid'
    }
    const name = obj.name;
    const birthYear = obj.birthYear;
    const givenSiteName = obj.siteName;
    const siteName = givenSiteName.charAt(0).toUpperCase()+givenSiteName.slice(1);
    return `${siteName}#${name}@${birthYear}`
}


///Checking Part (OnlyMe)
const obj = { name: "kolimuddin" , birthYear: 1999 , siteName: "google" }
const obj2 = { name: "rahat" , birthYear: 2002, siteName: "Facebook" }
const obj3 = { name: "toky" , birthYear: 200, siteName: "Facebook" }
const obj4 = { name: "maisha" , birthYear: 2002 }
console.log(1., password(obj));
console.log(2., password(obj2));
console.log(3., password(obj3));
console.log(4., password(obj4));


///Checking Part (OnlyMe)-Extra
const obj5 = ['maksud', 34, true]
const obj6 = 234
const obj7 = true
const obj9 = NaN
// const obj10 = {name:"maksud", birthYear: 3002, site: 'maksud'};
console.log(500, password(obj5));
console.log(600, password(obj6));
console.log(700, password(obj7));
console.log(900, password(obj9));
// console.log(1000, password(obj10));