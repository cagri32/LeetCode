/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hash = nums.reduce((acc, curr)=>{
        acc[curr.toString()] ? acc[curr.toString()] += 1 : acc[curr.toString()] = 1
        return acc
    },{})
    
    return [...Object.keys(hash).sort((a,b)=> hash[b]-hash[a]).slice(0,k)]
};