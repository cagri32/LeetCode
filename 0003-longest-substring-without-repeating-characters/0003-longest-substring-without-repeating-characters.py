class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # Sliding Window Approach
        # Space O(n) Time O(n)
        # use set for finding duplicate 
        charSet = set()
        l = 0
        result= 0 
        
        for r in range(len(s)):
            # Remove all chars from left until we get rid of all duplicates
            # and increment left pointer at the same time
            while s[r] in charSet:
                charSet.remove(s[l])
                l += 1
            # if there is no duplicate, add chars from right
            charSet.add(s[r])
            # calculate the max of current string and the max we have
            result = max(result, r-l+1)
        return result
        
        # First Approach
        # every char needs to be unique
        # create an empty max length string starting from the beginning.
        # start adding chars to it until finding a repeat
        # as soon as we find a repeating char, we will start a new string 
        # while keeping the previously found longest string
        # before starting a new string, compare the lastly built string with the max length
        # if the new one is longer, update max
        
        # I will make the string into a char array because maintaining the arrays might be easier
        # or maybe not. not sure
        
        # maxVal = 0
        # newStr = ""
        # char_list = list(s)
        # print(char_list)
        # for i, c in enumerate(char_list):
        #     if c!= ' ' and c not in newStr:
        #         newStr += c
        #     else:
        #         maxVal = max(maxVal,len(newStr))
        #         print(newStr)
        #         newStr = char_list[i]
        # return max(maxVal,len(newStr))
                    