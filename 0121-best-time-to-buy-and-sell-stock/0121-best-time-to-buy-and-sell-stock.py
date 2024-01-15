class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # Create left and right pointers for buy and sell
        left, right = 0, 1
        maxProfit = 0
        
        # Loop until right pointer reaches to the end of prices list
        while right < len(prices):
            # if left is less than right, possible profit
            if prices[left] < prices[right]:
                profit = prices[right]-prices[left]
                # get the max of current profit and maxProfit
                maxProfit = max(maxProfit, profit)
            # if we find a right smaller than left, possibility of a better profit
            # update the left pointer to right
            else:
                left = right
            # move right by 1
            right += 1
        return maxProfit
            