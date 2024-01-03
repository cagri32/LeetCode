class Solution:
    def countPairs(self, nums: List[int], target: int) -> int:
        # sort the array
        nums.sort()
        # Create left and right pointers on the array with the indices
        left, right = 0, len(nums) - 1
        count = 0
        
        while left < right:
            # if left+right is less than the target
            if nums[left] + nums[right] < target:
                # any pair with the right and (left or left -1 or left -2 etc) 
                # will work. Add them to the count since all those pairs will work
                count += (right - left)
                # move left pointer to one right to check if the new pair will work
                left += 1
            else:
                # if the sum >= target, move the right pointer to left
                right -= 1
        return count

