class Solution:
    def isPalindrome(self, s: str) -> bool:
        # Solution 1: Create new string with alphanumeric values only. 
        # Check it with its reverse
#         newString = ""
        
#         for char in s:
#             if char.isalnum():
#                 newString += char.lower()
#         return newString = newString[:: -1]
    
        # Solution 2: Two pointers
        # Write an Alphanumeric detector function
        
        # Initiate 2 pointers
        left, right = 0, len(s)-1
        
        # Iterate until pointers meet in the middle
        while left < right:
            # Increment left until finding an alphanumeric char
            while left < right and not self.alphaNum(s[left]):
                left+= 1
                
            # Decrement right until finding an alphanumeric char
            while right > left and not self.alphaNum(s[right]):
                right -= 1
            
            # If lowercase left is not same as lowercase right, return False
            if s[left].lower() != s[right].lower():
                return False
        # Update pointers to move towards the middle
            left, right = left + 1, right - 1
        return True
    
    def alphaNum(self,c):
            return (ord('A') <= ord(c) <= ord('Z') or
                    ord('a') <= ord(c) <= ord('z') or
                    ord('0') <= ord(c) <= ord('9'))
        