# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        # DFS approach to check every node starting from the bottom
        # Calculate the height of left and right subtrees to find the diameter.
        # If it is bigger than the global diameter variable, update the global variable
        
        # A list to store the result (diameter) globally and make it mutable
        res = [0]
        
        # Calculates the height of the tree 
        # while updating the diameter with the max of heights at any node
        def dfs(root):
            # Base case, return 0 for None
            if not root:
                return 0
            
            # Recursively calculate the height of the left and right subtrees
            left = dfs(root.left)
            right = dfs(root.right)
            
            # Update the result by considering the diameter passing through the current node
            res[0] = max(res[0], left + right)
            
            # return the height of the tree
            return 1 + max(left, right)
        
        dfs(root)
        return res[0]
        
        