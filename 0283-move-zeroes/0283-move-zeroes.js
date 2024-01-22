/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // Initialize a pointer l to keep track of the position for non-zero elements.
    let l = 0;

    // Iterate through the array using pointer r.
    for (let r = 0; r < nums.length; r++) {
        // If the current element at nums[r] is not zero, perform a swap with nums[l].
        if (nums[r] !== 0) {
            [nums[r], nums[l]] = [nums[l], nums[r]];
            
            // Increment l to the next position for non-zero elements.
            l++;
        }
    }
    return nums
};