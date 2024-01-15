# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        # create a dummy node to be the head of the merged list
        dummy = ListNode()
        # tail will be moved as we add nodes
        tail = dummy
        
        # As long as list1 and list2 are not empty, loop. 
        # We will make sure one of them will be empty in the future
        while list1 and list2:
            # if the value of the head of list 1 is less, append it to dummy list
            # move list1 to the next, decreasing the size of list1
            if list1.val < list2.val:
                tail.next = list1
                list1 = list1.next
            # if the value of the head of list 2 is less than or equal to list1, append it to dummy list
            # move list2 to the next, decreasing the size of list2
            else:
                tail.next = list2
                list2 = list2.next
            # move the tail pointer so that new nodes can be appended
            tail = tail.next
        # if any of the lists is not empty by the end of the loop, append it to tail as a whole
        if list1:
            tail.next = list1
        elif list2:
            tail.next = list2
        # return dummy.next since we dont need the first dummy node in the head
        return dummy.next