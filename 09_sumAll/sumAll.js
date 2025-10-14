const sumAll = function(a, b) {
    if(a < 0 || b < 0 ||  typeof a !== 'number' || typeof b !== 'number' || !Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    }

    let sumi = 0;
    for(let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        sumi += i;
    }
    return sumi;
};

// Do not edit below this line
module.exports = sumAll;
