class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        # 3 pointers
        # 1 pointer moving to left while we do 2sum with the items on the right of it
        # start with sorting to avoid duplicate triplets
        result = []
        nums.sort()
        
        # We need index to compare the current and previous value to avoid duplicates 
        for i, value in enumerate(nums):
            if i > 0 and nums[i] == nums[i-1]:
                continue
            # Starting to do 2sum here
            left, right = i+1, len(nums)-1
            # loop until left and right pointers meet
            while left < right:
                threeSum = nums[i] + nums[left] + nums[right]
                # If the sum is bigger than expected, move right pointer to left by 1
                if threeSum > 0:
                    right -= 1
                # If the sum is smaller than expected, move left pointer to right by 1
                elif threeSum < 0:
                    left += 1
                else:
                    # add the found triplet to the result list
                    result.append([nums[i],nums[left],nums[right]])
                    # increment left to continue 2sum
                    left += 1
                    # to avoid duplicate triplets, jump to next number if it is same with the one before it
                    # 
                    while nums[left] == nums[left - 1] and left < right:
                        left += 1
        return result