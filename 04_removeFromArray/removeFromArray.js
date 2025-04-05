const removeFromArray = function(arr, ...nums) {
    const resultArr = arr;

    for (const num of nums) {
        for (let i = 0; i < resultArr.length; i++) {
            if (resultArr[i] == num) {
                resultArr.splice(i,1)
                i = 0 // checks through the new array
            }
        }
    }

    return resultArr;
};

// Do not edit below this line
module.exports = removeFromArray;
