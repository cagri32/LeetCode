/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    // find the intersection and delete those values 
    // looks like a set problem
    
    let result = []
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    
    let ans1 = difference(set1,set2)
    let ans2 = difference(set2, set1)
    
    return [[...ans1], [...ans2]]
    
};

var difference = function(set1, set2){
    
    let result = new Set()
    // iterate over the values
    for(let e of set1)
    {
        if(!set2.has(e))
            result.add(e);
    }
 
    // returns values of differenceSet
    return result;
    
}