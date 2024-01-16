class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        # if this was not a permutation, it would simply be a find substring question
        # I believe it is a different version of that
        # A sliding window makes sense in this case
        # We start sliding a window with size len(s1)
        if len(s1) > len(s2) or len(s2) == 0:
            return False
        
        left, right = 0, len(s1) - 1
        
        while right <= len(s2):
            # now this is a palindrome question
            if sorted(s1) == sorted(s2[left:right+1]):
                return True
            else:
                left += 1
                right += 1
        return False