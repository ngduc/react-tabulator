"use strict";
exports.__esModule = true;
function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
exports.clone = clone;
function isSameArray(a, b) {
    var i = a.length;
    if (i !== b.length) {
        return false;
    }
    while (i--) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
exports.isSameArray = isSameArray;
