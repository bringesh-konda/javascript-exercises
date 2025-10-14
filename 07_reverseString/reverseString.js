const reverseString = function(str) {
    rev_str = '';
    for(let i = str.length - 1; i >= 0; i--) {
        rev_str += str[i];
    }
    return rev_str;
};

// Do not edit below this line
module.exports = reverseString;
