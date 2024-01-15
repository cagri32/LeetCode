# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        # DFS Recursive approach
        # Go through nodes to find the same value and same children.
        # After finding the same value, check isSameTree function and return the result
        if not subRoot: return True
        if not root: return False
        
        # if they are same, return true
        if self.isSameTree(root, subRoot):
            return True
        
        # Check if right or left subtrees are same with the subroot
        return self.isSubtree(root.left,subRoot) or self.isSubtree(root.right,subRoot)
        

    # Use the helper function isSameTree
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        # Recursive DFS approach
        # Base Case: If both p and q are None, they are same
        if not q and not p:
            return True
        if not q or not p or p.val != q.val:
            return False

        # Check if their left and right children are same
        leftChildrenSame = self.isSameTree(p.left, q.left)
        rightChildrenSame = self.isSameTree(p.right, q.right)

        return leftChildrenSame and rightChildrenSame


        