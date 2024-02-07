function checkName(name) {
    if(typeof name !== 'string'){
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


const name = "Rashed";
console.log(checkName(name));