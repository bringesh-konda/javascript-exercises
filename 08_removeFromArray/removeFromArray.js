const removeFromArray = function(arr, ...arg) {
    for(num of arg) {
        let ind = arr.indexOf(num);
        while(ind != -1) {
            arr.splice(ind, 1);
            ind = arr.indexOf(num);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
