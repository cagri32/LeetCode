class Solution:
    def mySqrt(self, x: int) -> int:
        # Create a search space with left and right pointers for binary search
        left, right = 0, x
        result = 0
        
        while left <= right:
            # find the middle value
            mid = left + ((right - left) // 2)
            # if middle number's square is bigger than x, update our search space
            # by changing the right pointer to the mid - 1
            if mid**2 > x:
                right = mid - 1
            # if middle number's square is less than x, update our search space
            # by changing the left pointer to the mid + 1
            elif mid**2 < x:
                left = mid + 1
                result = mid
            else:
                return mid
        return result

# Case example
# x = 10
# Search space [0,10]
# left = 0, right = 10, result = 0

# 1st iteration
# Entering loop since 0 <= 10
# mid = 0 + ((10-0)//2) = 5
# entering first if conditions since 5^2 = 25 > 10
# updating right pointer to mid-1 => right = 5-1 = 4

# 2nd iteration
# left = 0, right = 4, result = 0
# Entering loop since 0 <= 4
# mid = 0 + ((4-0)//2) = 2
# entering second  if conditions since 2^2 = 4 < 10
# updating left pointer to mid+1 => left = 2+1 = 3
# updating result to mid => result = 2

# 3rd iteration
# left = 3, right = 4, result = 2
# Entering loop since 3 <= 4
# mid = 3 + ((4-3)//2) = 3
# entering second  if conditions since 3^2 = 9 < 10
# updating left pointer to mid+1 => left = 3+1 = 4
# updating result to mid => result = 3

# 4th iteration
# left = 4, right = 4, result = 3
# Entering loop since 4 <= 4
# mid = 4 + ((4-4)//2) = 4
# entering second if condition since 4^2 = 16 > 10
# updating right pointer to mid-1 => right = 4-1 = 3

# 5th iteration, result = 3
# left = 4, right = 3
# Not entering loop since 4 > 3
# returning result = 3