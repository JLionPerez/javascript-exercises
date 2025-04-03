const removeFromArray = function(arr, num) {
    const resultsArr = arr;
    const index = arr.indexOf(num)
    resultsArr.splice(index, 1) //added count or else splice removes everything after the index
    return resultsArr;
};

// Do not edit below this line
module.exports = removeFromArray;
