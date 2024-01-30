/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let forward = nums.reduce((acc, curr)=> {
        let lastItem = acc.length !== 0 ? acc[acc.length-1] : 1
        if(acc.length !==nums.length) {acc.push(curr * lastItem)}
        return acc
    },[1])
    let backward = nums.reverse().reduce((acc, curr)=> {
        let lastItem = acc.length !== 0 ? acc[acc.length-1] : 1
        if(acc.length !==nums.length) {acc.push(curr * lastItem)}
        return acc
    },[1])
    return forward.map((value, index) => value * backward[backward.length-1-index]);
};