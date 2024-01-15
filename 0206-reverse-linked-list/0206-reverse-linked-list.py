# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev, curr = None, head
        
        while curr:
            nxt = curr.next     # don't lose next pointer
            curr.next = prev    # change the next to the previous
            prev = curr         # change the previous to current
            curr = nxt          # change the current to next
        return prev
    
# Time O(n): iterate through the array, Space O(1): just a few new pointers


        

            