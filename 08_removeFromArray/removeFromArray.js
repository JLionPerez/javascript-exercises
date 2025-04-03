const removeFromArray = function(arr, ...nums) {
    const resultsArr = arr;
    for (const num of nums) {
        const index = arr.indexOf(num)
        resultsArr.splice(index, 1) 
    }
    return resultsArr;
};

// console.log(removeFromArray([1, 2, 3, 4], 3, 2))

// Do not edit below this line
module.exports = removeFromArray;
