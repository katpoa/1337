/** RECURSIVE solutions
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root == null || root == undefined) {
        return 0;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
//     while the node has a left or a right
//     keep traversing, and add to depth count
//     compare count to maxCount, return
};

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if not root or root == None:
            return 0
        return max(self.maxDepth(root.left), self.maxDepth(root.right)) + 1

// Iterative solutions
var maxDepth = function(root) {
    let depth = 0;
    if (!root) { return 0; }
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let current = queue.shift();
            if (current.left) { queue.push(current.left); }
            if (current.right) { queue.push(current.right); }
        }
        depth++;
    }
    return depth;
};

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        depth = 0
        if not root:
            return 0
        queue = [root]
        while len(queue) > 0:
            length = len(queue)
            for i in range(length):
                node = queue.pop(0)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            depth += 1
        return depth
                
