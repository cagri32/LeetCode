class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # First solution I can think of is sort both and check equality
        # Better solution hashmap with key as chars and values as counts
        # Then checking each count for equality
        
        # Return false immediately if the lengths are not same
        if len(s) != len(t):
            return False
        
        countS, countT = {}, {}
        
        # Iterate through both arrays and fill in the hashmaps
        for i in range(len(s)):
            countS[s[i]] = 1 + countS.get(s[i],0) # if key is not there, returns 0
            countT[t[i]] = 1 + countT.get(t[i],0)
        # Iterate through S hashmap to see if all counts are same with T hashmap
        for c in countS:
            if countS[c] != countT.get(c,0):
                return False
            
        return True
        
# Time O(s+t), Space