/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // if either concatenation of 2 strings are not same, return ""
    if (str1 + str2 !== str2 + str1) { return "" }
    // get the lengths of both strings
    let n = str1.length;
    let k = str2.length;

    // do math calculation of biggest common divisor with the lengths
    let gcds = function (x, y) {
        if (!y) { return x } // when the second input becomes 0, return the first one
        return gcds(y, x % y); // otherwise recursively call the function
    }

    let div = gcds (n, k); // calculate the common divisor length

    return str1.slice(0, div); // cut string from 0 to common divisor length
};