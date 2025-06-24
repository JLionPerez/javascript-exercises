const fibonacci = function(num) {
    let prePrev = 1;
    let prev = 1;
    let cur = 0;
    length = parseInt(num) - 2;

    if (num > 0 && num <= 2) { return 1; }

    if (parseInt(num) >= 0) {
        for (let i = 0; i < length; i++) {
            cur = prePrev + prev
            prePrev = prev
            prev = cur
        }
        return cur;
    }


    return "OOPS"
};

// Do not edit below this line
module.exports = fibonacci;
