/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    // this will give us another array with 
    // keys = numbers in the array
    // values = occurences
    let occurences = arr.reduce((acc, curr)=>{
        acc[curr] = (acc[curr] || 0) + 1
        return acc
    },{})
    let array = Object.values(occurences)
    let setOccurences = new Set(array);
    
    return array.length === setOccurences.size
    
};