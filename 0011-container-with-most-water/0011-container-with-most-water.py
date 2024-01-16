class Solution:
    def maxArea(self, height: List[int]) -> int:
        # now try 2 pointers for O(n)
        result = 0
        left, right = 0, len(height)-1
        
        while left < right:
            # calculate the area
            area = min(height[left],height[right])*(right-left)
            # get the max of previous max and current area
            result = max(result, area)
            
            # if left height is smaller, move left pointer to right by 1
            if height[left]< height[right]:
                left += 1
            # otherwise move the right one to left by 1 to scan all list
            else:
                right -= 1
            
        return result

        # First approach
        # no sorting
        # looks like n^2
        # not only 2 highest, need to find long and far from each other
        # Therefore, at every iteration, calculate min(item1, item2)* (index2-index1) and update max if the new result is bigger
        # n^2 solution:
        # result = 0
        # for index1 in range(len(height)):
        #     for index2 in range(index1+1, len(height)):
        #         area = min(height[index1],height[index2])*(index2-index1)
        #         if area > result:
        #             result = area
        # return result
                
        # now to save some time we can do:
        # skip all values index1 => index2