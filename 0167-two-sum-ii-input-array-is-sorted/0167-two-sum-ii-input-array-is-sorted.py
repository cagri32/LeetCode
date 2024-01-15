class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        # Two pointers approach. 
        # One start from the beginning, the other start from the end
        left, right = 0, len(numbers) -1 
        
        # Loop until left and right meets or we find and return the result
        while left < right:
            # Calculate the current sum
            currentSum = numbers[left] + numbers[right]
            # If the sum is too big, make it smaller by moving right pointer to left by 1
            if currentSum > target:
                right -= 1
            # If the sum is too small, make it bigger by moving left pointer to right by 1
            elif currentSum < target:
                left += 1
            # We found the result. Return the indexes +1 
            else:
                return [left+1,right+1]
        return []
                