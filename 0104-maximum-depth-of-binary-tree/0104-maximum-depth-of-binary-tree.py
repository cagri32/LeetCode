# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        # RECURSIVE SOLUTION
        if not root:
            return 0
        
        # Recursively calculate the depth of the left and right subtrees
        left_depth = self.maxDepth(root.left)
        right_depth = self.maxDepth(root.right)
        
        # Use the max of left or right and add 1 for the root
        return 1 + max(left_depth, right_depth)
    
#         # BFS SOLUTION
#         if not root:
#             return 0
        
#         level = 0
#         # Create a queue with the root element in it
#         q = deque([root])
        
#         # Iterate until the queue is empty. 
#         # We will empty it by popping elements as we go until all children are empty
#         while q:
#             # at every iteration, remove all items in the queue while adding their children
#             for i in range(len(q)):
#                 # remove node
#                 node = q.popleft()
#                 # append left and right child if they are not empty
#                 if node.left:
#                     q.append(node.left)
#                 if node.right:
#                     q.append(node.right)
#             # increase the level by 1
#             level += 1
#         return level
                
            