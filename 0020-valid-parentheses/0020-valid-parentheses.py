class Solution:
    def isValid(self, s: str) -> bool:
        # create a stack
        stack = []
        # create a hashmap for comparing opening and closing brackets
        pthsArr = {')':'(','}':'{',']':'[',}
        # loop through all chars in the string
        for ch in s:
            # if char is in the array, it means it is a closing bracket
            if ch in pthsArr:
                # Check if stack is not empty 
                # and the last item in stack is the matching bracket
                if stack and stack[-1] == pthsArr[ch]:
                    # remove the last item
                    stack.pop()
                else:
                    return False
            # if char is NOT in the array, it means it is an opening bracket
            # push it into the stack
            else:
                stack.append(ch)
        # at the end, if the stack is empty return true, otherwise false
        return len(stack) == 0

