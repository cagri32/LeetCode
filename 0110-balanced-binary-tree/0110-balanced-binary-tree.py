# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        # Recursively check right and left tree heights of all nodes
        # use the help of a helper function that returns if a tree is balanced and its height
        # we need the height because we need to check the parents balance using 
        self.balanced = True  # Initialize global variable

        def dfs(root):
            if not root:
                return 0
            
            left_height = dfs(root.left)
            right_height = dfs(root.right)
            
            if abs(left_height - right_height) > 1:
                self.balanced = False

            return 1 + max(left_height, right_height)
            
        dfs(root)
        return self.balanced