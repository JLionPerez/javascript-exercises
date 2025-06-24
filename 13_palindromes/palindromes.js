const palindromes = function (str) {
    str = str.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase()
    let cpyStr = str.split("").reverse().join("");

    if (cpyStr === str) { return true }
    return false
};

// Do not edit below this line
module.exports = palindromes;
