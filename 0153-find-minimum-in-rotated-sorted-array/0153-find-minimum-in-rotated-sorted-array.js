/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0, r = nums.length -1;
    
    while (l < r){
        // Calculate middle number
        let m = Math.floor((l + (r - l)/ 2))

        // if middle is bigger or equal to right, update left to mid+1
        if(nums[m] > nums[r]){
            l = m + 1;
        } else { // if middle is smaller than right, update right to mid
            r = m;
        }
    }
    return nums[l]
};
