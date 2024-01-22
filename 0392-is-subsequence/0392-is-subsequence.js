/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length > t.length){ return false }
    let p1 = 0, p2= 0;
    
    while(p2 < t.length){
        if(s[p1]===t[p2]){
            p1++;
        }
        p2++;
    }
    
    if(p1 === s.length){
        return true
    }
    return false
    
    
};