const sumAll = function(a,b) {
    let sum = 0;
    let startVal = a;
    let endVal = b;

    if ( (startVal > 0 && endVal > 0) && (Number.isInteger(a)) && (Number.isInteger(b)) ) {
        if ( a > b ) {  // adds from the least to greatest values
            startVal = b;
            endVal = a;
        } 

        for (let i = startVal; i <= endVal; i++) {
            sum += startVal;
            startVal++
        }
        return sum;
    }
    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
