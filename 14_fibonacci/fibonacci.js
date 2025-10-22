const fibonacci = function(num) {
    num = parseInt(num);
    if(num < 0)    return "OOPS";
    if(num == 0)    return 0;
    let a = 1, b = 1;
    if(num <= 2) {
        return a;
    }
    for(let i = 0; i < num - 2; i++) {
        let sum = a + b;
        a = b;
        b = sum;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
