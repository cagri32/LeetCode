/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // If s is longer than t, it cant be a subsequence
    if(s.length > t.length){ return false }
    // create 2 pointers
    let p1 = 0, p2= 0;
    
    // iterate through t and s 
    while(p2 < t.length){
        // if the pointers show the same char, increase both pointers, 
        // otherwise just move the pointer of t
        if(s[p1]===t[p2]){
            p1++;
        }
        p2++;
    }
    // if all the chars in s are seen in t, return true
    return p1 === s.length
    
    
};