class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        # Insert everything in hashset. 
        # If the value already exist in hashset, return true
        hashset = set()
        
        for n in nums:
            if n in hashset:
                return True
            hashset.add(n)
        return False    
        
# Time O(n): scan the array once, Space O(n): insert all array in hashset once

# Alternative: Sort and scan array once while comparing 2 adjacent pointers