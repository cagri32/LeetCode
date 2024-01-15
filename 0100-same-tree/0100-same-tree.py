# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        # Recursive DFS approach
        # Base Case: If both p and q are None, they are same
        if not q and not p:
            return True
        # Early checks to return False
        # If one of them is None or their values are different, they are not same
        if not q or not p or p.val != q.val:
            return False
        
        # Check if their left and right children are same
        leftChildrenSame = self.isSameTree(p.left, q.left)
        rightChildrenSame = self.isSameTree(p.right, q.right)
        
        # if both are same, return true. Otherwise false
        return leftChildrenSame and rightChildrenSame
        
        