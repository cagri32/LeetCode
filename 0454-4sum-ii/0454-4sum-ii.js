/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
  let sumMap = new Map();
  let count = 0;
  
  // First populate sum Map with sums of pairs from nums 1 and nums2
  // 
  for (let num1 of nums1){
    for( let num2 of nums2){
      const sum = num1 + num2;
      // Check if the sum key already exists in sumMap
      // If it exists, get its current count; otherwise, default to 0
      const currentCount = sumMap.get(sum) || 0;

      // Increment the count by 1 and update the Map with the new count
      sumMap.set(sum, currentCount + 1);    
    }
  }
  
    // Check for complement sums in arrays nums3 and nums4
    for (let num3 of nums3) {
        for (let num4 of nums4) {
            const complement = 0 - (num3 + num4);
            count += sumMap.get(complement) || 0;
        }
    }
  return count
};