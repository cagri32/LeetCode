class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        # better solution with sliding window
        if len(s1) > len(s2) or len(s2) == 0:
            return False
        s1Count = {}
        windowCount = {}
        
        # Initialize frequencies for the first window in s2
        for char in s1:
            s1Count[char] = s1Count.get(char, 0) + 1
        for char in s2[:len(s1)]:
            windowCount[char] = windowCount.get(char, 0) + 1
            
        
        left, right = 0, len(s1) -1
        
        while right < len(s2):
            # now this is a anagram question
            # Check if the current window is an anagram of s1
            if s1Count == windowCount:
                return True
            
            # get the char at left pointer
            left_char = s2[left]
            # decrease its freq in window frequency since we are moving right
            windowCount[left_char] -= 1
            # if the new freq is 0, delete it
            if windowCount[left_char] == 0:
                del windowCount[left_char]
            
            # get the new right after sliding right by 1
            right += 1
            if right < len(s2):
                # to add into window count, get the char at the right pointer
                right_char = s2[right]
                # add it to the window
                windowCount[right_char] = windowCount.get(right_char, 0) + 1
        
            # get the new left after sliding right by 1
            left += 1
        return False
          # First Approach that works with n^2logn since I keep sorting in the loop
#         # if this was not a permutation, it would simply be a find substring question
#         # I believe it is a different version of that
#         # A sliding window makes sense in this case
#         # We start sliding a window with size len(s1)
#         if len(s1) > len(s2) or len(s2) == 0:
#             return False
        
#         left, right = 0, len(s1) - 1
#         s1Sorted = sorted(s1)
#         while right <= len(s2):
#             # now this is a palindrome question
#             if s1Sorted == sorted(s2[left:right+1]):
#                 return True
#             else:
#                 left += 1
#                 right += 1
#         return False