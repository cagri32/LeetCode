/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right  = nums.length -1
    
    while (left <= right){
        // Calculate middle index
        let mid = Math.floor((left + (right - left)/ 2))
        
         if (nums[mid] === target) {
          return mid;
        }
        // When dividing the roated array into two halves, one must be sorted.
        // Check if the left side is sorted
        if (nums[left] <= nums[mid]) {
          if (nums[left] <= target && target <= nums[mid]) {
            // target is in the left
            right = mid - 1;
          } else {
            // target is in the right
            left = mid + 1;
          }
        } 
        // Otherwise, the right side is sorted
        else {
          if (nums[mid] <= target && target <= nums[right]) {
            // target is in the right
            left = mid + 1;

          } else {
            // target is in the left
            right = mid - 1;
          }
        }
    }
    return -1
};