const repeatString = function(string, num) {
    const arr = []
    const err = "ERROR"
    if (num >= 0) {
        for(let i = 0; i < num; i++) {
            arr.push(string)
        }
        return arr.join("");
    }

    else {
        return err;
    }
};

// Do not edit below this line
module.exports = repeatString;
