/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let result = nums[0];
    let l = 0, r = nums.length -1;
    
    while (l < r){
        // Calculate middle number
        let m = Math.floor((l + (r - l)/ 2))

        // if middle is bigger or equal to left, update left to mid+1
        if(nums[m] > nums[r]){
            l = m + 1;
        } else { // if middle is smaller than left, update right to mid-1
            r = m;
        }
    }
    return nums[l]
};
