/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // sort all words to identify the same ones which were originally anagrams
    const sortedStrs = strs.map(str => str.split('').sort().join(''));
    // create a dict/hash table to store the counts of each variation
    const hash = {}
    
    // if the variation was not in hashmap, create a new key-value. Else, add it to the existing array
    for(let i =0; i < sortedStrs.length; i++){
        if(!hash[sortedStrs[i]]){
            hash[sortedStrs[i]] = [strs[i]];
        } else {
            hash[sortedStrs[i]].push(strs[i]);
        }
    }
    // return only the values of the hash
    return Object.values(hash);
};