/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // reduce array to dictionary of keys: numbers, values: count of numbers
    let hash = nums.reduce((acc, curr)=>{
        acc[curr.toString()] ? 
            acc[curr.toString()] += 1 : 
            acc[curr.toString()] = 1
        return acc
    },{})
    // then sort keys of the dict, slice the first k ones and return in an array
    return [...Object.keys(hash).sort((a,b)=> hash[b]-hash[a]).slice(0,k)]
};