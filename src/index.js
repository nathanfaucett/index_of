var isEqual = require("is_equal"),
    isLength = require("is_length"),
    isObjectLike = require("is_object_like");


module.exports = indexOf;


function indexOf(array, value, fromIndex) {
    return (isObjectLike(array) && isLength(array.length)) ? arrayIndexOf(array, value, fromIndex || 0) : -1;
}

function arrayIndexOf(array, value, fromIndex) {
    var i = fromIndex - 1,
        il = array.length - 1;

    while (i++ < il) {
        if (isEqual(array[i], value)) {
            return i;
        }
    }

    return -1;
}
