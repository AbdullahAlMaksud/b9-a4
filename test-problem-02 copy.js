function checkName(name) {
    if(typeof name !== 'string' || !isNaN(name)){
        return "invalid";
    }
    const givenLastLetterShould = 'A,y,i,e,o,u,w'
    const lastLetterShould = givenLastLetterShould.toLowerCase();
    const nameInLowerCase = name.toLowerCase();
    const lastLetter = nameInLowerCase[nameInLowerCase.length-1];
    const last = lastLetterShould.split(',');
    for(let item of last){
        if(item === lastLetter){
            return 'Good Name'
        }
    }
    return 'Bad Name';    
}


const name = "Salman";
const name2 = "RAFEE";
const name3 = "Jhankar";
const name4 = '199';
const name5 = ["Rashed"];
console.log(1., checkName(name));
console.log(2., checkName(name2));
console.log(3., checkName(name3));
console.log(4., checkName(name4));
console.log(5., checkName(name5));