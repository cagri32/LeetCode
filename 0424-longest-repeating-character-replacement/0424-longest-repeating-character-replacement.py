class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        # better solution: sliding window with updating a hashmap for chars and counts while sliding
        # this question is not really medium in my opinion
        count = {}
        maxLen = 0
        maxF = 0
        left= 0
        
        for right in range(len(s)):
            # add 1 to the count of the char at that index
            # get function checks if it exists. If not, puts 0
            count[s[right]] = 1 + count.get(s[right],0)
            maxF = max(maxF, count[s[right]])
            
            if (right - left + 1 - maxF) > k:
                count[s[left]] -= 1
                left += 1
            maxLen = max(maxLen, right - left + 1)
        return maxLen
        
        
        # This sounds like finding an interval
        # I would go with sliding window or 2 pointers for efficiency
        # start adding into string
        # after finding the first k chars that is not same as before, 
        # replace them with the same char before
        # if the next char is also same char continue adding
        # if it is not same calculate the length and check max of current and max
        # start building a new string while moving the left pointer to the right until we exclude the first different char
        
        