/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let result = nums[0];
    let l = 0, r = nums.length -1;
    
    while (l <= r){
        // If right number is bigger than left, we get the leftmost as minimum
        if (nums[l] < nums[r]) {
            result = Math.min(result, nums[l])
            break;
        }
        
        // Calculate middle number
        let m = Math.floor((l + r) / 2)
        // Get the minimum of the result and middle
        result = Math.min(result, nums[m]);
        // if middle is bigger or equal to left, update left to mid+1
        if(nums[m] >= nums[l]){
            l = m + 1;
        } else { // if middle is smaller than left, update right to mid-1
            r = m - 1;
        }
    }
    return result
};