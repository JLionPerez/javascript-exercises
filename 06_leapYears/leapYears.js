const leapYears = function(year) {
    if ( year % 100 === 0 ) {
        let newYear = year/100
        if ( newYear % 4 === 0 ) {
            return true
        }
        else {
            return false
        }
    }
    else if ( year % 4 === 0 ) {
        return true
    } 
    else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
