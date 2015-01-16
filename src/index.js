var isArray = require("is_array");


function arrayIndexOf(array, value, fromIndex) {
    var i = fromIndex - 1,
        il = array.length - 1;

    while (i++ < il) {
        if (array[i] === value) {
            return i;
        }
    }

    return -1;
}

module.exports = function indexOf(array, value, fromIndex) {
    return isArray(array) ? arrayIndexOf(array, value, fromIndex || 0) : -1;
};
