const reverseString = function(str) {
    const arr = str.split("")
    const results = []
    for (let i = arr.length; i >= 0; i--) {
        results.push(arr[i])
    }
    return results.join("")
};

// Do not edit below this line
module.exports = reverseString;
