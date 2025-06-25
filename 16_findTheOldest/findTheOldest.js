const findTheOldest = function(people) {
    let ages = [];
    let greatAge;
    const d = new Date();
    let year = d.getFullYear();
    let index;
    for ( let i = 0; i < people.length; i++ ) {
        if ( !('yearOfDeath' in people[i]) ) {
            ages.push( year - people[i].yearOfBirth )
        }
        else {
            ages.push(people[i].yearOfDeath - people[i].yearOfBirth)
        }
    }
    greatAge = Math.max(...ages)
    index = ages.indexOf(greatAge)
    return people[index]
};

// Do not edit below this line
module.exports = findTheOldest;
