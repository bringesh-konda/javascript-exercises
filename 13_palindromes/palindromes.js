function isValid(ch) {
    const code = ch.charCodeAt(0);
    const isDigit = code >= 48 && code <= 57;
    const isUpper = code >= 65 && code <= 90;
    const isLower = code >= 97 && code <= 122;

    return isDigit || isUpper || isLower;
}

const palindromes = function (str) {
    let i = 0, j = str.length - 1;

    while(i < j) {
        while(i <= j && isValid(str[i]) == false) {
            i++;
        }

        while(i <= j && isValid(str[j]) == false) {
            j--;
        }

        if(str[i].toLowerCase() !== str[j].toLowerCase()) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
